import classNames from "classnames";

import { PaginationItemProps } from "@/interfaces";

export function PaginationItem({
  page,
  isCurrent = false,
  chevronLeft,
  chevronRight,
  disabled = false,

  onPageChange
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <button
        type="button"
        className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400"
        disabled
      >
        {page}
      </button>
    )
  }

  if (chevronLeft) {
    return (
      <button
        type="button"
        className={classNames("flex justify-center items-center w-10 h-10 rounded-full text-gray-400", {
          "text-black hover:bg-gray-50 transition-colors": !disabled
        })}
        onClick={() => onPageChange(page)}
        disabled={disabled}
      >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </button>
    )
  }

  if (chevronRight) {
    return (
      <button
        type="button"
        className={classNames("flex justify-center items-center w-10 h-10 rounded-full text-gray-400", {
          "text-black hover:bg-gray-50 transition-colors": !disabled
        })}
        onClick={() => onPageChange(page)}
        disabled={disabled}
      >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="flex justify-center items-center w-10 h-10 rounded-full text-black hover:bg-gray-50 transition-colors"
      onClick={() => onPageChange(page)}
    >
      {page}
    </button>
  )
}