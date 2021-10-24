const express = require('express')
const app = express()
const tasks = require('./routes/taskRouter')

//middleware
app.use(express.json());


app.get('/hello', (req, res) => {
  res.send('Home Page')
})

app.use('/api/v1/tasks',tasks) 

const port = 2001
app.listen(port, console.log(`server in listening on port ${port}...`))