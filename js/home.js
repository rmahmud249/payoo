//==================Logout==============================
document.getElementById('logout-btn').addEventListener('click',function(){
    window.location.href='./index.html';
})
//=======================================================
//==========Avaiable Balance Converter===================
function getavaiableBalance(){
    const availableBalance=parseInt(document.getElementById('availavble-balance').innerText);
    return availableBalance;
}
//=======Account Number Convert==========================
function accountNoConvert(id){
    const accoutnNumber=document.getElementById(id).value;
    const accountIntValue=parseInt(accoutnNumber);
    return accountIntValue;  
}
//=================Amount Converter======================
function amountConvert(id){
    const amonut=document.getElementById(id).value;
    const amountIntValue=parseInt(amonut);
   return amountIntValue;
}
//=====================PIN Converter=====================
function pinConverter(id){
    const pinIntValue=document.getElementById(id).value;
    const getPin=parseInt(pinIntValue);
    return getPin;
}
function getSelectBank(id){
    const selectOption=document.getElementById(id).value;
    return selectOption;
}
//================Add Money Part=========================
const validAccountNo=12345678999;
const validPin=1234;
const storeData=[];
document.getElementById('add-money-btn').addEventListener('click',function(event){
  event.preventDefault();
  const bankAccount=accountNoConvert('bank-account');
  const amountTaka=amountConvert('add-amount-taka');
  const pinNumber=pinConverter('add-pin-number');
  const payOption=getSelectBank('select-bank');
  let totalBalance=getavaiableBalance();

  if(payOption === 'Select a Bank'){
    alert('Please select a valid bank before adding money!');
    return;
  }
  if(bankAccount.toString().length !== 11 && bankAccount !== validAccountNo){
    alert('Invalid Account Number');
    return;
  }
  if(pinNumber !== validPin){
    alert('Incorret Pin Number');
    return;
  }
  if(amountTaka>0){
    totalBalance=totalBalance+amountTaka; 
    const setNewbalance=document.getElementById('availavble-balance');
    setNewbalance.innerText=totalBalance; 
    alert('Money added successfully!');
   }
   else {
    alert('Please enter a valid amount!');
  }

  const data = {
    name:'Add Money',
    amount: amountTaka,
    date: new Date().toLocaleTimeString() 
  }
  storeData.push(data);
})
//======================================================
//=====================Cash Out Method==================
document.getElementById('Withdraw-btn').addEventListener('click',function(event){
  event.preventDefault();
  const agentNumber=accountNoConvert('agent-number');
  const cashoutAmonut=amountConvert('cashout-amount');   
  const cashoutPin=pinConverter('cashout-pin');
  let totalCbalance=getavaiableBalance();
  if(agentNumber.toString().length !==11 && agentNumber !== validAccountNo){
    alert('Invalid Account Number');
    return;
  }
  if(cashoutPin !== validPin){
    alert('Incorret Pin Number');
    return;
  }
  if(cashoutAmonut>0 && cashoutAmonut <= totalCbalance){
    totalCbalance=totalCbalance-cashoutAmonut;
    document.getElementById('availavble-balance').innerText=totalCbalance;
  }
  else{
    alert('Insufficient Amount');
  }
 const data = {
    name:'Cashout',
    amount: cashoutAmonut,
    date: new Date().toLocaleTimeString() 
  }
  storeData.push(data);


})
//=================Transction Section=====================
document.getElementById('transaction-btn').addEventListener('click',function(){
  const transctionContainer=document.getElementById('transction-container');
  transctionContainer.innerText='';

  for(const getCard of storeData){
    const newTransction=document.createElement('div');
    newTransction.innerHTML=`
      <div class="transction-card py-4 px-3 mb-4 bg-white rounded-[10px] flex items-center justify-between">
          <div class="transction-content flex items-center justify-center">
          <div class="transction-icon">
              <img src="images/purse1.png" class="bg-gray-300 p-3 rounded-full" alt="purse1">
          </div>
          <div class="tranction-text pl-3">
            <h2>${getCard.name}</h2>
            <p>${getCard.date}</p>
          </div>
          </div>
          <div class="treansction-remove flex items-center">
              <h2 class="text-red-600 text-[16px] font-medium"><span>${getCard.amount}</span><i class="fa-solid fa-bangladeshi-taka-sign"></i></h2>
              <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>        
     </div>
    `
   transctionContainer.appendChild(newTransction);
  }
})
//=======================toggole Feture ======================
function handleToggle(id){
  const getForms=document.getElementsByClassName('all-forms');
  for(const form of getForms){
    form.style.display='none';
  }
  document.getElementById(id).style.display='block';
}
//============================================================
//======================Activator Handler=====================
function activatorHandler(id){
 const activeBtn=document.getElementsByClassName('active-btn');
  for(const actBtn of activeBtn){
    actBtn.classList.remove('border-[#0874f2]','bg-[#0874f20d]');
    actBtn.classList.add('border-gray-300');
  }
  document.getElementById(id).classList.remove('border-gray-300');
  document.getElementById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]');
}
//==============================================================
document.getElementById('add-btn').addEventListener('click',function(){
  handleToggle('add-money');
  activatorHandler('add-btn');
})
document.getElementById('cash-out-btn').addEventListener('click',function(){
  handleToggle('cashout-money');
  activatorHandler('cash-out-btn');
})
document.getElementById('transfer-btn').addEventListener('click',function(){
  handleToggle('transfer-money');
  activatorHandler('transfer-btn');
})
document.getElementById('get-bonus-btn').addEventListener('click',function(){
  handleToggle('get-bonus');
  activatorHandler('get-bonus-btn');
})
document.getElementById('paybill-btn').addEventListener('click',function(){
  handleToggle('pay-bill-money');
  activatorHandler('paybill-btn');
})
document.getElementById('transaction-btn').addEventListener('click',function(){
  handleToggle('transction-history');
  activatorHandler('transaction-btn');
})

// //======================--=toggole Feture==========================
// document.getElementById('add-btn').addEventListener('click',function(){
//   document.getElementById('add-money').style.display='block';
//   document.getElementById('cashout-money').style.display='none';
// })

// document.getElementById('cash-out-btn').addEventListener('click',function(){
//   document.getElementById('add-money').style.display='none';
//   document.getElementById('cashout-money').style.display='block';
// })
//=======================toggole Feture Using Function================

