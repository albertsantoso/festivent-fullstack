const express = require('express');
const Router = express.Router();

const { ticketsController } = require('./../controllers');

Router.get('/', ticketsController.getTickets)
Router.post('/', ticketsController.createTicket)
Router.get('/event', ticketsController.getTicketsWithEvent)

module.exports = Router;