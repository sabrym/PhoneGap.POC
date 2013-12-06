var ApplicationUser = (function (Context) {

	function ApplicationUser () {
		this.userName = "";
		this.imageUrl = "";
		this.friendsIDs = [];
		this.userId = "";
	}

	ApplicationUser.prototype.setNameAndURL = function(name, url, userId) {
		this.userName = name;
		this.imageUrl = url;
		this.userId = userId;
	};

	ApplicationUser.prototype.addFriendsList = function(friendsList) {
		this.friendsIDs = friendsList;
	};

	ApplicationUser.prototype.hello = function() {
		// body...
		alert("Hello!");
	};

	return ApplicationUser;

}) ();