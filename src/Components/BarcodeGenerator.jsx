import React from "react";
import Barcode from "react-barcode";

function BarcodeGenerator({ value }) {
  return (
    <>
      <h2 className="display-6">Barcode Generator</h2>
      <Barcode value={value} />
    </>
  );
}

export default BarcodeGenerator;
