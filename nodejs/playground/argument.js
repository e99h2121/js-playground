//https://catalins.tech/pass-command-line-arguments-to-your-nodejs-app

const arguments = process.argv.splice(2);
const myArgs = arguments.map(argument => {
    console.log(argument);
});

console.log(arguments[0]);
console.log(arguments[1]);
