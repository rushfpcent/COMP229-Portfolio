import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = () => {
 const pdfURL = 'client\src\assets\files\document.pdf';
return (
 <div>
    <Document file={pdfURL}>
    <Page pageNumber={1} />
    </Document>
 </div>
 );
};
export default PDFViewer;