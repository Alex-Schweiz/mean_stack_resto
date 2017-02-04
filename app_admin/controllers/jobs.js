/* GET Jobs Admin page */
module.exports.index = function(req, res){
    res.render('jobs', { title: 'Hallo from main Page' });
};