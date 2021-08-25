const mongoose = require('mongoose');
const elasticsearch = require('elasticsearch');
mongoose.Promise = global.Promise;
//Note: Production
// mongoose.connect('mongodb://13.250.5.183/AllBDNewsServer');

mongoose.connect(process.env.DB, {
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
