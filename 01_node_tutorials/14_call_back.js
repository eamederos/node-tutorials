const {readFile} = require('fs');

console.log("This is the first task");

readFile('../contents/first.txt','utf-8',(error, result)=>{
    if(error){
        console.log(error);
        return
    }
    console.log(result);
    console.log('completed first task')

});

console.log("This is Second task");