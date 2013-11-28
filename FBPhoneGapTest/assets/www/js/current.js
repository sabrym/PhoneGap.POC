    var Current = (function (Context) {
        var friendIDs;	

      function Current (FB) {
        this.friendIDs = [];

        if (FB == undefined) 
        {
            alert("I have been undefined");
        }
        else
        {
            this.fb = FB;
             // body...
             FB.Event.subscribe('auth.login', function(response) {
                 alert('auth.login event');
             });

             FB.Event.subscribe('auth.logout', function(response) {
                 alert('auth.logout event');
             });

             FB.Event.subscribe('auth.sessionChange', function(response) {
                 alert('auth.sessionChange event');
             });

             FB.Event.subscribe('auth.statusChange', function(response) {
                 alert('auth.statusChange event');
             });

             this.applicationId = "625372577501704";        
         }


     }

     Current.prototype.initFb = function() {
        	// alert("Initializing initFb");
         //    alert("I am printing out the applicationId " + this.applicationId);
         if (this.fb !== undefined) 
         {
            try {
               this.fb.init({
                   appId: this.applicationId,
                   nativeInterface: CDV.FB,
                   useCachedDialogs: false,
               });
               document.getElementById('data').innerHTML = "";
           } catch (e) {
               alert(e);
           }
       }

       Current.prototype.getMyFriends = function(numberOfFriends) {
         var friendIDs = [];
         var counter = 0;
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
                    // alert("User url :" + item.picture.data.url);
                    d.innerHTML = "<img src='"+item.picture.data.url+"'/>"+item.name;
                    data.appendChild(d);

                    friendIDs.push(item.name);
                    console.log("The intermediate array :" + friendIDs);
                    counter++;
                });
           }
       });

         this.retrievedFriends = friendIDs;    
     };
     Current.prototype.getRandomFriend = function() {
        // body...
        alert(this.retrievedFriends.length);
    };
};

return Current;
})();