const reverseString = function(word) {
    var output = '';
    for(let i=0; i<word.length; i++) {
        output = word.charAt(i) + output;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
