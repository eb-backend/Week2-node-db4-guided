const cleaner = require('knex-cleaner');

exports.seed = async function(knex) {
  await knex("zoo_animals").truncate()
  await knex("animals").truncate()
  await knex("species").truncate()
  await knex("zoos").truncate()
  // return cleaner.clean(knex, {
  //   mode: 'truncate', // resets ids
  //   ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  // });
};