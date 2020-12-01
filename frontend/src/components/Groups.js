import React, {useState}  from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, Grid, Paper } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Redirect } from "react-router-dom";




const Groups = (props) => {

  // const [groupId, setGroupId] = useState(null)
  const [group, setGroup] = useState([])
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
      height: '250px'
    },

    typography: {
      fontSize: theme.typography.fontSize
    }
  }));

  const history = useHistory();

  const handleClick = async (e) => {
    console.log('HANDLING GROUP CLICK:', e.target.id)
    if(e.target.id){
      await history.replace(`/groups/${e.target.id}`)
    }
  }

  const classes = useStyles()
  // console.log(classes)

  console.log(props)
  const groups = props.groups
  // console.log('ACTION AREA:', CardActionArea)
  return(
    <>
      <div className="your-groups-container">
        <h1 className="your-groups">
          Your Groups
        </h1>
      </div>
      <div className="groups-container">
        <Grid container spacing={2} className={classes.grid} >
          {groups.map((group, idx) => {
            return (
              <Grid item xs={12} md={4}>
                <CardActionArea >
                  <Card className={classes.paper}>
                    <div className="group-card" key={idx} onClick={handleClick} id={props.ids[idx]}>
                        <CardContent>
                          <span className="group-name" id={props.ids[idx]}>
                            {group}
                          </span>
                        </CardContent>
                    </div>
                  </Card>
                </CardActionArea>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
}


export default Groups;
