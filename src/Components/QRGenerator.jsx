import React, { useRef } from "react";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";

// Functionality of the QR code generator.
// Here I'm using the useRef hook in the qrCode variable to access
// The DOM element that needs to be captured.
// html2canvas is used to capture what the qrCodeRef variable is capturing

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

  // Layout of the component and specifying how to handle the captured data
  // QRCode value is put in its own div, then the qrCodeRef is used to specifically
  // reference that portion of the component which is the QR code.
  // onClick calls the handleDownload which caputures the referenced qr code and
  // creates a file called qrcode.png

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <h2 className="display-6">QR Code Generator</h2>
        <p>The QR image below will change to your data:</p>
        <div ref={qrCodeRef}>
          <QRCode value={value} />
        </div>
        <button
          onClick={handleDownload}
          className="mt-4 btn btn-primary btn-sm"
        >
          Download QR Code
        </button>
      </div>
    </>
  );
}

export default QRCodeGenerator;
