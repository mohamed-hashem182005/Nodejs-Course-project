const mongoose = require('mongoose');
const validator = require('validator');
const roles = require('../Utiles/rolles');

const userSchema = new mongoose.Schema({
    firstName: {  // ✅ تصحيح الاسم
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true, // ✅ تصحيح الكلمة
        validate: [validator.isEmail, 'field must be an email address']
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    role:{
        type:String,
        enum:[roles.user,roles.admin,roles.manger],
        default:roles.user
    },
    avatar:{
        type:String,
        default:'uploads/profile.png'
    }
});

module.exports = mongoose.model('User', userSchema);
