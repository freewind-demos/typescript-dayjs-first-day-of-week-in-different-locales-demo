import dayjs from 'dayjs';

import 'dayjs/locale/en'
import 'dayjs/locale/en-gb'
import 'dayjs/locale/de'
import 'dayjs/locale/zh-cn'

// default
console.log('Default locale:', dayjs.locale())

// first day of week for different locales
console.log(dayjs('2025-04-20').locale('zh-cn').startOf('week').format('YYYY-MM-DD'))
console.log(dayjs('2025-04-20').locale('en').startOf('week').format('YYYY-MM-DD'))
console.log(dayjs('2025-04-20').locale('en-gb').startOf('week').format('YYYY-MM-DD'))
console.log(dayjs('2025-04-20').locale('de').startOf('week').format('YYYY-MM-DD'))

dayjs.locale('de');
console.log('Changed locale:', dayjs.locale())

