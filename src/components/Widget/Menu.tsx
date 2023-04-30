import { useEffect, useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import {
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  Button,
  Stack,
  TextField,
} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { clientEnv } from '@/clientEnv'
import { DialogButton } from '@/components/Widget/DialogButton'

export const Menu: React.FC<any> = ({ setData, setIsLoading, setIsError }) => {
  const { data, mutateAsync } = useMutation({
    mutationFn: (body: any) =>
      axios.post(`${clientEnv.API_BASE_URL}/network/my_view/`, body),
    onError: () => {
      setIsError(true)
      setIsLoading(false)
    },
    onSuccess: () => {
      setIsError(false)
      setIsLoading(false)
    },
  })

  useEffect(() => {
    if (data && (data.data as any)?.length) {
      setData(data.data.map((item: any, idx: any) => ({ ...item, id: idx })))
    }
  }, [setData, data])

  const [marketPlaces, setMarketPlaces] = useState<any>({
    wildberries: '',
    sportmater: '',
    lamoda: '',
    ozon: '',
  })

  const handleVendorCodeChange = (event: any) => {
    setMarketPlaces({
      ...marketPlaces,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = () => {
    const filledPlaces = Object.keys(marketPlaces).filter(
      k => marketPlaces[k].length > 0,
    )
    const body = filledPlaces.map((filledPlace: any) => ({
      market_place: filledPlace,
      vendor_code: marketPlaces[filledPlace],
    }))
    setIsLoading(true)
    mutateAsync(body).finally(() => setIsLoading(false))
  }

  return (
    <div>
      <DialogButton
        renderButton={openDialog => (
          <IconButton onClick={openDialog}>
            <SearchOutlinedIcon fontSize="large" />
          </IconButton>
        )}
        renderContent={closeDialog => (
          <form>
            <DialogContent sx={{ minWidth: 250 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Поиск
              </Typography>
              <Typography sx={{ mb: 1 }}>
                Для поиска отзывов введите артикул данного товара
              </Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Примеры артикулов</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography display="block">
                    wildberries (10 отзывов) 151684835
                  </Typography>
                  <Typography display="block">
                    wildberries (1000 отзывов) 143386618
                  </Typography>
                  <Typography display="block">
                    спортмастер (20 отзывов) 25989760299
                  </Typography>
                  <Typography display="block">
                    спортмастер (800 отзывов) 24087420299
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Stack gap={2.5} mt={3}>
                <TextField
                  label="Wildberries"
                  required
                  value={marketPlaces.wildberries}
                  onChange={handleVendorCodeChange}
                  name="wildberries"
                />
                <TextField
                  label="Sportmaster"
                  required
                  value={marketPlaces.sportmaster}
                  onChange={handleVendorCodeChange}
                  name="sportmaster"
                />
                <TextField
                  label="Lamoda"
                  required
                  onChange={handleVendorCodeChange}
                  value={marketPlaces.lamoda}
                  name="lamoda"
                />
                <TextField
                  label="Ozon"
                  required
                  onChange={handleVendorCodeChange}
                  value={marketPlaces.ozon}
                  name="ozon"
                  helperText="В разработке"
                  disabled
                />
              </Stack>
            </DialogContent>
            <DialogActions sx={{ mb: 1, mr: 2 }}>
              <Button
                variant="contained"
                sx={{ color: 'common.white' }}
                onClick={() => {
                  handleSubmit()
                  closeDialog()
                }}
              >
                Искать
              </Button>
            </DialogActions>
          </form>
        )}
      />
    </div>
  )
}
