/* GET Offer page */
module.exports.index = function(req, res){
    res.render('offers', { title: 'Hallo from OFFERn Page' });
};