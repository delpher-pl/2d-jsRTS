define(['Class','Display','Assets'],function(Class,Display,Assets){

    var _this;
    var isRunning = false;
    var title, width, height, g, display;

    var ast = new Assets("Test","res/sprites/sprite.png", null, null);
    var img2 = ast.sheet.crop(64,64,256,512);

    var img = new Image();
    img.src = "res/sprites/sprite.png";

    var Game = Class.extend({
        init: function(_title, _width, _height){
            _this = this;
            title = _title;
            width = _width;
            height = _height;
        }
    });

    function init(){
        display = new Display(title, width, height);
        g = display.getCtx();
    }

    function tick(_td){


    }

    function render(){
        g.clearRect(0,0,width,height);
        g.drawImage(img,10,10,64,64);
        g.myDrawImage(img2,80,80,32,32);
    }

    Game.prototype.run = function(){
        init();
        var fps = 30;
        var timePerTick = 1000/fps;
        var delta = 0;
        var now;
        var lastTime = Date.now();
        var timer = 0;
        var ticks = 0;
        function loop(){
            if(isRunning){
                now = Date.now();
                delta = now - lastTime;
                timer += delta;
                lastTime = now;
            }
            if(timer>=timePerTick){
                dt = timer/1000;
                tick(dt);
                render();
                timer = 0;
            }
            window.requestAnimationFrame(loop);
        }
        loop();
    };

    Game.prototype.start = function(){
        if(isRunning) return;
        isRunning = true;
        this.run();
    };

    return Game;
});