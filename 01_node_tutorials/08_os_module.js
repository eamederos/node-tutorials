const os = require('os')

//about the current user
const user = os.userInfo();
console.log(user);

//details about the system in seconds
console.log(`System has bee up for ${os.uptime()/(60*60*24)} days`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);