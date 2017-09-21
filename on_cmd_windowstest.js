var botio = require(process.env['BOTIO_MODULE']);
var shell = require('shelljs');
var now = require("performance-now")

var a = now();
shell.exec('./zcutil/build-win.sh --disable-rust -j$(nproc)');
var b = now();

shell.echo("Done building: " + (b - a) / 1000 + " seconds");
shell.echo("Testing");

var c = now();
shell.exec('wine src/hush-gtest.exe')
var d = now();

shell.echo("Done Testing: " + (d - c) / 1000 + " seconds");
