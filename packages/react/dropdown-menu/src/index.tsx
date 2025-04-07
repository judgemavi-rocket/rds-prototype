import {
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuItem,
  MenuItemProps,
  MenuItems,
  MenuItemsProps,
} from "@headlessui/react";
import "@rds/styles/dropdown-menu.css";
import { mergeClasses } from "@rds/utils";
import { ElementType, forwardRef } from "react";

const DropdownMenuTrigger = forwardRef<
  HTMLButtonElement,
  MenuButtonProps<ElementType>
>((props, ref) => {
  return (
    <MenuButton
      {...props}
      className={mergeClasses("dropdown-menu__trigger", props.className)}
      ref={ref}
    />
  );
});

const DropdownMenuContent = forwardRef<
  HTMLElement,
  MenuItemsProps<ElementType>
>((props, ref) => {
  return (
    <MenuItems
      {...props}
      anchor={props.anchor || "bottom start"}
      as={props.as || "ul"}
      className={mergeClasses("dropdown-menu__content", props.className)}
      ref={ref}
    />
  );
});

const DropdownMenuItem = forwardRef<HTMLElement, MenuItemProps<ElementType>>(
  (props, ref) => {
    return (
      <MenuItem
        {...props}
        as={props.as || "li"}
        className={mergeClasses("dropdown-menu__item", props.className)}
        ref={ref}
      />
    );
  }
);

export const DropdownMenu = {
  Root: Menu,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
