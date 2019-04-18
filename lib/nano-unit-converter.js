(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("nano-unit-converter", [], factory);
	else if(typeof exports === 'object')
		exports["nano-unit-converter"] = factory();
	else
		root["nano-unit-converter"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/big.js/big.js":
/*!************************************!*\
  !*** ./node_modules/big.js/big.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  big.js v5.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
 *  https://github.com/MikeMcl/big.js/LICENCE
 */
;(function (GLOBAL) {
  'use strict';
  var Big,


/************************************** EDITABLE DEFAULTS *****************************************/


    // The default values below must be integers within the stated ranges.

    /*
     * The maximum number of decimal places (DP) of the results of operations involving division:
     * div and sqrt, and pow with negative exponents.
     */
    DP = 20,          // 0 to MAX_DP

    /*
     * The rounding mode (RM) used when rounding to the above decimal places.
     *
     *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
     *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
     *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
     *  3  Away from zero.                                  (ROUND_UP)
     */
    RM = 1,             // 0, 1, 2 or 3

    // The maximum value of DP and Big.DP.
    MAX_DP = 1E6,       // 0 to 1000000

    // The maximum magnitude of the exponent argument to the pow method.
    MAX_POWER = 1E6,    // 1 to 1000000

    /*
     * The negative exponent (NE) at and beneath which toString returns exponential notation.
     * (JavaScript numbers: -7)
     * -1000000 is the minimum recommended exponent value of a Big.
     */
    NE = -7,            // 0 to -1000000

    /*
     * The positive exponent (PE) at and above which toString returns exponential notation.
     * (JavaScript numbers: 21)
     * 1000000 is the maximum recommended exponent value of a Big.
     * (This limit is not enforced or checked.)
     */
    PE = 21,            // 0 to 1000000


/**************************************************************************************************/


    // Error messages.
    NAME = '[big.js] ',
    INVALID = NAME + 'Invalid ',
    INVALID_DP = INVALID + 'decimal places',
    INVALID_RM = INVALID + 'rounding mode',
    DIV_BY_ZERO = NAME + 'Division by zero',

    // The shared prototype object.
    P = {},
    UNDEFINED = void 0,
    NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;


  /*
   * Create and return a Big constructor.
   *
   */
  function _Big_() {

    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */
    function Big(n) {
      var x = this;

      // Enable constructor usage without new.
      if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);

      // Duplicate.
      if (n instanceof Big) {
        x.s = n.s;
        x.e = n.e;
        x.c = n.c.slice();
      } else {
        parse(x, n);
      }

      /*
       * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
       * points to Object.
       */
      x.constructor = Big;
    }

    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.version = '5.2.2';

    return Big;
  }


  /*
   * Parse the number or string value passed to a Big constructor.
   *
   * x {Big} A Big number instance.
   * n {number|string} A numeric value.
   */
  function parse(x, n) {
    var e, i, nl;

    // Minus zero?
    if (n === 0 && 1 / n < 0) n = '-0';
    else if (!NUMERIC.test(n += '')) throw Error(INVALID + 'number');

    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

    // Decimal point?
    if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');

    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {

      // Determine exponent.
      if (e < 0) e = i;
      e += +n.slice(i + 1);
      n = n.substring(0, i);
    } else if (e < 0) {

      // Integer.
      e = n.length;
    }

    nl = n.length;

    // Determine leading zeros.
    for (i = 0; i < nl && n.charAt(i) == '0';) ++i;

    if (i == nl) {

      // Zero.
      x.c = [x.e = 0];
    } else {

      // Determine trailing zeros.
      for (; nl > 0 && n.charAt(--nl) == '0';);
      x.e = e - i - 1;
      x.c = [];

      // Convert string to array of digits without leading/trailing zeros.
      for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }

    return x;
  }


  /*
   * Round Big x to a maximum of dp decimal places using rounding mode rm.
   * Called by stringify, P.div, P.round and P.sqrt.
   *
   * x {Big} The Big to round.
   * dp {number} Integer, 0 to MAX_DP inclusive.
   * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
   * [more] {boolean} Whether the result of division was truncated.
   */
  function round(x, dp, rm, more) {
    var xc = x.c,
      i = x.e + dp + 1;

    if (i < xc.length) {
      if (rm === 1) {

        // xc[i] is the digit after the digit that may be rounded up.
        more = xc[i] >= 5;
      } else if (rm === 2) {
        more = xc[i] > 5 || xc[i] == 5 &&
          (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
      } else if (rm === 3) {
        more = more || !!xc[0];
      } else {
        more = false;
        if (rm !== 0) throw Error(INVALID_RM);
      }

      if (i < 1) {
        xc.length = 1;

        if (more) {

          // 1, 0.1, 0.01, 0.001, 0.0001 etc.
          x.e = -dp;
          xc[0] = 1;
        } else {

          // Zero.
          xc[0] = x.e = 0;
        }
      } else {

        // Remove any digits after the required decimal places.
        xc.length = i--;

        // Round up?
        if (more) {

          // Rounding up may mean the previous digit has to be rounded up.
          for (; ++xc[i] > 9;) {
            xc[i] = 0;
            if (!i--) {
              ++x.e;
              xc.unshift(1);
            }
          }
        }

        // Remove trailing zeros.
        for (i = xc.length; !xc[--i];) xc.pop();
      }
    } else if (rm < 0 || rm > 3 || rm !== ~~rm) {
      throw Error(INVALID_RM);
    }

    return x;
  }


  /*
   * Return a string representing the value of Big x in normal or exponential notation.
   * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
   *
   * x {Big}
   * id? {number} Caller id.
   *         1 toExponential
   *         2 toFixed
   *         3 toPrecision
   *         4 valueOf
   * n? {number|undefined} Caller's argument.
   * k? {number|undefined}
   */
  function stringify(x, id, n, k) {
    var e, s,
      Big = x.constructor,
      z = !x.c[0];

    if (n !== UNDEFINED) {
      if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
        throw Error(id == 3 ? INVALID + 'precision' : INVALID_DP);
      }

      x = new Big(x);

      // The index of the digit that may be rounded up.
      n = k - x.e;

      // Round?
      if (x.c.length > ++k) round(x, n, Big.RM);

      // toFixed: recalculate k as x.e may have changed if value rounded up.
      if (id == 2) k = x.e + n + 1;

      // Append zeros?
      for (; x.c.length < k;) x.c.push(0);
    }

    e = x.e;
    s = x.c.join('');
    n = s.length;

    // Exponential notation?
    if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big.NE || e >= Big.PE)) {
      s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;

    // Normal notation.
    } else if (e < 0) {
      for (; ++e;) s = '0' + s;
      s = '0.' + s;
    } else if (e > 0) {
      if (++e > n) for (e -= n; e--;) s += '0';
      else if (e < n) s = s.slice(0, e) + '.' + s.slice(e);
    } else if (n > 1) {
      s = s.charAt(0) + '.' + s.slice(1);
    }

    return x.s < 0 && (!z || id == 4) ? '-' + s : s;
  }


  // Prototype/instance methods


  /*
   * Return a new Big whose value is the absolute value of this Big.
   */
  P.abs = function () {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
  };


  /*
   * Return 1 if the value of this Big is greater than the value of Big y,
   *       -1 if the value of this Big is less than the value of Big y, or
   *        0 if they have the same value.
  */
  P.cmp = function (y) {
    var isneg,
      x = this,
      xc = x.c,
      yc = (y = new x.constructor(y)).c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either zero?
    if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    isneg = i < 0;

    // Compare exponents.
    if (k != l) return k > l ^ isneg ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = -1; ++i < j;) {
      if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    }

    // Compare lengths.
    return k == l ? 0 : k > l ^ isneg ? 1 : -1;
  };


  /*
   * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
   * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */
  P.div = function (y) {
    var x = this,
      Big = x.constructor,
      a = x.c,                  // dividend
      b = (y = new Big(y)).c,   // divisor
      k = x.s == y.s ? 1 : -1,
      dp = Big.DP;

    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);

    // Divisor is zero?
    if (!b[0]) throw Error(DIV_BY_ZERO);

    // Dividend is 0? Return +-0.
    if (!a[0]) return new Big(k * 0);

    var bl, bt, n, cmp, ri,
      bz = b.slice(),
      ai = bl = b.length,
      al = a.length,
      r = a.slice(0, bl),   // remainder
      rl = r.length,
      q = y,                // quotient
      qc = q.c = [],
      qi = 0,
      d = dp + (q.e = x.e - y.e) + 1;    // number of digits of the result

    q.s = k;
    k = d < 0 ? 0 : d;

    // Create version of divisor with leading zero.
    bz.unshift(0);

    // Add zeros to make remainder as long as divisor.
    for (; rl++ < bl;) r.push(0);

    do {

      // n is how many times the divisor goes into current remainder.
      for (n = 0; n < 10; n++) {

        // Compare divisor and remainder.
        if (bl != (rl = r.length)) {
          cmp = bl > rl ? 1 : -1;
        } else {
          for (ri = -1, cmp = 0; ++ri < bl;) {
            if (b[ri] != r[ri]) {
              cmp = b[ri] > r[ri] ? 1 : -1;
              break;
            }
          }
        }

        // If divisor < remainder, subtract divisor from remainder.
        if (cmp < 0) {

          // Remainder can't be more than 1 digit longer than divisor.
          // Equalise lengths using divisor with extra leading zero?
          for (bt = rl == bl ? b : bz; rl;) {
            if (r[--rl] < bt[rl]) {
              ri = rl;
              for (; ri && !r[--ri];) r[ri] = 9;
              --r[ri];
              r[rl] += 10;
            }
            r[rl] -= bt[rl];
          }

          for (; !r[0];) r.shift();
        } else {
          break;
        }
      }

      // Add the digit n to the result array.
      qc[qi++] = cmp ? n : ++n;

      // Update the remainder.
      if (r[0] && cmp) r[rl] = a[ai] || 0;
      else r = [a[ai]];

    } while ((ai++ < al || r[0] !== UNDEFINED) && k--);

    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {

      // There can't be more than one zero.
      qc.shift();
      q.e--;
    }

    // Round?
    if (qi > d) round(q, dp, Big.RM, r[0] !== UNDEFINED);

    return q;
  };


  /*
   * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
   */
  P.eq = function (y) {
    return !this.cmp(y);
  };


  /*
   * Return true if the value of this Big is greater than the value of Big y, otherwise return
   * false.
   */
  P.gt = function (y) {
    return this.cmp(y) > 0;
  };


  /*
   * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
   * return false.
   */
  P.gte = function (y) {
    return this.cmp(y) > -1;
  };


  /*
   * Return true if the value of this Big is less than the value of Big y, otherwise return false.
   */
  P.lt = function (y) {
    return this.cmp(y) < 0;
  };


  /*
   * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
   * return false.
   */
  P.lte = function (y) {
    return this.cmp(y) < 1;
  };


  /*
   * Return a new Big whose value is the value of this Big minus the value of Big y.
   */
  P.minus = P.sub = function (y) {
    var i, j, t, xlty,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }

    var xc = x.c.slice(),
      xe = x.e,
      yc = y.c,
      ye = y.e;

    // Either zero?
    if (!xc[0] || !yc[0]) {

      // y is non-zero? x is non-zero? Or both are zero.
      return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
    }

    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {

      if (xlty = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }

      t.reverse();
      for (b = a; b--;) t.push(0);
      t.reverse();
    } else {

      // Exponents equal. Check digit by digit.
      j = ((xlty = xc.length < yc.length) ? xc : yc).length;

      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xlty = xc[b] < yc[b];
          break;
        }
      }
    }

    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
      t = xc;
      xc = yc;
      yc = t;
      y.s = -y.s;
    }

    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */
    if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;

    // Subtract yc from xc.
    for (b = i; j > a;) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i];) xc[i] = 9;
        --xc[i];
        xc[j] += 10;
      }

      xc[j] -= yc[j];
    }

    // Remove trailing zeros.
    for (; xc[--b] === 0;) xc.pop();

    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] === 0;) {
      xc.shift();
      --ye;
    }

    if (!xc[0]) {

      // n - n = +0
      y.s = 1;

      // Result must be zero.
      xc = [ye = 0];
    }

    y.c = xc;
    y.e = ye;

    return y;
  };


  /*
   * Return a new Big whose value is the value of this Big modulo the value of Big y.
   */
  P.mod = function (y) {
    var ygtx,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    if (!y.c[0]) throw Error(DIV_BY_ZERO);

    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;

    if (ygtx) return new Big(x);

    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;

    return this.minus(x.times(y));
  };


  /*
   * Return a new Big whose value is the value of this Big plus the value of Big y.
   */
  P.plus = P.add = function (y) {
    var t,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.minus(y);
    }

    var xe = x.e,
      xc = x.c,
      ye = y.e,
      yc = y.c;

    // Either zero? y is non-zero? x is non-zero? Or both are zero.
    if (!xc[0] || !yc[0]) return yc[0] ? y : new Big(xc[0] ? x : a * 0);

    xc = xc.slice();

    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }

      t.reverse();
      for (; a--;) t.push(0);
      t.reverse();
    }

    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
      t = yc;
      yc = xc;
      xc = t;
    }

    a = yc.length;

    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for (b = 0; a; xc[a] %= 10) b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;

    // No need to check for zero, as +x + +y != 0 && -x + -y != 0

    if (b) {
      xc.unshift(b);
      ++ye;
    }

    // Remove trailing zeros.
    for (a = xc.length; xc[--a] === 0;) xc.pop();

    y.c = xc;
    y.e = ye;

    return y;
  };


  /*
   * Return a Big whose value is the value of this Big raised to the power n.
   * If n is negative, round to a maximum of Big.DP decimal places using rounding
   * mode Big.RM.
   *
   * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
   */
  P.pow = function (n) {
    var x = this,
      one = new x.constructor(1),
      y = one,
      isneg = n < 0;

    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) throw Error(INVALID + 'exponent');
    if (isneg) n = -n;

    for (;;) {
      if (n & 1) y = y.times(x);
      n >>= 1;
      if (!n) break;
      x = x.times(x);
    }

    return isneg ? one.div(y) : y;
  };


  /*
   * Return a new Big whose value is the value of this Big rounded using rounding mode rm
   * to a maximum of dp decimal places, or, if dp is negative, to an integer which is a
   * multiple of 10**-dp.
   * If dp is not specified, round to 0 decimal places.
   * If rm is not specified, use Big.RM.
   *
   * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
   * rm? 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
   */
  P.round = function (dp, rm) {
    var Big = this.constructor;
    if (dp === UNDEFINED) dp = 0;
    else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) throw Error(INVALID_DP);
    return round(new Big(this), dp, rm === UNDEFINED ? Big.RM : rm);
  };


  /*
   * Return a new Big whose value is the square root of the value of this Big, rounded, if
   * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */
  P.sqrt = function () {
    var r, c, t,
      x = this,
      Big = x.constructor,
      s = x.s,
      e = x.e,
      half = new Big(0.5);

    // Zero?
    if (!x.c[0]) return new Big(x);

    // Negative?
    if (s < 0) throw Error(NAME + 'No square root');

    // Estimate.
    s = Math.sqrt(x + '');

    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
      c = x.c.join('');
      if (!(c.length + e & 1)) c += '0';
      s = Math.sqrt(c);
      e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
      r = new Big((s == 1 / 0 ? '1e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    } else {
      r = new Big(s);
    }

    e = r.e + (Big.DP += 4);

    // Newton-Raphson iteration.
    do {
      t = r;
      r = half.times(t.plus(x.div(t)));
    } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));

    return round(r, Big.DP -= 4, Big.RM);
  };


  /*
   * Return a new Big whose value is the value of this Big times the value of Big y.
   */
  P.times = P.mul = function (y) {
    var c,
      x = this,
      Big = x.constructor,
      xc = x.c,
      yc = (y = new Big(y)).c,
      a = xc.length,
      b = yc.length,
      i = x.e,
      j = y.e;

    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;

    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0]) return new Big(y.s * 0);

    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;

    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
      c = xc;
      xc = yc;
      yc = c;
      j = a;
      a = b;
      b = j;
    }

    // Initialise coefficient array of result with zeros.
    for (c = new Array(j = a + b); j--;) c[j] = 0;

    // Multiply.

    // i is initially xc.length.
    for (i = b; i--;) {
      b = 0;

      // a is yc.length.
      for (j = a + i; j > i;) {

        // Current sum of products at this digit position, plus carry.
        b = c[j] + yc[i] * xc[j - i - 1] + b;
        c[j--] = b % 10;

        // carry
        b = b / 10 | 0;
      }

      c[j] = (c[j] + b) % 10;
    }

    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b) ++y.e;
    else c.shift();

    // Remove trailing zeros.
    for (i = c.length; !c[--i];) c.pop();
    y.c = c;

    return y;
  };


  /*
   * Return a string representing the value of this Big in exponential notation to dp fixed decimal
   * places and rounded using Big.RM.
   *
   * dp? {number} Integer, 0 to MAX_DP inclusive.
   */
  P.toExponential = function (dp) {
    return stringify(this, 1, dp, dp);
  };


  /*
   * Return a string representing the value of this Big in normal notation to dp fixed decimal
   * places and rounded using Big.RM.
   *
   * dp? {number} Integer, 0 to MAX_DP inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   */
  P.toFixed = function (dp) {
    return stringify(this, 2, dp, this.e + dp);
  };


  /*
   * Return a string representing the value of this Big rounded to sd significant digits using
   * Big.RM. Use exponential notation if sd is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * sd {number} Integer, 1 to MAX_DP inclusive.
   */
  P.toPrecision = function (sd) {
    return stringify(this, 3, sd, sd - 1);
  };


  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Omit the sign for negative zero.
   */
  P.toString = function () {
    return stringify(this);
  };


  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Include the sign for negative zero.
   */
  P.valueOf = P.toJSON = function () {
    return stringify(this, 4);
  };


  // Export


  Big = _Big_();

  Big['default'] = Big.Big = Big;

  //AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return Big; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node and other CommonJS-like environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rawToMega = exports.megaToRaw = void 0;

