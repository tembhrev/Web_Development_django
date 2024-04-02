var firstName = prompt("Enter your first name: ")
var lastName = prompt("Enter your last name: ")
var age = prompt("Enter your age: ")
var height = prompt("Enter your height in cms: ")
var pet = prompt("Enter your pet name: ")
count = 0
if (firstName[0] === lastName[0]){
    count = count + 1;
}

if (age >= 20 && age <= 30){
    count = count + 1;
} 

if (height >= 170) {
    count = count + 1;
}

if (pet[pet.length-1] === 'y') {
    count = count + 1;
}

if (count === 4){
    alert("Welcome to the secret society!")
}else {
    alert("Sorry!")
}
