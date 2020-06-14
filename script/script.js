'use strict';
let money = +prompt('Ваш месячный доход?', 50000);
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 150000;
let period = 7;
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = prompt('Во сколько это обойдется?');
let expensesMonth = +amount1 + +amount2;
let accumulatedMonth = getAccumulatedMonth();
let budgetDay = accumulatedMonth/30;

let showTypeOf = function (data) {
  console.log(typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('Бюджет на месяц: ' + accumulatedMonth);
console.log('Цель будет достигнута за: ' + Math.ceil(mission/accumulatedMonth) + ' месяцев');
console.log('Бюджет на день: ' + Math.floor(accumulatedMonth/30));

let getStatusIncome = function(){
  if (budgetDay > 1200){
    return ('У вас высокий уровень дохода!');
  } else if (budgetDay >= 600){
      return ('У вас средний уровень дохода');
  } else if (budgetDay >= 0){
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0){
    return ('Что то пошло не так');
  }
};
console.log(getStatusIncome());


function getExpensesMonth(){
  return expensesMonth;
}
getExpensesMonth();

function getAccumulatedMonth(){
  return money - expensesMonth;
}
getAccumulatedMonth();

function getTargetMonth(){
  return Math.ceil(mission/accumulatedMonth);
}
getTargetMonth();
