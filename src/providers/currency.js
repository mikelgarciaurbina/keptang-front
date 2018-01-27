import currencyFormatter from 'currency-formatter';

export default {
  format: (number = 0, currency = 'USD') =>
    currencyFormatter.format(parseFloat(number), { code: currency }),
};
