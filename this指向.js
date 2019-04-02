
/*上下文执行*/
function test() {
    var as = 1
    console.log(foo);
    console.log(bar);
    
    var foo = 'Hello';
    console.log(foo);
    var bar = function () {
        return 'world';
    }
    function foo() {
        return 'hello';
    }
}

test();
function func(){
    console.log(this);
}
// 直接执行func this指向 window
// ② 通过对象.函数名()调用的：this指向这个对象
    // 狭义对象
    var obj = {
        name:"obj",
        func1 :func
    };
    obj.func1(); // this--->obj
    function foo(){
        console.log(this.fruit);
}
// 定义一个全局变量，等同于window.fruit = "banana";
var fruit = "banana";

var  o = {
      fruit : "apple"
};

foo.call(o);  // 改变this指向o "apple"; apply

// 使用箭头函数时 this指向问题
// 箭头函数不能用作于构造函数 
var name = 'window'
var obj = {
    name: 'sxl',
    // showName: () => {
    //     console.log(this.name)
    // }, // undefined
    // showName: function() {
    //     console.log(this.name)
    // }, // sxl
    //  showName: function() {
    //    setTimeout(() => {
    //     console.log(this.name)
    //    })
    // }, // sxl
     showName: function() {
        console.log(this)
        return function (){
            console.log(this.name)
        }.bind(this)
     }
}
// obj.showName()
// obj.showName()()