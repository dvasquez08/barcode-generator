import React, { useRef } from "react";
import Barcode from "react-barcode";
import html2canvas from "html2canvas";

// Functionality of the barcode generator.
// Here I'm using the useRef hook in the barcode variable to access
// The DOM element that needs to be captured.
// html2canvas is used to capture what the barcodeRef variable is capturing

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

  // Layout of the component and specifying how to handle the captured data
  // barcode value is put in its own div, then the barcodeRef is used to specifically
  // reference that portion of the component which is the barcode.
  // onClick calls the handleDownload which caputures the referenced barcode and
  // creates a file called barcode.png

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
          className="mt-4 btn btn-primary btn-sm"
        >
          Download Barcode
        </button>
      </div>
    </>
  );
}

export default BarcodeGenerator;
