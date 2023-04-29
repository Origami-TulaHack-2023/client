import { Catalog } from '@/components/Catalog'
import { HeroBlock } from '@/pages/MainPage/HeroBlock'

export const MainPage: React.FC = () => {
  return (
    <>
      <HeroBlock />
      <Catalog />
    </>
  )
}
