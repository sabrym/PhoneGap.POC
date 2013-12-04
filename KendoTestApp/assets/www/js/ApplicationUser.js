var ApplicationUser = (function (Context) {

	function ApplicationUser () {
		this.userName = "";
		this.imageUrl = "";
		this.friendsIDs = [];
	}

	ApplicationUser.prototype.setNameAndURL = function(name, url) {
		this.userName = name;
		this.imageUrl = url;
	};

	ApplicationUser.prototype.addFriendsList = function(friendsList) {
		this.friendsIDs = friendsList;
	};

	return ApplicationUser;

});