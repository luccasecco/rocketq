const express = require('express')
const questionController = require('./controllers/questionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/creat-pass', (req, res) =>
  res.render('index', { page: 'creat-pass' })
)
route.post('/creat-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index)

module.exports = route
