const mycheckBox = document.getElementById("mycheckBox")
const visa = document.getElementById("myRadioVS")
const mastercard = document.getElementById("myRadioM")
const paypal = document.getElementById("myRadioP")
const mySubmit = document.getElementById("mySub")
const subRs = document.getElementById("subRs")
const payRs = document.getElementById("payRs")

mySubmit.onclick = function(){

    if(mycheckBox.checked){
        subRs.textContent = `You are subcribed!`;
    }
    else{
        subRs.textContent = `You are not subcribed!`;
    }
    if(visa.checked){
        payRs.textContent = `Visa`
    }
    if(mastercard.checked){
        payRs.textContent = `Mastercard`
    }
    if(paypal.checked){
        payRs.textContent = `Paypal`
    }
}