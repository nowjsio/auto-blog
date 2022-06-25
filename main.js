import TelegramBot from './src/service/telegram-bot/telegram-bot.js';
import TistoryBot from './src/service/tistory-bot/tistory-bot.js';
(async () => {
  // const _TelegramBot = new TelegramBot();
  // await _TelegramBot.sendMessage('[테스트]한글');
  // await _TelegramBot.sendMessage('[test]korean');

  const _TistoryBot = new TistoryBot();
  await _TistoryBot.upload('testTitle', 'testContent');
})();
