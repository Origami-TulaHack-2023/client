import { Box, Container, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const MainLayout: React.FC = () => {
  const { palette } = useTheme()
  return (
    <Box bgcolor="primary.main">
      <Container
        maxWidth="xs"
        sx={{
          height: '100vh',
          bgcolor: palette.common.white,
          borderRadius: 2,
          px: 0.5,
          py: 1,
        }}
      >
        <Box bgcolor="common.white" borderRadius={2} px={1}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  )
}
