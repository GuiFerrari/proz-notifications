import { Dispatch, ReactNode, SetStateAction } from "react"

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
  setDialogIsOpen: Dispatch<SetStateAction<boolean>>
}

export interface NotificationTitleProps {
  withoutCloseIcon?: boolean
}

export interface NotificationFooterProps {
  buttonText: string
  buttonAction: () => void
}

export interface NotificationDialogProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}