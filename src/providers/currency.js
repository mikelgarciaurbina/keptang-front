import currencyFormatter from 'currency-formatter';

export default function (number, currency = 'USD') {
  const amount = number ? parseFloat(number) : 0;

  return currencyFormatter.format(amount, { code: currency });
}
