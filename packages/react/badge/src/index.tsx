import "@rds/styles/badge.css";
import { mergeClasses } from "@rds/utils";
import type { FC, HTMLAttributes, PropsWithChildren } from "react";

type ColorfulVariants = "info" | "success" | "warning";
type LightVariants = `${ColorfulVariants}-light`;

export type BadgeVariants =
  | "default"
  | "primary"
  | ColorfulVariants
  | LightVariants;

interface BadgeProps
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  className?: string;
  content: string | number;
  variant?: BadgeVariants;
}

export const Badge: FC<BadgeProps> = ({
  children,
  className,
  content,
  variant = "default",
  ...props
}) => {
  const variantClass =
    variant === "default" ? null : `rkt-badge__content--${variant}`;

  if (!children) {
    return (
      <span
        className={mergeClasses("rkt-badge", variantClass, className)}
        data-variant={variant}
      >
        {content}
      </span>
    );
  }

  return (
    <div className="rkt-badge__wrapper" {...props}>
      {typeof children === "string" ? (
        <span className="rkt-badge__label">{children}</span>
      ) : (
        children
      )}
      <span
        className={mergeClasses("rkt-badge__content", variantClass, className)}
        data-variant={variant}
      >
        {content}
      </span>
    </div>
  );
};
