const button = document.querySelector('.btn-request')

button.addEventListener('click', () => {
    const value1 = document.querySelector('.number1').value; // Получаем наши данные из инпута
    const value2 = document.querySelector('.number2').value;

    let inputValue  = document.querySelector('.result') // получаем div куда будет выводится результат запроса
    inputValue.textContent = ''; //
    if(!(value1 >=100 && value1 <=300 && value2 >=100 && value2 <=300)) {
        inputValue.textContent = 'Oдно из чисел вне диапазона от 100 до 300';
        return;
    }
    //Тут я делаю запрос данных
    fetch(`https://picsum.photos/${value1}/${value2}`)
        .then((response) => {
            console.log(response)
            document.querySelector('.resultImg').src = response.url; //  кладем наш запрос ( картинку) в диф.  response.url - потому что получаем ссылку на картинку
            
        });
});