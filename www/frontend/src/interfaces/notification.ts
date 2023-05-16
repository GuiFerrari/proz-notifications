import { ReactNode } from "react"

export interface NotificationProps {
  id: string
  title: string
  decription: string
  created_at: string
}

export interface NotificationsContextProviderProps {
  children: ReactNode
}

export interface NotificationsContextType {
  notificationsList: NotificationProps[]
  notificationsCount: number

  openDialog: () => void
  closeDialog: () => void

  openDeleteDialog: () => void
  closeDeleteDialog: () => void
}

export interface NotificationTitleProps {
  withoutCloseIcon?: boolean

  closeButtonAction?: () => void
}

export interface NotificationFooterProps {
  buttonText: string
  buttonAction: () => void
}

export interface NotificationDialogProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}