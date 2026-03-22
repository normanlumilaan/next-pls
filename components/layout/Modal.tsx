'use client'

import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { useEffect, useRef } from 'react'

export type ModalProps = ComponentPropsWithoutRef<'dialog'> & {
  title: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export default function Modal({
  title,
  children,
  isOpen = false,
  onClose: onRequestClose,
  id,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      // Escape-to-close works reliably when opened via showModal().
      if (!dialog.open) dialog.showModal()
    } else {
      if (dialog.open) dialog.close()
    }
  }, [isOpen])

  return (
    <dialog
      aria-label={title}
      ref={dialogRef}
      id={id}
      className="fixed inset-0 z-50 m-0 h-[100dvh] w-[100vw] max-h-none max-w-none border-0 bg-black/50 p-0"
      onCancel={e => {
        // Prevent native close so React state stays the source of truth.
        e.preventDefault()
        onRequestClose()
      }}
      onClose={() => {
        onRequestClose()
      }}
    >
      <div className="flex flex-col items-center justify-center relative px-4 pt-24 pb-4">
        <button
          type="button"
          aria-label="Close"
          aria-controls={id}
          className="absolute cursor-pointer top-0 right-0 flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-md"
          onClick={onRequestClose}
        >
          <span>&#10006;</span>
        </button>
        <div className="max-w-screen-lg mx-auto">{children}</div>
      </div>
    </dialog>
  )
}
