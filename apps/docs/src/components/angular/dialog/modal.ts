import { Component } from "@angular/core";
import {
  DialogComponent,
  DialogContentComponent,
  DialogTriggerDirective,
  DialogCloseDirective,
  DialogTitleComponent,
} from "@rds/angular-dialog";

@Component({
  selector: "app-dialog-demo",
  standalone: true,
  imports: [
    DialogComponent,
    DialogContentComponent,
    DialogTriggerDirective,
    DialogCloseDirective,
    DialogTitleComponent,
  ],
  template: `
    <rkt-dialog modal="true">
      <button rktDialogTrigger>Open dialog</button>
      <rkt-dialog-content>
        <rkt-dialog-title>Title</rkt-dialog-title>
        <p>Hello world dialog</p>
        <button rktDialogClose>Close</button>
      </rkt-dialog-content>
    </rkt-dialog>
  `,
})
export class Modal {}
