'use strict'

function getDayInfo(date) {
    //Создаём массив дней недели
    const dayNames = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
    //Создаём массив месяцев
    const monthNames = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    //Меняем формат с 04.01.2022 на 2022-01-04
    date = date.split('.').reverse().join('-');
    //Получаем данный о дате
    let newDate = new Date(date);
    //Вычисление недели
    const firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1).getDay();
    const resultOfWeek = Math.ceil((newDate.getDate() + (firstDay - 1)) / 7);
    //Вывод в консоль
    console.log(dayNames[newDate.getDay()] + "," + " " + resultOfWeek + " неделя " + monthNames[newDate.getMonth()] + " " + newDate.getFullYear() + " года");
    return (dayNames[newDate.getDay()] + "," + " " + resultOfWeek + " неделя " + monthNames[newDate.getMonth()] + " " + newDate.getFullYear() + " года");
}

// Примеры
// getDayInfo('29.11.2022'); --> Вторник, 5 неделя Ноября 2022 года
// getDayInfo('03.03.2022'); --> Четверг, 1 неделя Марта 2022 года
// getDayInfo('10.02.2022'); --> Четверг, 2 неделя Февраля 2022 года
// getDayInfo('28.09.2021'); --> Вторник, 5 неделя Сентября 2021 года