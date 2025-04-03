import "@rds/styles/button.css";
import { mergeClasses } from "@rds/utils";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import "@rds/styles/button.css";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "lg" | "md";
  variant?: "primary" | "secondary" | "tertiary" | "warning" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, size = "lg", variant = "primary", ...props },
    ref
  ) => {
    return (
      <button
        className={mergeClasses("rkt-button", className)}
        ref={ref}
        {...props}
        data-size={size}
        data-variant={variant}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
