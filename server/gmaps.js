import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var pinSchema = new Schema({
	title: String,
	lat: Number,
	lng: Number,
	username: String,
	tag: String, // how does input multiple tag?
	photo: Buffer
});

// var Pin = mongoose.model('pin', pinSchema);

// var pin = new Pin({
// 	title: "abc",
// 	lat:37.583248,
// 	lng:126.985183,
// 	username: "test1",
// 	tag: "good, bad, nice",
// 	phtoo:""
// })

// pin.save((err, pin)=> {
// 	if(err) { console.error(err) };
// 	console.dir(pin);
// })

// 1. 값이 들어가는지 확인 >> 더미값
// 2. 위도/경도값 받아오는지 확인 >> gmaps에서 받아오는 값
// 3. 사용자 입력값 받아오고 >> 사용자가 post 보내는 값 (string)
// 4. img까지 >> img까지

export default mongoose.model('pin', pinSchema)