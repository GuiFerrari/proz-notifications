"use client"

import { createContext, useCallback, useEffect, useState } from 'react'

import { NotificationDialog } from '@/components/Dialogs/NotificationDialog';
import { NotificationDelete } from '@/components/Dialogs/NotificationDelete';

import {
  NotificationProps,
  NotificationsContextProviderProps,
  NotificationsContextType
} from '@/interfaces'

export const NotificationsContext = createContext({} as NotificationsContextType)

export function NotificationsContextProvider({ children }: NotificationsContextProviderProps) {
  const [notificationsList, setNotificationsList] = useState<NotificationProps[]>([]);
  const [notificationsOpen, setNotificationsOpen] = useState<NotificationProps | null>(null);
  
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [dialogDeleteIsOpen, setDialogDeleteIsOpen] = useState(false);

  const openDialog = useCallback((id: string) => {
    const findNotification = notificationsList.find(
      notification => notification.id === id
    )

    if (findNotification) {
      setNotificationsOpen(findNotification)

      fetch(`http://localhost:3333/notifications/${id}`, { method: 'PUT' })

      setNotificationsList(prevState => prevState.map((notification) => {
        if (notification.id === id) {
          return { ...notification, readed: true };
        }
  
        return notification;
      }))
    }

    setDialogIsOpen(true)
  }, [notificationsList])

  const closeDialog = useCallback(() => {
    setDialogIsOpen(false)
  }, [])

  const openDeleteDialog = useCallback((id: string) => {
    const findNotification = notificationsList.find(
      notification => notification.id === id
    )

    if (findNotification) {
      setNotificationsOpen(findNotification)
      setDialogDeleteIsOpen(true)
    }
  }, [notificationsList])

  const closeDeleteDialog = useCallback(() => {
    setDialogDeleteIsOpen(false)
  }, [])

  const deleteNotification = useCallback(() => {
    const id = notificationsOpen?.id

    const findNotification = notificationsList.find(
      notification => notification.id === id
    )

    if (findNotification) {
      setNotificationsOpen(findNotification)

      fetch(`http://localhost:3333/notifications/${id}`, { method: 'DELETE' })

      setNotificationsList(prevState => prevState.filter((notification) => notification.id !== id))
    }

    setDialogDeleteIsOpen(false)
  }, [notificationsList, notificationsOpen])

  useEffect(() => {
    fetch('http://localhost:3333/notifications')
      .then(response => response.json())
      .then(data => setNotificationsList(data))
  }, [])

  return (
    <NotificationsContext.Provider
      value={{
        notificationsList,
        notificationsCount: notificationsList.length,
        notificationsOpen,

        openDialog,
        closeDialog,
        openDeleteDialog,
        closeDeleteDialog,
        deleteNotification
      }}
    >
      {children}

      <NotificationDialog isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen} />
      <NotificationDelete isOpen={dialogDeleteIsOpen} setIsOpen={setDialogDeleteIsOpen} />
    </NotificationsContext.Provider>
  )
}