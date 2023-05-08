let arr = [0, 1, 2, 3, 4, 5, "text", null, NaN];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

function countOddsAndEvens() {
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "number" && arr[i] == 0)
      zeroCount += 1;
    else if (typeof(arr[i]) == "number" && arr[i] % 2 == 0)
      evenCount += 1;
    else if (typeof(arr[i]) == "number" && !isNaN(arr[i]) && arr[i] % 2 != 0)
      oddCount += 1;
  }
}

countOddsAndEvens();

console.log(`Количество четных чисел: ${evenCount}`);
console.log(`Количество нечетных чисел: ${oddCount}`);
console.log(`Количество нулей: ${zeroCount}`);