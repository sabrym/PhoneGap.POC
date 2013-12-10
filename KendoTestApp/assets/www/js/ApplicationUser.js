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

	ApplicationUser.prototype.setMyFriends = function(friendsArray) {
		this.friendsList = new Array();
		// check if the list returned from the server is valid
		// once valid, add to the object model for later use
		if (friendsArray !== undefined) 
		{			
			for (var i = 0; i < friendsArray.length; i++) {
				var currentFriend = new FacebookFriend(friendsArray[i].name, friendsArray[i].picture.data.url);				
				this.friendsList.push(currentFriend);
			}
		}

		alert("In here" + this.friendsList.length);
	}

	return ApplicationUser;

})();