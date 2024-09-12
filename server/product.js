const express = require('express');
const mongoose = require('mongoose');
const path = require('path');  //  to import 'path' module
const app = express();
const bodyParser = require('body-parser');
const Product = require('./models/productModel.js');
//const userRoute = require('./routes/productRoute.js');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://Danish1:12345@cluster1.oefth.mongodb.net/').then(() => {
    console.log('MongoDB connected');
})// .catch(err => {
//      console.error('Connection error', err.message);
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/', async (req, res) => {
    const { productName, brand, price } = req.body;  
    console.log(productName, brand, price);

    const product = new Product({
        productName: productName, 
        brand: brand,
        price: price,
    });

    try {
        const createdProduct = await product.save(); 
        res.status(201).json({ product: createdProduct }); 
    } catch (err) {
        res.status(500).json('Product is not created');
    }
});

app.get('/get', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json('Product not found');
    }
});

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        if (product) {
            await Product.deleteOne({ _id: id });
            res.status(200).json('Product is deleted');
        } 
        
    } catch (err) {
        res.status(500).json('Error deleting product');
    }
});

app.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        if (product) {
            const { productName, brand, price } = req.body; 
            product.productName = productName || product.productName;
            product.brand = brand || product.brand;
            product.price = price || product.price;

            const updatedProduct = await product.save();
            res.status(200).json({ product: updatedProduct });
        }  
        
    } catch (err) {
        res.status(500).json(err);
    }
});



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
