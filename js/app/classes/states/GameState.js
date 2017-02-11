define(['State', 'Assets'], function (State, Assets) {

    var GameState = State.extend({
        init: function (_handler) {
            this._super(_handler);
        }
    });

    var x = 100;
    var y = 100;
    var speed = 150;
    GameState.prototype.tick = function (_dt) {
        if (this.handler.getKeyManager().up) {
            y -= speed * _dt;
        }
        if (this.handler.getKeyManager().down) {
            y += speed * _dt;
        }
        if (this.handler.getKeyManager().left) {
            x -= speed * _dt;
        }
        if (this.handler.getKeyManager().right) {
            x += speed * _dt;
        }
    };

    GameState.prototype.render = function (_g) {
        
        _g.myDrawImage(
            Assets.getAssets("terrain").b01,
            50,
            50,
            Assets.getAssets("terrain").width,
            Assets.getAssets("terrain").height
        );

        _g.myDrawImage(
            Assets.getAssets("hero").idle,
            x,
            y,
            Assets.getAssets("hero").width,
            Assets.getAssets("hero").height
        );
    };




    return GameState;

});