import React from "react";
import GeneralReceiptProvider from "./GeneralReceiptContext";
import ReceiptPartProvider from "./ReceiptPartContext";
import CustomThemeProvider from "./CustomThemeProvider";

interface Props {
  children: React.ReactNode;
}

const CombineProvider: React.FC<Props> = ({ children }) => {
  return (
    <GeneralReceiptProvider>
      <ReceiptPartProvider>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </ReceiptPartProvider>
    </GeneralReceiptProvider>
  );
};

export default CombineProvider;
