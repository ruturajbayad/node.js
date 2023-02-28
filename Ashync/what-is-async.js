// first of all, we need to to know what is Sysnchronization and Asynchronization 
// Sysnchronization :- in this program run one line at a time
// and in Asynchronization language :-the program is running and any line take a more time it will be processed
// at the end of the program

console.log("first line");

//it wil take 2 seconds to process 
setTimeout(() =>
{
    console.log("second line");
},2000);

console.log("third line");