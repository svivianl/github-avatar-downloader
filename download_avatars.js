var fs = require('fs');
var dir = './avatars/';

var myArgs = process.argv.slice(2);
var repoOwner = myArgs[0];
var repo = myArgs[1];

// creates the directory
if (!fs.existsSync(dir)){
  // fs.mkdirSync(dir);
  fs.mkdir(dir, { recursive: true }, (err) => {
  if (err){
    console.log(e.message);
  }else{
    //
  }
});
}
