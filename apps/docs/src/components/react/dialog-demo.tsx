import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@rds/react-dialog";

export function DialogDemoComponent() {
  return (
    <Dialog modal>
      <DialogTrigger>Open modal</DialogTrigger>
      <DialogContent>
        <p>Hello world modal</p>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
