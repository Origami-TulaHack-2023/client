import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import { useTheme, darken } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

interface IProps {
  vendor_code: number
  price: number
  label: string
  descr: string
  rate: number
  image: any
}

export const ProductCard: React.FC<IProps> = ({
  vendor_code,
  price,
  label,
  descr,
  rate,
  image,
}) => {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <Card
      onClick={() => navigate(`/product/${vendor_code}`)}
      sx={{
        display: 'flex',
        border: `4px solid ${theme.palette.secondary.main}`,
        borderRadius: 3,
        mb: 2,
        boxShadow: 'none',
        cursor: 'pointer',
        transition: theme.transitions.create(['border-color'], {
          duration: theme.transitions.duration.standard,
        }),
        '&:hover': {
          borderColor: darken(theme.palette.secondary.main, 0.1),
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 170 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" fontWeight={700}>
            {price} ₽
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight={700}>
            {label}
          </Typography>
          <Typography variant="body1">{descr}</Typography>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pl: 1,
            pb: 1,
          }}
        >
          <Box display="flex">
            <StarHalfIcon sx={{ mr: 1 }} />
            <Typography color="text.disabled">{rate}</Typography>
          </Box>
          <IconButton color="primary">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}
