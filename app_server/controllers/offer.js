/* GET Offer page */
var request = require('request'),
    apiOptions = {server : "http://localhost:3000"};
/*if (process.env.NODE_ENV === 'production') {
 apiOptions.server = "https://mysite.herokuapp.com";
 }*/

var renderOfferPage = function(req, res, responseBody){
    var message;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('offers', {
        title: 'Offers',
        offers: responseBody,
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
        message: message
    });
};


module.exports.index = function(req, res){
    var requestOptions, path;
    path = '/api/offers';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        qs : {}
    };
    request(
        requestOptions,
        function(err, response, body) {
            renderOfferPage(req, res, body);
        }
    );
};

