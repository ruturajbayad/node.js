// now we are going to handle the asynchronous data\
// promise is resolved asynchronization

let a = 10;
let b = 0;


const wait =  new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        b = 30;
        resolve(b);
    },2000 );
});

// then function is user to perform asynchronous data 
wait.then((data) => {
    console.log(data + a ) ;
});
