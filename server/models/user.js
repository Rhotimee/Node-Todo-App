let mongoose = require('mongoose');

let User = mongoose.model('Users', {
    email:{
        type: String,
        required: true,
        trim: true,
        minlegth: 1
    }

});

module.exports = {User}