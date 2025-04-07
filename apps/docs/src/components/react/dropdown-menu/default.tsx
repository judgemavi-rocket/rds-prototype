import { DropdownMenu } from "@rds/react-dropdown-menu";

export function Default() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Items 1</DropdownMenu.Item>
        <DropdownMenu.Item>Items 1</DropdownMenu.Item>
        <DropdownMenu.Item>Items 1</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
