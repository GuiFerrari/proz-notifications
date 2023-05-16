import Image from "next/image";
import { BellIcon } from '@heroicons/react/20/solid';

export function HeaderProfile() {
  return (
    <div className="flex justify-between items-center gap-7 pr-4">
      <button type="button" className="bg-white h-6 w-6 flex justify-center items-center rounded-full relative">
        <BellIcon className="h-5 w-5 text-purple-800" />
        <div className="absolute -top-1 -right-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
        </div>
      </button>

      <button type="button" className="flex justify-between items-center gap-4">
        <Image
          src="/profile-pic.png"
          alt="Avatar"
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          width={40}
          height={40}
          priority
        />

        <div className="flex flex-col text-left">
          <span className="text-white">João da Silva</span>
          <span className="text-gray-100 font-bold text-sm">Professor</span>
        </div>
      </button>
    </div>
  )
}