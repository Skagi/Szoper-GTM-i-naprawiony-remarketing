ID produktów

function () { return {{transactionProducts}}.map(function(a) {return a.id;}); }


Price Checkout

function() {
   try {
   var products = google_tag_manager[{{Container ID}}].dataLayer.get("ecommerce").checkout.products
   var productIds = 0.00;

   for(i=0;i<products.length;i++){
   var MLS_Price = (products[i].price);
   var MLS_Price_1 = MLS_Price.replace(",", ".");
   productIds += parseFloat(MLS_Price_1)
 
   }
   
   return productIds.toFixed(2);                      
   }catch(e) {
       return undefined;
   }
}


Price product: 

ecommerce.detail.products.0.price


Price transaction:

ecommerce.purchase.actionField.revenue


PriceFinal:

function(){

 var priceFinal = {{Prices}};
 var priceFinal_1 = priceFinal.replace(",", ".");
 
 return priceFinal_1;
}
