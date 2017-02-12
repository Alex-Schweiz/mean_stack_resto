var mongoose = require('mongoose'),
    storageItem = mongoose.model('Storage');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.storagesList = function(req, res) {
    if (req.params) {
        storageItem.find(req.params)
            .exec(function(err, storage) {
                if (!storage) {
                    sendJsonResponse(res, 404, {
                        "message": "storage id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, storage);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No storage id in request"
        });
    }
};


module.exports.storagesCreate = function(req, res) {
    storageItem.create({
        title: req.body.title,
        description: req.body.description,
        available: req.body.available,
        supplier: req.body.supplier,
        costOne: req.body.costOne,
        updated: req.body.updated
    }, function(err, storage) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, storage);
        }
    });
};


module.exports.storagesReadOne = function(req, res) {
    if (req.params && req.params.storageid) {
        storageItem.findById(req.params.storageid)
            .exec(function(err, storage) {
                if (!storage) {
                    sendJsonResponse(res, 404, {
                        "message": "storage id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, storage);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No storage id in request"
        });
    }
};


module.exports.storagesUpdateOne = function(req, res) {
    if (!req.params.storageid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, storage id is required"
        });
        return;
    }
    storageItem.findById(req.params.storageid)
        .exec(
            function(err, storage) {
                if (!storage) {
                    sendJsonResponse(res, 404, {
                        "message": "storage id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                storage.title = req.body.title;
                storage.description = req.body.description;
                storage.available = req.body.available;
                storage.supplier = req.body.supplier;
                storage.costOne = req.body.costOne;
                storage.updated = req.body.updated;

                storage.save(function(err, storage) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, storage);
                    }
                });
            }
        );
};


module.exports.storagesDeleteOne = function(req, res) {
    var storageid = req.params.storageid;
    if (storageid) {
        storageItem.findByIdAndRemove(storageid)
            .exec(
                function(err, storage) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No storage id"
        });
    }
};