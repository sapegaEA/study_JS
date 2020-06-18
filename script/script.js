'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
      do {
        money = prompt('Ваш месячный доход?', 50000);
      }
      while (!isNumber(money));
    };
    start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function() {

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

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
     'интернет, такси, коммунальные расходы');
    appData.addExpenses = addExpenses.split(', ');

    console.log('Расходы за рассчитываемый период: ' + 
    addExpenses.split(/,\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(', '));

    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    let message;
    let arrExpenses = [];
    for (let i = 0; i < 2; i++) {

      do {
        arrExpenses = prompt('Введите обязательную статью расходов', 'Квартплата');
      } while (isNumber(arrExpenses) || !/[^\s]/.test(arrExpenses) || arrExpenses === null);

            do {
              message = prompt('Во сколько это обойдется?', '1000');
            }
            while (!isNumber(message));
            appData.expenses[arrExpenses] = message;
          }
  },
  getExpensesMonth: function(){
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
     }
    return appData.expensesMonth;
  },
  getBudget: function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth/30);
  }, 
  getTargetMonth: function() {
    let targetMonth = Math.ceil(appData.mission/appData.budgetMonth);
  if (targetMonth > 0){
    return ('Цель будет достигнута за: ' + targetMonth + ' месяцев');
  } else if (targetMonth <= 0){
      return ('Цель не будет достигнута');
  }
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
    if(appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
      } while (!isNumber(appData.percentDeposit));

      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();
appData.calcSavedMoney();

console.log('Расходы за месяц: ' + appData.expensesMonth + ' рублей');
console.log(appData.getTargetMonth());
console.log('Бюджет на день: ' + appData.budgetDay + ' рублей');
console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + 'Свойства: ' + key + ' Значения: ' + appData[key]);
 }

let buttonCalculate = document.getElementById('start');
let buttonPlus1 = document.getElementsByTagName('button')[0];
let buttonPlus2 = document.getElementsByTagName('button')[1];
let checkboxDeposit = document.querySelector('#deposit-check');
let additionalIncome = document.querySelectorAll('.additional_income-item');
let resultBudgetMonth = document.getElementsByClassName('result-budget_month')[0];
let resultBudgetDay = document.getElementsByClassName('result-budget_day')[0];
let resultExpensesMonth = document.getElementsByClassName('result-expenses_month')[0];
let resultAdditionalIncome = document.getElementsByClassName('result-additional_income')[0];
let resultAdditionalExpenses = document.getElementsByClassName('result-additional_expenses')[0];
let resultIncomePeriod = document.getElementsByClassName('result-income_period')[0];
let resultTargetmonth = document.getElementsByClassName('result-target_month')[0];
let salary = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpenses = document.querySelector('.additional_expenses-item');
let deposit = document.querySelector('#deposit-check');
let periodRange = document.querySelector('.period-select');
