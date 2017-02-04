var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlJobs = require('../controllers/jobs');
var ctrlEmployees = require('../controllers/employees');
var ctrlClients = require('../controllers/clients');
var ctrlDeliveries = require('../controllers/deliveries');
var ctrlSuppliers = require('../controllers/suppliers');
var ctrlMenu = require('../controllers/menu');
var ctrlCategories = require('../controllers/categories');
var ctrlStorage = require('../controllers/storage');
var ctrlReports = require('../controllers/reports');
var ctrlRoles = require('../controllers/roles');
var ctrlUsers = require('../controllers/users');

/* GET Home Admin page. */
router.get('/', ctrlHome.index);

/* GET Jobs page. */
router.get('/jobs', ctrlJobs.index);

/* GET Employees page. */
router.get('/employees', ctrlEmployees.index);

/* GET Clients page. */
router.get('/clients', ctrlClients.index);

/* GET Deliveries page. */
router.get('/deliveries', ctrlDeliveries.index);

/* GET Suppliers page. */
router.get('/suppliers', ctrlSuppliers.index);

/* GET Menu page. */
router.get('/menu', ctrlMenu.index);

/* GET Menu Categories page. */
router.get('/categories', ctrlCategories.index);

/* GET Storage page. */
router.get('/storage', ctrlStorage.index);

/* GET Reports page. */
router.get('/reports', ctrlReports.index);

/* GET Roles page. */
router.get('/roles', ctrlRoles.index);

/* GET Users page. */
router.get('/users', ctrlUsers.index);


module.exports = router;
