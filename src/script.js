// Grab elements
let brandName = document.getElementById('product-brand');
let productType = document.getElementById('product-type');
let productSize = document.getElementById('product-size');
let productNumber = document.getElementById('product-number');
let resultDiv = document.getElementById('results');
const thankYouMessage = document.getElementById('thank-you');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', submitForm);

function submitForm() {
    let base = brandName.value + '-' + productType.value + '-' + productSize.value + '-';
    generateNumbers(base, productNumber.value);
    let message = document.createTextNode("Thank you for using SKU Generator!")
    let messageNode = document.createElement('p');
    messageNode.appendChild(message);
    thankYouMessage.appendChild(messageNode);
};

function generateNumbers(base, number) {

    for (let i = 1; i <= number; i++) {
        let num = document.createTextNode(base + formatNums(i));
        let node = document.createElement('p');
        node.appendChild(num);
        resultDiv.appendChild(node);
    }
}

function formatNums(num) {
    if (num > 0 && num < 10) {
        return '000' + num;
    }
    if (num > 9 && num < 100) {
        return '00' + num;
    }
    if (num > 99 && num < 1000) {
        return '0' + num;
    }
    if (num > 999 && num < 10000) {
        return num;
    }
    else {
        return null;
    }
}