/* GET Menu Admin page */
module.exports.index = function(req, res){
    res.render('menu', { title: 'Hallo from main Page' });
};