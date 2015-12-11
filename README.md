# nl-stream

A NodeJS stream returning one event per line.

```javascript
var Lines = require('nl-stream')
var lines = new Lines()
inputStream.pipe(lines)
lines.on('data', function(line) {
	console.log(line)
})
lines.on('end', function () {
	console.log('line stream finished')
})
```

## License

[MIT license](./LICENSE).
