const db = require('./../models')

module.exports = {
    getRefCodes: async (req, res, next) => {
        try {
            const { eventId } = req.query;

            const refCode = await db.ref_code.findAll({ where: { eventId: parseInt(eventId) } })
            res.send(refCode)
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    createRefCode: async (req, res, next) => {
        try {
            const refCodeData = req.body;

            const createRefCode = await db.ref_code.create(refCodeData)
            res.send(createRefCode)
        } catch (error) {
            console.log(error);
            next(error);
        }
    },
    getYourRefCode: async (req, res, next) => {
        try {
            const { id } = req.dataToken;

            const getYourRefCode = await db.ref_code.findAll({ where: { userId: parseInt(id) } })

            res.send(getYourRefCode)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}