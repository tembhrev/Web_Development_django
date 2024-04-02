var countries = [
    "USA",
    "Germany",
    "China"
]

console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);

var myString = "ABCDEFG"
console.log(myString[0]);
countries[0] = "France"
console.log(countries);

var myArr = ['one', 'two', 'three']

var lastItem = myArr.pop()
console.log(lastItem);
console.log(myArr);
myArr.push("four")
console.log(myArr);

var matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix)

var arr = ['A', 'B', 'C']

for (var i = 0; i<arr.length; i++){
    console.log(arr[i])
}

function awesomeAdder(name){
    console.log(name+" is awesome")
}

var topics = ["python", "django", "science"]

topics.forEach(awesomeAdder);