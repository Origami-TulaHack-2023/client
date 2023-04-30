import { forwardRef } from 'react'

import { Dialog, DialogProps } from '@mui/material'

import { useToggle } from '@/hooks'

export interface DialogButtonProps
  extends Omit<DialogProps, 'open' | 'onClose'> {
  renderContent: (closeDialog: () => void) => any
  renderButton: (openDialog: () => void) => any
  onClose?: () => void
  closeOnClickOutside?: boolean
}

export const DialogButton = forwardRef<any, DialogButtonProps>(
  (
    {
      renderContent,
      renderButton,
      onClose,
      closeOnClickOutside = true,
      ...dialogProps
    },
    ref,
  ) => {
    const {
      value: isDialogOpen,
      toggleOn: openDialog,
      toggleOff: closeDialog,
    } = useToggle()

    return (
      <>
        {renderButton(openDialog)}
        <Dialog
          open={isDialogOpen}
          scroll="body"
          onClose={() => {
            onClose && onClose()
            if (closeOnClickOutside) {
              closeDialog()
            }
          }}
          ref={ref}
          {...dialogProps}
        >
          {renderContent(closeDialog)}
        </Dialog>
      </>
    )
  },
)
DialogButton.displayName = 'DialogButton'
