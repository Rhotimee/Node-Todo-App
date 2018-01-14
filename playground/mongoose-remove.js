const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Removing all the Todos
// Todo.remove({}).then((result) => {
//     console.log(result)
// });

// Find One Todo and delete it
Todo.findOneAndRemove({_id: '5a5a922f01bf1ec615ea2db9'}).then((todo) => {
    console.log(todo)
})

// Find Todo by Id and delete it

Todo.findByIdAndRemove('5a5a922f01bf1ec615ea2db9').then((todo) => {
    console.log('item deleted', todo);
});