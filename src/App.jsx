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
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-3">Barcode and QR Code Generator</h1>
      <h1 className="display-6 author-heading">By: David Vasquez</h1>
      <div className="ps-5 pe-5">
        <p className="fs-3 fw-light">
          Welcome to my app! Here, you can type in your data in the text box
          below, then a barcode and a QR code will be generated for you. Give it
          a try and create a QR and barcode!
        </p>
        <p className="fs-3 fw-light mb-5">
          After your barcode is generated, you can click the download button to
          download your result
        </p>
      </div>
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
