/* GET Employees Admin page */
module.exports.index = function(req, res){
    res.render('employees', { title: 'Hallo from main Page' });
};