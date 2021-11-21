const button = document.querySelector('.btn-request');
const resultImg = document.querySelector('.getImg')

function displayResult(apiData) {
    let cards= '';
    apiData.forEach(item => {
        const cardBlock = `
        <div class="result">
            <img src="${item.download_url}"<div style="width:30%">
        </div>
        `
        cards += cardBlock;
    })
    resultImg.innerHTML = cards;
}


button.addEventListener('click', () => {
    const value1 = document.querySelector('.number1').value; 
    const value2 = document.querySelector('.number2').value;

    let inputValue  = document.querySelector('.result');
    inputValue.textContent = '';

    if (value1 < 1 || value1 > 10 || isNaN(value1)) {
        if (value2 < 1 ||  value2 > 10 || isNaN(value2)) {
            inputValue.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
        }else {
            inputValue.textContent = ' Номер страницы вне диапазона от 1 до 10'
        }
    }

    else if (value2 < 1 || value2 > 10 || isNaN(value2)) {
        inputValue.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    }else {
        fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
        .then((response) => response.json())
        .then((data) => {
          displayResult(data);
          /*
            let getImg = data.map(item => `<img src="${item.download_url}"<div style="width:30%">`)
            document.querySelector('.getImg').insertAdjacentHTML('afterbegin', getImg.join(''))
            localStorage.setItem('getImg', JSON.stringify(data)) */
           localStorage.setItem('myJSON', JSON.stringify(data));
        })
        .catch(() => {
            console.log('error')
        })
    }

         
})
window.onload = () => {
    let myJSON = localStorage.getItem('myJSON')
    if(myJSON) displayResult(JSON.parse(myJSON))
}