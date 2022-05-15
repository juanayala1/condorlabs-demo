require('dotenv').config();

const config = {
  settings: {
    // connectionName: "connection_mongo_1",
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    database: process.env.DATABASE,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    replicaSet: process.env.REPLICASET,
    ssl: process.env.SSL,
    authSource: process.env.AUTHSOURCE
  }
}

module.exports = { config }

