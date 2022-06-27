const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.split('');
    word = word.filter((character) => character >= 'a' && character <= 'z');
    word = word.join('');
    return word.split('').reverse().join('') == word;
};

// Do not edit below this line
module.exports = palindromes;
