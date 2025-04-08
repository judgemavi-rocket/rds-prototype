# Angular Dialog Component

A flexible and accessible dialog component for Angular applications.

## Installation

```bash
npm install @rds/angular-dialog
```

## Usage

Import the dialog components in your Angular module or component:

```typescript
import { DialogComponent, DialogContentComponent, DialogTriggerDirective, DialogCloseDirective } from '@rds/angular-dialog';

@Component({
  // ...
  imports: [
    DialogComponent,
    DialogContentComponent,
    DialogTriggerDirective,
    DialogCloseDirective
  ]
})
```

### Basic Dialog

```html
<rkt-dialog [open]="dialogOpen" (openChange)="onDialogOpenChange($event)">
  <button rktDialogTrigger>Open Dialog</button>
  <rkt-dialog-content>
    <ng-template>
      <div class="dialog-content">
        <div class="dialog-header">
          <h2>Dialog Title</h2>
          <button rktDialogClose>×</button>
        </div>
        <div class="dialog-body">
          <p>Dialog content goes here.</p>
        </div>
      </div>
    </ng-template>
  </rkt-dialog-content>
</rkt-dialog>
```

### Dialog with Form

```html
<rkt-dialog
  [open]="formDialogOpen"
  (openChange)="onFormDialogOpenChange($event)"
>
  <button rktDialogTrigger>Open Form Dialog</button>
  <rkt-dialog-content>
    <ng-template>
      <div class="dialog-content">
        <div class="dialog-header">
          <h2>Contact Form</h2>
          <button rktDialogClose>×</button>
        </div>
        <div class="dialog-body">
          <form>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </ng-template>
  </rkt-dialog-content>
</rkt-dialog>
```

## API

### Dialog Component (`rkt-dialog`)

The main dialog container component.

#### Inputs

- `[open]`: boolean - Controls the visibility of the dialog
- `(openChange)`: EventEmitter<boolean> - Emits when the dialog's open state changes

### Dialog Content (`rkt-dialog-content`)

The content container for the dialog.

### Dialog Trigger Directive (`[rktDialogTrigger]`)

A directive that can be attached to any button to trigger the dialog.

#### Outputs

- `(openChange)`: EventEmitter<boolean> - Emits when the trigger is clicked

### Dialog Close Directive (`[rktDialogClose]`)

A directive that can be attached to any button to close the dialog.

#### Outputs

- `(closeChange)`: EventEmitter<boolean> - Emits when the close button is clicked

## Styling

The dialog component is designed to be flexible and customizable. You can style it using CSS classes:

```scss
.dialog-content {
  padding: 1rem;
  border-radius: 4px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.dialog-body {
  margin-bottom: 1rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;

  &:hover {
    color: #000;
  }
}
```

## Accessibility

The dialog component follows WAI-ARIA guidelines for dialogs:

- Uses proper ARIA roles and attributes
- Manages focus appropriately
- Handles keyboard navigation
- Provides screen reader support

## License

MIT
