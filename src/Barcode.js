import React from "react";
import { useBarcode } from 'react-barcodes';

export const Barcode = ({ code, color }) => {

  const { inputRef } = useBarcode({
    value: code.code,
    options: {
      displayValue: false,
      background: "transparent",
      lineColor: color
    }
  });

  return <div>
    <svg ref={inputRef} />
    <p>{code.title}</p>
  </div>;
};
