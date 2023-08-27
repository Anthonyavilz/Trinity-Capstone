require('dotenv').config()

const express = require('express')
const cors = require('cors')

// App Declarations
const narutoApp = express()

// App Middleware
narutoApp.use(express.json())
narutoApp.use(cors())


// Naruto Port, Functions & Endpoints
const narutoPort = 1234

const { createJu, getJu, modifyJu, deleteJu } = require('./controllers/Naruto/userJutsu')

narutoApp.post('/naruto', createJu)
narutoApp.get('/naruto', getJu)
narutoApp.put('/naruto/:id', modifyJu)
narutoApp.delete('/naruto/:id', deleteJu)


// Port Listens
narutoApp.listen(narutoPort, () => console.log(`Naruto running on port ${narutoPort}`));
