// https://api.telegram.org/bot5323568142:AAHDuADYBriqhspivW_rBiz5YOaU7nMB4n8/getUpdates;

// https://api.telegram.org/bot5323568142:AAHDuADYBriqhspivW_rBiz5YOaU7nMB4n8/sendMessage?chat_id=277334629&text=hi_I_am_Farba

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   let message = document.querySelector("#message_from_user").value;
//   const token = "5323568142:AAHDuADYBriqhspivW_rBiz5YOaU7nMB4n8";
//   let url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=277334629&text=";
//   let xhttp = new XMLHttpRequest();
//   xhttp.open("GET", url + message, true);
//   xhttp.send();
// });

const TelegramApi = require("node-telegram-bot-api");
const token = "5323568142:AAHDuADYBriqhspivW_rBiz5YOaU7nMB4n8";
const bot = new TelegramApi(token, { polling: true });

const btnStartQuest = {
  reply_markup: JSON.stringify({
    inline_keyboard: [[{ text: "Начать квест", calback_data: "да" }]],
  }),
};

const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Приветствие" },
    { command: "/info", description: "Вопросы квеста" },
  ]);
  bot.on("message", async (msg) => {
    const text = msg.text;
    const nameUser = msg.from.first_name;
    const idChat = msg.chat.id;
    if (text === "/start") {
      await bot.sendSticker(idChat, `https://tlgrm.ru/_/stickers/60f/e2f/60fe2ff5-b733-30a0-b11c-1442162df34e/2.webp`);
      await bot.sendMessage(idChat, `Привет ${nameUser}`);
      await bot.sendMessage(idChat, `Готов пройти квест?(Да/Нет)`);
    }
    if (text === "/info") {
      await bot.sendMessage(idChat, "Первый вопрос");
      await bot.sendMessage(idChat, "Второй вопрос");
      await bot.sendMessage(idChat, "Третий вопрос");
      await bot.sendMessage(idChat, "Четвертый вопрос");
    }
    if (text.toLowerCase() === "да") {
      // await bot.sendMessage(idChat, `Жми скорее на эту кнопку...`);
      return bot.sendMessage(idChat, `Жми скорее на эту кнопку...`, btnStartQuest);
    }
    // return bot.sendMessage(idChat, "Я тебя не понимаю");
  });
};
start();
