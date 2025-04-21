import { Slot } from "@rds/react-slot";
import "@rds/styles/button.css";
import { mergeClasses } from "@rds/utils";
import {
  type ButtonHTMLAttributes,
  Children,
  type ComponentRef,
  ElementType,
  forwardRef,
  type ReactElement,
} from "react";

type ButtonVariants =
  | {
      size?: "lg" | "md";
      variant?:
        | "primary"
        | "secondary"
        | "tertiary"
        | "warning"
        | "warning-outline";
    }
  | {
      size?: "lg" | "md" | "sm";
      variant: "icon" | "icon-transparent";
    };

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    asChild?: boolean;
  };

export const Button = forwardRef<ComponentRef<"button">, ButtonProps>(
  (
    {
      className,
      children,
      size = "md",
      variant = "primary",
      asChild,
      ...props
    },
    ref
  ) => {
    const buttonClassName = mergeClasses(
      /* Base */
      "rkt-button",

      /* Size */
      size === "sm" && "rkt-button--small",
      size === "md" && "rkt-button--medium",
      size === "lg" && "rkt-button--large",

      /* Variant */
      variant === "secondary" && "rkt-button--secondary",
      variant === "tertiary" && "rkt-button--tertiary",
      variant === "warning" && "rkt-button--warning",
      variant === "warning-outline" && "rkt-button--warning-outline",
      variant === "icon" && "rkt-button--icon",
      variant === "icon-transparent" &&
        "rkt-button--icon rkt-button--icon-transparent",

      /* Custom */
      className
    );

    const buttonProps = {
      ...props,
      className: buttonClassName,
      "data-size": size,
      "data-variant": variant,
      ref,
    };

    if (asChild && Children.count(children) === 1) {
      const child = Children.only(children) as ReactElement<any, ElementType>;
      return <Slot {...buttonProps}>{child}</Slot>;
    }

    const wrappedChildren = Children.map(children, (child) => {
      if (
        Children.count(children) > 1 &&
        (typeof child === "string" || typeof child === "number")
      ) {
        return <span>{child}</span>;
      }

      return child;
    });

    return <button {...buttonProps}>{wrappedChildren}</button>;
  }
);

Button.displayName = "Button";
