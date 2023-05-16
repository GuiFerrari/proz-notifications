import { useContext } from 'react'

import { NotificationsContext } from '../contexts/NotificationsContext'

export function useNotifications() {
  const context = useContext(NotificationsContext)

  return context
}