let firstNum = 5;
let secondNum = 15;
let iterations = 0;

const intervalId = setInterval(function(firstNum, secondNum) {
  for (let i = firstNum; i <= secondNum; i++) {
    sendConsoleText(i);
    iterations++;
  }
  if (iterations == (secondNum - firstNum + 1))
      clearInterval(intervalId);
}, 0, firstNum, secondNum);

function sendConsoleText(i) {
  setTimeout(function() {
    console.log(i);
  }, 1000 * iterations);
}