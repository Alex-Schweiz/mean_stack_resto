/* GET Reports Admin page */
module.exports.index = function(req, res){
    res.render('reports', { title: 'Hallo from main Page' });
};