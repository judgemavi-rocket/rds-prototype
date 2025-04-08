import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "rkt-dialog-title",
  standalone: true,
  styleUrls: ["dialog.component.css"],
  template: ` <h2 class="rkt-dialog__title"><ng-content /></h2> `,
  imports: [CommonModule],
})
export class DialogTitleComponent {}
