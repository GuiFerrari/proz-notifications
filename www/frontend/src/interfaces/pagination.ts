export interface PaginationItemProps {
  page: string
  isCurrent?: boolean
  chevronLeft?: boolean;
  chevronRight?: boolean;
  onPageChange: (page: string) => void;
}