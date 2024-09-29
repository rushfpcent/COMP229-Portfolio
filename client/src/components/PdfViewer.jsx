/*
File Name: PdfViewer.jsx
Student Name: Soroush Fazel-Pour
Student ID: 301368534
Date: September 29, 2024
*/

//Knowledge for this obtained from react-pdf website

import React, { useState } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PdfViewer = ({ pdfUrl }) => {
    console.log('PDF URL: ', pdfUrl)
    // Create an instance of the default layout plugin
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div>
            {/* PDF Viewer */}
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer
                    fileUrl={pdfUrl}
                    plugins={[defaultLayoutPluginInstance]}
                    defaultScale={1.2}
                />
            </Worker>
        </div>
    );
};

export default PdfViewer;