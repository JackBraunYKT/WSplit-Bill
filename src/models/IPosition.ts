export interface IPosition {
  id: number;
  name: string;
  totalQuantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface IGeneralPosition extends IPosition {
  currentQuantity: number;
}
