const leapYears = function (year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;

// function determines whether or not the year given is a leap year
// rules for leap year:
// year divided by 4 = leapYear
// BUT year divided by 100 != leapYear UNLESS they can be divided by 400
