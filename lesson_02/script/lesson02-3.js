/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

*/
function getRandomFloat(min, max) {
    return Math.round(Math.random() * (max - min))+ min;
  }
var a = getRandomFloat(-100, 100)
var b = getRandomFloat(-100, 100)
var c
console.log (a)
console.log (b)
if (a >=0 && b >= 0){
    console.log('разность')
    c = a - b
}
else{
    if (a <0 && b < 0){
        console.log('умножение')
        c = a * b
    }
    else{
        console.log('сложение')
        c = a + b
    }
}
console.log(c)