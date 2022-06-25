import dotenv from 'dotenv';

dotenv.config();

function required(key, defaultValue = undefined) {
  const requiredValue = process.env[key] || defaultValue;
  if (requiredValue === undefined) {
    throw new Error(`key [${key}] is undefined`);
  }
  return requiredValue;
}

const config = {
  telegramBotToken: required('TELEGRAM_BOT_TOKEN'),
  telegramMyID: required('TELEGRAM_MY_ID'),
  tistoryAppID: required('TISTORY_APP_ID'),
  tistorySecretKey: required('TISTORY_SECRET_KEY'),
  tistoryAccessToken: required('TISTORY_ACCESS_TOKEN'),
};

export default config;
