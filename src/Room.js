import React, { useState } from 'react';

const Room = function() {
  const [isLit, setLit] = useState(true);
  return (
    <div>
      <div className="room">The room is {isLit ? 'lit' : 'dark'}</div>
    </div>
  )
}

export default Room;
