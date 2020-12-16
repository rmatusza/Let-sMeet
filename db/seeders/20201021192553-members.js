'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Members", [
      {
        username: "test1",
        email: "test1@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test2",
        email: "test2@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test3",
        email: "test3@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test4",
        email: "test4@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test5",
        email: "test5@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test6",
        email: "test6@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test7",
        email: "test7@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test8",
        email: "test8@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test9",
        email: "test9@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test10",
        email: "test10@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test11",
        email: "test11@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test12",
        email: "test12@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "test13",
        email: "test13@test.com",
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Ryan',
        email: 'test@test.com',
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Members', null, {});
  }
};
