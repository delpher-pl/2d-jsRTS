define(['State', 'Assets'], function (State, Assets) {

    var GameState = Class.extend({
        init: function () {
            //this._super();
        }
    });


    GameState.prototype.tick = function (_dt) {
    };

    GameState.prototype.render = function (_g) {
        _g.myDrawImage(
            Assets.getAssets("name").idle,
            0,
            0,
            Assets.getAssets("name").width,
            Assets.getAssets("name").height
        );

        _g.myDrawImage(
            Assets.getAssets("terrain").b01,
            50,
            50,
            Assets.getAssets("terrain").width,
            Assets.getAssets("terrain").height
        );
    };




    return GameState;

});