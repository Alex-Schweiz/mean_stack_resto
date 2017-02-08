var mongoose = require('mongoose');
var menuItem = mongoose.model('Menu');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.menusList = function(req, res) {
    if (req.params) {
        menuItem.find(req.params)
            .exec(function(err, menu) {
                if (!menu) {
                    sendJsonResponse(res, 404, {
                        "message": "menu id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, menu);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No menu id in request"
        });
    }
};


module.exports.menusCreate = function(req, res) {
    menuItem.create({
        name: req.body.name,
        image: req.body.image,
        link: req.body.link,
        category: req.body.link,
        price: req.body.price,
        weight: req.body.weight,
        ingredients: req.body.ingredients,
        description: req.body.description
    }, function(err, menu) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, menu);
        }
    });
};


module.exports.menusReadOne = function(req, res) {
    if (req.params && req.params.menuid) {
        menuItem.findById(req.params.menuid)
            .exec(function(err, menu) {
                if (!menu) {
                    sendJsonResponse(res, 404, {
                        "message": "menu id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, menu);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No menu id in request"
        });
    }
};


module.exports.menusUpdateOne = function(req, res) {
    if (!req.params.menuid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, menu id is required"
        });
        return;
    }
    menuItem.findById(req.params.menuid)
        .exec(
            function(err, menu) {
                if (!menu) {
                    sendJsonResponse(res, 404, {
                        "message": "menu id not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                menu.name = req.body.name;
                menu.image = req.body.image;
                menu.link = req.body.link;
                menu.category = req.body.category;
                menu.price = req.body.price;
                menu.weight = req.body.weight;
                menu.ingredients = req.body.ingredients;
                menu.description = req.body.description;
                menu.save(function(err, menu) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, menu);
                    }
                });
            }
        );
};


module.exports.menusDeleteOne = function(req, res) {
    var menuid = req.params.menuid;
    if (menuid) {
        menuItem.findByIdAndRemove(menuid)
            .exec(
                function(err, menu) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "No menu id"
        });
    }
};