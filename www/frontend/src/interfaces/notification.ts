import { ReactNode } from "react"

export interface NotificationProps {
  id: string
  title: string
  description: string
  readed: boolean;
  created_at: Date
}

export interface NotificationsContextProviderProps {
  children: ReactNode
}

export interface NotificationsContextType {
  notificationsList: NotificationProps[]
  notificationsCount: number
  notificationsOpen: NotificationProps | null
  hasNotificationsUnread: boolean

  openDialog: (id: string) => void
  closeDialog: () => void

  openDeleteDialog: (id: string) => void
  closeDeleteDialog: () => void

  deleteNotification: () => void
}

export interface NotificationTitleProps {
  notification: NotificationProps
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

export interface NotificationCardProps {
  notification: NotificationProps
}