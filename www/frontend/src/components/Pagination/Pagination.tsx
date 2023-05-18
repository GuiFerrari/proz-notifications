import { useCallback } from "react";

import { PaginationItem } from "./PaginationItem"

import { useNotifications } from "@/hooks/useNotifications"

function generatePagesArray (from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination() {
  const { metadata, handleGetNotifications } = useNotifications()

  const handleClick = useCallback((page: number) => {
    handleGetNotifications(String(page))
  }, [handleGetNotifications])

  if (metadata.total_pages === 0) {
    return null
  }

  const previousPages = metadata.page > 1
    ? generatePagesArray(metadata.page - 1 - 1, metadata.page - 1)
    : []

  const nextPages = metadata.page < metadata.total_pages
    ? generatePagesArray(metadata.page, Math.min(metadata.page + 1, metadata.total_pages))
    : [];

  return (
    <nav aria-label="Page navigation" className="flex justify-center">
      <ul className="inline-flex items-center -space-x-px gap-2">
        
        <PaginationItem
          page={metadata.page - 1}
          onPageChange={handleClick}
          chevronLeft
          disabled={metadata.page === 1}
        />

        {metadata.page > (1 + 1) && (
          <>
            <PaginationItem page={1} onPageChange={handleClick} />
            {metadata.page > (2 + 1) && (
              <span>...</span>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem key={page} page={page} onPageChange={handleClick} />
        ))}

        <PaginationItem page={metadata.page} isCurrent onPageChange={handleClick} />

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem key={page} page={page} onPageChange={handleClick} />
        ))}

        {(metadata.page + 1) < metadata.total_pages && (
          <>
            {(metadata.page + 1 + 1) < metadata.total_pages && (
              <span>...</span>
            )}
            <PaginationItem page={metadata.total_pages} onPageChange={handleClick} />
          </>
        )}

        <PaginationItem
          page={metadata.page + 1}
          onPageChange={handleClick}
          chevronRight
          disabled={metadata.page === metadata.total_pages}
        />
      
      </ul>
    </nav>
  )
}