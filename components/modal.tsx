"use client";

import { useRouter } from "next/navigation";
import { ElementRef, ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    const current = dialogRef.current;
    if (!current?.open) {
      current?.showModal();
    }
  }, []);

  const handleDismiss = () => {
    router.back();
  };

  return (
    <div>
      <dialog ref={dialogRef} onClose={handleDismiss}>
        {children}
        <button onClick={handleDismiss}>닫기</button>
      </dialog>
    </div>
  );
};
