const request = require('express')
const express = require('express')

const app = express()

//Route me
const objectMe = {
    nombre: 'Daniel',
    edad: '35',
    pais: 'Bolivia'
}

app.get('/me', (req, res) => {
   console.log(req.method)

   res.status(200).json({
    message: objectMe
   })
})


//Route goals
const hobbies = ['Chess', 'Basketball', 'Swimming', 'Soccer']
const relatedGoals = ['Learn NodeJs', 'Apply for a job by the end of September 2022']

app.post('/goals', (req, res) => {
    console.log(req.method)
    res.status(200).json({message: hobbies})
})

app.patch('/goals', (req, res) => {
    console.log(req.method)
    res.status(200).json({message: relatedGoals, verb: request.method})
})

//Route business
const business = ['Microsoft', 'IBM', 'Netflix']

app.put('/business', (req, res) => {
    console.log(req.method)
    res.status(200).json({message: business})
})

//Define the port
app.listen(8000, () => {
    console.log('Server started at port 8000');
})