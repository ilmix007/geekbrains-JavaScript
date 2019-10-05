/*
4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}

4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

for (i=0; i<10 ; console.log(i++)){
    
}


function strplus(str, item) {
    if (item > str.length){
        console.log(str + 'x')
        strplus (str + 'x', item)
    }
}

strplus('', 20);
