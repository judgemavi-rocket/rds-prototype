import { Dialog } from "@rds/react-dialog";

export function Modal() {
  return (
    <Dialog.Root modal>
      <Dialog.Trigger>Open modal</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Title</Dialog.Title>
        <p>Loreum ipsum</p>
        <Dialog.Close>Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}
