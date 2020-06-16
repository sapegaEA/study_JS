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
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

        
        let message;
        let arrExpenses = [];
        for (let i = 0; i < 2; i++) {
          arrExpenses = prompt('Введите обязательную статью расходов');

          do {
            message = prompt('Во сколько это обойдется?');
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
    // return appData.budgetDay;
    // return appData.budgetMonth;

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
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log(appData.expensesMonth);

// let accumulatedMonth = appData.getAccumulatedMonth();

// let budgetDay = Math.floor(accumulatedMonth/30);

console.log('Расходы за месяц ' + appData.expensesMonth + ' рублей');

console.log(appData.getTargetMonth());

console.log('Бюджет на день: ' + appData.budgetDay + ' рублей');

console.log(appData.getStatusIncome());
