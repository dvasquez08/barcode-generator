import React, { useRef } from "react";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";

function QRCodeGenerator({ value }) {
  const qrCodeRef = useRef(null);
  const handleDownload = () => {
    html2canvas(qrCodeRef.current).then((canvas) => {
      const image = canvas.toDataURL("image.png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "qrcode.png";
      link.click();
    });
  };

  return (
    <>
      <div
        ref={qrCodeRef}
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <h2 className="display-6">QR Code Generator</h2>
        <p>The QR image below will change to your data:</p>
        <QRCode value={value} />
        <button
          onClick={handleDownload}
          className="mt-4 btn btn-secondary btn-sm"
        >
          Download QR Code
        </button>
      </div>
    </>
  );
}

export default QRCodeGenerator;
