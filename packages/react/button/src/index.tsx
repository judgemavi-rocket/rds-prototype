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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "lg" | "md";
  variant?: "primary" | "secondary" | "tertiary" | "warning" | "icon";
  asChild?: boolean;
}

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
      "rkt-button",
      size === "lg" && "rkt-button--large",
      variant === "secondary" && "rkt-button--secondary",
      variant === "tertiary" && "rkt-button--tertiary",
      variant === "warning" && "rkt-button--warning",
      variant === "icon" && "rkt-button--icon",
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
