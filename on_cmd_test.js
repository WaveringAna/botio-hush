var botio = require(process.env['BOTIO_MODULE']);
var shell = require('shelljs');
var now = require("performance-now")

/*echo('These are the files in your repo:');
ls().forEach(function(file) {
  echo('  '+file);
});

botio.message('#### Hello world');
botio.message('Your Botio installation works! View full output for the list of files in this repo');*/
var a = now();
shell.echo("Building: " + a);

shell.exec('./zcutil/build.sh -j$(nproc)');
var b = now();

shell.echo("Done building: " + (b - a) / 1000 + " seconds");
shell.echo("Testing");

var c = now();
shell.exec('./src/zen-gtest', {silent: false});
var d = now();

shell.echo("Done Testing: " + (d - c) / 1000 + " seconds");
