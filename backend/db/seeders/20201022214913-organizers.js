'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert("Organizers", [
     {
       member_id: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
      },
     {
      member_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      member_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      member_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
    {
      member_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      member_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      member_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      member_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      member_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      member_id: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      member_id: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      member_id: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      member_id: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Organizers', null, {});
  }
};
