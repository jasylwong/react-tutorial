import React, { useState } from 'react';

const Room = function() {
  const [isLit, setLit] = useState(true);
  const brightness = isLit? 'lit' : 'dark'
  return (
    <div className={`room ${brightness}`}>
      The room is { isLit? 'lit' : 'dark' }
      <br />
      <button onClick={ () => setLit(!isLit) } >
        flick
      </button>
    </div>
  )
}

export default Room;
