const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
require('dotenv').config()

//Mongo Setup
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});


app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

//DB MODEL
const exerciseSchema = new mongoose.Schema({
  description: {type: String, required: true},
  duration: {type: Number, required: true},
  date: String
})

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  log: [exerciseSchema]
})

const Exercise = mongoose.model("Exercise", exerciseSchema)
const User = mongoose.model("User", userSchema) 

//Create an user
app.post("/api/users", (req,res)=>{
  let person = new User({
    username: req.body.username
  })
  person.save( (err, data) => {
    if (err) return console.log(err);
    console.log("User created")
    res.json({username: data.username, _id: data.id})
  })
})
//Check all users
app.get("/api/users", async (req, res) => {
  const usersArr = await User.find()
  res.json(usersArr)
})
//Add an exercise to an user
app.post("/api/users/:_id/exercises", (req, res) => {
  if (!req.body.date){
    var date = new Date()
  }
  else { 
    var date = new Date(req.body.date)
  }
  let exercise = new Exercise({
    description: req.body.description,
    duration: req.body.duration,
    date: date.toDateString()
  })
  User.findByIdAndUpdate(req.params._id,
    {$push: {log: exercise}},
    {new: true},
    (err, data) => {
      if (err) return console.log(err);
      console.log("exercise added")
      res.json({username: data.username,
        description: exercise.description,
        duration: exercise.duration,
        date: exercise.date,
        _id: data.id
    })
  })
})
//Check logs of exercises of an user
app.get("/api/users/:_id/logs", (req, res) => {
  const user = User.findById(req.params._id, (err, data) => {
    if (err) return console.log(err);
    const {from, to, limit} = req.query
    let logArr = data.log
    //Check if query params have been added to URL
    if (from) logArr = logArr.filter(ex => {
      let exDate = new Date(ex.date)
      let fromDate = new Date(from)
      return (exDate > fromDate)
    })
    if (to) logArr = logArr.filter(ex => {
      let exDate = new Date(ex.date)
      let toDate = new Date(to)
      return (exDate < toDate)
    })
    if (limit) logArr = logArr.slice(0, limit)
    //Send response
    res.json({
      username: data.username,
      count: data.log.length,
      _id: data.id,
      log: logArr
    })
  })
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
