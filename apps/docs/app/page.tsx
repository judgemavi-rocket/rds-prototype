import { Button } from "@tiny-bits/react-button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@tiny-bits/react-dialog";
import "@tiny-bits/react-dialog/styles.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@tiny-bits/react-popover";

export default function Home() {
  return (
    <div>
      <main>
        <Button>Button</Button>
        <Button disabled>Button</Button>
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <p>Hello world</p>
            <DialogClose>Close</DialogClose>
          </DialogContent>
        </Dialog>
        <Dialog modal>
          <DialogTrigger>Open modal</DialogTrigger>
          <DialogContent>
            <p>Hello world modal</p>
            <DialogClose>Close</DialogClose>
          </DialogContent>
        </Dialog>
        <Popover>
          <PopoverTrigger>Open Popover</PopoverTrigger>
          <PopoverContent>
            <h2>Popover Title</h2>
            <p>This is the popover content.</p>
            <input type="text" autoFocus />
            <button>Submit</button>
          </PopoverContent>
        </Popover>
      </main>
      <footer></footer>
    </div>
  );
}
