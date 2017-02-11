define(['Jquery','Class'], function($, Class) {
    //Private Variables
    var canvas, title, width, height, ctx;

    var Display = Class.extend({
        init : function(_title, _width, _height){

            title = _title;
            width = _width;
            height = _height;
            createDisplay();

        }
    });

    //Private Method
    function createDisplay(){
        document.title = title;
        var body = document.body;

        var canvas = document.createElement("canvas");
        canvas.id = "canvas";
        canvas.width = width;
        canvas.height = height;
        body.appendChild(canvas);
        ctx = canvas.getContext("2d");
    }

    //Getters
    Display.prototype.getTitle = function(){    
        return title;
    };

    Display.prototype.getWidth = function(){
        return width;
    };
    
    Display.prototype.getHeight = function(){
        return height;
    };

    Display.prototype.getCtx = function(){
        return ctx;
    };


    CanvasRenderingContext2D.prototype.myDrawImage = function(asset,_x,_y,_width,_height){
        this.drawImage(asset.sheet, asset.x, asset.y, asset.width, asset.height, _x, _y, _width, _height);
    };

    return Display;

});