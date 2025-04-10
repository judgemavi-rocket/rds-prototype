import { Button } from "@rds/react-button";
import { DropdownMenu } from "@rds/react-dropdown-menu";

export function Disabled() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger as={Button}>Disabled</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item disabled>Items 1</DropdownMenu.Item>
        <DropdownMenu.Item disabled>Items 2</DropdownMenu.Item>
        <DropdownMenu.Item disabled>Items 3</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
