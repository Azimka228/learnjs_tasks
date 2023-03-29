// TASK 2
// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
//
//  Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.

class ExtendedClock extends Clock {
 constructor(options) {
  super(options);
  let { precision = 1000 } = options;
  this.precision = precision;
 }

 start() {
  this.render();
  this.timer = setInterval(() => this.render(), this.precision);
 }
};