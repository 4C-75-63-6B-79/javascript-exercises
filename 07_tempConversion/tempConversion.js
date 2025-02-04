const ftoc = function(temp) {
  temp = (temp - 32) * 5 / 9;
  return temp.toFixed(1) - 0; // subtracting 0 to conver the returned value to number since the toFixed returns a string
  // can also use Number(temp.toFixed(1))
};

const ctof = function(temp) {
  temp = temp * 9 / 5 + 32;
  return Number(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
