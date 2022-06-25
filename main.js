import TelegramBot from './src/service/telegram-bot/telegram-bot.js';

(async () => {
  const _TelegramBot = new TelegramBot();
  await _TelegramBot.sendMessage('[테스트]한글');
  await _TelegramBot.sendMessage('[test]korean');
})();
