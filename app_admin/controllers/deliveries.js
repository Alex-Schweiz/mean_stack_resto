/* GET Deliveres Admin page */
module.exports.index = function(req, res){
    res.render('deliveries', { title: 'Hallo from main Page' });
};