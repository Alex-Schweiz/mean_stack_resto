/* GET Suppliers Admin page */
module.exports.index = function(req, res){
    res.render('suppliers', { title: 'Hallo from main Page' });
};