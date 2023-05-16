import { EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/solid';

export function NotificationTitle() {
  return (
    <div className="flex items-start gap-3 pb-4">
      <EnvelopeIcon className="w-5 text-purple-300" />

      <div className="flex-1 flex flex-col">
        <h5 className="font-bold opacity-60 text-base tracking-wide">
          Proz | Comunidado sobre nova unidade
        </h5>
        <span className="opacity-60 text-base tracking-wide">
          31/03/2022 - 19:33
        </span>
      </div>

      <button type="button" className="w-6">
        <XMarkIcon className="text-purple-300" />
      </button>
    </div>
  )
}