import {
  Component,
  ContentChild,
  TemplateRef,
  OnInit,
  OnDestroy,
  inject,
  ViewChild,
  ElementRef,
  Inject,
} from "@angular/core";
import { DialogContextService } from "./dialog-context.service";
import { CommonModule, DOCUMENT } from "@angular/common";

@Component({
  selector: "rkt-dialog-content",
  standalone: true,
  imports: [CommonModule],
  template: `
    <dialog
      #dialog
      class="rkt-dialog"
      (click)="onDialogClick($event)"
      [attr.data-size]="size$ | async"
    >
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
  size$ = this.dialogContext.size$;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.dialogContext.open$.subscribe((open) => {
      const dialog = this.dialogElement?.nativeElement;
      if (open) {
        const isModal = this.dialogContext.getModalValue();
        isModal ? dialog?.showModal() : dialog?.show();
      } else {
        dialog?.close();
      }
    });

    const dialog = this.dialogElement?.nativeElement;
    dialog?.addEventListener("close", () => this.dialogContext.closeDialog());
    this.document.addEventListener("keydown", this.handleKeyDown);
  }

  ngOnDestroy() {
    const dialog = this.dialogElement?.nativeElement;
    dialog?.removeEventListener("close", () =>
      this.dialogContext.closeDialog()
    );
    this.document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape" && !this.dialogContext.getModalValue()) {
      this.dialogContext.closeDialog();
    }
  }

  onDialogClick(event: MouseEvent) {
    const rect = this.dialogElement?.nativeElement.getBoundingClientRect();
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
