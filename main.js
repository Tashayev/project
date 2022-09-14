let savedName = localStorage.getItem('autosave');
document.getElementById('che').innerHTML = savedName;
const degree = document.getElementById('degree').value;
const wind = document.getElementById("wind").value;
const checkedValue = document.querySelector('.precipitation:checked').value;
let button = document.getElementById('button');
button.addEventListener('onclick', getResult)
function mes (){
    if (degree < -20) {
        return 'Бррр. Оставайся домаб приготовь горячий шоколад и укутайся одеялом'
    } else if (degree => -20 && degree < -10) {
        return 'Бери сани и лыжи, идём кататься. Если не умешь вставать на лыжи самое пара научиться. Одевайтесь по теплее'
    } else if (degree > -10 && degree < -3) {
        return 'Сегодня можно полепить снеговика. А еще лучше по кидаться снежками, сорее зови друзей'
    } else if (degree > - 3 && degree < 5) {
        return 'Остарожно вирусый бушуют. Остаемся дома и включаем "Нетфликс", ну а что еще смотреть?)). Шутка, выбор за Вами конечно же'
    } else if (degree > 5) {
        return 'Не так уж и тепло, для уверенности не забудьте шапку взять с собой. '
    }
}
function getResult() {
    console.log(mes())
}

