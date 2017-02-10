define(['Class','Display'],function(Class,Display){

    var _this;
    var isRunning = false;
    var title, width, height, g, display;

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
    var x = 20;
    var y = 30;
    function tick(_td){
        console.log(_td);
        x += 20 * _td;
        y += 30 * _td;
    }

    function render(){
        g.clearRect(0,0,width,height);
        //g.fillStyle = "#333333";
        g.fillRect(x,y,200,50);
        //g.fill();
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