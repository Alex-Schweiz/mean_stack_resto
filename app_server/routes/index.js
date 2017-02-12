var express = require('express'),
    router = express.Router(),
    ctrlHome = require('../controllers/home'),
    ctrlService = require('../controllers/service'),
    ctrlServiceItem = require('../controllers/serviceItem'),
    ctrlTeam = require('../controllers/team'),
    ctrlTeamMember = require('../controllers/team-member'),
    ctrlOffer = require('../controllers/offer'),
    ctrlMenu = require('../controllers/menu'),
    ctrlMenuCategory = require('../controllers/menuCategory'),
    ctrlDish = require('../controllers/dish');


/* GET home page. */
router.get('/', ctrlHome.index);

/* Services pages */
router.get('/services',ctrlService.index);
router.get('/services/:serviceid',ctrlServiceItem.index);

/* Team pages */
router.get('/team',ctrlTeam.index);
router.get('/team/:teamid', ctrlTeamMember.index);

/* Offer pages */
router.get('/offers',ctrlOffer.index);

/* Menu pages */
router.get('/menu',ctrlMenu.index);
router.get('/menu/:category',ctrlMenuCategory.index);
router.get('/dish/:dishid',ctrlDish.index);

module.exports = router;
