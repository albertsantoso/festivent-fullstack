const db = require('./../models')

module.exports = {
    getTickets: async (req, res, next) => {
        try {
            const eventId = parseInt(req.query.eventId);

            const ticket = await db.ticket.findAll({ where: { eventId } })

            res.send(ticket)
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    createTicket: async (req, res, next) => {
        try {
            const ticketData = req.body;

            const createTicket = await db.ticket.create(ticketData);

            res.send(createTicket)
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    getTicketsWithEvent: async (req, res, next) => {
        try {
            const ticketsWithEvent = await db.ticket.findAll({ include: db.event })

            res.send(ticketsWithEvent)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}