const User = require('../models/userModels.js');

const createUser = async (req, res) => {
    const { name, email, contact } = req.body;
    console.log(name, email, contact);
   
    
    const user = new User({ name, email, contact });
    console.log(user);

    try {
        const createdUser = await user.save();
        res.status(201).json({ user: createdUser });
    } catch (err) {
        res.status(500).json('User is not created');
    }
};

const getUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json('Users not found');
    }
};

const editUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    const { name, email, contact } = req.body;

    if (user) {
        try {
            user.name = name || user.name;
            user.email = email || user.email;
            user.contact = contact || user.contact;
            const updatedUser = await user.save();
            res.status(200).json({ user: updatedUser });
        } catch (err) {
            res.status(500).json('User is not updated');
        }
    } else {
        res.status(404).json({ message: 'User is not updated' });
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);

    if (user) {
        try {
            await User.deleteOne({ _id: id });
            res.status(200).json('User is deleted');
        } catch (err) {
            res.status(500).json('User not found');
        }
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.createUser = createUser;
exports.getUser = getUser;
exports.editUser = editUser;
exports.deleteUser = deleteUser;
