function hello(){
    console.log("hello world!");
}

hello()

function helloYou(name){
    console.log("hello "+name);
}
helloYou("lucky")



function addNum(num1, num2){
    console.log(num1+num2);
}

addNum(30, 20)

function helloSomeone(name="Lucky"){
    console.log("Hello "+name);
}

helloSomeone()
helloSomeone("Monkey")

function formal1(name="Sam",title="Sir"){
    console.log(title+" "+name)
}

//
"Welcome "+formal1()
// Welcome undefined


// With a return
function formal2(name="Lucky",title="Sir"){
    return title+" "+name;
}

//
var result = formal2()
console.log("Welcome "+result)

function times5(numInput) {
    var result = numInput * 5
    console.log(result)
}

times5(5)


var v = "I'm global v"
var stuff = "I'm global stuff"

function fun(stuff) {
    console.log(v);
    stuff = "Reassign stuff inside func";
    console.log(stuff);
}

fun()






