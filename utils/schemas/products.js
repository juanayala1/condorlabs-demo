const joi = require("@hapi/joi");

const productIdSchema = joi.string();
const productCodeSchema = joi.string().max(20);
const productPriceSchema = joi.number().precision(2);
const productCategorySchema = joi.string().max(15);

const createProductSchema = {
    code: productCodeSchema.required(),
    price: productPriceSchema.required(),
    category: productCategorySchema.required()
}

const updateProductSchema = {
    code: productCodeSchema,
    price: productPriceSchema,
    category: productCategorySchema
}

module.exports = {
    productIdSchema,
    createProductSchema,
    updateProductSchema,
  };