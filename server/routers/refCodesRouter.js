const express = require('express');
const Router = express.Router();

const { refCodesController } = require('./../controllers');

const { verifyQuery, verifyParams } = require('./../lib/jwt')

Router.get('/', refCodesController.getRefCodes)
Router.get('/user', verifyQuery, refCodesController.getYourRefCode)
Router.post('/', refCodesController.createRefCode)

module.exports = Router;