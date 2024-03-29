const headerTitle = 'КВЕСТ ПО ВЫСТАВКЕ «ОЧАРОВАНИЯ ДЕЛАКРУА»';

const arrQuestion = {
  1: [
    `Для разминки, как нам кажется, несложное задание.<br>ОН&nbsp;&mdash; это и&nbsp;серия космических кораблей США, и&nbsp;&laquo;хорошо
сложенный красивый мужчина&raquo;, и&nbsp;кипрский футбольный клуб из&nbsp;города Лимасол.
ОН&nbsp;фигурирует в&nbsp;название многих работ в&nbsp;экспозиции. Ваша задача проста, НАПИШИТЕ,
пожалуйста, В&nbsp;КАКОМ ГОДУ была создана самая поздняя работа из&nbsp;экспозиции, в&nbsp;названии
которой&nbsp;ОН фигурирует?`,
  ],
  2: [
    `Для разминки, как нам кажется, несложное задание.<br>ОН&nbsp;&mdash; это и&nbsp;серия космических кораблей США, и&nbsp;&laquo;хорошо
сложенный красивый мужчина&raquo;, и&nbsp;кипрский футбольный клуб из&nbsp;города Лимасол.
ОН&nbsp;фигурирует в&nbsp;название многих работ в&nbsp;экспозиции. Ваша задача проста, НАПИШИТЕ,
пожалуйста, В&nbsp;КАКОМ ГОДУ была создана самая поздняя работа из&nbsp;экспозиции, в&nbsp;названии
которой&nbsp;ОН фигурирует?`,
  ],
  3: [
    `Для разминки, как нам кажется, несложное задание.<br>ОН&nbsp;&mdash; это и&nbsp;серия космических кораблей США, и&nbsp;&laquo;хорошо
сложенный красивый мужчина&raquo;, и&nbsp;кипрский футбольный клуб из&nbsp;города Лимасол.
ОН&nbsp;фигурирует в&nbsp;название многих работ в&nbsp;экспозиции. Ваша задача проста, НАПИШИТЕ,
пожалуйста, В&nbsp;КАКОМ ГОДУ была создана самая поздняя работа из&nbsp;экспозиции, в&nbsp;названии
которой&nbsp;ОН фигурирует?`,
  ],
};
const arrPlaceholder = {
  1: ["Например: 1984"],
  2: ["Например: 1984"],
  3: ["Например: 1984"],
};
const hintBoard = {
  1: [
    `Серия космических кораблей США, &laquo;хорошо сложенный красивый
мужчина&raquo;, кипрский футбольный клуб из&nbsp;города Лимасол&nbsp;&mdash; Аполлон.
В&nbsp;экспозиции есть несколько работ, в&nbsp;названии которых фигурирует &laquo;Аполлон&raquo;.
Самую позднюю из&nbsp;них создал Владимир Бескровный в&nbsp;2021&nbsp;году.`,
  ],
  2: [
    `Серия космических кораблей США, &laquo;хорошо сложенный красивый
мужчина&raquo;, кипрский футбольный клуб из&nbsp;города Лимасол&nbsp;&mdash; Аполлон.
В&nbsp;экспозиции есть несколько работ, в&nbsp;названии которых фигурирует &laquo;Аполлон&raquo;.
Самую позднюю из&nbsp;них создал Владимир Бескровный в&nbsp;2021&nbsp;году.`,
  ],
  3: [
    `Серия космических кораблей США, &laquo;хорошо сложенный красивый
мужчина&raquo;, кипрский футбольный клуб из&nbsp;города Лимасол&nbsp;&mdash; Аполлон.
В&nbsp;экспозиции есть несколько работ, в&nbsp;названии которых фигурирует &laquo;Аполлон&raquo;.
Самую позднюю из&nbsp;них создал Владимир Бескровный в&nbsp;2021&nbsp;году.`,
  ],
};
const arrCorrectAnswer = {
  1: [''],
  2: [`2021`],
  3: [`2024`],
};
const arrCorrectAnswersText = [`Поздравляем! Начало положено, вы&nbsp;разгадали первое
из&nbsp;семи заданий.`, `Отлично! Два задания из&nbsp;семи уже позади.`, `Почти половина квеста уже пройдена! Три задания из&nbsp;семи
покорились вам.`, `Ого, вы&nbsp;ответили уже на&nbsp;четыре задания из&nbsp;семи!
Осталось всего ничего.`, `Пятое задание из&nbsp;семи тоже за&nbsp;вами, осталось всего два!`, `Супер, вы&nbsp;ответили на&nbsp;шесть заданий из&nbsp;семи! Даже
немного грустно, что осталось всего одно.`, `Семь из&nbsp;семи, наши поздравления! Теперь можете получить свой
бонус у&nbsp;администратора. <br>  Надеемся, что вам понравилось! Если квест, действительно, пришёлся вам по&nbsp;душе или есть
какие-то пожелания по&nbsp;нему, то&nbsp;будем признательны, если упомянете об&nbsp;этом
в&nbsp;своих социальных сетях, отметив при этом нас&mdash; нам будет о-о-очень приятно! В&nbsp;любом
случае, будем рады если подпишетесь на&nbsp;наши социальные сети, которые найдете внизу страницы
<span>&#129303</span>`];
const wrongAnswersText = `К&nbsp;сожалению, это неправильный ответ. Попробуйте еще раз!
Помните, что можно воспользоваться видеоподсказками или нажать на&nbsp;кнопку &laquo;Узнать
ответ&raquo;`;


// Вписываются номера вопросов строками ("const arrImgQuestion = ["1", "3"]")
const arrHelpSection = [];
const arrImgQuestion = [];

export default { headerTitle, arrQuestion, arrPlaceholder, hintBoard, arrCorrectAnswer, arrHelpSection, arrImgQuestion, arrCorrectAnswersText, wrongAnswersText };
