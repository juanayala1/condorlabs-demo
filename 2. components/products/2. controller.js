const store = require('./3. store');

function addProduct(product) {
    if (!product) {
        return Promise.reject('Invalid product');
    }

    const productInfo = {
        product,
    };
    return store.add(productInfo);
}

function listProducts() {
    return store.list();
}

module.exports = {
    addProduct,
    listProducts,
}