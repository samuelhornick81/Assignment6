/* define your functions here */
//function outputCarRow will write each object created in the data.js
function outputCartRow(item, total) {
    document.write('<tr>');
    document.write('<td class="painting"><img src="images/' + item.product.filename + '"></td>');
    document.write('<td>' + item.product.title + '</td>');
    document.write('<td class="center">' + item.quantity + '</td>');
    document.write('<td class="right">$' + item.product.price.toFixed(2) + '</td>');
    document.write('<td class="right">$' + total.toFixed(2) + '</td>');
    document.write('</tr>');            
}

function calculateTotal(item)
{
    return item.product.price * item.quantity;
}

function calculateTax(item, tax_rate)
{
    return calculateTotal(item) * tax_rate;
}


function calculateShipping() {
    if (shipping_threshold > 400) {
        return 0;
    }
    else {
        return 40;
    }
}


function calculateGrandTotal(cart, tax_rate, subtotal) 
{
    cart.forEach(item => {
        subtotal += calculateTotal(item);
    });

    let tax = 0;
    cart.forEach(item => {
        tax += calculateTax(item, tax_rate);
    });

    let shipping = calculateShipping();

    var grandTotal = subtotal + tax + shipping;

    output(subtotal, "subtotal");
    output(tax, "tax");
    output(shipping, "shipping");
    output(grandTotal, "grandTotal");

}

//This function will output the values into the fields subtotal, tax, shipping and grand total  
function output(num) {
    document.write("$" + num.toFixed(2));   
}





        
