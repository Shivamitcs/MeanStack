const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {
    name : {type: String},
 image: {type:String},
    position: {type: String},
    dept: { type: String },
    office: { type: String },
    salary: { type: String },
    about: {type:String}
    
});

module.exports = Employee;