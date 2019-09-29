/*

5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

*/
function mathsumm(arg1, arg2){
    return arg1 + arg2
}
function mathOperation(arg1, arg2, operation){
    switch(operation)
    {
    case '+': return arg1 + arg2
    case '-': return arg1 - arg2
    case '*': return arg1 * arg2
    case '/': 
            if (arg2 === 0){console.log('на ноль делить нельзя ')}
            else {return arg1 / arg2}
    }
}
let a = 5
let b = 2
let operator = '/'
let c = mathOperation(a,b, operator)
console.log (a + operator + b + ' = ' + c)