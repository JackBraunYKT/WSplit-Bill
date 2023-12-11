import { createContext, useState, useEffect } from "react";
import { IGeneralPosition } from "../models/IPosition";

type TGeneralReceiptContext = {
  totalPrice: number;
  setTotalPrice: (price: number) => void;
  positions: IGeneralPosition[];
  setPositions: (positions: IGeneralPosition[]) => void;
};

export const GeneralReceiptContext = createContext<TGeneralReceiptContext>({
  totalPrice: 0,
  setTotalPrice: () => {},
  positions: [],
  setPositions: () => {},
});

type Props = {
  children: React.ReactNode;
};

const GeneralReceiptProvider: React.FC<Props> = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [positions, setPositions] = useState<IGeneralPosition[]>([]);

  useEffect(() => {
    setTotalPrice(11100);
    setPositions([
      {
        id: 1,
        name: "Хлеб",
        totalPrice: 3000,
        unitPrice: 300,
        totalQuantity: 10,
        currentQuantity: 10,
      },
      {
        id: 2,
        name: "Кола",
        unitPrice: 150,
        totalPrice: 7500,
        totalQuantity: 50,
        currentQuantity: 50,
      },
      {
        id: 3,
        name: "Суп",
        unitPrice: 200,
        totalPrice: 600,
        totalQuantity: 3,
        currentQuantity: 3,
      },
    ]);
  }, []);

  const context: TGeneralReceiptContext = {
    totalPrice,
    setTotalPrice,
    positions,
    setPositions,
  };

  return (
    <GeneralReceiptContext.Provider value={context}>
      {children}
    </GeneralReceiptContext.Provider>
  );
};

export default GeneralReceiptProvider;
