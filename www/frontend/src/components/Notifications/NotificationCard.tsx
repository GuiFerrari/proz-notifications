import { NotificationFooter } from '@/components/Notifications/NotificationFooter';
import { NotificationTitle } from '@/components/Notifications/NotificationTitle';

import { useNotifications } from '@/hooks/useNotifications';
import { NotificationCardProps } from '@/interfaces';
import classNames from 'classnames';

export function NotificationCard({
  notification
}: NotificationCardProps) {
  const { openDialog, openDeleteDialog } = useNotifications()

  return (
    <div className={classNames('w-auto max-w-sm bg-white rounded-lg shadow border-b-2 m-auto', {
      'border-b-orange-500': !notification.readed
    })}>
      <div className="px-4 pt-4 pb-6">

        <NotificationTitle closeButtonAction={() => openDeleteDialog(notification.id)} notification={notification} />

        <p className="font-bold text-sm tracking-wide opacity-60 line-clamp-3">
          {notification.description}
        </p>
      </div>
      
      <NotificationFooter buttonText="Ler mensagem" buttonAction={() => openDialog(notification.id)} />
    </div>
  )
}