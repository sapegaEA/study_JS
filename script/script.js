'use strict';

const form = document.querySelector('.todo-control');
const todoContainer = document.querySelector('.todo-container');
const todo = document.querySelector('#todo');
const completed = document.querySelector('#completed');

const readLocalStorage = () => JSON.parse(localStorage.getItem('todo')) || [];

const output = () => {
  const localData = readLocalStorage();

  todo.innerHTML = '';
  completed.innerHTML = '';
  
  localData.forEach((item, i) => {
    const newLi = document.createElement('li');
    newLi.classList.add('todo-item');
    newLi.setAttribute('data-id', i);
    newLi.innerHTML = 
    '<span class="text-todo">' + item.title + '</span>' + 
    '<div class="todo-buttons">' + 
    '<button class="todo-remove"></button>' + 
    '<button class="todo-complete"></button>' +
    '</div>';
    
    (item.status === false) ? todo.append(newLi) : completed.append(newLi);
  });
};

output();

const insertToLocalStorage = data => {
  const localData = readLocalStorage();
  localData.push(data);
  localStorage.setItem('todo', JSON.stringify(localData));
  output();
};

const deleteLocalStorage = elem => {
  const localData = readLocalStorage();
  const parentId = +elem.closest('li').dataset.id;
  localData.splice(parentId, 1);
  localStorage.setItem('todo', JSON.stringify(localData));
  output();
};

const updateLocalStorage = elem => {
  const localData = readLocalStorage();
  const parentId = +elem.closest('li').dataset.id;
  localData[parentId].status = true;
  localStorage.setItem('todo', JSON.stringify(localData));
  output();
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const input = e.target.querySelector('input');
     if(input.value.length === 0 || !/[^\s]/.test(input.value)){
      return input.value = null;
    }

  const data = {
    title: input.value,
    status: false
  };

  insertToLocalStorage(data);
  e.target.reset();
});

todoContainer.addEventListener('click', e=> {
  const target = e.target;
  if(target.closest('.todo-remove')) {
    deleteLocalStorage(target);
  } else if(target.closest('.todo-complete')) {
    updateLocalStorage(target);
  }
});

