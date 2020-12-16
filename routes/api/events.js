const express = require('express');
const {asyncHandler} = require('../../utils.js')
const db = require('../../db/models')
const { Event, Event_Member, Group_Member, Group } = db
const router = express.Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get(`/test`, asyncHandler( async(req, res) => {
  const message = {message: 'hello'}
  res.json({message})
}))


// returns all events for a particular date

router.get(`/:date/:user`, asyncHandler( async(req, res) => {
  console.log('hello')
  let date = req.params.date
  // console.log(date)
  let member_id = req.params.user
  // let formattedDate = date.split('-')
  // let dateString = ''
  // dateString += formattedDate[1] + '/' + formattedDate[2] + '/' + formattedDate[0]
  // console.log('HERE IS THE DATE:' , dateString)
  console.log(member_id)
  const memberGroups = await Group_Member.findAll({
    where: {
     member_id
    },
    include: [{model: Group}]
  })

  console.log('MEMBER GROUPS:', memberGroups)
  const groups = []

  await memberGroups.forEach(group => {
    groups.push(group.group_id)
  })

  console.log(groups)

  const events = await Event.findAll( {
    where: {
      group_id: {
        [Op.or]: groups
      }
    }
  })

  console.log(events)

  // res.json({matchingEvents})
  res.json({events})
}))


// allows user to attend an event

router.post('/:id/attend', asyncHandler( async (req, res) => {
  const event_id = req.params.id
  // console.log('EVENT ID:', event_id)
  const {member_id} = req.body;
  await Event_Member.create({
    event_id,
    member_id
  });
  res.json({message: 'success'});
}));


// allows user to un-attend an event

router.post('/:event_id/unattend', asyncHandler( async(req, res) => {

  const event_id = req.params.event_id
  const {member_id} = req.body;

  await Event_Member.destroy({
    where: {
      [Op.and]: [{event_id}, {member_id}]
    }
  });
  // res.status(200);
  res.json({message: 'success'})
}));

// allows user to create an event

// "10/29/2020"

router.post(`/create`, asyncHandler( async(req, res) => {
  const {name, description, date_start, date_end, group_id} = req.body
  await Event.create({
    name,
    description,
    date_start,
    date_end,
    group_id
  });
  // res.status(201);
  res.json({message: 'success'})
}));

// allows user to delete an event

router.delete(`/:id/delete`, asyncHandler( async(req, res) => {
 const event_id = req.params.id
  await Event.destroy({
    where: {
      id: event_id
    }
  });
  // res.status(200);
  res.json({message: 'success'})
}));


// provides info to the front end about a users event status

router.get(`/:eventId/:member_id/check-status`, asyncHandler(async(req, res) => {
  const event_id = req.params.eventId
  const member_id = req.params.member_id
  // const {member_id} = req.body
  // console.log('GROUP ID:', group_id)
  // console.log('MEMBER ID:', member_id)
  const isMember = await Event_Member.findAll({
    where: {
      [Op.and]: [{event_id}, {member_id}]
    }
  })
  // console.log('IS MEMBER:', isMember)
  isMember.length > 0 ? res.json({content: 'content'}) : res.json({})

}))

// router.get(`/check-attendence/:id`, asyncHandler(async(req, res) => {
//   // console.log('hello')
//   const member_id = req.params.id
//   // const {member_id} = req.body
//   // console.log('GROUP ID:', group_id)
//   console.log('MEMBER ID:', member_id)
//   const isMember = await Event_Member.findAll({
//     where: {
//       member_id
//     }
//   })
//   // console.log('IS MEMBER:', isMember)
//   // isMember.length > 0 ? res.json({content: 'content'}) : res.json({})
//   console.log(isMember)
//   // res.json({'member_id': 'member_id'})
// }))

module.exports = router;
