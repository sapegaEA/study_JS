'use strict';
let isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


const start = document.getElementById('start');
const cancel = document.getElementById('cancel');
const btnPlus = document.getElementsByTagName('button');
const incomePlus = btnPlus[0];
const expensesPlus = btnPlus[1];
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const depositCheck = document.querySelector('#deposit-check');
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
const periodSelect = document.querySelector('.period-select');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
let incomeItem = document.querySelectorAll('.income-items');

class AppData {
  constructor () {
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.expensesMonth = 0;
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  }
  
  start() {
    
    this.budget = +salaryAmount.value;
    
    this.getExpenses();
    
    // appData.asking();
    this.getAddExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddIncome();
    this.getBudget();
    
    this.showResult();
    
  }
  

showResult(){
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  document.querySelector('.period-select').addEventListener('change', this.calcPeriod());
}
addExpensesBlock(){

  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
  expensesItems = document.querySelectorAll('.expenses-items');
  if(expensesItems.length === 3){
      expensesPlus.style.display = 'none';
  }
}
addIncomeBlock(){

let cloneIncomeItem = incomeItem[0].cloneNode(true);
incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
incomeItem = document.querySelectorAll('.income-items');
if(incomeItem.length === 3){
    incomePlus.style.display = 'none';
}
}
getExpenses(){
  const _this = this;
  expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== ''){
        _this.expenses[itemExpenses] = cashExpenses;
      }
  });
}
getIncome(){
  const _this = this;
incomeItem.forEach((item) => {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if(itemIncome !== '' && cashIncome !== ''){
      _this.income[itemIncome] = cashIncome;
    }
});

for (let key in this.income){
    this.incomeMonth += +this.income[key];
}
}
getAddExpenses(){
  const _this = this;
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== ''){
        _this.addExpenses.push(item);
      }
  });
}
getAddIncome(){
  const _this = this;
    additionalIncomeItem.forEach((item) => {
      let itemValue = item.value.trim();
      if (itemValue !== ''){
        _this.addIncome.push(itemValue);
      }
  });

}
getExpensesMonth(){
for (let key in this.expenses) {
  this.expensesMonth += +this.expenses[key];
 }
return this.expensesMonth;
}
getBudget() {
this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
this.budgetDay = Math.floor(this.budgetMonth/30);
} 
getTargetMonth() {
  return targetAmount.value / this.budgetMonth;
} 
getStatusIncome() {
if (this.budgetDay > 1200){
  return ('У вас высокий уровень дохода!');
} else if (this.budgetDay >= 600){
    return ('У вас средний уровень дохода');
} else if (this.budgetDay >= 0){
  return ('К сожалению у вас уровень дохода ниже среднего');
} else if (this.budgetDay < 0){
  return ('Что то пошло не так');
}
}
getInfoDeposit() {
this.deposit = confirm('Есть ли у вас депозит в банке?');
if(this.deposit) {
  do {
    this.percentDeposit = prompt('Какой годовой процент?', '10');
  } while (!isNumber(this.percentDeposit));

  do {
    this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
  } while (!isNumber(this.moneyDeposit));
}
}
calcPeriod() {
let addOninput = document.querySelector('.period-select');
addOninput.setAttribute('oninput',  "appData.calcPeriod()");

let periodSelect = document.querySelector('.period-select').value;
let periodRange = document.querySelector('.period-amount');
periodRange.innerText = periodSelect;
incomePeriodValue.value = periodSelect * this.budgetMonth;       
}
buttonStart(){
    let addDisabled = document.querySelector('#start');
    let inputSalaryAmount = salaryAmount.value;
    if(!isNumber(inputSalaryAmount)){
    addDisabled.setAttribute('disabled', 'true');
    } else {
        addDisabled.removeAttribute('disabled', 'true');
    }
  }
reset() {

  let btnReset = document.querySelector('#cancel');
  btnReset.style.display = "block";

  let removeStart = document.querySelector('#start');
  removeStart.style.display = "none";

  let disableInputs = document.querySelectorAll('input');
  let index;
  for (index = 0; index < 12; ++index) {
    disableInputs[index].setAttribute('disabled', 'true');
  }
}

reload() {
location.reload();
}

eventListeners() {
  this.calcPeriod();
  addEventListener('mousemove', this.buttonStart);
  
  start.addEventListener('click', this.start.bind(this));
  expensesPlus.addEventListener('click', this.addExpensesBlock);
  incomePlus.addEventListener('click', this.addIncomeBlock);
  
  start.addEventListener('click', this.reset);
  cancel.addEventListener('click', this.reload);

}
}
const appData = new AppData();
appData.eventListeners();








// appData.getInfoDeposit();

// console.log(appData.getTargetMonth());
// console.log('Бюджет на день: ' + appData.budgetDay + ' рублей');

// for (let key in appData) {
//   console.log('Наша программа включает в себя данные: ' + 'Свойства: ' + key + ' Значения: ' + appData[key]);
//  }

