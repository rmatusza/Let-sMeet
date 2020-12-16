'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert("Event_Members", [
     {
      event_id: 8,
      member_id: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
     }
   ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Event_Members', null, {});
  }
};
