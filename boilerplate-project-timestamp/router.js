//Here we decide to use our middleware functions for each route
const express = require("express")
const { getTime, getTimeDefault } = require("./controller") //Import my middleware functions
const router = express.Router()

//Remember "/" will be equivalent to "/api" and "/:dateInput" to "/api/:dateInput"
router.get("/", getTimeDefault)
router.get("/:dateInput", getTime)

module.exports = router