const { config } = require("./constans");
const MongoDB = require('@condor-labs/mongodb')(config.settings);

const connect = async () => {
  await MongoDB.getClient();
  console.log(`isConnected(after):${MongoDB._isConnected()}`);	
};
module.exports = connect;