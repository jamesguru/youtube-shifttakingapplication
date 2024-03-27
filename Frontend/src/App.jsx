import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import UpdatePassword from './pages/UpdatePassword/UpdatePassword'
import Staff from './pages/Staff/Staff'
import Account from './pages/Account/Account'
import Shifts from './pages/Shifts/Shifts'
import Report from './pages/Report/Report'

function App() {
  const router = createBrowserRouter([
 
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ResetPassword />,
    },
    {
      path: "/reset/KsJhRzLbWgVn4fE2aZpXqYcDxuIo0mKsJhRzLbWgVn4fE2a",
      element: <UpdatePassword />,
    },
    {
      path: "/staff",
      element: <Staff />,
    },
    {
      path: "/myaccount",
      element: <Account />,
    },
    {
      path: "/myshifts",
      element: <Shifts />,
    },
    {
      path: "/report",
      element: <Report />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
