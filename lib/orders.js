export function calculateSubtotalFromItems(items) {
  return items.reduce((subtotal, { price, quantity }) => {
    return subtotal + ( price * quantity );
  }, 0);
}