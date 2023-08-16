
const calc = document.querySelector ('.calc');
const result = document.querySelector('#result');
// Получаем доступ к нашим елементам на странице 


calc.addEventListener('click', function(event){
  if (!event.target.classList.contains('calc_button')) return;
// Добавляем обработчик событий на нащ калькулятор и исключаем все кроме кнопок

const value = event.target.innerText;
// Тут получаем содержание нашей кнопки на которую кликаем

switch (value) {
    case 'C':
        result.innerText = '';
        break;
        // Очищаем наш Result

    case '=':
    result.innerText = eval(result.innerText).toFixed(2);
    break; 
//  Тут выполняем  наши математичкские вычисления при помощи функции eval() и обрезаем результат до 2 знаков после точки
    default:
        result.innerText += value;

}

});
