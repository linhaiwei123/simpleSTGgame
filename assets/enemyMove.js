cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {

    },

    init: function(){
        let constX = 480;
        let constY = 320;
        this.schedule(function(){
            this.node.position = cc.v2(cc.randomMinus1To1()*constX,constY);
            let action = cc.moveTo(3,cc.randomMinus1To1()*constX,-constY);
            this.node.runAction(action);
        }.bind(this),3);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
