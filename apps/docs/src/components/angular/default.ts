import { Component } from "@angular/core";
import {
  DialogComponent,
  DialogContentComponent,
  DialogTriggerDirective,
  DialogCloseDirective,
} from "@rds/angular-dialog";

@Component({
  selector: "app-dialog-demo",
  standalone: true,
  imports: [
    DialogComponent,
    DialogContentComponent,
    DialogTriggerDirective,
    DialogCloseDirective,
  ],
  template: `
    <tb-dialog [open]="dialogOpen" (openChange)="onDialogOpenChange($event)">
      <button class="rkt-button" tbDialogTrigger>Open Basic Dialog</button>
      <tb-dialog-content>
        <div class="dialog-content">
          <div class="dialog-header">
            <h2>Basic Dialog</h2>
            <button class="close-btn" tbDialogClose>×</button>
          </div>
          <div class="dialog-body">
            <p>This is a basic dialog with a title and close button.</p>
            <p>
              Click outside the dialog or use the close button to dismiss it.
            </p>
          </div>
        </div>
      </tb-dialog-content>
    </tb-dialog>
  `,
})
export class Default {
  dialogOpen = false;

  onDialogOpenChange(open: boolean) {
    this.dialogOpen = open;
    console.log("Dialog state changed:", open);
  }
}
