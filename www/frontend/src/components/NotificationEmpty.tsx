import { BellIcon } from '@heroicons/react/24/outline';

export function NotificationEmpty() {
  return (
    <div className="flex justify-center items-center gap-10 py-10">
      <BellIcon className="w-16 opacity-50" />
      <span className="opacity-60">Você não possui notificações recentes.</span>
    </div>
  )
}