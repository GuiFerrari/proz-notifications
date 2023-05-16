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
}