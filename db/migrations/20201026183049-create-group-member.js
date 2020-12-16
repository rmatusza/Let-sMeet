'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Group_Members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Groups' }
      },
      member_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Members' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Group_Members');
  }
};
