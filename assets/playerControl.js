cc.Class({
    extends: cc.Component,

    properties: {
        _left: false,
        _right: false,
        _up: false,
        _down: false,
    },

    // use this for initialization
    onLoad: function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onCollisionEnter: function (other, self) {
        console.log("collision");
        cc.director.loadScene("game-over");
    },

    onKeyDown: function (event) {
        switch(event.keyCode) {
            case cc.KEY.w:this._up = true;break;
            case cc.KEY.s:this._down = true;break;
            case cc.KEY.a:this._left = true;break;
            case cc.KEY.d:this._right = true;break;

            case cc.KEY.up:this._up = true;break;
            case cc.KEY.down:this._down = true;break;
            case cc.KEY.left:this._left = true;break;
            case cc.KEY.right:this._right = true;break;
        }
    },

    onKeyUp: function (event) {
        switch(event.keyCode) {
            case cc.KEY.w:this._up = false;break;
            case cc.KEY.s:this._down = false;break;
            case cc.KEY.a:this._left = false;break;
            case cc.KEY.d:this._right = false;break;

            case cc.KEY.up:this._up = false;break;
            case cc.KEY.down:this._down = false;break;
            case cc.KEY.left:this._left = false;break;
            case cc.KEY.right:this._right = false;break;
        }
    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
        let moveStep = cc.Vec2.ZERO;
        if(this._up) moveStep.y += 10;
        if(this._down) moveStep.y -= 10;
        if(this._left) moveStep.x -= 10;
        if(this._right) moveStep.x += 10;
        this.node.position = cc.pAdd(this.node.position, moveStep);
     },
});
