const db = require('./../models');

module.exports = {
    getAllEvents: async (req, res, next) => {
        try {
            const { userId } = req.query;

            if (userId) {
                const eventsByUser = await db.event.findAll({ where: { userId } });

                res.send(eventsByUser)
            } else {
                const events = await db.event.findAll();

                res.send(events)
            }
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    getAllEventCategories: async (req, res, next) => {
        try {
            const categories = await db.event_category.findAll();

            res.send(categories)
        } catch (error) {
            console.log(error)
            next(error)
        }
    },
    getAllEventCities: async (req, res, next) => {
        try {
            const cities = await db.city.findAll();

            res.send(cities)
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    getEvent: async (req, res, next) => {
        try {
            const { id } = req.params

            const event = await db.event.findOne({ where: { id } })

            const dateTimeStart = event.dataValues.dateTimeStart.split(" ")
            const dateTimeEnd = event.dataValues.dateTimeEnd.split(" ")

            res.send({ ...event.dataValues, dateTimeStart, dateTimeEnd })
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    getEventWithUser: async (req, res, next) => {
        try {
            const eventId = parseInt(req.params.id)

            const event = await db.event.findByPk(eventId, { include: db.user });

            const dateTimeStart = event.dataValues.dateTimeStart.split(" ")
            const dateTimeEnd = event.dataValues.dateTimeEnd.split(" ")

            res.send({ ...event.dataValues, dateTimeStart, dateTimeEnd })
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    updateEventRefCodeCount: async (req, res, next) => {
        try {
            const { id } = req.params
            const { count } = req.body;

            const updateEventRefCodeCount = await db.event.update(
                { count },
                { where: { id } }
            )

            res.send({
                isError: false,
                message: "Success",
                data: updateEventRefCodeCount
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    createEvent: async (req, res, next) => {
        try {
            const image = req.files.images;

            const data = JSON.parse(req.body.data)
            data.image = image[0].path;

            const createEvent = await db.event.create(data);

            res.send({
                data: createEvent
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    getEventByYou: async (req, res, next) => {
        try {
            const { id } = req.params;

            const eventsByYou = await db.event.findAll({ where: { userId: id } })

            res.send({
                data: eventsByYou
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}