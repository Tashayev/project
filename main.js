let degree = document.getElementById('degree');
let savedName = localStorage.getItem('autosave');
const wind = document.getElementById("wind");
const snow = document.getElementById('snow');
const rain = document.getElementById('rain');
function message(){
    let toNum = parseInt(degree.value);
    let result;
    const dataMes = ['Бррр. Оставайся дома, приготовь горячий шоколад и укутайся одеялом',
        `${savedName} бери сани и лыжи, идём кататься. Если не умеешь вставать на лыжи самое пара научиться. Одевайтесь по теплее`,
        'Сегодня можно полепить снеговика. А еще лучше покидаться снежками, скорее зови друзей',
        'Осторожно вирусы бушуют. Остаемся дома и включаем "Нетфликс", ну а что еще смотреть?)). Шутка, выбор за тобой конечно же',
        'Не так уж и тепло, для уверенности не забудь шапку взять с собой.',
        'Идеальная температура для всех. Благоприятная погода для пикника или просто для прогулки в свежем воздухе.',
        'В эту погоду также можно планировать поход в горы. Ну а если владеешь дачей, хороши день поработать в огороде:)',
        'Пляжный сезон открыт, не забудьте про SPA крем.',
        `Жарааа... Не знаю как ты ${savedName}, но я не собираюсь ни куда. Не рекомендуется сидеть прямо под кондиционером`,
        'Введите правильное значение',
        'Снег, метели или просто ветер нам не почем. Но если нет важных дел то лучше переждать',
        'Непогода всегда портят настроение, но не беда если есть чем занять себя, к примеру прочитать книгу, поиграть онлайн игры.',
        `Не забудь зонтик и надеть дождовик ${savedName}. Воздух после дождя чище некудо, открой окна дабы впустить его`,
        'Слабый ветер не чем не страшен, если только оно не первышает 15 м/с в этом случай принять все меры предосторожности',];
    if (toNum >= -40 && toNum <= -20) result = dataMes[0];
    else if (toNum >= -19 && toNum <= -11){
        if(wind.checked||snow.checked) result = dataMes[0];
        else result = dataMes[1];
    }
    else if (toNum >= -10 && toNum <= -4) {
        if(wind.checked||snow.checked) result = dataMes[10];
        else result = dataMes[2];
    }
    else if (toNum >= -3 && toNum <= 5){
        if(rain.checked || snow.checked) result = dataMes[11];
        else result = dataMes[3];
    }
    else if (toNum >= 6 && toNum <= 15){
        if(rain.checked || wind.checked) result = dataMes[11];
        else result = dataMes[4];
    }
    else if (toNum >= 16 && toNum <= 20){
        if(rain.checked && wind.checked) result = dataMes[11];
        else if (rain.checked) result=dataMes[12];
        else if(wind.checked) result = dataMes[13]
        else result = dataMes[5];
    }
    else if (toNum >= 21 && toNum <= 29){
        if(rain.checked && wind.checked) result = dataMes[11];
        else if (rain.checked) result=dataMes[12];
        else if(wind.checked) result = dataMes[13]
        else result = dataMes[6];
    }
    else if (toNum >= 30 && toNum <= 37){
        if(rain.checked && wind.checked) result = dataMes[11];
        else if (rain.checked) result=dataMes[12];
        else if(wind.checked) result = dataMes[13]
        else result = dataMes[7];
    }
    else if (toNum >= 38 && toNum <= 50) result = dataMes[8];
    else result = dataMes[9];
    return result;
}
function button(){
    return document.getElementById('result').innerHTML = message();
}
function background(){

    const months = new Date();
    const getMonths = months.getMonth();
    if(getMonths <= 0 || getMonths === 11){
        //winter
        document.body.style.backgroundImage = "url('img/winter.jpeg')";
    }
    else if(getMonths >= 2 && getMonths <=4 ){
        //spring
        document.body.style.backgroundImage = "url('spring.jpg')";
    }
    else if(getMonths >= 5 && getMonths <=7 ){
        //summer
        document.body.style.backgroundImage = "url('Summer.jpg')";
    }
    else{
        // fall
        document.body.style.backgroundImage = "url('img/autumn.jpg')";
    }
}
background();
