import { TextField, FormControlLabel, Checkbox } from '@mui/material'

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
    <>
      <TextField
        label="Артикул"
        required
        value={vendorCode}
        onChange={handleValueChange}
        name={marketPlace}
      />
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
    </>
  )
}
