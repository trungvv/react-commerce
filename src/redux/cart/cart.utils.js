export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existing = cartItems.find((item) => item.name === cartItemToAdd.name);

  if (existing) {
    return cartItems.map((cartItem) =>
      cartItem.name === cartItemToAdd.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existing = cartItems.find(
    (cartItem) => cartItem.name === cartItemToRemove.name
  );
  if (existing.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.name !== cartItemToRemove.name
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.name === cartItemToRemove.name
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
