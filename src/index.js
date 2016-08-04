'use strict';

/**
 * Make a web element pannable.
 */

module.exports = {
	init: (elem, containerElem) => {
		var container = containerElem ?
			containerElem : elem.parentElement;

		elem.addEventListener('mousemove', (e) => {
			e.preventDefault();

			if (e && e.which === 1) {

				if (e.movementX !== 0) {
					container.scrollLeft -= e.movementX;
				}

				if (e.movementY !== 0) {
					container.scrollTop -= e.movementY;
				}
			}
		});

		return elem;
	}
};