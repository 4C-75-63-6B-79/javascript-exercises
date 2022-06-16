const repeatString = function(word, times) {
    var output = '';
    for(let i =0; i<times; i++) {
        output = output + word;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
