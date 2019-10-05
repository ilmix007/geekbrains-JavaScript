/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

*/

var product_1 = {product: "Товар 1", price : 500};
var product_2 = {product: "Товар 2", price : 400};
var product_3 = {product: "Товар 3", price : 300};
var product_4 = {product: "Товар 4", price : 200};
var basket = [product_1, product_2, product_3, product_4];
var i=0, sum = 0;

while (i<basket.length){
    console.log (basket[i].product + ' - ' + basket[i].price);
    sum = sum + basket[i].price;
    i++;
}
console.log ('сумма корзины: ' + sum);