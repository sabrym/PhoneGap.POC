        var Current = (function (Context) {
          function Current (FB) {
            this.listViewLoaded = false;
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

         Current.prototype.loginUser = function(callback, viewTransitionCallback, loadFriendsCallback) {          
          var currentObject = this;
          this.fb.login(
           function(response) {
              FB.api('/me', function(response1) {
                viewTransitionCallback();
                currentObject.applicationUser.setNameAndURL(response1.name, "", response1.id);
                var accessToken = response.authResponse.accessToken
                var tokenUrl = "https://graph.facebook.com/me/friends?access_token=" + accessToken + "&fields=name,picture&callback=?";
                currentObject.tokenUrl = tokenUrl;
                loadFriendsCallback(tokenUrl);
                callback(); 
            });       
          }
          ,
          { scope: "email" }
          );
        };

        Current.prototype.initializeMeetup = function(guid) {
          this.currentMeetup = new Meetup();
       };
    };

    return Current;
    })();