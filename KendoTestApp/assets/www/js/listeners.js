      function onBodyLoad()
      {   window.current = new Current(FB);
        window.current.subscribeForFBEvents();             
        document.addEventListener("deviceready", onDeviceReady, false);        
    }

    function onDeviceReady()
    {
        console.log("The device is ready");
        document.addEventListener("backbutton", onBackButtonPressed, false);
        window.current.initFb();
    }

    function onBackButtonPressed () {
                // sabrym : we can use the navigator object to go back in history else if we do not want to 
                // see fit that the application needs to be closed then can call   navigator.app.exitApp();
                navigator.app.backHistory();
            }