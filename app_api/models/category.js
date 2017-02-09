var mongoose = require( 'mongoose' );

var categorySchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
});

mongoose.model('Category', categorySchema,'categorys');