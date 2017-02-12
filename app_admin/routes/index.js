var express = require('express'),
    router = express.Router(),
    ctrlIndex = require('../controllers/home'),
    ctrlJobs = require('../controllers/jobs'),
    ctrlEmployees = require('../controllers/employees'),
    ctrlClients = require('../controllers/clients'),
    ctrlDeliveries = require('../controllers/deliveries'),
    ctrlSuppliers = require('../controllers/suppliers'),
    ctrlMenu = require('../controllers/menu'),
    ctrlCategories = require('../controllers/categories'),
    ctrlStorage = require('../controllers/storage'),
    ctrlReports = require('../controllers/reports'),
    ctrlRoles = require('../controllers/roles'),
    ctrlUsers = require('../controllers/users');

/* GET Home Admin page. */
router.get('/', ctrlIndex.index);

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
