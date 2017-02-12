/* GET Deliveres Admin page */
var request = require('request'),
    apiOptions = {server : "http://localhost:3000"};
/*if (process.env.NODE_ENV === 'production') {
 apiOptions.server = "https://mysite.herokuapp.com";
 }*/

var renderDeliveriesPage = function(req, res, responseBody){
    var message;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('deliveries', {
        title: 'Deliveries Dashboard',
        deliveries: responseBody,
        message: message
    });
};


module.exports.index = function(req, res){
    var requestOptions, path;
    path = '/api/delivery';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        qs : {}
    };
    request(
        requestOptions,
        function(err, response, body) {
            renderDeliveriesPage(req, res, body);
        }
    );
};