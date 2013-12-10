var FacebookFriend = (function (Context) {
	
	function FacebookFriend(name, imageUrl)
	{
		this.name = name;
		this.imageUrl = imageUrl;
	}

	FacebookFriend.prototype.setSelected = function(selected) {
		this.isSelected = selected;
	}

	return FacebookFriend;
}) ();