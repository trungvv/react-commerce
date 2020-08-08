import React from 'react';
import {HomepageContainer} from './homepage.style'
import Directory from '../../components/directory/directory.component';

export default function Homepage() {
  return (
    <HomepageContainer>
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </HomepageContainer>
  );
}