var _big = _interopRequireDefault(__webpack_require__(/*! big.js */ "./node_modules/big.js/big.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configure Big to never show exponential notation.
_big.default.NE = -31;
_big.default.PE = 39;
/** The amount of raw in one mega. */

var RAW_IN_MEGA = new _big.default('1000000000000000000000000000000');
/** The amount of mega in one raw. */

var MEGA_IN_RAW = new _big.default('.000000000000000000000000000001');
/** The minimum raw amount. */

var RAW_MIN_AMOUNT = new _big.default('1');
/** The maximum raw amount. */

var RAW_MAX_AMOUNT = new _big.default('340282366920938463463374607431768211455');
/** The minimum mega amount. */

var MEGA_MIN_AMOUNT = MEGA_IN_RAW;
/** The maximum mega amount. */

var MEGA_MAX_AMOUNT = new _big.default(RAW_MAX_AMOUNT).times(MEGA_IN_RAW);
/**
 * Converts mega amount to raw amount.
 * @param {Number|String} mega The mega amount.
 * @throws {Error} The mega amount must be defined.
 * @throws {TypeError} The mega amount must be a string or a number.
 * @throws {Error} The mega amount is invalid.
 * @throws {Error} The mega amount must not be negative.
 * @throws {Error} The mega amount is too small.
 * @throws {Error} The mega amount is too large.
 * @returns {String} The raw amount.
 */

var megaToRaw = function megaToRaw(mega) {
  if (mega === undefined) {
    throw Error('The mega amount must be defined.');
  }

  if (typeof mega !== 'string' && typeof mega !== 'number') {
    throw TypeError('The mega amount must be a string or a number.');
  }

  var megaBig;

  try {
    megaBig = new _big.default(mega);
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
};
/**
 * Converts raw amount to mega amount.
 * @param {Number|String} raw The raw amount.
 * @throws {Error} The raw amount must be defined.
 * @throws {TypeError} The raw amount must be a string or a number.
 * @throws {Error} The raw amount is invalid.
 * @throws {Error} The raw amount must not be negative.
 * @throws {Error} The raw amount is too small.
 * @throws {Error} The raw amount is too large.
 * @returns {String} The mega amount.
 */


exports.megaToRaw = megaToRaw;

var rawToMega = function rawToMega(raw) {
  if (raw === undefined) {
    throw Error('The raw amount must be defined.');
  }

  if (typeof raw !== 'string' && typeof raw !== 'number') {
    throw TypeError('The raw amount must be a string or a number.');
  }

  var rawBig;

  try {
    rawBig = new _big.default(raw);
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
};

exports.rawToMega = rawToMega;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW5vLXVuaXQtY29udmVydGVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uYW5vLXVuaXQtY29udmVydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25hbm8tdW5pdC1jb252ZXJ0ZXIvLi9ub2RlX21vZHVsZXMvYmlnLmpzL2JpZy5qcyIsIndlYnBhY2s6Ly9uYW5vLXVuaXQtY29udmVydGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5FIiwiUEUiLCJSQVdfSU5fTUVHQSIsIk1FR0FfSU5fUkFXIiwiUkFXX01JTl9BTU9VTlQiLCJSQVdfTUFYX0FNT1VOVCIsIk1FR0FfTUlOX0FNT1VOVCIsIk1FR0FfTUFYX0FNT1VOVCIsInRpbWVzIiwibWVnYVRvUmF3IiwibWVnYSIsInVuZGVmaW5lZCIsIkVycm9yIiwiVHlwZUVycm9yIiwibWVnYUJpZyIsImVycm9yIiwibHQiLCJndCIsInRvU3RyaW5nIiwicmF3VG9NZWdhIiwicmF3IiwicmF3QmlnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJB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QUFDTCxFQUFQLENBQVVaLGNBQVYsQ0FBSixFQUErQjtBQUM5QixVQUFNUSxLQUFLLENBQUMsOEJBQUQsQ0FBWDtBQUNBOztBQUVELE1BQUlTLE1BQU0sQ0FBQ0osRUFBUCxDQUFVWixjQUFWLENBQUosRUFBK0I7QUFDOUIsVUFBTU8sS0FBSyxDQUFDLDhCQUFELENBQVg7QUFDQTs7QUFFRCxTQUFPUyxNQUFNLENBQUNiLEtBQVAsQ0FBYUwsV0FBYixFQUEwQmUsUUFBMUIsRUFBUDtBQUNBLENBOUJNIiwiZmlsZSI6Im5hbm8tdW5pdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm5hbm8tdW5pdC1jb252ZXJ0ZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmFuby11bml0LWNvbnZlcnRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuYW5vLXVuaXQtY29udmVydGVyXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLypcclxuICogIGJpZy5qcyB2NS4yLjJcclxuICogIEEgc21hbGwsIGZhc3QsIGVhc3ktdG8tdXNlIGxpYnJhcnkgZm9yIGFyYml0cmFyeS1wcmVjaXNpb24gZGVjaW1hbCBhcml0aG1ldGljLlxyXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE4IE1pY2hhZWwgTWNsYXVnaGxpbiA8TThjaDg4bEBnbWFpbC5jb20+XHJcbiAqICBodHRwczovL2dpdGh1Yi5jb20vTWlrZU1jbC9iaWcuanMvTElDRU5DRVxyXG4gKi9cclxuOyhmdW5jdGlvbiAoR0xPQkFMKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciBCaWcsXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEVESVRBQkxFIERFRkFVTFRTICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbiAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZXMgYmVsb3cgbXVzdCBiZSBpbnRlZ2VycyB3aXRoaW4gdGhlIHN0YXRlZCByYW5nZXMuXHJcblxyXG4gICAgLypcclxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyAoRFApIG9mIHRoZSByZXN1bHRzIG9mIG9wZXJhdGlvbnMgaW52b2x2aW5nIGRpdmlzaW9uOlxyXG4gICAgICogZGl2IGFuZCBzcXJ0LCBhbmQgcG93IHdpdGggbmVnYXRpdmUgZXhwb25lbnRzLlxyXG4gICAgICovXHJcbiAgICBEUCA9IDIwLCAgICAgICAgICAvLyAwIHRvIE1BWF9EUFxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBUaGUgcm91bmRpbmcgbW9kZSAoUk0pIHVzZWQgd2hlbiByb3VuZGluZyB0byB0aGUgYWJvdmUgZGVjaW1hbCBwbGFjZXMuXHJcbiAgICAgKlxyXG4gICAgICogIDAgIFRvd2FyZHMgemVybyAoaS5lLiB0cnVuY2F0ZSwgbm8gcm91bmRpbmcpLiAgICAgICAoUk9VTkRfRE9XTilcclxuICAgICAqICAxICBUbyBuZWFyZXN0IG5laWdoYm91ci4gSWYgZXF1aWRpc3RhbnQsIHJvdW5kIHVwLiAgKFJPVU5EX0hBTEZfVVApXHJcbiAgICAgKiAgMiAgVG8gbmVhcmVzdCBuZWlnaGJvdXIuIElmIGVxdWlkaXN0YW50LCB0byBldmVuLiAgIChST1VORF9IQUxGX0VWRU4pXHJcbiAgICAgKiAgMyAgQXdheSBmcm9tIHplcm8uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChST1VORF9VUClcclxuICAgICAqL1xyXG4gICAgUk0gPSAxLCAgICAgICAgICAgICAvLyAwLCAxLCAyIG9yIDNcclxuXHJcbiAgICAvLyBUaGUgbWF4aW11bSB2YWx1ZSBvZiBEUCBhbmQgQmlnLkRQLlxyXG4gICAgTUFYX0RQID0gMUU2LCAgICAgICAvLyAwIHRvIDEwMDAwMDBcclxuXHJcbiAgICAvLyBUaGUgbWF4aW11bSBtYWduaXR1ZGUgb2YgdGhlIGV4cG9uZW50IGFyZ3VtZW50IHRvIHRoZSBwb3cgbWV0aG9kLlxyXG4gICAgTUFYX1BPV0VSID0gMUU2LCAgICAvLyAxIHRvIDEwMDAwMDBcclxuXHJcbiAgICAvKlxyXG4gICAgICogVGhlIG5lZ2F0aXZlIGV4cG9uZW50IChORSkgYXQgYW5kIGJlbmVhdGggd2hpY2ggdG9TdHJpbmcgcmV0dXJucyBleHBvbmVudGlhbCBub3RhdGlvbi5cclxuICAgICAqIChKYXZhU2NyaXB0IG51bWJlcnM6IC03KVxyXG4gICAgICogLTEwMDAwMDAgaXMgdGhlIG1pbmltdW0gcmVjb21tZW5kZWQgZXhwb25lbnQgdmFsdWUgb2YgYSBCaWcuXHJcbiAgICAgKi9cclxuICAgIE5FID0gLTcsICAgICAgICAgICAgLy8gMCB0byAtMTAwMDAwMFxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBUaGUgcG9zaXRpdmUgZXhwb25lbnQgKFBFKSBhdCBhbmQgYWJvdmUgd2hpY2ggdG9TdHJpbmcgcmV0dXJucyBleHBvbmVudGlhbCBub3RhdGlvbi5cclxuICAgICAqIChKYXZhU2NyaXB0IG51bWJlcnM6IDIxKVxyXG4gICAgICogMTAwMDAwMCBpcyB0aGUgbWF4aW11bSByZWNvbW1lbmRlZCBleHBvbmVudCB2YWx1ZSBvZiBhIEJpZy5cclxuICAgICAqIChUaGlzIGxpbWl0IGlzIG5vdCBlbmZvcmNlZCBvciBjaGVja2VkLilcclxuICAgICAqL1xyXG4gICAgUEUgPSAyMSwgICAgICAgICAgICAvLyAwIHRvIDEwMDAwMDBcclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuICAgIC8vIEVycm9yIG1lc3NhZ2VzLlxyXG4gICAgTkFNRSA9ICdbYmlnLmpzXSAnLFxyXG4gICAgSU5WQUxJRCA9IE5BTUUgKyAnSW52YWxpZCAnLFxyXG4gICAgSU5WQUxJRF9EUCA9IElOVkFMSUQgKyAnZGVjaW1hbCBwbGFjZXMnLFxyXG4gICAgSU5WQUxJRF9STSA9IElOVkFMSUQgKyAncm91bmRpbmcgbW9kZScsXHJcbiAgICBESVZfQllfWkVSTyA9IE5BTUUgKyAnRGl2aXNpb24gYnkgemVybycsXHJcblxyXG4gICAgLy8gVGhlIHNoYXJlZCBwcm90b3R5cGUgb2JqZWN0LlxyXG4gICAgUCA9IHt9LFxyXG4gICAgVU5ERUZJTkVEID0gdm9pZCAwLFxyXG4gICAgTlVNRVJJQyA9IC9eLT8oXFxkKyhcXC5cXGQqKT98XFwuXFxkKykoZVsrLV0/XFxkKyk/JC9pO1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBDcmVhdGUgYW5kIHJldHVybiBhIEJpZyBjb25zdHJ1Y3Rvci5cclxuICAgKlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIF9CaWdfKCkge1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBUaGUgQmlnIGNvbnN0cnVjdG9yIGFuZCBleHBvcnRlZCBmdW5jdGlvbi5cclxuICAgICAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IGluc3RhbmNlIG9mIGEgQmlnIG51bWJlciBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogbiB7bnVtYmVyfHN0cmluZ3xCaWd9IEEgbnVtZXJpYyB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQmlnKG4pIHtcclxuICAgICAgdmFyIHggPSB0aGlzO1xyXG5cclxuICAgICAgLy8gRW5hYmxlIGNvbnN0cnVjdG9yIHVzYWdlIHdpdGhvdXQgbmV3LlxyXG4gICAgICBpZiAoISh4IGluc3RhbmNlb2YgQmlnKSkgcmV0dXJuIG4gPT09IFVOREVGSU5FRCA/IF9CaWdfKCkgOiBuZXcgQmlnKG4pO1xyXG5cclxuICAgICAgLy8gRHVwbGljYXRlLlxyXG4gICAgICBpZiAobiBpbnN0YW5jZW9mIEJpZykge1xyXG4gICAgICAgIHgucyA9IG4ucztcclxuICAgICAgICB4LmUgPSBuLmU7XHJcbiAgICAgICAgeC5jID0gbi5jLnNsaWNlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyc2UoeCwgbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qXHJcbiAgICAgICAqIFJldGFpbiBhIHJlZmVyZW5jZSB0byB0aGlzIEJpZyBjb25zdHJ1Y3RvciwgYW5kIHNoYWRvdyBCaWcucHJvdG90eXBlLmNvbnN0cnVjdG9yIHdoaWNoXHJcbiAgICAgICAqIHBvaW50cyB0byBPYmplY3QuXHJcbiAgICAgICAqL1xyXG4gICAgICB4LmNvbnN0cnVjdG9yID0gQmlnO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZy5wcm90b3R5cGUgPSBQO1xyXG4gICAgQmlnLkRQID0gRFA7XHJcbiAgICBCaWcuUk0gPSBSTTtcclxuICAgIEJpZy5ORSA9IE5FO1xyXG4gICAgQmlnLlBFID0gUEU7XHJcbiAgICBCaWcudmVyc2lvbiA9ICc1LjIuMic7XHJcblxyXG4gICAgcmV0dXJuIEJpZztcclxuICB9XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFBhcnNlIHRoZSBudW1iZXIgb3Igc3RyaW5nIHZhbHVlIHBhc3NlZCB0byBhIEJpZyBjb25zdHJ1Y3Rvci5cclxuICAgKlxyXG4gICAqIHgge0JpZ30gQSBCaWcgbnVtYmVyIGluc3RhbmNlLlxyXG4gICAqIG4ge251bWJlcnxzdHJpbmd9IEEgbnVtZXJpYyB2YWx1ZS5cclxuICAgKi9cclxuICBmdW5jdGlvbiBwYXJzZSh4LCBuKSB7XHJcbiAgICB2YXIgZSwgaSwgbmw7XHJcblxyXG4gICAgLy8gTWludXMgemVybz9cclxuICAgIGlmIChuID09PSAwICYmIDEgLyBuIDwgMCkgbiA9ICctMCc7XHJcbiAgICBlbHNlIGlmICghTlVNRVJJQy50ZXN0KG4gKz0gJycpKSB0aHJvdyBFcnJvcihJTlZBTElEICsgJ251bWJlcicpO1xyXG5cclxuICAgIC8vIERldGVybWluZSBzaWduLlxyXG4gICAgeC5zID0gbi5jaGFyQXQoMCkgPT0gJy0nID8gKG4gPSBuLnNsaWNlKDEpLCAtMSkgOiAxO1xyXG5cclxuICAgIC8vIERlY2ltYWwgcG9pbnQ/XHJcbiAgICBpZiAoKGUgPSBuLmluZGV4T2YoJy4nKSkgPiAtMSkgbiA9IG4ucmVwbGFjZSgnLicsICcnKTtcclxuXHJcbiAgICAvLyBFeHBvbmVudGlhbCBmb3JtP1xyXG4gICAgaWYgKChpID0gbi5zZWFyY2goL2UvaSkpID4gMCkge1xyXG5cclxuICAgICAgLy8gRGV0ZXJtaW5lIGV4cG9uZW50LlxyXG4gICAgICBpZiAoZSA8IDApIGUgPSBpO1xyXG4gICAgICBlICs9ICtuLnNsaWNlKGkgKyAxKTtcclxuICAgICAgbiA9IG4uc3Vic3RyaW5nKDAsIGkpO1xyXG4gICAgfSBlbHNlIGlmIChlIDwgMCkge1xyXG5cclxuICAgICAgLy8gSW50ZWdlci5cclxuICAgICAgZSA9IG4ubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIG5sID0gbi5sZW5ndGg7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGxlYWRpbmcgemVyb3MuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgbmwgJiYgbi5jaGFyQXQoaSkgPT0gJzAnOykgKytpO1xyXG5cclxuICAgIGlmIChpID09IG5sKSB7XHJcblxyXG4gICAgICAvLyBaZXJvLlxyXG4gICAgICB4LmMgPSBbeC5lID0gMF07XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgLy8gRGV0ZXJtaW5lIHRyYWlsaW5nIHplcm9zLlxyXG4gICAgICBmb3IgKDsgbmwgPiAwICYmIG4uY2hhckF0KC0tbmwpID09ICcwJzspO1xyXG4gICAgICB4LmUgPSBlIC0gaSAtIDE7XHJcbiAgICAgIHguYyA9IFtdO1xyXG5cclxuICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gYXJyYXkgb2YgZGlnaXRzIHdpdGhvdXQgbGVhZGluZy90cmFpbGluZyB6ZXJvcy5cclxuICAgICAgZm9yIChlID0gMDsgaSA8PSBubDspIHguY1tlKytdID0gK24uY2hhckF0KGkrKyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLypcclxuICAgKiBSb3VuZCBCaWcgeCB0byBhIG1heGltdW0gb2YgZHAgZGVjaW1hbCBwbGFjZXMgdXNpbmcgcm91bmRpbmcgbW9kZSBybS5cclxuICAgKiBDYWxsZWQgYnkgc3RyaW5naWZ5LCBQLmRpdiwgUC5yb3VuZCBhbmQgUC5zcXJ0LlxyXG4gICAqXHJcbiAgICogeCB7QmlnfSBUaGUgQmlnIHRvIHJvdW5kLlxyXG4gICAqIGRwIHtudW1iZXJ9IEludGVnZXIsIDAgdG8gTUFYX0RQIGluY2x1c2l2ZS5cclxuICAgKiBybSB7bnVtYmVyfSAwLCAxLCAyIG9yIDMgKERPV04sIEhBTEZfVVAsIEhBTEZfRVZFTiwgVVApXHJcbiAgICogW21vcmVdIHtib29sZWFufSBXaGV0aGVyIHRoZSByZXN1bHQgb2YgZGl2aXNpb24gd2FzIHRydW5jYXRlZC5cclxuICAgKi9cclxuICBmdW5jdGlvbiByb3VuZCh4LCBkcCwgcm0sIG1vcmUpIHtcclxuICAgIHZhciB4YyA9IHguYyxcclxuICAgICAgaSA9IHguZSArIGRwICsgMTtcclxuXHJcbiAgICBpZiAoaSA8IHhjLmxlbmd0aCkge1xyXG4gICAgICBpZiAocm0gPT09IDEpIHtcclxuXHJcbiAgICAgICAgLy8geGNbaV0gaXMgdGhlIGRpZ2l0IGFmdGVyIHRoZSBkaWdpdCB0aGF0IG1heSBiZSByb3VuZGVkIHVwLlxyXG4gICAgICAgIG1vcmUgPSB4Y1tpXSA+PSA1O1xyXG4gICAgICB9IGVsc2UgaWYgKHJtID09PSAyKSB7XHJcbiAgICAgICAgbW9yZSA9IHhjW2ldID4gNSB8fCB4Y1tpXSA9PSA1ICYmXHJcbiAgICAgICAgICAobW9yZSB8fCBpIDwgMCB8fCB4Y1tpICsgMV0gIT09IFVOREVGSU5FRCB8fCB4Y1tpIC0gMV0gJiAxKTtcclxuICAgICAgfSBlbHNlIGlmIChybSA9PT0gMykge1xyXG4gICAgICAgIG1vcmUgPSBtb3JlIHx8ICEheGNbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9yZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChybSAhPT0gMCkgdGhyb3cgRXJyb3IoSU5WQUxJRF9STSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpIDwgMSkge1xyXG4gICAgICAgIHhjLmxlbmd0aCA9IDE7XHJcblxyXG4gICAgICAgIGlmIChtb3JlKSB7XHJcblxyXG4gICAgICAgICAgLy8gMSwgMC4xLCAwLjAxLCAwLjAwMSwgMC4wMDAxIGV0Yy5cclxuICAgICAgICAgIHguZSA9IC1kcDtcclxuICAgICAgICAgIHhjWzBdID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgIC8vIFplcm8uXHJcbiAgICAgICAgICB4Y1swXSA9IHguZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgYW55IGRpZ2l0cyBhZnRlciB0aGUgcmVxdWlyZWQgZGVjaW1hbCBwbGFjZXMuXHJcbiAgICAgICAgeGMubGVuZ3RoID0gaS0tO1xyXG5cclxuICAgICAgICAvLyBSb3VuZCB1cD9cclxuICAgICAgICBpZiAobW9yZSkge1xyXG5cclxuICAgICAgICAgIC8vIFJvdW5kaW5nIHVwIG1heSBtZWFuIHRoZSBwcmV2aW91cyBkaWdpdCBoYXMgdG8gYmUgcm91bmRlZCB1cC5cclxuICAgICAgICAgIGZvciAoOyArK3hjW2ldID4gOTspIHtcclxuICAgICAgICAgICAgeGNbaV0gPSAwO1xyXG4gICAgICAgICAgICBpZiAoIWktLSkge1xyXG4gICAgICAgICAgICAgICsreC5lO1xyXG4gICAgICAgICAgICAgIHhjLnVuc2hpZnQoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSB0cmFpbGluZyB6ZXJvcy5cclxuICAgICAgICBmb3IgKGkgPSB4Yy5sZW5ndGg7ICF4Y1stLWldOykgeGMucG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocm0gPCAwIHx8IHJtID4gMyB8fCBybSAhPT0gfn5ybSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihJTlZBTElEX1JNKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geDtcclxuICB9XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHZhbHVlIG9mIEJpZyB4IGluIG5vcm1hbCBvciBleHBvbmVudGlhbCBub3RhdGlvbi5cclxuICAgKiBIYW5kbGVzIFAudG9FeHBvbmVudGlhbCwgUC50b0ZpeGVkLCBQLnRvSlNPTiwgUC50b1ByZWNpc2lvbiwgUC50b1N0cmluZyBhbmQgUC52YWx1ZU9mLlxyXG4gICAqXHJcbiAgICogeCB7QmlnfVxyXG4gICAqIGlkPyB7bnVtYmVyfSBDYWxsZXIgaWQuXHJcbiAgICogICAgICAgICAxIHRvRXhwb25lbnRpYWxcclxuICAgKiAgICAgICAgIDIgdG9GaXhlZFxyXG4gICAqICAgICAgICAgMyB0b1ByZWNpc2lvblxyXG4gICAqICAgICAgICAgNCB2YWx1ZU9mXHJcbiAgICogbj8ge251bWJlcnx1bmRlZmluZWR9IENhbGxlcidzIGFyZ3VtZW50LlxyXG4gICAqIGs/IHtudW1iZXJ8dW5kZWZpbmVkfVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeSh4LCBpZCwgbiwgaykge1xyXG4gICAgdmFyIGUsIHMsXHJcbiAgICAgIEJpZyA9IHguY29uc3RydWN0b3IsXHJcbiAgICAgIHogPSAheC5jWzBdO1xyXG5cclxuICAgIGlmIChuICE9PSBVTkRFRklORUQpIHtcclxuICAgICAgaWYgKG4gIT09IH5+biB8fCBuIDwgKGlkID09IDMpIHx8IG4gPiBNQVhfRFApIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihpZCA9PSAzID8gSU5WQUxJRCArICdwcmVjaXNpb24nIDogSU5WQUxJRF9EUCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHggPSBuZXcgQmlnKHgpO1xyXG5cclxuICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBkaWdpdCB0aGF0IG1heSBiZSByb3VuZGVkIHVwLlxyXG4gICAgICBuID0gayAtIHguZTtcclxuXHJcbiAgICAgIC8vIFJvdW5kP1xyXG4gICAgICBpZiAoeC5jLmxlbmd0aCA+ICsraykgcm91bmQoeCwgbiwgQmlnLlJNKTtcclxuXHJcbiAgICAgIC8vIHRvRml4ZWQ6IHJlY2FsY3VsYXRlIGsgYXMgeC5lIG1heSBoYXZlIGNoYW5nZWQgaWYgdmFsdWUgcm91bmRlZCB1cC5cclxuICAgICAgaWYgKGlkID09IDIpIGsgPSB4LmUgKyBuICsgMTtcclxuXHJcbiAgICAgIC8vIEFwcGVuZCB6ZXJvcz9cclxuICAgICAgZm9yICg7IHguYy5sZW5ndGggPCBrOykgeC5jLnB1c2goMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZSA9IHguZTtcclxuICAgIHMgPSB4LmMuam9pbignJyk7XHJcbiAgICBuID0gcy5sZW5ndGg7XHJcblxyXG4gICAgLy8gRXhwb25lbnRpYWwgbm90YXRpb24/XHJcbiAgICBpZiAoaWQgIT0gMiAmJiAoaWQgPT0gMSB8fCBpZCA9PSAzICYmIGsgPD0gZSB8fCBlIDw9IEJpZy5ORSB8fCBlID49IEJpZy5QRSkpIHtcclxuICAgICAgcyA9IHMuY2hhckF0KDApICsgKG4gPiAxID8gJy4nICsgcy5zbGljZSgxKSA6ICcnKSArIChlIDwgMCA/ICdlJyA6ICdlKycpICsgZTtcclxuXHJcbiAgICAvLyBOb3JtYWwgbm90YXRpb24uXHJcbiAgICB9IGVsc2UgaWYgKGUgPCAwKSB7XHJcbiAgICAgIGZvciAoOyArK2U7KSBzID0gJzAnICsgcztcclxuICAgICAgcyA9ICcwLicgKyBzO1xyXG4gICAgfSBlbHNlIGlmIChlID4gMCkge1xyXG4gICAgICBpZiAoKytlID4gbikgZm9yIChlIC09IG47IGUtLTspIHMgKz0gJzAnO1xyXG4gICAgICBlbHNlIGlmIChlIDwgbikgcyA9IHMuc2xpY2UoMCwgZSkgKyAnLicgKyBzLnNsaWNlKGUpO1xyXG4gICAgfSBlbHNlIGlmIChuID4gMSkge1xyXG4gICAgICBzID0gcy5jaGFyQXQoMCkgKyAnLicgKyBzLnNsaWNlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB4LnMgPCAwICYmICgheiB8fCBpZCA9PSA0KSA/ICctJyArIHMgOiBzO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIFByb3RvdHlwZS9pbnN0YW5jZSBtZXRob2RzXHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBCaWcgd2hvc2UgdmFsdWUgaXMgdGhlIGFic29sdXRlIHZhbHVlIG9mIHRoaXMgQmlnLlxyXG4gICAqL1xyXG4gIFAuYWJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHggPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKTtcclxuICAgIHgucyA9IDE7XHJcbiAgICByZXR1cm4geDtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gMSBpZiB0aGUgdmFsdWUgb2YgdGhpcyBCaWcgaXMgZ3JlYXRlciB0aGFuIHRoZSB2YWx1ZSBvZiBCaWcgeSxcclxuICAgKiAgICAgICAtMSBpZiB0aGUgdmFsdWUgb2YgdGhpcyBCaWcgaXMgbGVzcyB0aGFuIHRoZSB2YWx1ZSBvZiBCaWcgeSwgb3JcclxuICAgKiAgICAgICAgMCBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgdmFsdWUuXHJcbiAgKi9cclxuICBQLmNtcCA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICB2YXIgaXNuZWcsXHJcbiAgICAgIHggPSB0aGlzLFxyXG4gICAgICB4YyA9IHguYyxcclxuICAgICAgeWMgPSAoeSA9IG5ldyB4LmNvbnN0cnVjdG9yKHkpKS5jLFxyXG4gICAgICBpID0geC5zLFxyXG4gICAgICBqID0geS5zLFxyXG4gICAgICBrID0geC5lLFxyXG4gICAgICBsID0geS5lO1xyXG5cclxuICAgIC8vIEVpdGhlciB6ZXJvP1xyXG4gICAgaWYgKCF4Y1swXSB8fCAheWNbMF0pIHJldHVybiAheGNbMF0gPyAheWNbMF0gPyAwIDogLWogOiBpO1xyXG5cclxuICAgIC8vIFNpZ25zIGRpZmZlcj9cclxuICAgIGlmIChpICE9IGopIHJldHVybiBpO1xyXG5cclxuICAgIGlzbmVnID0gaSA8IDA7XHJcblxyXG4gICAgLy8gQ29tcGFyZSBleHBvbmVudHMuXHJcbiAgICBpZiAoayAhPSBsKSByZXR1cm4gayA+IGwgXiBpc25lZyA/IDEgOiAtMTtcclxuXHJcbiAgICBqID0gKGsgPSB4Yy5sZW5ndGgpIDwgKGwgPSB5Yy5sZW5ndGgpID8gayA6IGw7XHJcblxyXG4gICAgLy8gQ29tcGFyZSBkaWdpdCBieSBkaWdpdC5cclxuICAgIGZvciAoaSA9IC0xOyArK2kgPCBqOykge1xyXG4gICAgICBpZiAoeGNbaV0gIT0geWNbaV0pIHJldHVybiB4Y1tpXSA+IHljW2ldIF4gaXNuZWcgPyAxIDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29tcGFyZSBsZW5ndGhzLlxyXG4gICAgcmV0dXJuIGsgPT0gbCA/IDAgOiBrID4gbCBeIGlzbmVnID8gMSA6IC0xO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBCaWcgd2hvc2UgdmFsdWUgaXMgdGhlIHZhbHVlIG9mIHRoaXMgQmlnIGRpdmlkZWQgYnkgdGhlIHZhbHVlIG9mIEJpZyB5LCByb3VuZGVkLFxyXG4gICAqIGlmIG5lY2Vzc2FyeSwgdG8gYSBtYXhpbXVtIG9mIEJpZy5EUCBkZWNpbWFsIHBsYWNlcyB1c2luZyByb3VuZGluZyBtb2RlIEJpZy5STS5cclxuICAgKi9cclxuICBQLmRpdiA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICB2YXIgeCA9IHRoaXMsXHJcbiAgICAgIEJpZyA9IHguY29uc3RydWN0b3IsXHJcbiAgICAgIGEgPSB4LmMsICAgICAgICAgICAgICAgICAgLy8gZGl2aWRlbmRcclxuICAgICAgYiA9ICh5ID0gbmV3IEJpZyh5KSkuYywgICAvLyBkaXZpc29yXHJcbiAgICAgIGsgPSB4LnMgPT0geS5zID8gMSA6IC0xLFxyXG4gICAgICBkcCA9IEJpZy5EUDtcclxuXHJcbiAgICBpZiAoZHAgIT09IH5+ZHAgfHwgZHAgPCAwIHx8IGRwID4gTUFYX0RQKSB0aHJvdyBFcnJvcihJTlZBTElEX0RQKTtcclxuXHJcbiAgICAvLyBEaXZpc29yIGlzIHplcm8/XHJcbiAgICBpZiAoIWJbMF0pIHRocm93IEVycm9yKERJVl9CWV9aRVJPKTtcclxuXHJcbiAgICAvLyBEaXZpZGVuZCBpcyAwPyBSZXR1cm4gKy0wLlxyXG4gICAgaWYgKCFhWzBdKSByZXR1cm4gbmV3IEJpZyhrICogMCk7XHJcblxyXG4gICAgdmFyIGJsLCBidCwgbiwgY21wLCByaSxcclxuICAgICAgYnogPSBiLnNsaWNlKCksXHJcbiAgICAgIGFpID0gYmwgPSBiLmxlbmd0aCxcclxuICAgICAgYWwgPSBhLmxlbmd0aCxcclxuICAgICAgciA9IGEuc2xpY2UoMCwgYmwpLCAgIC8vIHJlbWFpbmRlclxyXG4gICAgICBybCA9IHIubGVuZ3RoLFxyXG4gICAgICBxID0geSwgICAgICAgICAgICAgICAgLy8gcXVvdGllbnRcclxuICAgICAgcWMgPSBxLmMgPSBbXSxcclxuICAgICAgcWkgPSAwLFxyXG4gICAgICBkID0gZHAgKyAocS5lID0geC5lIC0geS5lKSArIDE7ICAgIC8vIG51bWJlciBvZiBkaWdpdHMgb2YgdGhlIHJlc3VsdFxyXG5cclxuICAgIHEucyA9IGs7XHJcbiAgICBrID0gZCA8IDAgPyAwIDogZDtcclxuXHJcbiAgICAvLyBDcmVhdGUgdmVyc2lvbiBvZiBkaXZpc29yIHdpdGggbGVhZGluZyB6ZXJvLlxyXG4gICAgYnoudW5zaGlmdCgwKTtcclxuXHJcbiAgICAvLyBBZGQgemVyb3MgdG8gbWFrZSByZW1haW5kZXIgYXMgbG9uZyBhcyBkaXZpc29yLlxyXG4gICAgZm9yICg7IHJsKysgPCBibDspIHIucHVzaCgwKTtcclxuXHJcbiAgICBkbyB7XHJcblxyXG4gICAgICAvLyBuIGlzIGhvdyBtYW55IHRpbWVzIHRoZSBkaXZpc29yIGdvZXMgaW50byBjdXJyZW50IHJlbWFpbmRlci5cclxuICAgICAgZm9yIChuID0gMDsgbiA8IDEwOyBuKyspIHtcclxuXHJcbiAgICAgICAgLy8gQ29tcGFyZSBkaXZpc29yIGFuZCByZW1haW5kZXIuXHJcbiAgICAgICAgaWYgKGJsICE9IChybCA9IHIubGVuZ3RoKSkge1xyXG4gICAgICAgICAgY21wID0gYmwgPiBybCA/IDEgOiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9yIChyaSA9IC0xLCBjbXAgPSAwOyArK3JpIDwgYmw7KSB7XHJcbiAgICAgICAgICAgIGlmIChiW3JpXSAhPSByW3JpXSkge1xyXG4gICAgICAgICAgICAgIGNtcCA9IGJbcmldID4gcltyaV0gPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGRpdmlzb3IgPCByZW1haW5kZXIsIHN1YnRyYWN0IGRpdmlzb3IgZnJvbSByZW1haW5kZXIuXHJcbiAgICAgICAgaWYgKGNtcCA8IDApIHtcclxuXHJcbiAgICAgICAgICAvLyBSZW1haW5kZXIgY2FuJ3QgYmUgbW9yZSB0aGFuIDEgZGlnaXQgbG9uZ2VyIHRoYW4gZGl2aXNvci5cclxuICAgICAgICAgIC8vIEVxdWFsaXNlIGxlbmd0aHMgdXNpbmcgZGl2aXNvciB3aXRoIGV4dHJhIGxlYWRpbmcgemVybz9cclxuICAgICAgICAgIGZvciAoYnQgPSBybCA9PSBibCA/IGIgOiBiejsgcmw7KSB7XHJcbiAgICAgICAgICAgIGlmIChyWy0tcmxdIDwgYnRbcmxdKSB7XHJcbiAgICAgICAgICAgICAgcmkgPSBybDtcclxuICAgICAgICAgICAgICBmb3IgKDsgcmkgJiYgIXJbLS1yaV07KSByW3JpXSA9IDk7XHJcbiAgICAgICAgICAgICAgLS1yW3JpXTtcclxuICAgICAgICAgICAgICByW3JsXSArPSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByW3JsXSAtPSBidFtybF07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9yICg7ICFyWzBdOykgci5zaGlmdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFkZCB0aGUgZGlnaXQgbiB0byB0aGUgcmVzdWx0IGFycmF5LlxyXG4gICAgICBxY1txaSsrXSA9IGNtcCA/IG4gOiArK247XHJcblxyXG4gICAgICAvLyBVcGRhdGUgdGhlIHJlbWFpbmRlci5cclxuICAgICAgaWYgKHJbMF0gJiYgY21wKSByW3JsXSA9IGFbYWldIHx8IDA7XHJcbiAgICAgIGVsc2UgciA9IFthW2FpXV07XHJcblxyXG4gICAgfSB3aGlsZSAoKGFpKysgPCBhbCB8fCByWzBdICE9PSBVTkRFRklORUQpICYmIGstLSk7XHJcblxyXG4gICAgLy8gTGVhZGluZyB6ZXJvPyBEbyBub3QgcmVtb3ZlIGlmIHJlc3VsdCBpcyBzaW1wbHkgemVybyAocWkgPT0gMSkuXHJcbiAgICBpZiAoIXFjWzBdICYmIHFpICE9IDEpIHtcclxuXHJcbiAgICAgIC8vIFRoZXJlIGNhbid0IGJlIG1vcmUgdGhhbiBvbmUgemVyby5cclxuICAgICAgcWMuc2hpZnQoKTtcclxuICAgICAgcS5lLS07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUm91bmQ/XHJcbiAgICBpZiAocWkgPiBkKSByb3VuZChxLCBkcCwgQmlnLlJNLCByWzBdICE9PSBVTkRFRklORUQpO1xyXG5cclxuICAgIHJldHVybiBxO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBvZiB0aGlzIEJpZyBpcyBlcXVhbCB0byB0aGUgdmFsdWUgb2YgQmlnIHksIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXHJcbiAgICovXHJcbiAgUC5lcSA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICByZXR1cm4gIXRoaXMuY21wKHkpO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBvZiB0aGlzIEJpZyBpcyBncmVhdGVyIHRoYW4gdGhlIHZhbHVlIG9mIEJpZyB5LCBvdGhlcndpc2UgcmV0dXJuXHJcbiAgICogZmFsc2UuXHJcbiAgICovXHJcbiAgUC5ndCA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbXAoeSkgPiAwO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBvZiB0aGlzIEJpZyBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHZhbHVlIG9mIEJpZyB5LCBvdGhlcndpc2VcclxuICAgKiByZXR1cm4gZmFsc2UuXHJcbiAgICovXHJcbiAgUC5ndGUgPSBmdW5jdGlvbiAoeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY21wKHkpID4gLTE7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlIG9mIHRoaXMgQmlnIGlzIGxlc3MgdGhhbiB0aGUgdmFsdWUgb2YgQmlnIHksIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXHJcbiAgICovXHJcbiAgUC5sdCA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbXAoeSkgPCAwO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBvZiB0aGlzIEJpZyBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHZhbHVlIG9mIEJpZyB5LCBvdGhlcndpc2VcclxuICAgKiByZXR1cm4gZmFsc2UuXHJcbiAgICovXHJcbiAgUC5sdGUgPSBmdW5jdGlvbiAoeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY21wKHkpIDwgMTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBuZXcgQmlnIHdob3NlIHZhbHVlIGlzIHRoZSB2YWx1ZSBvZiB0aGlzIEJpZyBtaW51cyB0aGUgdmFsdWUgb2YgQmlnIHkuXHJcbiAgICovXHJcbiAgUC5taW51cyA9IFAuc3ViID0gZnVuY3Rpb24gKHkpIHtcclxuICAgIHZhciBpLCBqLCB0LCB4bHR5LFxyXG4gICAgICB4ID0gdGhpcyxcclxuICAgICAgQmlnID0geC5jb25zdHJ1Y3RvcixcclxuICAgICAgYSA9IHgucyxcclxuICAgICAgYiA9ICh5ID0gbmV3IEJpZyh5KSkucztcclxuXHJcbiAgICAvLyBTaWducyBkaWZmZXI/XHJcbiAgICBpZiAoYSAhPSBiKSB7XHJcbiAgICAgIHkucyA9IC1iO1xyXG4gICAgICByZXR1cm4geC5wbHVzKHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB4YyA9IHguYy5zbGljZSgpLFxyXG4gICAgICB4ZSA9IHguZSxcclxuICAgICAgeWMgPSB5LmMsXHJcbiAgICAgIHllID0geS5lO1xyXG5cclxuICAgIC8vIEVpdGhlciB6ZXJvP1xyXG4gICAgaWYgKCF4Y1swXSB8fCAheWNbMF0pIHtcclxuXHJcbiAgICAgIC8vIHkgaXMgbm9uLXplcm8/IHggaXMgbm9uLXplcm8/IE9yIGJvdGggYXJlIHplcm8uXHJcbiAgICAgIHJldHVybiB5Y1swXSA/ICh5LnMgPSAtYiwgeSkgOiBuZXcgQmlnKHhjWzBdID8geCA6IDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldGVybWluZSB3aGljaCBpcyB0aGUgYmlnZ2VyIG51bWJlci4gUHJlcGVuZCB6ZXJvcyB0byBlcXVhbGlzZSBleHBvbmVudHMuXHJcbiAgICBpZiAoYSA9IHhlIC0geWUpIHtcclxuXHJcbiAgICAgIGlmICh4bHR5ID0gYSA8IDApIHtcclxuICAgICAgICBhID0gLWE7XHJcbiAgICAgICAgdCA9IHhjO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHllID0geGU7XHJcbiAgICAgICAgdCA9IHljO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0LnJldmVyc2UoKTtcclxuICAgICAgZm9yIChiID0gYTsgYi0tOykgdC5wdXNoKDApO1xyXG4gICAgICB0LnJldmVyc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAvLyBFeHBvbmVudHMgZXF1YWwuIENoZWNrIGRpZ2l0IGJ5IGRpZ2l0LlxyXG4gICAgICBqID0gKCh4bHR5ID0geGMubGVuZ3RoIDwgeWMubGVuZ3RoKSA/IHhjIDogeWMpLmxlbmd0aDtcclxuXHJcbiAgICAgIGZvciAoYSA9IGIgPSAwOyBiIDwgajsgYisrKSB7XHJcbiAgICAgICAgaWYgKHhjW2JdICE9IHljW2JdKSB7XHJcbiAgICAgICAgICB4bHR5ID0geGNbYl0gPCB5Y1tiXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHggPCB5PyBQb2ludCB4YyB0byB0aGUgYXJyYXkgb2YgdGhlIGJpZ2dlciBudW1iZXIuXHJcbiAgICBpZiAoeGx0eSkge1xyXG4gICAgICB0ID0geGM7XHJcbiAgICAgIHhjID0geWM7XHJcbiAgICAgIHljID0gdDtcclxuICAgICAgeS5zID0gLXkucztcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogQXBwZW5kIHplcm9zIHRvIHhjIGlmIHNob3J0ZXIuIE5vIG5lZWQgdG8gYWRkIHplcm9zIHRvIHljIGlmIHNob3J0ZXIgYXMgc3VidHJhY3Rpb24gb25seVxyXG4gICAgICogbmVlZHMgdG8gc3RhcnQgYXQgeWMubGVuZ3RoLlxyXG4gICAgICovXHJcbiAgICBpZiAoKGIgPSAoaiA9IHljLmxlbmd0aCkgLSAoaSA9IHhjLmxlbmd0aCkpID4gMCkgZm9yICg7IGItLTspIHhjW2krK10gPSAwO1xyXG5cclxuICAgIC8vIFN1YnRyYWN0IHljIGZyb20geGMuXHJcbiAgICBmb3IgKGIgPSBpOyBqID4gYTspIHtcclxuICAgICAgaWYgKHhjWy0tal0gPCB5Y1tqXSkge1xyXG4gICAgICAgIGZvciAoaSA9IGo7IGkgJiYgIXhjWy0taV07KSB4Y1tpXSA9IDk7XHJcbiAgICAgICAgLS14Y1tpXTtcclxuICAgICAgICB4Y1tqXSArPSAxMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgeGNbal0gLT0geWNbal07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRyYWlsaW5nIHplcm9zLlxyXG4gICAgZm9yICg7IHhjWy0tYl0gPT09IDA7KSB4Yy5wb3AoKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgbGVhZGluZyB6ZXJvcyBhbmQgYWRqdXN0IGV4cG9uZW50IGFjY29yZGluZ2x5LlxyXG4gICAgZm9yICg7IHhjWzBdID09PSAwOykge1xyXG4gICAgICB4Yy5zaGlmdCgpO1xyXG4gICAgICAtLXllO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgheGNbMF0pIHtcclxuXHJcbiAgICAgIC8vIG4gLSBuID0gKzBcclxuICAgICAgeS5zID0gMTtcclxuXHJcbiAgICAgIC8vIFJlc3VsdCBtdXN0IGJlIHplcm8uXHJcbiAgICAgIHhjID0gW3llID0gMF07XHJcbiAgICB9XHJcblxyXG4gICAgeS5jID0geGM7XHJcbiAgICB5LmUgPSB5ZTtcclxuXHJcbiAgICByZXR1cm4geTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBuZXcgQmlnIHdob3NlIHZhbHVlIGlzIHRoZSB2YWx1ZSBvZiB0aGlzIEJpZyBtb2R1bG8gdGhlIHZhbHVlIG9mIEJpZyB5LlxyXG4gICAqL1xyXG4gIFAubW9kID0gZnVuY3Rpb24gKHkpIHtcclxuICAgIHZhciB5Z3R4LFxyXG4gICAgICB4ID0gdGhpcyxcclxuICAgICAgQmlnID0geC5jb25zdHJ1Y3RvcixcclxuICAgICAgYSA9IHgucyxcclxuICAgICAgYiA9ICh5ID0gbmV3IEJpZyh5KSkucztcclxuXHJcbiAgICBpZiAoIXkuY1swXSkgdGhyb3cgRXJyb3IoRElWX0JZX1pFUk8pO1xyXG5cclxuICAgIHgucyA9IHkucyA9IDE7XHJcbiAgICB5Z3R4ID0geS5jbXAoeCkgPT0gMTtcclxuICAgIHgucyA9IGE7XHJcbiAgICB5LnMgPSBiO1xyXG5cclxuICAgIGlmICh5Z3R4KSByZXR1cm4gbmV3IEJpZyh4KTtcclxuXHJcbiAgICBhID0gQmlnLkRQO1xyXG4gICAgYiA9IEJpZy5STTtcclxuICAgIEJpZy5EUCA9IEJpZy5STSA9IDA7XHJcbiAgICB4ID0geC5kaXYoeSk7XHJcbiAgICBCaWcuRFAgPSBhO1xyXG4gICAgQmlnLlJNID0gYjtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5taW51cyh4LnRpbWVzKHkpKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBuZXcgQmlnIHdob3NlIHZhbHVlIGlzIHRoZSB2YWx1ZSBvZiB0aGlzIEJpZyBwbHVzIHRoZSB2YWx1ZSBvZiBCaWcgeS5cclxuICAgKi9cclxuICBQLnBsdXMgPSBQLmFkZCA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICB2YXIgdCxcclxuICAgICAgeCA9IHRoaXMsXHJcbiAgICAgIEJpZyA9IHguY29uc3RydWN0b3IsXHJcbiAgICAgIGEgPSB4LnMsXHJcbiAgICAgIGIgPSAoeSA9IG5ldyBCaWcoeSkpLnM7XHJcblxyXG4gICAgLy8gU2lnbnMgZGlmZmVyP1xyXG4gICAgaWYgKGEgIT0gYikge1xyXG4gICAgICB5LnMgPSAtYjtcclxuICAgICAgcmV0dXJuIHgubWludXMoeSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHhlID0geC5lLFxyXG4gICAgICB4YyA9IHguYyxcclxuICAgICAgeWUgPSB5LmUsXHJcbiAgICAgIHljID0geS5jO1xyXG5cclxuICAgIC8vIEVpdGhlciB6ZXJvPyB5IGlzIG5vbi16ZXJvPyB4IGlzIG5vbi16ZXJvPyBPciBib3RoIGFyZSB6ZXJvLlxyXG4gICAgaWYgKCF4Y1swXSB8fCAheWNbMF0pIHJldHVybiB5Y1swXSA/IHkgOiBuZXcgQmlnKHhjWzBdID8geCA6IGEgKiAwKTtcclxuXHJcbiAgICB4YyA9IHhjLnNsaWNlKCk7XHJcblxyXG4gICAgLy8gUHJlcGVuZCB6ZXJvcyB0byBlcXVhbGlzZSBleHBvbmVudHMuXHJcbiAgICAvLyBOb3RlOiByZXZlcnNlIGZhc3RlciB0aGFuIHVuc2hpZnRzLlxyXG4gICAgaWYgKGEgPSB4ZSAtIHllKSB7XHJcbiAgICAgIGlmIChhID4gMCkge1xyXG4gICAgICAgIHllID0geGU7XHJcbiAgICAgICAgdCA9IHljO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGEgPSAtYTtcclxuICAgICAgICB0ID0geGM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHQucmV2ZXJzZSgpO1xyXG4gICAgICBmb3IgKDsgYS0tOykgdC5wdXNoKDApO1xyXG4gICAgICB0LnJldmVyc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQb2ludCB4YyB0byB0aGUgbG9uZ2VyIGFycmF5LlxyXG4gICAgaWYgKHhjLmxlbmd0aCAtIHljLmxlbmd0aCA8IDApIHtcclxuICAgICAgdCA9IHljO1xyXG4gICAgICB5YyA9IHhjO1xyXG4gICAgICB4YyA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYSA9IHljLmxlbmd0aDtcclxuXHJcbiAgICAvLyBPbmx5IHN0YXJ0IGFkZGluZyBhdCB5Yy5sZW5ndGggLSAxIGFzIHRoZSBmdXJ0aGVyIGRpZ2l0cyBvZiB4YyBjYW4gYmUgbGVmdCBhcyB0aGV5IGFyZS5cclxuICAgIGZvciAoYiA9IDA7IGE7IHhjW2FdICU9IDEwKSBiID0gKHhjWy0tYV0gPSB4Y1thXSArIHljW2FdICsgYikgLyAxMCB8IDA7XHJcblxyXG4gICAgLy8gTm8gbmVlZCB0byBjaGVjayBmb3IgemVybywgYXMgK3ggKyAreSAhPSAwICYmIC14ICsgLXkgIT0gMFxyXG5cclxuICAgIGlmIChiKSB7XHJcbiAgICAgIHhjLnVuc2hpZnQoYik7XHJcbiAgICAgICsreWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRyYWlsaW5nIHplcm9zLlxyXG4gICAgZm9yIChhID0geGMubGVuZ3RoOyB4Y1stLWFdID09PSAwOykgeGMucG9wKCk7XHJcblxyXG4gICAgeS5jID0geGM7XHJcbiAgICB5LmUgPSB5ZTtcclxuXHJcbiAgICByZXR1cm4geTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBCaWcgd2hvc2UgdmFsdWUgaXMgdGhlIHZhbHVlIG9mIHRoaXMgQmlnIHJhaXNlZCB0byB0aGUgcG93ZXIgbi5cclxuICAgKiBJZiBuIGlzIG5lZ2F0aXZlLCByb3VuZCB0byBhIG1heGltdW0gb2YgQmlnLkRQIGRlY2ltYWwgcGxhY2VzIHVzaW5nIHJvdW5kaW5nXHJcbiAgICogbW9kZSBCaWcuUk0uXHJcbiAgICpcclxuICAgKiBuIHtudW1iZXJ9IEludGVnZXIsIC1NQVhfUE9XRVIgdG8gTUFYX1BPV0VSIGluY2x1c2l2ZS5cclxuICAgKi9cclxuICBQLnBvdyA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICB2YXIgeCA9IHRoaXMsXHJcbiAgICAgIG9uZSA9IG5ldyB4LmNvbnN0cnVjdG9yKDEpLFxyXG4gICAgICB5ID0gb25lLFxyXG4gICAgICBpc25lZyA9IG4gPCAwO1xyXG5cclxuICAgIGlmIChuICE9PSB+fm4gfHwgbiA8IC1NQVhfUE9XRVIgfHwgbiA+IE1BWF9QT1dFUikgdGhyb3cgRXJyb3IoSU5WQUxJRCArICdleHBvbmVudCcpO1xyXG4gICAgaWYgKGlzbmVnKSBuID0gLW47XHJcblxyXG4gICAgZm9yICg7Oykge1xyXG4gICAgICBpZiAobiAmIDEpIHkgPSB5LnRpbWVzKHgpO1xyXG4gICAgICBuID4+PSAxO1xyXG4gICAgICBpZiAoIW4pIGJyZWFrO1xyXG4gICAgICB4ID0geC50aW1lcyh4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNuZWcgPyBvbmUuZGl2KHkpIDogeTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBuZXcgQmlnIHdob3NlIHZhbHVlIGlzIHRoZSB2YWx1ZSBvZiB0aGlzIEJpZyByb3VuZGVkIHVzaW5nIHJvdW5kaW5nIG1vZGUgcm1cclxuICAgKiB0byBhIG1heGltdW0gb2YgZHAgZGVjaW1hbCBwbGFjZXMsIG9yLCBpZiBkcCBpcyBuZWdhdGl2ZSwgdG8gYW4gaW50ZWdlciB3aGljaCBpcyBhXHJcbiAgICogbXVsdGlwbGUgb2YgMTAqKi1kcC5cclxuICAgKiBJZiBkcCBpcyBub3Qgc3BlY2lmaWVkLCByb3VuZCB0byAwIGRlY2ltYWwgcGxhY2VzLlxyXG4gICAqIElmIHJtIGlzIG5vdCBzcGVjaWZpZWQsIHVzZSBCaWcuUk0uXHJcbiAgICpcclxuICAgKiBkcD8ge251bWJlcn0gSW50ZWdlciwgLU1BWF9EUCB0byBNQVhfRFAgaW5jbHVzaXZlLlxyXG4gICAqIHJtPyAwLCAxLCAyIG9yIDMgKFJPVU5EX0RPV04sIFJPVU5EX0hBTEZfVVAsIFJPVU5EX0hBTEZfRVZFTiwgUk9VTkRfVVApXHJcbiAgICovXHJcbiAgUC5yb3VuZCA9IGZ1bmN0aW9uIChkcCwgcm0pIHtcclxuICAgIHZhciBCaWcgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgaWYgKGRwID09PSBVTkRFRklORUQpIGRwID0gMDtcclxuICAgIGVsc2UgaWYgKGRwICE9PSB+fmRwIHx8IGRwIDwgLU1BWF9EUCB8fCBkcCA+IE1BWF9EUCkgdGhyb3cgRXJyb3IoSU5WQUxJRF9EUCk7XHJcbiAgICByZXR1cm4gcm91bmQobmV3IEJpZyh0aGlzKSwgZHAsIHJtID09PSBVTkRFRklORUQgPyBCaWcuUk0gOiBybSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIGEgbmV3IEJpZyB3aG9zZSB2YWx1ZSBpcyB0aGUgc3F1YXJlIHJvb3Qgb2YgdGhlIHZhbHVlIG9mIHRoaXMgQmlnLCByb3VuZGVkLCBpZlxyXG4gICAqIG5lY2Vzc2FyeSwgdG8gYSBtYXhpbXVtIG9mIEJpZy5EUCBkZWNpbWFsIHBsYWNlcyB1c2luZyByb3VuZGluZyBtb2RlIEJpZy5STS5cclxuICAgKi9cclxuICBQLnNxcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgciwgYywgdCxcclxuICAgICAgeCA9IHRoaXMsXHJcbiAgICAgIEJpZyA9IHguY29uc3RydWN0b3IsXHJcbiAgICAgIHMgPSB4LnMsXHJcbiAgICAgIGUgPSB4LmUsXHJcbiAgICAgIGhhbGYgPSBuZXcgQmlnKDAuNSk7XHJcblxyXG4gICAgLy8gWmVybz9cclxuICAgIGlmICgheC5jWzBdKSByZXR1cm4gbmV3IEJpZyh4KTtcclxuXHJcbiAgICAvLyBOZWdhdGl2ZT9cclxuICAgIGlmIChzIDwgMCkgdGhyb3cgRXJyb3IoTkFNRSArICdObyBzcXVhcmUgcm9vdCcpO1xyXG5cclxuICAgIC8vIEVzdGltYXRlLlxyXG4gICAgcyA9IE1hdGguc3FydCh4ICsgJycpO1xyXG5cclxuICAgIC8vIE1hdGguc3FydCB1bmRlcmZsb3cvb3ZlcmZsb3c/XHJcbiAgICAvLyBSZS1lc3RpbWF0ZTogcGFzcyB4IGNvZWZmaWNpZW50IHRvIE1hdGguc3FydCBhcyBpbnRlZ2VyLCB0aGVuIGFkanVzdCB0aGUgcmVzdWx0IGV4cG9uZW50LlxyXG4gICAgaWYgKHMgPT09IDAgfHwgcyA9PT0gMSAvIDApIHtcclxuICAgICAgYyA9IHguYy5qb2luKCcnKTtcclxuICAgICAgaWYgKCEoYy5sZW5ndGggKyBlICYgMSkpIGMgKz0gJzAnO1xyXG4gICAgICBzID0gTWF0aC5zcXJ0KGMpO1xyXG4gICAgICBlID0gKChlICsgMSkgLyAyIHwgMCkgLSAoZSA8IDAgfHwgZSAmIDEpO1xyXG4gICAgICByID0gbmV3IEJpZygocyA9PSAxIC8gMCA/ICcxZScgOiAocyA9IHMudG9FeHBvbmVudGlhbCgpKS5zbGljZSgwLCBzLmluZGV4T2YoJ2UnKSArIDEpKSArIGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgciA9IG5ldyBCaWcocyk7XHJcbiAgICB9XHJcblxyXG4gICAgZSA9IHIuZSArIChCaWcuRFAgKz0gNCk7XHJcblxyXG4gICAgLy8gTmV3dG9uLVJhcGhzb24gaXRlcmF0aW9uLlxyXG4gICAgZG8ge1xyXG4gICAgICB0ID0gcjtcclxuICAgICAgciA9IGhhbGYudGltZXModC5wbHVzKHguZGl2KHQpKSk7XHJcbiAgICB9IHdoaWxlICh0LmMuc2xpY2UoMCwgZSkuam9pbignJykgIT09IHIuYy5zbGljZSgwLCBlKS5qb2luKCcnKSk7XHJcblxyXG4gICAgcmV0dXJuIHJvdW5kKHIsIEJpZy5EUCAtPSA0LCBCaWcuUk0pO1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIG5ldyBCaWcgd2hvc2UgdmFsdWUgaXMgdGhlIHZhbHVlIG9mIHRoaXMgQmlnIHRpbWVzIHRoZSB2YWx1ZSBvZiBCaWcgeS5cclxuICAgKi9cclxuICBQLnRpbWVzID0gUC5tdWwgPSBmdW5jdGlvbiAoeSkge1xyXG4gICAgdmFyIGMsXHJcbiAgICAgIHggPSB0aGlzLFxyXG4gICAgICBCaWcgPSB4LmNvbnN0cnVjdG9yLFxyXG4gICAgICB4YyA9IHguYyxcclxuICAgICAgeWMgPSAoeSA9IG5ldyBCaWcoeSkpLmMsXHJcbiAgICAgIGEgPSB4Yy5sZW5ndGgsXHJcbiAgICAgIGIgPSB5Yy5sZW5ndGgsXHJcbiAgICAgIGkgPSB4LmUsXHJcbiAgICAgIGogPSB5LmU7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHNpZ24gb2YgcmVzdWx0LlxyXG4gICAgeS5zID0geC5zID09IHkucyA/IDEgOiAtMTtcclxuXHJcbiAgICAvLyBSZXR1cm4gc2lnbmVkIDAgaWYgZWl0aGVyIDAuXHJcbiAgICBpZiAoIXhjWzBdIHx8ICF5Y1swXSkgcmV0dXJuIG5ldyBCaWcoeS5zICogMCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZSBleHBvbmVudCBvZiByZXN1bHQgYXMgeC5lICsgeS5lLlxyXG4gICAgeS5lID0gaSArIGo7XHJcblxyXG4gICAgLy8gSWYgYXJyYXkgeGMgaGFzIGZld2VyIGRpZ2l0cyB0aGFuIHljLCBzd2FwIHhjIGFuZCB5YywgYW5kIGxlbmd0aHMuXHJcbiAgICBpZiAoYSA8IGIpIHtcclxuICAgICAgYyA9IHhjO1xyXG4gICAgICB4YyA9IHljO1xyXG4gICAgICB5YyA9IGM7XHJcbiAgICAgIGogPSBhO1xyXG4gICAgICBhID0gYjtcclxuICAgICAgYiA9IGo7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZSBjb2VmZmljaWVudCBhcnJheSBvZiByZXN1bHQgd2l0aCB6ZXJvcy5cclxuICAgIGZvciAoYyA9IG5ldyBBcnJheShqID0gYSArIGIpOyBqLS07KSBjW2pdID0gMDtcclxuXHJcbiAgICAvLyBNdWx0aXBseS5cclxuXHJcbiAgICAvLyBpIGlzIGluaXRpYWxseSB4Yy5sZW5ndGguXHJcbiAgICBmb3IgKGkgPSBiOyBpLS07KSB7XHJcbiAgICAgIGIgPSAwO1xyXG5cclxuICAgICAgLy8gYSBpcyB5Yy5sZW5ndGguXHJcbiAgICAgIGZvciAoaiA9IGEgKyBpOyBqID4gaTspIHtcclxuXHJcbiAgICAgICAgLy8gQ3VycmVudCBzdW0gb2YgcHJvZHVjdHMgYXQgdGhpcyBkaWdpdCBwb3NpdGlvbiwgcGx1cyBjYXJyeS5cclxuICAgICAgICBiID0gY1tqXSArIHljW2ldICogeGNbaiAtIGkgLSAxXSArIGI7XHJcbiAgICAgICAgY1tqLS1dID0gYiAlIDEwO1xyXG5cclxuICAgICAgICAvLyBjYXJyeVxyXG4gICAgICAgIGIgPSBiIC8gMTAgfCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjW2pdID0gKGNbal0gKyBiKSAlIDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluY3JlbWVudCByZXN1bHQgZXhwb25lbnQgaWYgdGhlcmUgaXMgYSBmaW5hbCBjYXJyeSwgb3RoZXJ3aXNlIHJlbW92ZSBsZWFkaW5nIHplcm8uXHJcbiAgICBpZiAoYikgKyt5LmU7XHJcbiAgICBlbHNlIGMuc2hpZnQoKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgdHJhaWxpbmcgemVyb3MuXHJcbiAgICBmb3IgKGkgPSBjLmxlbmd0aDsgIWNbLS1pXTspIGMucG9wKCk7XHJcbiAgICB5LmMgPSBjO1xyXG5cclxuICAgIHJldHVybiB5O1xyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG4gICAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHZhbHVlIG9mIHRoaXMgQmlnIGluIGV4cG9uZW50aWFsIG5vdGF0aW9uIHRvIGRwIGZpeGVkIGRlY2ltYWxcclxuICAgKiBwbGFjZXMgYW5kIHJvdW5kZWQgdXNpbmcgQmlnLlJNLlxyXG4gICAqXHJcbiAgICogZHA/IHtudW1iZXJ9IEludGVnZXIsIDAgdG8gTUFYX0RQIGluY2x1c2l2ZS5cclxuICAgKi9cclxuICBQLnRvRXhwb25lbnRpYWwgPSBmdW5jdGlvbiAoZHApIHtcclxuICAgIHJldHVybiBzdHJpbmdpZnkodGhpcywgMSwgZHAsIGRwKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGlzIEJpZyBpbiBub3JtYWwgbm90YXRpb24gdG8gZHAgZml4ZWQgZGVjaW1hbFxyXG4gICAqIHBsYWNlcyBhbmQgcm91bmRlZCB1c2luZyBCaWcuUk0uXHJcbiAgICpcclxuICAgKiBkcD8ge251bWJlcn0gSW50ZWdlciwgMCB0byBNQVhfRFAgaW5jbHVzaXZlLlxyXG4gICAqXHJcbiAgICogKC0wKS50b0ZpeGVkKDApIGlzICcwJywgYnV0ICgtMC4xKS50b0ZpeGVkKDApIGlzICctMCcuXHJcbiAgICogKC0wKS50b0ZpeGVkKDEpIGlzICcwLjAnLCBidXQgKC0wLjAxKS50b0ZpeGVkKDEpIGlzICctMC4wJy5cclxuICAgKi9cclxuICBQLnRvRml4ZWQgPSBmdW5jdGlvbiAoZHApIHtcclxuICAgIHJldHVybiBzdHJpbmdpZnkodGhpcywgMiwgZHAsIHRoaXMuZSArIGRwKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGlzIEJpZyByb3VuZGVkIHRvIHNkIHNpZ25pZmljYW50IGRpZ2l0cyB1c2luZ1xyXG4gICAqIEJpZy5STS4gVXNlIGV4cG9uZW50aWFsIG5vdGF0aW9uIGlmIHNkIGlzIGxlc3MgdGhhbiB0aGUgbnVtYmVyIG9mIGRpZ2l0cyBuZWNlc3NhcnkgdG8gcmVwcmVzZW50XHJcbiAgICogdGhlIGludGVnZXIgcGFydCBvZiB0aGUgdmFsdWUgaW4gbm9ybWFsIG5vdGF0aW9uLlxyXG4gICAqXHJcbiAgICogc2Qge251bWJlcn0gSW50ZWdlciwgMSB0byBNQVhfRFAgaW5jbHVzaXZlLlxyXG4gICAqL1xyXG4gIFAudG9QcmVjaXNpb24gPSBmdW5jdGlvbiAoc2QpIHtcclxuICAgIHJldHVybiBzdHJpbmdpZnkodGhpcywgMywgc2QsIHNkIC0gMSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdmFsdWUgb2YgdGhpcyBCaWcuXHJcbiAgICogUmV0dXJuIGV4cG9uZW50aWFsIG5vdGF0aW9uIGlmIHRoaXMgQmlnIGhhcyBhIHBvc2l0aXZlIGV4cG9uZW50IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhblxyXG4gICAqIEJpZy5QRSwgb3IgYSBuZWdhdGl2ZSBleHBvbmVudCBlcXVhbCB0byBvciBsZXNzIHRoYW4gQmlnLk5FLlxyXG4gICAqIE9taXQgdGhlIHNpZ24gZm9yIG5lZ2F0aXZlIHplcm8uXHJcbiAgICovXHJcbiAgUC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzdHJpbmdpZnkodGhpcyk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcbiAgICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdmFsdWUgb2YgdGhpcyBCaWcuXHJcbiAgICogUmV0dXJuIGV4cG9uZW50aWFsIG5vdGF0aW9uIGlmIHRoaXMgQmlnIGhhcyBhIHBvc2l0aXZlIGV4cG9uZW50IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhblxyXG4gICAqIEJpZy5QRSwgb3IgYSBuZWdhdGl2ZSBleHBvbmVudCBlcXVhbCB0byBvciBsZXNzIHRoYW4gQmlnLk5FLlxyXG4gICAqIEluY2x1ZGUgdGhlIHNpZ24gZm9yIG5lZ2F0aXZlIHplcm8uXHJcbiAgICovXHJcbiAgUC52YWx1ZU9mID0gUC50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gc3RyaW5naWZ5KHRoaXMsIDQpO1xyXG4gIH07XHJcblxyXG5cclxuICAvLyBFeHBvcnRcclxuXHJcblxyXG4gIEJpZyA9IF9CaWdfKCk7XHJcblxyXG4gIEJpZ1snZGVmYXVsdCddID0gQmlnLkJpZyA9IEJpZztcclxuXHJcbiAgLy9BTUQuXHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJpZzsgfSk7XHJcblxyXG4gIC8vIE5vZGUgYW5kIG90aGVyIENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cy5cclxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEJpZztcclxuXHJcbiAgLy9Ccm93c2VyLlxyXG4gIH0gZWxzZSB7XHJcbiAgICBHTE9CQUwuQmlnID0gQmlnO1xyXG4gIH1cclxufSkodGhpcyk7XHJcbiIsImltcG9ydCBCaWcgZnJvbSAnYmlnLmpzJztcblxuLy8gQ29uZmlndXJlIEJpZyB0byBuZXZlciBzaG93IGV4cG9uZW50aWFsIG5vdGF0aW9uLlxuQmlnLk5FID0gLTMxO1xuQmlnLlBFID0gMzk7XG5cbi8qKiBUaGUgYW1vdW50IG9mIHJhdyBpbiBvbmUgbWVnYS4gKi9cbmNvbnN0IFJBV19JTl9NRUdBID0gbmV3IEJpZygnMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcpO1xuXG4vKiogVGhlIGFtb3VudCBvZiBtZWdhIGluIG9uZSByYXcuICovXG5jb25zdCBNRUdBX0lOX1JBVyA9IG5ldyBCaWcoJy4wMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEnKTtcblxuLyoqIFRoZSBtaW5pbXVtIHJhdyBhbW91bnQuICovXG5jb25zdCBSQVdfTUlOX0FNT1VOVCA9IG5ldyBCaWcoJzEnKTtcblxuLyoqIFRoZSBtYXhpbXVtIHJhdyBhbW91bnQuICovXG5jb25zdCBSQVdfTUFYX0FNT1VOVCA9IG5ldyBCaWcoJzM0MDI4MjM2NjkyMDkzODQ2MzQ2MzM3NDYwNzQzMTc2ODIxMTQ1NScpO1xuXG4vKiogVGhlIG1pbmltdW0gbWVnYSBhbW91bnQuICovXG5jb25zdCBNRUdBX01JTl9BTU9VTlQgPSBNRUdBX0lOX1JBVztcblxuLyoqIFRoZSBtYXhpbXVtIG1lZ2EgYW1vdW50LiAqL1xuY29uc3QgTUVHQV9NQVhfQU1PVU5UID0gbmV3IEJpZyhSQVdfTUFYX0FNT1VOVCkudGltZXMoTUVHQV9JTl9SQVcpO1xuXG4vKipcbiAqIENvbnZlcnRzIG1lZ2EgYW1vdW50IHRvIHJhdyBhbW91bnQuXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG1lZ2EgVGhlIG1lZ2EgYW1vdW50LlxuICogQHRocm93cyB7RXJyb3J9IFRoZSBtZWdhIGFtb3VudCBtdXN0IGJlIGRlZmluZWQuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IFRoZSBtZWdhIGFtb3VudCBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgbnVtYmVyLlxuICogQHRocm93cyB7RXJyb3J9IFRoZSBtZWdhIGFtb3VudCBpcyBpbnZhbGlkLlxuICogQHRocm93cyB7RXJyb3J9IFRoZSBtZWdhIGFtb3VudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZS5cbiAqIEB0aHJvd3Mge0Vycm9yfSBUaGUgbWVnYSBhbW91bnQgaXMgdG9vIHNtYWxsLlxuICogQHRocm93cyB7RXJyb3J9IFRoZSBtZWdhIGFtb3VudCBpcyB0b28gbGFyZ2UuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmF3IGFtb3VudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1lZ2FUb1JhdyA9IChtZWdhKSA9PiB7XG5cdGlmIChtZWdhID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBFcnJvcignVGhlIG1lZ2EgYW1vdW50IG11c3QgYmUgZGVmaW5lZC4nKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbWVnYSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG1lZ2EgIT09ICdudW1iZXInKSB7XG5cdFx0dGhyb3cgVHlwZUVycm9yKCdUaGUgbWVnYSBhbW91bnQgbXVzdCBiZSBhIHN0cmluZyBvciBhIG51bWJlci4nKTtcblx0fVxuXG5cdGxldCBtZWdhQmlnO1xuXG5cdHRyeSB7XG5cdFx0bWVnYUJpZyA9IG5ldyBCaWcobWVnYSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgRXJyb3IoJ1RoZSBtZWdhIGFtb3VudCBpcyBpbnZhbGlkLicpO1xuXHR9XG5cblx0aWYgKG1lZ2FCaWcubHQoMCkpIHtcblx0XHR0aHJvdyBFcnJvcignVGhlIG1lZ2EgYW1vdW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlLicpO1xuXHR9XG5cblx0aWYgKG1lZ2FCaWcubHQoTUVHQV9NSU5fQU1PVU5UKSkge1xuXHRcdHRocm93IEVycm9yKCdUaGUgbWVnYSBhbW91bnQgaXMgdG9vIHNtYWxsLicpO1xuXHR9XG5cblx0aWYgKG1lZ2FCaWcuZ3QoTUVHQV9NQVhfQU1PVU5UKSkge1xuXHRcdHRocm93IEVycm9yKCdUaGUgbWVnYSBhbW91bnQgaXMgdG9vIGxhcmdlLicpO1xuXHR9XG5cblx0cmV0dXJuIG1lZ2FCaWcudGltZXMoUkFXX0lOX01FR0EpLnRvU3RyaW5nKCk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHJhdyBhbW91bnQgdG8gbWVnYSBhbW91bnQuXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHJhdyBUaGUgcmF3IGFtb3VudC5cbiAqIEB0aHJvd3Mge0Vycm9yfSBUaGUgcmF3IGFtb3VudCBtdXN0IGJlIGRlZmluZWQuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IFRoZSByYXcgYW1vdW50IG11c3QgYmUgYSBzdHJpbmcgb3IgYSBudW1iZXIuXG4gKiBAdGhyb3dzIHtFcnJvcn0gVGhlIHJhdyBhbW91bnQgaXMgaW52YWxpZC5cbiAqIEB0aHJvd3Mge0Vycm9yfSBUaGUgcmF3IGFtb3VudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZS5cbiAqIEB0aHJvd3Mge0Vycm9yfSBUaGUgcmF3IGFtb3VudCBpcyB0b28gc21hbGwuXG4gKiBAdGhyb3dzIHtFcnJvcn0gVGhlIHJhdyBhbW91bnQgaXMgdG9vIGxhcmdlLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIG1lZ2EgYW1vdW50LlxuICovXG5leHBvcnQgY29uc3QgcmF3VG9NZWdhID0gKHJhdykgPT4ge1xuXHRpZiAocmF3ID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBFcnJvcignVGhlIHJhdyBhbW91bnQgbXVzdCBiZSBkZWZpbmVkLicpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiByYXcgIT09ICdzdHJpbmcnICYmIHR5cGVvZiByYXcgIT09ICdudW1iZXInKSB7XG5cdFx0dGhyb3cgVHlwZUVycm9yKCdUaGUgcmF3IGFtb3VudCBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgbnVtYmVyLicpO1xuXHR9XG5cblx0bGV0IHJhd0JpZztcblxuXHR0cnkge1xuXHRcdHJhd0JpZyA9IG5ldyBCaWcocmF3KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBFcnJvcignVGhlIHJhdyBhbW91bnQgaXMgaW52YWxpZC4nKTtcblx0fVxuXG5cdGlmIChyYXdCaWcubHQoMCkpIHtcblx0XHR0aHJvdyBFcnJvcignVGhlIHJhdyBhbW91bnQgbXVzdCBub3QgYmUgbmVnYXRpdmUuJyk7XG5cdH1cblxuXHRpZiAocmF3QmlnLmx0KFJBV19NSU5fQU1PVU5UKSkge1xuXHRcdHRocm93IEVycm9yKCdUaGUgcmF3IGFtb3VudCBpcyB0b28gc21hbGwuJyk7XG5cdH1cblxuXHRpZiAocmF3QmlnLmd0KFJBV19NQVhfQU1PVU5UKSkge1xuXHRcdHRocm93IEVycm9yKCdUaGUgcmF3IGFtb3VudCBpcyB0b28gbGFyZ2UuJyk7XG5cdH1cblxuXHRyZXR1cm4gcmF3QmlnLnRpbWVzKE1FR0FfSU5fUkFXKS50b1N0cmluZygpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=