cc.Class({
    extends: cc.Component,

    properties: {
        enemyPrefab: cc.Prefab,
        scene: cc.Node,
    },

    
    onLoad: function () {
        this.schedule(function(){
            let enemy = cc.instantiate(this.enemyPrefab);
            this.scene.addChild(enemy);
            enemy.getComponent("enemyMove").init();
        }.bind(this),1,10);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
