import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import {
  Box,
  useTheme,
  Avatar,
  Container,
  ButtonBase,
  Stack,
  Typography,
} from '@mui/material'

import LeftMiddle from '@/assets/hero/left_middle.png'
import { ReactComponent as Logo } from '@/assets/hero/logo.svg'
import { ReactComponent as MainSneakers } from '@/assets/hero/main.svg'
import RightBottom from '@/assets/hero/right_bottom.png'
import TopRigth from '@/assets/hero/right_top.png'

export const HeroBlock: React.FC = () => {
  const { palette } = useTheme()
  return (
    <Box
      sx={{ height: '100%', bgcolor: 'secondary.main', position: 'relative' }}
    >
      <Container sx={{ pt: 2 }}>
        <img
          src={RightBottom}
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            zIndex: 0,
            width: '300px',
            height: '190px',
          }}
        />
        <img
          src={TopRigth}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 0,
            width: '250px',
            height: '180px',
          }}
        />
        <img
          src={LeftMiddle}
          style={{
            position: 'absolute',
            left: 0,
            top: '35%',
            zIndex: 0,
            width: '300px',
            height: '330px',
          }}
        />
        <Box mb={-7}>
          <Logo />
        </Box>
        <Stack>
          <MainSneakers style={{ zIndex: 100 }} />
        </Stack>
        <ButtonBase
          sx={{
            backgroundColor: 'common.white',
            borderRadius: 10,
            fontSize: '22px',
            textTransform: 'none',
            fontWeight: 900,
            color: palette.text.primary,
            py: 1.5,
            pl: 3.7,
            pr: 2,
            '&:hover': {
              backgroundColor: 'common.white',
            },
          }}
        >
          Каталог
          <Avatar sx={{ bgcolor: 'secondary.main', ml: 10 }}>
            <ArrowOutwardIcon
              sx={{ color: palette.text.primary, fontSize: '40px' }}
            />
          </Avatar>
        </ButtonBase>
        <Stack direction="row" mt={3} justifyContent="space-between">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              py: 0.5,
              backgroundColor: palette.text.primary,
              width: 168,
              borderRadius: 20,
              zIndex: 100,
            }}
          >
            ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              py: 0.5,
              backgroundColor: 'common.white',
              width: 168,
              borderRadius: 20,
              zIndex: 100,
            }}
          >
            <Typography variant="body1" fontWeight={700}>
              Jordan Air 200E
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
