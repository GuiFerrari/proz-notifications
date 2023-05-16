import classnames from 'classnames'

import { ButtonProps } from "@/interfaces";

export function Button({
  variant = 'primary',
  buttonText,
  size = 'normal',

  buttonAction
}: ButtonProps) {
  if (variant === 'delete') {
    return (
      <button
        type="button"
        onClick={buttonAction}
        className={classnames(
          'bg-red-500 border-[1px] border-red-500 rounded text-white uppercase font-medium py-2 px-9 hover:bg-red-600 hover:text-white transition-colors', {
            'w-full': size === 'full'
          }
        )}
      >
        {buttonText}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={buttonAction}
      className={classnames(
        'bg-white border-[1px] border-purple-300 rounded text-purple-800 uppercase font-medium py-2 px-9 hover:bg-purple-800 hover:text-white transition-colors', {
          'w-full': size === 'full'
        }
      )}
    >
      {buttonText}
    </button>
  )
}