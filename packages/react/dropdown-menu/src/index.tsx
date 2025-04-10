import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import "@rds/styles/dropdown-menu.css";
import { mergeClasses } from "@rds/utils";
import { type ComponentProps, forwardRef } from "react";

const DropdownMenuTrigger = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof MenuButton>
>((props, ref) => {
  return (
    <MenuButton
      {...props}
      className={
        props.as
          ? props.className
          : mergeClasses("dropdown-menu__trigger", props.className)
      }
      ref={ref}
    />
  );
});

const DropdownMenuContent = forwardRef<
  HTMLElement,
  ComponentProps<typeof MenuItems>
>((props, ref) => {
  return (
    <MenuItems
      {...props}
      anchor={props.anchor || "bottom start"}
      as={props.as || "ul"}
      className={
        props.as
          ? props.className
          : mergeClasses("dropdown-menu__content", props.className)
      }
      ref={ref}
    />
  );
});

const DropdownMenuItem = forwardRef<
  HTMLElement,
  ComponentProps<typeof MenuItem>
>((props, ref) => {
  return (
    <MenuItem
      {...props}
      as={props.as || "li"}
      className={
        props.as
          ? props.className
          : mergeClasses("dropdown-menu__item", props.className)
      }
      ref={ref}
    />
  );
});

const DropdownMenuSeparator = forwardRef<
  HTMLElement,
  ComponentProps<typeof MenuSeparator>
>((props, ref) => {
  return (
    <MenuSeparator
      {...props}
      as={props.as ?? "hr"}
      className={
        props.as
          ? props.className
          : mergeClasses("dropdown-menu__separator", props.className)
      }
      ref={ref}
    />
  );
});

export const DropdownMenu = {
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Root: Menu,
  Separator: DropdownMenuSeparator,
  Trigger: DropdownMenuTrigger,
};
