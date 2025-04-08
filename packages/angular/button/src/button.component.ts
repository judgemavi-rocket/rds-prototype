import {
  Component,
  Input,
  HostBinding,
  ViewEncapsulation,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "[rkt-button]",
  standalone: true,
  template: `<ng-content></ng-content>`,
  imports: [CommonModule],
  styleUrls: ["button.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() variant: "primary" | "secondary" | "tertiary" | "warning" | "icon" =
    "primary";
  @Input() size: "lg" | "md" = "md";

  @HostBinding("class") get hostClass() {
    return "rkt-button";
  }

  @HostBinding("attr.data-variant") get dataVariant() {
    return this.variant;
  }

  @HostBinding("attr.data-size") get dataSize() {
    return this.size;
  }
}
