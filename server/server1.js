const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./routes/userRoute.js');
const productRoute = require('./routes/productRoute.js');
const friendRoute = require('./routes/friendRoute.js')
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:5173', methods:["Get","POST","PUT","DELETE"] }))
app.use(bodyParser.urlencoded({ extended: true }));
const User = require('./models/userModels.js');

mongoose.connect('mongodb+srv://shoaib:12345@cluster0.dwn91.mongodb.net/').then(() => {
        console.log('MongoDB connected');
    });
    

app.get('/submit', (req, res) => {
    res.send(`<div class="container">
        <h2>Submit Your Details</h2>
        <form method="post" >
            <div  >
                <label for="name">Name:</label>
                <input name="name" placeholder="Enter your Name"  >
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input name="email"  placeholder="Enter your Email"  >
            </div>
            <div class="form-group">
                <label for="contact">Contact Number:</label>
                <input  name="contact" id="contact" placeholder="Enter your Contact Number"  >
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>`)
});

//app.post('/submit', async (req, res) => { //sumbit krna means post kr rhe hai or create krna
    // const { name, email, contact } = req.body
    // console.log(name, email, contact);
    // const user = new User({
    //     name: name,
    //     email: email,
    //     contact: contact
    // })
    // console.log(user);

    // try {
    //     const createdUser = await user.save()
    //     res.status(201).json({ user: createdUser })
    // } catch (err) {
    //     res.status(500).json('user is not created')
    // }

//});
/*app.get('/get', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (err) {

        res.status(500).json('users not found')
    }
})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findById({ _id: id })
    if (user) {
        try {
            await User.deleteOne({ _id: id })
            res.status(200).json('user is delted')
        } catch (err) {

            res.status(500).json('users not found')
        }
    }
})
app.put('/update/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findById({ _id: id })
    const { name, email, contact } = req.body
    if (user) {
        try {
            user.name = name || user.name
            user.email = email || user.email
            user.contact = contact || user.contact
            const updatedUser = await user.save()
            res.status(200).json({ user: updatedUser })
        } catch (err) {

            res.status(500).json(err)
        }
    }
    else {
        res.status(404).json({ messege: 'user is not updated' })
    }
})

*/
app.use('/users',userRoute)
app.use('/products',productRoute)
app.use('/friend',friendRoute)

app.listen(5000, () => {
    console.log('Server is running ');
});
