import React, { createContext, useState } from "react";
import { IReceiptPart } from "../models/IReceipt";

type TReceiptPartContext = {
  receipts: IReceiptPart[];
  setReceipts: (positions: React.SetStateAction<IReceiptPart[]>) => void;
  sumPrice: number;
  setSumPrice: (value: React.SetStateAction<number>) => void;
};

export const ReceiptPartContext = createContext<TReceiptPartContext>({
  receipts: [],
  setReceipts: () => {},
  sumPrice: 0,
  setSumPrice: () => {},
});

type Props = {
  children: React.ReactNode;
};

const ReceiptPartProvider: React.FC<Props> = ({ children }) => {
  const [receipts, setReceipts] = useState<IReceiptPart[]>([]);
  const [sumPrice, setSumPrice] = useState<number>(0);

  const context: TReceiptPartContext = {
    receipts,
    setReceipts,
    sumPrice,
    setSumPrice,
  };

  return (
    <ReceiptPartContext.Provider value={context}>
      {children}
    </ReceiptPartContext.Provider>
  );
};

export default ReceiptPartProvider;
