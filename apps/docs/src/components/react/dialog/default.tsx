import { Dialog } from "@rds/react-dialog";

export function Default() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Title</Dialog.Title>
        <p>Hello world dialog</p>
        <Dialog.Close>Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}
