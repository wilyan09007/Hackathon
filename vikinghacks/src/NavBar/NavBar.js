import React from 'react';

import {
  makeStyles,
  createStyles,
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
    }
  })
);

const NavBar = ({ onContinue }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TypeAnimation
        sequence={[
          'Hello!',
          2000,
          'This is Faker!',
        ]}
        wrapper="span"
        speed={50}
        style={{ marginTop: 40, fontSize: 96, fontFamily: 'SpaceMono-Regular', display: 'inline-block' }}
      />
      <TypeAnimation
        sequence={[
          '',
          3250,
          'A simple and fast way to learn about data misinformation.',
        ]}
        wrapper="span"
        speed={70}
        style={{ fontFamily: 'SpaceMono-Regular', fontWeight: 'lighter', fontSize: 26, margin: 0, display: 'inline-block' }}
      />
      <button onClick={onContinue}>Continue</button>
    </div>
  );
};

export default NavBar;