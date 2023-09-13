const express = require('express');
const Router = express.Router();

const { usersController } = require('./../controllers');

const { verify, verifyParams } = require('../lib/jwt');

Router.post('/login', usersController.login);
Router.post('/signup', usersController.signup);
Router.get('/:token', verifyParams, usersController.getUser);
Router.get('/user/:id', usersController.getUserWithoutToken);
Router.patch('/user/:id', usersController.updateUserPoint);
Router.patch('/verify', verify, usersController.accountVerification);
Router.get('/tokentoid/:token', verifyParams, usersController.tokenToId)

module.exports = Router;