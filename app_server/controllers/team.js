/* GET Team pages */
module.exports.index = function(req, res){
    res.render('team', { title: 'Hallo from TEAM' });
};

module.exports.teamMember = function(req, res){
    res.render('team-member', { title: 'Hallo from TEAN MEMBER' });
};