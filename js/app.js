requirejs.config({
    "baseUrl":"js",
    "paths":{
        //Libs
        "Class":"libs/class",
        "Jquery":"libs/jquery",
        //Classes
        "Launcher":"app/classes/Launcher"
    }
});

require(['app/main']);