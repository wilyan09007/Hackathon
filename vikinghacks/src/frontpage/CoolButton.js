import "./CoolButton.css";

import React from 'react';

const CoolButton = ({ onContinue, name }) => {
  return (
    <button class="button-30" role="button" onClick={onContinue}>{name}</button>
  )
}

export default CoolButton;