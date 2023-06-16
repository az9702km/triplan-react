const ORDERS_URL = "https://aback-best-astrodon.glitch.me"

export const getOrders = async () => {
  const response = await fetch(`${ORDERS_URL}/orders`);
  const orders = await response.json();
  return orders
}

export const addOrder = async (body) => {
  const response = await fetch(`${ORDERS_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(body)
  });
  return await response.json();
}

export const deleOrder = async (id) => {
  await fetch(`${ORDERS_URL}/orders/${id}`, {method: 'DELETE'});
}


export const updateOrder = async (data, id) => {
  const response = await fetch(`${ORDERS_URL}/orders/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify({
      state: data,
    })
  });
  return response;
}