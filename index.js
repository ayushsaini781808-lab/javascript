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

let obj={name:"ayush",age:18,city:"saharanpur"};
console.dir(obj);

// array 
let arr=[10,20,30,40,50];
console.dir(arr);

console.log(typeof arr);

let x=10,y=20;
console.log(x-y);
console.log(x+y);
console.log(x*y);
console.log(x/y);

let ages=18;
if(ages>=18){
    console.log("you are eligible to vote");
}
else {
    console.log("you are not eligible for vote")
}

// do while
// for 

// for of 

let ar=[10,20,30,40,50];
for (let value of arr){
    console.log(value);
}

// object with for in 

let obje={name:"ayush",age:20,city:"saharanpur"};
for(let key in obje){
    console.log(key+" : "+obje[key]);

    console.log('${key}:$[obje[key]}');
}