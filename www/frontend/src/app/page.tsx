"use client"

import { Header } from "@/components/Header";
import { NotificationCard } from "@/components/NotificationCard";
import { NotificationEmpty } from "@/components/NotificationEmpty";

import { useNotifications } from "@/hooks/useNotifications";

export default function Home() {
  const { notificationsCount, notificationsList } = useNotifications()

  return (
    <div className="h-screen antialiased">
      <Header />

      <main className="w-full max-w-[1200px] m-auto">
        <h1 className="font-bold text-2xl py-6 border-b-[1px] border-b-gray-100">Notificações</h1>

        {notificationsCount > 0 ? (
          <div className="grid grid-cols-3 gap-6 py-6">
            {notificationsList.map(notification => <NotificationCard key={notification.id} />)}
          </div>
        ) : <NotificationEmpty />}
      </main>
    </div>
  )
}
