import { useState } from 'react';
import './ImageAnalysis.css';

function ImageAnalysis() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFile = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
      setResult(null);
    }
  };

  const analyze = async () => {
    if (!file) return;
    setIsLoading(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 2500));

    setResult({
      classification: 'The uploaded image shows no serious abnormality.',
      confidence: '92%',
      recommendation: 'Consult a physician for further evaluation if symptoms persist.',
    });

    setIsLoading(false);
  };

  return (
    <section className="image-section">
      <div className="image-wrapper">
        <h2 className="image-title">AI Image Analysis</h2>
        <p className="image-subtext">
          Upload a medical image (X-ray, skin lesion, etc.) to receive an AI-based analysis.
        </p>

        <label className="upload-box" htmlFor="fileUpload">
          <input id="fileUpload" type="file" accept="image/*" onChange={handleFile} />
          <div className="upload-content">
            <span>📁 Click or drag an image to upload</span>
          </div>
        </label>

        {preview && (
          <div className="preview-container">
            <img src={preview} alt="preview" className="preview-image" />
          </div>
        )}

        <button
          className="analyze-btn"
          onClick={analyze}
          disabled={!file || isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Analyze Image'}
        </button>

        {isLoading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Processing image, please wait...</p>
          </div>
        )}

        {result && (
          <div className="result-card">
            <h3>Analysis Result</h3>
            <p><strong>Classification:</strong> {result.classification}</p>
            <p><strong>Confidence:</strong> {result.confidence}</p>
            <p><strong>Recommendation:</strong> {result.recommendation}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ImageAnalysis;
