var secrets = require('./secrets');
var req     = require('request');
var fs      = require('fs');
var dir     = './avatars/';

var myArgs = process.argv.slice(2);
var repoOwner = myArgs[0];
var repo = myArgs[1];

if(myArgs.length < 2){
  console.log('Please insert the "repository owner" and "repository"');

}else{
  console.log('Welcome to the GitHub Avatar Downloader!');

  try{

    // creates the directory
    if (!fs.existsSync(dir)){
      // fs.mkdirSync(dir);
      fs.mkdir(dir, { recursive: true }, (err) => {
        if (err){
          console.log(e.message);
          return;
        }else{
          getRepoContributors(repoOwner, repo, loopData );
        }
      });

    }else{
      getRepoContributors(repoOwner, repo, loopData );
    }

  }catch(e){
    console.log(e.message);
  }
}

// cb: callback function
function getRepoContributors(repoOwner, repoName, cb){
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
    Authorization: secrets.GITHUB_TOKEN
    }
  };

  req(options, function(err, res, body) {
      if(err){
        console.log('Error: ', err.message);
      }

      if(res.statusCode === 200){
        cb(err, JSON.parse(body));
      }
    });
}

function loopData(err, result){
  if(err){
    console.log('Error: ', err.message);
  }

  result.forEach(data => {
    downloadImageByURL(data.avatar_url, `${dir}/${data.login}.jpg`);
    // console.log(`\n*************************************\nLogin: ${data.login} \nAvatar: ${data.avatar_url}`);
  });
}

function downloadImageByURL(url, filePath){

  req.get(url)               // Note 1
      .on('error', function (err) {                                   // Note 2
       console.log(err.message);
       // throw err;
      })
      .pipe(fs.createWriteStream(filePath));               // Note 4
}