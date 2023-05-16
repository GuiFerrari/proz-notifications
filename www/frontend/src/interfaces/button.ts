export interface ButtonProps {
  variant?: 'primary' | 'delete'
  size?: 'normal' | 'full'
  
  buttonText: string

  buttonAction: () => void
}