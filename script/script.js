'use strict';
let money = prompt('Ваш месячный доход?');
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 150000;
let period = 7;
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = prompt('Во сколько это обойдется?');
let budgetMonth = money-amount1-amount2;
let budgetDay = budgetMonth/30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('Бюджет на месяц: ' + budgetMonth);
console.log('Цель будет достигнута за: ' + Math.ceil(mission/budgetMonth) + ' месяцев');
console.log('Бюджет на день: ' + Math.floor(budgetMonth/30));

if (budgetDay > 1200){
  console.log('У вас высокий уровень дохода!');
} else if (budgetDay >= 600){
    console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0){
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0){
  console.log('Что то пошло не так');
}

