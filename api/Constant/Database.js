const mongoose = require('mongoose');
const elasticsearch = require('elasticsearch');
const {DBLink} = require("../index");
mongoose.Promise = global.Promise;



mongoose.connect(DBLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));
let testData = false
db.once('open', () => {
    testData = true
    console.log("Connected");
})
