import React from 'react';
import MediaCard from './MediaCard'
import Gate from './Gate'
import './App.css';

function App() {
  return (
    <div>
      <MediaCard title="Media Card" body="Media card content" imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/womanyellingcat-1573233850.jpg"/>
      <Gate />
    </div>
  );
}

export default App;