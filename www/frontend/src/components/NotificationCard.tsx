import { EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/solid';

export function NotificationCard() {
  return (
    <div className="w-auto max-w-sm bg-white rounded-lg shadow border-b-2 border-b-orange-500">
      <div className="px-4 pt-4 pb-6">

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

        <p className="font-bold text-sm tracking-wide opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
      <div className="flex justify-center items-center py-4 border-t-[1px] border-t-gray-100">
        <button type="button" className="bg-white border-[1px] border-purple-300 rounded text-purple-800 uppercase font-medium py-2 px-9 hover:bg-purple-800 hover:text-white transition-colors">
          Ler mensagem
        </button>
      </div>
    </div>
  )
}