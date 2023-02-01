var xhr = new XMLHttpRequest();
const GROUP_ID = '-1001610411225'
const BOT_TOKEN = '5930685010:AAHesMW2WQP0rg7U1I61aLuKjvXDs0J1ADg'


let name = document.getElementById('name');
let office = document.getElementById('office');
let phone = document.getElementById('phone');
let reason = document.getElementById('reason');

let button = document.getElementById('button');



button.addEventListener('click', () => {
    let text = "Заявка| \n Имя: " + name.value + "|\n Кабинет: " + office.value + "|\n номер телефона: " + phone.value + "|\n Проблема: " + reason.value + "."
    

    xhr.open("GET", 'https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage?chat_id=' + GROUP_ID
 + '&text=' + text, true);
    xhr.send();
})

