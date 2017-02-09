var mongoose = require('mongoose');
var reportItem = mongoose.model('Report');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.reportsList = function(req, res) {
    if (req.params) {
        reportItem.find(req.params)
            .exec(function(err, report) {
                if (!report) {
                    sendJsonResponse(res, 404, {
                        "message": "report id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, report);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No report id in request"
        });
    }
};


module.exports.reportsCreate = function(req, res) {
    reportItem.create({
        year: req.body.year,
        month: req.body.month,
        revenue: req.body.revenue,
        delivery: req.body.delivery,
        restaurant: req.body.restaurant,
        avaragecheque: req.body.avaragecheque
    }, function(err, report) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, report);
        }
    });
};


module.exports.reportsReadOne = function(req, res) {
    if (req.params && req.params.reportid) {
        reportItem.findById(req.params.reportid)
            .exec(function(err, report) {
                if (!report) {
                    sendJsonResponse(res, 404, {
                        "message": "report id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, report);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No report id in request"
        });
    }
};


module.exports.reportsUpdateOne = function(req, res) {
    if (!req.params.reportid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, report id is required"
        });
        return;
    }
    reportItem.findById(req.params.reportid)
        .exec(
            function(err, report) {
                if (!report) {
                    sendJsonResponse(res, 404, {
                        "message": "report id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                report.year = req.body.year;
                report.month = req.body.month;
                report.revenue = req.body.revenue;
                report.delivery = req.body.delivery;
                report.restaurant = req.body.restaurant;
                report.avaragecheque = req.body.avaragecheque;
                report.save(function(err, report) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, report);
                    }
                });
            }
        );
};


module.exports.reportsDeleteOne = function(req, res) {
    var reportid = req.params.reportid;
    if (reportid) {
        reportItem.findByIdAndRemove(reportid)
            .exec(
                function(err, report) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No report id"
        });
    }
};