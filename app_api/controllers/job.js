var mongoose = require('mongoose');
var jobItem = mongoose.model('Job');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.jobsList = function(req, res) {
    if (req.params) {
        jobItem.find(req.params)
            .exec(function(err, job) {
                if (!job) {
                    sendJsonResponse(res, 404, {
                        "message": "job id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, job);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No job id in request"
        });
    }
};


module.exports.jobsCreate = function(req, res) {
    jobItem.create({
        title: req.body.title,
        description: req.body.description,
        requirements: req.body.requirements,
        salary: req.body.salary,
        comments: req.body.comments
    }, function(err, job) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, job);
        }
    });
};


module.exports.jobsReadOne = function(req, res) {
    if (req.params && req.params.jobid) {
        jobItem.findById(req.params.jobid)
            .exec(function(err, job) {
                if (!job) {
                    sendJsonResponse(res, 404, {
                        "message": "job id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, job);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No job id in request"
        });
    }
};


module.exports.jobsUpdateOne = function(req, res) {
    if (!req.params.jobid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, job id is required"
        });
        return;
    }
    jobItem.findById(req.params.jobid)
        .exec(
            function(err, job) {
                if (!job) {
                    sendJsonResponse(res, 404, {
                        "message": "job id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                job.title = req.body.title;
                job.description = req.body.description;
                job.requirements = req.body.requirements;
                job.salary = req.body.salary;
                job.comments = req.body.comments;
                job.save(function(err, job) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, job);
                    }
                });
            }
        );
};


module.exports.jobsDeleteOne = function(req, res) {
    var jobid = req.params.jobid;
    if (jobid) {
        jobItem.findByIdAndRemove(jobid)
            .exec(
                function(err, job) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No job id"
        });
    }
};