// Importing node modules
import express from 'express'
// Importing source files
import routes from './routes/index'
import users from './routes/users'

// consts
const app = express()

app.use('/', routes)
app.use('/users', users)

//Spread Operator (only for test)
const params = [ "hello", true, 7 ]
const other = [ 1, 2, ...params ]

// arrow functions
const server = app.listen(3000, () => {

  // destructuring
  const {address, port} = server.address()

  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`)
});
