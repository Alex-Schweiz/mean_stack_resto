/* GET Team page */
var request = require('request');
var apiOptions = {server : "http://localhost:3000"};
/*if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://mysite.herokuapp.com";
}*/

var renderTeamPage = function(req, res, responseBody){
    var message;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('team', {
        title: 'Team',
        teamInfo: {
            title: 'Our Team',
            text: 'Dedicated restaurant service. Originally we were and still are a family owned restaurant…That means, that while' +
            ' our team almost in half consists of our founder’s family members, we’re anyways one big friendly team! All of our chefs, cooks,' +
            ' assistants or even waiters are highly professional, extra dedicated and super friendly and hospitable!'
        },
        teamMember: responseBody,
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
            renderTeamPage(req, res, body);
        }
    );
};