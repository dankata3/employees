export function formatPrice(dollars) {
  return dollars
    ? dollars.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    : null;
}
