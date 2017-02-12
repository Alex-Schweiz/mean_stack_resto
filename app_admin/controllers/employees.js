/* GET Employees Admin page */
var request = require('request'),
    apiOptions = {server : "http://localhost:3000"};
/*if (process.env.NODE_ENV === 'production') {
 apiOptions.server = "https://mysite.herokuapp.com";
 }*/

var renderEmployeePage = function(req, res, responseBody){
    var message;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('employees', {
        title: 'Employees Dashboard',
        employees: responseBody,
        message: message
    });
};

module.exports.index = function(req, res){
    var requestOptions, path;
    path = '/api/teams';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        qs : {}
    };
    request(
        requestOptions,
        function(err, response, body) {
            renderEmployeePage(req, res, body);
        }
    );
};