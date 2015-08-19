#!/usr/bin/env node

'use strict'
var Liftoff = require('liftoff');

process.env.INIT_CWD = process.cwd();

var cli = new Liftoff({
  name: 'namely-ui',
});


// Exit with 0 or 1
var failed = false;
process.once('exit', function(code) {
  if (code === 0 && failed) {
    process.exit(1);
  }
});


cli.launch({

});
