var express = require('express');
const port = 4200;
const app = express();
const path = require('path');
const router = express.Router();
const baffle = require('baffle');


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.use('/', router);
app.listen(port,()=>console.log(`Server Running on Port ${port}`));
