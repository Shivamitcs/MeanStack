const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Shivam:Shivam@123@cluster0.ccvsz.mongodb.net/meanDB??retryWrites=true&w=majority&appName=Cluster0' || 'mongodb://localhost:27017/meanDB';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database Connection Successful'))
.catch(err => console.log('Error in Connection:', err));

module.exports = mongoose;
