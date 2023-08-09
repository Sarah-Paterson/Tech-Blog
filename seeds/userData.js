const User = require('../models/User');

const userData = [
    {
      username: "Xandromus",
      email: "Xandromus@hotmail.com",
      password: "password12345"
    },
    {
      username: "Lernantino",
      email: "lernantino@gmail.com",
      password: "password12345"
    },
    {
      username: "Amiko",
      email: "amiko2k20@aol.com",
      password: "password12345"
    },
    {
      username: "Jordan",
      email: "jordan99@msn.com",
      password: "password12345"
    },
    {
      username: "TheBlakester",
      email: "the_blake@yahoo.com",
      password: "password12345"
    }
  ];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
