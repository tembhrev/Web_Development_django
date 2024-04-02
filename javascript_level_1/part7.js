var word = "hello"

for (i=0; i < 5; i++){
    console.log(word);
}

console.log("==================")

i = 0
while(i < 5) {
    console.log(word);
    i=i+1;
}

console.log("==================")

for (i = 1; i < 25; i++) {
    if (i % 2 !== 0) {
        console.log("Odd Number: "+ i);
    }
}

console.log("==================")

i = 1
while (i < 25){
    if (i % 2 !== 0) {
        console.log("Odd Number: "+ i);
    } 
    i = i + 1;  
}