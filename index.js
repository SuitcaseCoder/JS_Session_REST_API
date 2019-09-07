const express = require('express')
// setting up application
const app = express()
// setting up port at 3000
const port = 3000

//setting up one endpoint aka the root endpoint
//the get function takes two functions lamda defines what gets returned when that endpoint is requested
// first defines endpoint then the second defines how to reply with the request
// that lamda takes two arguments , and a message to send back when message is invoked
//'get' says: we're going to define this as a GET http request
app.get('/', (req, res) => res.send('Hello World!'))


// tells app to listen on this port and make this callback function when server is up and running
app.listen(port, () => console.log(`Example app listening on port ${port}!`))