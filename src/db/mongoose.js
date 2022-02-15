const mongoose = require('mongoose');
const databaseURL = 'mongodb+srv://nirajan1234:nirajan1234@nirajanbasnet.xlwzr.mongodb.net/diary?retryWrites=true&w=majority';
const databaseName = 'diary-app';

mongoose.connect(databaseURL+databaseName, (error)=>{
    if(error){
        throw Error(error)
    }
});

mongoose.createConnection(databaseURL+databaseName, (error, result)=>{
    if(error){
        throw Error(error);
    }
    console.log('Connected to database ! ');
});