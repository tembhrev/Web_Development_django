function sleepIn(weekday, vacation) {   
    return (!weekday || vacation);
}

console.log(sleepIn(false, false))
console.log(sleepIn(true, false))
console.log(sleepIn(false, true))

function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile)
}

console.log(monkeyTrouble(true, true))
console.log(monkeyTrouble(false, false))
console.log(monkeyTrouble(true, false))

function stringTimes(str, n) {
    var returnStr = "";
    var i = 0;
    while (i < n) {
        returnStr += str;
        i++;
    }
    return returnStr;
}

console.log(stringTimes("Sam", 3))

function luckySum(a, b, c){
    if (a === 13){
        return 0
    }
    if (b === 13){
        return a
    }
    if (c === 13){
        return a + b
    }
    return a + b + c
}

console.log(luckySum(1,2,3))
console.log(luckySum(1,2,13))
console.log(luckySum(1,13,3))

function caught_speeding(speed, is_birthday) {
    if (is_birthday){
        speed -= 5
    }
    if (speed <= 60){
        return 0
    }
    if (60 < speed <=80){
        return 1
    }
    return 2
}

console.log(caught_speeding(60, false))
console.log(caught_speeding(65, false))
console.log(caught_speeding(65, true))

function makeBricks(small, big, goal){
    return goal%5 >= 0 && goal%5 - small <= 0 && small + 5*big >= goal   
}

console.log(makeBricks(3, 1, 8))
console.log(makeBricks(3, 1, 9))
console.log(makeBricks(3, 2, 10))
