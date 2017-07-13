var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(1, 0x20);

lcd.message('Hello World!');

lcd.on('button_change', function(button) {
  lcd.clear();
  lcd.message('Button changed:\n' + lcd.buttonName(button));
});
