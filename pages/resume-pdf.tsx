import React, { useState } from "react";
import { Page, Document, pdfjs } from "react-pdf";
import { useMediaQuery } from "react-responsive";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ResumePDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }

  return (
    <div id="ResumeContainer">
      <Document file={"/bibatresume.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
        <Page scale={isDesktopOrLaptop ? 2 : 1} pageNumber={pageNumber} />
      </Document>
    </div>
  );
}
