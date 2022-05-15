const product = require('../2. components/products/1. network');

const routes = function (app) {
    app.use('/product', product); 
}

module.exports = routes;