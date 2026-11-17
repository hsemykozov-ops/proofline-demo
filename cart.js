// Simple shopping-cart total helper with discount support.
export function cartTotal(items, discountCode) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    const item = items[i];
    total += item.price * item.quantity;
  }

  const discounts = { SAVE10: 0.1, SAVE20: 0.2 };
  total = total - total * discounts[discountCode];

  return total;
}
