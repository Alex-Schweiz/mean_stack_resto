/* GET Menu pages */
module.exports.index = function(req, res){
    res.render('menu', {
        title: 'Menu',
        menus: [{
            link:'/menu/appetizer',
            image:'img/appetizers.jpg',
            menuCategory:'Appetizers'
        },{
            link:'/menu/maindish',
            image:'img/main-courses.jpg',
            menuCategory:'Main Courses'
        },{
            link:'/menu/desserts',
            image:'img/desserts.jpg',
            menuCategory:'Desserts'
        },{
            link:'/menu/beverage',
            image:'img/beverages.jpg',
            menuCategory:'Beverages'
        }]
    });
};
