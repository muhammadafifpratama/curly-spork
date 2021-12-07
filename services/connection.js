const config = require('../config/config.json');
const Pool = require('pg').Pool

const { host, username, password, database } = config.development;
const pool = new Pool({
  user: username,
  host: host,
  database: database,
  password: password,
})
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = pool;