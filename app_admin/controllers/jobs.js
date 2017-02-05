/* GET Jobs Admin page */
module.exports.index = function(req, res){
    res.render('jobs', {
        title: 'Jobs Dashboard',
        jobs: [{
            id: '1',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            salary: '$ 1300',
            comments: '-'
        },{
            id: '2',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            salary: '$ 1500',
            comments: '-'
        },{
            id: '2',
            position: 'Chef',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            salary: '$ 1500',
            comments: '-'
        },{
            id: '3',
            position: 'Cook',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            salary: '$ 1500',
            comments: '-'
        },{
            id: '4',
            position: 'Dishwasher',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            salary: '$ 700',
            comments: '-'
        },{
            id: '5',
            position: 'Washer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            salary: '$ 500',
            comments: '-'
        },{
            id: '6',
            position: 'Cook',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            salary: '$ 1500',
            comments: '-'
        },{
            id: '7',
            position: 'Sish',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            salary: '$ 1500',
            comments: '-'
        },{
            id: '8',
            position: 'Cleaner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            salary: '$ 800',
            comments: '-'
        }
        ]
    });
};