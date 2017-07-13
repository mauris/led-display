var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(0, 0x20);

lcd.backlight(lcd.colors.RED);
lcd.message('Hello World!');
