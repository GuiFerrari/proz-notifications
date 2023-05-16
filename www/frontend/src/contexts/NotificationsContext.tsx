"use client"

import { createContext, useCallback, useState } from 'react'
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { NotificationDialog } from '@/components/NotificationDialog';

import {
  NotificationsContextProviderProps,
  NotificationsContextType
} from '@/interfaces'
import { NotificationDelete } from '@/components/NotificationDelete';

export const NotificationsContext = createContext({} as NotificationsContextType)

export function NotificationsContextProvider({ children }: NotificationsContextProviderProps) {
  const [notificationsList] = useState([
    {
      id: '1',
      title: 'Proz | Comunidado sobre nova unidade',
      decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created_at: '31/03/2022 - 19:33'
    },
    {
      id: '2',
      title: 'Proz | Comunidado sobre nova unidade',
      decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created_at: '31/03/2022 - 19:33'
    },
    {
      id: '3',
      title: 'Proz | Comunidado sobre nova unidade',
      decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created_at: '31/03/2022 - 19:33'
    },
    {
      id: '4',
      title: 'Proz | Comunidado sobre nova unidade',
      decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created_at: '31/03/2022 - 19:33'
    },
  ]);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [dialogDeleteIsOpen, setDialogDeleteIsOpen] = useState(false);

  const openDialog = useCallback(() => {
    setDialogIsOpen(true)
  }, [])

  const closeDialog = useCallback(() => {
    setDialogIsOpen(false)
  }, [])

  const openDeleteDialog = useCallback(() => {
    setDialogDeleteIsOpen(true)
  }, [])

  const closeDeleteDialog = useCallback(() => {
    setDialogDeleteIsOpen(false)
  }, [])

  return (
    <NotificationsContext.Provider
      value={{
        notificationsList,
        notificationsCount: notificationsList.length,

        openDialog,
        closeDialog,
        openDeleteDialog,
        closeDeleteDialog,
      }}
    >
      {children}

      <NotificationDialog isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen} />
      <NotificationDelete isOpen={dialogDeleteIsOpen} setIsOpen={setDialogDeleteIsOpen} />
    </NotificationsContext.Provider>
  )
}