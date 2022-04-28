import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'

import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const date = dayjs().locale('zh-cn').format("L");
console.log(date)
