import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@tiny-bits/react-dialog';
import '@tiny-bits/react-dialog/styles.css';

export default function Home() {
  return (
    <div>
      <main>
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
      </main>
      <footer></footer>
    </div>
  );
}
