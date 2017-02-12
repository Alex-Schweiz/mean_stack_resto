var express = require('express');
    router = express.Router(),
    ctrlTeams = require('../controllers/team'),
    ctrlOffers = require('../controllers/offer'),
    ctrlServices = require('../controllers/service'),
    ctrlMenus = require('../controllers/menu'),
    //Admin Controllers
    ctrlClients = require('../controllers/client'),
    ctrlDelivery = require('../controllers/deliverys'),
    ctrlCategory = require('../controllers/category'),
    ctrlRole = require('../controllers/role'),
    ctrlJob = require('../controllers/job'),
    ctrlReport = require('../controllers/report'),
    ctrlStorage = require('../controllers/storage'),
    ctrlSupplier = require('../controllers/supplier'),
    ctrlUser = require('../controllers/user');

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
router.get('/menus', ctrlMenus.menusList);
router.post('/menus', ctrlMenus.menusCreate);
router.get('/menus/:menuid', ctrlMenus.menusReadOne);
router.put('/menus/:menuid', ctrlMenus.menusUpdateOne);
router.delete('/menus/:menuid', ctrlMenus.menusDeleteOne);

//Admin Section
// Clients
router.get('/client', ctrlClients.clientsList);
router.post('/client', ctrlClients.clientsCreate);
router.get('/client/:clientid', ctrlClients.clientsReadOne);
router.put('/client/:clientid', ctrlClients.clientsUpdateOne);
router.delete('/client/:clientid', ctrlClients.clientsDeleteOne);

// Deliveries
router.get('/delivery', ctrlDelivery.deliverysList);
router.post('/delivery', ctrlDelivery.deliverysCreate);
router.get('/delivery/:deliveryid', ctrlDelivery.deliverysReadOne);
router.put('/delivery/:deliveryid', ctrlDelivery.deliverysUpdateOne);
router.delete('/delivery/:deliveryid', ctrlDelivery.deliverysDeleteOne);

// Categories
router.get('/category', ctrlCategory.categorysList);
router.post('/category', ctrlCategory.categorysCreate);
router.get('/category/:categoryid', ctrlCategory.categorysReadOne);
router.put('/category/:categoryid', ctrlCategory.categorysUpdateOne);
router.delete('/category/:categoryid', ctrlCategory.categorysDeleteOne);

// Roles
router.get('/role', ctrlRole.rolesList);
router.post('/role', ctrlRole.rolesCreate);
router.get('/role/:roleid', ctrlRole.rolesReadOne);
router.put('/role/:roleid', ctrlRole.rolesUpdateOne);
router.delete('/role/:roleid', ctrlRole.rolesDeleteOne);

// Jobs
router.get('/job', ctrlJob.jobsList);
router.post('/job', ctrlJob.jobsCreate);
router.get('/job/:jobid', ctrlJob.jobsReadOne);
router.put('/job/:jobid', ctrlJob.jobsUpdateOne);
router.delete('/job/:jobid', ctrlJob.jobsDeleteOne);

// Reports
router.get('/report', ctrlReport.reportsList);
router.post('/report', ctrlReport.reportsCreate);
router.get('/report/:reportid', ctrlReport.reportsReadOne);
router.put('/report/:reportid', ctrlReport.reportsUpdateOne);
router.delete('/report/:reportid', ctrlReport.reportsDeleteOne);

// Storage
router.get('/storage', ctrlStorage.storagesList);
router.post('/storage', ctrlStorage.storagesCreate);
router.get('/storage/:storageid', ctrlStorage.storagesReadOne);
router.put('/storage/:storageid', ctrlStorage.storagesUpdateOne);
router.delete('/storage/:storageid', ctrlStorage.storagesDeleteOne);

// Supplier
router.get('/supplier', ctrlSupplier.suppliersList);
router.post('/supplier', ctrlSupplier.suppliersCreate);
router.get('/supplier/:supplierid', ctrlSupplier.suppliersReadOne);
router.put('/supplier/:supplierid', ctrlSupplier.suppliersUpdateOne);
router.delete('/supplier/:supplierid', ctrlSupplier.suppliersDeleteOne);

// User
router.get('/user', ctrlUser.usersList);
router.post('/user', ctrlUser.usersCreate);
router.get('/user/:userid', ctrlUser.usersReadOne);
router.put('/user/:userid', ctrlUser.usersUpdateOne);
router.delete('/user/:userid', ctrlUser.usersDeleteOne);


module.exports = router;