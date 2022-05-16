const Model = require('./4. model');

function addProduct({product}){
    console.log('store prod: ' + JSON.stringify(product));
    const prod = new Model(product);
    console.log('prodddd: ' + prod);
    return prod.save();
}

function listProducts(){
    return Model.find();
}

module.exports = {
    add: addProduct,
    list: listProducts
}