//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

const loopDown = (startNum) => {
    console.log(startNum)
    while (startNum > 0) {
        startNum--;
        console.log(startNum);
    } 
    console.log('Countdown Complete!');
}

//loopDown(10);

//2. Next, try looping just like above except using recursion

const recursiveLoopDown = (startNum) => {
    if (startNum > 0) {
        console.log(startNum);
    } else {
        console.log('Countdown Complete!');
        return startNum;
    }
    return recursiveLoopDown(startNum-1);
}

//recursiveLoopDown(10);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponent value of the base.

const exponent = (base, expo) => {
    let counter = expo;
    let value = 0;
    while (counter > 0) {
        value = base * base;
        counter--;
    }
    return value;
}

//console.log(exponent(9, 2));

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

 const recursiveExponent = (base, expo) => {
     let value = 0;
    if (expo > 0) {
        value = base * base;
        return value;  
    }
    return recursiveExponent(base, expo-1);
 }

 //console.log(recursiveExponent(9,2));


//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

const multiplier = (arr, num) => {
    let numArray = [];
    arr.forEach(item => {
        numArray.push(item * num);
    })
    return numArray;
}

console.log(multiplier([12, 8, 5, 9], 2));


const recursiveMultiplier = (arr, num) => {
    let values = [];
        if (arr.length > 0) {
            arr.forEach(digit => {
               values.push(digit * num)
            })
            return values;
        }
    return recursiveMultiplier(arr, num);
}
console.log(recursiveMultiplier([12, 8, 5, 9], 2));

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

const recursiveReverse = (array) => {
    let reversedArray = [];
    const addItems = (orderedArray) => {
        if (orderedArray.length > 0) {
            reversedArray.push(orderedArray.pop());
            //want to understand line below better
            addItems(orderedArray);
        }
        return;
    };
    addItems(array);
    return reversedArray;
}

//console.log(recursiveReverse([1, 2, 3, 4, 5]));