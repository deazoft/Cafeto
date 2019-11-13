const Pool = require('pg').Pool
const pool = new Pool({
    password: "postgres",
    user: "postgres",
    host: "postgres",
    database: 'ranking',
    port: 5432,
});

module.exports = pool;