import { useState } from "react";
import Tesseract from "tesseract.js";
import "./UploadPrescription.css";

const UploadPrescription = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setExtractedText(""); // Clear previous text
    }
  };

  const handleExtractText = async () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }

    setLoading(true);
    setProgress(0);
    setExtractedText("");

    try {
      const { data } = await Tesseract.recognize(selectedFile, "eng", {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setProgress(Math.round(m.progress * 100));
          }
        },
      });

      setExtractedText(data.text || "No text detected.");
    } catch (error) {
      console.error("Error extracting text:", error);
      alert("Failed to extract text. Please try again.");
    }

    setLoading(false);
    setProgress(100);
  };

  const copyText = () => {
    navigator.clipboard.writeText(extractedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    });
  };

  return (
    <div className="container">
      <h1>📄 MediScriptAI</h1>
      <h2>Your Smart Text Recognition Assistant</h2>

      <label htmlFor="fileInput" className="upload-box">
        {selectedFile ? (
          <img src={selectedFile} alt="Preview" className="preview-image" />
        ) : (
          "Drag & Drop or Click to Upload Image"
        )}
      </label>
      <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} />

      <button onClick={handleExtractText} disabled={loading}>
        {loading ? `Processing... ${progress}%` : "🔍 Process Image"}
      </button>

      {loading && <div className="progress-bar"><div style={{ width: `${progress}%` }}></div></div>}

      <div className="output-box">
        {extractedText || "Recognized text will appear here..."}
      </div>

      <button onClick={copyText} disabled={!extractedText} className="copy-btn">
        {copied ? "✅ Copied!" : "📋 Copy Text"}
      </button>
    </div>
  );
};

export default UploadPrescription;
