const db = require('../models')
const fs = require('fs').promises

const { createJWT } = require('../lib/jwt')
const { hash, match } = require('./../helper/hashing')
const transporter = require('./../helper/transporter')
const handlebars = require('handlebars')

module.exports = {
    signup: async (req, res, next) => {
        try {
            const { fullname, email, password, ref_points } = req.body

            if (!fullname || !email || !password) throw { message: 'Fill all the required field!' }

            const isAlreadySignedUp = await db.user.findAll({ where: { email } })

            if (isAlreadySignedUp.length > 0) {
                return res.send({
                    isError: true,
                    message: 'Email already registered!',
                    data: isAlreadySignedUp
                })
            }

            function generateRandom6DigitNumber() {
                const min = 100000;
                const max = 999999;
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            const verification_code = generateRandom6DigitNumber().toString();

            const hashedPassword = await hash(password)

            const createUser = await db.user.create({ fullname, email, password: hashedPassword, ref_points, verification_code })


            const token = await createJWT({ id: createUser.dataValues.id }, "1h")
            const token1 = await createJWT({ id: createUser.dataValues.id }, "1h")
            const token2 = await createJWT({ id: createUser.dataValues.id }, "365d")

            const readTemplate = await fs.readFile('./public/template/index.html', 'utf-8')
            const compiledTemplate = await handlebars.compile(readTemplate)

            const newTemplate = compiledTemplate({ fullname, token1, token2, verification_code })

            await transporter.sendMail({
                from: "Festivent",
                to: "albertsantosotandjung@gmail.com",
                subject: "Confirm your account!",
                html: newTemplate
            })

            res.status(200).send({
                isError: false,
                message: "Register success!",
                data: { ...createUser.dataValues, token }
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body

            const user = await db.user.findOne({ where: { email } });

            if (!user) {
                return res.send({
                    isError: true,
                    message: "Email is not registered!",
                    data: user
                })
            }

            const hashMatch = await match(password, user.dataValues.password)

            if (!hashMatch) {
                return res.send({
                    isError: true,
                    message: "Wrong password!",
                    data: user
                })
            }

            const token = await createJWT({ id: user.dataValues.id }, "365d")

            res.send({
                isError: false,
                message: "Login success!",
                data: { ...user.dataValues, token }
            })
        } catch (error) {
            next(error)
        }
    },
    getUser: async (req, res, next) => {
        try {
            const { id } = req.dataToken

            const user = await db.user.findOne({ where: { id } })

            res.status(200).send({
                isError: false,
                message: "Success",
                data: user.dataValues
            })
        } catch (error) {
            next(error)
        }
    },
    getUserWithoutToken: async (req, res, next) => {
        try {
            const { id } = req.params;

            const userWithoutToken = await db.user.findOne({ where: { id } })

            res.send({
                data: userWithoutToken
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    accountVerification: async (req, res, next) => {
        try {
            const { id } = req.dataToken;
            const { code } = req.body;

            const handleVerify = async () => {
                const onVerify = await db.user.update(
                    { status: "Verified" },
                    { where: { id } }
                );

                return onVerify;
            }

            if (!code) {
                await handleVerify()

                res.status(201).send({
                    isError: false,
                    message: "Account verified!",
                    send: null
                })
            } else {
                const findUserWithCode = await db.user.findOne({ where: { id, verification_code: code } })

                if (!findUserWithCode) {
                    res.send({
                        isError: true,
                        message: "Wrong Code",
                        data: findUserWithCode
                    })
                } else {
                    await handleVerify()

                    res.send({
                        isError: false,
                        message: "Success!",
                        data: null
                    })
                }
            }
        } catch (error) {
            next(error)
        }
    },
    updateUserPoint: async (req, res, next) => {
        try {
            const { id } = req.params
            const { ref_points } = req.body

            const updateUserPoints = await db.user.update(
                { ref_points },
                { where: { id } }
            )

            res.send({
                isError: false,
                message: "create ref code success",
                data: updateUserPoints
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    tokenToId: async (req, res, next) => {
        try {
            const { id } = req.dataToken;

            res.send({
                data: id
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}