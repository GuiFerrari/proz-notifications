"use client"

import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

import { NotificationDialog } from '@/components/Dialogs/NotificationDialog';
import { NotificationDelete } from '@/components/Dialogs/NotificationDelete';

import { Http } from '@/infra/http/http';

import {
  NotificationGetAllProps,
  NotificationMetadataProps,
  NotificationProps,
  NotificationsContextProviderProps,
  NotificationsContextType
} from '@/interfaces'

export const NotificationsContext = createContext({} as NotificationsContextType)

export function NotificationsContextProvider({ children }: NotificationsContextProviderProps) {
  const [notificationsList, setNotificationsList] = useState<NotificationProps[]>([]);
  const [notificationsOpen, setNotificationsOpen] = useState<NotificationProps | null>(null);
  const [metadata, setMetadata] = useState<NotificationMetadataProps>({
    page: 2,
		results_per_page: 6,
		results_size: 0,
		results_start: 7,
		results_end: 6,
		total_pages: 0,
		next_page: null,
		prev_page: 1
  });
  
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

  const handleGetNotifications = useCallback(() => {
    new Http().get<NotificationGetAllProps>(`/notifications`)
      .then(response => {
        setNotificationsList(response.data.results)
        setMetadata(response.data.metadata)
      })
  }, [])

  const hasNotificationsUnread = useMemo(() => {
    let response = false

    for (var i = 0; i < notificationsList.length; i++) {
      if (!notificationsList[i].readed) {
        response = true
      }
    }

    return response
  }, [notificationsList])

  useEffect(() => {
    handleGetNotifications()
  }, [handleGetNotifications])

  return (
    <NotificationsContext.Provider
      value={{
        notificationsList,
        notificationsCount: notificationsList.length,
        notificationsOpen,
        hasNotificationsUnread,
        metadata,

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