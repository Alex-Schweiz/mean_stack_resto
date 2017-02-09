var mongoose = require( 'mongoose' );

var reportSchema = new mongoose.Schema({
    year: {type: Number, required: true},
    month: {type: String, required: true},
    revenue: {type: Number, required: true},
    delivery: {type: Number, required: true},
    restaurant: {type: Number, required: true},
    avaragecheque: {type: Number, required: true}
});

mongoose.model('Report', reportSchema,'reports');