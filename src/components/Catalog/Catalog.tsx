import { forwardRef } from 'react'

import { Container, Typography, Box } from '@mui/material'

import { ProductCard } from '@/components/Catalog/Card'
import { products } from '@/data'

export const Catalog = forwardRef((props, ref) => {
  return (
    <Container>
      <Box ref={ref}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 1, mt: 3 }}>
          Каталог
        </Typography>
      </Box>
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
})
Catalog.displayName = 'catalog'
