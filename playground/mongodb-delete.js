
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // DeleteMany.deleteMany
    // db.collection('Todos').deleteMany({"text" : "Finish Reading Outliers"}).then((result) => {
    //     console.log(result)
    // });

    // DeleteOne
    // db.collection('Todos').deleteOne({"text" : "Finish Reading Outliers"}).then((result) => {
    //     console.log(result)
    // });

    // FindOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result)
    // });
    

    // db.collection('Users').deleteMany({name: 'Rotimi'})

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a5777e6f023bb0710e989c3')})
        .then((results) => {
        console.log(JSON.stringify(results, undefined, 2))
    
});

    // db.close();
});


