/* GET Clients Admin page */
module.exports.index = function(req, res){
    res.render('clients', {
        title: 'Clients Dashboard',
        clients: [{
            id: '1',
            email: 'abcdas@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'Johanne Mario',
            username: 'user58a4sd54',
            phone: '565944515',
            address: 'London,Down street,82',
            birthdate: '1991/04/25'
        },{
            id: '2',
            email: 'pretty@mail.com',
            photo: 'images/clients/client-2.jpg',
            name: 'Barbara Stone',
            username: 'bartd4',
            phone: '8484844',
            address: 'Los Angelos, 58th Avenue, 14, app 85',
            birthdate: '1988/07/10'
        },{
            id: '3',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-3.jpg',
            name: 'Lucas JP',
            username: 'ussdfsd54',
            phone: '84842566844',
            address: 'Paris,adsasda street,844',
            birthdate: '1990/09/05'
        },{
            id: '4',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'JP Morgan',
            username: 'ussdfsd54',
            phone: '154154',
            address: 'Paris, adsasda street,844',
            birthdate: '1980/09/05'
        },{
            id: '5',
            email: 'abcdas@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'Johanne Mario',
            username: 'user58a4sd54',
            phone: '565944515',
            address: 'London,Down street,82',
            birthdate: '1991/04/25'
        },{
            id: '6',
            email: 'pretty@mail.com',
            photo: 'images/clients/client-2.jpg',
            name: 'Barbara Stone',
            username: 'bartd4',
            phone: '8484844',
            address: 'Los Angelos, 58th Avenue, 14, app 85',
            birthdate: '1988/07/10'
        },{
            id: '7',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-3.jpg',
            name: 'Lucas JP',
            username: 'ussdfsd54',
            phone: '84842566844',
            address: 'Paris,adsasda street,844',
            birthdate: '1990/09/05'
        },{
            id: '8',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'JP Morgan',
            username: 'ussdfsd54',
            phone: '154154',
            address: 'Paris, adsasda street,844',
            birthdate: '1980/09/05'
        },{
            id: '9',
            email: 'abcdas@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'Johanne Mario',
            username: 'user58a4sd54',
            phone: '565944515',
            address: 'London,Down street,82',
            birthdate: '1991/04/25'
        },{
            id: '10',
            email: 'pretty@mail.com',
            photo: 'images/clients/client-2.jpg',
            name: 'Barbara Stone',
            username: 'bartd4',
            phone: '8484844',
            address: 'Los Angelos, 58th Avenue, 14, app 85',
            birthdate: '1988/07/10'
        },{
            id: '11',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-3.jpg',
            name: 'Lucas JP',
            username: 'ussdfsd54',
            phone: '84842566844',
            address: 'Paris,adsasda street,844',
            birthdate: '1990/09/05'
        },{
            id: '12',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'JP Morgan',
            username: 'ussdfsd54',
            phone: '154154',
            address: 'Paris, adsasda street,844',
            birthdate: '1980/09/05'
        },{
            id: '13',
            email: 'abcdas@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'Johanne Mario',
            username: 'user58a4sd54',
            phone: '565944515',
            address: 'London,Down street,82',
            birthdate: '1991/04/25'
        },{
            id: '14',
            email: 'pretty@mail.com',
            photo: 'images/clients/client-2.jpg',
            name: 'Barbara Stone',
            username: 'bartd4',
            phone: '8484844',
            address: 'Los Angelos, 58th Avenue, 14, app 85',
            birthdate: '1988/07/10'
        },{
            id: '15',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-3.jpg',
            name: 'Lucas JP',
            username: 'ussdfsd54',
            phone: '84842566844',
            address: 'Paris,adsasda street,844',
            birthdate: '1990/09/05'
        },{
            id: '16',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'JP Morgan',
            username: 'ussdfsd54',
            phone: '154154',
            address: 'Paris, adsasda street,844',
            birthdate: '1980/09/05'
        },{
            id: '17',
            email: 'abcdas@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'Johanne Mario',
            username: 'user58a4sd54',
            phone: '565944515',
            address: 'London,Down street,82',
            birthdate: '1991/04/25'
        },{
            id: '18',
            email: 'pretty@mail.com',
            photo: 'images/clients/client-2.jpg',
            name: 'Barbara Stone',
            username: 'bartd4',
            phone: '8484844',
            address: 'Los Angelos, 58th Avenue, 14, app 85',
            birthdate: '1988/07/10'
        },{
            id: '19',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-3.jpg',
            name: 'Lucas JP',
            username: 'ussdfsd54',
            phone: '84842566844',
            address: 'Paris,adsasda street,844',
            birthdate: '1990/09/05'
        },{
            id: '20',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'JP Morgan',
            username: 'ussdfsd54',
            phone: '154154',
            address: 'Paris, adsasda street,844',
            birthdate: '1980/09/05'
        },{
            id: '21',
            email: 'abcdas@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'Johanne Mario',
            username: 'user58a4sd54',
            phone: '565944515',
            address: 'London,Down street,82',
            birthdate: '1991/04/25'
        },{
            id: '22',
            email: 'pretty@mail.com',
            photo: 'images/clients/client-2.jpg',
            name: 'Barbara Stone',
            username: 'bartd4',
            phone: '8484844',
            address: 'Los Angelos, 58th Avenue, 14, app 85',
            birthdate: '1988/07/10'
        },{
            id: '23',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-3.jpg',
            name: 'Lucas JP',
            username: 'ussdfsd54',
            phone: '84842566844',
            address: 'Paris,adsasda street,844',
            birthdate: '1990/09/05'
        },{
            id: '24',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'JP Morgan',
            username: 'ussdfsd54',
            phone: '154154',
            address: 'Paris, adsasda street,844',
            birthdate: '1980/09/05'
        },{
            id: '25',
            email: 'abcdas@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'Johanne Mario',
            username: 'user58a4sd54',
            phone: '565944515',
            address: 'London,Down street,82',
            birthdate: '1991/04/25'
        },{
            id: '26',
            email: 'pretty@mail.com',
            photo: 'images/clients/client-2.jpg',
            name: 'Barbara Stone',
            username: 'bartd4',
            phone: '8484844',
            address: 'Los Angelos, 58th Avenue, 14, app 85',
            birthdate: '1988/07/10'
        },{
            id: '27',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-3.jpg',
            name: 'Lucas JP',
            username: 'ussdfsd54',
            phone: '84842566844',
            address: 'Paris,adsasda street,844',
            birthdate: '1990/09/05'
        },{
            id: '28',
            email: 'psdfsresdfsdftty@mail.com',
            photo: 'images/clients/client-1.jpg',
            name: 'JP Morgan',
            username: 'ussdfsd54',
            phone: '154154',
            address: 'Paris, adsasda street,844',
            birthdate: '1980/09/05'
        }]
    });
};