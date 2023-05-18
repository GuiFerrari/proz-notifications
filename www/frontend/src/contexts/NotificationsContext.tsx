"use client"

import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

import { NotificationDialog } from '@/components/Dialogs/NotificationDialog';
import { NotificationDelete } from '@/components/Dialogs/NotificationDelete';

import { Http } from '@/infra/http/http';

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

      new Http().put(`/notifications/${id}`)

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

      new Http().delete(`/notifications/${id}`)

      setNotificationsList(prevState => prevState.filter((notification) => notification.id !== id))
    }

    setDialogDeleteIsOpen(false)
  }, [notificationsList, notificationsOpen])

  const hasNotificationsUnread = useMemo(() => {
    let response = false

    for (var i = 0; i < notificationsList.length; i++) {
      if (!notificationsList[i].readed) {
        response = true
      }
    }

    return response
  }, [notificationsList])

  console.log('hasNotificationsUnread', hasNotificationsUnread)

  useEffect(() => {
    new Http().get(`/notifications`)
      .then(response => setNotificationsList(response.data))
  }, [])

  return (
    <NotificationsContext.Provider
      value={{
        notificationsList,
        notificationsCount: notificationsList.length,
        notificationsOpen,
        hasNotificationsUnread,

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