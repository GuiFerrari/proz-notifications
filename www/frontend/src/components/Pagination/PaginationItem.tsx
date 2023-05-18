import { PaginationItemProps } from "@/interfaces";

export function PaginationItem({
  page,
  isCurrent = false,
  chevronLeft,
  chevronRight,

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
        className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400"
        onClick={() => onPageChange(page)}
      >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </button>
    )
  }

  if (chevronRight) {
    return (
      <button
        type="button"
        className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400"
        onClick={() => onPageChange(page)}
      >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400"
      onClick={() => onPageChange(page)}
    >
      {page}
    </button>
  )

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px gap-2">

        <li className="flex">
          <a href="#" className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </a>
        </li>

        <li className="flex">
          <a href="#" className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400">1</a>
        </li>
        <li className="flex">
          <a href="#" className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400">1</a>
        </li>
        <li className="flex">
          <a href="#" className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400">1</a>
        </li>
        <li className="flex">
          <a href="#" className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400">1</a>
        </li>
        <li className="flex">
          <a href="#" className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400">1</a>
        </li>
        <li className="flex">
          <a href="#" className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400">1</a>
        </li>

        <li className="flex">
          <a href="#" className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-gray-400">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
        </li>

      
      </ul>
    </nav>
  )
}