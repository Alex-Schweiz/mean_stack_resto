/* GET Menu Categories Admin page */
module.exports.index = function(req, res){
    res.render('categories', {
        title: 'Categories Dashboard',
        categories: [{
            id: '1',
            title: 'Appetizer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            id: '2',
            title: 'Main Dish',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            id: '3',
            title: 'Desert',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },{
            id: '4',
            title: 'Beverages',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }]
    });
};