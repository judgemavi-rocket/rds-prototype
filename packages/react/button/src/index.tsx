import "@rds/styles/button.css";
import { mergeClasses } from "@rds/utils";
import { ButtonHTMLAttributes, Children, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "lg" | "md";
  variant?: "primary" | "secondary" | "tertiary" | "warning" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, size = "md", variant = "primary", ...props },
    ref
  ) => {
    // Wrap text nodes in spans for consistent CSS targeting
    const wrappedChildren = Children.map(children, (child) => {
      if (typeof child === "string" || typeof child === "number") {
        return <span>{child}</span>;
      }
      return child;
    });

    return (
      <button
        className={mergeClasses(
          "rkt-button",
          size === "lg" && "rkt-button--large",
          variant === "secondary" && "rkt-button--secondary",
          variant === "tertiary" && "rkt-button--tertiary",
          variant === "warning" && "rkt-button--warning",
          variant === "icon" && "rkt-button--icon",
          className
        )}
        ref={ref}
        {...props}
        data-size={size}
        data-variant={variant}
      >
        {wrappedChildren}
      </button>
    );
  }
);

Button.displayName = "Button";
