import React, {Component} from 'react';

const Gate = ({ isOpen }) => {
  return (
    <div>
      <h2>Gate</h2>
      {isOpen ? "open" : "closed"}
    </div>
  )
}

export default Gate;