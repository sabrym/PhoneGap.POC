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

	ApplicationUser.prototype.resetFriendsList = function() {
		if (this.friendsList !== undefined) 
		{			
			for (var i = 0; i < this.friendsList.length; i++) {
				if (this.friendsList[i].isSelected === true) {
					this.friendsList[i].isSelected = false;
				} 
			}
		}
	}

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

		// alert("In here" + this.friendsList.length);
	}

	ApplicationUser.prototype.getFriendBasedOnName = function(friendName) {
		var trimmedString = friendName.trim();
		for (var i = 0; i < this.friendsList.length; i++) {
			if (this.friendsList[i].name == trimmedString) 
			{
				return i;				
			}
		}
	}

	return ApplicationUser;

})();