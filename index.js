'use strict'

class Buffer extends global.Buffer {
  constructor(arg1, arg2) {
    super(arg1, arg2);
    this.fill();
  }
}

global.Buffer = Buffer;
