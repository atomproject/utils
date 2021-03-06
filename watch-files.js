#!/usr/bin/env node

'use strict;'

var chokidar = require('chokidar');
var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');
var split = require('split');
var files = [];
var pathsMap = {};
var lines = fs.createReadStream('paths.txt')
	.pipe(split());

function strip(str) {
	return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

lines.on('data', function(line) {
	var parts, dest, src;
	if (line) {
		var parts = line.split('=>');
		src = path.resolve(strip(parts[0]));
		dest = path.resolve(strip(parts[1]));

		files.push(src);
		pathsMap[src] = dest;
	}
});

lines.on('end', function() {
	files.forEach(function(file) {
		console.log(`${file} => ${pathsMap[file]}`);
	});

	watchFiles();
});

function watchFiles() {
	var watcher = chokidar.watch(files);

	watcher.on('change', onFileChange);
}

//random
function onFileChange(file) {
	var src = fs.createReadStream(file);
	var dest = fs.createWriteStream(pathsMap[file]);

	//if file contains bower.json then run bower update
	//in the output dir
	console.log(`changed: ${file}`);

	src.pipe(dest);
}
