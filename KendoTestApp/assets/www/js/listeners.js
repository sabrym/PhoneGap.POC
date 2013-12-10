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

 