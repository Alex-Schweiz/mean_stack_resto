/* GET Service pages */
module.exports.index = function(req, res){
    res.render('services', { title: 'Hallo from service' });
};

module.exports.schoolMenu = function(req, res){
    res.render('school-menu', { title: 'Hallo from School Menu' });
};