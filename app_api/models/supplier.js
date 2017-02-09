var mongoose = require( 'mongoose' );

var supplierSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

mongoose.model('Supplier', supplierSchema,'suppliers');