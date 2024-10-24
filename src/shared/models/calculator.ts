export interface DropdownProps {
  title: string
  selectedValue: string | undefined
  onOptionSelect: (value: string) => void
}

export interface ButtonProps {
  title: string
  icon?: string
  onClick: () => void
}