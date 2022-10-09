// 1. Importing mysql modules
const mysql = require('mysql')
// 2. Establishing a connection to a MySQL database
const db = mysql.createPool({
  host: '127.0.0.1', // IP address of the database
  user: 'root', // Login to the database account
  password: '1234567', // Password for logging into the database
  database: 'dbtest', // Specify which database to operate on
})

// Test that the mysql module is working
db.query('select 1', (err, results) => {
  // mysql module is reporting an error during work
  if(err) return console.log(err.message)
  // Ability to execute SQL statements successfully
  console.log(results)
}) 

// Query all the data in the user table
// const sqlStr = 'select * from user'
// db.query(sqlStr, (err, results) => {
//   // Query data failure
//   if (err) return console.log(err.message)
//   // Enquiry data successful
//   // Note: If a select query is executed, the result will be an array
//   console.log(results)
// }) 

//  add data to the user table, where username is Lily and password is pcc321
// const user = { username: 'Lucy', password: 'pcc123',email:"ck@gmail.com" }
// // Define the SQL statement to be executed
// const sqlStr = 'insert into user (username, password,email) values (?, ?,?)'
// // Executing SQL Statements
// db.query(sqlStr, [user.username, user.password,user.email], (err, results) => {
//   // Failed to execute SQL statement
//   if (err) return console.log(err.message)
//   // Success
//   // Note: If the insert into insert statement is executed, the results is an object
//   // The affectedRows property can be used to determine whether the data was inserted successfully
//   if (results.affectedRows ===1) {
//     console.log('Insert data successfully!')
//   }
// }) 

// A convenient way to insert data
// const user = { username: 'Mike2', password: 'pcc345' }
// // Define the SQL statement to be executed
// const sqlStr = 'insert into user set ?'
// // Executing SQL Statements
// db.query(sqlStr, user, (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('Insert data successfully')
//   }
// }) 

// update user
// const user = { id: 4, username: 'aaa', password: '000' }
// // Defining SQL Statements
// const sqlStr = 'update user set username=?, password=? where id=?'
// // Executing SQL Statements
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//   if (err) return console.log(err.message)
//   // Note: After the update statement is executed, the result of the execution is also an object that 
//   //can be used to determine whether the update was successful by using the affectedRows
//   if (results.affectedRows === 1) {
//     console.log('Update successful')
//   }
// }) 

// A convenient way to update data
// const user = { id: 3, username: 'aaaa', password: '0000' }
// // Defining SQL Statements
// const sqlStr = 'update user set ? where id=?'
// // Executing SQL Statements
// db.query(sqlStr, [user, user.id], (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('Update successful')
//   }
// }) 

// Delete the user with id 4
// const sqlStr = 'delete from user where id=?'
// db.query(sqlStr, 4, (err, results) => {
//   if (err) return console.log(err.message)
//   // Note: After executing the delete statement, 
//   //the result is also an object that will also contain the affectedRows property
//   if (results.affectedRows === 1) {
//     console.log('Delete data successfully')
//   }
// }) 

// Marker deletion
// const sqlStr = 'update user set status=? where id=?'
// db.query(sqlStr, [1, 6], (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('Marker deletion successfully')
//   }
// })
