"use client";

import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  createContext,
} from "react";
import { Align, Side, calculatePosition } from "@rds/utils";

type PopoverContextType = {
  open: boolean;
  openPopover: () => void;
  closePopover: () => void;
  triggerRef?: RefObject<HTMLButtonElement | null>;
};

const PopoverContext = createContext<PopoverContextType>({
  open: false,
  openPopover: () => {},
  closePopover: () => {},
});

type ProviderProps = {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function PopoverProvider({
  children,
  open,
  onOpenChange,
}: ProviderProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <PopoverContext.Provider
      value={{
        open,
        openPopover: () => onOpenChange(true),
        closePopover: () => onOpenChange(false),
        triggerRef,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
}

export function usePopover() {
  const context = useContext(PopoverContext);
  if (Object.keys(context).length === 0) {
    throw new Error("usePopover must be used within a PopoverProvider");
  }
  return context;
}

type PopoverProps = {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

function Popover({ children, open = false, onOpenChange }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(open);
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };
  return (
    <PopoverProvider open={isOpen} onOpenChange={handleOpenChange}>
      {children}
    </PopoverProvider>
  );
}

type PropoverContentProps = PropsWithoutRef<HTMLAttributes<HTMLDivElement>> & {
  side?: Side;
  align?: Align;
  avoidCollisions?: boolean;
};

const PopoverContent = ({
  children,
  side = "bottom",
  align = "start",
  avoidCollisions = true,
  ...props
}: PropoverContentProps) => {
  const { open, closePopover, triggerRef } = usePopover();
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const popover = popoverRef.current;
    if (!popover) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopover();
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (popover.contains(event.target as Node)) {
        return;
      }
      closePopover();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [closePopover]);

  useEffect(() => {
    const popover = popoverRef.current;
    if (!popover) {
      return;
    }
    if (open) {
      popover.showPopover();
    } else {
      popover.hidePopover();
    }
  }, [open]);

  const [contentYPosition, setContentYPosition] = useState({});

  const updatePosition = useCallback(() => {
    if (triggerRef?.current && popoverRef.current) {
      const pos = calculatePosition(
        triggerRef.current,
        popoverRef.current,
        side,
        align,
        avoidCollisions
      );
      setContentYPosition(pos);
    }
  }, [side, align, avoidCollisions]);

  useEffect(() => {
    if (open) {
      updatePosition();
    }
    if (!avoidCollisions) {
      return;
    }
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [updatePosition, avoidCollisions, open]);

  return (
    <div
      popover="auto"
      {...props}
      ref={popoverRef}
      style={{
        position: "fixed",
        ...contentYPosition,
      }}
    >
      {children}
    </div>
  );
};

type DialogTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

const PopoverTrigger = (props: DialogTriggerProps) => {
  const { openPopover, triggerRef } = usePopover();
  return (
    <button type="button" {...props} onClick={openPopover} ref={triggerRef} />
  );
};

export { PopoverContent, PopoverTrigger, Popover };
