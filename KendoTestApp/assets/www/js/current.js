        var Current = (function (Context) {

          function Current (FB) {
            
            this.applicationUser = new ApplicationUser();
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
              FB.api('/me', function(response1) {
                currentObject.applicationUser.setNameAndURL(response1.name, "", response1.id);
                alert("Current Object user name" + currentObject.applicationUser.userName);
                var accessToken = response.authResponse.accessToken
                var tokenUrl = "https://graph.facebook.com/me/friends?access_token=" + accessToken + "&callback=?"
                callback2(tokenUrl);
                callback(); 
            });       
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