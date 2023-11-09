import React, { useState } from "react";
import BarcodeGenerator from "./Components/BarcodeGenerator";
import QRCodeGenerator from "./Components/QRGenerator";
import Footer from "./Components/footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="all-content d-flex flex-column justify-content-center align-items-center text-center">
      <Helmet>
        <title>Barcode | QR Code Generator</title>
        <link rel="icon" type="image/png" href="/assets/favicon.svg" />
      </Helmet>
      <h1 className="title-text display-3">Barcode and QR Code Generator</h1>
      <div className="ps-5 pe-5 app-info-text ms-4 me-4 mb-4">
        <p className="fs-3 fw-light">
          Welcome! Here, you can type in your data in the text box below. Then a
          barcode and a QR code will be generated for you. Give it a try and
          create a QR and barcode!
        </p>
        <p className="fs-3 fw-light mb-5">
          After your barcode is generated, you can click the download button to
          download your code as a PNG file.
        </p>
      </div>
      <div className="user-input">
        <input
          className="form-control"
          type="text"
          placeholder="Enter data here..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      <BarcodeGenerator value={inputValue} />
      <QRCodeGenerator value={inputValue} />
      <Footer />
    </div>
  );
}

export default App;
