import React, { useState } from "react";
import BarcodeGenerator from "./Components/BarcodeGenerator";
import QRCodeGenerator from "./Components/QRGenerator";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1 className="display-3">Barcode and QR Code Generator</h1>
      <h1 className="display-6 author-heading">By: David Vasquez</h1>
      <input
        className="form-control user-input"
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
