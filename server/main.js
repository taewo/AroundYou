import express from 'express';
const app = express();
let port = 7777;//원시형의 값을 나중에 변경할 일이 있을떄 let쓴다. 

app.use(express.static(__dirname + './../client/public'));

app.get('/', function(req, res){
  res.render('./../client/public/index.html');
});

app.get('/test', function(req, res){
  res.send('test');
});

// app.get('/hello', (req, res) => {
//   return res.send("Can you hear me?");
// });
//
// import posts from './routes/posts';
// app.use('/posts', posts);
const server = app.listen(app.get("port"), () => {
  console.log("Express listening on port", port);
});

import mongoose from 'mongoose';
// connect to mongo database named "myDB"
mongoose.connect('mongodb://localhost/myDB');
import mongo from ('./rotes/post.js'); 
app.use('/', mongo)
