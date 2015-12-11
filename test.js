#!/usr/bin/env node

var Lines = require('./lines.js')
var lines = new Lines()
var a = 0
process.stdin.pipe(lines)
lines.on('data', function(line) {a++})
lines.on('end', function () {console.log(a)})
