var mongoose = require( 'mongoose' );

var clientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    photo: {type: String, required: true},
    username: {type: String, required: true},
    phone: {type: Number, required: true},
    address: {type: String, required: true},
    birthdate: {type: String, required: true}
});

mongoose.model('Client', clientSchema);