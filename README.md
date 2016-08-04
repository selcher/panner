Panner
======

A small library for making web elements pannable.

### Usage

```
	var panner = require('panner');
	var elem = document.querySelector('.class');
	var container = elem.parentElement;

	panner.init(elem);
	// or
	panner.init(elem, container);
```

### Tests

```
	npm test
```

### Contributing

	In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

### Release History

* 0.1.0 Initial release