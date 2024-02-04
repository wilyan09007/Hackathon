// src/FrontPage.js

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import CoolButton from './CoolButton';

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

const FrontPage = ({ onContinue }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TypeAnimation
        sequence={[
          'Hello!',
          1500,
          'This is Faker!',
        ]}
        wrapper="span"
        speed={50}
        style={{ marginTop: 40, fontSize: 96, fontFamily: 'SpaceMono-Regular', display: 'inline-block' }}
      />
      {/* <TypeAnimation
        sequence={[
          '',
          3250,
          'A simple and fast way to learn about data misinformation.',
        ]}
        wrapper="span"
        speed={70}
        style={{ fontFamily: 'SpaceMono-Regular', fontWeight: 'lighter', fontSize: 26, margin: 0, display: 'inline-block' }}
      /> */}

      <TypeAnimation
        sequence={[
          '',
          3250,
          'A simple and fast way to find your arranged marriage partner!',
        ]}
        wrapper="span"
        speed={70}
        style={{ fontFamily: 'SpaceMono-Regular', fontWeight: 'lighter', fontSize: 26, margin: 0, display: 'inline-block' }}
      />


      <CoolButton name={'Wow that sounds so interesting Faker. Also do you play  League of Leg-'} onContinue={onContinue}/>
      
    </div>
  );
};

export default FrontPage;