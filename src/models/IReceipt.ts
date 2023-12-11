import { IGeneralPosition, IPosition } from "./IPosition";

interface IReceipt {
  totalPrice: number;
}

export interface IReceiptPart extends IReceipt {
  id: number | null;
  name: string;
  positions: IPosition[];
}

export interface IGeneralReceipt extends IReceipt {
  positions: IGeneralPosition[];
}
