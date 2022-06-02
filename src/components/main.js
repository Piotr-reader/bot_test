const descriptionH2 = 'Несколько рекомендаций по&nbsp;прохождению квеста!'
const arrDescriptionLi = [
    `Не&nbsp;бросайтесь проходить квест сразу&nbsp;&mdash; для начала
хотя&nbsp;бы минимально ознакомьтесь с&nbsp;экспозицией.`,
    `Отвечать на&nbsp;задания можно в&nbsp;любом удобном для вас порядке.`,
    `Если совсем не&nbsp;удаётся решить какое-то задание, то&nbsp;смело
переходите к&nbsp;следующему. Пока будете решать следующее задание, можете натолкнуться
на&nbsp;ответ
к&nbsp;предыдущему <span>&#128521;</span>`,
    `Чтобы пройти квест, обращайте внимание на&nbsp;работы всех авторов.`,
    `Если вы&nbsp;правильно ответите на&nbsp;все вопросы квеста,
    то&nbsp;получите приятный бонус от&nbsp;FARBA.`];

const mainCreate =
`  <section class="description">
<img class="description__image" src="./images/farba_logo_social.jpg">
<h2 class="description__title">${descriptionH2}</h2>
<ul class="description__text">
    <li class="description__text-item">${arrDescriptionLi[1]}</li>
    <li class="description__text-item">${arrDescriptionLi[2]}
    </li>
    <li class="description__text-item">${arrDescriptionLi[3]}</li>
    <li class="description__text-item">${arrDescriptionLi[4]}
    </li>
    <li class="description__text-item">${arrDescriptionLi[5]}</li>
</ul>
</section>

<section class="puzzle" id="section_1">
<h2 class="puzzle__number">1.</h2>
<p class="puzzle__text">Для разминки, как нам кажется, несложное задание.<br>ОН&nbsp;&mdash; это и&nbsp;серия космических кораблей США, и&nbsp;&laquo;хорошо
    сложенный красивый мужчина&raquo;, и&nbsp;кипрский футбольный клуб из&nbsp;города Лимасол.
    ОН&nbsp;фигурирует в&nbsp;название многих работ в&nbsp;экспозиции. Ваша задача проста, НАПИШИТЕ,
    пожалуйста, В&nbsp;КАКОМ ГОДУ была создана самая поздняя работа из&nbsp;экспозиции, в&nbsp;названии
    которой&nbsp;ОН фигурирует?</p>
<form class="form">
    <label class="form__label" for="first-puzzle">Ваш ответ:</label>
    <input class="form__field" type="number" min="1800" max="2022" id="first-puzzle" name="fisrt-puzzle"
        placeholder="Например: 1984" autocomplete="off" data-answer="2021">
    <div class="form__button-container">
        <button class="form__button form__button_type_submit first-puzzle" type="button">Ответить</button>
        <button class="form__button form__button_type_hint first-puzzle" type="button">Узнать ответ</button>
    </div>
</form>
<div class="wrong-answer-board first-puzzle">
    <p class="wrong-answer-board__text">К&nbsp;сожалению, это неправильный ответ. Попробуйте еще раз!
        Помните, что можно воспользоваться видеоподсказками или нажать на&nbsp;кнопку &laquo;Узнать
        ответ&raquo;.</p>
</div>
<div class="correct-answer-board first-puzzle">
    <p class="correct-answer-board__text first-puzzle"></p>
</div>
<div class="hint-board first-puzzle">
    <p class="hint-board__text">Серия космических кораблей США, &laquo;хорошо сложенный красивый
        мужчина&raquo;, кипрский футбольный клуб из&nbsp;города Лимасол&nbsp;&mdash; Аполлон.
        В&nbsp;экспозиции есть несколько работ, в&nbsp;названии которых фигурирует &laquo;Аполлон&raquo;.
        Самую позднюю из&nbsp;них создал Владимир Бескровный в&nbsp;2021&nbsp;году.</p>
    <p class="hint-board__text"><span class="hint-board__span-accent">Правильный
            ответ:</span> 2021.</p>
</div>
<p class="puzzle__video-description">Подсказка №1</p>
<picture class="picture">
    <source srcset="./images/img_video_1-min.png" type="image/jpeg" media="(min-width:769px)">
    <source srcset="./images/img_video_1_mob.png" type="image/jpeg" media="(max-width:768px)">
    <!-- <img class="img_video" src="./images/img_video_1-min.png" alt="video"> -->
    <iframe class="puzzle__video" width="720" height="405"
         frameborder="0" allowfullscreen></iframe>
</picture>
<p class="puzzle__video-description">Подсказка №2</p>
<picture class="picture">
    <!-- <source srcset="./images/img_video_1-min.png" type="image/jpeg" media="(min-width:769px)">
    <source srcset="./images/img_video_1_mob.png" type="image/jpeg" media="(max-width:768px)">
    <img class="img_video" src="./images/img_video_1-min.png" alt="video"> -->
    <iframe class="puzzle__video" width="720" height="405"
         frameborder="0" allowfullscreen></iframe>
</picture>
</section>`;
export default mainCreate;