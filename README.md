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

## API

### `megaToRaw(mega)`

Converts mega amount to raw amount.

#### Arguments

- **mega (_Number_|_String_)**: The mega amount.

#### Returns

- **(_String_)**: The raw amount.

#### Exceptions

- **Error**: The mega amount must be defined.
- **TypeError**: The mega amount must be a string or a number.
- **Error**: The mega amount is invalid.
- **Error**: The mega amount must not be negative.
- **Error**: The mega amount is too small.
- **Error**: The mega amount is too large.

### `rawToMega(raw)`

Converts raw amount to mega amount.

#### Arguments

- **raw (_Number_|_String_)**: The raw amount.

#### Returns

- **(_String_)**: The mega amount.

#### Exceptions

- **Error**: The raw amount must be defined.
- **TypeError**: The raw amount must be a string or a number.
- **Error**: The raw amount is invalid.
- **Error**: The raw amount must not be negative.
- **Error**: The raw amount is too small.
- **Error**: The raw amount is too large.

## See Also

- [Nano Address Validator](https://github.com/alecrios/nano-address-validator) - Validates Nano addresses for syntax and checksum integrity.
- [Nano URI Generator](https://github.com/alecrios/nano-uri-generator) - Generates Nano URIs for sending amounts, changing representatives, and more.
