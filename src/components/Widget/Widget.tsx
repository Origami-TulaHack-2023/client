import { Box } from '@mui/material'

import { FeedbackList } from '@/components'
import { Menu } from '@/components/Widget/Menu'

export const Widget: React.FC = () => {
  return (
    <Box>
      <Menu />
      <FeedbackList />
    </Box>
  )
}
