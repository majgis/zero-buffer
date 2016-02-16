const test = require('tape')
require('../index.js')

test('array', function (t) {
  t.plan(1)
  const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
  t.equal(buf.toString(), 'buffer')
})

test('buffer', function (t) {
  t.plan(1)
  const buf1 = new Buffer('buffer')
  const buf2 = new Buffer(buf1)
  t.equal(buf2.toString(), 'buffer')
})

test('arrayBuffer', function (t) {
  t.plan(1)
  const arr = new Uint16Array(2)
  arr[0] = 4000
  arr[1] = 5000

  const buf = new Buffer(arr.buffer)
  t.equal(buf.toString(), '�\x0f�\x13')
})

test('size', function (t) {
  t.plan(1)
  const buf1 = new Buffer(12)
  t.equal(buf1.toString(), '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00')
})

test('str', function(t){
  t.plan(1)
  const buf1 = new Buffer('this is a tést')
  t.equal(buf1.toString(), 'this is a tést')
})

test('str,encoding', function(t){
  t.plan(1)
  const buf = new Buffer('7468697320697320612074c3a97374', 'hex');
  t.equal(buf.toString(), 'this is a tést')
})
