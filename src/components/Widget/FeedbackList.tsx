import { Box } from '@mui/material'

import { Feedback } from '@/components/Widget/Feedback'

interface Props {
  feedbacks: any[]
  removeFeedback: any
}

export const FeedbackList: React.FC<Props> = ({
  feedbacks,
  removeFeedback,
}) => {
  return (
    <Box>
      {feedbacks
        .sort((a, b) => b.rating - a.rating)
        .map(feedback => (
          <Feedback
            {...feedback}
            key={feedback.name + feedback.datetime}
            remove={removeFeedback}
          />
        ))}
    </Box>
  )
}
