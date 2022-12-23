const sequelize = require('../config/connection');
const { User } = require('../models');
const { Bounty } = require('../models');

const userData = require('./userData.json');
const bounties = require('./bounties.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Bounty.bulkCreate(bounties, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();