/* GET Home Admin page */
module.exports.index = function(req, res){
    res.render('home', {
        title: 'Dashboard',
        monthStatistics: [{
            icon: 'fa-user',
            number: '20',
            title: 'New users',
            description: 'Lorem ipsum psdea itgum rixt.'
        },{
            icon: 'fa-gift',
            number: '54',
            title: 'New Deliveries',
            description: 'Lorem ipsum psdea itgum rixt.'
        },{
            icon: 'fa-dollar',
            number: '$24 589.12',
            title: 'Sales',
            description: 'Lorem ipsum psdea itgum rixt.'
        },{
            icon: 'fa-internet-explorer',
            number: '1 709',
            title: 'Site visitors',
            description: 'Lorem ipsum psdea itgum rixt.'
        }],
        yearStatistics: [{
            icon: 'fa-user',
            number: '445',
            title: 'New users',
            description: 'Lorem ipsum psdea itgum rixt.'
        },{
            icon: 'fa-gift',
            number: '45654',
            title: 'New Deliveries',
            description: 'Lorem ipsum psdea itgum rixt.'
        },{
            icon: 'fa-dollar',
            number: '$12 244 589.12',
            title: 'Sales',
            description: 'Lorem ipsum psdea itgum rixt.'
        },{
            icon: 'fa-internet-explorer',
            number: '158 709',
            title: 'Site visitors',
            description: 'Lorem ipsum psdea itgum rixt.'
        }]
    });
};