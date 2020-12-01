import React, {useEffect, useState, createContext} from 'react'
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {store} from '../store'
import {updateEvents} from '../actions/updateEvents';
import {updateDate} from '../actions/currentDate';

const CalendarComponent = () => {

  const [currentDate, setCurrentDate] = useState('')
  const [events, setEvents] = useState([]);



  const handleDateChange = async (e, date) => {
    const memberKey = localStorage.key(0)
    const userid = localStorage.getItem(memberKey)
    console.log(date)
    console.log(e)
    if(e) {
      setCurrentDate(e.target.value)
      console.log(e.target.value)
      const res = await fetch(`http://localhost:8080/api/events/${e.target.value}/${userid}`)

      const matchingEvents = []

      if(res.ok) {
        const data = await res.json()
        data.events.forEach(event => {
          if(event.date_start.slice(0, 10) === e.target.value) {
            matchingEvents.push(event)
          }
        })
        console.log(matchingEvents)
        setEvents(matchingEvents)
        store.dispatch(updateEvents(matchingEvents))
      }
      console.log(store.getState())

    } else {
      const res = await fetch(`http://localhost:8080/api/events/${date}/${userid}`)
      const matchingEvents = []
      if(res.ok) {
        const data = await res.json()
        console.log('MATCHING EVENTS:', data)
        data.events.forEach(event => {
          if(event.date_start.slice(0, 10) === date) {
            matchingEvents.push(event)
          }
        })

        setEvents(matchingEvents)
        store.dispatch(updateEvents(matchingEvents))
      }
      console.log(store.getState())
    }
  }

  useEffect(() => {

    const dateFunction = async () => {
      const memberKey = localStorage.key(0)
      const userid = localStorage.getItem(memberKey)

      const date = new Date()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const year = date.getFullYear()

      // await setCurrentDate(`${year}-${month}-${day}`)
      let currentDate = `${year}-${month}-${day}`
      await setCurrentDate(`${month}-${day}-${year}`)
      await handleDateChange(null, currentDate)
    }

    dateFunction()
  }, [])

  let defaultDate;

  const getDate = () => {
    const date = new Date()
    const month = date.getMonth() + 1
    let day = date.getDate()
    if(day < 10) {
      day = `0`+ date.getDate()
    }
    const year = date.getFullYear()

    // setCurrentDate(`${year}-${month}-${day}`)

    // store.dispatch(updateDate([`${year}-${month}-${day}`]))
    console.log(`${year}-${month}-${day}`)
    return`${year}-${month}-${day}`
  }

  // getDate()


  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

    const classes = useStyles();
    // console.log(currentDate)
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Event Calendar"
          defaultValue={getDate()}
          type="date"
          className={classes.textField}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
}

export default CalendarComponent;
