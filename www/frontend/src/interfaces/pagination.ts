export interface PaginationItemProps {
  page: number
  isCurrent?: boolean
  chevronLeft?: boolean;
  chevronRight?: boolean;
  disabled?: boolean

  onPageChange: (page: number) => void;
}