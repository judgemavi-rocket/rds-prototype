import { Button } from "@rds/react-button";
import { DropdownMenu } from "@rds/react-dropdown-menu";

export function CustomTrigger() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger as={Button}>Custom trigger</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Items 1</DropdownMenu.Item>
        <DropdownMenu.Item>Items 1</DropdownMenu.Item>
        <DropdownMenu.Item>Items 1</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
