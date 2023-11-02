import { useState } from "react";
import React from "react";
import barcodeGenerator from "./Components/BarcodeGenerator";
import QRGenerator from "./Components/QRGenerator";

function App() {
  const { inputValue, setInputValue } = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Barcode and QR Code Generator! By David Vasquez</h1>
      <input
        tpye="text"
        placeholder="Enter data here..."
        value={inputValue}
        onChange={handleInputChange}
      />

      <barcodeGenerator value={inputValue} />
      <QRGenerator value={inputValue} />
    </div>
  );
}

export default App;
