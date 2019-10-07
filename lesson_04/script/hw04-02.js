/*
2. Реализовать собственный каталог товаров
*/

var product_1 = {product: "Товар 1", price : 500};
var product_2 = {product: "Товар 2", price : 400};
var product_3 = {product: "Товар 3", price : 300};
var product_4 = {product: "Товар 4", price : 200};

var store = {
    catalog : [product_1, product_2, product_3, product_4]
}

var basket = {
    products : [product_1, product_2],
    sum : 0,
    summ : function(){        
        for (i=0; i < this.products.length; i++)
            {
                this.sum += this.products[i].price;
            }
    }
}
basket.summ();
console.log (basket.sum)