var mongoose = require( 'mongoose' );

var oneDishSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    link: {type: String, required: true},
    price: {type: Number, required: true},
    weight: {type: Number, required: true},
    ingredients: {type: String, required: true},
    description: {type: String, required: true}
});



var menuSchema = new mongoose.Schema({
    category: {type: String, required: true},
    dishes: [oneDishSchema]
});

mongoose.model('Menu', menuSchema);