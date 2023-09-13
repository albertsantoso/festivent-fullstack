const multer = require("multer")
const fs = require("fs")

const defaultPath = "public"

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        const isDirectoryExist = fs.existsSync(defaultPath)

        if (!isDirectoryExist) {
            await fs.promises.mkdir(defaultPath, { recursive: true })
        }

        cb(null, `${defaultPath}`)
    },
    filename: function (req, file, cb) {
        const fileExtension = file.mimetype.split("/")[1]

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + `.${fileExtension}`
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

let fileFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === "image") {
        // Accept
        cb(null, true)
    } else if (file.mimetype.split("/")[0] !== "image") {
        // Reject
        cb(new Error('Only images are allowed!'), false)
    }
}

exports.multerUpload = multer({ storage: storage, fileFilter })