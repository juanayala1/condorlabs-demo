
const mongodb = require('@condor-labs/mongodb')();
const mongoose = mongodb.mongoose;
const schema = mongoose.Schema;

const product = mongodb.mongoose.Schema({
    code: {
      type: String,
      required: 'Please enter the code',
    },
    name: {
      type: String,
      required: 'Please enter the name',
    },
    price: {
      type: String,
      required: 'Please enter the price',
    },
    category: {
      type: String,
      required: 'Please enter the category',
    }
    
 }, { collection: 'products' });

const model = mongoose.model('products', product);

module.exports = model;
