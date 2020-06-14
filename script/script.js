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

function getExpensesMonth(){
  return expensesMonth;
}
function getAccumulatedMonth(){
  return money - expensesMonth;
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth(){
  return Math.ceil(mission/accumulatedMonth);
}

let budgetDay = Math.floor(accumulatedMonth/30);

let showTypeOf = function (data) {
  console.log(typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Расходы за месяц ' + getExpensesMonth() + ' рублей');
console.log(addExpenses.split(', '));
console.log('Цель будет достигнута за: ' + getTargetMonth() + ' месяцев');
console.log('Бюджет на день: ' + budgetDay + ' рублей');

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
