'use strict';

/**
 * Limit execution of onReady function
 * to once over the given wait time.
 *
 * @function _throttle
 * @private
 *
 * @param {function} onReady
 * @param {function} onStandby
 * @param {number} wait
 *
 * @returns {function}
 */
const _throttle = (onReady, onStandby, wait) => {
    let time = Date.now();

    return (e) => {
        onStandby(e);

        if ((time + wait - Date.now()) < 0) {
            onReady(e);
            time = Date.now();
        }
    };
};

/**
 * Initialize element to be pannable
 * within the given contanerElement.
 *
 * @function init
 * @public
 *
 * @param {Object} elem
 * @param {Object} containerElem
 *
 * @returns {Object}
 */
const init = (elem, containerElem) => {
    const container = containerElem ?
        containerElem : elem.parentElement;

    let scrollLeft = 0;
    let scrollTop = 0;

    const handleMove = _throttle(
        (e) => {
            e.preventDefault();

            requestAnimationFrame(() => {
                if (e && e.which === 1) {

                    if (e.movementX !== 0) {
                        container.scrollLeft -= scrollLeft;
                    }

                    if (e.movementY !== 0) {
                        container.scrollTop -= scrollTop;
                    }

                    scrollLeft = 0;
                    scrollTop = 0;
                }
            });
        },
        (e) => {
            if (e && e.which === 1) {

                if (e.movementX !== 0) {
                    scrollLeft += e.movementX;
                }

                if (e.movementY !== 0) {
                    scrollTop += e.movementY;
                }
            }
        },
        10
    );

    elem.addEventListener(
        'mousemove',
        handleMove
    );

    return elem;
};

/**
 * Make a web element pannable.
 */

module.exports = {
    init
};
