var mongoose = require( 'mongoose' );

var serviceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    icon: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    headText: {type: String, required: true},
    upperText: {type: String, required: true},
    lowerText: {type: String, required: true}
});

mongoose.model('Service', serviceSchema);