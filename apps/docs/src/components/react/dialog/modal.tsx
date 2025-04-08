import { Dialog } from "@rds/react-dialog";

export function Modal() {
  return (
    <Dialog.Root modal>
      <Dialog.Trigger>Open modal</Dialog.Trigger>
      <Dialog.Content>
        <p>Hello world modal</p>
        <Dialog.Close>Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}
