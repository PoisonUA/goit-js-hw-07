'use strict'

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const incButton = document.querySelector('[data-action="decrement"]');
const decButton = document.querySelector('[data-action="increment"]');
const counter = document.getElementById('value');

const increment = () => {
    counterValue -= 1;
    return counter.textContent = counterValue;
}

const decrement = () => {
    counterValue += 1;
    return counter.textContent = counterValue;
}

incButton.addEventListener('click', increment);
decButton.addEventListener('click', decrement);