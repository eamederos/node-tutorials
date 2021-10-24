const {postgresClient} = require('../bd/database')

const getAllTasks = (req,res)=>{
    res.send("Get all tasks from controllers")
    postgresClient.connect()
    postgresClient.query('select * from task',(err,res)=>{
        console.log(res.rows)
    })
}
const getTask = (req,res)=>{
    //res.send("Get a single Task from controller")
    res.json({id:req.params.id})
}
const updateTask = (req,res)=>{
    res.send("Update task from controllers")

}

const createTask = (req,res)=>{
    // res.send("Creating a task from controllers")
    res.json(req.body)
}

const deleteTask = (req,res)=>{
    res.send("Deleting a task from controllers")
}

module.exports = {
    getAllTasks,
    getTask,
    updateTask,
    createTask,
    deleteTask
}
