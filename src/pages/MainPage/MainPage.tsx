import { Catalog } from '@/components/Catalog'
import useScroll from '@/hooks/useScroll'
import { HeroBlock } from '@/pages/MainPage/HeroBlock'

export const MainPage: React.FC = () => {
  const [ref, scrollTo] = useScroll()
  return (
    <>
      <HeroBlock scroll={scrollTo} />
      <Catalog ref={ref} />
    </>
  )
}
