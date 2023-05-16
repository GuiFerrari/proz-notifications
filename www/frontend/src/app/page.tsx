import { Header } from "@/components/Header";
import { NotificationCard } from "@/components/NotificationCard";
import { NotificationDialog } from "@/components/NotificationDialog";
import { NotificationEmpty } from "@/components/NotificationEmpty";

export default function Home() {
  return (
    <div className="h-screen antialiased">
      <Header />

      <main className="w-full max-w-[1200px] m-auto">
        <h1 className="font-bold text-2xl py-6 border-b-[1px] border-b-gray-100">Notificações</h1>

        <div className="grid grid-cols-3 gap-6 py-6">
          {/* <NotificationEmpty /> */}
          <NotificationDialog />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      </main>
    </div>
  )
}
