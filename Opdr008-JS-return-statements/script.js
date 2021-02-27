/* This function checks if number is big than 100.
It a function that does something.*/
const checkNumber = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
}

const result = checkNumber(90);
console.log(result);


/* This function checks if there aren't too many people in the club 
and if the person is old enough to enter.
The maximum visitors is 300 and you have to be 18 to enter.
This function produces something.*/
const visitorsCheck = function (number, age) {
    if (number > 300) {
        return "It's too busy now, come back later";
    } else if (age < 18) {
        return "This club is for adults";
    } else {
        return "Come in";
    }
}

const answer = visitorsCheck(400, 20);
console.log(answer);

/* This function calculates the average of five numbers. 
This function produces something. */
const getAverage = function (numbers) {
const sum = numbers.reduce((a,b) => a + b, 0) / numbers.length
 return(Math.round(sum));
}

console.log(getAverage([5, 6, 12, 43, 17]));
console.log(getAverage([13, 56, 23, 98, 2]));

//of

const average1 = getAverage([100, 24, 76, 92, 74]);
console.log(average1);

const average2 = getAverage([72, 1, 43, 66, 105]);
console.log(average2);



