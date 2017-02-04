/* GET Menu pages */
module.exports.index = function(req, res){
    res.render('menu', { title: 'Hallo from MENU' });
};

module.exports.appetizer = function(req, res){
    res.render('appetizer', {
        title: 'Appetizer',
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
        dishesInCategory: [{
            link: '/menu/appetizer/barbacoa',
            name: 'Beef Fajitas with color',
            price: '$23.45',
            description: 'Peppers in pan and tortilla bread and sauces'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$11.98',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Beef Fajitas with color',
            price: '$23.45',
            description: 'Peppers in pan and tortilla bread and sauces'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Authentic Mexican Barbacoa',
            price: '$23.45',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$12.12',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Beef Fajitas with color',
            price: '$23.45',
            description: 'Peppers in pan and tortilla bread and sauces'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$11.98',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Beef Fajitas with color',
            price: '$23.45',
            description: 'Peppers in pan and tortilla bread and sauces'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Authentic Mexican Barbacoa',
            price: '$23.45',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$12.12',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$11.98',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Beef Fajitas with color',
            price: '$23.45',
            description: 'Peppers in pan and tortilla bread and sauces'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Authentic Mexican Barbacoa',
            price: '$23.45',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$12.12',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$11.98',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Beef Fajitas with color',
            price: '$23.45',
            description: 'Peppers in pan and tortilla bread and sauces'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Authentic Mexican Barbacoa',
            price: '$23.45',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$12.12',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$11.98',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Beef Fajitas with color',
            price: '$23.45',
            description: 'Peppers in pan and tortilla bread and sauces'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Authentic Mexican Barbacoa',
            price: '$23.45',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$12.12',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$11.98',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Beef Fajitas with color',
            price: '$23.45',
            description: 'Peppers in pan and tortilla bread and sauces'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Authentic Mexican Barbacoa',
            price: '$23.45',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$12.12',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$11.98',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Beef Fajitas with color',
            price: '$23.45',
            description: 'Peppers in pan and tortilla bread and sauces'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Authentic Mexican Barbacoa',
            price: '$23.45',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            name: 'Plate with Taco',
            price: '$12.12',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        }]
    });
};

module.exports.barbacoa = function(req, res){
    res.render('barbacoa', { title: 'Hallo from BARBACOA' });
};