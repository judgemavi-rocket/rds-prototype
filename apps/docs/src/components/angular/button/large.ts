import { Component } from "@angular/core";
import { ButtonComponent } from "@rds/angular-button";

@Component({
  selector: "app-button-demo",
  standalone: true,
  imports: [ButtonComponent],
  template: `<button rkt-button size="lg">Large</button>`,
})
export class Large {}
