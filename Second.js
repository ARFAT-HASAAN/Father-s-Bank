// get input value.....
function getyInputValue(inputID){
  const inputvalue = document.getElementById(inputID).value;
  const inputMoney = parseFloat(inputvalue)
   document.getElementById(inputID).value = '';
   return inputMoney;
    }

 // get money filed
    function updateTotal(totalid, prevTotal){
        const updateElement =  document.getElementById(totalid).innerText;
       const UpdateMoney = parseFloat(updateElement);

       const total = UpdateMoney + prevTotal;
       document.getElementById(totalid).innerText = total;
       return total;
    }

    // set balance 
    function updateBalance(balance,value){
        const updateBalanceElement =  document.getElementById('balanceField').innerText;
       const UpdatebalanceMoney = parseFloat(updateBalanceElement);
        if(value == true){
            const newBalance = UpdatebalanceMoney + balance;
            document.getElementById('balanceField').innerText = newBalance;
        }
        else{
            const newBalance = UpdatebalanceMoney - balance;
            document.getElementById('balanceField').innerText = newBalance;
        }

        return UpdatebalanceMoney;
    }

    // deposite calculation
 function DiposteFunction(){
     
        const newDeposite = getyInputValue('DepositeValue');
        if(newDeposite > 0){
           updateTotal('DepositeMoney',newDeposite )
        updateBalance(newDeposite,true) 
        }
        
    //    console.log(newDeposite);
    }
 
    // withdraw calc 
 function withDrawFunction(){
  const newWithdraw = getyInputValue('WithdrawValue')
  const updateBalanceElement =  document.getElementById('balanceField').innerText;
       const UpdatebalanceMoney = parseFloat(updateBalanceElement);
 if(newWithdraw > 0 && UpdatebalanceMoney > newWithdraw ){
    updateTotal('withdrawMoney', newWithdraw);
  updateBalance(newWithdraw,false) 
 }
 
//   console.log(newWithdraw);
 }


// function Deposite(){

//     const previousDepositetext =  document.getElementById('DepositeMoney').innerText;
//     const DepositeMoney = parseFloat(previousDepositetext);
 
//     const perviousDeposite = document.getElementById('DepositeValue').value;
//     const newperviousDepositeValue = parseFloat(perviousDeposite)

   
//     // concate previous deposite with new deposite  
//     const newDeposite = newperviousDepositeValue + DepositeMoney;
   
//     // set deposite 
//     document.getElementById('DepositeMoney').innerText = newDeposite;



//     const balancefield = document.getElementById('balanceField').innerText;
//     const previousBalance = parseFloat(balancefield);

//     const newBalance = previousBalance + newperviousDepositeValue;

//     document.getElementById('balanceField').innerText = newBalance;

//     // clear input 
//     document.getElementById('DepositeValue').value = ''
    
// }

// function Withdraw(){
//     const WithDrawinput = document.getElementById('WithdrawValue');
//     const WithDrawinputText = WithDrawinput.value;
//     const WithDrawInputValue = parseFloat(WithDrawinputText);

//     // console.log(WithDrawInputValue);

//     const withdraw = document.getElementById('withdrawMoney')
//     const withdrawText = withdraw.innerText;
//     const totalWithDraw = parseFloat(withdrawText)
//     // console.log(totalWithDraw)

//     const newWithdrawMoney = WithDrawInputValue + totalWithDraw;
//     console.log(newWithdrawMoney);

//     document.getElementById('withdrawMoney').innerText = newWithdrawMoney;

    
//     // subtraction form balance 
//     const balancefield = document.getElementById('balanceField').innerText;
//     const previousBalance = parseFloat(balancefield);

//     const newBalance = previousBalance - WithDrawInputValue ;

//     document.getElementById('balanceField').innerText = newBalance;




//     // clear 
//     document.getElementById('WithdrawValue').value = '';
     


// }