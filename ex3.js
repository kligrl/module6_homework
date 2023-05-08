function getFirstNumber(firstNum) {
    return function(secondNum) {
      sum = firstNum + secondNum;
      return sum;
    }
}
  
const getSecondNumber = getFirstNumber(5);
console.log(getSecondNumber(7));