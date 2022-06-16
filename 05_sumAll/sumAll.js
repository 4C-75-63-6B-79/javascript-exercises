const sumAll = function(parametes) {
    var sum = 0;
    var num1 = arguments[0] < arguments[1]? arguments[0] : arguments[1];
    var num2 = arguments[0] > arguments[1]? arguments[0] : arguments[1];
    
    if(num1<0 || num2<0 || typeof(num1) != 'number' || typeof(num2) != 'number') {
        return 'ERROR';
    }

    for(let i=num1; i<=num2; i++) {
        sum += i;
    }

    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
