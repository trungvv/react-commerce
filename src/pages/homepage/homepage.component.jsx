import React from 'react';
import './homepage.style.scss'
import Directory from '../../components/directory/directory.component';

export default function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
}
