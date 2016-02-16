'use strict'

class Buffer extends global.Buffer {
  constructor (arg1, arg2) {
    super(arg1, arg2)
    if (typeof arg1 === 'number') this.fill()
  }
}

global.Buffer = Buffer
