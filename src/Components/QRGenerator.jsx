import QRCode from "qrcode.react";
import React from "react";

function QRCodeGenerator({ value }) {
  return (
    <>
      <h2 className="display-6">QR Code Generator</h2>
      <QRCode value={value} />
    </>
  );
}

export default QRCodeGenerator;
