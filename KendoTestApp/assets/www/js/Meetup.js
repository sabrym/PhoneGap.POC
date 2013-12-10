var Meetup = (function (Context) {

	function Meetup () {
		
	}

	Meetup.prototype.setMeetup = function(kendoModel, facebookFriends, creator)
	{
		console.log("Meetup friends length" + facebookFriends);
		this.meetupName = kendoModel.meetupName;
		this.meetupDate = kendoModel.meetupDate; 
		this.meetupTime = kendoModel.meetupTime;
		this.meetupId = kendoModel.meetupId;
		this.meetupAttendees = getSelectedFriends(facebookFriends);
		this.meetupCreator = creator;
	}

	function getSelectedFriends (facebookFriends) {
		var selectedFriends = new Array();

		for (var i = 0; i < facebookFriends.length; i++) {
			if (facebookFriends[i].isSelected === true) 
			{
				selectedFriends.push(facebookFriends[i]);
			}
		}

		return selectedFriends;
	}

	// // ApplicationUser.prototype.addFriendsList = function(friendsList) {
	// // 	this.friendsIDs = friendsList;
	// // }

	// Meetup.prototype.getMyFriends = function(friendsArray) {
	// 	alert("In here" + friendsArray.length);
	// 	// check if the list returned from the server is valid
	// 	// once valid, add to the object model for later use
	// 	if (friendsArray !== undefined) 
	// 	{
	// 		this.friendsList = new Array();
	// 		for (var i = 0; i < friendsArray.length; i++) {
	// 			var currentFriend = new FacebookFriend(friendsArray[i].name, friendsArray[i].picture.data.url);				
	// 			this.friendsList.push(currentFriend);
	// 		}
	// 	}

	// 	alert("In here" + this.friendsList.length);
	// }

	return Meetup;

})();