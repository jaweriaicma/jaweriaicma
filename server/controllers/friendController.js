const Friend = require('../models/friendModel.js')

const createFriend = async (req, res) => {
    const { name, toxicity,loyalty,friendliness, contact } = req.body; 
    
    const friend = new Friend({ 
        name:name,
        toxicity:toxicity,
        loyalty:loyalty,
        friendliness:friendliness,
        contact:contact                
    });
    console.log(friend);

    try {
        const createdFriend = await friend.save();
        res.status(201).json({ friend: createdFriend });
    } catch (err) {
        res.status(500).json('User is not created');
    }
};

const getFriend = async (req, res) => {
    try {
        const friend = await Friend.find({});
        res.status(200).json(friend);
    } catch (err) {
        res.status(500).json('friend not found');
    }
};

const editFriend = async (req, res) => {
    const id = req.params.id;
    try {
        const friend = await Friend.findById(id);
        if (!friend) {
            return res.status(404).json({ message: 'Friend not found' });
        }
        
        const { name, toxicity, loyalty, friendliness, contact } = req.body;
        friend.name = name || friend.name;
        friend.toxicity = toxicity || friend.toxicity;
        friend.loyalty = loyalty || friend.loyalty;
        friend.friendliness = friendliness || friend.friendliness;
        friend.contact = contact || friend.contact;
        
        const updatedFriend = await friend.save();
        res.status(200).json({ friend: updatedFriend });
    } catch (err) {
        console.error('Error updating friend:', err);
        res.status(500).json({ message: 'Failed to update friend' });
    }
};

const deleteFriend = async (req, res) => {
    const id = req.params.id;
    const friend = await Friend.findById(id);

    if (friend) {
        try {
            await Friend.deleteOne({ _id: id });
            res.status(200).json('friend is deleted');
        } catch (err) {
            res.status(500).json('friend not found');
        }
    } else {
        res.status(404).json({ message: 'friend not found' });
    }
};

exports.createFriend = createFriend;
exports.getFriend = getFriend;
exports.editFriend = editFriend;
exports.deleteFriend = deleteFriend;
