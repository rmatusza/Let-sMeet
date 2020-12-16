'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      organizer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Organizers'}
      },
      members: {
        allowNull: true,
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('Groups');
  }
};
