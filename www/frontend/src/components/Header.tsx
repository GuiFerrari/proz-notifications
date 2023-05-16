import Image from "next/image";
import { Bars3Icon } from '@heroicons/react/20/solid'

export async function Header() {
  return (
    <div className="flex justify-between bg-purple-800 px-6 py-4">
      <div className="flex justify-center items-center gap-4">
        <Bars3Icon className="w-6 text-white" />
        <Image
          src="/logo.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </div>

      <div>oirtra</div>
    </div>
  )
}