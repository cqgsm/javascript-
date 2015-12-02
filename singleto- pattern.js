# javascript-
// first-day javascript单例模式
//单例模式：保证一个类只有一个实例，并提供一个访问他的全局访问点

// 1.最简单的写法（面向对象写法）
    var Singleton = function (name) {
        this.name = name;
        this.instance = null;
    }
    Singleton.prototype.getName = function () {
        alert(this.name);
    }
    Singleton.getInstance = function (name) {
        if (!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
    //创建对象
    var aa = Singleton.getInstance('caoqing');
    var bb = Singleton.getInstance('guosimeng');
    console.log(aa === bb);//true

//2.闭包版本
    var Singleton = function (name) {
        this.name = name;
    }
    Singleton.prototype.getName = function(){
        alert(this.name);
    }
    Singleton.getInstance=(function(){
        var instance = null;
        return function(name){
            if(!instance){
                instance = new Singleton(name);
            }
        }
    })();
    //创建对象
    var aa = Singleton.getInstance('caoqing');
    var bb = Singleton.getInstance('guosimeng');
    console.log(aa === bb);//true
