import "./CoolButton.css";

import React from 'react';

const CoolButton = ({ onContinue }) => {
  return (
    <button class="button-30" role="button" onClick={onContinue}>Wow that sounds so interesting Faker. Also have you heard of the League of Leg-</button>
  )
}

export default CoolButton;