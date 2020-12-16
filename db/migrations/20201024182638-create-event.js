'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      date_start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_end: {
        allowNull: false,
        type: Sequelize.DATE
      },
      group_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Groups' }
      },
      attendes: {
        allowNull: true,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Events');
  }
};
