import React, { , useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, createGenerateClassName, Grid, Paper } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import { BiDownArrow  } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";

const EventsHomePage = (props) => {
  // console.log(props)
  const [isActive, setisActive] = useState(<BiDownArrow />)
  const [divState, setdivState] = useState('expandable-content--inactive')
  const [checked, setChecked] = useState('Loading...')
  const [eventChecked, setEventChecked] = useState('loading...')

  const useStyles = makeStyles((theme) => ({
    grid: {
      width: '100%',
      margin: '0px'
    },

    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: theme.palette.secondary.light,
      background: theme.palette.success.light,
      color: theme.palette.secondary.contrastText,
      height: '75px'
    },

    typography: {
      fontSize: theme.typography.fontSize
    }
  }));

  const classes = useStyles()



  const handleClick = async (e) => {
    // let divStateObjectClone = {...divStateArr[0][e.target.id]}
    // console.log(divStateObjectClone)
    const memberKey = localStorage.key(0)
    const member_id = localStorage.getItem(memberKey)
    const event_id = e.target.id

    const res = await fetch(`http://localhost:8080/api/events/${event_id}/${member_id}/check-status`)

    if(res.ok) {
      const eventStatus = await res.json()

      eventStatus.content ? await setEventChecked(true) : await setEventChecked(false)

    } else {
      console.error('something went wrong')
    }

    await isActive.type.name === "BiUpArrow" ? setisActive(<BiDownArrow />) : setisActive(<BiUpArrow />)

    await divState === "expandable-content--inactive" ? setdivState("expandable-content--active") : setdivState("expandable-content--inactive")

  }

  const joinEvent = async (e) => {
    // console.log(e.target.id)
    const memberKey = localStorage.key(0)
    const member_id = localStorage.getItem(memberKey)
    // console.log(member_id)
    const event_id = e.target.id
    const body = {member_id}
    if(eventChecked === false){
      await setEventChecked(true)
      const res = await fetch(`http://localhost:8080/api/events/${event_id}/attend`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
      })
    } else {
        await setEventChecked(false)
        const res = await fetch(`http://localhost:8080/api/events/${event_id}/unattend`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
      }

  }
  return(
    <>
    <div className="your-events">
      <h1 >
        Your Events
      </h1>
    </div>
    <div className="no-events">
      {(() => {
        if(props.events.length === 0) {
          return <h3>No Events Scheduled for Today</h3>
        }
      })()}
    </div>
    <div className="events-container">
      {props.events.map((event, idx) => {
        return (
          <Grid item xs={5} md={10} key={idx}>
            <div>
                <h3>{event.date_start.slice(0, 10)}</h3>
              </div>
            <CardActionArea id={event.id}>
              <Card className={classes.paper} id={event.id}>
                <div className={`event-card-${event.id}`} key={idx} onClick={handleClick} id={event.id} >
                    <CardContent id={event.id}>
                      <div className="event-name-with-button">
                        <span className="event-name" id={event.id}>
                          {event.name}
                        </span>
                        <span className="expand-arrow">
                          {isActive}
                        </span>
                      </div>
                    </CardContent>
                </div>
              </Card>
            </CardActionArea>
              <div className={divState} >
                <div className="event-description-left">
                  {event.description}
                </div>
                <div className="event-description-right">
                  <div className="event-description-right-attending">
                    {/* <BsFillPeopleFill size={25}/><span><h4>X People Going</h4></span> */}
                  </div>
                  <div className="checkbox-container">
                    <form className="attending-form">
                      <label for="attending" className="label-for-attending-button">
                      <Checkbox className="join-group-checkbox" onClick={joinEvent} checked={eventChecked} id={event.id}/>
                      </label>
                      <div className="count-me-in">
                        <h3>Count Me In!</h3>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </Grid>
        )
      })}

    </div>
    </>
  )
}


export default EventsHomePage;
