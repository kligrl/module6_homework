function checkPrimeNumber(num) {
    if (num < 0 || num > 1000)
      console.log('Данные неверны.');
    else {
      if (num == 0 || num == 1)
        console.log('Данное число не соответствует определению простого числа.');
      else {
        let checkNumber = 0;
        for (i = 2; i < num; i++) {
          if (num % i == 0)
            checkNumber += 1;
        }
        if (checkNumber != 0)
          console.log('Число не является простым.');
        else
          console.log('Число является простым.')
      }
    }
}
  
checkPrimeNumber(11);