const Product = require('../models/productModel.js')
const User = require('../models/userModels.js')

const createdProduct = async (req, res) => {
    const { productName, brand, price, creator } = req.body;
    const userExist = await User.findById(creator)
    if (userExist) {
        const product = new Product({
            productName: productName,
            brand: brand,
            price: price,
            creator: creator
        })
        try {
            const createdProduct = await product.save()
            res.status(200).json({ products: createdProduct });
        } catch (err) {
            res.status(500).json('Product is not created');
        }

    } else {
        res.status(404).json("user does not exist")
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)

    } catch (err) {
        res.status(500).json('product not found')

    }
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        const { productName, brand, price, creator } = req.body;
        if (product) {
            if (product.creator.toString() === creator) {
            
            product.productName = productName || product.productName;
            product.brand = brand || product.brand;
            product.price = price || product.price;
            product.creator = creator || product.creator

            const updatedProduct = await product.save();
            res.status(200).json({ product: updatedProduct });
        }else{
            res.status(401).json('unauthorize acess')
        }
    }

    } catch (err) {
        res.status(500).json(err);
    }


}
const deleteProduct = async (req, res) => { // in delte we changing to if condtion so correct 
                                            //the code may be it in erorr
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        if (product) {
            if (product.creator === req.body.creator) {
                await Product.deleteOne({ _id: id });
                res.status(200).json('Product is deleted');
            }else{
                res.status(401).json('unauthorized acess')
            }
        }

        } catch (err) {
            res.status(500).json('Error deleting product');
        }
    
}
exports.createdProduct = createdProduct;
exports.getProduct = getProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
