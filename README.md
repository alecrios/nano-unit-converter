# Nano Unit Converter

Nano Unit Converter is a thoroughly-tested library for converting units of the [Nano](https://nano.org/en) cryptocurrency. It supports the conversion of Raw to Mnano and Mnano to Raw.

## Unit Specifications

**Raw** `10^0` - The smallest unit, commonly used in software code.

**Mnano** `10^30` - A human-friendly unit, commonly used in software interfaces.

```
1000000000000000000000000000000 Raw = 1 Mnano
```

Note: In this library, Raw and Mnano are referred to as `raw` and `mega`, respectively. This is to avoid casing conflicts between Nano units and coding conventions. For example, in the Nano unit system, 1 Mnano != 1 mnano. Should other units be added to this library in the future, they will also be referred to by their metric prefixes, such as `kilo` and `giga`.

## Installation

```
npm install nano-unit-converter
```

## API

``` ts
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
export declare function megaToRaw(mega: number | string): string;
```

``` ts
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
export declare function rawToMega(raw: number | string): string;
```

## Examples

```js
import { megaToRaw, rawToMega } from 'nano-unit-converter';

megaToRaw('0.1');                             // '100000000000000000000000000000'
megaToRaw('1');                               // '1000000000000000000000000000000'
megaToRaw('10');                              // '10000000000000000000000000000000'

rawToMega('100000000000000000000000000000')   // '0.1'
rawToMega('1000000000000000000000000000000')  // '1'
rawToMega('10000000000000000000000000000000') // '10'
```

## See Also

- [Nano Address Validator](https://github.com/alecrios/nano-address-validator) - Validates Nano addresses for syntax and checksum integrity.
- [Nano URI Generator](https://github.com/alecrios/nano-uri-generator) - Generates Nano URIs for sending amounts, changing representatives, and more.
