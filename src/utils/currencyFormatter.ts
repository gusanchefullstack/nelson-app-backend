export const currencyFormatter = (money: number, coin: string) => {
  try {
    if(!isValidCurrencyCode(coin)) throw Error('Invalid currency code')
    const cents = money * 100;
    const convertedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: coin,
      minimumFractionDigits: 2,
    }).format(cents / 100);
    return convertedAmount;
  } catch (error) {
    throw error;
  }
};

function isValidCurrencyCode(code: string) {
  return Intl.supportedValuesOf("currency").find(item => item == code.toUpperCase()) ? true : false;
}