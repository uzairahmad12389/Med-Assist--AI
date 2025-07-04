import { useState } from 'react';
import './VoiceInput.css';

function VoiceInput() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const toggleRecording = async () => {
    setIsRecording(true);
    setTranscript('');
    setResponse(null);

    // Simulate 3-second recording
    await new Promise((res) => setTimeout(res, 3000));

    setIsRecording(false);
    setTranscript("I've been having frequent headaches every morning. Should I be worried?");
  };

  const analyze = async () => {
    if (!transcript) return;
    setIsLoading(true);
    setResponse(null);

    await new Promise((res) => setTimeout(res, 2500));

    setResponse(
      "Your symptoms may relate to stress, posture, or poor sleep quality. It's best to consult a healthcare provider for a professional evaluation."
    );

    setIsLoading(false);
  };

  return (
    <section className="voice-section">
      <div className="voice-container">
        <h2 className="voice-heading">Voice Health Q&A</h2>
        <p className="voice-subheading">
          Speak your question naturally — our AI will analyze it and guide you with helpful information.
        </p>

        <button
          className={`voice-button ${isRecording ? 'recording' : ''}`}
          onClick={toggleRecording}
        >
          {isRecording ? '🔴 Recording… Tap to Stop' : '🎙️ Start Recording'}
        </button>

        {isRecording && (
          <div className="recording-status">
            <div className="pulse-circle"></div>
            <p>Listening for your query...</p>
          </div>
        )}

        {transcript && (
          <div className="voice-box">
            <h3>Captured Transcript</h3>
            <p>{transcript}</p>
          </div>
        )}

        <button
          className="analyze-button"
          onClick={analyze}
          disabled={!transcript || isLoading}
        >
          {isLoading ? 'Analyzing…' : 'Analyze Voice Input'}
        </button>

        {isLoading && (
          <div className="voice-loading">
            <div className="spinner"></div>
            <p>Analyzing your speech, please wait…</p>
          </div>
        )}

        {response && (
          <div className="voice-box response">
            <h3>AI Response</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default VoiceInput;
