/**
 * 类的支持
 */

class Fruit {
    //ES6中新型构造器
    constructor(name) {
        this.name = name;
    }

    //实例方法
    sayName() {
        console.log('My name is ' + this.name);
    }
}

//类的继承
class Apple extends Fruit {
    constructor(name) {
        //直接调用父类构造器进行初始化
        super(name);
    }

    program() {
        console.log("I'm coding...");
    }
}

// test
let fruit = new Fruit('fruit~~~~~~~~'),
    apple = new Apple('hong fu shi');

fruit.sayName();
apple.sayName();
apple.program();