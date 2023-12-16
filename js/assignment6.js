
//Alerts to prompt the user to enter the Tax Rate and the Shipping cost
const tax_rate = prompt('Enter the tax rate in decimal');
const shipping_threshold = prompt('Enter the shipping threshold');

/* running total for subtotals */
let subtotal = 0;

calculateGrandTotal(cart, tax_rate);