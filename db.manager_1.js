const sqls = require('mssql');
const dbConnections = require('./db.config');
console.log(dbConnections);
async function getUsersProducts(){
 console.log(' Connecting to SQL....... Cloud Server');  let dbContexts = await sqls.connect(dbConnections);
 console.log('The Databse connection was Successful');
 console.log('Getting data');
 let result = await dbContexts.request()
  .query(`
    SELECT TOP(20)
    firstName,
    middleName,
    lastName
    FROM
    salesLT.Customer
 `);

 console.log(`Returned SQL results`);
 return result;
}
//Export
module.exports = {getUsersProducts :getUsersProducts};