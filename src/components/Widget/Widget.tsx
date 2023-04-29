import { useState } from 'react'

import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import { FeedbackList } from '@/components'
import { Menu } from '@/components/Widget/Menu'

interface WidgetDataProps {
  isLoading: boolean
  feedbacks: any
}

const WidgetData: React.FC<WidgetDataProps> = ({ isLoading, feedbacks }) => {
  if (isLoading) {
    return <CircularProgress />
  }

  if (!feedbacks) {
    return (
      <Typography color="text.secondary" sx={{ pb: 3 }}>
        Нажмите на иконку выше, чтобы загрузить отзывы
      </Typography>
    )
  }

  return <FeedbackList feedbacks={feedbacks} />
}

export const Widget: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Box mt={4}>
      <Box display="flex" alignItems="center" gap={1} mb={1.5}>
        <Typography variant="h4" fontWeight={700}>
          {!feedbacks ? 'Отзывы' : `Всего ${feedbacks.length} отзывов`}
        </Typography>
        <Menu setData={setFeedbacks} setIsLoading={setIsLoading} />
      </Box>
      <WidgetData isLoading={isLoading} feedbacks={feedbacks} />
    </Box>
  )
}
