"use script"

//Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)
//For example, showMultiplicationTable(7) should output

function showMultiplicationTable(num) {
   let i = 1;
    while (i <= 10) {
        console.log(num + "x" + i + "=" + (num * i));
        i++;
    }
}
//Use a for loop and the code from the previous lessons
// to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even.
// For example:

//Use math.random() to generate a number between 20 and 200
//THEN use your loop to tell me if that random NUMBER was odd or even

// console.log("Random number" + randomNum)

for (let i = 1; i <= 10; i++) {
    let randomNum = Math.floor(Math.random() * 200) + 20;

    if (randomNum % 2 === 0) {
        console.log("Even number:" + randomNum);
    } else {
        console.log("Odd number:" + randomNum);
    }
}


/*Create a for loop that uses console.log to create the output shown below.


1
22
333
4444
55555
666666
7777777
88888888
999999999
*/

/*function increase(num) {
    for (let i = 1; i < 10; i++) {
        let count = [];
        for (let a = 1; a <= i; a++) {
            count.push(i);
        }
        console.log(count.join(""));
    }
}
*/
    for (let i = 1; i <= 9; i++){
        let iAsString = i.toString();
        console.log(iAsString.repeat(i));

}

/*Create a for loop that uses console.log to create the output shown below.


100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
 */
    for (let i = 100; i >= 5; i = i - 5) {
        console.log(i);
    }
