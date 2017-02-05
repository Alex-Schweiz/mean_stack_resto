/* GET Team pages */
module.exports.index = function(req, res){
    res.render('team', {
        title: 'Team',
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
        teamInfo: {
            title: 'Our Team',
            text: 'Dedicated restaurant service. Originally we were and still are a family owned restaurant…That means, that while' +
                    ' our team almost in half consists of our founder’s family members, we’re anyways one big friendly team! All of our chefs, cooks,' +
                    ' assistants or even waiters are highly professional, extra dedicated and super friendly and hospitable!'
        },
        teamMember: [{
            name: 'Manuel Umberto Juarez',
            image: 'img/team/team-3.jpg',
            link: '/team/team-member',
            position: 'Chef',
            description: 'While our founder is our main chef, he’s also a part of our family! Managing our menu, interior, and ' +
                        'finances, this man still manages to rock his major position – cooking a majority of our restaurant dishes!'
        },{
            name: 'Alberto Bernanzo',
            image: 'img/team/team-1.jpg',
            link: '/team/team-member',
            position: 'Chef assistant',
            description: 'While our founder is our main chef, he’s also a part of our family! Managing our menu, interior, and ' +
            'finances, this man still manages to rock his major position – cooking a majority of our restaurant dishes!'
        },{
            name: 'Cortez Fernandez',
            image: 'img/team/team-6.jpg',
            link: '/team/team-member',
            position: 'Chef assistant',
            description: 'While our founder is our main chef, he’s also a part of our family! Managing our menu, interior, and ' +
            'finances, this man still manages to rock his major position – cooking a majority of our restaurant dishes!'
        },{
            name: 'Manuel Umberto Juarez',
            image: 'img/team/team-3.jpg',
            link: '/team/team-member',
            position: 'Chef',
            description: 'While our founder is our main chef, he’s also a part of our family! Managing our menu, interior, and ' +
            'finances, this man still manages to rock his major position – cooking a majority of our restaurant dishes!'
        },{
            name: 'Jordano Juarez',
            image: 'img/team/team-3.jpg',
            link: '/team/team-member',
            position: 'Cook',
            description: 'While our founder is our main chef, he’s also a part of our family! Managing our menu, interior, and ' +
            'finances, this man still manages to rock his major position – cooking a majority of our restaurant dishes!'
        },{
            name: 'Serena Johnson',
            image: 'img/team/team-6.jpg',
            link: '/team/team-member',
            position: 'Chef',
            description: 'While our founder is our main chef, he’s also a part of our family! Managing our menu, interior, and ' +
            'finances, this man still manages to rock his major position – cooking a majority of our restaurant dishes!'
        },{
            name: 'Manuel Umberto Juarez',
            image: 'img/team/team-8.jpg',
            link: '/team/team-member',
            position: 'Chef',
            description: 'While our founder is our main chef, he’s also a part of our family! Managing our menu, interior, and ' +
            'finances, this man still manages to rock his major position – cooking a majority of our restaurant dishes!'
        },{
            name: 'Manuel Umberto Juarez',
            image: 'img/team/team-7.jpg',
            link: '/team/team-member',
            position: 'Chef',
            description: 'While our founder is our main chef, he’s also a part of our family! Managing our menu, interior, and ' +
            'finances, this man still manages to rock his major position – cooking a majority of our restaurant dishes!'
        }]
    });
};

module.exports.teamMember = function(req, res){
    res.render('team-member', {
        title: 'Team Member',
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
        teamMember: {
            name: 'Manuel Umberto Juarez',
            image: 'img/team/team-3.jpg',
            position: 'Chef',
            description: 'While our founder is our main chef, he’s also a part of our family! Managing our menu, interior, and ' +
            'finances, this man still manages to rock his major position – cooking a majority of our restaurant dishes!'
        }
    });
};