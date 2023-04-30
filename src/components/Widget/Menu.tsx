import { useEffect, useState } from 'react'

import SettingsIcon from '@mui/icons-material/Settings'
import {
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  Button,
  Stack,
} from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { clientEnv } from '@/clientEnv'
import { CheckboxInputField } from '@/components/Widget/CheckboxInputField'
import { DialogButton } from '@/components/Widget/DialogButton'

export const Menu: React.FC<any> = ({ setData, setIsLoading }) => {
  const { data, mutateAsync } = useMutation({
    mutationFn: (body: any) =>
      axios.post(`${clientEnv.API_BASE_URL}/network/my_view/`, body),
  })

  useEffect(() => {
    if (data && (data.data as any)?.length) {
      setData(data.data)
    }
  }, [setData, data])

  const [marketPlaces, setMarketPlaces] = useState<any>({
    wildberries: {
      vendorCode: '',
      checked: false,
    },
    ozon: {
      vendorCode: '',
      checked: false,
    },
    sportmaster: {
      vendorCode: '',
      checked: false,
    },
    lamoda: {
      vendorCode: '',
      checked: false,
    },
  })
  const { wildberries, ozon, sportmaster, lamoda } = marketPlaces

  const handleCheckChange = (event: any) => {
    setMarketPlaces({
      ...marketPlaces,
      [event.target.name]: {
        ...marketPlaces[event.target.name],
        checked: event.target.checked,
      },
    })
  }

  const handleVendorCodeChange = (event: any) => {
    setMarketPlaces({
      ...marketPlaces,
      [event.target.name]: {
        ...marketPlaces[event.target.name],
        vendorCode: event.target.value,
      },
    })
  }

  const handleSubmit = () => {
    const checkedMarketPlaces = Object.keys(marketPlaces).filter(
      k => marketPlaces[k].checked,
    )
    const body = checkedMarketPlaces.map((checkedMarketPlace: any) => ({
      market_place: checkedMarketPlace,
      vendor_code: marketPlaces[checkedMarketPlace].vendorCode,
    }))
    setIsLoading(true)
    mutateAsync(body).finally(() => setIsLoading(false))
  }

  return (
    <div>
      <DialogButton
        renderButton={openDialog => (
          <IconButton onClick={openDialog}>
            <SettingsIcon fontSize="large" />
          </IconButton>
        )}
        renderContent={closeDialog => (
          <form>
            <DialogContent>
              <Typography variant="h5">Настройки</Typography>
              <Stack gap={2.5} mt={3}>
                <CheckboxInputField
                  checked={wildberries.checked}
                  vendorCode={wildberries.vendorCode}
                  handleCheckChange={handleCheckChange}
                  handleValueChange={handleVendorCodeChange}
                  marketPlace="wildberries"
                />
                <CheckboxInputField
                  checked={sportmaster.checked}
                  vendorCode={sportmaster.vendorCode}
                  handleCheckChange={handleCheckChange}
                  handleValueChange={handleVendorCodeChange}
                  marketPlace="sportmaster"
                />
                <CheckboxInputField
                  checked={lamoda.checked}
                  vendorCode={lamoda.vendorCode}
                  handleCheckChange={handleCheckChange}
                  handleValueChange={handleVendorCodeChange}
                  marketPlace="lamoda"
                />
                <CheckboxInputField
                  checked={ozon.checked}
                  vendorCode={ozon.vendorCode}
                  handleCheckChange={handleCheckChange}
                  handleValueChange={handleVendorCodeChange}
                  marketPlace="ozon"
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
                Загрузить
              </Button>
            </DialogActions>
          </form>
        )}
      />
    </div>
  )
}
