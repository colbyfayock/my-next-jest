import { calculateSubtotalFromItems } from '../../lib/orders';

test('returns calculated subtotal from items', () => {
  const items = [
    {
      id: 1,
      price: 19.99,
      quantity: 2
    },
    {
      id: 2,
      price: 43.49,
      quantity: 1
    }
  ];

  expect(calculateSubtotalFromItems(items)).toEqual(83.47);
});