#!/usr/bin/env node

import Liftoff from 'liftoff';

process.env.INIT_CWD = process.cwd();

const cli = new Liftoff({
  name: 'namely-ui',
});


// Exit with 0 or 1
let failed = false;
process.once('exit', function(code) {
  if (code === 0 && failed) {
    process.exit(1);
  }
});
