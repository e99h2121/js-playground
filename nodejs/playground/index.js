const first = 1; // number
const second = '1';
const thurd = true;

if (first == second) {
    console.log('condition true'); //this will be logged
} else {
    console.log('condition false');
}

if (first == thurd) {
    console.log('condition true'); //this will be logged
} else {
    console.log('condition false');
}


const myObj = {
    name: 'Tom Cruise',
    getName: function() {
        return console.log(this.name);
        }
};

myObj.getName();  // ‘Tom Cruise’ will be logged in the console.
