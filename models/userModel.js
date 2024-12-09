const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type: String,
        required: [true,'Username is required'],

    },
    email : {
        type: String,
        required: [true,'User email is required'],
        unique: [true,'Email is already taken']
    },
    password: {
        type:String,
        required: [true, 'Pasword is required']
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User',userSchema);
