import { useState } from 'react'

interface useToggle {
  value: boolean
  toggle: () => void
  toggleOn: () => void
  toggleOff: () => void
}

export const useToggle = (initialValue?: boolean): useToggle => {
  const [value, setValue] = useState<boolean>(!!initialValue)

  return {
    value,
    toggle: () => setValue(prevValue => !prevValue),
    toggleOn: () => setValue(true),
    toggleOff: () => setValue(false),
  }
}
