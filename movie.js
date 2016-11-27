
exports.get = function(movieTitle){
	console.log(movieTitle);
	var request = require("request");
	var hostUrl = 'http://www.omdbapi.com/?t=';
	var movieInfo = (hostUrl+movieTitle);
	request(movieInfo,function(err,res,body){
		var movTitle = JSON.parse(body);
		console.log(movTitle);
		return movTitle;
	});

	
};



