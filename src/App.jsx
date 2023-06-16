import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { EmployeesProvider } from './context/employees/EmployeesContext';
import { OrdersProvider } from './context/orders/OrdersContext';

function App() {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count => count + 1);
  };

  return (
    <>
      <EmployeesProvider>
        <OrdersProvider>
          <div className="flex h-screen">
            <Sidebar />
            <div className="w-full overflow-y-auto">
              <div className="w-[67rem] 2xl:w-[80rem] mx-auto py-6">
                <Outlet />
              </div>
            </div>
          </div>
        </OrdersProvider>
      </EmployeesProvider>
    </>
  )
}

export default App
