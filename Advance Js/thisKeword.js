
console.log("Here 'this keyword' refers to the window object ");
console.log(this)


let person = {
    myName : "Bob",
    age : 42,
    profession : "Teacher",

    sayName: function () {
        console.log("Inside the object 'this keyword' referes to the current object ");
        console.log(this.myName);


        // Regular function

        function sayHello() {
            console.log(this)   // In regular function "this keyWord refers to the window object !"
        }

        sayHello();
    }

}
person.sayName();


