import React, { useState } from 'react';

const Room = function() {
  const [isLit, setLit] = useState(true);
  const brightness = isLit? 'lit' : 'dark'
  const [temp, setTemp] = useState(22);
  return (
    <div className={`room ${brightness}`}>
      The room is { isLit? 'lit' : 'dark' }
      <br />
      
      <button onClick={ () => setLit(!isLit) } >
        flick
      </button>
      <button onClick={ () => setLit(true) } >
        On
      </button>
      <button onClick={ () => setLit(false)} >
        Off
      </button>
      <br />
      The temperature is { temp } degrees celsius.
      <br />
      <button onClick={ () => setTemp(temp+1) } >
        +
      </button>
      <button onClick={ () => setTemp(temp-1) }>
        -
      </button>
    </div>
  )
}

export default Room;
