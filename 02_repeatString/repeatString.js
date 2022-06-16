const repeatString = function(word, times) {
    var output = '';
    if(times < 0) {
        return 'ERROR';
    }
    for(let i =0; i<times; i++) {
        output = output + word;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
