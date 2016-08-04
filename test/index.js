'use strict';

var should = require('chai').should(),
	panner = require('../src/index');

describe('init', () => {
	it('adds mousemove event listener on passed element', () => {
		var evtName = null;
		var evtMethod = null;
		var elem = {
			addEventListener: (eventName, callback) => {
				evtName = eventName;
				evtMethod = callback;
			}
		};

		elem = panner.init(elem);

		(evtName).should.equal('mousemove');
		(typeof evtMethod).should.equal('function');
	});
});