import { Button } from "@rds/react-button";
import { DropdownMenu } from "@rds/react-dropdown-menu";

export function WithSeparators() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger as={Button}>With Separators</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Items 1</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Items 2</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Items 3</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
