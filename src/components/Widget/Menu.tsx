import { useState } from 'react'

import SettingsIcon from '@mui/icons-material/Settings'
import {
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  Button,
} from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { clientEnv } from '@/clientEnv'
import { CheckboxInputField } from '@/components/Widget/CheckboxInputField'
import { DialogButton } from '@/components/Widget/DialogButton'

export const Menu: React.FC = () => {
  const { data, mutate } = useMutation({
    mutationFn: (body: any) =>
      axios.post(`${clientEnv.API_BASE_URL}/network/my_view/`, body),
  })

  const [marketPlaces, setMarketPlaces] = useState<any>({
    wildberries: {
      vendorCode: '',
      checked: false,
    },
    ozon: {
      vendorCode: '',
      checked: false,
    },
  })
  const { wildberries, ozon } = marketPlaces
  console.log(data, ozon)

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
    mutate(body)
  }

  return (
    <div>
      <DialogButton
        renderButton={openDialog => (
          <IconButton onClick={openDialog}>
            <SettingsIcon />
          </IconButton>
        )}
        renderContent={closeDialog => (
          <form>
            <DialogContent>
              <Typography>Настройки</Typography>
              <CheckboxInputField
                checked={wildberries.checked}
                vendorCode={wildberries.vendorCode}
                handleCheckChange={handleCheckChange}
                handleValueChange={handleVendorCodeChange}
                marketPlace="wildberries"
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  handleSubmit()
                  closeDialog()
                }}
              >
                Отправить
              </Button>
            </DialogActions>
          </form>
        )}
      />
    </div>
  )
}
