import React, { useRef } from "react";
import Barcode from "react-barcode";
import html2canvas from "html2canvas";

function BarcodeGenerator({ value }) {
  const barcodeRef = useRef(null);
  const handleDownload = () => {
    html2canvas(barcodeRef.current).then((canvas) => {
      const image = canvas.toDataURL("image.png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "barcode.png";
      link.click();
    });
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <h2 className="display-6">Barcode Generator</h2>
        <p>Your barcode will be generated below:</p>
        <div ref={barcodeRef}>
          <Barcode value={value} />
        </div>
        <button
          onClick={handleDownload}
          className="mt-4 btn btn-secondary btn-sm"
        >
          Download Barcode
        </button>
      </div>
    </>
  );
}

export default BarcodeGenerator;
