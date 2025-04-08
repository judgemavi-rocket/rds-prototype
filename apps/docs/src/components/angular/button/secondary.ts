import { Component } from "@angular/core";
import { ButtonComponent } from "@rds/angular-button";

@Component({
  selector: "app-button-demo",
  standalone: true,
  imports: [ButtonComponent],
  template: `<button rkt-button variant="secondary">Secondary</button>`,
})
export class Secondary {}
