export const getNumber = (number: string): number => {
  return parseFloat(number.replace(/,/g, ''));
};
