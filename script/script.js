'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let start = document.getElementById('start');
let btnPlus = document.getElementsByTagName('button');
let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let depositCheck = document.querySelector('#deposit-check');
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let periodSelect = document.querySelector('.period-select');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let incomeItem = document.querySelectorAll('.income-items');

let appData = {
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  expensesMonth: 0,
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  start: function() {

    if(salaryAmount.value === ''){
        alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
        return;
    }

    appData.budget = +salaryAmount.value;
   
    
    appData.getExpenses();
    
    // appData.asking();
    appData.getAddExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddIncome();
    appData.getBudget();

    appData.showResult();

  },
  showResult: function(){
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionalIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcPeriod();

  },
  addExpensesBlock: function(){

      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3){
          expensesPlus.style.display = 'none';
      }

  },
  getExpenses: function(){
      expensesItems.forEach(function(item){
          let itemExpenses = item.querySelector('.expenses-title').value;
          let cashExpenses = item.querySelector('.expenses-amount').value;
          if(itemExpenses !== '' && cashExpenses !== ''){
              appData.expenses[itemExpenses] = cashExpenses;
          }

      });
  },
  getIncome: function(){
    if(confirm('Есть ли у вас дополнительный источник заработка?')) {
      
        let itemIncome;
        do {
          itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
        } while (isNumber(itemIncome) || !/[^\s]/.test(itemIncome) || itemIncome === null);
      
        
        let cashIncome;
        do {
          cashIncome = prompt('Сколько в месяц зарабатываете на этом?', 10000);
        } while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
      
    }

    for (let key in appData.income){
        appData.incomeMonth += +appData.income[key];
    }
  },
  getAddExpenses: function(){
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item){
          item = item.trim();
          if (item !== ''){
              appData.addExpenses.push(item);
          }
      });
  },
  getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
          let itemValue = item.value.trim();
          if (itemValue !== ''){
              appData.addIncome.push(itemValue);
          }
      });

  },
  getExpensesMonth: function(){
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
     }
    return appData.expensesMonth;
  },
  getBudget: function() {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth/30);
  }, 
  getTargetMonth: function() {
      return targetAmount.value / appData.budgetMonth;
  }, 
  getStatusIncome: function() {
    if (appData.budgetDay > 1200){
      return ('У вас высокий уровень дохода!');
    } else if (appData.budgetDay >= 600){
        return ('У вас средний уровень дохода');
    } else if (appData.budgetDay >= 0){
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay < 0){
      return ('Что то пошло не так');
    }
  },
  getInfoDeposit: function() {
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    if(appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
      } while (!isNumber(appData.percentDeposit));

      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcPeriod: function() {
    return appData.budgetMonth * periodSelect.value;
  }
};

start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);


// appData.getInfoDeposit();
// appData.calcPeriod();


console.log(appData.getTargetMonth());
console.log('Бюджет на день: ' + appData.budgetDay + ' рублей');


// for (let key in appData) {
//   console.log('Наша программа включает в себя данные: ' + 'Свойства: ' + key + ' Значения: ' + appData[key]);
//  }
