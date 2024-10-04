'use client';

import {
  ButtonHTMLAttributes,
  DialogHTMLAttributes,
  PropsWithoutRef,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { useState } from 'react';
import { ReactNode } from 'react';
import { createContext } from 'react';
import { mergeClasses } from '@tiny-bits/utils';
import './index.module.css';

type DialogContextType = {
  open: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  backdrop?: boolean;
};

const DialogContext = createContext<DialogContextType>({
  open: false,
  openDialog: () => {},
  closeDialog: () => {},
});

type ProviderProps = {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  backdrop?: boolean;
};

const DialogProvider = ({
  children,
  open,
  onOpenChange,
  backdrop = false,
}: ProviderProps) => {
  return (
    <DialogContext.Provider
      value={{
        open,
        openDialog: () => onOpenChange(true),
        closeDialog: () => onOpenChange(false),
        backdrop,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

const useDialog = () => {
  const context = useContext(DialogContext);
  if (Object.keys(context).length === 0) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

type DialogProps = {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  backdrop?: boolean;
};

const Dialog = ({
  children,
  open = false,
  onOpenChange,
  backdrop = false,
}: DialogProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  return (
    <DialogProvider
      open={isOpen}
      onOpenChange={handleOpenChange}
      backdrop={backdrop}
    >
      {children}
    </DialogProvider>
  );
};

type DialogContentProps = PropsWithoutRef<
  DialogHTMLAttributes<HTMLDialogElement>
>;

const DialogContent = ({ className, ...props }: DialogContentProps) => {
  const { open, closeDialog, backdrop } = useDialog();

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    dialog.addEventListener('close', closeDialog);

    return () => {
      dialog.removeEventListener('close', closeDialog);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      {...props}
      className={mergeClasses(
        'tiny-bits-dialog',
        backdrop && 'tiny-bits-backdrop',
        className
      )}
      ref={dialogRef}
    />
  );
};

type DialogTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DialogTrigger = (props: DialogTriggerProps) => {
  const { openDialog } = useDialog();
  return (
    <button
      aria-label='open dialog'
      type='button'
      {...props}
      onClick={openDialog}
    />
  );
};

type DialogCloseProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DialogClose = (props: DialogCloseProps) => {
  const { closeDialog } = useDialog();
  return (
    <button
      aria-label='close dialog'
      type='button'
      {...props}
      onClick={closeDialog}
    />
  );
};

export { Dialog, DialogContent, DialogTrigger, DialogClose };
export type {
  DialogProps,
  DialogContentProps,
  DialogTriggerProps,
  DialogCloseProps,
};
