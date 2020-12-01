import React, { useEffect } from 'react';
import Banner from './SubBanner'
import NavBar from './NavBar'
import Groups from './Groups'

const HomePage = () => {
  localStorage.setItem('ryan', 14)
  const username = localStorage.key(0)
  const user_id = localStorage.getItem(username)

 

  return (
    <div className="home-page">
      <Banner userId={user_id} username={username} />
      <NavBar />
      {/* <Groups /> */}
    </div>
  )
}

export default HomePage;
