import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import CoolButton from '../../src/frontpage/CoolButton';

import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      alignItems: 'left',
      display: 'flex',
      flexDirection: 'column',
    },
    paragraph: {
      fontFamily: 'SpaceMono-Regular',
      fontWeight: 100,
      fontSize: 26,
      margin: 0,
    },
    continue: {
      fontFamily: 'SpaceMono-Regular',
      fontSize: 26,
      marginTop: 20,
      width: '35%',
      borderRadius: '10px'
    },
  })
);

const ContentPage = ({ tweets, currentTweetIndex, onGuess }) => {
  return (
    <div id="content-page">
      <div id="tweet-container">
        <TypeAnimation
          sequence={[tweets[currentTweetIndex]]}
          wrapper="span"
          speed={50}
          style={{ marginTop: 40, fontSize: 72, fontFamily: 'SpaceMono-Regular', display: 'inline-block' }}
        />
      </div>
      <div id="buttons-container">
        <CoolButton name={'Real'} onContinue={() => onGuess(true)} />
        <CoolButton name={'Fake'} onClick={() => onGuess(false)} />
      </div>
    </div>
  );
};

export default ContentPage;
