# Тестовое задание компании Digital Design

## Задание №1 - вёрстка

### Задание №1 - папка "задание_1"

Была разработана веб-страница с использованием HTML5, которая содержит введение и обзор веб-технологий.

Страница содержит: 
1. Внешние ссылки на соответствующие сайты:
    1. Каждый заголовок имеет ссылку на соответвующий внешний сайт.
    2. Ссылки в тексте выделены красным цветом и находятся:
        1. Раздел препроцессоры CSS.
        2. Одностраничные приложения Angular.
        3. Vue.
2. Сопутствующие изображения (включая подписи):
    1. Изображение и подписи находятся в разделах: 
        1. CSS.
        2. Одностраничные приложения Angular.
        3. React.
3. Заголовки, абзацы, и другие семантические тэги;
4. Оглавление раздела в начале страницы:
    - Оглавление сделано в фармате неупорядоченного списка и выровнено по центру, также имеет гиперссылки-якоря, чтобы было удобнее перемещаться между заголовками.
    - Для удобства на странице сделана фиксированная "шапка", чтобы удобнее было перемещаться между заголовками.
5. Упорядоченные и неупорядоченные списки везде, где это возможно:
    1. "Шапка" веб-страницы - неупорядочеснный список.
    2. Оглавление - неупорядоченный список.
    3. Часть "JavaScript" - неупорядоченный список.
    4. Часть "Выбор платформы одностраничных приложений" - неупорядоченный список.
6. Кнопка для возврата в начало страницы:
    - Находится сверху слева веб-страницы.
    - Название "Вверх".
    - Кнопка фиксирована и перемещается с прокруткой странцы.
    - Действия кнопки описаны в файле "index.js", расположенный в папке "js". 
7. Выполнено дополнительно: 
    1. Использование CSS cтилей:
        - Все стили находятся в файле "style.css", расположенный в папке "css".
    2. Использование JavaScript:
        - Все стили находятся в файле "index.js", расположенный в папке "js".
    3. Файлы стилей и скриптов подключать отдельно:
        1. Файл "style.css" подключен в тэге "head".
        2. Файл "index.js" подключен с помощью скрипта в конце тэга "body".
        3. Дополнительно подключен шрифт "Merriweather" в тэге "head".
    4. Адаптивный дизайн: 
        1. Выполнен для 7 стандартных breakpoint'ов через @media-запросы:
            1. Extra extra large: (min-width: 1401px) and (max-width: 1600px)
            2. Extra large: (min-width: 1201px) and (max-width: 1400px)
            3. Large: (min-width: 993px) and (max-width: 1200px)
            4. Medium: (min-width: 769px) and (max-width: 992px)
            5. Small: (min-width: 577px) and (max-width: 768px)
            6. X-Small: (min-width:460px) and (max-width: 576px).
            7. Smallest: (max-width:459px).

## Задание №2 - Вёрстка страницы

### Задание №2 - папка "задание_2"

Разработана функцию getDayInfo(date), которая возвращает информацию о выбранной дате.
Результатом функции должен быть форматированный текст:
<день недели>, <номер недели> неделя <месяц> <год> года
Пример:
1. getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года
2. getDayInfo(“15.12.2021”) // => Среда, 3 неделя Декабря 2021 года

Код и закоментированные примеры находятся в файле "index.js".
Также для удобства имеется вывод результата функции в консоль.


