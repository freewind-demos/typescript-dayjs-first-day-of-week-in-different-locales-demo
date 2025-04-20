TypeScript Dayjs First Day of Week in Different Locales Demo
=============================================================

dayjs默认不引入任何locale（以减小体积），如果需要使用某个特定的locale，需要手动引入。

注意：对于 firstDayOfWeek，对于不同的locale是不一样的，有的是以星期日为周一，有的是以星期一为周一。

必须import相应的locale，才能正确返回结果

对于 2025-04-20，下列locale的当周第一天是：

- zh-cn: 2025-04-14
- en: 2025-04-20
- de: 2025-04-14

另外 dayjs默认内置了en的locale，使用其它locale需要导入，并且通过`dayjs.locale('other')`修改全局设置

```
npm install
npm start
```
