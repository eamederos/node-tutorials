const {Client} = require('pg')
const postgresClient = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'eamederos2020',
    database: 'node_pg'
})

module.exports = postgresClient

// postgresClient.connect()
// postgresClient.query('select * from task',(err,res)=>{
//     if(!err){
//         console.log(res.rows)
//     }
//     else{
//         console.log(err.message)
//     }
//     postgresClient.end()
    
// })
// console.log('termianndo')