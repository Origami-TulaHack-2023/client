import * as React from 'react'

import { useTheme, Box, Stack, Avatar, Rating, Divider } from '@mui/material'
import Typography from '@mui/material/Typography'

import { ReactComponent as LamodaLogo } from '@/assets/markets_logos/lamoda.svg'
import { ReactComponent as OzonLogo } from '@/assets/markets_logos/ozon.svg'
import { ReactComponent as SportmasterLogo } from '@/assets/markets_logos/sportmaster.svg'
import { ReactComponent as WbLogo } from '@/assets/markets_logos/wb.svg'

interface IFeedback {
  rating: number
  datetime: string
  name: string
  text: string
  market_place: string
  label: string
}

const MAP_MARKET_PLACE_TO_LOGO: any = {
  wildberries: WbLogo,
  ozon: OzonLogo,
  sportmaster: SportmasterLogo,
  lamoda: LamodaLogo,
}

const MAP_LABEL_TO_TYPOGRAPHY: any = {
  positive: (
    <Typography color="success.main" variant="caption">
      Позитивный
    </Typography>
  ),
  neutral: <Typography variant="caption">Нейтральный</Typography>,
  negative: (
    <Typography color="error.main" variant="caption">
      Негативный
    </Typography>
  ),
}

export const Feedback: React.FC<IFeedback> = ({
  rating,
  datetime,
  name,
  text,
  market_place,
  label,
}) => {
  const { palette } = useTheme()
  const Logo = MAP_MARKET_PLACE_TO_LOGO[market_place]
  return (
    <Box key={name + datetime}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Stack direction="row" alignItems="center">
          <Avatar sx={{ backgroundColor: palette.secondary.main }}>
            {!name || name.includes('скрыл') ? 'А' : name[0]}
          </Avatar>
          <Stack ml={2}>
            <Typography fontWeight={700}>
              {!name || name.includes('скрыл') ? 'Аноним' : name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {datetime}
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems="center">
          <Rating value={rating} readOnly />
          {MAP_LABEL_TO_TYPOGRAPHY[label]}
        </Stack>
        <Logo />
      </Stack>
      <Typography>{text}</Typography>
      <Divider
        sx={{
          my: 3,
          borderColor: palette.secondary.main,
          borderWidth: 2,
          borderRadius: 5,
        }}
      />
    </Box>
  )
}
