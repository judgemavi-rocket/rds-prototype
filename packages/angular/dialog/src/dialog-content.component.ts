import {
  Component,
  ContentChild,
  TemplateRef,
  OnInit,
  OnDestroy,
  inject,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { DialogContextService } from "./dialog-context.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "tb-dialog-content",
  standalone: true,
  imports: [CommonModule],
  template: `
    <dialog #dialog class="rkt-dialog" (click)="onDialogClick($event)">
      <ng-content />
    </dialog>
  `,
  styleUrls: ["dialog.component.css"],
})
export class DialogContentComponent implements OnInit, OnDestroy {
  @ContentChild(TemplateRef) contentTemplate!: TemplateRef<any>;
  @ViewChild("dialog") dialogElement!: ElementRef<HTMLDialogElement>;

  private dialogContext = inject(DialogContextService);
  isModal$ = this.dialogContext.modal$;

  constructor() {}

  ngOnInit() {
    this.dialogContext.open$.subscribe((open) => {
      const dialog = this.dialogElement.nativeElement;
      if (open) {
        const isModal = this.dialogContext.getModalValue();
        isModal ? dialog.showModal() : dialog.show();
      } else {
        dialog.close();
      }
    });

    const dialog = this.dialogElement.nativeElement;
    dialog.addEventListener("close", () => this.dialogContext.closeDialog());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !this.dialogContext.getModalValue()) {
        this.dialogContext.closeDialog();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      dialog.removeEventListener("close", () =>
        this.dialogContext.closeDialog()
      );
      document.removeEventListener("keydown", handleKeyDown);
    };
  }

  ngOnDestroy() {
    // Cleanup is handled in ngOnInit return function
  }

  onDialogClick(event: MouseEvent) {
    const rect = this.dialogElement.nativeElement.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      this.dialogContext.closeDialog();
    }
  }
}
