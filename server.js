var express = require('express');
const port = 4200;
const app = express();
const path = require('path');
const router = express.Router();
const baffle = require('baffle');


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', router);
app.listen(port,()=>console.log(`Server Running on Port ${port} --- ${new Date()}`));
