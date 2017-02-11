/* GET Dish page */
var request = require('request');
var apiOptions = {server : "http://localhost:3000"};
/*if (process.env.NODE_ENV === 'production') {
 apiOptions.server = "https://mysite.herokuapp.com";
 }*/

var renderDishPage = function(req, res, responseBody){
    var message;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
    } else {
        if (!responseBody.length) {
            message = "No Dishes found";
        }
    }
    res.render('dish', {
        title: 'Dish',
        oneDish: responseBody,
        message: message
    });
};


module.exports.index = function(req, res){
    var requestOptions, path;
    path = "/api/menus/"+ req.params.dishid;
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        qs : {}
    };
    request(
        requestOptions,
        function(err, response, body) {
            renderDishPage(req, res, body);
        }
    );
};