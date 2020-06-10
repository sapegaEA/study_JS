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
// let budgetMonth = money-amount1-amount2;
let budgetDay = accumulatedMonth/30;

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


let expensesMonth = +amount1 + +amount2;
let accumulatedMonth = getAccumulatedMonth();

function getExpensesMonth(){
  return expensesMonth;
}
console.log(getExpensesMonth());


function getAccumulatedMonth(){
  return money - expensesMonth;
}
console.log(accumulatedMonth);

function getTargetMonth(){
  return Math.ceil(mission/accumulatedMonth)
}
console.log(getTargetMonth());

// 1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц

// 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)

// 3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 

// 4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления 
// (accumulatedMonth) и возвращает результат

// 5) Удалить из кода переменную budgetMonth

// 6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)



// 7) Почистить консоль логи и добавить недостающие, должны остаться:

//  - вызовы функции showTypeOf

//  - Расходы за месяц вызов getExpensesMonth

//  - Вывод возможных расходов в виде массива (addExpenses)

//  - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 

//  - Бюджет на день (budgetDay)

//  - вызов функции getStatusIncome

// 8) Проверить, чтобы все работало и не было ошибок в консоли

// 9) Добавить папку с четвертым уроком в свой репозиторий на GitHub

