// .checked = property that determines the checked state of an HTML checkbox or radion button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `you are susbcribed!`;
  } else {
    subResult.textContent = `you are NOT subscribed`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = "you are paying with Visa";
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = "you are paying with Mastercard";
  } else if (payPalBtn.checked) {
    paymentResult.textContent = "you are paying with PayPal";
  } else {
    paymentResult.textContent = "you must select a payment type";
  }
};
