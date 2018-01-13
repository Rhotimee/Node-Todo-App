const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



let id = '5a5a36deb1862f1b540e2332';
let userId = '5a5939e800debf12ed843801';

if (!ObjectID.isValid(userId)){
    console.log('Id not Valid')
}

User.findById(userId).then((user) => {
    if (!user){
        console.log('User not found')
    }
    console.log( JSON.stringify(user, undefined, 2))
}, (e) => {
    console.log('Error', e)
});

// if (!ObjectID.isValid(id)){
//     console.log('Id not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//     if (! todo){
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo)
// }).catch((e) => console.log(e));