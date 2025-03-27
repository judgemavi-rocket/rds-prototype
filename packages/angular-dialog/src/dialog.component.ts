import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { DialogContextService } from './dialog-context.service';

@Component({
  selector: 'tb-dialog',
  standalone: true,
  template: `<ng-content></ng-content>`,
  providers: [DialogContextService]
})
export class DialogComponent implements OnInit, OnChanges {
  @Input() open = false;
  @Input() modal = false;
  @Output() openChange = new EventEmitter<boolean>();

  constructor(private dialogContext: DialogContextService) {}

  ngOnInit() {
    this.dialogContext.setOpen(this.open);
    this.dialogContext.setModal(this.modal);
    this.dialogContext.openChange.subscribe(open => {
      this.openChange.emit(open);
    });
  }

  ngOnChanges() {
    this.dialogContext.setOpen(this.open);
    this.dialogContext.setModal(this.modal);
  }
} 