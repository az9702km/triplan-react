import { createContext, useReducer } from "react";
import ordersReducer from "./OrdersReducer";


const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const initialState = {
    orders: []
  }

  const [state, dispatch] = useReducer(ordersReducer, initialState);

  return (
    <OrdersContext.Provider
      value={{...state, dispatch}}
    >
      {children}
    </OrdersContext.Provider>
  )
}

export default OrdersContext;