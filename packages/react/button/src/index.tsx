import "@rds/styles/button.css";
import { mergeClasses } from "@rds/utils";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled = false, className, children, ...props }, ref) => {
    return (
      <button
        className={mergeClasses(
          "button",
          disabled ? "button--is-disabled" : "",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
