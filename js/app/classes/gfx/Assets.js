define(['Class', 'ImageLoader', 'SpriteSheet'], function (Class, ImageLoader, SpriteSheet) {

    var DEFAULT_WIDTH = 32;
    var DEFAULT_HEIGHT = 32;
    var assets = {};

    var Assets = Class.extend({
        init: function (_name, _path, _width, _height) {
            assets[_name] = this;
            this.name = _name;
            this.path = _path;
            this.width = _width || DEFAULT_WIDTH;
            this.height = _height || DEFAULT_HEIGHT;
            this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
        }
    });

    Assets.DEFAULT_WIDTH = DEFAULT_WIDTH;
    Assets.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
    Assets.getAssets = function (_name) {
        return assets[_name];
    };

    var terrain = new Assets("terrain","res/sprites/terrain.png",32,32);
    terrain.b01 = terrain.sheet.crop(12*32,18*32,32,32);
    
    var ast = new Assets("name","res/sprites/sprite.png",28,42);
    ast.idle = ast.sheet.crop(3,0,64,64);

    return Assets;

});