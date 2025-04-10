import { Dialog } from "@rds/react-dialog";

export function Default() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Dismiss />
        <Dialog.Title>Title</Dialog.Title>
        <p>Hello world dialog</p>
        <Dialog.Actions>
          <Dialog.Close className="ml-auto mr-0">Close</Dialog.Close>
        </Dialog.Actions>
      </Dialog.Content>
    </Dialog.Root>
  );
}
