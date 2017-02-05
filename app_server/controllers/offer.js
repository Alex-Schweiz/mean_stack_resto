/* GET Offer page */
module.exports.index = function(req, res){
    res.render('offers', {
        title: 'Offers',
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
        offers: [{
            name:'Mexican lunch',
            price:'20',
            specialItems:['Mild Guacamole','Frutas Guacamole','Rojo Guacamole','Ceviche Peruano']
        },{
            name:'Burito lunch',
            price:'18',
            specialItems:['Hamachi','Toro Taquitos','Sopa de Tortilla','Ensalada de Jicama']
        },{
            name:'Tokito lunch',
            price:'22',
            specialItems:['Quesadilla de Camaron','Quesadilla de Tuetano','Hongos & Nopales','Polo Taco']
        }],
        offerTestimonials: {
            title: 'What people are saying about our restaurant',
            text: 'Anyone, who visits our place leaves us well fed and in a great mood!'
        },
        offersTestimonials: [{
            text: 'As for a family that moved to Juneau, Alaska from the sunny state’s city of San Diego, finding at least one Mexican restaurant here was incredible! An icing on the cake: it’s actually very tasty here!',
            avatar: 'img/testimonial-1.jpg',
            name: 'Andrew Winchester',
            postedOn: 'posted on, TripAdvisor'
        },{
            text: 'While I’ve been living in Alaska my whole life, I’ve always enjoyed visiting a local TexMex restaurant  in Anchorage… Since I and my husband moved over to Juneau, we’ve been delighted to find another one up here!',
            avatar: 'img/testimonial-2.jpg',
            name: 'Diana Smith',
            postedOn: 'posted on, foursquare'
        },{
            text: 'Whenever I feel hungry or fancy a romantic dining out with my fiancee, we always end up booking a table up here… ' +
                    'It’s just so festive and tasty, I guess we just can’t do anything about it…',
            avatar: 'img/testimonial-1.jpg',
            name: 'Steven Winchester',
            postedOn: 'posted on, Yelp'
        }],
    });
};