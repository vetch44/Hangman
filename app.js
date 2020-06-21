const express = require('express')
const app = express()
const port = 3000

app.use('/hangman', express.static('public'))

app.get('/', function(req, res){
    res.send('Guess some words');
    });

app.listen(port, () => console.log(`App hanging at http://localhost:${port}`))