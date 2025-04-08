import { Dialog } from "@rds/react-dialog";

export function Large() {
  return (
    <Dialog.Root modal size="lg">
      <Dialog.Trigger>Open large modal</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Title</Dialog.Title>
        <p>Hello world modal</p>
        <Dialog.Close>Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}
