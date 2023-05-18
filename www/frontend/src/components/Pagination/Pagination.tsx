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
  const { metadata } = useNotifications()

  const handleClick = useCallback((page: string) => {
    console.log(page)
  }, [])

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
    <nav aria-label="Page navigation">
      <ul className="inline-flex items-center -space-x-px gap-2">
        
        {metadata.page !== 1 && (
          <PaginationItem page={String(metadata.page - 1)} onPageChange={handleClick} chevronLeft />
        )}

        <PaginationItem
          page={String(metadata.page)}
          onPageChange={handleClick}
          chevronLeft
        />

        {metadata.page > (1 + 1) && (
          <>
            <PaginationItem page='1' onPageChange={handleClick} />
            {metadata.page > (2 + 1) && (
              <span>...</span>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem key={page} page={String(page)} onPageChange={handleClick} />
        ))}

        <PaginationItem page={String(metadata.page)} isCurrent onPageChange={handleClick} />

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem key={page} page={String(page)} onPageChange={handleClick} />
        ))}

        {(metadata.page + 1) < metadata.total_pages && (
          <>
            {(metadata.page + 1 + 1) < metadata.total_pages && (
              <span>...</span>
            )}
            <PaginationItem page={String(metadata.total_pages)} onPageChange={handleClick} />
          </>
        )}

        {metadata.page !== metadata.total_pages && (
          <PaginationItem page={String(metadata.page + 1)} onPageChange={handleClick} chevronRight />
        )}
        
        {/* <PaginationItem
          page={String(metadata.page)}
          onPageChange={handleClick}
        />
        
        <PaginationItem
          page={String(metadata.page)}
          onPageChange={handleClick}
          chevronRight
        /> */}
      
      </ul>
    </nav>
  )
}