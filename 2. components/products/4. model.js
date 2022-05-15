
const mongodb = require('@condor-labs/mongodb')();
const mongoose = mongodb.mongoose;
const schema = mongoose.Schema;

const product = mongodb.mongoose.Schema({
    code: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    }
    
 }, { collection: 'products' });

const model = mongoose.model('products', product);

module.exports = model;
