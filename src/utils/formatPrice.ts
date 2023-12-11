export const formatPrice = (price: number): number =>
  price % 1 > 0 ? Number(price.toFixed(2)) : price;
