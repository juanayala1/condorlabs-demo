const express = require('express');
const response = require('../../1. network/response');
const controller = require('./2. controller');
const router = express.Router();
const logger = require('@condor-labs/logger');

router.post('/', function(req, res) {
    controller.addProduct(req.body)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            logger.error(err);
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/', function(req, res) {
    console.log('pasa por el get de product');
    controller.listProducts()
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(err => {
            logger.error(err);
            response.error(req, res, 'Internal error', 500, err);
        });
});

module.exports = router;