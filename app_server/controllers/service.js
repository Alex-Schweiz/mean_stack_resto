/* GET Service pages */
module.exports.index = function(req, res){
    res.render('services', {
        title: 'Services',
        generalInfo: {
            address: '6087 Richmond hwy, Alexandria, VA',
            tel: '703 329 0632',
            workingTime: 'Mo-Fr 11:00-00:00, Sa-Su 15:00-00:00',
            email: 'info@demolink.org',
            copyright: '© 2017 Alex Resto. All Rights Reserved. Terms of use and Privacy Policy',
            chefRecommends: 'Chef Juarez Recommends',
            testimonialsTitle: 'See how happy all of our visitors are',
            mainDescription: 'Hidalgo is the most authentically Mexican restaurant in Juneau and probably in the whole of Alaska! We bring the ' +
            'traditional Mexican cuisine and mariachi bands to this cold-weathered state... Try any of our ' +
            'Mexican dishes, be it a nacho with jalapeño or a tequila induced burrito, and you\'ll feel like visiting Mexico!',
        },
        navMenu: [{
            link: '/',
            name: 'Home'
        },{
            link: '/services',
            name: 'Services'
        },{
            link: '/team',
            name: 'Team'
        },{
            link: '/offers',
            name: 'Offers'
        },{
            link: '/menu',
            name: 'Our menu'
        }],
        instagram: [{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-1.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-2.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-3.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-4.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-5.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-6.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-7.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-8.jpg'
        }],
        allServicesInfo: [{
            link: '/services/school-menu',
            image: 'img/services-icon-1-1.png',
            description: 'We offer a wide range of catering for any type of a casual or a festive event – from a wedding to a birthday, all enhanced with authentic Mexican food!'
        },{link: '/services/school-menu',
            image: 'img/services-icon-2-1.png',
            description: 'We offer a wide range of catering for any type of a casual or a festive event – from a wedding to a birthday, all enhanced with authentic Mexican food!'
        },{link: '/services/school-menu',
            image: 'img/services-icon-3-1.png',
            description: 'We offer a wide range of catering for any type of a casual or a festive event – from a wedding to a birthday, all enhanced with authentic Mexican food!'
        },{link: '/services/school-menu',
            image: 'img/services-icon-4-1.png',
            description: 'We offer a wide range of catering for any type of a casual or a festive event – from a wedding to a birthday, all enhanced with authentic Mexican food!'
        },{link: '/services/school-menu',
            image: 'img/services-icon-5-1.png',
            description: 'We are not afraid to lend you with our waiters, whichever food-related event you’ll be using them at… They will heighten a customer service up to a notch!'
        },{link: '/services/school-menu',
            image: 'img/services-icon-6-1.png',
            description: 'We offer a wide range of catering for any type of a casual or a festive event – from a wedding to a birthday, all enhanced with authentic Mexican food!'
        }]
    });
};

module.exports.schoolMenu = function(req, res){
    res.render('school-menu', {
        title: 'School Menu',
        generalInfo: {
            address: '6087 Richmond hwy, Alexandria, VA',
            tel: '703 329 0632',
            workingTime: 'Mo-Fr 11:00-00:00, Sa-Su 15:00-00:00',
            email: 'info@demolink.org',
            copyright: '© 2017 Alex Resto. All Rights Reserved. Terms of use and Privacy Policy',
            chefRecommends: 'Chef Juarez Recommends',
            testimonialsTitle: 'See how happy all of our visitors are',
            mainDescription: 'Hidalgo is the most authentically Mexican restaurant in Juneau and probably in the whole of Alaska! We bring the ' +
            'traditional Mexican cuisine and mariachi bands to this cold-weathered state... Try any of our ' +
            'Mexican dishes, be it a nacho with jalapeño or a tequila induced burrito, and you\'ll feel like visiting Mexico!',
        },
        navMenu: [{
            link: '/',
            name: 'Home'
        },{
            link: '/services',
            name: 'Services'
        },{
            link: '/team',
            name: 'Team'
        },{
            link: '/offers',
            name: 'Offers'
        },{
            link: '/menu',
            name: 'Our menu'
        }],
        instagram: [{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-1.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-2.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-3.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-4.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-5.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-6.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-7.jpg'
        },{
            link: 'https://www.instagram.com/p/BK76usIBxMX/',
            image: 'img/insta/insta-8.jpg'
        }],
        sectionText: {
            title: 'School menus',
            text: 'In the last 3 years, we’ve supplied more than 15 Juneau high schools with a quality Mexican food for kids’ lunch-boxes! Join the list now!'
        },
        serviceInfo: {
            headText: 'While it’s safe to say, that absolutely any kind of an occasion, festivity or a socially important event needs food ' +
                        'and drinks to be catered, there’s now a whole multitude of cuisines that you can be choosing your caterer from…',
            upperText: 'With our wide selection of various traditional Mexican dishes and the big range of N/A and alcoholic beverages for catering, ' +
                        'our services have already been picked for hundreds of occasions!',
            image: '../img/school-menu-1-1.jpg',
            lowerText: 'Without any doubt, our team has got all the skills and manpower that it takes for professionally serving weddings,' +
                    'anniversaries, bachelor parties and basically any other entertaining kinds of events… So the first thing we’ll be doing,' +
                    ' as you’ll approach us with your order for catering an event, we’ll be talking to you about the meals and drinks' +
                    ' selection… It’s a safe bet to suppose, that while Mexican food is diverse enough to become a part of any type of occasion, there are ' +
                    'some events which need the menu to be adapted and optimized a bit. This includes making food for an event with kids more healthy and less ' +
                    'spicy, just as well as the opposite for gala dinners,weddings and any other kinds of parties! Also, besides providing  appetizers, dishes, and ' +
                    'beverages we will surely supply your event with our waiters and bartenders! We’ve been serving food for Alaska events for years. Be sure that we' +
                    ' know how to make it tasty and festive!'
        }
    });
};