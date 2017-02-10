define(['Class'], function(Class) {

    var Launcher = Class.extend({
        init : function(_title){

            document.title = _title;
            document.body.innerHTML += "AAAAAAAAAA";

        }
    });

    return Launcher;
    
});