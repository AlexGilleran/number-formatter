'use strict';

var should = require('chai').should();
var numFormatter  = require('../index');

describe('#numFormatter', function() {
	it('should convert single digit', function() {
		numFormatter(1).should.equal('1');
	});

	it('should convert two digits', function() {
		numFormatter(12).should.equal('12');
	});

	it('should convert triple digits', function() {
		numFormatter(123).should.equal('123');
	});

	it('should convert 4 digits', function() {
		numFormatter(1234).should.equal('1,234');
	});

	it('should convert 5 digits', function() {
		numFormatter(12345).should.equal('12,345');
	});

	it('should convert 6 digits', function() {
		numFormatter(123456).should.equal('123,456');
	});
});