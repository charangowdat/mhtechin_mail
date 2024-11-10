import React from 'react';

const SideMenu = ({ onInbox, onCompose }) => {
  return (
    <div className="d-flex flex-column bg-light p-4" style={{ width: '200px', minHeight: '100vh' }}>
      <button className="text-left mb-3" onClick={onInbox}>Inbox</button>
      <button className="text-left mb-3" onClick={onCompose}>Compose</button>
      <button className="text-left mb-3">Sent</button>
      <button className="text-left mb-3">Drafts</button>
    </div>
  );
};

export default SideMenu;
