import {createBrowserRouter,RouterProvider, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import UpdatePassword from './pages/UpdatePassword/UpdatePassword'
import Staff from './pages/Staff/Staff'
import Account from './pages/Account/Account'
import Shifts from './pages/Shifts/Shifts'
import Report from './pages/Report/Report'
import Shift from './pages/Shift/Shift'
import {useSelector} from "react-redux";

function App() {
  const user = useSelector((state) => state.user)
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
      element: user.currentUser ? <Staff /> : <Navigate to="/login"/>,
    },
    {
      path: "/myaccount",
      element: user.currentUser ? <Account /> : <Navigate to="/login"/>,
    },
    {
      path: "/myshifts",
      element:user.currentUser ? <Shifts /> : <Navigate to="/login"/>,
    },
    {
      path: "/report",
      element: user.currentUser ? <Report /> : <Navigate to="/login"/>,
    },
    {
      path: "/shift/:id",
      element: user.currentUser ? <Shift /> : <Navigate to="/login"/>,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
