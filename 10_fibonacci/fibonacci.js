const fibonacci = function(numberAtIndex) {
    numberAtIndex = Number(numberAtIndex);
    if(numberAtIndex < 0) {
        return 'OOPS';
    }
    let a = 1, b = 1;
    let c = 0;
    let index = 2;
    if(numberAtIndex <3) {
        return 1;
    }
    while(index < numberAtIndex) {
        c = a + b;
        a = b;
        b = c;
        index ++;
    }
    return (c);
};

// Do not edit below this line
module.exports = fibonacci;
