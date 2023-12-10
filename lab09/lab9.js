function appendCartRow(file, title, quantity, price){
    
   
for (var i=0; i<file.length;i++){
    var total= price[i]*quantity[i];
    document.write('<tr>'); 
    document.write('<td><img src="http://74.208.52.43/resources/csci2005/lab09/'+file[i]+'"></td>');
    document.write('<td>' + title[i] + '</td>');
    document.write('<td>' + quantity[i] + '</td>');;
    document.write('<td>$' + price[i].toFixed(2) + '</td>');  
    document.write('<td>$' +total.toFixed(2) + '</td>');      
    document.write('</tr>');
}
}


function PrintTotal(Subtotal,Tax,Shipping,Grandtotal){

   
    document.write('<tr class="totals">');
    document.write('<td colspan="4">Subtotal</td>');
    document.write('<td>$' + Subtotal.toFixed(2) + '</td>');
    document.write('</tr>');

    document.write('<tr class="totals">');
    document.write('<td colspan="4">Tax</td>');
    document.write('<td>$' + Tax.toFixed(2) + '</td>');
    document.write('</tr>');

    document.write('<tr class="totals">');
    document.write('<td colspan="4">Shipping</td>');
    document.write('<td>$' + Shipping.toFixed(2) + '</td>');
    document.write('</tr>');

    document.write('<tr class="totals focus">');
    document.write('<td colspan="4">Grand Total</td>');
    document.write('<td>$' + GrandTotal.toFixed(2) + '</td>');
    document.write('</tr>');
}

appendCartRow(filenames, titles, quantities, prices);

var Subtotal = 0;

for (var i = 0; i < filenames.length; i++) {
    Subtotal += quantities[i] * prices[i];
}
var Tax = Subtotal*0.1;
   if (Subtotal<1000){
    Shipping = 40;
   }
   else if (Subtotal>1000){
    Shipping = 20;
   }
   var GrandTotal = Subtotal+Shipping+Tax

PrintTotal(Subtotal, Tax, Shipping, GrandTotal);