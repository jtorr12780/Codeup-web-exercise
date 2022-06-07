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

function increase(num) {
    for (let i = 1; i < 10; i++) {
        let count = [];
        for (let a = 1; a <= i; a++) {
            count.push(i);
        }
        console.log(count.join(""));
    }
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
/*Break and Continue
Create a file named break_and_continue.js in the js directory.
    Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
    Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
    Your output should look like this:


Number to skip is: 27

Here is an odd number: 1
Here is an odd number: 3
Here is an odd number: 5
Here is an odd number: 7
Here is an odd number: 9
Here is an odd number: 11
Here is an odd number: 13
Here is an odd number: 15
Here is an odd number: 17
Here is an odd number: 19
Here is an odd number: 21
Here is an odd number: 23
Here is an odd number: 25
Yikes! Skipping number: 27
Here is an odd number: 29
Here is an odd number: 31
Here is an odd number: 33
Here is an odd number: 35
Here is an odd number: 37
Here is an odd number: 39
Here is an odd number: 41
Here is an odd number: 43
Here is an odd number: 45
Here is an odd number: 47
Here is an odd number: 49
 */


/*While Loops
Create a file named while.js in the js directory.
    let random = Math.floor((Math.random()*50)+1);

    console.log("Random odd number to skip is:" + random);

    for (let i = 1; i < 50; i++) {

        if (i % 2 === 0) {
            //Skip even numbers.
            continue;
        }

        if (random === i) {
            console.log("Skipping number:" + i);
        } else {
            console.log("Here is an odd number:" + i);
        }

        if (i >= 49) {
            break;
        }
    }

/* Create awhile loop that uses console.log() to create the output shown below.


2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
*/

    // let i = 1;
    //
    // while (i < 65536) {
    //     i = i * 2
    //     console.log(i);
    // }

/*Do While Loop
An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50 and 100
representing the amount of cones to sell before you start your loop.
Inside of the loop your code should generate another random number between 1 and 5,
simulating the amount of cones being bought by her clients.
Use a do-while loop to log to the console the amount of cones sold to each person.
The below code shows how to get the random numbers for this exercise.
*/

// This is how you get a random number between 50 and 100
// let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor((Math.random() * 5) + 1);


/*The output should be similar to the following:

    5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones*/