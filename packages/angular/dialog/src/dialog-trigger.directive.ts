import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import { DialogContextService } from "./dialog-context.service";

@Directive({
  selector: "[rktDialogTrigger]",
  standalone: true,
})
export class DialogTriggerDirective {
  @Output() openChange = new EventEmitter<boolean>();

  constructor(private dialogContext: DialogContextService) {}

  @HostListener("click")
  openDialog() {
    this.dialogContext.openDialog();
    this.openChange.emit(true);
  }
}
