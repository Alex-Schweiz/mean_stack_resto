var mongoose = require( 'mongoose' );

var storageSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    available: {type: String, required: true},
    supplier: {type: String, required: true},
    costOne: {type: String, required: true},
    updated: {type: String, required: true}
});

mongoose.model('Storage', storageSchema,'storage');