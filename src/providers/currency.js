import currencyFormatter from 'currency-formatter';

export default function (number = 0, currency = 'USD') {
  return currencyFormatter.format(parseFloat(number), { code: currency });
}
