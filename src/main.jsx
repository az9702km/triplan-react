import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EmployeesPage from './pages/EmployeesPage'
import OrdersPage from './pages/OrdersPage'
import TabloidPage from './pages/TabloidPage'
import EditPersonPage from './pages/EditPersonPage'
import EditOrderPage from './pages/EditOrderPage'
import OrdersPageEmployee from './pages/OrdersPageEmployee'
import OrdersPageSuperviser from './pages/OrdersPageSuperviser'
import OrdersPagePrint from './pages/OrdersPagePrint'
import NewOrder from './pages/NewOrder'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'employees',
        element: <EmployeesPage />
      },
      {
        path: 'orders',
        element: <OrdersPage />
      },
      {
        path: 'ordersEmpl',
        element: <OrdersPageEmployee />
      },
      {
        path: 'ordersSuper',
        element: <OrdersPageSuperviser />
      },
      {
        path: 'ordersPrint',
        element: <OrdersPagePrint />
      },
      {
        path: 'tabloit',
        element: <TabloidPage />
      },
      {
        path: 'personedit',
        element: <EditPersonPage />
      },
      {
        path: 'orderedit',
        element: <EditOrderPage />
      },
      {
        path: 'addorder',
        element: <NewOrder />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
