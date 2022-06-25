import path from 'path';
import { fileURLToPath } from 'url';
import config from '../../../config.js';
import axios from 'axios';
import logger from '../../log/logger.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { tistoryAppID, tistorySecretKey, tistoryAccessToken } = config;
export default class Tistory {
  constructor() {
    this.tistoryAppID = tistoryAppID;
    this.tistorySecretKey = tistorySecretKey;
    this.tistoryAccessToken = tistoryAccessToken;
  }
}
