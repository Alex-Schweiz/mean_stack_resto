var mongoose = require( 'mongoose' );

var userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    photo: {type: String, required: true},
    username: {type: String, required: true},
    phone: {type: Number, required: true},
    role: {type: String, required: true},
    birthdate: {type: String, required: true}
});

mongoose.model('User', userSchema, 'users');