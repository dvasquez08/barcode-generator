import QRCode from "qrcode.react";
import { useState } from "react";
import React from "react";

function qrCodeGenerator({ value }) {
  return (
    <>
      <h2>QR Code Generator</h2>
      <p>Enter your data below to generate a QR code</p>
      <QRCode value={value} />
    </>
  );
}

export default QRGenerator;
