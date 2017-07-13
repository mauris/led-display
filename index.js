var net = require('net');
var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(0, 0x20);

lcd.sendBytes(0, 0x1F);

var server = net.createServer((socket) => {
  socket.on('data', (data) => {
    lcd.message(data);
  })
});

server.listen(1337, '127.0.0.1');
