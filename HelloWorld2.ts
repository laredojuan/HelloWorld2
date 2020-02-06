class HelloWorld2 {

    firstName = '';
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + '.');

    }

}

const myHelloClassInstance = new HelloWorld2('Juan', 'Laredo');
myHelloClassInstance.sayHello();