import HomeIcon from '@mui/icons-material/Home'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { Box, Container, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { Outlet } from 'react-router-dom'

export const MainLayout: React.FC = () => {
  const { palette } = useTheme()
  return (
    <Box bgcolor="primary.light">
      <Container
        maxWidth="xs"
        sx={{
          bgcolor: palette.common.white,
          p: '0 !important',
        }}
      >
        <AppBar position="static" sx={{ height: '8vh' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon fontSize="large" />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <ShoppingBagIcon fontSize="large" color="secondary" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Container>
    </Box>
  )
}
