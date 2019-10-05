/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (УТОЧНИТЬ НАСЧЕТ ПРОСТЫХ ЧИСЕЛ)
*/
let item = 0;
function check_number(n, k) {
    if(n==1 || n==k)
         return true;
     if(n%k==0)
         return false;
     return check_number(n,k+1);
    
}

while (item < 100){
    if (check_number(item, 2)){
        console.log(item)
    }
    item++;
}