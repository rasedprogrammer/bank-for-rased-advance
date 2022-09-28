document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById('withdraw');
  const previouseWithdrawAmount = getElementValueById('withdraw-total');
  const newWithdrawTotal = previouseWithdrawAmount + newWithdrawAmount;
  setTextElementValueById('withdraw-total', newWithdrawTotal);
  const previouseBalanceAmount = getElementValueById('balance-total');
  const newBalanceTotal = previouseBalanceAmount - newWithdrawAmount;
  setTextElementValueById('balance-total', newBalanceTotal)
});