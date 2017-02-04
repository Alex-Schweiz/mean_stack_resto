/* GET Clients Admin page */
module.exports.index = function(req, res){
    res.render('clients', { title: 'Hallo from main Page' });
};