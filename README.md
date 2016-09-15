PannerJS
========

[![Build Status](https://travis-ci.org/selcher/panner.svg?branch=master)](https://travis-ci.org/selcher/panner)

A small library for making web elements pannable.

### Demo

Online demo is available [here](https://selcher.github.io/panner/)

### Installation

```
	npm install pannerjs --save
```

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

Take care to maintain the existing coding style.

Add unit tests for any new or changed functionality.

Lint and test your code.

### Release History

* 0.1.0 Initial release