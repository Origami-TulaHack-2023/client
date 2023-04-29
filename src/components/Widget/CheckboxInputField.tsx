import { TextField, FormControlLabel, Checkbox, Stack } from '@mui/material'

interface Props {
  checked: boolean
  vendorCode: string
  marketPlace: string
  handleValueChange: (e: any) => void
  handleCheckChange: (e: any) => void
}

export const CheckboxInputField: React.FC<Props> = ({
  checked,
  vendorCode,
  handleValueChange,
  handleCheckChange,
  marketPlace,
}) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleCheckChange}
            name={marketPlace}
          />
        }
        label={marketPlace}
      />
      <TextField
        label="Артикул"
        required
        value={vendorCode}
        onChange={handleValueChange}
        name={marketPlace}
      />
    </Stack>
  )
}
