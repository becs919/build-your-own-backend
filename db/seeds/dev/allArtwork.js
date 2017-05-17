const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = function(knex, Promise) {
  return knex('artwork').del()
    .then(() => seedFile(knex, path.resolve('./csv/public_art.csv'), 'artwork', [
      'ACCESSION_DATE',
      'YEAR_INSTALLED',
      'TITLE',
      null,
      null,
      null,
      'DETAILED_LOCATION',
      'NOTES',
      'POINT_X',
      'POINT_Y'
    ], {
      columnSeparator: ',',
      ignoreFirstLine: true
    }));
};
