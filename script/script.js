'use strict';

let books = document.querySelectorAll('.book');
console.log(books);
books[0].before(books[1]);
books[2].before(books[4]);
books[3].before(books[2]);
books[5].after(books[2]);

let adv = document.querySelector('.adv');
adv.remove(adv);

let titleBook3 = document.getElementsByTagName('a')[2];
console.log(titleBook3);
titleBook3.innerText = ('Книга 3. this и Прототипы Объектов');

let backgroundImage = document.querySelector('body');
backgroundImage.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

let chapterOrder = document.querySelectorAll('li');
console.log(chapterOrder);
chapterOrder[8].before(chapterOrder[9]);
chapterOrder[8].before(chapterOrder[12]);
chapterOrder[8].before(chapterOrder[14]);
chapterOrder[14].before(chapterOrder[13]);
chapterOrder[16].before(chapterOrder[8]);
chapterOrder[11].after(chapterOrder[13]);

chapterOrder[46].before(chapterOrder[37]);
chapterOrder[46].before(chapterOrder[45]);
chapterOrder[46].before(chapterOrder[39]);
chapterOrder[46].before(chapterOrder[40]);
chapterOrder[46].before(chapterOrder[38]);
chapterOrder[46].before(chapterOrder[42]);
chapterOrder[46].before(chapterOrder[43]);
chapterOrder[46].before(chapterOrder[41]);
chapterOrder[46].before(chapterOrder[44]);
chapterOrder[46].before(chapterOrder[46]);
chapterOrder[36].after(chapterOrder[37]);


let ul = document.querySelectorAll('ul');
console.log(ul);
let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
ul[5].append(newElem);
newElem.after(chapterOrder[56]);
