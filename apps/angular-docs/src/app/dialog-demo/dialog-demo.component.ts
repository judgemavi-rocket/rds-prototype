import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DialogComponent,
  DialogContentComponent,
  DialogTriggerDirective,
  DialogCloseDirective
} from '@tiny-bits/angular-dialog';

@Component({
  selector: 'app-dialog-demo',
  standalone: true,
  imports: [
    CommonModule,
    DialogComponent,
    DialogContentComponent,
    DialogTriggerDirective,
    DialogCloseDirective
  ],
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent {
  dialogOpen = false;

  onDialogOpenChange(open: boolean) {
    this.dialogOpen = open;
  }
}
