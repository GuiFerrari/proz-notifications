import { NotificationFooter } from './Notifications/NotificationFooter';
import { NotificationTitle } from './Notifications/NotificationTitle';

export function NotificationCard() {
  return (
    <div className="w-auto max-w-sm bg-white rounded-lg shadow border-b-2 border-b-orange-500">
      <div className="px-4 pt-4 pb-6">

        <NotificationTitle />

        <p className="font-bold text-sm tracking-wide opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
      <NotificationFooter />
    </div>
  )
}