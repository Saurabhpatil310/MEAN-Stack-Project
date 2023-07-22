var  express  =  require('express');  
const bodyParser = require('body-parser');
var  app  =  express();  
var routes = require('./routes/route')
var cors=require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes)



const mongoose = require('mongoose');

// Connection URL
const uri = 'mongodb://127.0.0.1:27017/institute';
// Connect to MongoDB
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
        // Your code here to interact with the database
    })
    .catch((error) => {
        console.error('Connection error:', error);
    });

app.listen(8000)
console.log('Express Server is running at port 8000')