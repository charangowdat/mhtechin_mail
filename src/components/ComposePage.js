import React, { useState } from 'react';

const ComposePage = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    // Simulate email sending
    setSuccess(true);  // Display success message

    // Clear form fields
    setRecipient('');
    setSubject('');
    setMessage('');

    // Hide the success message after a few seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="container mt-4">
      <h2>Compose Email</h2>
      
      {success && (
        <div className="alert alert-success" role="alert">
          Email sent successfully!
        </div>
      )}

      <form onSubmit={handleSend}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default ComposePage;
