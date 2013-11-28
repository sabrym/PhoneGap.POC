var Current = (function (Context) {
	
	var applicationId = "625372577501704";
	var applicationUser;
	
	function Current() {
		alert("Printing out a Current"); 

	}

	function Current (FB) {
    	// body...
    	if (FB == undefined) 
    	{
    		alert("I have been undefined");

    	}
    	else
    	{
    		try {
    			alert('This is from within the current class');
    			FB.init({
    				appId: this.applicationId,
    				nativeInterface: CDV.FB,
    				useCachedDialogs: false,
    			});
    			document.getElementById('data').innerHTML = "";
    		} catch (e) {
    			alert(e);
    		}
    	}

    }

    Current.prototype.initFb = function() {
    	alert("Initializing initFb");

    };

    return Current;
})();