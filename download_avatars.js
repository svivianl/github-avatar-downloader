var secrets = require('./secrets');
var app     = require('request');
var fs      = require('fs');
var dir     = './avatars/';

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
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
    Authorization: secrets.GITHUB_TOKEN
    }
  };

  app(options, function(err, res, body) {
    cb(err, JSON.parse(body));
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  if(err){
    console.log('Error: ', err.message);
  }

  result.forEach(data => {
    console.log(`\n*************************************\nLogin: ${data.login} \nAvatar: ${data.avatar_url}`);
  });
  // console.log("Errors:", err);
  // console.log("Result:", result);
});