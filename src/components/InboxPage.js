import React from 'react';

const InboxPage = ({ emails, onCompose }) => {
  return (
    <div className="container mt-4">
      <h2>Inbox</h2>
      <button className="btn btn-success mb-3" onClick={onCompose}>Compose New Email</button>
      <ul className="list-group">
        {emails.map((email) => (
          <li className="list-group-item" key={email.id}>
            <strong>{email.subject}</strong> - {email.sender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InboxPage;
