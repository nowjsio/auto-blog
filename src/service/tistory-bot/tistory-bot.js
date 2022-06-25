import path from 'path';
import { fileURLToPath } from 'url';
import config from '../../../config.js';
import axios from 'axios';
import logger from '../../log/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { tistoryAccessToken, tistoryBlogName, tistoryContentPWD } = config;
logger.debug(tistoryAccessToken);
const tistoryRequest = axios.create({
  baseURL: ` https://www.tistory.com/apis/post`,
  params: {
    access_token: tistoryAccessToken,
    blogName: tistoryBlogName,
    password: tistoryContentPWD,
  },
  headers: { 'Content-Type': 'application/json' },
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 8888,
  // },
});
export default class TistoryBot {
  constructor() {}

  async upload(title, content) {
    try {
      const request = await tistoryRequest.post('write', {
        title,
        content,
      });
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
