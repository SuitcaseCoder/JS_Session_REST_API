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
// app.get('/Pizza', (req, res) => res.send('Welcome to Pizza. Today\'s flavor is raclette pizza'))
app.get('/birthdaycard/:username', (req,res) => {
    let name = req.params.username;
    let hasConfetti = req.query.confetti === 'true';
    let confetti = hasConfetti ? '    &$*%(#$%*($#%@($^&@(#$%(#*$(&%@(^' : '';
    res.send(`Happy birthday ${name}! ${confetti}`);
});

app.get('/pizza/:username', (req,res) => {
    let name = req.params.name;
    let flavor = req.params.flavor;
    let drank = req.params.drank;
    res.send(`Welcome to the perfect pizza parlor, ${name}! I hope you enjoy today's special: ${flavor}. I bet it's your favorite! How about pairing that with a nice tall glass of ${drank}.`)
})

// tells app to listen on this port and make this callback function when server is up and running
app.listen(port, () => console.log(`Example app listening on port ${port}!`))