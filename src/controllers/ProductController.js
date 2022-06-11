const client = require("../database/connection")

const ProductController = {}

ProductController.getProducts = async (request, response) => {
    try {
        const data = (await client.query('SELECT * FROM products')).rows
        return response.status(200).json(data)
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message:error.message
        })
    }
}

ProductController.createProduct = async (request, response) => {
    const{name, price} = request.body
    try {
        await client.query({
            text:'INSERT INTO products(name, price) VALUES($1,$2)',
            values:[name, price]
        })
        return response.status(201).json({
            message:'Product created'
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message:error.message
        })
    }
}
ProductController.updateProduct = async (request, response) => {
    const{name, price} = request.body

    try {

        await client.query({
            text:'UPDATE products SET name = $1, price = $2 WHERE id = $3;',
            values:[name, price, id]
        })
        return response.status(200).json({
            message:'Product updated'
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message:error.message
        })
    }
}

ProductController.deleteProduct = async (request, response) => {
    const{id} = request.params
    try {
        await client.query({
            text:'DELETE FROM products WHERE id = $1',
            values:[id]
        })
        return response.status(200).json({
            message:'Product deleted'
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message:error.message
        })
    }
}

module.exports = ProductController