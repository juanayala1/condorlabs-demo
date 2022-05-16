const product = require('../2. components/products/1. network');

const routes = function (app) {
    app.use('/api/product', product); 

    // let users = [];
    // app.get('/', (req, res) => {
    //     res.send(users)
    // })
    // app.post('/user', (req, res) => {
    //     users.push(req.body);
    //     res.send(users)
    // })
    // app.get('/user/:id', (req, res) => {
    //     const userById = users.find(user => user.id === req.params.id);
    //     if(userById) {
    //         res.send(userById)
    //     } else {
    //         res.status(400).send({
    //             message: 'No user found with given ID'
    //         })
    //     }
    // })
    // app.put('/user/:id', (req, res) => {
    //     const userByIdIndex = users.findIndex(user => user.id === req.params.id);
    //     if(userByIdIndex !== -1) {
    //         const userById = { ...users[userByIdIndex], ...req.body }
    //         users[userByIdIndex] = userById;
    //         res.send(users[userByIdIndex])
    //     } else {
    //         res.status(400).send({
    //              message: 'No user found with given ID'
    //         })
    //     }
    // })

}

module.exports = routes;