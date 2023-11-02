import { useState } from "react";
import React from "react";
import Barcode from "react-barcode";

function barcodeGenerator({ value }) {
  return (
    <>
      <h2>Barcode Generator</h2>
      <p>Enter your data below to generate barcode.</p>
      <Barcode value={value} />
    </>
  );
}

export default barcodeGenerator;
