const { deleteFiles } = require('./../helper/deleteFiles')
const { multerUpload } = require("./../lib/multer")

const upload = async (req, res, next) => {
    const result = multerUpload.fields([{ name: "images", maxCount: 3 }])

    result(req, res, (err) => {
        try {
            if (err) throw err

            req.files.images.forEach(value => {
                if (value.size > 100000000000) throw { message: `${value.originalname} is too large!`, files: req.files }
            });

            next()
        } catch (error) {
            deleteFiles(error.files)
            next(error)
        }
    })
}

module.exports = upload