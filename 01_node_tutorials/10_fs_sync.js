const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('../content/first.txt','utf-8');

const second = readFileSync('../content/second.txt','utf-8');

console.log(first,second);

//in case the file doesn't exist, node will create one, otherwise the file's content will be overwritten
writeFileSync('../content/third.txt',`This is result of two files ${first}, ${second}`);
//in this case usin {flag: 'a'} the new content will be added to the existing contente before in document
writeFileSync('../content/third.txt',`This is result of two files ${first}, ${second}`,{flag: 'a'});