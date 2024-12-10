"use client";

import {
  ButtonHTMLAttributes,
  DialogHTMLAttributes,
  PropsWithoutRef,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  createContext,
} from "react";
import { mergeClasses } from "@tiny-bits/utils";
import "./index.module.css";

type DialogContextType = {
  open: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  modal: boolean;
};

const DialogContext = createContext<DialogContextType>({
  open: false,
  openDialog: () => {},
  closeDialog: () => {},
  modal: true,
});

type ProviderProps = {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  modal: boolean;
};

const DialogProvider = ({
  children,
  open,
  onOpenChange,
  modal,
}: ProviderProps) => {
  return (
    <DialogContext.Provider
      value={{
        open,
        openDialog: () => onOpenChange(true),
        closeDialog: () => onOpenChange(false),
        modal,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

const useDialog = () => {
  const context = useContext(DialogContext);
  if (Object.keys(context).length === 0) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

type DialogProps = {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
};

const Dialog = ({
  children,
  open = false,
  onOpenChange,
  modal = false,
}: DialogProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  return (
    <DialogProvider open={isOpen} onOpenChange={handleOpenChange} modal={modal}>
      {children}
    </DialogProvider>
  );
};

type DialogContentProps = PropsWithoutRef<
  DialogHTMLAttributes<HTMLDialogElement>
>;

const DialogContent = ({ className, ...props }: DialogContentProps) => {
  const { open, closeDialog, modal } = useDialog();

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    dialog.addEventListener("close", closeDialog);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !modal) {
        closeDialog();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      dialog.removeEventListener("close", closeDialog);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDialog, modal]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    if (open) {
      modal ? dialog.showModal() : dialog.show();
    } else {
      dialog.close();
    }
  }, [open, modal]);

  return (
    <dialog
      {...props}
      className={mergeClasses(
        "tiny-bits-dialog",
        modal && "tiny-bits-modal",
        className
      )}
      ref={dialogRef}
    />
  );
};

type DialogTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DialogTrigger = (props: DialogTriggerProps) => {
  const { openDialog } = useDialog();
  return <button type="button" {...props} onClick={openDialog} />;
};

type DialogCloseProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DialogClose = (props: DialogCloseProps) => {
  const { closeDialog } = useDialog();
  return <button type="button" {...props} onClick={closeDialog} />;
};

export { Dialog, DialogContent, DialogTrigger, DialogClose };
export type {
  DialogProps,
  DialogContentProps,
  DialogTriggerProps,
  DialogCloseProps,
};
