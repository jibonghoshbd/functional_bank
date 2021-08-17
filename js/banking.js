function getInput(input) {
    const inputFild = document.getElementById(input);
    const amountValue = parseFloat(inputFild.value);
    // clear input fild
    inputFild.value = '';
    return amountValue;
}

function updateTotalFiled(totalInputFiled, amount) {
    const totalElement = document.getElementById(totalInputFiled);
    const previusAmount = parseFloat(totalElement.innerText);
    totalElement.innerText = previusAmount + amount;
}
function getCurentBalance() {
    const blanceTotal = document.getElementById('blance-amount');
    const previusBlacnce = parseFloat(blanceTotal.innerText);
    return previusBlacnce;
}

function updateBalance(amountValue, isAdd) {
    const blanceTotal = document.getElementById('blance-amount');
    // const previusBlacnce = parseFloat(blanceTotal.innerText);
    const previusBlacnce = getCurentBalance();
    if (isAdd == true) {
        blanceTotal.innerText = previusBlacnce + amountValue;
    } else {
        blanceTotal.innerText = previusBlacnce - amountValue;
    }

}



document.getElementById('deposit-button').addEventListener('click', function () {

    /* 
    const inputFild = document.getElementById('deposit-input');
    const amountValue = parseFloat(inputFild.value); 
    */

    // console.log(depostiAmount);
    // const amountValue = getInput('deposit-input');


    // get current Amount 
    /*
     const totalElement = document.getElementById('deposti-total');
    const previusAmount = parseFloat(totalElement.innerText); 
    */

    // update deposit 

    // totalElement.innerText = previusAmount + amountValue;

    // updateTotalFiled('deposti-total', amountValue);


    // update blance 

    /* 
    const blanceTotal = document.getElementById('blance-amount');
    const previusBlacnce = parseFloat(blanceTotal.innerText);
    blanceTotal.innerText = previusBlacnce + amountValue;
    */

    // updateBalance(amountValue, true);

    // // clear input filed
    // inputFild.value = '';

    //  organight code 
    const amountValue = getInput('deposit-input');
    if (amountValue > 0) {
        updateTotalFiled('deposti-total', amountValue);
        updateBalance(amountValue, true);
    }

})


// handel withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {

    /* 
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmount = parseFloat(withdrawInput.value);
     */

    // const withdrawAmount = getInput('withdraw-input');

    // console.log(withdrawAmount)

    /* 
    // update withdraw blance 
    const withdrawTotal = document.getElementById('widhdraw-total');
    const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount; 
    */
    // updateTotalFiled('widhdraw-total', withdrawAmount);

    // updated blance 
    /* 
    const totalBlance = document.getElementById('blance-amount');
    const totalBlacneAmount = parseFloat(totalBlance.innerText);

    totalBlance.innerText = totalBlacneAmount - withdrawAmount; 
    */

    // updateBalance(withdrawAmount, false);


    /* // input filed clear 
    withdrawInput.value = ''; */

    // organight code 
    const withdrawAmount = getInput('withdraw-input');
    const curentBalance = getCurentBalance();
    if (withdrawAmount > 0 && withdrawAmount < curentBalance) {
        updateTotalFiled('widhdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

})
