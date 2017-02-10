requirejs.config({
    "baseUrl":"js",
    "paths":{
        //Libs
        "Class": "libs/class",
        "Jquery": "libs/jquery",
        //Classes
        "Display": "app/classes/display/Display",
        "Game": "app/classes/Game",
        "Launcher": "app/classes/Launcher"
    }
});

require(['app/main']);