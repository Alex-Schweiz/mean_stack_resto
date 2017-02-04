/* GET Home Admin page */
module.exports.index = function(req, res){
    res.render('index', { title: 'Hallo from main Page' });
};