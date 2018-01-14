const {ObjectID} = require('mongodb');

const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {user} = require('./models/user');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// post todos
app.post('/todos', (req, res) => {
        let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);

    }, (e) => {
        res.status(400).send(e);

    });
}); 

// Get all Todos
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e); 
    });
});

// Get Individual Todo
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)){
        // console.log('404')
        res.status(404).send()
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
            // console.log(JSON.stringify(todo, undefined, 2))
            return res.status(404).send()
        } res.send({todo});
    }, (e) => {
        res.status(400).send()
    })
})

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)){
        return res.status(404).send()
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });

});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};

