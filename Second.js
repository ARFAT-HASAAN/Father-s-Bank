function Deposite(){

    const previousDepositetext =  document.getElementById('DepositeMoney').innerText;
    const DepositeMoney = parseFloat(previousDepositetext);
 
    const perviousDeposite = document.getElementById('DepositeValue').value;
    const newperviousDepositeValue = parseFloat(perviousDeposite)

   
    // concate previous deposite with new deposite  
    const newDeposite = newperviousDepositeValue + DepositeMoney;
   
    // set deposite 
    document.getElementById('DepositeMoney').innerText = newDeposite;



    const balancefield = document.getElementById('balanceField').innerText;
    const previousBalance = parseFloat(balancefield);

    const newBalance = previousBalance + newperviousDepositeValue;

    document.getElementById('balanceField').innerText = newBalance;

    // clear input 
    document.getElementById('DepositeValue').value = ''
    
}

function Withdraw(){
    const WithDrawinput = document.getElementById('WithdrawValue');
    const WithDrawinputText = WithDrawinput.value;
    const WithDrawInputValue = parseFloat(WithDrawinputText);

    // console.log(WithDrawInputValue);

    const withdraw = document.getElementById('withdrawMoney')
    const withdrawText = withdraw.innerText;
    const totalWithDraw = parseFloat(withdrawText)
    // console.log(totalWithDraw)

    const newWithdrawMoney = WithDrawInputValue + totalWithDraw;
    console.log(newWithdrawMoney);

    document.getElementById('withdrawMoney').innerText = newWithdrawMoney;

    
    // subtraction form balance 
    const balancefield = document.getElementById('balanceField').innerText;
    const previousBalance = parseFloat(balancefield);

    const newBalance = previousBalance - WithDrawInputValue ;

    document.getElementById('balanceField').innerText = newBalance;




    // clear 
    document.getElementById('WithdrawValue').value = '';
     


}