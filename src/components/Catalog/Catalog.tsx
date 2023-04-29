import { Container, Typography } from '@mui/material'

import { ProductCard } from '@/components/Catalog/Card'
import { products } from '@/data'

export const Catalog: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 1, mt: 3 }}>
        Каталог
      </Typography>
      {products.map(({ vendor_code, label, price, descr, rate, image }) => (
        <ProductCard
          label={label}
          price={price}
          descr={descr}
          rate={rate}
          image={image}
          key={label}
          vendor_code={vendor_code}
        />
      ))}
    </Container>
  )
}
