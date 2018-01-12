
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a58967201bf1ec615e9a9f1')
    // },{
    //     $set:{
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    
    db.collection('Users').findOneAndUpdate({
        name: 'Timi Dare'
    },{
        $set:{
            name: 'Timi Darel'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // db.close();
});


