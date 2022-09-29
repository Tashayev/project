
function greetingsMessages(){
    const time = new Date().getHours();
    let message;
    if (time > 4 && time < 12) message = 'Доброе Утро';
    else if (time > 12 && time < 17) message = 'Добрый день';
    else if (time > 17 && time < 22) message = 'Добрый вечер';
    else if (time => 22 && time < 4) message = 'Добрый ночи';
    document.getElementById("message").innerHTML = message;
}
greetingsMessages();
let nameSet =document.getElementById('inp').value
localStorage.setItem('inp', nameSet);
// Получаем ссылку на текстовое поле,
// изменение которого будем отслеживать.
let field = document.getElementById("inp");
// Проверяем наличие значения 'autosave'
// (это может произойти только если страница будет случайно обновлена)
if (localStorage.getItem("autosave")) {
    // Восстанавливаем содержимое текстового поля
    field.value = localStorage.getItem("autosave");
}
// Отслеживаем все изменения в текстовом поле
field.addEventListener("change", function() {
    // И сохраняем их в объект session storage
    localStorage.setItem("autosave", field.value);
});









