document.getElementById('deposit-btn').addEventListener('click', function (){
	// Input Value 
	const newDepositAmount = getInputFieldValueById('deposit');
	// Deposit Total 
	const previouseDepositAmount = getElementValueById('deposit-total');
	const newdepositTotal = previouseDepositAmount + newDepositAmount;
	setTextElementValueById('deposit-total', newdepositTotal);
	// Total Value 
	const previouseBalanceAmount = getElementValueById('balance-total');
	const newBalanceTotal = previouseBalanceAmount + newdepositTotal;
	setTextElementValueById('balance-total', newBalanceTotal);
})