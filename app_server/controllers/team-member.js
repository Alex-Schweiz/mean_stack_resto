/* GET Team Member page */
var request = require('request'),
    apiOptions = {server : "http://localhost:3000"};
/*if (process.env.NODE_ENV === 'production') {
 apiOptions.server = "https://mysite.herokuapp.com";
 }*/

var renderTeamMemberPage = function (req, res, teamMemberInfo) {
    res.render('team-member', {
        title: 'Team Member',
        teamMember: teamMemberInfo
    });
};

module.exports.index = function(req, res){
    var requestOptions, path;
    path = "/api/teams/" + req.params.teamid;
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {}
    };
    request(
        requestOptions,
        function(err, response, body) {
            var data = body;
            renderTeamMemberPage(req, res, data);
        }
    );
};