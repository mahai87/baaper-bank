// Deposit Handler 
document.getElementById('deposit-button').addEventListener('click', function () {

    // console.log('deposit')
    changeBalance('deposit');

})
// withdraw Handler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdraw')

    changeBalance('withdraw');

})

function changeBalance(type) {
    const typeTotal = document.getElementById(`${type}-total`);
    const typeTotalText = typeTotal.innerText;
    const typeTotalNumber = parseFloat(typeTotalText);
    const newTypeInput = document.getElementById(`${type}-input`);
    const newTypeInputText = newTypeInput.value;
    const newTypeInputNumber = parseFloat(newTypeInputText);
    if (newTypeInputText.length != 0 && newTypeInputNumber > 0) {

        const totalTypeInput = typeTotalNumber + newTypeInputNumber;
        typeTotal.innerText = totalTypeInput;
        newTypeInput.value = '';
        // balance update 
        const totalBalance = document.getElementById('balance-total')
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceNumber = parseFloat(totalBalanceText);

        // console.log(totalBalanceText)

        if (type == 'deposit') {
            const newBalance = totalBalanceNumber + newTypeInputNumber;
            totalBalance.innerText = newBalance;

        }
        else if (type == 'withdraw') {
            if (totalBalanceNumber > newTypeInputNumber) {
                const newBalance = totalBalanceNumber - newTypeInputNumber;
                totalBalance.innerText = newBalance;
            }
            else {
                alert('Your balance is less than the money you want to withdraw!')
            }


        }
    }
    else {
        alert('Please enter a valid number');
    }

}