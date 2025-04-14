import { Component } from "@angular/core";
import { ButtonComponent } from "@rds/angular-button";
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
    ButtonComponent,
  ],
  template: `
    <rkt-dialog size="lg" modal="true">
      <button rktButton rktDialogTrigger>Open large modal</button>
      <rkt-dialog-content>
        <rkt-dialog-title>Title</rkt-dialog-title>
        <p>Loreum ipsum</p>
        <button rktButton rktDialogClose>Close</button>
      </rkt-dialog-content>
    </rkt-dialog>
  `,
})
export class Large {}
