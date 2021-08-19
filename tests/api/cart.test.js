test('calculates order total', () => {
  const price = 5.00;
  const quantity = 3;
  expect(price * quantity).toEqual(10);
});