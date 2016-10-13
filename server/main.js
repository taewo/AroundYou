import express from 'express';
import mongoose from 'mongoose';
import router from './routes.js'
import path from 'path'

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

// Server-side routing
// it takes all url(*) to react-router
// app.use('/upload', function(req, res){
// 	res.sendFile(path.resolve(__dirname, '../client/src/components/upload.js'))
// })

app.use('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
});

// Listen server 0.0.0.0:7777 or localhost:7777
const server = app.listen(app.get("port"), () => {
  console.log("Express listening on port", app.get("port"));
});
