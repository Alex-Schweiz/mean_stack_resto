/* GET Suppliers Admin page */
var request = require('request'),
    apiOptions = {server : "http://localhost:3000"};
/*if (process.env.NODE_ENV === 'production') {
 apiOptions.server = "https://mysite.herokuapp.com";
 }*/

var renderSuppliersPage = function(req, res, responseBody){
    var message;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('suppliers', {
        title: 'Suppliers Dashboard',
        suppliers: responseBody,
        message: message
    });
};


module.exports.index = function(req, res){
    var requestOptions, path;
    path = '/api/supplier';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        qs : {}
    };
    request(
        requestOptions,
        function(err, response, body) {
            renderSuppliersPage(req, res, body);
        }
    );
};
