/* GET Menu pages */
module.exports.index = function(req, res){
    res.render('menu', {
        title: 'Menu',
        menus: [{
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
        }]
    });
};
