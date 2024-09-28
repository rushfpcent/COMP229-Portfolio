import PDFViewer from "./PDF";

export default function About() {
    return (
        <>
            <p>About Me</p>
            <div className="App" style={{ width: '100vw' }}>
			    <div className="PDF-viewer">
				    <PDFViewer document={'document.pdf'} />
			    </div>
		    </div>

        </>
        
    );
}