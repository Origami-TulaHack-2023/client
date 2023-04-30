import { MutableRefObject, useCallback, useRef } from 'react'

const useScroll = (): [MutableRefObject<HTMLDivElement | null>, () => void] => {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    }
  }, [])

  return [ref, scroll]
}

export default useScroll
