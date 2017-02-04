/* GET Users Admin page */
module.exports.index = function(req, res){
    res.render('users', { title: 'Hallo from main Page' });
};