var app = require('request');
var fs = require('fs');
var dir = './avatars/';

// var myArgs = process.argv.slice(2);
// var repoOwner = myArgs[0];
// var repo = myArgs[1];

console.log('Welcome to the GitHub Avatar Downloader!');


// // creates the directory
// if (!fs.existsSync(dir)){
//   // fs.mkdirSync(dir);
//   fs.mkdir(dir, { recursive: true }, (err) => {
//   if (err){
//     console.log(e.message);
//   }else{
//     //
//   }
// });
// }

// app(url, (error, resp, body) =>{

//     console.log("Errors:", err);
//     console.log("Result:", result);
// })

// cb: callback function
function getRepoContributors(repoOwner, repoName, cb){
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
  app(url, function(err, res, body) {
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});