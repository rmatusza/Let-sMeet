import React, {useState, useContext, useEffect} from 'react';
import Groups from './Groups';
import Drawer from 'react-drag-drawer'
import Button from '@material-ui/core/Button';
import CalendarComponent from './Calendar';
import { makeStyles } from '@material-ui/core/styles';
import {store} from '../store'
import EventsHomePage from './EventsHomePage';
import { BsFillPauseFill } from 'react-icons/bs';

const NavBar = (props) => {
  const [inputValue, setInputValue] = useState('')
  const [city, setCity] = useState('Houston')
  const [groups, setGroups] = useState([])
  const [groupId, setIds] = useState([])
  const [eventsState, setEvents] = useState([])
  const [eventsButton, setEventButton] = useState(true)
  const [groupsButton, setGroupsButton] = useState(false)

  //---------------------------------------------------//

  let events;
  const memberKey = localStorage.key(0)
  const memberId = localStorage.getItem(memberKey)


  useEffect(() => {
    if(localStorage.getItem('city')) {
      setCity(localStorage.getItem('city'))
    }

    const fetchUserGroups = async () => {
      const res = await fetch(`http://localhost:8080/api/groups/users/${memberId}`)
      let groupMatches = []
      let groupIds = []
      if(res.ok) {
        const groupResponse = await res.json()
        // await setGroups(groupResponse)
        // console.log(groupResponse)
        groupResponse.groups.forEach(group => {
          let groupName = group.Group.name
          let groupId = group.Group.id
          // let lowerGroupName = groupName.toLowerCase()
          groupMatches.push(groupName)
          groupIds.push(groupId)
          // console.log(group.Group.name)
        })
        setGroups(groupMatches)
        setIds(groupIds)
      }
    }
    fetchUserGroups()
  }, [])

  const updateEvents = () => {
    // console.log(store.getState())
    events = store.getState()
    setEvents(events)
    // console.log(events)
  }

  // useEffect(() => {
  //   const updateState = async () => {
  //     console.log(store.getState())
  //     events = store.getState()
  //     setEvents(events)
  //     console.log(events)
  //   }
  // }, [])


  const unsubscribeUpdateEvents = store.subscribe(updateEvents);




  const updateInputVal = e => setInputValue(e.target.value)

  const cityContext = useContext([city, setCity])

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();


  // returns an array of groups that satisfy the search query, as well as updates the groups state to that array

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userCity = {city}
    console.log(userCity)
    const res = await fetch(`http://localhost:8080/api/groups/search/${userCity.city}`)
    if (res.ok && inputValue) {
      const returnedGroups = await res.json({groups})
      console.log(returnedGroups.groups)

      let groupMatches = []
      let groupIds = []

      returnedGroups.groups.forEach(group => {
        let groupName = group.name
        let lowerGroupName = groupName.toLowerCase()
        if(lowerGroupName.includes(inputValue.toLowerCase())) {
          groupMatches.push(groupName)
          groupIds.push(group.id)
        }
        // console.log(group.name)
      })

      console.log(groupMatches)

      setGroups(groupMatches)
      setIds(groupIds)

      return
    }

    console.error('something went wrong with the search')
  }

  const handleCityInput = (e) => {
    setCity(e.target.value)
  }

  const handleCityChange = (e) => {
    e.preventDefault()
    if (localStorage.getItem('city')) {
      localStorage.removeItem('city')
    }

    localStorage.setItem('city', city)
  }

  const handleGroupClick = () => {
    if(groupsButton) {
      setGroupsButton(false)
      setEventButton(true)
    } else {
      setGroupsButton(true)
      setEventButton(false)
    }
  }

  const handleEventClick = () => {
    if(eventsButton) {
      setEventButton(false)
      setGroupsButton(true)
    } else {
      setEventButton(true)
      setGroupsButton(false)
    }
  }


  return (
    <>
      <div className="navbar-container">

        <div className="search-bar-container">
          <form onSubmit={handleSubmit}>
            <input className="search-bar" value={inputValue} onChange={updateInputVal} placeholder={'Search'} />
          </form>
        </div>

        <div className="location-container">
          <form onSubmit={handleCityChange}>
            City: <input className="city-name" defaultValue={city} onChange={handleCityInput} value={city}/>
          </form>
        </div>

        <div className="group-events-toggle">
          <div className="group-button" onClick={handleGroupClick}>
            {(() => {
              console.log('BUTTON STATE:', groupsButton)
              if(groupsButton === false) {
               return <Button variant="outlined" color="primary" style={{color: "teal"}}>Groups</Button>
              } else {
                return <Button variant="contained" color="primary">Groups</Button>
              }
            })()}

          </div>
          <div className="event-button" onClick={handleEventClick}>
          {(() => {
              console.log('BUTTON STATE:', eventsButton)
              if(eventsButton === false) {
               return <Button variant="outlined" color="primary" style={{color: "teal"}}>Events</Button>
              } else {
                return <Button variant="contained" color="primary">Events</Button>
              }
            })()}

          </div>
        </div>

      </div>
      <div className="calendar">
        <CalendarComponent />
      </div>
      {(() => {
        if(eventsButton === true) {
          return  <EventsHomePage events={eventsState} />
        } else {
          return
        }
      })()}

      {(() => {
        if(groupsButton === true) {
          return  <Groups groups={groups} ids={groupId} />
        } else {
          return
        }
      })()}
      {/* <Groups groups={groups} ids={groupId} /> */}

    </>
  )
}

export default NavBar;
