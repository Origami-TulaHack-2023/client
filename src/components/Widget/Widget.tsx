import { useState } from 'react'

import { Box, Typography, Switch } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import { FeedbackList } from '@/components'
import { Menu } from '@/components/Widget/Menu'
import { AdminModeContext } from '@/contexts'

interface WidgetDataProps {
  isLoading: boolean
  isError: boolean
  feedbacks: any
  removeFeedback: any
}

const WidgetData: React.FC<WidgetDataProps> = ({
  isLoading,
  isError,
  feedbacks,
  removeFeedback,
}) => {
  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size={40} />
      </Box>
    )
  }

  if (isError) {
    return (
      <Typography color="error">
        Похоже вы ввели несуществующий артикул
      </Typography>
    )
  }

  if (!feedbacks) {
    return (
      <Typography color="text.secondary" sx={{ pb: 3 }}>
        Нажмите на иконку выше, чтобы найти отзывы
      </Typography>
    )
  }

  return <FeedbackList feedbacks={feedbacks} removeFeedback={removeFeedback} />
}

export const Widget: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [adminMode, setAdminMode] = useState(true)

  const removeFeedback = (id: number) => {
    setFeedbacks(feedbacks?.filter((feedback: any) => feedback.id !== id))
  }

  const handleAdminModeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAdminMode(event.target.checked)
  }

  return (
    <AdminModeContext.Provider value={adminMode}>
      <Box mt={4} pb={4}>
        <Box display="flex" alignItems="center">
          <Typography variant="h5">Админка off / on</Typography>
          <Switch checked={adminMode} onChange={handleAdminModeChange} />
        </Box>
        <Box display="flex" alignItems="center" gap={1} mb={1.5}>
          <Typography variant="h4" fontWeight={700}>
            {!feedbacks ? 'Отзывы' : `Всего ${feedbacks.length} отзывов`}
          </Typography>
          {adminMode && (
            <Menu
              setData={setFeedbacks}
              setIsLoading={setIsLoading}
              setIsError={setIsError}
            />
          )}
        </Box>
        <WidgetData
          isError={isError}
          isLoading={isLoading}
          feedbacks={feedbacks}
          removeFeedback={removeFeedback}
        />
      </Box>
    </AdminModeContext.Provider>
  )
}
