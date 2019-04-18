import {expect} from 'chai';
import {megaToRaw, rawToMega} from '../lib/nano-unit-converter';

const powerZero = {mega: '1', raw: '1000000000000000000000000000000'};

const powerNegative = [
	{mega: '0.000000000000000000000000000001', raw: '1'},
	{mega: '0.00000000000000000000000000001', raw: '10'},
	{mega: '0.0000000000000000000000000001', raw: '100'},
	{mega: '0.000000000000000000000000001', raw: '1000'},
	{mega: '0.00000000000000000000000001', raw: '10000'},
	{mega: '0.0000000000000000000000001', raw: '100000'},
	{mega: '0.000000000000000000000001', raw: '1000000'},
	{mega: '0.00000000000000000000001', raw: '10000000'},
	{mega: '0.0000000000000000000001', raw: '100000000'},
	{mega: '0.000000000000000000001', raw: '1000000000'},
	{mega: '0.00000000000000000001', raw: '10000000000'},
	{mega: '0.0000000000000000001', raw: '100000000000'},
	{mega: '0.000000000000000001', raw: '1000000000000'},
	{mega: '0.00000000000000001', raw: '10000000000000'},
	{mega: '0.0000000000000001', raw: '100000000000000'},
	{mega: '0.000000000000001', raw: '1000000000000000'},
	{mega: '0.00000000000001', raw: '10000000000000000'},
	{mega: '0.0000000000001', raw: '100000000000000000'},
	{mega: '0.000000000001', raw: '1000000000000000000'},
	{mega: '0.00000000001', raw: '10000000000000000000'},
	{mega: '0.0000000001', raw: '100000000000000000000'},
	{mega: '0.000000001', raw: '1000000000000000000000'},
	{mega: '0.00000001', raw: '10000000000000000000000'},
	{mega: '0.0000001', raw: '100000000000000000000000'},
	{mega: '0.000001', raw: '1000000000000000000000000'},
	{mega: '0.00001', raw: '10000000000000000000000000'},
	{mega: '0.0001', raw: '100000000000000000000000000'},
	{mega: '0.001', raw: '1000000000000000000000000000'},
	{mega: '0.01', raw: '10000000000000000000000000000'},
	{mega: '0.1', raw: '100000000000000000000000000000'},
];

const powerPositive = [
	{mega: '10', raw: '10000000000000000000000000000000'},
	{mega: '100', raw: '100000000000000000000000000000000'},
	{mega: '1000', raw: '1000000000000000000000000000000000'},
	{mega: '10000', raw: '10000000000000000000000000000000000'},
	{mega: '100000', raw: '100000000000000000000000000000000000'},
	{mega: '1000000', raw: '1000000000000000000000000000000000000'},
	{mega: '10000000', raw: '10000000000000000000000000000000000000'},
	{mega: '100000000', raw: '100000000000000000000000000000000000000'},
];

const assorted = [
	{mega: '0.123456789', raw: '123456789000000000000000000000'},
	{mega: '1.23456789', raw: '1234567890000000000000000000000'},
	{mega: '12.3456789', raw: '12345678900000000000000000000000'},
	{mega: '123.456789', raw: '123456789000000000000000000000000'},
	{mega: '1234.56789', raw: '1234567890000000000000000000000000'},
	{mega: '12345.6789', raw: '12345678900000000000000000000000000'},
	{mega: '123456.789', raw: '123456789000000000000000000000000000'},
	{mega: '1234567.89', raw: '1234567890000000000000000000000000000'},
	{mega: '12345678.9', raw: '12345678900000000000000000000000000000'},
	{mega: '123456789', raw: '123456789000000000000000000000000000000'},
];

describe('megaToRaw', () => {
	it('should throw error if amount is not provided', () => {
		expect(() => megaToRaw()).to.throw(Error);
	});

	it('should throw error if amount is wrong type', () => {
		expect(() => megaToRaw(null)).to.throw(TypeError);
	});

	it('should throw error if amount is invalid', () => {
		expect(() => megaToRaw('zero')).to.throw(Error);
		expect(() => megaToRaw('0.0.0.0')).to.throw(Error);
	});

	it('should throw error if amount is negative', () => {
		expect(() => megaToRaw(-1)).to.throw(Error);
		expect(() => megaToRaw('-1')).to.throw(Error);
	});

	it('should throw error if amount is too small', () => {
		expect(() => megaToRaw('0.000000000000000000000000000001')).to.not.throw(Error);
		expect(() => megaToRaw('0.0000000000000000000000000000001')).to.throw(Error);
	});

	it('should throw error if amount is too large', () => {
		expect(() => megaToRaw('340282366.920938463463374607431768211455')).to.not.throw(Error);
		expect(() => megaToRaw('340282366.920938463463374607431768211456')).to.throw(Error);
	});

	it('should convert 10^0', () => {
		expect(megaToRaw(powerZero.mega)).to.equal(powerZero.raw);
	});

	it('should convert 10^-n', () => {
		powerNegative.forEach((test) => {
			expect(megaToRaw(test.mega)).to.equal(test.raw);
		});
	});

	it('should convert 10^n', () => {
		powerPositive.forEach((test) => {
			expect(megaToRaw(test.mega)).to.equal(test.raw);
		});
	});

	it('should convert n', () => {
		assorted.forEach((test) => {
			expect(megaToRaw(test.mega)).to.equal(test.raw);
		});
	});
});

describe('rawToMega', () => {
	it('should throw error if amount is not provided', () => {
		expect(() => rawToMega()).to.throw(Error);
	});

	it('should throw error if amount is wrong type', () => {
		expect(() => rawToMega(null)).to.throw(TypeError);
	});

	it('should throw error if amount is invalid', () => {
		expect(() => rawToMega('zero')).to.throw(Error);
		expect(() => rawToMega('0.0.0.0')).to.throw(Error);
	});

	it('should throw error if amount is negative', () => {
		expect(() => rawToMega(-1)).to.throw(Error);
		expect(() => rawToMega('-1')).to.throw(Error);
	});

	it('should throw error if amount is too small', () => {
		expect(() => rawToMega('1')).to.not.throw(Error);
		expect(() => rawToMega('.1')).to.throw(Error);
	});

	it('should throw error if amount is too large', () => {
		expect(() => rawToMega('340282366920938463463374607431768211455')).to.not.throw(Error);
		expect(() => rawToMega('340282366920938463463374607431768211456')).to.throw(Error);
	});

	it('should convert 10^0', () => {
		expect(rawToMega(powerZero.raw)).to.equal(powerZero.mega);
	});

	it('should convert 10^-n', () => {
		powerNegative.forEach((test) => {
			expect(rawToMega(test.raw)).to.equal(test.mega);
		});
	});

	it('should convert 10^n', () => {
		powerPositive.forEach((test) => {
			expect(rawToMega(test.raw)).to.equal(test.mega);
		});
	});

	it('should convert n', () => {
		assorted.forEach((test) => {
			expect(rawToMega(test.raw)).to.equal(test.mega);
		});
	});
});
