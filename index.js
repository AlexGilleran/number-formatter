'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @return {string} formatted number
 */
module.exports = function(number) {
	return number.toLocaleString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};