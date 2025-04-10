import { mergeProps } from "@rds/utils";
import type { ReactElement, Ref, RefObject } from "react";
import { cloneElement, forwardRef, isValidElement } from "react";

function mergeRefs<T = any>(
  refs: Array<RefObject<T> | Ref<T> | null | undefined>
) {
  return (value: T) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as RefObject<T | null>).current = value;
      }
    });
  };
}

interface SlotProps {
  children: ReactElement<any>;
  [key: string]: any;
}

export const Slot = forwardRef<any, SlotProps>((props, ref) => {
  const { children, ...slotProps } = props;

  if (!isValidElement(children)) {
    return null;
  }

  return cloneElement(children, {
    ...mergeProps(
      slotProps as Record<string, unknown>,
      children.props as Record<string, unknown>
    ),
    ref: mergeRefs([ref, (children as any).ref]),
  } as any);
});

Slot.displayName = "Slot";
