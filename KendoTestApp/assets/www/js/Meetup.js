var MeetupStatus = {
	Pending: 0,
	InProgress: 1,
	Cancelled: 2,
	Complete: 3
};

var Meetup = (function (Context) {

	function Meetup () {
		
	}

	Meetup.prototype.setMeetup = function(kendoModel, facebookFriends, creator)
	{
		console.log("Meetup friends length" + kendoModel.meetupLocation);
		this.meetupName = kendoModel.meetupName;
		this.meetupDate = kendoModel.meetupDate; 
		this.meetupTime = kendoModel.meetupTime;
		this.meetupId = kendoModel.meetupId;
		this.meetupAttendees = getSelectedFriends(facebookFriends);
		this.meetupCreator = creator;
		this.meetupStatus = MeetupStatus.Pending; 
		this.meetupLocation = kendoModel.meetupLocation;
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