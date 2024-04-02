var carInfo = {make: "Toyota",year: 1990, model: "Camry"};
console.log(carInfo["model"]);

var mess = {a: "hello", b: ['x', 'y', 'z'], c: {'inside': [4, 5, ["weird"]]}};

console.log(mess['b'][2]);

carInfo['year'] = 2006;
console.log(carInfo['year']);

carInfo['year'] += 1

console.log(carInfo['year']);

console.log(carInfo);
console.dir(carInfo);

for (var key in carInfo) {
    console.log(key)
    console.log(carInfo[key])
    console.log("\n")
}
carInfo = {
    make: "Toyota",
    year: 1990,
    model: "Camry",
    carAlert: function() {
        console.log("We have got a care here!")
    }
};

carInfo.carAlert()














