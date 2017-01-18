var axios = require('axios');

var id = "ETfrom2100";
var sec = "l7n51030";
var param = "?client_id="+id+"&client_secret="+sec;

function getUserInfo(username){
	return axios.get('https://api.github.com/users/'+username+param);
}
var helpers = {
	getPlayersInfo: function(players){
		//fetch some data from Github
		return axios.all(players.map(function(username){
			return getUserInfo(username);
		})).then(function(info){
			return info.map(function(user){
				return user.data;
			})
		}).catch(function(err){
			console.warn('Error in getPlayersInfo', err);
		});
	}
};

module.exports = helpers;