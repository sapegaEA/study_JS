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
  asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function() {
    let sum = 0;
    let expenses = [];
  for (let i = 0; i < 2; i++) {

    expenses[i] = prompt('Введите обязательную статью расходов');
    
    sum += +prompt('Во сколько это обойдется?');
  }
  return sum;
  }, 
  getAccumulatedMonth: function() {
    return money - expensesMonth;
  }, 
  getTargetMonth: function() {
    let targetMonth = Math.ceil(appData.mission/accumulatedMonth);
  if (targetMonth > 0){
    return ('Цель будет достигнута за: ' + targetMonth + ' месяцев');
  } else if (targetMonth <= 0){
      return ('Цель не будет достигнута');
  }
  }, 
  getStatusIncome: function() {
    if (budgetDay > 1200){
      return ('У вас высокий уровень дохода!');
    } else if (budgetDay >= 600){
        return ('У вас средний уровень дохода');
    } else if (budgetDay >= 0){
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0){
      return ('Что то пошло не так');
    }
  },
};

appData.asking();

// function getExpensesMonth(){
  //   let sum = 0;
  // let expenses = [];
  
//   for (let i = 0; i < 2; i++) {

//     expenses[i] = prompt('Введите обязательную статью расходов');
    
//     sum += +prompt('Во сколько это обойдется?');
//   }
//   return sum;
// }
let expensesMonth = appData.getExpensesMonth();

// function getAccumulatedMonth(){
//   return money - expensesMonth;
// }
let accumulatedMonth = appData.getAccumulatedMonth();

let budgetDay = Math.floor(accumulatedMonth/30);

// let showTypeOf = function (data) {
//   console.log(typeof(data));
// };
// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);

console.log('Расходы за месяц ' + expensesMonth + ' рублей');


// function getTargetMonth(){
//   let targetMonth = Math.ceil(appData.mission/accumulatedMonth);
//   if (targetMonth > 0){
//     return ('Цель будет достигнута за: ' + targetMonth + ' месяцев');
//   } else if (targetMonth <= 0){
//       return ('Цель не будет достигнута');
//   }}
console.log(appData.getTargetMonth());

console.log('Бюджет на день: ' + budgetDay + ' рублей');

// let getStatusIncome = function(){
//   if (budgetDay > 1200){
//     return ('У вас высокий уровень дохода!');
//   } else if (budgetDay >= 600){
//       return ('У вас средний уровень дохода');
//   } else if (budgetDay >= 0){
//     return ('К сожалению у вас уровень дохода ниже среднего');
//   } else if (budgetDay < 0){
//     return ('Что то пошло не так');
//   }
// };
console.log(appData.getStatusIncome());
