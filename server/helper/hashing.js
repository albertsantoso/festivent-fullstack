const bcrypt = require('bcrypt');

module.exports = {
    hash: async (password) => {
        try {
            const hashedPassword = await bcrypt.hash(password, 10)

            return hashedPassword
        } catch (error) {
            return error
        }
    },
    match: async (passwordFromLogin, passwordFromDatabase) => {
        try {
            return bcrypt.compare(passwordFromLogin, passwordFromDatabase)
        } catch (error) {
            return error
        }
    }
}