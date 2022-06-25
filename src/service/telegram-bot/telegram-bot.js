import querystring from 'querystring';
import config from '../../../config.js';
import axios from 'axios';
import logger from '../../log/logger.js';

const { telegramBotToken, telegramMyID } = config;
const baseRequest = axios.create({
  baseURL: `https://api.telegram.org/bot${telegramBotToken}`,
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 8888,
  //   // protocol: 'https',
  // },
});

class TelegramBot {
  constructor() {}

  async sendMessage(text) {
    try {
      const request = await baseRequest.post(
        'sendmessage',
        { chat_id: telegramMyID, text: text },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const requestStatus = request.status;
      if (requestStatus >= 200 && requestStatus < 300) {
        logger.debug('debug telegram bot send message success');
        logger.info('info telegram bot send message success');
      } else {
        logger.error(`failed[status]: ${requestStatus} `);
      }
    } catch (e) {
      logger.error(e);
    }
  }
}

export default TelegramBot;
