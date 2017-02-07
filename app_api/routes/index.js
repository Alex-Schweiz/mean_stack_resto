var express = require('express');
var router = express.Router();
var ctrlTeams = require('../controllers/team');

// Teams
router.get('/teams', ctrlTeams.teamsList);
router.post('/teams', ctrlTeams.teamsCreate);
router.get('/teams/:teamid', ctrlTeams.teamsReadOne);
router.put('/teams/:teamid', ctrlTeams.teamsUpdateOne);
router.delete('/teams/:teamid', ctrlTeams.teamsDeleteOne);


module.exports = router;