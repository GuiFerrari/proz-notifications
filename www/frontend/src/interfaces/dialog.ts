import { ReactNode } from "react";

export interface DialogProps {
  children: ReactNode
  
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}