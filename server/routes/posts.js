import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';

const photoSchema = mongoose.Schema({//뼈대생성
    userid: String, 
    hashtag: String,
    image: Buffer
});

const Photo = mongoose.model('photos',photoSchema);//model생성

router.post('/upload', function(req, res, next){ //upload 하면 저장됨. 
    let userid = req.body.userid;
    let hashtag = req.body.hashtag;
    let image = req.body.image;
    let photo = new Photo ({'userid':userid, 'hashtag':hashtag , 'image':image});
    photo.save(function(err, data){
        if(err){
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
export default router;
