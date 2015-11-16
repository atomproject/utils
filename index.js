var chokidar = require('chokidar');
var path = require('path');
var fs = require('fs');
var split = require('split');
var files = [];
var lines = fs.createReadStream('paths.txt')
	.pipe(split());

lines.on('data', function(line) {
	if (line) {
		files.push(path.resolve(line));
	}
});

lines.on('end', watchFiles);
// lines.on('end', function() {
// 	files.forEach(function(file) {
// 		console.log(file);
// 	})
// });

function watchFiles() {
	var watcher = chokidar.watch(files);

	watcher.on('change', onFileChange);
}

function onFileChange(path) {
	//if path contains bower.json then run bower update
	//in the output dir
	console.log(`changed: ${path}`);
}
