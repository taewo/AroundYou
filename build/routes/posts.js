'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


var photoSchema = _mongoose2.default.Schema({ //뼈대생성
    userid: String,
    hashtag: String,
    image: Buffer
});

var Photo = _mongoose2.default.model('photos', photoSchema); //model생성

router.post('/upload', function (req, res, next) {
    //upload 하면 저장됨. 
    var userid = req.body.userid;
    var hashtag = req.body.hashtag;
    var image = req.body.image;
    var photo = new Photo({ 'userid': userid, 'hashtag': hashtag, 'image': image });
    photo.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send('update err');
            return;
        }
        res.status(200).send('Saved!');
    });
});

// router.get('/', (req, res) => {
//   res.send('posts');
// });
exports.default = router;