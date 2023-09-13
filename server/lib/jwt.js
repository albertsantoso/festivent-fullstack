const jwt = require('jsonwebtoken');

module.exports = {
    createJWT: (payload, expiry) => {
        try {
            return jwt.sign(payload, "abc123", { expiresIn: expiry })
        } catch (error) {
            return error
        }
    },
    verify: (req, res, next) => {
        try {
            const { token } = req.body;
            const decodedData = jwt.verify(token, "abc123")
            req.dataToken = decodedData;

            next()
        } catch (error) {
            return error
        }
    },
    verifyParams: (req, res, next) => {
        try {
            const { token } = req.params;
            const decodedData = jwt.verify(token, "abc123")
            req.dataToken = decodedData;

            next()
        } catch (error) {
            return error
        }
    },
    verifyQuery: (req, res, next) => {
        try {
            const { userId } = req.query;

            if (!userId) {
                next()
            } else {
                const decodedData = jwt.verify(userId, "abc123");
                req.dataToken = decodedData;

                next()
            }
        } catch (error) {
            return error
        }
    }
}