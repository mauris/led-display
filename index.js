const TURN_ON = 0x07;
const TURN_OFF = 0x00;
const BACKLIGHT_DELAY = 20000; // ms
const LISTEN_PORT = 1337;

var net = require('net');
var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(0, 0x20);

var timer;

var server = net.createServer((socket) => {
  socket.name = socket.remoteAddress + ":" + socket.remotePort;
  socket.setEncoding('utf8');
  socket.on('data', (data) => {
    console.log('[' + socket.name + ']: ' + data);
    lcd.clear()
    lcd.backlight(TURN_ON);
    lcd.message(data);

    clearTimeout(timer);
    timer = setTimeout(() => {
      lcd.backlight(TURN_OFF);
    }, BACKLIGHT_DELAY);
  })
});

server.listen(LISTEN_PORT);
