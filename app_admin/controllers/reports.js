/* GET Reports Admin page */
module.exports.index = function(req, res){
    res.render('reports', {
        title: 'Reports',
        reports: [{
            year: '2011',
            month: 'May',
            revenue: '$15000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        },{
            year: '2012',
            month: 'June',
            revenue: '$15000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        },{
            year: '2013',
            month: 'July',
            revenue: '$11000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        },{
            year: '2014',
            month: 'August',
            revenue: '$25000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        },{
            year: '2011',
            month: 'May',
            revenue: '$15000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        },{
            year: '2012',
            month: 'June',
            revenue: '$15000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        },{
            year: '2013',
            month: 'July',
            revenue: '$11000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        },{
            year: '2014',
            month: 'August',
            revenue: '$25000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        },{
            year: '2013',
            month: 'July',
            revenue: '$11000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        },{
            year: '2014',
            month: 'August',
            revenue: '$25000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        },{
            year: '2011',
            month: 'May',
            revenue: '$15000',
            delivery: '$1200',
            restaurant: '$13800',
            avarageCheque: '$15'
        }]
    });
};