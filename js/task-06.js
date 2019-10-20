'use strict'
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов"/>

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то outline инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input.valid {
//   outline: 3px solid #4caf50;
// }

// #validation-input.invalid {
//   outline: 3px solid #f44336;
// }
const inputForm = document.querySelector('#validation-input');
const inputLength = Number(inputForm.getAttribute('data-length'));
const classExist = inputForm.classList;

const changeColor = () => { inputForm.value.length >= inputLength ? inputForm.classList.add('valid') 
    : inputForm.classList.add('invalid')
};

const removeColor = () => { 
    if (classExist.value !== '')  {
        inputForm.classList.remove(classExist.value);
    }
};

inputForm.addEventListener('blur', changeColor);
inputForm.addEventListener('focus', removeColor);
