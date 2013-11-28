var ApplicationUser = (function(Context)
{
	var name;
	var facebookId;
	var pictureUrl;

	function ApplicationUser(name, facebookId, pictureUrl)
	{
		this.name = name;
		this.facebookId = facebookId;
		this.pictureUrl = pictureUrl;
	}

	ApplicationUser.prototype.setFacebookFriends = function (facebookFriends)	{
		if (facebookFriends !== undefined) {
			this.facebookFriends = facebookFriends;
		};
	}

	ApplicationUser.prototype.getUserName = function() {
		return this.name;
	};

	ApplicationUser.prototype.getFacebookId = function() {
		return this.facebookId;
	};

	ApplicationUser.prototype.getPictureUrl = function() {
		return this.pictureUrl;
	};

	return ApplicationUser;
}	
)();