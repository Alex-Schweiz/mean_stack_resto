/* GET Employees Admin page */
module.exports.index = function(req, res){
    res.render('employees', {
        title: 'Employees Dashboard',
        employees: [{
            image: 'images/team-1.jpg',
            name: 'Jose Maurinho',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },{
            image: 'images/team-3.jpg',
            name: 'Jose Maurinho',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },{
            image: 'images/team-4.jpg',
            name: 'Jose Maurinho',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },{
            image: 'images/team-6.jpg',
            name: 'Jose Maurinho',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },{
            image: 'images/team-1.jpg',
            name: 'Jose Maurinho',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },{
            image: 'images/team-4.jpg',
            name: 'Jose Maurinho',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },{
            image: 'images/team-7.jpg',
            name: 'Jose Maurinho',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        },{
            image: 'images/team-1.jpg',
            name: 'Jose Maurinho',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        }
        ]
    });
};