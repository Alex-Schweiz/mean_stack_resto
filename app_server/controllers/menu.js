/* GET Menu pages */
module.exports.index = function(req, res){
    res.render('menu', { title: 'Hallo from MENU' });
};

module.exports.appetizer = function(req, res){
    res.render('appetizer', { title: 'Hallo from APPETIZER' });
};

module.exports.barbacoa = function(req, res){
    res.render('barbacoa', { title: 'Hallo from BARBACOA' });
};