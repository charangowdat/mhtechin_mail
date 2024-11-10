import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import LoginPage from './components/LoginPage';
import InboxPage from './components/InboxPage';
import ComposePage from './components/ComposePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('inbox');
  const emails = [
    { id: 1, subject: 'Welcome to Mail', sender: 'support@mhtechin.com' },
    { id: 2, subject: 'Project Update', sender: 'admin@mhtechin.com' },
  ];

  return (
    <div>
      <NavBar />
      <div className="d-flex">
        <SideMenu
          onInbox={() => setCurrentPage('inbox')}
          onCompose={() => setCurrentPage('compose')}
        />
        <div className="flex-grow-1 p-4">
          {!isLoggedIn ? (
            <LoginPage onLogin={() => setIsLoggedIn(true)} />
          ) : currentPage === 'inbox' ? (
            <InboxPage emails={emails} onCompose={() => setCurrentPage('compose')} />
          ) : (
            <ComposePage />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
