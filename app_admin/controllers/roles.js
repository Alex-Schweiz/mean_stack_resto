/* GET Roles Admin page */
module.exports.index = function(req, res){
    res.render('roles', {
        title: 'Roles Dashboard',
        roles: [{
            id: '1',
            title: 'Admin',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            id: '2',
            title: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            id: '3',
            title: 'Cook',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            id: '4',
            title: 'Accountant',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }]
    });
};