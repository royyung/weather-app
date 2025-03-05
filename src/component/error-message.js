import '../styles/error-message.css';

function ErrorMessage(err) {

  return (
    <div className="error-card">
      <h2>Error</h2>
      <div className="error-message">We cannot tell where you are located, no weather information.</div>
    </div>
  )
}

export default ErrorMessage;