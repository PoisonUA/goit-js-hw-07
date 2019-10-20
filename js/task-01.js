'use strict'
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul.list, найдет и выведет в консоль текст заголовка элемента (теге h2) 
// и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const selectByClass = document.querySelector('#categories');
console.log(`В списке ${selectByClass.children.length} категории`);
const titleOfList = Array.from(document.querySelectorAll('.item'));
titleOfList.map(item => console.log(`В категории "${item.children[0].innerText}" находится ${item.children[1].children.length} элементов`));
