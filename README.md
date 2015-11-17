# zero-buffer
This module allows you to zero fill buffer allocations.

This module is only supported in Node.js >= v4.x

## Without this module

    $ node -p "new Buffer(4200).toString()" | strings
    allocate
    toString
    E H8)
    prototype@
    n6U]
    ~2 $
    nction
    this
    n6U]
    arguments
    size
    ~2 $
    evalfine
    undefined
    .result

## With this module

    $ node -r zero-buffer -p "new Buffer(4200).toString()" | strings

