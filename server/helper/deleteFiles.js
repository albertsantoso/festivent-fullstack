const fs = require("fs")

module.exports = {
    deleteFiles: (files) => {
        console.log("🚀 ~ file: deleteFiles.js:5 ~ files:", files)
        files?.images.forEach(value => {
            fs.unlinkSync(value.path)
        })
    }
}