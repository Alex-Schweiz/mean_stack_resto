var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlService = require('../controllers/service');
var ctrlTeam = require('../controllers/team');
var ctrlTeamMember = require('../controllers/team-member');
var ctrlOffer = require('../controllers/offer');
var ctrlMenu = require('../controllers/menu');
var ctrlServiceItem = require('../controllers/serviceItem');

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
router.get('/menu/appetizer',ctrlMenu.appetizer);
router.get('/menu/appetizer/barbacoa',ctrlMenu.barbacoa);

module.exports = router;
