var mongoose = require( 'mongoose' );

var roleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
});

mongoose.model('Role', roleSchema,'roles');