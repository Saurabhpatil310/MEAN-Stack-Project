var mongoose = require('mongoose')
var studentSchema = mongoose.Schema({
    rollno: { type: Number },
    name: { type: String }
});
module.exports = mongoose.model('students', studentSchema)