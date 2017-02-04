/* GET home page */
module.exports.index = function(req, res){
    res.render('index', {
        title: 'Home',
        pageHeader: {
            address: '6087 Richmond hwy, Alexandria, VA',
            tel: '703 329 0632',
            workingTime: 'Mo-Fr 11:00-00:00, Sa-Su 15:00-00:00',
            chefRecommends: 'Chef Juarez Recommends',
            testimonialsTitle: 'See how happy all of our visitors are'
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
        headerText: {
            h1: 'Get spicy shrimp tacos with hot mango gravy!',
            h2: 'Pungent Mexican tacos...',
            h3: 'This July, all our spicy tacos are offered with a 15% discount, all month long!'
        },
        sectionKebab: {
            title: 'The celebration of Mexico’s vibrant history and culture.',
            description: 'Centuries of conquest, independence and revolution have left us with a diverse culinary heritage and a generous appetite for festivity.',
            text: 'At Hidalgo, you will find authentic, homemade, Central Mexican cuisine in the warm, gracious atmosphere of a Mexican country estate. Our bar features a wide selection of tequilas and margaritas, as well as a unique Menu.'
        },
        topDishes: [{
            link: '/menu/appetizer/barbacoa',
            imgLink: 'img/menu-item-1-1-480x380.jpg',
            name: 'Authentic Mexican Barbacoa',
            price: '$5.45',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            imgLink: 'img/menu-item-2-480x380.jpg',
            name: 'Plate with Taco',
            price: '$18.45',
            description: 'Nachos chips and tomato dip, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            imgLink: 'img/menu-item-3-1-480x380.jpg',
            name: 'Beef Fajitas with color',
            price: '$23.45',
            description: 'Peppers in pan and tortilla bread and sauces'
        },{
            link: '/menu/appetizer/barbacoa',
            imgLink: 'img/menu-item-4-480x380.jpg',
            name: 'Taco Salad in a Tortilla',
            price: '$11.95',
            description: 'Bowl with Beef Cheese and Lettuce'
        },{
            link: '/menu/appetizer/barbacoa',
            imgLink: 'img/menu-item-5-480x380.jpg',
            name: 'Tortillas with Chili Con',
            price: '$17.85',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            imgLink: 'img/menu-item-6-480x380.jpg',
            name: 'Tortillas with Chili Con',
            price: '$22.85',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            imgLink: 'img/menu-item-7-480x380.jpg',
            name: 'Tortillas with Chili Con',
            price: '$11.85',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        },{
            link: '/menu/appetizer/barbacoa',
            imgLink: 'img/menu-item-8-480x380.jpg',
            name: 'Tortillas with Chili Con',
            price: '$17.85',
            description: '200g of Black Angus steak, french fries, Coleslav salad, beer'
        }],
        homeTestimonials: [{
            text: 'As for a family that moved to Juneau, Alaska from the sunny state’s city of San Diego, finding at least one Mexican restaurant here was incredible! An icing on the cake: it’s actually very tasty here!',
            avatar: 'img/testimonial-1.jpg',
            name: 'Andrew Winchester',
            postedOn: 'posted on, TripAdvisor'
        },{
            text: 'While I’ve been living in Alaska my whole life, I’ve always enjoyed visiting a local TexMex restaurant  in Anchorage… Since I and my husband moved over to Juneau, we’ve been delighted to find another one up here!',
            avatar: 'img/testimonial-2.jpg',
            name: 'Diana Smith',
            postedOn: 'posted on, foursquare'
        }],
        homeMenu: [{
            link:'/menu/appetizer',
            image:'img/appetizers.jpg',
            menuCategory:'Appetizers'
        },{
            link:'/menu/appetizer',
            image:'img/main-courses.jpg',
            menuCategory:'Main Courses'
        },{
            link:'/menu/appetizer',
            image:'img/desserts.jpg',
            menuCategory:'Desserts'
        },{
            link:'/menu/appetizer',
            image:'img/beverages.jpg',
            menuCategory:'Beverages'
        }],
        chiefWords: {
            name: 'Manuel Juarez, the Chef',
            h4: 'Do you feel hungry for good food and festive mood, while living in or visiting the beautiful city of Juneau?',
            p1: 'I invite you to my family Mexican restaurant, filled with authentic Mexican dishes and drinks, just as well as the festive, Southern atmosphere and interior!',
            p2: 'Be my guest today!'
        },
        homeInterior: {
            h2: 'Interior',
            h6: 'Our Mexican restaurant is livid, bright and festive not just in a culinary way, but in regard to our atmosphere and interior too!',
            p: 'Each evening we host a live mariachi band and each day our interior theme changes to represent some another Mexican state or a city, like Mexico, Juarez, Baja California and so much more…'
        }
    });
};