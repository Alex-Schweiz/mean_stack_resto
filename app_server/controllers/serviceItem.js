/* GET Service Item page*/
var request = require('request');
var apiOptions = {server : "http://localhost:3000"};
/*if (process.env.NODE_ENV === 'production') {
 apiOptions.server = "https://mysite.herokuapp.com";
 }*/

var renderServiceItemPage = function (req, res, serviceItem) {
    res.render('serviceItem', {
        title: 'Service Item',
        serviceInfo: serviceItem
    });
};



module.exports.index = function(req, res){
    var requestOptions, path;
    path = "/api/services/" + req.params.serviceid;
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {}
    };
    request(
        requestOptions,
        function(err, response, body) {
            var data = body;
            renderServiceItemPage(req, res, data);
        }
    );
};