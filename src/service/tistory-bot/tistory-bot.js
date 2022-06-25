import path from 'path';
import { fileURLToPath } from 'url';
import config from '../../../config.js';
import axios from 'axios';
import logger from '../../log/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { tistoryAccessToken, tistorySafePWD } = config.tistoryAccessToken;
logger.debug(tistoryAccessToken);
const tistoryRequest = axios.create({
  baseURL: ` https://www.tistory.com/apis/post`,
  data: {
    access_token: tistoryAccessToken,
    blogName: 'now-io',
    password: '1234',
  },
  proxy: {
    host: '127.0.0.1',
    port: 8888,
  },
});
export default class TistoryBot {
  constructor() {}

  async upload(title, content) {
    try {
      const request = await tistoryRequest.post(
        'write',
        {
          title,
          content,
        },
        { headers: { 'Content-Type': 'application/json' } },
      );
      const requestStatus = request.status;
      if (requestStatus >= 200 && requestStatus < 300) {
        logger.info('[tistory bot] upload content');
      } else {
        logger.error(`failed[status]: ${requestStatus} `);
      }
    } catch (e) {
      logger.error(e);
    }
  }
}
