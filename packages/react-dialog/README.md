# Tiny Bits React Dialog

Zero dependency, accessible, and composable React dialog component built on top of the native `<dialog>` element.

## Features

- Fully controlled or uncontrolled usage
- Modal option for modal behavior with backdrop added
- Accessible, using native `<dialog>` element
- Composable API with separate trigger and close buttons
- TypeScript support

## Installation

To install the dialog component in your project, run:

```bash
npm install @tiny-bits/react-dialog
```

Or if you're using yarn:

```bash
yarn add @tiny-bits/react-dialog
```

## Usage

Here's a basic example of how to use the dialog component:

```tsx
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from '@tiny-bits/react-dialog';

function App() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <h2>Dialog Title</h2>
        <p>This is the dialog content.</p>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
```

### Controlled Usage

You can control the dialog's open state externally:

```tsx
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from '@tiny-bits/react-dialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <h2>Controlled Dialog</h2>
        <p>This dialog's state is controlled externally.</p>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
```

### Usage as a modal

To use dialog as modal:

```tsx
<Dialog modal>{/* Dialog content */}</Dialog>
```

## API

### Dialog

Main component that wraps the entire dialog structure.

Props:

- `children`: ReactNode
- `open?`: boolean (default: false)
- `onOpenChange?`: (open: boolean) => void
- `modal?`: boolean (default: false)

### DialogContent

The content of the dialog.

Props:

- Extends `DialogHTMLAttributes<HTMLDialogElement>`

### DialogTrigger

A button to open the dialog.

Props:

- Extends `ButtonHTMLAttributes<HTMLButtonElement>`

### DialogClose

A button to close the dialog.

Props:

- Extends `ButtonHTMLAttributes<HTMLButtonElement>`

## Styling

This is a headless component so you can style it however you want. Some default styles are provided and can be used by importing styles.css.

```tsx
import '@tiny-bits/react-dialog/styles.css';
```

Example usage with Tailwind CSS:

```tsx
<Dialog>
  <DialogTrigger className="rounded-md border p-2">
    Click me
  </DialogTrigger>
  <DialogContent className="self-center rounded-md shadow-lg">
    <div className="flex flex-col">
      Hello world!
      <div className="flex justify-end">
        <DialogClose className="p-2 border rounded-md">Bye</DialogClose>
      </div>
    </div>
  </DialogContent>
</Dialog>
```

## Browser Support

This component is designed to work with modern browsers.

## Accessibility

This component uses the native `<dialog>` element, which provides built-in accessibility features. The `DialogTrigger` and `DialogClose` components are properly labeled for screen readers.

## License

[MIT License](LICENSE)
```
