import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DialogContextService {
  private openSubject = new BehaviorSubject<boolean>(false);
  private modalSubject = new BehaviorSubject<boolean>(false);

  open$ = this.openSubject.asObservable();
  openChange = new BehaviorSubject<boolean>(false);
  modal$ = this.modalSubject.asObservable();

  setOpen(open: boolean) {
    this.openSubject.next(open);
  }

  setModal(modal: boolean) {
    this.modalSubject.next(modal);
  }

  getModalValue(): boolean {
    return this.modalSubject.getValue();
  }

  openDialog() {
    this.openSubject.next(true);
    this.openChange.next(true);
  }

  closeDialog() {
    this.openSubject.next(false);
    this.openChange.next(false);
  }
} 