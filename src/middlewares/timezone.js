const dayjs = require('dayjs');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Jakarta");

const dateNow = dayjs();
const dateFormat = dateNow.format("YYYY-MM-DD HH:mm:ss")

console.log(dateFormat);

module.exports = dateFormat
