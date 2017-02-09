var mongoose = require( 'mongoose' );

var deliverySchema = new mongoose.Schema({
    id_client: {type: String, required: true},
    content: {type: String, required: true},
    status: {type: String, required: true},
    deliverer: {type: String, required: true},
    address: {type: String, required: true},
    price: {type: String, required: true},
    date: {type: String, required: true}
});

mongoose.model('Delivery', deliverySchema,'deliverys');