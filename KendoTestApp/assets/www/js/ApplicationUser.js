var ApplicationUser = (function (Context) {

	function ApplicationUser () {
		this.friendsIDs = [];
		this.userId = "";	
		this.userName = "";
		this.imageUrl = "";
	}

	ApplicationUser.prototype.setNameAndURL = function(name, url, userId) {
		this.userName = name;
		this.imageUrl = url;
		this.userId = userId;
	}

	// ApplicationUser.prototype.addFriendsList = function(friendsList) {
	// 	this.friendsIDs = friendsList;
	// }

	// ApplicationUser.prototype.getMyFriends = function(friendsArray) {
	// 	alert("In here");
	// 	// check if the list returned from the server is valid
	// 	// once valid, add to the object model for later use
	// 	if (friendsArray !== undefined) 
	// 	{
	// 		this.friendsList = new Array();
	// 		for (var i = 0; i < friendsArray.length; i++) {
	// 			var currentFriend = 
	// 			{
	// 				name: friendsArray[i].name;
	// 				imageUrl: friendsArray[i].picture.data.url;
	// 			}

	// 			this.friendsArray.push(currentFriend);
	// 		}
	// 	}
	// }

	return ApplicationUser;

})();