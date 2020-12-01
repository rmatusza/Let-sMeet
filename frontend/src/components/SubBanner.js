import React, {useState} from 'react';
import Banner from './Banner';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';
import { palette } from '@material-ui/system';
import Logo from '../images/logo.png'


const SubBanner = (props) => {
  // const classes = useStyles();
  // const userName = localStorage.key(0)
  return (
    <>
     <Banner />

      {/* sub banner -- maybe can make into its own component later */}

      <div className="sub-banner">

        <div className="catch-phrase">
          <h1 className="catch-phrase-text">Find Your Next Event</h1>
        </div>

        <div className="events-nearby">
          <h4 className="events-nearby-text">30 Events in Your Area</h4>
        </div>

      </div>
      {/* <SubBanner /> */}

    </>
  )
}

// bgcolor="primary.main" color="primary.contrastText" p={2}
export default SubBanner;
