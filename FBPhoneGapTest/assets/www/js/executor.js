var Executor = (function(Context)
{
	var applicationId = "625372577501704";
	var applicationUser;

	function Executor()
	{

	}

	Executor.prototype.start = function ()
	{
		console.log("Within the executor function!!!");
		 // Initialize the Facebook SDK
      	document.addEventListener('deviceready', function() {
	          FB.init({
	              appId: this.applicationId,
	              nativeInterface: CDV.FB,
	              useCachedDialogs: false
	          });
	}
	
	Executor.prototype.login = function() {
		FB.login(
                         function(response) {
                         if (response.session) {
                         alert('logged in');
                         } else {
                         alert('not logged in');
                         }
                         },
                         { scope: "email" }
                         );
	}

	Executor.prototype.getFriendsList = function(count) {
		var friendIDs = [];
      	var fdata;

      	 FB.api('/me/friends', { fields: 'id, name, picture' },  function(response) {
                       if (response.error) {
                       alert(JSON.stringify(response.error));
                       } else {
                       var data = document.getElementById('data');
             fdata=response.data;
             console.log("fdata: "+fdata);
                       response.data.forEach(function(item) {
                                             var d = document.createElement('div');
                                             d.innerHTML = "<img src="+item.picture+"/>"+item.name;
                                             data.appendChild(d);
                                             });
                       }
          var friends = response.data;
          console.log(friends.length); 
          for (var k = 0; k < friends.length && k < 200; k++) {
                var friend = friends[k];
                var index = 1;

                friendIDs[k] = friend.id;
                //friendsInfo[k] = friend;
          }
          console.log("friendId's: "+friendIDs);
                       });
	}

	return Executor;
}	
)();