import "@rds/styles/button.css";
import { mergeClasses } from "@rds/utils";
import { ButtonHTMLAttributes, forwardRef, ReactElement } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement;
  iconAlignment?: "left" | "right";
  size?: "lg" | "md";
  variant?: "primary" | "secondary" | "tertiary" | "warning" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      size = "md",
      variant = "primary",
      icon,
      iconAlignment = "left",
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={mergeClasses("rkt-button", className)}
        ref={ref}
        {...props}
        data-size={size}
        data-variant={variant}
        data-with-icon={!!icon && variant !== "icon" ? true : undefined}
        data-icon-alignment={icon ? iconAlignment : undefined}
      >
        {icon && iconAlignment === "left" ? icon : null}
        {children}
        {icon && iconAlignment === "right" ? icon : null}
      </button>
    );
  }
);

Button.displayName = "Button";
