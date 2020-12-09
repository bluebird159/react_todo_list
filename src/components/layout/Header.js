import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headStyle}>
      <h1>Todo List</h1>
      <h2>Sao deo thay link dau?</h2>
      <Link to='/' style={linkStyle}> 
        Home
      </Link> | <Link to='/about' style={linkStyle}> 
        About
      </Link>
    </header>
  );
}

const headStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};
