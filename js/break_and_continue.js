/*Break and Continue
Create a file named break_and_continue.js in the js directory.
    Prompt the user for an odd number between 1 and 50.
    Use a loop and a break statement to continue prompting the user if they enter invalid input.
    Use a loop and the continue statement to output all the odd numbers between 1 and 50,
    except for the number the user entered.
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

 Prompt the user for an odd number between 1 and 50.
    Use a loop and a break statement to continue prompting the user if they enter invalid input.
    Use a loop and the continue statement to output all the odd numbers between 1 and 50,
    except for the number the user entered.
 */
// let userInput = prompt("Enter a number between 1 and 50 ") //all prompts return strings

//Making the first loop - trap our user and only let them out ["break"] **IF** they give us an odd number to work with
//Probably a while loop or do while loop

while(true){
    var userInput = prompt("Enter an odd number between 1 and 50 ")
    if(userInput % 2 === 0 ){
        console.log("that number is even......")
    } else if(userInput < 1){
        console.log("number must be greater than or = to 1")
    } else if(userInput > 50){
        console.log("number must be greater than 50")
    } else {
        break;
    }

}



//     let i = 1;
//
//     while (i <= 50) {
//         console.log( );
//         i++;
//         if (i % 2 !== 0 );{
//             alert("Wrong! Please enter correct information");
//             break;
//         }
// }
//Making the second loop - prints out nums 1 - 50 and 'continues' if number is even or when we get to the user's number
    for(let i = 1; i < 50; i++){
        if (i % 2 === 0) {
        continue;
        }
        if (i == userInput) {
        console.log("yikes!! skipping " + userInput);
        } else{
        console.log(i + "is an odd number");
    }
}
/*While Loops
Create a file named while.js in the js directory.
*/



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

function output(){
    let i = 1;

    while (i < 65536) {
        i = i * 2
        console.log(i);
    }
}

