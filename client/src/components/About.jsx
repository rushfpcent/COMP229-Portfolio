import React from "react";
import PdfViewer from "./PdfViewer";

export default function About() {
    return (
        <>
            <p>About Me</p>
            <PdfViewer pdfUrl="/client/public/document.pdf" />
        </>
        
    );
}