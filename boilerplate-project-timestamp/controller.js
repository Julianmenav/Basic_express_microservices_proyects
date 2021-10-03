//Just Middleware functions

const getTimeDefault = (req, res) => {
  const date = new Date()

  let unixDate = Date.now()
  let utcDate = date.toUTCString()

  res.json({"unix": unixDate, "utc": utcDate})
};

const getTime = (req, res) => {
  const dateString = req.params.dateInput
  if (/\d{5,}/.test(dateString))
    var date = new Date(Number(dateString))
  else
    var date = new Date(dateString)
  
  let unixDate = Date.parse(date)
  let utcDate = date.toUTCString()

  if (utcDate === "Invalid Date" || unixDate === "Invalid Date")
    res.json({"error": "Invalid Date"})

  res.json({"unix": unixDate, "utc": utcDate})
};

module.exports = {getTimeDefault, getTime}