/*
1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?
*/
var a = 1, b = 1, c, d;
c = ++a; //alert(c);           // 2 - префиксный инкремент
console.log('++a = ' + c)
d = b++; //alert(d);           // 1 - постфиксный инкремент
console.log('b++ =' + d)

c = (2+ ++a); //alert(c);      // 5 - префиксный инкремент
console.log(" (2+ ++a) = " + c)

d = (2+ b++); //alert(d);      // 4 - постфиксный инкремент
console.log(" (2+ b++) = " + d)

//alert(a);                    // 3
console.log(" a = " + a)

//alert(b);                    // 3
console.log(" b = " + b)