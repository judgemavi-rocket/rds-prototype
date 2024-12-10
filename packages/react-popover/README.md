# Tiny Bits React Popover

Zero dependency, accessible, and composable React popover component built on top of the popover api.

## Features

- Fully controlled or uncontrolled usage
- Composable API with separate trigger and content
- TypeScript support

## Installation

To install the popover component in your project, run:

```bash
npm install @tiny-bits/react-popover
```

Or if you're using yarn:

```bash
yarn add @tiny-bits/react-popover
```

## Usage

Here's a basic example of how to use the popover component:

```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@tiny-bits/react-popover";

function App() {
  return (
    <Popover>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>
        <h2>Popover Title</h2>
        <p>This is the popover content.</p>
      </PopoverContent>
    </Popover>
  );
}
```

### Controlled Usage

You can control the popover's open state externally:

```tsx
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@tiny-bits/react-popover";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>
        <h2>Controlled Popover</h2>
        <p>This popover's state is controlled externally.</p>
      </PopoverContent>
    </Popover>
  );
}
```

## API

### Popover

Main component that wraps the entire popover structure.

Props:

- `children`: ReactNode
- `open?`: boolean (default: false)
- `onOpenChange?`: (open: boolean) => void

### PopoverContent

The content of the popover.

Props:

- Extends `HTMLAttributes<HTMLDivElement>`
- side 'top' | 'right' | 'bottom' | 'left'
- align 'start' | 'center' | 'end'
- avoidCollisions?: boolean

### PopoverTrigger,

A button to open the popover.

Props:

- Extends `ButtonHTMLAttributes<HTMLButtonElement>`

## Styling

This is a headless component so you can style it however you want.

Example usage with Tailwind CSS:

```tsx
<Popover>
  <PopoverTrigger className="rounded-md border p-2">Click me</PopoverTrigger>
  <PopoverContent className="self-center rounded-md shadow-lg">
    <div className="flex flex-col">Hello world!</div>
  </PopoverContent>
</Popover>
```

## Browser Support

This component is designed to work with modern browsers.

## Accessibility

This component uses the native popover api, which provides built-in accessibility features. The `PopoverTrigger,` components are properly labeled for screen readers.

## License

[MIT License](LICENSE)
