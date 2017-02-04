/* GET Menu Categories Admin page */
module.exports.index = function(req, res){
    res.render('categories', { title: 'Hallo from main Page' });
};