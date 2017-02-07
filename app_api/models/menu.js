var mongoose = require( 'mongoose' );

var menuSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    link: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    weight: {type: Number, required: true},
    ingredients: {type: String, required: true},
    description: {type: String, required: true}
});

mongoose.model('Menu', menuSchema);