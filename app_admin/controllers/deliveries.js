/* GET Deliveres Admin page */
module.exports.index = function(req, res){
    res.render('deliveries', {
        title: 'Deliveries Dashboard',
        deliveries: [{
            id: '1',
            id_client: '2',
            content: 'Tako, Chicken, Tomato',
            status: 'Added',
            deliverer: 'Mario Przasd',
            address: 'London,Down street,82',
            price: '$ 38',
            date: '2016/10/25'
        },{
            id: '2',
            id_client: '5',
            content: 'Pizza, Patric star, Sponge',
            status: 'Finished',
            deliverer: 'Hagrid the Forester',
            address: 'Paris, Christelle rue,82',
            price: '$ 45',
            date: '2016/10/24'
        },{
            id: '3',
            id_client: '4',
            content: 'Jelly, Cream, asdsad',
            status: 'Rejected',
            deliverer: 'None',
            address: 'Nice,Roi rue,289',
            price: '$ 23',
            date: '2016/10/26'
        },{
            id: '4',
            id_client: '2',
            content: 'Tako, Chicken, Tomato',
            status: 'Added',
            deliverer: 'Mario Przasd',
            address: 'London,Down street,82',
            price: '$ 38',
            date: '2016/10/25'
        },{
            id: '5',
            id_client: '5',
            content: 'Pizza, Patric star, Sponge',
            status: 'Finished',
            deliverer: 'Hagrid the Forester',
            address: 'Paris, Christelle rue,82',
            price: '$ 45',
            date: '2016/10/24'
        },{
            id: '6',
            id_client: '4',
            content: 'Jelly, Cream, asdsad',
            status: 'Rejected',
            deliverer: 'None',
            address: 'Nice,Roi rue,289',
            price: '$ 23',
            date: '2016/10/26'
        },{
            id: '7',
            id_client: '2',
            content: 'Tako, Chicken, Tomato',
            status: 'Added',
            deliverer: 'Mario Przasd',
            address: 'London,Down street,82',
            price: '$ 38',
            date: '2016/10/25'
        },{
            id: '8',
            id_client: '5',
            content: 'Pizza, Patric star, Sponge',
            status: 'Finished',
            deliverer: 'Hagrid the Forester',
            address: 'Paris, Christelle rue,82',
            price: '$ 45',
            date: '2016/10/24'
        },{
            id: '9',
            id_client: '4',
            content: 'Jelly, Cream, asdsad',
            status: 'Rejected',
            deliverer: 'None',
            address: 'Nice,Roi rue,289',
            price: '$ 23',
            date: '2016/10/26'
        },{
            id: '10',
            id_client: '2',
            content: 'Tako, Chicken, Tomato',
            status: 'Added',
            deliverer: 'Mario Przasd',
            address: 'London,Down street,82',
            price: '$ 38',
            date: '2016/10/25'
        },{
            id: '11',
            id_client: '5',
            content: 'Pizza, Patric star, Sponge',
            status: 'Finished',
            deliverer: 'Hagrid the Forester',
            address: 'Paris, Christelle rue,82',
            price: '$ 45',
            date: '2016/10/24'
        },{
            id: '12',
            id_client: '4',
            content: 'Jelly, Cream, asdsad',
            status: 'Rejected',
            deliverer: 'None',
            address: 'Nice,Roi rue,289',
            price: '$ 23',
            date: '2016/10/26'
        },{
            id: '13',
            id_client: '2',
            content: 'Tako, Chicken, Tomato',
            status: 'Added',
            deliverer: 'Mario Przasd',
            address: 'London,Down street,82',
            price: '$ 38',
            date: '2016/10/25'
        },{
            id: '14',
            id_client: '5',
            content: 'Pizza, Patric star, Sponge',
            status: 'Finished',
            deliverer: 'Hagrid the Forester',
            address: 'Paris, Christelle rue,82',
            price: '$ 45',
            date: '2016/10/24'
        },{
            id: '15',
            id_client: '4',
            content: 'Jelly, Cream, asdsad',
            status: 'Rejected',
            deliverer: 'None',
            address: 'Nice,Roi rue,289',
            price: '$ 23',
            date: '2016/10/26'
        },{
            id: '16',
            id_client: '2',
            content: 'Tako, Chicken, Tomato',
            status: 'Added',
            deliverer: 'Mario Przasd',
            address: 'London,Down street,82',
            price: '$ 38',
            date: '2016/10/25'
        },{
            id: '17',
            id_client: '5',
            content: 'Pizza, Patric star, Sponge',
            status: 'Finished',
            deliverer: 'Hagrid the Forester',
            address: 'Paris, Christelle rue,82',
            price: '$ 45',
            date: '2016/10/24'
        },{
            id: '18',
            id_client: '4',
            content: 'Jelly, Cream, asdsad',
            status: 'Rejected',
            deliverer: 'None',
            address: 'Nice,Roi rue,289',
            price: '$ 23',
            date: '2016/10/26'
        },{
            id: '19',
            id_client: '2',
            content: 'Tako, Chicken, Tomato',
            status: 'Added',
            deliverer: 'Mario Przasd',
            address: 'London,Down street,82',
            price: '$ 38',
            date: '2016/10/25'
        },{
            id: '20',
            id_client: '5',
            content: 'Pizza, Patric star, Sponge',
            status: 'Finished',
            deliverer: 'Hagrid the Forester',
            address: 'Paris, Christelle rue,82',
            price: '$ 45',
            date: '2016/10/24'
        },{
            id: '21',
            id_client: '4',
            content: 'Jelly, Cream, asdsad',
            status: 'Rejected',
            deliverer: 'None',
            address: 'Nice,Roi rue,289',
            price: '$ 23',
            date: '2016/10/26'
        },{
            id: '22',
            id_client: '2',
            content: 'Tako, Chicken, Tomato',
            status: 'Added',
            deliverer: 'Mario Przasd',
            address: 'London,Down street,82',
            price: '$ 38',
            date: '2016/10/25'
        }]
    });
};