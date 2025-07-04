import { useState } from 'react';
import './TextQA.css';

function TextQA() {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState(null);

  const submitQuestion = async () => {
    if (!question.trim()) return;
    setIsLoading(true);
    setAnswer(null);

    await new Promise((r) => setTimeout(r, 2000));

    setAnswer({
      text: 'Dehydration symptoms typically include excessive thirst, dry mouth, dizziness, and dark-colored urine.',
      confidence: '92%',
      references: 'Mayo Clinic, WebMD, NIH',
    });

    setIsLoading(false);
  };

  return (
    <section className="qa-section">
      <div className="qa-wrapper">
        <h2 className="qa-title">Health Text Q&A</h2>
        <p className="qa-subtitle">Type your medical question below and let our AI provide helpful guidance.</p>

        <textarea
          className="qa-textarea"
          rows="5"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g., What are the symptoms of dehydration?"
        />

        <button className="qa-submit-btn" onClick={submitQuestion} disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Submit Question'}
        </button>

        {isLoading && (
          <div className="qa-loading">
            <div className="spinner"></div>
            <p>Analyzing your question...</p>
          </div>
        )}

        {answer && (
          <div className="qa-card">
            <h3>AI Response</h3>
            <p>{answer.text}</p>
            <p><strong>Confidence:</strong> {answer.confidence}</p>
            <p><strong>References:</strong> {answer.references}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default TextQA;
