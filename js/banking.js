9// for banking html website 
// click jake eventlistener sekhane 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get dposit input box text 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    //add deposit amount and covert input to float
    const depositTotal = document.getElementById('deposit-total');
    const currentAmountText = depositTotal.innerText;
    const currentAmount = parseFloat(currentAmountText);
    const newdepositAmount = currentAmount + depositAmount;
    depositTotal.innerText = newdepositAmount;
    depositInput.value = '';

    //update balance total
    const balanceTotal = document.getElementById('balance-total');
    const prevbalanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(prevbalanceTotalText);
    const newBalanace = newBalanceTotal + depositAmount;
    // clear input box 
    balanceTotal.innerText = newBalanace;
});

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get input box text 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    withdrawAmount = parseFloat(withdrawAmountText);
    // add withdraw amount and covert input text to float 
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawText = withdrawTotal.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawText);
    const newWithdrawAmount = currentWithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = newWithdrawAmount;
    // update balance total 
    const balanceTotal = document.getElementById('balance-total');
    const prevbalanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(prevbalanceTotalText);
    const newBalanace = newBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanace;
    // clear input box 
    withdrawInput.value = '';
});