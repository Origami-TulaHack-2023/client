import { TextField, FormControlLabel, Checkbox, Stack } from '@mui/material'

interface Props {
  checked: boolean
  vendorCode: string
  marketPlace: string
  handleValueChange: (e: any) => void
  handleCheckChange: (e: any) => void
  disabled?: boolean
}

export const CheckboxInputField: React.FC<Props> = ({
  checked,
  vendorCode,
  handleValueChange,
  handleCheckChange,
  marketPlace,
  disabled = false,
}) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleCheckChange}
            name={marketPlace}
            disabled={disabled}
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
        disabled={disabled}
        size="small"
      />
    </Stack>
  )
}
