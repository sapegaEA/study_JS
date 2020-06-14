'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 150000;
let period = 7;

let start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
};
start();

let expenses = [];
function getExpensesMonth(){
  let sum = 0;
  
  for (let i = 0; i < 2; i++) {

    expenses[i] = prompt('Введите обязательную статью расходов');
    
    sum += +prompt('Во сколько это обойдется?');
  }
  return sum;
}
let expensesMonth = getExpensesMonth();

function getAccumulatedMonth(){
  return money - expensesMonth;
}
let accumulatedMonth = getAccumulatedMonth();

let budgetDay = Math.floor(accumulatedMonth/30);

let showTypeOf = function (data) {
  console.log(typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Расходы за месяц ' + expensesMonth + ' рублей');
console.log(addExpenses.split(', '));

function getTargetMonth(){
  let targetMonth = Math.ceil(mission/accumulatedMonth);
  if (targetMonth > 0){
    return ('Цель будет достигнута за: ' + targetMonth + ' месяцев');
  } else if (targetMonth <= 0){
      return ('Цель не будет достигнута');
  }}
console.log(getTargetMonth());

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
