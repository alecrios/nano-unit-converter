# Nano Unit Converter

Nano Unit Converter is a thoroughly-tested library for converting units of the [Nano](https://nano.org/en) cryptocurrency. It supports the conversion of Raw to Mnano and Mnano to Raw.

## Unit Specifications

**Raw** `10^0` - The smallest unit, commonly used in software code.

**Mnano** `10^30` - A human-friendly unit, commonly used in software interfaces.

```
1000000000000000000000000000000 Raw = 1 Mnano
```

## Installation

```
npm install nano-unit-converter --save
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
