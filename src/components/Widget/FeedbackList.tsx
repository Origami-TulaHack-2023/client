import {
  useTheme,
  Box,
  Stack,
  Avatar,
  Typography,
  Rating,
  Divider,
} from '@mui/material'

import { ReactComponent as OzonLogo } from '@/assets/markets_logos/ozon.svg'
import { ReactComponent as WbLogo } from '@/assets/markets_logos/wb.svg'

interface Props {
  feedbacks: any[]
}

const MAP_MARKET_PLACE_TO_LOGO: any = {
  wildberries: WbLogo,
  ozon: OzonLogo,
}

export const FeedbackList: React.FC<Props> = ({ feedbacks }) => {
  const { palette } = useTheme()
  return (
    <Box>
      {feedbacks
        .slice(0, 20)
        .map(({ name, datetime, market_place, rating, text }) => {
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
                    {name[0]}
                  </Avatar>
                  <Stack ml={2}>
                    <Typography fontWeight={700}>{name}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {datetime}
                    </Typography>
                  </Stack>
                </Stack>
                <Rating value={rating} readOnly />
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
        })}
    </Box>
  )
}
