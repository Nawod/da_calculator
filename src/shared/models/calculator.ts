export interface DropdownProps {
  title: string
  selectedValue: string | undefined
  onOptionSelect: (value: string) => void
  error?: boolean
}

export interface ButtonProps {
  title: string
  icon?: string
  onClick: () => void
}
