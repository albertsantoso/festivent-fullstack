const express = require('express');
const Router = express.Router();

const { eventsController } = require('./../controllers');

const upload = require('./../middleware/upload')

Router.get('/', eventsController.getAllEvents)
Router.get('/categories', eventsController.getAllEventCategories)
Router.get('/cities', eventsController.getAllEventCities)
Router.get('/:id', eventsController.getEvent)
Router.get('/event/:id', eventsController.getEventWithUser)
Router.get('/event/user/:id', eventsController.getEventByYou)
Router.patch('/:id', eventsController.updateEventRefCodeCount)
Router.post('/', upload, eventsController.createEvent)

module.exports = Router;