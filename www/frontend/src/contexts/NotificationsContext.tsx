"use client"

import { createContext, useEffect, useState } from 'react'
import {
  NotificationsContextProviderProps,
  NotificationsContextType
} from '@/interfaces'

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

  return (
    <NotificationsContext.Provider
      value={{
        notificationsList,
        notificationsCount: notificationsList.length
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}