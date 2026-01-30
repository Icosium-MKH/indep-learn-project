import { createBrowserRouter } from 'react-router-dom'
import MainLayout from 'shared/layout/MainLayout'

import HomePage from 'features/dashboard/pages/HomePage'
import CoursesPage from 'features/courses/pages/CoursesPage'
//import { LoginPage } from '@/features/auth/pages/LoginPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/courses', element: <CoursesPage /> },
    ],
  },
  /*{
    path: '/login',
    element: <LoginPage />,
  },*/
])
