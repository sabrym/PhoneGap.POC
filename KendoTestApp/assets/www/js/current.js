    var Current = (function (Context) {
      var loginStatus;
      function Current (FB) {
        this.applicationId = "625372577501704"; 
        if (FB == undefined) 
        {
          alert("Error ocurred with the Facebook SDK");
        }
        else
        {
          this.fb = FB;
        }
      }

      Current.prototype.initKendo = function(first_argument) {
        this.kendoMobileApplication  = new kendo.mobile.Application(document.body);
      };

      Current.prototype.navigateTo = function(viewName) {
        this.kendoMobileApplication("#modalview-camera");
      };

      Current.prototype.subscribeForFBEvents = function() {
        var currentClass = this;
        this.fb.Event.subscribe('auth.login', function(response) {
          currentClass.loginStatus = response.status;
          console.log("This is the response after logging in " + response.status)
        });

        this.fb.Event.subscribe('auth.logout', function(response) {
          currentClass.loginStatus = response.status;
        });

        this.fb.Event.subscribe('auth.sessionChange', function(response) {
          currentClass.loginStatus = response.status;
        });

        this.fb.Event.subscribe('auth.statusChange', function(response) {
          currentClass.loginStatus = response.status;
        });
      };

      Current.prototype.initFb = function() {
       if (this.fb !== undefined) 
       {
        try {
         this.fb.init({
           appId: this.applicationId,
           nativeInterface: CDV.FB,
           useCachedDialogs: false,
         });
       } catch (e) {
         alert(e);
       }
     }

     Current.prototype.loginUser = function() {
      this.fb.login(
       function(response) {
       //  if (response.authResponse) {
       //   console.log('Welcome!  Fetching your information.... ');
       //   FB.api('/me', function(response) {
       //     console.log('Good to see you, ' + response.name + '.');
       //   });
       // } else {
       //   console.log('User cancelled login or did not fully authorize.');
       // }  

       alert('Facebook login Failed' + response.status);
     }
     ,
     { scope: "email" }
     );
    };

    Current.prototype.getMyFriends = function(numberOfFriends) {
     var friendIDs = [];
     var counter = 0;
     var fdata;
     this.fb.api('/me/friends', { fields: 'id, name, picture' },  function(response) {
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
    alert(this.retrievedFriends.length);
  };
};

return Current;
})();