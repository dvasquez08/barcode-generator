import React, { useRef } from "react";
import Barcode from "react-barcode";
import html2canvas from "html2canvas";

function BarcodeGenerator({ value }) {
  const barcodeRef = useRef(null);
  console.log(barcodeRef);
  const handleDownload = () => {
    const code = document.querySelector(".barcode");
    html2canvas(code).then((canvas) => {
      const image = canvas.toDataURL("image.png");
      const link = document.createElement("a");
      link.href = image;
      link.setAttribute("download", "barcode.png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <>
      <div
        ref={barcodeRef}
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <h2 className="display-6">Barcode Generator</h2>
        <p>Your barcode will be generated below:</p>
        <Barcode value={value} />
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
