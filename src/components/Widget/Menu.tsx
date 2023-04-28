import { useState } from 'react'

import SettingsIcon from '@mui/icons-material/Settings'
import {
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { clientEnv } from '@/clientEnv'
import { DialogButton } from '@/components/Widget/DialogButton'

export const Menu: React.FC = () => {
  const { data, mutate } = useMutation({
    mutationFn: (body: any) =>
      axios.post(`${clientEnv.API_BASE_URL}/network/my_view/`, body),
  })
  console.log(data)

  const [vendorCode, setVendorCode] = useState('')
  const [marketPlaces, setMarketPlaces] = useState<any>({
    wildberries: false,
    ozon: false,
  })
  const { wildberries, ozon } = marketPlaces

  const handleChange = (event: any) => {
    setMarketPlaces({
      ...marketPlaces,
      [event.target.name]: event.target.checked,
    })
  }

  const handleSubmit = () => {
    const body = {
      vendor_code: vendorCode,
      market_places: Object.keys(marketPlaces).filter(
        k => marketPlaces[k] === true,
      ),
    }
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
              <TextField
                label="Артикул"
                required
                value={vendorCode}
                onChange={e => setVendorCode(e.target.value)}
              />
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={wildberries}
                      onChange={handleChange}
                      name="wildberries"
                    />
                  }
                  label="Wildberries"
                />
                <FormControlLabel
                  required
                  control={
                    <Checkbox
                      checked={ozon}
                      onChange={handleChange}
                      name="ozon"
                    />
                  }
                  label="Ozon"
                />
              </FormGroup>
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
