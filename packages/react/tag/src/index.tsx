import "@rds/styles/tag.css";
import { mergeClasses } from "@rds/utils";
import type { FC, HTMLAttributes } from "react";

export type TagVariants =
  | "default"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "unavailable"
  | "warning";

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: TagVariants;
}

export const Tag: FC<TagProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const variantClass = variant === "default" ? null : `rkt-tag--${variant}`;

  return (
    <div
      className={mergeClasses("rkt-tag", variantClass, className)}
      data-variant={variant}
      {...props}
    >
      {children}
    </div>
  );
};
