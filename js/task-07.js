'use strict'
// Напиши скрипт, который реагирует на изменение значения input#font-size-slider (событие input) 
// и обновляет инлайн-стиль span#text обновляя его свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размет текста.

// <input id="font-size-slider" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
const isSlider = document.querySelector('#font-size-slider');
const text = document.querySelector('#text');

isSlider.value = '14';
text.style.fontSize = `${isSlider.value}px`;

const changeFontSize = () => text.style.fontSize = `${isSlider.value}px`;

isSlider.addEventListener('input', changeFontSize);
