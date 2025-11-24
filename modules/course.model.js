const mongosse = require('mongoose');
const courseSchema = new mongosse.Schema({
    title :{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    }

})

module.exports = mongosse.model('courses', courseSchema);