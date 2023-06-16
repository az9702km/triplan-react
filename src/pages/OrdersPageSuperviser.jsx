import { IconCheck, IconClock, IconEdit, IconEye, IconMail, IconPencil, IconPlug, IconPlus, IconSearch, IconTrash, IconX } from '@tabler/icons-react';
import { IconEditOff } from '@tabler/icons-react';
import { useContext, useEffect } from 'react';
import OrdersContext from '../context/orders/OrdersContext';
import { getOrders, updateOrder } from '../context/orders/OrdersAction';

function OrdersPageSuperviser() { 
  const getOrdersData = async () => {
    const data = await getOrders();
    dispatch({type:'GET_ORDERS', payload: data})
  }; 

  useEffect(() => {
    getOrdersData();
  },[])

  const sendAnswer = async (ans, id) => {
    if(window.confirm('Вы уверены?')){
      await updateOrder(ans,id);
      const data = await getOrders();
      dispatch({type:'GET_ORDERS', payload: data})
    }
  }

  const {orders, dispatch} = useContext(OrdersContext);
  const getOrderState = (state, id) => {
    switch(state) {
      case 'approved':
       return (
        <div className="flex items-center w-fit whitespace-nowrap rounded-full px-3 py-1.5 bg-green-200 text-green-800 text-sm whitespace-nowrap">
          <IconCheck className="mr-1" size={14} />
          Одобрено
        </div>
       );
      case 'denied':
      return (
        <div className="flex items-center w-fit whitespace-nowrap rounded-full px-3 py-1.5 bg-red-200 text-red-800 text-sm whitespace-nowrap">
          <IconX className="mr-1" size={14} />
          Отклонено
        </div>
      );
      case 'pending':
      return (
        <div className="flex">
          <button onClick={()=>sendAnswer('approved',id)} className="flex items-center gap-x-2 px-3 py-3 text-green-600 rounded-md hover:bg-green-100">
            <IconCheck size={16} />
            Одобрить
          </button>
          <button onClick={()=>sendAnswer('denied',id)} className="flex items-center gap-x-2 px-3 py-3 text-red-500 rounded-md hover:bg-red-100">
            <IconX size={16} />
            Отказать
          </button>
        </div>
      );
    }  
  }



  return (
    <>
      <h1 className="text-3xl mb-6">Приказы</h1>
      <div className="rounded-lg border border-slate-200">
        <div className="px-6 py-4 flex justify-between border-b">
          <div className="relative rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <IconSearch className="text-slate-500" size={16} />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 outline-0"
              placeholder="Поиск..."
            />
          </div>
        </div>
        <table className="w-full">
          <thead className="table-head">
            <tr>
              <th>Начало</th>
              <th>Конец</th>
              <th>Место</th>
              <th>Руководитель</th>
              <th>Состояние</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.begin_date} </td>
                  <td>{order.end_date}</td>
                  <td>{order.destination}</td>
                  <td>{order.supervisor}</td>
                  <td>
                    {
                      getOrderState(order.state, order.id)                 
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
export default OrdersPageSuperviser