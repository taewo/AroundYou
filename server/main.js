import express from 'express';
import mongoose from 'mongoose';
import router from './routes.js'

const app = express();
app.set("port", 7777);

// [CONFIGURE mongoose]
// Connect to mongoDB server
const db = mongoose.connection;
db.on('err', console.error);
db.once('open', ()=>{
	console.log("Connected to mongoDB server!");
});
mongoose.connect('mongodb://localhost/')

// Define mongoose Model
import Pin from '../build/gmaps.js'

app.use(express.static(__dirname + './../client/public'));
app.use('/', router)

app.get('/', function(req, res){
  res.render('./../client/public/index.html');
});

app.get('/test', function(req, res){
  res.send('test');
});


const server = app.listen(app.get("port"), () => {
  console.log("Express listening on port", app.get("port"));
});
