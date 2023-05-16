import { NotificationFooterProps } from "@/interfaces";

export function NotificationFooter({
  buttonText,

  buttonAction
}: NotificationFooterProps) {
  return (
    <div className="flex justify-center items-center py-4 border-t-[1px] border-t-gray-100">
      <button
        type="button"
        onClick={buttonAction}
        className="bg-white border-[1px] border-purple-300 rounded text-purple-800 uppercase font-medium py-2 px-9 hover:bg-purple-800 hover:text-white transition-colors"
      >
        {buttonText}
      </button>
    </div>
  )
}