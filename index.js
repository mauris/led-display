var net = require('net');
var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(0, 0x20);

lcd.backlight(0x07);

var server = net.createServer((socket) => {
  socket.name = socket.remoteAddress + ":" + socket.remotePort;
  console.log(socket.name + ' has connected.');
  socket.setEncoding('utf8');
  socket.on('data', (data) => {
    console.log('[' + socket.name + ']: ' + data);
    lcd.clear()
    lcd.message(data);
  })
});

server.listen(1337);
