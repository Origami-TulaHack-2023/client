import { useEffect, useState } from 'react'

import { Box, useTheme, Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { products } from '@/data'

export const ProductPage: React.FC = () => {
  const { palette } = useTheme()

  const { vendor_code: vendorCode } = useParams()
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    const item = products.find(
      ({ vendor_code }) => vendor_code == Number(vendorCode),
    )
    setProduct(item as any)
  }, [vendorCode])

  if (!product) {
    return <Box>fake</Box>
  }

  return (
    <Box>
      <Box
        mb={2}
        width="100%"
        sx={{
          borderBottom: `8px solid ${palette.primary.main}`,
        }}
      >
        <img src={product.image} width="100%" height="100%" />
      </Box>
      <Container>
        <Typography variant="h5" fontWeight={700}>
          {product.label}
        </Typography>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          {product.price} Р
        </Typography>
        <Typography fontWeight={700}>Описание:</Typography>
        <Typography>{product.description}</Typography>
      </Container>
    </Box>
  )
}
