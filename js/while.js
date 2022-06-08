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
let i = 1;
while (i < 65536) {
    i = i * 2
    console.log(i);
 }

//Do While Loop
//An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100 representing
// the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5,
// simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console
// the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

function sellAllCones() {
    let allCones = Math.floor(Math.random() * 50) + 50;
    console.log(allCones);
    do {
        var sold = Math.floor(Math.random() * 5) + 1;
        switch (sold) {
            case 1:
                allCones = allCones - 1;
                console.log(sold + " cones sold " + allCones + " remaining");
                break;
            case 2:
                if(allCones < 2){console.log("cant sell anymore than 2"); break;}
                else{
                    allCones = allCones - 2;
                    console.log(sold + " cones sold " + allCones + " remaining");
                    break;
                }
            case 3:
                if(allCones < 3){console.log("cant sell anymore than 3"); break;}
                else{
                    allCones = allCones - 3;
                    console.log(sold + " cones sold " + allCones + " remaining");
                    break;
                }
            case 4:
                if(allCones < 4){console.log("cant sell anymore than 4"); break;}
                else{
                    allCones = allCones - 4;
                    console.log(sold + " cones sold " + allCones + " remaining");
                    break;
                }
            case 5:
                if(allCones < 5){console.log("cant sell anymore than 5"); break;}
                else{
                    allCones = allCones - 5;
                    console.log(sold + " cones sold " + allCones + " remaining");
                    break;
                }
            default:
                console.log("Cannot sell you more cones");
                allCones = allCones;
                break;
        }
    }
    while (allCones > 0);
}

// This is how you get a random number between 50 and 100
//var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
//Math.floor(Math.random() * 5) + 1;
//The output should be similar to the following:

//Different path to accomplish allCones exercise.
/*
let allCones = Math.floor(Math.random() * (100 - 50) ) + 50;

do {
    let conesSold = Math.floor(Math.random() * 5) + 1; //Customer buys cones

    if(allCones >= conesSold){
        //happy path
        allCones = allCones - conesSold; //Take away the cones sold from our 'total' (allCones)
        console.log(conesSold + " cones sold! I have " + allCones);
    } else {
        //unhappy path
        console.log("Oops - I only have " + allCones + " left. Sorry, I can't sell you " + conesSold + ".")
    }

} while (allCones !== 0)

console.log("ALL the CONES are SOLD! Thank you for your business :D")
*/
 //   5 cones sold...  // if there are enough cones
//Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//Yay! I sold them all! // If there are no more cones