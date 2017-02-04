/* GET Storage Admin page */
module.exports.index = function(req, res){
    res.render('storage', { title: 'Hallo from main Page' });
};