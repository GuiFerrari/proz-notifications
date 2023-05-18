import { EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/solid';
import dayjs from 'dayjs'

import { useNotifications } from '@/hooks/useNotifications';

import { NotificationTitleProps } from '@/interfaces';

export function NotificationTitle({
  withoutCloseIcon = false,
  notification,

  closeButtonAction
}: NotificationTitleProps) {
  const { openDialog } = useNotifications()
  return (
    <div className="flex items-start gap-3 pb-4">
      <EnvelopeIcon className="w-5 text-purple-300" />

      <button className="flex-1 flex flex-col text-left" onClick={() => openDialog(notification.id)}>
        <h5 className="font-bold opacity-60 text-base tracking-wide line-clamp-2">
          {notification.title}
        </h5>
        <span className="opacity-60 text-base tracking-wide">
          {dayjs(notification.created_at).format("DD/MM/YYYY - HH:mm")}
        </span>
      </button>

      {!withoutCloseIcon && (
        <button type="button" onClick={closeButtonAction} className="w-6">
          <XMarkIcon className="text-purple-300" />
        </button>
      )}

    </div>
  )
}