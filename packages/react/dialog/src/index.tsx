"use client";

import { Button } from "@rds/react-button";
import "@rds/styles/dialog.css";
import { mergeClasses } from "@rds/utils";
import {
  type ButtonHTMLAttributes,
  type DialogHTMLAttributes,
  type HTMLAttributes,
  type MouseEventHandler,
  type PropsWithoutRef,
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type DialogSize = "md" | "lg";

type DialogContextType = {
  closeDialog: () => void;
  modal: boolean;
  open: boolean;
  openDialog: () => void;
  size: DialogSize;
};

const DialogContext = createContext<DialogContextType>({
  closeDialog: () => {},
  modal: true,
  open: false,
  openDialog: () => {},
  size: "md",
});

type ProviderProps = {
  children: ReactNode;
  modal: boolean;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  size: DialogSize;
};

const DialogProvider = ({
  children,
  modal,
  onOpenChange,
  open,
  size,
}: ProviderProps) => {
  return (
    <DialogContext.Provider
      value={{
        closeDialog: () => onOpenChange(false),
        modal,
        open,
        openDialog: () => onOpenChange(true),
        size,
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
  modal?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  size?: DialogSize;
};

const DialogRoot = ({
  children,
  modal = false,
  onOpenChange,
  open = false,
  size = "md",
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
      modal={modal}
      onOpenChange={handleOpenChange}
      open={isOpen}
      size={size}
    >
      {children}
    </DialogProvider>
  );
};

type DialogContentProps = PropsWithoutRef<
  DialogHTMLAttributes<HTMLDialogElement>
>;

const DialogContent = ({ className, ...props }: DialogContentProps) => {
  const { open, closeDialog, modal, size } = useDialog();

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

    const handleClick = (event: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        closeDialog();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    dialog.addEventListener("click", handleClick);

    return () => {
      dialog.removeEventListener("close", closeDialog);
      document.removeEventListener("keydown", handleKeyDown);
      dialog.removeEventListener("click", handleClick);
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
      className={mergeClasses("rkt-dialog", className)}
      data-size={size}
      ref={dialogRef}
    />
  );
};

type DialogTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DialogTrigger = ({ onClick, type, ...props }: DialogTriggerProps) => {
  const { openDialog } = useDialog();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    openDialog();
  };

  return <Button {...props} type={type ?? "button"} onClick={handleClick} />;
};

type DialogCloseProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DialogClose = ({ onClick, type, ...props }: DialogCloseProps) => {
  const { closeDialog } = useDialog();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    closeDialog();
  };

  return <Button {...props} type={type ?? "button"} onClick={handleClick} />;
};

type DialogDismissProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DialogDismiss = ({
  className,
  onClick,
  type,
  ...props
}: DialogDismissProps) => {
  const { closeDialog } = useDialog();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    closeDialog();
  };

  return (
    <button
      {...props}
      className={mergeClasses("rkt-dialog__close-xmark", className)}
      onClick={handleClick}
      type={type ?? "button"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
};

type DialogActionsProps = HTMLAttributes<HTMLDivElement>;

const DialogActions = ({ className, ...props }: DialogActionsProps) => {
  return (
    <div
      {...props}
      className={mergeClasses("rkt-dialog__actions", className)}
    />
  );
};

type DialogTitleProps = HTMLAttributes<HTMLHeadingElement>;

const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <h2 className={mergeClasses("rkt-dialog__title", className)} {...props} />
  );
};

export const Dialog = {
  Actions: DialogActions,
  Close: DialogClose,
  Content: DialogContent,
  Dismiss: DialogDismiss,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
};

export type {
  DialogCloseProps,
  DialogContentProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
};
