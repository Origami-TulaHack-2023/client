import { useRoutes } from 'react-router-dom'

import { MainLayout } from '@/components'
import { MainPage } from '@/pages'

export const App = () => {
  // const url = `${clientEnv.API_BASE_URL}/network/my_view/?param1=hello&param2=world`

  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
      ],
    },
  ])

  return routes
}
