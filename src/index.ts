import Big from 'big.js';

// Configure Big to never show exponential notation.
Big.NE = -31;
Big.PE = 39;

/** The amount of raw in one mega. */
const RAW_IN_MEGA = new Big('1000000000000000000000000000000');

/** The amount of mega in one raw. */
const MEGA_IN_RAW = new Big('.000000000000000000000000000001');

/** The minimum raw amount. */
const RAW_MIN_AMOUNT = new Big('1');

/** The maximum raw amount. */
const RAW_MAX_AMOUNT = new Big('340282366920938463463374607431768211455');

/** The minimum mega amount. */
const MEGA_MIN_AMOUNT = MEGA_IN_RAW;

/** The maximum mega amount. */
const MEGA_MAX_AMOUNT = new Big(RAW_MAX_AMOUNT).times(MEGA_IN_RAW);

/**
 * Converts mega amount to raw amount.
 *
 * @param {number | string} mega The mega amount.
 *
 * @throws {Error} The mega amount must be defined.
 * @throws {TypeError} The mega amount must be a string or a number.
 * @throws {Error} The mega amount is invalid.
 * @throws {Error} The mega amount must not be negative.
 * @throws {Error} The mega amount is too small.
 * @throws {Error} The mega amount is too large.
 *
 * @returns {string} The raw amount.
 */
export function megaToRaw(mega: number | string): string {
	if (mega === undefined) {
		throw Error('The mega amount must be defined.');
	}

	if (typeof mega !== 'string' && typeof mega !== 'number') {
		throw TypeError('The mega amount must be a string or a number.');
	}

	let megaBig: Big;

	try {
		megaBig = new Big(mega);
	} catch (error) {
		throw Error('The mega amount is invalid.');
	}

	if (megaBig.lt(0)) {
		throw Error('The mega amount must not be negative.');
	}

	if (megaBig.lt(MEGA_MIN_AMOUNT)) {
		throw Error('The mega amount is too small.');
	}

	if (megaBig.gt(MEGA_MAX_AMOUNT)) {
		throw Error('The mega amount is too large.');
	}

	return megaBig.times(RAW_IN_MEGA).toString();
}

/**
 * Converts raw amount to mega amount.
 *
 * @param {number | string} raw The raw amount.
 *
 * @throws {Error} The raw amount must be defined.
 * @throws {TypeError} The raw amount must be a string or a number.
 * @throws {Error} The raw amount is invalid.
 * @throws {Error} The raw amount must not be negative.
 * @throws {Error} The raw amount is too small.
 * @throws {Error} The raw amount is too large.
 *
 * @returns {string} The mega amount.
 */
export function rawToMega(raw: number | string): string {
	if (raw === undefined) {
		throw Error('The raw amount must be defined.');
	}

	if (typeof raw !== 'string' && typeof raw !== 'number') {
		throw TypeError('The raw amount must be a string or a number.');
	}

	let rawBig: Big;

	try {
		rawBig = new Big(raw);
	} catch (error) {
		throw Error('The raw amount is invalid.');
	}

	if (rawBig.lt(0)) {
		throw Error('The raw amount must not be negative.');
	}

	if (rawBig.lt(RAW_MIN_AMOUNT)) {
		throw Error('The raw amount is too small.');
	}

	if (rawBig.gt(RAW_MAX_AMOUNT)) {
		throw Error('The raw amount is too large.');
	}

	return rawBig.times(MEGA_IN_RAW).toString();
}
