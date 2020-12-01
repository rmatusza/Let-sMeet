const express = require('express');
const {asyncHandler} = require('../../utils.js')
const db = require('../../db/models')
const { Group, Group_Member, Organizer, Event, Member } = db
const router = express.Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const cors = require('cors');


// returns all group data releated to the user once the group tab is clicked

router.get(`/users/:memberId`, asyncHandler( async(req, res) => {
  const member_id = req.params.memberId
  const groups = await Group_Member.findAll({
    where: {
      member_id
    },
    include: [{model: Group}]
  })

  res.json({groups})
}))

// returns all groups that meet the search critera as well as the selected location

router.get(`/search/:city`, asyncHandler( async(req, res) => {
  const city = req.params.city
  // console.log(city)
  const groups = await Group.findAll({
    where: {
      city
    }
  })
  res.json({groups})
}))


// returns all info about the selected group and the events that belong to it

router.get(`/:id`, asyncHandler( async(req, res) => {
  const group_id = req.params.id
  // console.log('HERE IS THE ID:', group_id)
  const group = await Group.findOne({
    where: {
      id: group_id,
      // include: [{model: Organizer}]
    }
  })

  // console.log('HERE IS THE GROUP:', group.organizer_id)

  const events = await Event.findAll({
    where: {
      group_id
    }
  })

  const organizer = await Member.findOne({
    where: {
      id: group.organizer_id
    }
  })

  res.json({groupData: group,
    eventData: events, organizer: organizer})
}))

// allows user to create a group
// two-step process where first an organizer must be created
// followed by a group that is linked to the organizer's primary key

router.post(`/create`, asyncHandler( async(req, res) => {
  const {member_id, name, description, city, category} = req.body
 await Organizer.create({
    member_id
  })

  await Group.create({
    name,
    description,
    city,
    category,
    organizer_id: member_id
  })

  // res.status(201)
  res.json({message: "group was made"})
}))


// allows user to delete a group

router.delete(`/:id/delete`, asyncHandler( async(req, res) => {
  const group_id = req.params.id
  await Group.destroy({
    where: {
      id: group_id
    }
  })

  res.json({message: "group was deleted"})
}))


// allows a user to subscribe to a group

router.post(`/:groupId/subscribe`, asyncHandler( async(req, res) => {
  const group_id = req.params.groupId
  const {member_id} = req.body

  await Group_Member.create({
    group_id,
    member_id
  })

  // res.status(200)
  res.json({message: "Member joined group!"})
}))

router.patch(`/:groupId/increment`, asyncHandler( async(req, res) => {
  const group_id = req.params.groupId
  const {groupMembers} = req.body

  await Group.update({
    members: groupMembers,
    where: {
      id: group_id
    }
  })
}))

// allows a user to unsubscribe to a group

router.post(`/:groupId/unsubscribe`, asyncHandler( async(req, res) => {
  const group_id = req.params.groupId
  const {member_id} = req.body

  await Group_Member.destroy({
    where: {
      [Op.and]: [{group_id}, {member_id}]
    }
  })

  // res.status(200)
  res.json({message: "Member left group!"})
}))

// provides info to the front end about a users membership status

router.get(`/:groupId/:member_id`, asyncHandler(async(req, res) => {
  const group_id = req.params.groupId
  const member_id = req.params.member_id
  // const {member_id} = req.body
  // console.log('GROUP ID:', group_id)
  // console.log('MEMBER ID:', member_id)
  const isMember = await Group_Member.findAll({
    where: {
      [Op.and]: [{group_id}, {member_id}],
      // include: [{model: Event}]
    }
  })
  // console.log('IS MEMBER:', isMember)
  isMember.length > 0 ? res.json({content: 'content'}) : res.json({})

}))

// router.get(`:groupId/get/organizer`, asyncHandler(async(req, res) => {
//   console.log('HELLO FROM THE BOWELS OF HELL')
//   const group_id = req.params.groupId

//   const organizer = await Group.findAll({
//     where: {
//       id: group_id,
//       include: [{model: Organizer}]
//     }
//   })

//   res.json({organizer})
// }))

module.exports = router;
