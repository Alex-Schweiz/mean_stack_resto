var mongoose = require( 'mongoose' );

var offerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    specialItems: [String]
});

mongoose.model('Offer', offerSchema);