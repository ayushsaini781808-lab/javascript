console.log("hello world")
let a=10;
console.log(a);

var name="ayush";
var age=20;
console.log(name);
console.log(age);
console.log("my name is "+name+" and my age is "+age); 

console.log('my name is ${name} and my age is ${age}');

let b="india";
b="usa";
console.log(b);

let s=true;
console.log(s);
console.error("this is an error");

console.warn("this is a warning");
console.info("this is info");
console.debug("this is debug");

console.table({name:"ayush",age:18,city:"saharanpur"});
console.clear();

for(let i=0;i<3;i++){
    console.count("loop executed");
}