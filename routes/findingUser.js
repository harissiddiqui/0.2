var express = require('express');
var router = express.Router();
var User = require('../models/user');

// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//         console.log('Time: ', Date.now())
//         next()
//     })
// define the home page route
router.get('/', function(req, res) {
    User.find({}, function(err, docs) {
        res.send(docs)
    })
})

module.exports = router;