var x = 0

while (x < 5) {
    console.log("x is currently : "+ x);
    console.log("x is still less than 5, adding 1 to x");
    x = x+1;
}

var x = 0

while (x < 5) {
    console.log("x is currently: "+ x);

    if (x === 3){
        console.log("x is equal to 3, BREAK")
        break;
    }

    console.log("x is still less than 5, adding 1 to x");

    x = x+1;
}