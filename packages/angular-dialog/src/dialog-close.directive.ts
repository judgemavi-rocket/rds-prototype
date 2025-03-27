import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { DialogContextService } from './dialog-context.service';

@Directive({
  selector: '[tbDialogClose]',
  standalone: true
})
export class DialogCloseDirective {
  @Output() closeChange = new EventEmitter<boolean>();

  constructor(
    private dialogContext: DialogContextService
  ) {}

  @HostListener('click')
  closeDialog() {
    this.dialogContext.closeDialog();
    this.closeChange.emit(false);
  }
} 