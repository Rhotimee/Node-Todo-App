let mongoose = require('mongoose');

// Todo model
let Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required: true,
        minlegth: 1,
        trim: true // this removes all white spaces in the begining and end of a string.

    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});


module.exports = {Todo}