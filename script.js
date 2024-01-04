const fs = require("fs");

// function question1 () {
//     console.time("Time");
//     const input = fs.readFileSync("./input.txt").toString().split("");
//     let answer = input.reduce((acc,currentValue) => {
//         if(currentValue === "("){
//             return acc += 1;
//         } else if (currentValue === ")"){
//             return acc -= 1;
//         }
//     } , 0)
//     console.timeEnd("Time");
//     console.log("Floor : " ,answer)
// }

// question1();

function question2(){
    console.time("Time");
    fs.readFile("./input.txt", (err,data) => {
        const directions = data.toString().split("");
        let accu = 0;
        let counter = 0;
        let answer = directions.some((currentItem) => {
            if(currentItem === "("){
                accu ++;
            } else if(currentItem === ")"){
                accu --;
            }
            counter ++;
            return accu < 0;
        })
        console.timeEnd("Time");
        console.log("answer : ",counter);
    })
}

question2();