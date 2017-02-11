/* GET MenuCategory page */
var request = require('request');
var apiOptions = {server : "http://localhost:3000"};
/*if (process.env.NODE_ENV === 'production') {
 apiOptions.server = "https://mysite.herokuapp.com";
 }*/

var renderMenuCategoryPage = function(req, res, responseBody){
    var message;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('menuCategory', {
        title: 'Appetizer',
        dishesInCategory: responseBody,
        message: message
    });
};


module.exports.index = function(req, res){
    var requestOptions, path;
    path = '/api/menus';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        qs : {}
    };
    request(
        requestOptions,
        function(err, response, body) {
            renderMenuCategoryPage(req, res, body);
        }
    );
};

