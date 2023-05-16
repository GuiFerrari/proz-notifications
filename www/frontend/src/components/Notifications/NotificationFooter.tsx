import { Button } from "@/components/Bases/Button";

import { NotificationFooterProps } from "@/interfaces";

export function NotificationFooter({
  buttonText,

  buttonAction
}: NotificationFooterProps) {
  return (
    <div className="flex justify-center items-center py-4 border-t-[1px] border-t-gray-100">
      <Button buttonText={buttonText} buttonAction={buttonAction} />
    </div>
  )
}