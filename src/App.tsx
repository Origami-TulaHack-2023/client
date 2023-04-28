import { useEffect, useState } from 'react'

import { Box, Container, Typography, useTheme } from '@mui/material'

import { clientEnv } from '@/clientEnv'

export const App = () => {
  const { palette } = useTheme()
  const [data, setData] = useState('')

  useEffect(() => {
    const url = `${clientEnv.API_BASE_URL}/network/my_view/?param1=hello&param2=world`
    fetch(url)
      .then(async response => {
        setData(await response.text())
      })
      .catch(console.error)
  })

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
          <Typography variant="h5">Всем привет</Typography>
          <Typography variant="body1">Тестовый запрос</Typography>
          <Typography>{data}</Typography>
        </Box>
      </Container>
    </Box>
  )
}
