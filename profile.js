var http = require('http');

//print message function
function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + ' badges and ' + points + ' in JavaScript.';
  console.log(message);
}

//print error function
function printError(error){
  console.error(error.message, 'ahhh!!');
}

function get(username){

  var request = http.get('http://teamtreehouse.com/' + username + '.json', function(response){
    console.log(response.statusCode); // status code 200 if successful
    var body = '';
    response.on('data', function(chunk){
      body += chunk;
    })
    response.on('end', function(){
      if (response.statusCode === 200) {
        try {
          var profile = JSON.parse(body);
          printMessage(profile.name, profile.badges.length, profile.points.JavaScript)
        } catch(error){
          printError(error);
        }
      } else {
        printError({message: 'There was an error getting profile for ' + username + '.'})
      }
    })
  }); //end http.get request

  request.on('error', printError);

}//end get function

module.exports.getProfile = get;
