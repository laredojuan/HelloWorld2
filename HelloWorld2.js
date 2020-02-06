var HelloWorld2 = (function () {
    function HelloWorld2(firstName, lastName) {
        this.firstName = '';
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HelloWorld2.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + '.');
    };
    return HelloWorld2;
})();
var myHelloClassInstance = new HelloWorld2('Juan', 'Laredo');
myHelloClassInstance.sayHello();
