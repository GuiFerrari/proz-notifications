import { NotificationFooter } from '@/components/Notifications/NotificationFooter';
import { NotificationTitle } from '@/components/Notifications/NotificationTitle';

import { useNotifications } from '@/hooks/useNotifications';

export function NotificationCard() {
  const { openDialog, openDeleteDialog } = useNotifications()

  return (
    <div className="w-auto max-w-sm bg-white rounded-lg shadow border-b-2 border-b-orange-500">
      <div className="px-4 pt-4 pb-6">

        <NotificationTitle closeButtonAction={openDeleteDialog} />

        <p className="font-bold text-sm tracking-wide opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
      <NotificationFooter buttonText="Ler mensagem" buttonAction={openDialog} />
    </div>
  )
}