var mongoose = require('mongoose'),
    categoryItem = mongoose.model('Category');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.categorysList = function(req, res) {
    if (req.params) {
        categoryItem.find(req.params)
            .exec(function(err, category) {
                if (!category) {
                    sendJsonResponse(res, 404, {
                        "message": "category id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, category);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No category id in request"
        });
    }
};


module.exports.categorysCreate = function(req, res) {
    categoryItem.create({
        title: req.body.title,
        description: req.body.description
    }, function(err, category) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, category);
        }
    });
};


module.exports.categorysReadOne = function(req, res) {
    if (req.params && req.params.categoryid) {
        categoryItem.findById(req.params.categoryid)
            .exec(function(err, category) {
                if (!category) {
                    sendJsonResponse(res, 404, {
                        "message": "category id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, category);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No category id in request"
        });
    }
};


module.exports.categorysUpdateOne = function(req, res) {
    if (!req.params.categoryid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, category id is required"
        });
        return;
    }
    categoryItem.findById(req.params.categoryid)
        .exec(
            function(err, category) {
                if (!category) {
                    sendJsonResponse(res, 404, {
                        "message": "category id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                category.title = req.body.title;
                category.description = req.body.description;
                category.save(function(err, category) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, category);
                    }
                });
            }
        );
};


module.exports.categorysDeleteOne = function(req, res) {
    var categoryid = req.params.categoryid;
    if (categoryid) {
        categoryItem.findByIdAndRemove(categoryid)
            .exec(
                function(err, category) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No category id"
        });
    }
};