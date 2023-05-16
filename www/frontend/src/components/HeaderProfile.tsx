import Image from "next/image";
import { BellIcon } from '@heroicons/react/20/solid';
import { NotificationsDropdown } from "./NotificationsDropdown";

export function HeaderProfile() {
  return (
    <div className="flex justify-between items-center gap-7 pr-4">
      <NotificationsDropdown />

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