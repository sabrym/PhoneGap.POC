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

	return Meetup;

})();