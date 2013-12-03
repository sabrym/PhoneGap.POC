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
          alert("Status Change!");
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

     Current.prototype.loginUser = function(callback, callback1, callback2) {
      var currentObject = this;
      callback1();
      this.fb.login(
       function(response) {
        console.log("This is the authentication token " + response.authResponse.accessToken);
            var accessToken = response.authResponse.accessToken
        var tokenUrl = "https://graph.facebook.com/me/friends?access_token=" + accessToken + "&callback=?"
 
        // Place <input id="name" /> and <input id="fbuid" /> into HTML
        callback2(tokenUrl);
         callback();
        
      }
      ,
      { scope: "email" }
      );
    };

    Current.prototype.getMyFriends = function(callback) {
     var friendIDs = [];
     var counter = 0;
     var fdata;
     this.fb.api('/me/friends', { fields: 'id, name, picture' },  function(response) {
       if (response.error) {
         alert(JSON.stringify(response.error));
       } else {
        alert(JSON.stringify(response.data));
         var data = document.getElementById('data');
         callback();
          // https://graph.facebook.com/me/friends?access_token=
         // fdata=response.data;
         // console.log("fdata: "+fdata);
         // response.data.forEach(function(item) {
         //   var d = document.createElement('div');
         //   d.innerHTML = "<img src='"+item.picture.data.url+"'/>"+item.name;
         //   data.appendChild(d);

         //   friendIDs.push(item.name);
         //   console.log("The intermediate array :" + friendIDs);
         //   counter++;
         // });
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