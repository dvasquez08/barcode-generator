import React, { useState } from "react";
import BarcodeGenerator from "./Components/BarcodeGenerator";
import QRCodeGenerator from "./Components/QRGenerator";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Barcode and QR Code Generator! By David Vasquez</h1>
      <input
        type="text"
        placeholder="Enter data here..."
        value={inputValue}
        onChange={handleInputChange}
      />

      <BarcodeGenerator value={inputValue} />
      <QRCodeGenerator value={inputValue} />
    </div>
  );
}

export default App;
