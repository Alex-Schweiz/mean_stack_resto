var mongoose = require( 'mongoose' );

var jobSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    requirements: {type: String, required: true},
    salary: {type: Number, required: true},
    comments: {type: String, required: true}
});

mongoose.model('Job', jobSchema,'jobs');