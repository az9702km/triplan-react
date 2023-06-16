const ordersReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ORDERS':
      return {
        ...state,
        orders: action.payload
      }
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload]
      }
  }
}

export default ordersReducer;