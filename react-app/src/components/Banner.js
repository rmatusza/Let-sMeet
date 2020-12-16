import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  myColor: {
    color: theme.palette.primary.main
  }
}))

const Banner = () => {
  const classes = useStyles();
  const userName = localStorage.key(0)
  const history = useHistory();


  const homePage = async () => {

    await history.replace(`/`)

  }

  return(
    <div className="banner-component">

        {/* left side of banner */}

        <div className="left-side">

          <div className="logo-container">
            {/* <img src={Logo} className="logo"></img> */}
          </div>

          <div className="site-name-container" onClick={homePage}>
            <h1 className="site-name">Let's Meet!</h1>
          </div>

        </div>

        {/* right side of banner */}

        <div className="right-side">
          <div className="welcome-user">
            Welcome Back {userName}!
          </div>

          <div className="user-icon">
            <AccountCircleIcon />
          </div>

        </div>

      </div>
  )
}

export default Banner;
