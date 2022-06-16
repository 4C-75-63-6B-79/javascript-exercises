const removeFromArray = function(parameters) {
    var array = arguments[0];
    /*for(let i=0; i<array.length; i++) {
        if(array[i] === arguments[1]) {
            array.splice(i,1);
        }
    }*/

    for(i=1; i<arguments.length; i++) {
        array = removeSingleNumber(array, arguments[i]);
    }
    return array;
};

function removeSingleNumber(array, number) {
    for(let i=0; i<array.length; i++) {
        if(array[i] === number) {
            array.splice(i,1);
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
