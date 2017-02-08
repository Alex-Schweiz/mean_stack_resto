var express = require('express');
var router = express.Router();
var ctrlTeams = require('../controllers/team');
var ctrlOffers = require('../controllers/offer');
var ctrlServices = require('../controllers/service');
var ctrlMenus = require('../controllers/menu');

// Offers
router.get('/offers', ctrlOffers.offersList);
router.post('/offers', ctrlOffers.offersCreate);
router.get('/offers/:offerid', ctrlOffers.offersReadOne);
router.put('/offers/:offerid', ctrlOffers.offersUpdateOne);
router.delete('/offers/:offerid', ctrlOffers.offersDeleteOne);

// Teams
router.get('/teams', ctrlTeams.teamsList);
router.post('/teams', ctrlTeams.teamsCreate);
router.get('/teams/:teamid', ctrlTeams.teamsReadOne);
router.put('/teams/:teamid', ctrlTeams.teamsUpdateOne);
router.delete('/teams/:teamid', ctrlTeams.teamsDeleteOne);

// Services
router.get('/services', ctrlServices.servicesList);
router.post('/services', ctrlServices.servicesCreate);
router.get('/services/:serviceid', ctrlServices.servicesReadOne);
router.put('/services/:serviceid', ctrlServices.servicesUpdateOne);
router.delete('/services/:serviceid', ctrlServices.servicesDeleteOne);

// Menu
router.get('/menu', ctrlMenus.menusList);
router.post('/menu', ctrlMenus.menusCreate);
router.get('/menu/:menuid', ctrlMenus.menusReadOne);
router.put('/menu/:menuid', ctrlMenus.menusUpdateOne);
router.delete('/menu/:menuid', ctrlMenus.menusDeleteOne);


module.exports = router;