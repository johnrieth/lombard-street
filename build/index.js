require=(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({"C:\\Users\\john\\Programming\\Research\\bagehot\\components\\default\\header.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'article-header' },
        _react2.default.createElement(
          'h1',
          { className: 'hed' },
          this.props.title
        ),
        this.props.subtitle && _react2.default.createElement(
          'h2',
          { className: 'dek' },
          this.props.subtitle
        ),
        this.props.author && _react2.default.createElement(
          'div',
          { className: 'byline' },
          'By: ',
          _react2.default.createElement(
            'a',
            { href: this.props.authorLink },
            this.props.author
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.PureComponent);

exports.default = Header;

},{"react":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\components\\default\\text-container.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextContainer = function (_React$PureComponent) {
  _inherits(TextContainer, _React$PureComponent);

  function TextContainer() {
    _classCallCheck(this, TextContainer);

    return _possibleConstructorReturn(this, (TextContainer.__proto__ || Object.getPrototypeOf(TextContainer)).apply(this, arguments));
  }

  _createClass(TextContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          idyll = _props.idyll,
          children = _props.children,
          className = _props.className,
          updateProps = _props.updateProps,
          props = _objectWithoutProperties(_props, ['idyll', 'children', 'className', 'updateProps']);

      var _idyll$layout = idyll.layout,
          styles = _idyll$layout.styles,
          layout = _objectWithoutProperties(_idyll$layout, ['styles']);

      var _idyll$theme = idyll.theme,
          _ = _idyll$theme.styles,
          theme = _objectWithoutProperties(_idyll$theme, ['styles']);

      var style = _extends({}, layout, theme);
      var cn = (className || '') + ' idyll-text-container';
      return _react2.default.createElement(
        'div',
        _extends({ style: style }, props, { className: cn }),
        children
      );
    }
  }]);

  return TextContainer;
}(_react2.default.PureComponent);

exports.default = TextContainer;

},{"react":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\camel-case\\camel-case.js":[function(require,module,exports){
'use strict';

var upperCase = require('upper-case');
var noCase = require('no-case');

/**
 * Camel case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  var result = noCase(value, locale);

  // Replace periods between numeric entities with an underscore.
  if (!mergeNumbers) {
    result = result.replace(/ (?=\d)/g, '_');
  }

  // Replace spaces between words with an upper cased character.
  return result.replace(/ (.)/g, function (m, $1) {
    return upperCase($1, locale);
  });
};

},{"no-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\no-case.js","upper-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case\\upper-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\change-case\\change-case.js":[function(require,module,exports){
'use strict';

exports.no = exports.noCase = require('no-case');
exports.dot = exports.dotCase = require('dot-case');
exports.swap = exports.swapCase = require('swap-case');
exports.path = exports.pathCase = require('path-case');
exports.upper = exports.upperCase = require('upper-case');
exports.lower = exports.lowerCase = require('lower-case');
exports.camel = exports.camelCase = require('camel-case');
exports.snake = exports.snakeCase = require('snake-case');
exports.title = exports.titleCase = require('title-case');
exports.param = exports.paramCase = require('param-case');
exports.header = exports.headerCase = require('header-case');
exports.pascal = exports.pascalCase = require('pascal-case');
exports.constant = exports.constantCase = require('constant-case');
exports.sentence = exports.sentenceCase = require('sentence-case');
exports.isUpper = exports.isUpperCase = require('is-upper-case');
exports.isLower = exports.isLowerCase = require('is-lower-case');
exports.ucFirst = exports.upperCaseFirst = require('upper-case-first');
exports.lcFirst = exports.lowerCaseFirst = require('lower-case-first');

},{"camel-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\camel-case\\camel-case.js","constant-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\constant-case\\constant-case.js","dot-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\dot-case\\dot-case.js","header-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\header-case\\header-case.js","is-lower-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-lower-case\\is-lower-case.js","is-upper-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-upper-case\\is-upper-case.js","lower-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\lower-case\\lower-case.js","lower-case-first":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\lower-case-first\\lower-case-first.js","no-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\no-case.js","param-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\param-case\\param-case.js","pascal-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\pascal-case\\pascal-case.js","path-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\path-case\\path-case.js","sentence-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\sentence-case\\sentence-case.js","snake-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\snake-case\\snake-case.js","swap-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\swap-case\\swap-case.js","title-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\title-case\\title-case.js","upper-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case\\upper-case.js","upper-case-first":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case-first\\upper-case-first.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\constant-case\\constant-case.js":[function(require,module,exports){
'use strict';

var upperCase = require('upper-case');
var snakeCase = require('snake-case');

/**
 * Constant case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return upperCase(snakeCase(value, locale), locale);
};

},{"snake-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\snake-case\\snake-case.js","upper-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case\\upper-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\define-properties\\index.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var keys = require('object-keys');
var foreach = require('foreach');
var hasSymbols = typeof Symbol === 'function' && _typeof(Symbol()) === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function isFunction(fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function arePropertyDescriptorsSupported() {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
		/* eslint-disable no-unused-vars, no-restricted-syntax */
		for (var _ in obj) {
			return false;
		}
		/* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) {
		/* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function defineProperty(object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function defineProperties(object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;

},{"foreach":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\foreach\\index.js","object-keys":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object-keys\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\dot-case\\dot-case.js":[function(require,module,exports){
'use strict';

var noCase = require('no-case');

/**
 * Dot case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '.');
};

},{"no-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\no-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\es2015.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var has = require('has');
var toPrimitive = require('es-to-primitive/es6');

var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol';
var SymbolIterator = hasSymbols ? Symbol.iterator : null;

var $isNaN = require('./helpers/isNaN');
var $isFinite = require('./helpers/isFinite');
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = require('./helpers/assign');
var sign = require('./helpers/sign');
var mod = require('./helpers/mod');
var isPrimitive = require('./helpers/isPrimitive');
var parseInteger = parseInt;
var bind = require('function-bind');
var arraySlice = bind.call(Function.call, Array.prototype.slice);
var strSlice = bind.call(Function.call, String.prototype.slice);
var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
var regexExec = bind.call(Function.call, RegExp.prototype.exec);
var nonWS = ['\x85', '\u200B', '\uFFFE'].join('');
var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
var hasNonWS = bind.call(Function.call, RegExp.prototype.test, nonWSregex);
var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = bind.call(Function.call, RegExp.prototype.test, invalidHexLiteral);

// whitespace from: http://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = ['\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003', '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028', '\u2029\uFEFF'].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var replace = bind.call(Function.call, String.prototype.replace);
var trim = function trim(value) {
	return replace(value, trimRegex, '');
};

var ES5 = require('./es5');

var hasRegExpMatcher = require('is-regex');

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
var ES6 = assign(assign({}, ES5), {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	Call: function Call(F, V) {
		var args = arguments.length > 2 ? arguments[2] : [];
		if (!this.IsCallable(F)) {
			throw new TypeError(F + ' is not a function');
		}
		return F.apply(V, args);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
	ToPrimitive: toPrimitive,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
	// ToBoolean: ES5.ToBoolean,

	// http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
	ToNumber: function ToNumber(argument) {
		var value = isPrimitive(argument) ? argument : toPrimitive(argument, Number);
		if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a number');
		}
		if (typeof value === 'string') {
			if (isBinary(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 2));
			} else if (isOctal(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 8));
			} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
				return NaN;
			} else {
				var trimmed = trim(value);
				if (trimmed !== value) {
					return this.ToNumber(trimmed);
				}
			}
		}
		return Number(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
	// ToInteger: ES5.ToNumber,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
	// ToInt32: ES5.ToInt32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
	// ToUint32: ES5.ToUint32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
	ToInt16: function ToInt16(argument) {
		var int16bit = this.ToUint16(argument);
		return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
	// ToUint16: ES5.ToUint16,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
	ToInt8: function ToInt8(argument) {
		var int8bit = this.ToUint8(argument);
		return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
	ToUint8: function ToUint8(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) {
			return 0;
		}
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x100);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
	ToUint8Clamp: function ToUint8Clamp(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number <= 0) {
			return 0;
		}
		if (number >= 0xFF) {
			return 0xFF;
		}
		var f = Math.floor(argument);
		if (f + 0.5 < number) {
			return f + 1;
		}
		if (number < f + 0.5) {
			return f;
		}
		if (f % 2 !== 0) {
			return f + 1;
		}
		return f;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
	ToString: function ToString(argument) {
		if ((typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a string');
		}
		return String(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
	ToObject: function ToObject(value) {
		this.RequireObjectCoercible(value);
		return Object(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	ToPropertyKey: function ToPropertyKey(argument) {
		var key = this.ToPrimitive(argument, String);
		return (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'symbol' ? key : this.ToString(key);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	ToLength: function ToLength(argument) {
		var len = this.ToInteger(argument);
		if (len <= 0) {
			return 0;
		} // includes converting -0 to +0
		if (len > MAX_SAFE_INTEGER) {
			return MAX_SAFE_INTEGER;
		}
		return len;
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
	CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
		if (toStr.call(argument) !== '[object String]') {
			throw new TypeError('must be a string');
		}
		if (argument === '-0') {
			return -0;
		}
		var n = this.ToNumber(argument);
		if (this.SameValue(this.ToString(n), argument)) {
			return n;
		}
		return void 0;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
	RequireObjectCoercible: ES5.CheckObjectCoercible,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	IsArray: Array.isArray || function IsArray(argument) {
		return toStr.call(argument) === '[object Array]';
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
	// IsCallable: ES5.IsCallable,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	IsConstructor: function IsConstructor(argument) {
		return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
	IsExtensible: function IsExtensible(obj) {
		if (!Object.preventExtensions) {
			return true;
		}
		if (isPrimitive(obj)) {
			return false;
		}
		return Object.isExtensible(obj);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
	IsInteger: function IsInteger(argument) {
		if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
			return false;
		}
		var abs = Math.abs(argument);
		return Math.floor(abs) === abs;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
	IsPropertyKey: function IsPropertyKey(argument) {
		return typeof argument === 'string' || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) === 'symbol';
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
	IsRegExp: function IsRegExp(argument) {
		if (!argument || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) !== 'object') {
			return false;
		}
		if (hasSymbols) {
			var isRegExp = argument[Symbol.match];
			if (typeof isRegExp !== 'undefined') {
				return ES5.ToBoolean(isRegExp);
			}
		}
		return hasRegExpMatcher(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
	// SameValue: ES5.SameValue,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
	SameValueZero: function SameValueZero(x, y) {
		return x === y || $isNaN(x) && $isNaN(y);
	},

	/**
  * 7.3.2 GetV (V, P)
  * 1. Assert: IsPropertyKey(P) is true.
  * 2. Let O be ToObject(V).
  * 3. ReturnIfAbrupt(O).
  * 4. Return O.[[Get]](P, V).
  */
	GetV: function GetV(V, P) {
		// 7.3.2.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.2.2-3
		var O = this.ToObject(V);

		// 7.3.2.4
		return O[P];
	},

	/**
  * 7.3.9 - http://www.ecma-international.org/ecma-262/6.0/#sec-getmethod
  * 1. Assert: IsPropertyKey(P) is true.
  * 2. Let func be GetV(O, P).
  * 3. ReturnIfAbrupt(func).
  * 4. If func is either undefined or null, return undefined.
  * 5. If IsCallable(func) is false, throw a TypeError exception.
  * 6. Return func.
  */
	GetMethod: function GetMethod(O, P) {
		// 7.3.9.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.9.2
		var func = this.GetV(O, P);

		// 7.3.9.4
		if (func == null) {
			return void 0;
		}

		// 7.3.9.5
		if (!this.IsCallable(func)) {
			throw new TypeError(P + 'is not a function');
		}

		// 7.3.9.6
		return func;
	},

	/**
  * 7.3.1 Get (O, P) - http://www.ecma-international.org/ecma-262/6.0/#sec-get-o-p
  * 1. Assert: Type(O) is Object.
  * 2. Assert: IsPropertyKey(P) is true.
  * 3. Return O.[[Get]](P, O).
  */
	Get: function Get(O, P) {
		// 7.3.1.1
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		// 7.3.1.2
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		// 7.3.1.3
		return O[P];
	},

	Type: function Type(x) {
		if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'symbol') {
			return 'Symbol';
		}
		return ES5.Type(x);
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
	SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (this.Type(C) !== 'Object') {
			throw new TypeError('O.constructor is not an Object');
		}
		var S = hasSymbols && Symbol.species ? C[Symbol.species] : void 0;
		if (S == null) {
			return defaultConstructor;
		}
		if (this.IsConstructor(S)) {
			return S;
		}
		throw new TypeError('no constructor found');
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor
	CompletePropertyDescriptor: function CompletePropertyDescriptor(Desc) {
		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (this.IsGenericDescriptor(Desc) || this.IsDataDescriptor(Desc)) {
			if (!has(Desc, '[[Value]]')) {
				Desc['[[Value]]'] = void 0;
			}
			if (!has(Desc, '[[Writable]]')) {
				Desc['[[Writable]]'] = false;
			}
		} else {
			if (!has(Desc, '[[Get]]')) {
				Desc['[[Get]]'] = void 0;
			}
			if (!has(Desc, '[[Set]]')) {
				Desc['[[Set]]'] = void 0;
			}
		}
		if (!has(Desc, '[[Enumerable]]')) {
			Desc['[[Enumerable]]'] = false;
		}
		if (!has(Desc, '[[Configurable]]')) {
			Desc['[[Configurable]]'] = false;
		}
		return Desc;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw
	Set: function Set(O, P, V, Throw) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		if (this.Type(Throw) !== 'Boolean') {
			throw new TypeError('Throw must be a Boolean');
		}
		if (Throw) {
			O[P] = V;
			return true;
		} else {
			try {
				O[P] = V;
			} catch (e) {
				return false;
			}
		}
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-hasownproperty
	HasOwnProperty: function HasOwnProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		return has(O, P);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-hasproperty
	HasProperty: function HasProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		return P in O;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable
	IsConcatSpreadable: function IsConcatSpreadable(O) {
		if (this.Type(O) !== 'Object') {
			return false;
		}
		if (hasSymbols && _typeof(Symbol.isConcatSpreadable) === 'symbol') {
			var spreadable = this.Get(O, Symbol.isConcatSpreadable);
			if (typeof spreadable !== 'undefined') {
				return this.ToBoolean(spreadable);
			}
		}
		return this.IsArray(O);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-invoke
	Invoke: function Invoke(O, P) {
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		var argumentsList = arraySlice(arguments, 2);
		var func = this.GetV(O, P);
		return this.Call(func, O, argumentsList);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-getiterator
	GetIterator: function GetIterator(obj, method) {
		if (!hasSymbols) {
			throw new SyntaxError('ES.GetIterator depends on native iterator support.');
		}

		var actualMethod = method;
		if (arguments.length < 2) {
			actualMethod = this.GetMethod(obj, SymbolIterator);
		}
		var iterator = this.Call(actualMethod, obj);
		if (this.Type(iterator) !== 'Object') {
			throw new TypeError('iterator must return an object');
		}

		return iterator;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-iteratornext
	IteratorNext: function IteratorNext(iterator, value) {
		var result = this.Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
		if (this.Type(result) !== 'Object') {
			throw new TypeError('iterator next must return an object');
		}
		return result;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete
	IteratorComplete: function IteratorComplete(iterResult) {
		if (this.Type(iterResult) !== 'Object') {
			throw new TypeError('Assertion failed: Type(iterResult) is not Object');
		}
		return this.ToBoolean(this.Get(iterResult, 'done'));
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue
	IteratorValue: function IteratorValue(iterResult) {
		if (this.Type(iterResult) !== 'Object') {
			throw new TypeError('Assertion failed: Type(iterResult) is not Object');
		}
		return this.Get(iterResult, 'value');
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-iteratorstep
	IteratorStep: function IteratorStep(iterator) {
		var result = this.IteratorNext(iterator);
		var done = this.IteratorComplete(result);
		return done === true ? false : result;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-iteratorclose
	IteratorClose: function IteratorClose(iterator, completion) {
		if (this.Type(iterator) !== 'Object') {
			throw new TypeError('Assertion failed: Type(iterator) is not Object');
		}
		if (!this.IsCallable(completion)) {
			throw new TypeError('Assertion failed: completion is not a thunk for a Completion Record');
		}
		var completionThunk = completion;

		var iteratorReturn = this.GetMethod(iterator, 'return');

		if (typeof iteratorReturn === 'undefined') {
			return completionThunk();
		}

		var completionRecord;
		try {
			var innerResult = this.Call(iteratorReturn, iterator, []);
		} catch (e) {
			// if we hit here, then "e" is the innerResult completion that needs re-throwing

			// if the completion is of type "throw", this will throw.
			completionRecord = completionThunk();
			completionThunk = null; // ensure it's not called twice.

			// if not, then return the innerResult completion
			throw e;
		}
		completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
		completionThunk = null; // ensure it's not called twice.

		if (this.Type(innerResult) !== 'Object') {
			throw new TypeError('iterator .return must return an object');
		}

		return completionRecord;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject
	CreateIterResultObject: function CreateIterResultObject(value, done) {
		if (this.Type(done) !== 'Boolean') {
			throw new TypeError('Assertion failed: Type(done) is not Boolean');
		}
		return {
			value: value,
			done: done
		};
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-regexpexec
	RegExpExec: function RegExpExec(R, S) {
		if (this.Type(R) !== 'Object') {
			throw new TypeError('R must be an Object');
		}
		if (this.Type(S) !== 'String') {
			throw new TypeError('S must be a String');
		}
		var exec = this.Get(R, 'exec');
		if (this.IsCallable(exec)) {
			var result = this.Call(exec, R, [S]);
			if (result === null || this.Type(result) === 'Object') {
				return result;
			}
			throw new TypeError('"exec" method must return `null` or an Object');
		}
		return regexExec(R, S);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate
	ArraySpeciesCreate: function ArraySpeciesCreate(originalArray, length) {
		if (!this.IsInteger(length) || length < 0) {
			throw new TypeError('Assertion failed: length must be an integer >= 0');
		}
		var len = length === 0 ? 0 : length;
		var C;
		var isArray = this.IsArray(originalArray);
		if (isArray) {
			C = this.Get(originalArray, 'constructor');
			// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
			// if (this.IsConstructor(C)) {
			// 	if C is another realm's Array, C = undefined
			// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
			// }
			if (this.Type(C) === 'Object' && hasSymbols && Symbol.species) {
				C = this.Get(C, Symbol.species);
				if (C === null) {
					C = void 0;
				}
			}
		}
		if (typeof C === 'undefined') {
			return Array(len);
		}
		if (!this.IsConstructor(C)) {
			throw new TypeError('C must be a constructor');
		}
		return new C(len); // this.Construct(C, len);
	},

	CreateDataProperty: function CreateDataProperty(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var oldDesc = Object.getOwnPropertyDescriptor(O, P);
		var extensible = oldDesc || typeof Object.isExtensible !== 'function' || Object.isExtensible(O);
		var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
		if (immutable || !extensible) {
			return false;
		}
		var newDesc = {
			configurable: true,
			enumerable: true,
			value: V,
			writable: true
		};
		Object.defineProperty(O, P, newDesc);
		return true;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow
	CreateDataPropertyOrThrow: function CreateDataPropertyOrThrow(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var success = this.CreateDataProperty(O, P, V);
		if (!success) {
			throw new TypeError('unable to create data property');
		}
		return success;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-advancestringindex
	AdvanceStringIndex: function AdvanceStringIndex(S, index, unicode) {
		if (this.Type(S) !== 'String') {
			throw new TypeError('Assertion failed: Type(S) is not String');
		}
		if (!this.IsInteger(index)) {
			throw new TypeError('Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)');
		}
		if (index < 0 || index > MAX_SAFE_INTEGER) {
			throw new RangeError('Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)');
		}
		if (this.Type(unicode) !== 'Boolean') {
			throw new TypeError('Assertion failed: Type(unicode) is not Boolean');
		}
		if (!unicode) {
			return index + 1;
		}
		var length = S.length;
		if (index + 1 >= length) {
			return index + 1;
		}
		var first = S.charCodeAt(index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}
		var second = S.charCodeAt(index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}
		return index + 2;
	}
});

delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

module.exports = ES6;

},{"./es5":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\es5.js","./helpers/assign":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\assign.js","./helpers/isFinite":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\isFinite.js","./helpers/isNaN":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\isNaN.js","./helpers/isPrimitive":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\isPrimitive.js","./helpers/mod":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\mod.js","./helpers/sign":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\sign.js","es-to-primitive/es6":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-to-primitive\\es6.js","function-bind":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\function-bind\\index.js","has":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\has\\src\\index.js","is-regex":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-regex\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\es2016.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ES2015 = require('./es2015');
var assign = require('./helpers/assign');

var ES2016 = assign(assign({}, ES2015), {
	// https://github.com/tc39/ecma262/pull/60
	SameValueNonNumber: function SameValueNonNumber(x, y) {
		if (typeof x === 'number' || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== (typeof y === 'undefined' ? 'undefined' : _typeof(y))) {
			throw new TypeError('SameValueNonNumber requires two non-number values of the same type.');
		}
		return this.SameValue(x, y);
	}
});

module.exports = ES2016;

},{"./es2015":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\es2015.js","./helpers/assign":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\assign.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\es5.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var $isNaN = require('./helpers/isNaN');
var $isFinite = require('./helpers/isFinite');

var sign = require('./helpers/sign');
var mod = require('./helpers/mod');

var IsCallable = require('is-callable');
var toPrimitive = require('es-to-primitive/es5');

var has = require('has');

// https://es5.github.io/#x9
var ES5 = {
	ToPrimitive: toPrimitive,

	ToBoolean: function ToBoolean(value) {
		return !!value;
	},
	ToNumber: function ToNumber(value) {
		return Number(value);
	},
	ToInteger: function ToInteger(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number)) {
			return 0;
		}
		if (number === 0 || !$isFinite(number)) {
			return number;
		}
		return sign(number) * Math.floor(Math.abs(number));
	},
	ToInt32: function ToInt32(x) {
		return this.ToNumber(x) >> 0;
	},
	ToUint32: function ToUint32(x) {
		return this.ToNumber(x) >>> 0;
	},
	ToUint16: function ToUint16(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) {
			return 0;
		}
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x10000);
	},
	ToString: function ToString(value) {
		return String(value);
	},
	ToObject: function ToObject(value) {
		this.CheckObjectCoercible(value);
		return Object(value);
	},
	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
		/* jshint eqnull:true */
		if (value == null) {
			throw new TypeError(optMessage || 'Cannot call method on ' + value);
		}
		return value;
	},
	IsCallable: IsCallable,
	SameValue: function SameValue(x, y) {
		if (x === y) {
			// 0 === -0, but they are not identical.
			if (x === 0) {
				return 1 / x === 1 / y;
			}
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	},

	// http://www.ecma-international.org/ecma-262/5.1/#sec-8
	Type: function Type(x) {
		if (x === null) {
			return 'Null';
		}
		if (typeof x === 'undefined') {
			return 'Undefined';
		}
		if (typeof x === 'function' || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {
			return 'Object';
		}
		if (typeof x === 'number') {
			return 'Number';
		}
		if (typeof x === 'boolean') {
			return 'Boolean';
		}
		if (typeof x === 'string') {
			return 'String';
		}
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	IsPropertyDescriptor: function IsPropertyDescriptor(Desc) {
		if (this.Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};
		// jscs:disable
		for (var key in Desc) {
			// eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}
		// jscs:enable
		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.1
	IsAccessorDescriptor: function IsAccessorDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
			return false;
		}

		return true;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.2
	IsDataDescriptor: function IsDataDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
			return false;
		}

		return true;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.3
	IsGenericDescriptor: function IsGenericDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (!this.IsAccessorDescriptor(Desc) && !this.IsDataDescriptor(Desc)) {
			return true;
		}

		return false;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.4
	FromPropertyDescriptor: function FromPropertyDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return Desc;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (this.IsDataDescriptor(Desc)) {
			return {
				value: Desc['[[Value]]'],
				writable: !!Desc['[[Writable]]'],
				enumerable: !!Desc['[[Enumerable]]'],
				configurable: !!Desc['[[Configurable]]']
			};
		} else if (this.IsAccessorDescriptor(Desc)) {
			return {
				get: Desc['[[Get]]'],
				set: Desc['[[Set]]'],
				enumerable: !!Desc['[[Enumerable]]'],
				configurable: !!Desc['[[Configurable]]']
			};
		} else {
			throw new TypeError('FromPropertyDescriptor must be called with a fully populated Property Descriptor');
		}
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.5
	ToPropertyDescriptor: function ToPropertyDescriptor(Obj) {
		if (this.Type(Obj) !== 'Object') {
			throw new TypeError('ToPropertyDescriptor requires an object');
		}

		var desc = {};
		if (has(Obj, 'enumerable')) {
			desc['[[Enumerable]]'] = this.ToBoolean(Obj.enumerable);
		}
		if (has(Obj, 'configurable')) {
			desc['[[Configurable]]'] = this.ToBoolean(Obj.configurable);
		}
		if (has(Obj, 'value')) {
			desc['[[Value]]'] = Obj.value;
		}
		if (has(Obj, 'writable')) {
			desc['[[Writable]]'] = this.ToBoolean(Obj.writable);
		}
		if (has(Obj, 'get')) {
			var getter = Obj.get;
			if (typeof getter !== 'undefined' && !this.IsCallable(getter)) {
				throw new TypeError('getter must be a function');
			}
			desc['[[Get]]'] = getter;
		}
		if (has(Obj, 'set')) {
			var setter = Obj.set;
			if (typeof setter !== 'undefined' && !this.IsCallable(setter)) {
				throw new TypeError('setter must be a function');
			}
			desc['[[Set]]'] = setter;
		}

		if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
			throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
		}
		return desc;
	}
};

module.exports = ES5;

},{"./helpers/isFinite":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\isFinite.js","./helpers/isNaN":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\isNaN.js","./helpers/mod":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\mod.js","./helpers/sign":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\sign.js","es-to-primitive/es5":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-to-primitive\\es5.js","has":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\has\\src\\index.js","is-callable":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-callable\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\es7.js":[function(require,module,exports){
'use strict';

module.exports = require('./es2016');

},{"./es2016":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\es2016.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\assign.js":[function(require,module,exports){
"use strict";

var has = Object.prototype.hasOwnProperty;
module.exports = function assign(target, source) {
	if (Object.assign) {
		return Object.assign(target, source);
	}
	for (var key in source) {
		if (has.call(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\isFinite.js":[function(require,module,exports){
'use strict';

var $isNaN = Number.isNaN || function (a) {
  return a !== a;
};

module.exports = Number.isFinite || function (x) {
  return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity;
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\isNaN.js":[function(require,module,exports){
"use strict";

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\isPrimitive.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isPrimitive(value) {
	return value === null || typeof value !== 'function' && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object';
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\mod.js":[function(require,module,exports){
"use strict";

module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\sign.js":[function(require,module,exports){
"use strict";

module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-to-primitive\\es5.js":[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;

var isPrimitive = require('./helpers/isPrimitive');

var isCallable = require('is-callable');

// https://es5.github.io/#x8.12
var ES5internalSlots = {
	'[[DefaultValue]]': function DefaultValue(O, hint) {
		var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// https://es5.github.io/#x9
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
};

},{"./helpers/isPrimitive":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-to-primitive\\helpers\\isPrimitive.js","is-callable":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-callable\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-to-primitive\\es6.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasSymbols = typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol';

var isPrimitive = require('./helpers/isPrimitive');
var isCallable = require('is-callable');
var isDate = require('is-date-object');
var isSymbol = require('is-symbol');

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || hint !== 'number' && hint !== 'string') {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (PreferredType === String) {
			hint = 'string';
		} else if (PreferredType === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};

},{"./helpers/isPrimitive":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-to-primitive\\helpers\\isPrimitive.js","is-callable":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-callable\\index.js","is-date-object":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-date-object\\index.js","is-symbol":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-symbol\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-to-primitive\\helpers\\isPrimitive.js":[function(require,module,exports){
arguments[4]["C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\helpers\\isPrimitive.js"][0].apply(exports,arguments)
},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\EventListener.js":[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var emptyFunction = require('./emptyFunction');

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function capture(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if ("development" !== 'production') {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }
      return {
        remove: emptyFunction
      };
    }
  },

  registerDefault: function registerDefault() {}
};

module.exports = EventListener;

},{"./emptyFunction":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyFunction.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\ExecutionEnvironment.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\camelize.js":[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\camelizeStyleName.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

'use strict';

var camelize = require('./camelize');

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

},{"./camelize":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\camelize.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\containsNode.js":[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isTextNode = require('./isTextNode');

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

},{"./isTextNode":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\isTextNode.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyFunction.js":[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyObject.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

var emptyObject = {};

if ("development" !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\focusNode.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

/**
 * @param {DOMElement} node input/textarea to focus
 */

function focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch (e) {}
}

module.exports = focusNode;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\getActiveElement.js":[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */

function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\hyphenate.js":[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\hyphenateStyleName.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

'use strict';

var hyphenate = require('./hyphenate');

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

},{"./hyphenate":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\hyphenate.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\invariant.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if ("development" !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\isNode.js":[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\isTextNode.js":[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = require('./isNode');

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

},{"./isNode":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\isNode.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\shallowEqual.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\warning.js":[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("development" !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

},{"./emptyFunction":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyFunction.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\foreach\\index.js":[function(require,module,exports){
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach(obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\function-bind\\implementation.js":[function(require,module,exports){
'use strict';

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function binder() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(that, args.concat(slice.call(arguments)));
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\function-bind\\index.js":[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\function-bind\\implementation.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\has\\src\\index.js":[function(require,module,exports){
'use strict';

var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\function-bind\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\header-case\\header-case.js":[function(require,module,exports){
'use strict';

var noCase = require('no-case');
var upperCase = require('upper-case');

/**
 * Header case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '-').replace(/^.|-./g, function (m) {
    return upperCase(m, locale);
  });
};

},{"no-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\no-case.js","upper-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case\\upper-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-document\\dist\\cjs\\components\\placeholder.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;
exports.generatePlaceholder = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var generatePlaceholder = function generatePlaceholder(name) {
  return function (_React$PureComponent) {
    _inherits(_class, _React$PureComponent);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

      console.warn('Warning: attempting to use component named ' + name + ', but it wasn\'t found');
      return _this;
    }

    _class.prototype.render = function render() {
      var _props = this.props,
          idyll = _props.idyll,
          updateProps = _props.updateProps,
          hasError = _props.hasError,
          props = _objectWithoutProperties(_props, ['idyll', 'updateProps', 'hasError']);

      return _react2.default.createElement('div', props);
    };

    return _class;
  }(_react2.default.PureComponent);
};
exports.generatePlaceholder = generatePlaceholder;

},{"react":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-document\\dist\\cjs\\index.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scrollparent = require('scrollparent');

var _scrollparent2 = _interopRequireDefault(_scrollparent);

var _scrollmonitor = require('scrollmonitor');

var _scrollmonitor2 = _interopRequireDefault(_scrollmonitor);

var _schema2element = require('./utils/schema2element');

var _schema2element2 = _interopRequireDefault(_schema2element);

var _object = require('object.entries');

var _object2 = _interopRequireDefault(_object);

var _object3 = require('object.values');

var _object4 = _interopRequireDefault(_object3);

var _placeholder = require('./components/placeholder');

var _idyllLayouts = require('idyll-layouts');

var layouts = _interopRequireWildcard(_idyllLayouts);

var _idyllThemes = require('idyll-themes');

var themes = _interopRequireWildcard(_idyllThemes);

var _utils = require('./utils');

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var updatePropsCallbacks = [];
var updateRefsCallbacks = [];
var scrollWatchers = [];
var scrollOffsets = {};
var refCache = {};
var evalContext = {};
var scrollContainer = void 0;

var getLayout = function getLayout(layout) {
  return layouts[layout.trim()] || {};
};

var getTheme = function getTheme(theme) {
  return themes[theme.trim()] || {};
};

var getRefs = function getRefs() {
  var refs = {};
  if (!scrollContainer) {
    return;
  }

  scrollWatchers.forEach(function (watcher) {
    // left and right props assume no horizontal scrolling
    var watchItem = watcher.watchItem,
        callbacks = watcher.callbacks,
        container = watcher.container,
        recalculateLocation = watcher.recalculateLocation,
        offsets = watcher.offsets,
        watcherProps = _objectWithoutProperties(watcher, ['watchItem', 'callbacks', 'container', 'recalculateLocation', 'offsets']);

    refs[watchItem.dataset.ref] = _extends({}, watcherProps, {
      domNode: watchItem
    });
  });

  return refs;
};

var wrapperKey = 0;
var createWrapper = function createWrapper(_ref) {
  var theme = _ref.theme,
      layout = _ref.layout;

  return function (_React$PureComponent) {
    _inherits(Wrapper, _React$PureComponent);

    function Wrapper(props) {
      _classCallCheck(this, Wrapper);

      var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

      _this.key = wrapperKey++;
      _this.ref = {};
      _this.onUpdateRefs = _this.onUpdateRefs.bind(_this);
      _this.onUpdateProps = _this.onUpdateProps.bind(_this);

      var vars = (0, _object4.default)(props.__vars__);
      var exps = (0, _object4.default)(props.__expr__);

      _this.usesRefs = exps.some(function (v) {
        return v.includes('refs.');
      });

      // listen for props updates IF we care about them
      if (vars.length || exps.length) {
        // called with new doc state
        // when any component calls updateProps()
        updatePropsCallbacks.push(_this.onUpdateProps);
      }

      // listen for ref updates IF we care about them
      if (props.hasHook || _this.usesRefs) {
        updateRefsCallbacks.push(_this.onUpdateRefs);
      }

      _this.state = { hasError: false, error: null };
      return _this;
    }

    Wrapper.prototype.componentDidCatch = function componentDidCatch(error, info) {
      this.setState({ hasError: true, error: error });
    };

    Wrapper.prototype.onUpdateProps = function onUpdateProps(newState, changedKeys) {
      var _props = this.props,
          __vars__ = _props.__vars__,
          __expr__ = _props.__expr__;

      // were there changes to any vars we track?
      // or vars our expressions reference?

      var shouldUpdate = changedKeys.some(function (k) {
        return (0, _object4.default)(__vars__).includes(k) || (0, _object4.default)(__expr__).some(function (expr) {
          return expr.includes(k);
        });
      });
      // if nothing we care about changed bail out and don't re-render
      if (!shouldUpdate) return;

      // update this component's state
      var nextState = {};
      // pull in the latest value for any tracked vars
      Object.keys(__vars__).forEach(function (key) {
        nextState[key] = newState[__vars__[key]];
      });
      // re-run this component's expressions using the latest doc state
      Object.keys(__expr__).forEach(function (key) {
        nextState[key] = (0, _utils.evalExpression)(newState, __expr__[key], key, evalContext);
      });
      // trigger a re-render of this component
      // and more importantly, its wrapped component
      this.setState(Object.assign({ hasError: false }, nextState));
    };

    Wrapper.prototype.onUpdateRefs = function onUpdateRefs(newState) {
      var __expr__ = this.props.__expr__;

      if (this.usesRefs) {
        var nextState = { refs: newState.refs };
        (0, _object2.default)(__expr__).forEach(function (_ref2) {
          var key = _ref2[0],
              val = _ref2[1];

          if (!key.includes('refs.')) {
            return;
          }
          nextState[key] = (0, _utils.evalExpression)(newState, val, key, evalContext);
        });

        // trigger a render with latest state
        this.setState(nextState);
      }
    };

    Wrapper.prototype.componentWillUnmount = function componentWillUnmount() {
      var propsIndex = updatePropsCallbacks.indexOf(this.onUpdateProps);
      if (propsIndex > -1) updatePropsCallbacks.splice(propsIndex, 1);

      var refsIndex = updateRefsCallbacks.indexOf(this.onUpdateRefs);
      if (refsIndex > -1) updateRefsCallbacks.splice(refsIndex, 1);
    };

    Wrapper.prototype.render = function render() {
      var _this2 = this;

      if (this.state.hasError) {
        return _react2.default.createElement('div', { style: { border: 'solid red 1px', padding: 10 } }, this.state.error.message);
      }

      var _state = this.state,
          __expr__ = _state.__expr__,
          __vars__ = _state.__vars__,
          hasError = _state.hasError,
          hasHook = _state.hasHook,
          refName = _state.refName,
          state = _objectWithoutProperties(_state, ['__expr__', '__vars__', 'hasError', 'hasHook', 'refName']);

      var _props2 = this.props,
          children = _props2.children,
          _r = _props2.refName,
          _h = _props2.hasHook,
          _e = _props2.__expr__,
          _v = _props2.__vars__,
          passThruProps = _objectWithoutProperties(_props2, ['children', 'refName', 'hasHook', '__expr__', '__vars__']);

      return _react2.default.Children.map(children, function (c, i) {
        return _react2.default.cloneElement(c, _extends({
          key: _this2.key + '-' + i,
          idyll: {
            theme: getTheme(theme),
            layout: getLayout(layout)
          }
        }, state, passThruProps));
      });
    };

    return Wrapper;
  }(_react2.default.PureComponent);
};

var getDerivedValues = function getDerivedValues(dVars) {
  var o = {};
  Object.keys(dVars).forEach(function (key) {
    return o[key] = dVars[key].value;
  });
  return o;
};

var IdyllDocument = function (_React$PureComponent2) {
  _inherits(IdyllDocument, _React$PureComponent2);

  function IdyllDocument(props) {
    _classCallCheck(this, IdyllDocument);

    var _this3 = _possibleConstructorReturn(this, _React$PureComponent2.call(this, props));

    _this3.scrollListener = _this3.scrollListener.bind(_this3);
    _this3.initScrollListener = _this3.initScrollListener.bind(_this3);

    var ast = (0, _utils.filterASTForDocument)(props.ast);

    var _splitAST = (0, _utils.splitAST)(ast),
        vars = _splitAST.vars,
        derived = _splitAST.derived,
        data = _splitAST.data,
        elements = _splitAST.elements;

    var Wrapper = createWrapper({ theme: props.theme, layout: props.layout });

    var initialState = Object.assign({}, _extends({}, (0, _utils.getVars)(vars), (0, _utils.getData)(data, props.datasets)), props.initialState ? props.initialState : {});
    var derivedVars = _this3.derivedVars = (0, _utils.getVars)(derived, initialState);

    var state = _this3.state = _extends({}, initialState, getDerivedValues(derivedVars));

    _this3.updateState = function (newState) {
      // merge new doc state with old
      var newMergedState = _extends({}, _this3.state, newState);
      // update derived values
      var newDerivedValues = getDerivedValues((0, _utils.getVars)(derived, newMergedState));
      var nextState = _extends({}, newMergedState, newDerivedValues);
      var changedKeys = Object.keys(state).reduce(function (acc, k) {
        if (state[k] !== nextState[k]) acc.push(k);
        return acc;
      }, []);
      // Update doc state reference.
      // We re-use the same object here so that
      // IdyllDocument.state can be accurately checked in tests
      state = Object.assign(state, nextState);
      // pass the new doc state to all listeners aka component wrappers
      updatePropsCallbacks.forEach(function (f) {
        return f(state, changedKeys);
      });
    };

    evalContext.update = _this3.updateState;

    // Put these in to avoid hard errors if people are on the latest
    // CLI but haven't updated their local default components
    var fallbackComponents = {
      'text-container': (0, _placeholder.generatePlaceholder)('TextContainer'),
      'full-width': (0, _placeholder.generatePlaceholder)('FullWidth')
    };

    // Components that the Document needs to function properly
    var internalComponents = {
      Wrapper: Wrapper
    };

    Object.keys(internalComponents).forEach(function (key) {
      if (props.components[key]) {
        console.warn('Warning! You are including a component named ' + key + ', but this conflicts with an internal component. Please rename your component.');
      }
    });

    var components = Object.assign(fallbackComponents, props.components, internalComponents);

    var rjs = new _schema2element2.default(components);
    var schema = (0, _utils.translate)(ast);

    var wrapTargets = (0, _utils.findWrapTargets)(schema, _this3.state);

    var refCounter = 0;

    var transformedSchema = (0, _utils.mapTree)(schema, function (node) {
      if (typeof node === 'string') return node;

      // transform refs from strings to functions and store them
      if (node.ref || node.hasHook) {
        node.refName = node.ref || node.component + (refCounter++).toString();
        node.ref = function (el) {
          if (!el) return;
          var domNode = _reactDom2.default.findDOMNode(el);
          domNode.dataset.ref = node.refName;
          scrollOffsets[node.refName] = node.scrollOffset || 0;
          refCache[node.refName] = {
            props: node,
            domNode: domNode
          };
        };
      }

      if (!wrapTargets.includes(node)) return node;

      var component = node.component,
          children = node.children,
          key = node.key,
          _node$__vars__ = node.__vars__,
          __vars__ = _node$__vars__ === undefined ? {} : _node$__vars__,
          _node$__expr__ = node.__expr__,
          __expr__ = _node$__expr__ === undefined ? {} : _node$__expr__,
          props = _objectWithoutProperties(node, ['component', 'children', 'key', '__vars__', '__expr__']);

      // assign the initial values for tracked vars and expressions


      Object.keys(props).forEach(function (k) {
        if (__vars__[k]) {
          node[k] = state[__vars__[k]];
        }
        if (__expr__[k] && !__expr__[k].includes('refs.')) {
          if (_utils.hooks.indexOf(k) > -1) {
            return;
          }
          node[k] = (0, _utils.evalExpression)(state, __expr__[k], k, evalContext);
        }
      });

      // define the function wrapped components will call via this.props.updateProps
      node.updateProps = function (newProps) {
        // init new doc state object
        var newState = {};
        // iterate over passed in updates
        Object.keys(newProps).forEach(function (k) {
          // if a tracked var was updated get its new value
          if (__vars__[k]) {
            newState[__vars__[k]] = newProps[k];
          }
        });
        _this3.updateState(newState);
      };

      return {
        component: Wrapper,
        __vars__: __vars__,
        __expr__: __expr__,
        hasHook: node.hasHook,
        refName: node.refName,
        children: [node]
      };
    });

    _this3.kids = rjs.parseSchema(transformedSchema);
    return _this3;
  }

  IdyllDocument.prototype.scrollListener = function scrollListener() {
    var _this4 = this;

    var refs = getRefs();
    updateRefsCallbacks.forEach(function (f) {
      return f(_extends({}, _this4.state, { refs: refs }));
    });
  };

  IdyllDocument.prototype.initScrollListener = function initScrollListener(el) {
    var _this5 = this;

    if (!el) return;

    var scroller = (0, _scrollparent2.default)(el);
    if (scroller === document.documentElement) {
      scroller = document.body;
    }
    scrollContainer = _scrollmonitor2.default.createContainer(scroller);
    Object.keys(refCache).forEach(function (key) {
      var _refCache$key = refCache[key],
          props = _refCache$key.props,
          domNode = _refCache$key.domNode;

      var watcher = scrollContainer.create(domNode, scrollOffsets[key]);
      _utils.hooks.forEach(function (hook) {
        if (props[hook]) {
          watcher[_utils.scrollMonitorEvents[hook]](function () {
            (0, _utils.evalExpression)(_this5.state, props[hook], hook, evalContext)();
          });
        }
      });
      scrollWatchers.push(watcher);
    });
    if (scroller === document.body) {
      scroller = window;
    }
    scroller.addEventListener('scroll', this.scrollListener);
  };

  IdyllDocument.prototype.updateDerivedVars = function updateDerivedVars(newState) {
    var _this6 = this;

    Object.keys(this.derivedVars).forEach(function (dv) {
      _this6.derivedVars[dv].value = _this6.derivedVars[dv].update(newState, _this6.state);
    });
  };

  IdyllDocument.prototype.getDerivedVars = function getDerivedVars() {
    var _this7 = this;

    var dvs = {};
    Object.keys(this.derivedVars).forEach(function (dv) {
      dvs[dv] = _this7.derivedVars[dv].value;
    });
    return dvs;
  };

  IdyllDocument.prototype.componentDidMount = function componentDidMount() {
    var _this8 = this;

    var refs = getRefs();
    updateRefsCallbacks.forEach(function (f) {
      return f(_extends({}, _this8.state, { refs: refs }));
    });

    if (typeof this.props.context === 'function') {
      this.props.context({
        update: this.updateState.bind(this),
        data: function data() {
          return _this8.state;
        }
      });
    }
  };

  IdyllDocument.prototype.render = function render() {
    return _react2.default.createElement('div', { className: 'idyll-root', ref: this.initScrollListener }, this.kids);
  };

  return IdyllDocument;
}(_react2.default.PureComponent);

IdyllDocument.defaultProps = {
  layout: 'blog',
  theme: 'github',
  insertStyles: false
};

exports.default = IdyllDocument;

},{"./components/placeholder":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-document\\dist\\cjs\\components\\placeholder.js","./utils":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-document\\dist\\cjs\\utils\\index.js","./utils/schema2element":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-document\\dist\\cjs\\utils\\schema2element.js","idyll-layouts":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\index.js","idyll-themes":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\index.js","object.entries":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\index.js","object.values":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\index.js","react":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\index.js","react-dom":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react-dom\\index.js","scrollmonitor":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\scrollmonitor\\scrollMonitor.js","scrollparent":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\scrollparent\\scrollparent.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-document\\dist\\cjs\\utils\\index.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var values = require('object.values');
var entries = require('object.entries');

var evalExpression = exports.evalExpression = function evalExpression(acc, expr, key, context) {
  var e = void 0;
  if (key && (key.match(/^on[A-Z].*/) || key.match(/^handle[A-Z].*/))) {
    var setState = setState;
    e = '\n      (() => {\n          ' + Object.keys(acc).filter(function (key) {
      return expr.includes(key);
    }).map(function (key) {
      if (key === 'refs') {
        // delete each ref's domNode property
        // because it can't be serialized
        values(acc[key]).forEach(function (v) {
          delete v.domNode;
        });
      }
      return 'var ' + key + ' = this.' + key + ';';
    }).join('\n') + '\n          ' + expr + ';\n          context.update({ ' + Object.keys(acc).filter(function (key) {
      return expr.includes(key) && key !== 'refs';
    }).map(function (key) {
      return key + ': ' + key;
    }).join(', ') + '});\n      })()\n    ';

    return function () {
      eval(e);
    }.bind(Object.assign({}, acc, context || {}));
  } else {
    e = '\n      ((context) => {\n        ' + Object.keys(acc).filter(function (key) {
      return expr.includes(key);
    }).map(function (key) {
      if (key === 'refs') {
        // delete each ref's domNode property
        // because it can't be serialized
        values(acc[key]).forEach(function (v) {
          delete v.domNode;
        });
      }
      return 'var ' + key + ' = context.' + key + ';';
    }).join('\n') + '\n        return ' + expr + ';\n      })(this)\n    ';
  }

  try {
    return function (evalString) {
      try {
        return eval('(' + evalString + ')');
      } catch (err) {}
    }.call(Object.assign({}, acc, context || {}), e);
  } catch (err) {}
};

var getVars = exports.getVars = function getVars(arr) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var evalContext = arguments[2];

  var pluck = function pluck(acc, val) {
    var variableType = val[0],
        _val$ = val[1],
        attrs = _val$ === undefined ? [] : _val$;
    var nameArr = attrs[0],
        valueArr = attrs[1];

    if (!nameArr || !valueArr) return acc;

    var _nameArr$ = nameArr[1],
        nameValue = _nameArr$[1];
    var _valueArr$ = valueArr[1],
        valueType = _valueArr$[0],
        valueValue = _valueArr$[1];

    switch (valueType) {
      case 'value':
        acc[nameValue] = valueValue;
        break;
      case 'variable':
        if (context.hasOwnProperty(valueValue)) {
          acc[nameValue] = context[valueValue];
        } else {
          acc[nameValue] = evalExpression(context, expr);
        }
        break;
      case 'expression':
        var expr = valueValue;
        if (variableType === 'var') {
          acc[nameValue] = evalExpression(context, expr);
        } else {
          acc[nameValue] = {
            value: evalExpression(context, expr),
            update: function update(newState, oldState) {
              return evalExpression(Object.assign({}, oldState, newState), expr);
            }
          };
        }
    }

    return acc;
  };

  return arr.reduce(pluck, {});
};

var getData = exports.getData = function getData(arr) {
  var datasets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var pluck = function pluck(acc, val) {
    var attrs = val[1];
    var nameArr = attrs[0];
    var _nameArr$2 = nameArr[1],
        nameValue = _nameArr$2[1];

    acc[nameValue] = datasets[nameValue];

    return acc;
  };

  return arr.reduce(pluck, {});
};

var splitAST = exports.splitAST = function splitAST(ast) {
  var state = {
    vars: [],
    derived: [],
    data: [],
    elements: []
  };

  var handleNode = function handleNode(storeElements) {
    return function (node) {
      var name = node[0],
          props = node[1],
          children = node[2];

      if (name === 'var') {
        state.vars.push(node);
      } else if (state[name]) {
        state[name].push(node);
      } else if (storeElements) {
        state.elements.push(node);
      }
      if (!children || typeof children === 'string') {
        return;
      }
      children.forEach(handleNode(false));
    };
  };

  ast.forEach(handleNode(true));
  return state;
};

var hooks = exports.hooks = ['onEnterView', 'onEnterViewFully', 'onExitView', 'onExitViewFully'];

var scrollMonitorEvents = exports.scrollMonitorEvents = {
  'onEnterView': 'enterViewport',
  'onEnterViewFully': 'fullyEnterViewport',
  'onExitView': 'partiallyExitViewport',
  'onExitViewFully': 'exitViewport'
};

var translate = exports.translate = function translate(arr) {
  var attrConvert = function attrConvert(list) {
    return list.reduce(function (acc, _ref) {
      var name = _ref[0],
          _ref$ = _ref[1],
          type = _ref$[0],
          val = _ref$[1];

      if (type === 'variable') {
        acc.__vars__ = acc.__vars__ || {};
        acc.__vars__[name] = val;
      }
      // each node keeps a list of props that are expressions
      if (type === 'expression') {
        acc.__expr__ = acc.__expr__ || {};
        acc.__expr__[name] = val;
      }
      // flag nodes that define a hook function
      if (hooks.includes(name)) {
        acc.hasHook = true;
      };

      acc[name] = val;
      return acc;
    }, {});
  };

  var tNode = function tNode(node) {
    if (typeof node === 'string') return node;

    if (node.length === 3) {
      var name = node[0],
          attrs = node[1],
          children = node[2];

      return _extends({
        component: name
      }, attrConvert(attrs), {
        children: children.map(tNode)
      });
    }
  };

  return splitAST(arr).elements.map(tNode);
};

var mapTree = exports.mapTree = function mapTree(tree, mapFn) {
  var filterFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return true;
  };

  var walkFn = function walkFn(acc, node) {
    if (typeof node !== 'string') {
      if (node.children) {
        // translated schema
        node.children = node.children.reduce(walkFn, []);
      } else {
        // compiler AST
        node[2] = node[2].reduce(walkFn, []);
      }
    }

    if (filterFn(node)) acc.push(mapFn(node));
    return acc;
  };

  return tree.reduce(walkFn, []);
};

var filterASTForDocument = exports.filterASTForDocument = function filterASTForDocument(ast) {
  return mapTree(ast, function (n) {
    return n;
  }, function (_ref2) {
    var name = _ref2[0];
    return name !== 'meta';
  });
};

var findWrapTargets = function findWrapTargets(schema, state) {
  var targets = [];
  var stateKeys = Object.keys(state);

  // always return node so we can walk the whole tree
  // but collect and ultimately return just the nodes
  // we are interested in wrapping
  mapTree(schema, function (node) {
    if (typeof node === 'string') return node;

    if (node.hasHook) {
      targets.push(node);
      return node;
    }

    // wrap all custom components
    var startsWith = node.component.charAt(0);
    if (startsWith === startsWith.toUpperCase()) {
      targets.push(node);
      return node;
    }

    // pull off the props we don't need to check

    var component = node.component,
        children = node.children,
        __vars__ = node.__vars__,
        __expr__ = node.__expr__,
        props = _objectWithoutProperties(node, ['component', 'children', '__vars__', '__expr__']);

    var expressions = Object.keys(__expr__ || {});
    var variables = Object.keys(__vars__ || {});

    // iterate over the node's prop values
    entries(props).forEach(function (_ref3) {
      var key = _ref3[0],
          val = _ref3[1];

      // avoid checking more props if we know it's a match
      if (targets.includes(node)) return;

      // Include nodes that reference a variable or expression.
      if (variables.includes(key) || expressions.includes(key)) {
        targets.push(node);
      }
    });

    return node;
  });

  return targets;
};
exports.findWrapTargets = findWrapTargets;

},{"object.entries":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\index.js","object.values":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-document\\dist\\cjs\\utils\\schema2element.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomFactories = require('react-dom-factories');

var _reactDomFactories2 = _interopRequireDefault(_reactDomFactories);

var _changeCase = require('change-case');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var _componentMap = new WeakMap();

var ReactJsonSchema = function () {
  function ReactJsonSchema(componentMap) {
    _classCallCheck(this, ReactJsonSchema);

    if (componentMap) this.setComponentMap(componentMap);
  }

  ReactJsonSchema.prototype.parseSchema = function parseSchema(schema) {
    var element = null;
    var elements = null;
    if (Array.isArray(schema)) {
      elements = this.parseSubSchemas(schema);
    } else {
      element = this.createComponent(schema);
    }
    return element || elements;
  };

  ReactJsonSchema.prototype.parseSubSchemas = function parseSubSchemas() {
    var subSchemas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var Components = [];
    var index = 0;
    for (var _iterator = subSchemas, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var subSchema = _ref;

      if (typeof subSchema === 'string') {
        Components.push(subSchema);
      } else {
        subSchema.key = typeof subSchema.key !== 'undefined' ? subSchema.key : index;
        Components.push(this.parseSchema(subSchema));
        index++;
      }
    }
    return Components;
  };

  ReactJsonSchema.prototype.createComponent = function createComponent(schema) {
    var component = schema.component,
        children = schema.children,
        text = schema.text,
        rest = _objectWithoutProperties(schema, ['component', 'children', 'text']);

    var Component = this.resolveComponent(schema);
    var Children = typeof text !== 'undefined' ? text : this.resolveComponentChildren(schema);
    return (0, _react.createElement)(Component, rest, Children);
  };

  ReactJsonSchema.prototype.resolveComponent = function resolveComponent(schema) {
    var componentMap = this.getComponentMap();
    var Component = void 0;

    // bail early if there is no component name
    if (!schema.hasOwnProperty('component')) {
      throw new Error('ReactJsonSchema could not resolve a component due to a missing component attribute in the schema.');
    }

    // if it's already a ref bail early
    if (schema.component === Object(schema.component)) {
      return schema.component;
    }

    var _schema$component$spl = schema.component.split('.'),
        name = _schema$component$spl[0],
        subs = _schema$component$spl.slice(1);

    // find the def in the provided map


    if (componentMap) {
      Component = componentMap[name];
      if (!Component) Component = componentMap[(0, _changeCase.paramCase)(name)];
      if (!Component) Component = componentMap[(0, _changeCase.pascalCase)(name)];

      for (var i = 0; i < subs.length; i++) {
        Component = Component[subs[i]];
      }
    }

    // if still nothing found it's a native DOM component or an error
    if (!Component) {
      if (_reactDomFactories2.default.hasOwnProperty(name)) {
        Component = schema.component;
      } else {
        console.warn('Could not find an implementation for: {schema.component}');
        return function () {
          _react2.default.createElement('div', { style: { color: 'black', border: 'solid 1px red' } }, _react2.default.createElement('pre', null, 'Could not find an implementation for: ', schema.component));
        };
      }
    }

    // if there is a default prop (CommonJS) return that
    return Component.default || Component;
  };

  ReactJsonSchema.prototype.resolveComponentChildren = function resolveComponentChildren(schema) {
    var children = schema.hasOwnProperty('children') ? this.parseSchema(schema.children) : [];
    return children.length ? children : undefined;
  };

  ReactJsonSchema.prototype.getComponentMap = function getComponentMap() {
    return _componentMap.get(this);
  };

  ReactJsonSchema.prototype.setComponentMap = function setComponentMap(componentMap) {
    _componentMap.set(this, componentMap);
  };

  return ReactJsonSchema;
}();

exports.default = ReactJsonSchema;

},{"change-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\change-case\\change-case.js","react":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\index.js","react-dom-factories":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react-dom-factories\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\blog\\index.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var config = {
  maxWidth: 600,
  marginLeft: '10vw'
};

exports.default = _extends({}, config, {
  styles: (0, _styles2.default)(config)
});

},{"./styles":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\blog\\styles.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\blog\\styles.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (_ref) {
  var maxWidth = _ref.maxWidth;
  return "\n\nbody {\n  margin: 0;\n}\n\n.idyll-root {\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 60px 0;\n  margin-bottom: 60px;\n}\n\n.section {\n  padding: 0 10px;\n  margin: 0 auto;\n}\n\n.article-header {\n  width: 600px;\n  max-width: 90vw;\n  margin-bottom: 45px;\n}\n\n.inset {\n  max-width: 400px;\n  margin: 0 auto;\n}\n\ninput {\n  cursor: pointer;\n}\n\n.relative {\n  position: relative;\n}\n.aside-container {\n  position: relative;\n}\n.aside {\n  position: absolute;\n  width: 300px;\n  right: calc((10vw + 600px + 150px) / -2);\n}\n\n.fixed {\n  position: fixed;\n  display: flex;\n  align-self: center;\n  /*flex-direction: column;*/\n  align-items: center;\n  right: 25px;\n  top: 0;\n  bottom: 0;\n  width: calc((80vw - 600px) - 50px);\n}\n\n.fixed div {\n  width: 100%;\n}\n\n@media all and (max-width: 1600px) {\n  .idyll-root {\n    margin-left: 100px;\n  }\n\n  .fixed {\n    width: calc((85vw - 600px) - 50px);\n  }\n}\n\n@media all and (max-width: 1000px) {\n  /* put your css styles in here */\n  .desktop {\n    display: none;\n  }\n  .relative {\n    position: static;\n  }\n  .aside {\n    position: static;\n    width: 100%;\n    right: 0;\n  }\n\n  .hed {\n    width: 100%;\n  }\n\n  .idyll-root {\n    padding: 15px 0;\n  }\n\n  .idyll-root {\n    width: 90vw;\n    max-width: 600px;\n    margin: 0 auto;\n    padding-bottom: 80vh;\n  }\n  .fixed {\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100vw;\n    top: initial;\n  }\n}\n";
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\centered\\index.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var config = {
  maxWidth: 600,
  margin: '0 auto'
};

exports.default = _extends({}, config, {
  styles: (0, _styles2.default)(config)
});

},{"./styles":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\centered\\styles.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\centered\\styles.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function () {
  return "\nbody {\n  margin: 0;\n}\n\n.idyll-root {\n  box-sizing: border-box;\n  padding: 60px 0;\n  margin-bottom: 60px;\n}\n\n.article-header {\n  margin-bottom: 45px;\n}\n\n.inset {\n  max-width: 400px;\n  margin: 0 auto;\n}\n\ninput {\n  cursor: pointer;\n}\n\n.relative {\n  position: relative;\n}\n.aside {\n  position: absolute;\n  width: 200px;\n  right: -225px;\n}\n\n@media all and (max-width: 1000px) {\n\n  .idyll-root {\n    max-width: 600px;\n    margin: 0 auto;\n    padding: 60px 20px;\n    margin-bottom: 60px;\n    width: 100%;\n  }\n\n  .desktop {\n    display: none;\n  }\n  .relative {\n    position: static;\n  }\n  .aside {\n    position: static;\n    width: 100%;\n    right: 0;\n  }\n\n}\n\n";
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\index.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _blog = require('./blog');

Object.defineProperty(exports, 'blog', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_blog).default;
  }
});

var _centered = require('./centered');

Object.defineProperty(exports, 'centered', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_centered).default;
  }
});

var _none = require('./none');

Object.defineProperty(exports, 'none', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_none).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./blog":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\blog\\index.js","./centered":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\centered\\index.js","./none":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\none\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\none\\index.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var config = {
  maxWidth: 'none'
};

exports.default = _extends({}, config, {
  styles: (0, _styles2.default)(config)
});

},{"./styles":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\none\\styles.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\none\\styles.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function () {
  return "";
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\github\\index.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var config = {};

exports.default = _extends({}, config, {
  styles: (0, _styles2.default)(config)
});

},{"./styles":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\github\\styles.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\github\\styles.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function () {
  return "\n@font-face {\n  font-family: octicons-link;\n  src: url(data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAZwABAAAAAACFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEU0lHAAAGaAAAAAgAAAAIAAAAAUdTVUIAAAZcAAAACgAAAAoAAQAAT1MvMgAAAyQAAABJAAAAYFYEU3RjbWFwAAADcAAAAEUAAACAAJThvmN2dCAAAATkAAAABAAAAAQAAAAAZnBnbQAAA7gAAACyAAABCUM+8IhnYXNwAAAGTAAAABAAAAAQABoAI2dseWYAAAFsAAABPAAAAZwcEq9taGVhZAAAAsgAAAA0AAAANgh4a91oaGVhAAADCAAAABoAAAAkCA8DRGhtdHgAAAL8AAAADAAAAAwGAACfbG9jYQAAAsAAAAAIAAAACABiATBtYXhwAAACqAAAABgAAAAgAA8ASm5hbWUAAAToAAABQgAAAlXu73sOcG9zdAAABiwAAAAeAAAAME3QpOBwcmVwAAAEbAAAAHYAAAB/aFGpk3jaTY6xa8JAGMW/O62BDi0tJLYQincXEypYIiGJjSgHniQ6umTsUEyLm5BV6NDBP8Tpts6F0v+k/0an2i+itHDw3v2+9+DBKTzsJNnWJNTgHEy4BgG3EMI9DCEDOGEXzDADU5hBKMIgNPZqoD3SilVaXZCER3/I7AtxEJLtzzuZfI+VVkprxTlXShWKb3TBecG11rwoNlmmn1P2WYcJczl32etSpKnziC7lQyWe1smVPy/Lt7Kc+0vWY/gAgIIEqAN9we0pwKXreiMasxvabDQMM4riO+qxM2ogwDGOZTXxwxDiycQIcoYFBLj5K3EIaSctAq2kTYiw+ymhce7vwM9jSqO8JyVd5RH9gyTt2+J/yUmYlIR0s04n6+7Vm1ozezUeLEaUjhaDSuXHwVRgvLJn1tQ7xiuVv/ocTRF42mNgZGBgYGbwZOBiAAFGJBIMAAizAFoAAABiAGIAznjaY2BkYGAA4in8zwXi+W2+MjCzMIDApSwvXzC97Z4Ig8N/BxYGZgcgl52BCSQKAA3jCV8CAABfAAAAAAQAAEB42mNgZGBg4f3vACQZQABIMjKgAmYAKEgBXgAAeNpjYGY6wTiBgZWBg2kmUxoDA4MPhGZMYzBi1AHygVLYQUCaawqDA4PChxhmh/8ODDEsvAwHgMKMIDnGL0x7gJQCAwMAJd4MFwAAAHjaY2BgYGaA4DAGRgYQkAHyGMF8NgYrIM3JIAGVYYDT+AEjAwuDFpBmA9KMDEwMCh9i/v8H8sH0/4dQc1iAmAkALaUKLgAAAHjaTY9LDsIgEIbtgqHUPpDi3gPoBVyRTmTddOmqTXThEXqrob2gQ1FjwpDvfwCBdmdXC5AVKFu3e5MfNFJ29KTQT48Ob9/lqYwOGZxeUelN2U2R6+cArgtCJpauW7UQBqnFkUsjAY/kOU1cP+DAgvxwn1chZDwUbd6CFimGXwzwF6tPbFIcjEl+vvmM/byA48e6tWrKArm4ZJlCbdsrxksL1AwWn/yBSJKpYbq8AXaaTb8AAHja28jAwOC00ZrBeQNDQOWO//sdBBgYGRiYWYAEELEwMTE4uzo5Zzo5b2BxdnFOcALxNjA6b2ByTswC8jYwg0VlNuoCTWAMqNzMzsoK1rEhNqByEyerg5PMJlYuVueETKcd/89uBpnpvIEVomeHLoMsAAe1Id4AAAAAAAB42oWQT07CQBTGv0JBhagk7HQzKxca2sJCE1hDt4QF+9JOS0nbaaYDCQfwCJ7Au3AHj+LO13FMmm6cl7785vven0kBjHCBhfpYuNa5Ph1c0e2Xu3jEvWG7UdPDLZ4N92nOm+EBXuAbHmIMSRMs+4aUEd4Nd3CHD8NdvOLTsA2GL8M9PODbcL+hD7C1xoaHeLJSEao0FEW14ckxC+TU8TxvsY6X0eLPmRhry2WVioLpkrbp84LLQPGI7c6sOiUzpWIWS5GzlSgUzzLBSikOPFTOXqly7rqx0Z1Q5BAIoZBSFihQYQOOBEdkCOgXTOHA07HAGjGWiIjaPZNW13/+lm6S9FT7rLHFJ6fQbkATOG1j2OFMucKJJsxIVfQORl+9Jyda6Sl1dUYhSCm1dyClfoeDve4qMYdLEbfqHf3O/AdDumsjAAB42mNgYoAAZQYjBmyAGYQZmdhL8zLdDEydARfoAqIAAAABAAMABwAKABMAB///AA8AAQAAAAAAAAAAAAAAAAABAAAAAA==) format('woff');\n}\n\n.ReactTable{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border:1px solid rgba(0,0,0,0.1);}.ReactTable *{box-sizing:border-box}.ReactTable .rt-table{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%;border-collapse:collapse;overflow:auto}.ReactTable .rt-thead{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.ReactTable .rt-thead.-headerGroups{background:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.05)}.ReactTable .rt-thead.-filters{border-bottom:1px solid rgba(0,0,0,0.05);}.ReactTable .rt-thead.-filters .rt-th{border-right:1px solid rgba(0,0,0,0.02)}.ReactTable .rt-thead.-header{box-shadow:0 2px 15px 0 rgba(0,0,0,0.15)}.ReactTable .rt-thead .rt-tr{text-align:center}.ReactTable .rt-thead .rt-th,.ReactTable .rt-thead .rt-td{padding:5px 5px;line-height:normal;position:relative;border-right:1px solid rgba(0,0,0,0.05);-webkit-transition:box-shadow .3s cubic-bezier(.175,.885,.32,1.275);transition:box-shadow .3s cubic-bezier(.175,.885,.32,1.275);box-shadow:inset 0 0 0 0 transparent;}.ReactTable .rt-thead .rt-th.-sort-asc,.ReactTable .rt-thead .rt-td.-sort-asc{box-shadow:inset 0 3px 0 0 rgba(0,0,0,0.6)}.ReactTable .rt-thead .rt-th.-sort-desc,.ReactTable .rt-thead .rt-td.-sort-desc{box-shadow:inset 0 -3px 0 0 rgba(0,0,0,0.6)}.ReactTable .rt-thead .rt-th.-cursor-pointer,.ReactTable .rt-thead .rt-td.-cursor-pointer{cursor:pointer}.ReactTable .rt-thead .rt-th:last-child,.ReactTable .rt-thead .rt-td:last-child{border-right:0}.ReactTable .rt-thead .rt-resizable-header{overflow:visible;}.ReactTable .rt-thead .rt-resizable-header:last-child{overflow:hidden}.ReactTable .rt-thead .rt-resizable-header-content{overflow:hidden;text-overflow:ellipsis}.ReactTable .rt-thead .rt-header-pivot{border-right-color:#f7f7f7}.ReactTable .rt-thead .rt-header-pivot:after,.ReactTable .rt-thead .rt-header-pivot:before{left:100%;top:50%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.ReactTable .rt-thead .rt-header-pivot:after{border-color:rgba(255,255,255,0);border-left-color:#fff;border-width:8px;margin-top:-8px}.ReactTable .rt-thead .rt-header-pivot:before{border-color:rgba(102,102,102,0);border-left-color:#f7f7f7;border-width:10px;margin-top:-10px}.ReactTable .rt-tbody{-webkit-box-flex:99999;-ms-flex:99999 1 auto;flex:99999 1 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;}.ReactTable .rt-tbody .rt-tr-group{border-bottom:solid 1px rgba(0,0,0,0.05);}.ReactTable .rt-tbody .rt-tr-group:last-child{border-bottom:0}.ReactTable .rt-tbody .rt-td{border-right:1px solid rgba(0,0,0,0.02);}.ReactTable .rt-tbody .rt-td:last-child{border-right:0}.ReactTable .rt-tbody .rt-expandable{cursor:pointer}.ReactTable .rt-tr-group{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.ReactTable .rt-tr{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.ReactTable .rt-th,.ReactTable .rt-td{-webkit-box-flex:1;-ms-flex:1 0 0px;flex:1 0 0;white-space:nowrap;text-overflow:ellipsis;padding:7px 5px;overflow:hidden;-webkit-transition:.3s ease;transition:.3s ease;-webkit-transition-property:width,min-width,padding,opacity;transition-property:width,min-width,padding,opacity;}.ReactTable .rt-th.-hidden,.ReactTable .rt-td.-hidden{width:0 !important;min-width:0 !important;padding:0 !important;border:0 !important;opacity:0 !important}.ReactTable .rt-expander{display:inline-block;position:relative;margin:0;color:transparent;margin:0 10px;}.ReactTable .rt-expander:after{content:'';position:absolute;width:0;height:0;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) rotate(-90deg);transform:translate(-50%,-50%) rotate(-90deg);border-left:5.04px solid transparent;border-right:5.04px solid transparent;border-top:7px solid rgba(0,0,0,0.8);-webkit-transition:all .3s cubic-bezier(.175,.885,.32,1.275);transition:all .3s cubic-bezier(.175,.885,.32,1.275);cursor:pointer}.ReactTable .rt-expander.-open:after{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}.ReactTable .rt-resizer{display:inline-block;position:absolute;width:36px;top:0;bottom:0;right:-18px;cursor:col-resize;z-index:10}.ReactTable .rt-tfoot{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-shadow:0 0 15px 0 rgba(0,0,0,0.15);}.ReactTable .rt-tfoot .rt-td{border-right:1px solid rgba(0,0,0,0.05);}.ReactTable .rt-tfoot .rt-td:last-child{border-right:0}.ReactTable.-striped .rt-tr.-odd{background:rgba(0,0,0,0.03)}.ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover{background:rgba(0,0,0,0.05)}.ReactTable .-pagination{z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:3px;box-shadow:0 0 15px 0 rgba(0,0,0,0.1);border-top:2px solid rgba(0,0,0,0.1);}.ReactTable .-pagination .-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;width:100%;height:100%;border:0;border-radius:3px;padding:6px;font-size:1em;color:rgba(0,0,0,0.6);background:rgba(0,0,0,0.1);-webkit-transition:all .1s ease;transition:all .1s ease;cursor:pointer;outline:none;}.ReactTable .-pagination .-btn[disabled]{opacity:.5;cursor:default}.ReactTable .-pagination .-btn:not([disabled]):hover{background:rgba(0,0,0,0.3);color:#fff}.ReactTable .-pagination .-previous,.ReactTable .-pagination .-next{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center}.ReactTable .-pagination .-center{-webkit-box-flex:1.5;-ms-flex:1.5;flex:1.5;text-align:center;margin-bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ReactTable .-pagination .-pageInfo{display:inline-block;margin:3px 10px;white-space:nowrap}.ReactTable .-pagination .-pageJump{display:inline-block;}.ReactTable .-pagination .-pageJump input{width:70px;text-align:center}.ReactTable .-pagination .-pageSizeOptions{margin:3px 10px}.ReactTable .rt-noData{display:block;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:rgba(255,255,255,0.8);-webkit-transition:all .3s ease;transition:all .3s ease;z-index:1;pointer-events:none;padding:20px;color:rgba(0,0,0,0.5)}.ReactTable .-loading{display:block;position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(255,255,255,0.8);-webkit-transition:all .3s ease;transition:all .3s ease;z-index:-1;opacity:0;pointer-events:none;}.ReactTable .-loading > div{position:absolute;display:block;text-align:center;width:100%;top:50%;left:0;font-size:15px;color:rgba(0,0,0,0.6);-webkit-transform:translateY(-52%);transform:translateY(-52%);-webkit-transition:all .3s cubic-bezier(.25,.46,.45,.94);transition:all .3s cubic-bezier(.25,.46,.45,.94)}.ReactTable .-loading.-active{opacity:1;z-index:2;pointer-events:all;}.ReactTable .-loading.-active > div{-webkit-transform:translateY(50%);transform:translateY(50%)}.ReactTable input,.ReactTable select{border:1px solid rgba(0,0,0,0.1);background:#fff;padding:5px 7px;font-size:inherit;border-radius:3px;font-weight:normal;outline:none}.ReactTable .rt-resizing .rt-th,.ReactTable .rt-resizing .rt-td{-webkit-transition:none !important;transition:none !important;cursor:col-resize;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n\n* {\n  box-sizing: border-box;\n}\nbody {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n\n.pl-c {\n  color: #969896;\n}\n\n.pl-c1,\n.pl-s .pl-v {\n  color: #0086b3;\n}\n\n.pl-e,\n.pl-en {\n  color: #795da3;\n}\n\n.pl-smi,\n.pl-s .pl-s1 {\n  color: #333;\n}\n\n.pl-ent {\n  color: #63a35c;\n}\n\n.pl-k {\n  color: #a71d5d;\n}\n\n.pl-s,\n.pl-pds,\n.pl-s .pl-pse .pl-s1,\n.pl-sr,\n.pl-sr .pl-cce,\n.pl-sr .pl-sre,\n.pl-sr .pl-sra {\n  color: #183691;\n}\n\n.pl-v,\n.pl-smw {\n  color: #ed6a43;\n}\n\n.pl-bu {\n  color: #b52a1d;\n}\n\n.pl-ii {\n  color: #f8f8f8;\n  background-color: #b52a1d;\n}\n\n.pl-c2 {\n  color: #f8f8f8;\n  background-color: #b52a1d;\n}\n\n.pl-c2::before {\n  content: \"\\000d\";\n}\n\n.pl-sr .pl-cce {\n  font-weight: bold;\n  color: #63a35c;\n}\n\n.pl-ml {\n  color: #693a17;\n}\n\n.pl-mh,\n.pl-mh .pl-en,\n.pl-ms {\n  font-weight: bold;\n  color: #1d3e81;\n}\n\n.pl-mq {\n  color: #008080;\n}\n\n.pl-mi {\n  font-style: italic;\n  color: #333;\n}\n\n.pl-mb {\n  font-weight: bold;\n  color: #333;\n}\n\n.pl-md {\n  color: #bd2c00;\n  background-color: #ffecec;\n}\n\n.pl-mi1 {\n  color: #55a532;\n  background-color: #eaffea;\n}\n\n.pl-mc {\n  color: #ef9700;\n  background-color: #ffe3b4;\n}\n\n.pl-mi2 {\n  color: #d8d8d8;\n  background-color: #808080;\n}\n\n.pl-mdr {\n  font-weight: bold;\n  color: #795da3;\n}\n\n.pl-mo {\n  color: #1d3e81;\n}\n\n.pl-ba {\n  color: #595e62;\n}\n\n.pl-sg {\n  color: #c0c0c0;\n}\n\n.pl-corl {\n  text-decoration: underline;\n  color: #183691;\n}\n\n.octicon {\n  display: inline-block;\n  vertical-align: text-top;\n  fill: currentColor;\n}\n\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\nstrong {\n  font-weight: inherit;\n}\n\nstrong {\n  font-weight: bolder;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nimg {\n  border-style: none;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\ncode,\nkbd,\npre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\ninput {\n  font: inherit;\n  margin: 10px 10px 20px 0;\n}\n\ninput {\n  overflow: visible;\n}\n\n[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n\ninput {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\na {\n  color: #0366d6;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nstrong {\n  font-weight: 600;\n}\n\nhr {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n\nhr::before {\n  display: table;\n  content: \"\";\n}\n\nhr::after {\n  display: table;\n  clear: both;\n  content: \"\";\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nh1 {\n  font-size: 32px;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 24px;\n  font-weight: 600;\n}\n\nh3 {\n  font-size: 20px;\n  font-weight: 600;\n}\n\nh4 {\n  font-size: 16px;\n  font-weight: 600;\n}\n\nh5 {\n  font-size: 14px;\n  font-weight: 600;\n}\n\nh6 {\n  font-size: 12px;\n  font-weight: 600;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nblockquote {\n  margin: 0;\n}\n\nul,\nol {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nol ol,\nul ol {\n  list-style-type: lower-roman;\n}\n\nul ul ol,\nul ol ol,\nol ul ol,\nol ol ol {\n  list-style-type: lower-alpha;\n}\n\ndd {\n  margin-left: 0;\n}\n\ncode {\n  font-family: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  font-size: 12px;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 0;\n  font: 12px \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n}\n\n.octicon {\n  vertical-align: text-bottom;\n}\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n.pl-1 {\n  padding-left: 4px !important;\n}\n\n.pl-2 {\n  padding-left: 8px !important;\n}\n\n.pl-3 {\n  padding-left: 16px !important;\n}\n\n.pl-4 {\n  padding-left: 24px !important;\n}\n\n.pl-5 {\n  padding-left: 32px !important;\n}\n\n.pl-6 {\n  padding-left: 40px !important;\n}\n\n.idyll-root::before {\n  display: table;\n  content: \"\";\n}\n\n.idyll-root::after {\n  display: table;\n  clear: both;\n  content: \"\";\n}\n\n.idyll-root>*:first-child {\n  margin-top: 0 !important;\n}\n\n.idyll-root>*:last-child {\n  margin-bottom: 0 !important;\n}\n\na:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.anchor {\n  float: left;\n  padding-right: 4px;\n  margin-left: -20px;\n  line-height: 1;\n}\n\n.anchor:focus {\n  outline: none;\n}\n\np,\nblockquote,\nul,\nol,\ndl,\ntable,\npre {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\nhr {\n  height: 0.25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n\nblockquote {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: 0.25em solid #dfe2e5;\n}\n\nblockquote>:first-child {\n  margin-top: 0;\n}\n\nblockquote>:last-child {\n  margin-bottom: 0;\n}\n\nkbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font-size: 11px;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: solid 1px #c6cbd1;\n  border-bottom-color: #959da5;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #959da5;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n\nh1 .octicon-link,\nh2 .octicon-link,\nh3 .octicon-link,\nh4 .octicon-link,\nh5 .octicon-link,\nh6 .octicon-link {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n\nh1:hover .anchor,\nh2:hover .anchor,\nh3:hover .anchor,\nh4:hover .anchor,\nh5:hover .anchor,\nh6:hover .anchor {\n  text-decoration: none;\n}\n\nh1:hover .anchor .octicon-link,\nh2:hover .anchor .octicon-link,\nh3:hover .anchor .octicon-link,\nh4:hover .anchor .octicon-link,\nh5:hover .anchor .octicon-link,\nh6:hover .anchor .octicon-link {\n  visibility: visible;\n}\n\nh1 {\n  padding-bottom: 0.3em;\n  font-size: 2em;\n  border-bottom: 1px solid #eaecef;\n}\n\nh2 {\n  padding-bottom: 0.3em;\n  font-size: 1.5em;\n  border-bottom: 1px solid #eaecef;\n}\n\nh3 {\n  font-size: 1.25em;\n}\n\nh4 {\n  font-size: 1em;\n}\n\nh5 {\n  font-size: 0.875em;\n}\n\nh6 {\n  font-size: 0.85em;\n  color: #6a737d;\n}\n\nh1.hed,\nh2.dek {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-top: 12px;\n}\n\nul,\nol {\n  padding-left: 2em;\n}\n\nul ul,\nul ol,\nol ol,\nol ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nli>p {\n  margin-top: 16px;\n}\n\nli+li {\n  margin-top: 0.25em;\n}\n\ndl {\n  padding: 0;\n}\n\ndl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n\ndl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n\ntable {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n\ntable th {\n  font-weight: 600;\n}\n\ntable th,\ntable td {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n\ntable tr {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n\ntable tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\nimg {\n  max-width: 100%;\n  box-sizing: content-box;\n  background-color: #fff;\n}\n\ncode {\n  padding: 0;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,0.05);\n  border-radius: 3px;\n}\n\ncode::before,\ncode::after {\n  letter-spacing: -0.2em;\n  content: \"\\00a0\";\n}\n\npre {\n  word-wrap: normal;\n}\n\npre>code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.highlight {\n  margin-bottom: 16px;\n}\n\n.highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.highlight pre,\npre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n\npre code {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n}\n\npre code::before,\npre code::after {\n  content: normal;\n}\n\n.full-commit .btn-outline:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n\nkbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fcfcfc;\n  border: solid 1px #c6cbd1;\n  border-bottom-color: #959da5;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #959da5;\n}\n\n:checked+.radio-label {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n\n.task-list-item {\n  list-style-type: none;\n}\n\n.task-list-item+.task-list-item {\n  margin-top: 3px;\n}\n\n.task-list-item input {\n  margin: 0 0.2em 0.25em -1.6em;\n  vertical-align: middle;\n}\n\nhr {\n  border-bottom-color: #eee;\n}\n\n";
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\idyll\\index.js":[function(require,module,exports){
arguments[4]["C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\github\\index.js"][0].apply(exports,arguments)
},{"./styles":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\idyll\\styles.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\idyll\\styles.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function () {
  return "\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  display: block;\n  width: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nh1,h2,h3,h4,h5,h6{\n  margin: 40px 0 20px 0;\n  font-weight: bold;\n}\n\n\nbody {\n  color: black;\n}\n\np, .article-body {\n  font-size: 1.15rem;\n  line-height: 1.75rem;\n}\n\n.byline a {\n  color: black;\n}\n\n.ReactTable{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border:1px solid rgba(0,0,0,0.1);}.ReactTable *{box-sizing:border-box}.ReactTable .rt-table{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%;border-collapse:collapse;overflow:auto}.ReactTable .rt-thead{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.ReactTable .rt-thead.-headerGroups{background:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.05)}.ReactTable .rt-thead.-filters{border-bottom:1px solid rgba(0,0,0,0.05);}.ReactTable .rt-thead.-filters .rt-th{border-right:1px solid rgba(0,0,0,0.02)}.ReactTable .rt-thead.-header{box-shadow:0 2px 15px 0 rgba(0,0,0,0.15)}.ReactTable .rt-thead .rt-tr{text-align:center}.ReactTable .rt-thead .rt-th,.ReactTable .rt-thead .rt-td{padding:5px 5px;line-height:normal;position:relative;border-right:1px solid rgba(0,0,0,0.05);-webkit-transition:box-shadow .3s cubic-bezier(.175,.885,.32,1.275);transition:box-shadow .3s cubic-bezier(.175,.885,.32,1.275);box-shadow:inset 0 0 0 0 transparent;}.ReactTable .rt-thead .rt-th.-sort-asc,.ReactTable .rt-thead .rt-td.-sort-asc{box-shadow:inset 0 3px 0 0 rgba(0,0,0,0.6)}.ReactTable .rt-thead .rt-th.-sort-desc,.ReactTable .rt-thead .rt-td.-sort-desc{box-shadow:inset 0 -3px 0 0 rgba(0,0,0,0.6)}.ReactTable .rt-thead .rt-th.-cursor-pointer,.ReactTable .rt-thead .rt-td.-cursor-pointer{cursor:pointer}.ReactTable .rt-thead .rt-th:last-child,.ReactTable .rt-thead .rt-td:last-child{border-right:0}.ReactTable .rt-thead .rt-resizable-header{overflow:visible;}.ReactTable .rt-thead .rt-resizable-header:last-child{overflow:hidden}.ReactTable .rt-thead .rt-resizable-header-content{overflow:hidden;text-overflow:ellipsis}.ReactTable .rt-thead .rt-header-pivot{border-right-color:#f7f7f7}.ReactTable .rt-thead .rt-header-pivot:after,.ReactTable .rt-thead .rt-header-pivot:before{left:100%;top:50%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.ReactTable .rt-thead .rt-header-pivot:after{border-color:rgba(255,255,255,0);border-left-color:#fff;border-width:8px;margin-top:-8px}.ReactTable .rt-thead .rt-header-pivot:before{border-color:rgba(102,102,102,0);border-left-color:#f7f7f7;border-width:10px;margin-top:-10px}.ReactTable .rt-tbody{-webkit-box-flex:99999;-ms-flex:99999 1 auto;flex:99999 1 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;}.ReactTable .rt-tbody .rt-tr-group{border-bottom:solid 1px rgba(0,0,0,0.05);}.ReactTable .rt-tbody .rt-tr-group:last-child{border-bottom:0}.ReactTable .rt-tbody .rt-td{border-right:1px solid rgba(0,0,0,0.02);}.ReactTable .rt-tbody .rt-td:last-child{border-right:0}.ReactTable .rt-tbody .rt-expandable{cursor:pointer}.ReactTable .rt-tr-group{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.ReactTable .rt-tr{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.ReactTable .rt-th,.ReactTable .rt-td{-webkit-box-flex:1;-ms-flex:1 0 0px;flex:1 0 0;white-space:nowrap;text-overflow:ellipsis;padding:7px 5px;overflow:hidden;-webkit-transition:.3s ease;transition:.3s ease;-webkit-transition-property:width,min-width,padding,opacity;transition-property:width,min-width,padding,opacity;}.ReactTable .rt-th.-hidden,.ReactTable .rt-td.-hidden{width:0 !important;min-width:0 !important;padding:0 !important;border:0 !important;opacity:0 !important}.ReactTable .rt-expander{display:inline-block;position:relative;margin:0;color:transparent;margin:0 10px;}.ReactTable .rt-expander:after{content:'';position:absolute;width:0;height:0;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) rotate(-90deg);transform:translate(-50%,-50%) rotate(-90deg);border-left:5.04px solid transparent;border-right:5.04px solid transparent;border-top:7px solid rgba(0,0,0,0.8);-webkit-transition:all .3s cubic-bezier(.175,.885,.32,1.275);transition:all .3s cubic-bezier(.175,.885,.32,1.275);cursor:pointer}.ReactTable .rt-expander.-open:after{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}.ReactTable .rt-resizer{display:inline-block;position:absolute;width:36px;top:0;bottom:0;right:-18px;cursor:col-resize;z-index:10}.ReactTable .rt-tfoot{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-shadow:0 0 15px 0 rgba(0,0,0,0.15);}.ReactTable .rt-tfoot .rt-td{border-right:1px solid rgba(0,0,0,0.05);}.ReactTable .rt-tfoot .rt-td:last-child{border-right:0}.ReactTable.-striped .rt-tr.-odd{background:rgba(0,0,0,0.03)}.ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover{background:rgba(0,0,0,0.05)}.ReactTable .-pagination{z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:3px;box-shadow:0 0 15px 0 rgba(0,0,0,0.1);border-top:2px solid rgba(0,0,0,0.1);}.ReactTable .-pagination .-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;width:100%;height:100%;border:0;border-radius:3px;padding:6px;font-size:1em;color:rgba(0,0,0,0.6);background:rgba(0,0,0,0.1);-webkit-transition:all .1s ease;transition:all .1s ease;cursor:pointer;outline:none;}.ReactTable .-pagination .-btn[disabled]{opacity:.5;cursor:default}.ReactTable .-pagination .-btn:not([disabled]):hover{background:rgba(0,0,0,0.3);color:#fff}.ReactTable .-pagination .-previous,.ReactTable .-pagination .-next{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center}.ReactTable .-pagination .-center{-webkit-box-flex:1.5;-ms-flex:1.5;flex:1.5;text-align:center;margin-bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ReactTable .-pagination .-pageInfo{display:inline-block;margin:3px 10px;white-space:nowrap}.ReactTable .-pagination .-pageJump{display:inline-block;}.ReactTable .-pagination .-pageJump input{width:70px;text-align:center}.ReactTable .-pagination .-pageSizeOptions{margin:3px 10px}.ReactTable .rt-noData{display:block;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:rgba(255,255,255,0.8);-webkit-transition:all .3s ease;transition:all .3s ease;z-index:1;pointer-events:none;padding:20px;color:rgba(0,0,0,0.5)}.ReactTable .-loading{display:block;position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(255,255,255,0.8);-webkit-transition:all .3s ease;transition:all .3s ease;z-index:-1;opacity:0;pointer-events:none;}.ReactTable .-loading > div{position:absolute;display:block;text-align:center;width:100%;top:50%;left:0;font-size:15px;color:rgba(0,0,0,0.6);-webkit-transform:translateY(-52%);transform:translateY(-52%);-webkit-transition:all .3s cubic-bezier(.25,.46,.45,.94);transition:all .3s cubic-bezier(.25,.46,.45,.94)}.ReactTable .-loading.-active{opacity:1;z-index:2;pointer-events:all;}.ReactTable .-loading.-active > div{-webkit-transform:translateY(50%);transform:translateY(50%)}.ReactTable input,.ReactTable select{border:1px solid rgba(0,0,0,0.1);background:#fff;padding:5px 7px;font-size:inherit;border-radius:3px;font-weight:normal;outline:none}.ReactTable .rt-resizing .rt-th,.ReactTable .rt-resizing .rt-td{-webkit-transition:none !important;transition:none !important;cursor:col-resize;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n\n.hed {\n  font-size: 3rem;\n  line-height: 3rem;\n  margin: 20px 0 20px;\n  font-weight: bold;\n  width: 150%;\n  max-width: 90vw;\n}\n\n.dek {\n  margin: 0;\n  display: block;\n  font-size: 1.5rem;\n  line-height: 2.2rem;\n  color: black;\n  margin-top: 1rem;\n  max-width: 90vw;\n}\n\n.byline {\n  font-size: .95rem;\n  line-height: 1rem;\n  color: black;\n  margin-top: 1rem;\n}\n\na, a:visited, a:hover {\n  color: black;\n  cursor: pointer;\n  text-decoration: none;\n  /*border-bottom: 1px solid #EAE7D6;*/\n  box-shadow: inset 0 -4px 0 #EAE7D6;\n  transition: box-shadow 0.25s ease-out;\n}\n\na:hover {\n  color: black;\n  /*background: #EAE7D6;*/\n  box-shadow: inset 0 -20px 0 #EAE7D6;\n}\n\npre {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\npre code {\n  background: #F2F3F2;\n  color: black;\n  padding: 20px 15px;\n  width: 100%;\n  display: block;\n  overflow-x: auto;\n  font-size: 12px;\n  text-align: initial;\n  font-style: normal;\n}\ncode {\n  background: #F2F3F2;\n  color: black;\n  padding: 1px 5px;\n}\n\n\n\nspan.action {\n  border-color: #5601FF;\n  border-width: 2px;\n  border-style: none none solid none;\n  color: #5601FF;\n  /*font-size: 0.9em;*/\n  padding: -4px 5px;\n  margin: 0 5px;\n  cursor: pointer;\n}\n\n\n";
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\index.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _github = require('./github');

Object.defineProperty(exports, 'github', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_github).default;
  }
});

var _idyll = require('./idyll');

Object.defineProperty(exports, 'idyll', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_idyll).default;
  }
});

var _none = require('./none');

Object.defineProperty(exports, 'none', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_none).default;
  }
});

var _tufte = require('./tufte');

Object.defineProperty(exports, 'tufte', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tufte).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./github":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\github\\index.js","./idyll":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\idyll\\index.js","./none":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\none\\index.js","./tufte":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\tufte\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\none\\index.js":[function(require,module,exports){
arguments[4]["C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\github\\index.js"][0].apply(exports,arguments)
},{"./styles":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\none\\styles.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\none\\styles.js":[function(require,module,exports){
arguments[4]["C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-layouts\\dist\\cjs\\none\\styles.js"][0].apply(exports,arguments)
},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\tufte\\index.js":[function(require,module,exports){
arguments[4]["C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\github\\index.js"][0].apply(exports,arguments)
},{"./styles":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\tufte\\styles.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-themes\\dist\\cjs\\tufte\\styles.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function () {
             return "\n@charset \"UTF-8\";\n\n/* Import ET Book styles\n   adapted from https://github.com/edwardtufte/et-book/blob/gh-pages/et-book.css */\n\n@font-face { font-family: \"et-book\";\n             src: url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot\");\n             src: url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff\") format(\"woff\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf\") format(\"truetype\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.svg#etbookromanosf\") format(\"svg\");\n             font-weight: normal;\n             font-style: normal; }\n\n@font-face { font-family: \"et-book\";\n             src: url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot\");\n             src: url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff\") format(\"woff\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf\") format(\"truetype\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.svg#etbookromanosf\") format(\"svg\");\n             font-weight: normal;\n             font-style: italic; }\n\n@font-face { font-family: \"et-book\";\n             src: url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot\");\n             src: url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff\") format(\"woff\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf\") format(\"truetype\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.svg#etbookromanosf\") format(\"svg\");\n             font-weight: bold;\n             font-style: normal; }\n\n@font-face { font-family: \"et-book-roman-old-style\";\n             src: url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot\");\n             src: url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff\") format(\"woff\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf\") format(\"truetype\"), url(\"https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.svg#etbookromanosf\") format(\"svg\");\n             font-weight: normal;\n             font-style: normal; }\n\n\n             .ReactTable{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border:1px solid rgba(0,0,0,0.1);}.ReactTable *{box-sizing:border-box}.ReactTable .rt-table{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%;border-collapse:collapse;overflow:auto}.ReactTable .rt-thead{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.ReactTable .rt-thead.-headerGroups{background:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.05)}.ReactTable .rt-thead.-filters{border-bottom:1px solid rgba(0,0,0,0.05);}.ReactTable .rt-thead.-filters .rt-th{border-right:1px solid rgba(0,0,0,0.02)}.ReactTable .rt-thead.-header{box-shadow:0 2px 15px 0 rgba(0,0,0,0.15)}.ReactTable .rt-thead .rt-tr{text-align:center}.ReactTable .rt-thead .rt-th,.ReactTable .rt-thead .rt-td{padding:5px 5px;line-height:normal;position:relative;border-right:1px solid rgba(0,0,0,0.05);-webkit-transition:box-shadow .3s cubic-bezier(.175,.885,.32,1.275);transition:box-shadow .3s cubic-bezier(.175,.885,.32,1.275);box-shadow:inset 0 0 0 0 transparent;}.ReactTable .rt-thead .rt-th.-sort-asc,.ReactTable .rt-thead .rt-td.-sort-asc{box-shadow:inset 0 3px 0 0 rgba(0,0,0,0.6)}.ReactTable .rt-thead .rt-th.-sort-desc,.ReactTable .rt-thead .rt-td.-sort-desc{box-shadow:inset 0 -3px 0 0 rgba(0,0,0,0.6)}.ReactTable .rt-thead .rt-th.-cursor-pointer,.ReactTable .rt-thead .rt-td.-cursor-pointer{cursor:pointer}.ReactTable .rt-thead .rt-th:last-child,.ReactTable .rt-thead .rt-td:last-child{border-right:0}.ReactTable .rt-thead .rt-resizable-header{overflow:visible;}.ReactTable .rt-thead .rt-resizable-header:last-child{overflow:hidden}.ReactTable .rt-thead .rt-resizable-header-content{overflow:hidden;text-overflow:ellipsis}.ReactTable .rt-thead .rt-header-pivot{border-right-color:#f7f7f7}.ReactTable .rt-thead .rt-header-pivot:after,.ReactTable .rt-thead .rt-header-pivot:before{left:100%;top:50%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.ReactTable .rt-thead .rt-header-pivot:after{border-color:rgba(255,255,255,0);border-left-color:#fff;border-width:8px;margin-top:-8px}.ReactTable .rt-thead .rt-header-pivot:before{border-color:rgba(102,102,102,0);border-left-color:#f7f7f7;border-width:10px;margin-top:-10px}.ReactTable .rt-tbody{-webkit-box-flex:99999;-ms-flex:99999 1 auto;flex:99999 1 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;}.ReactTable .rt-tbody .rt-tr-group{border-bottom:solid 1px rgba(0,0,0,0.05);}.ReactTable .rt-tbody .rt-tr-group:last-child{border-bottom:0}.ReactTable .rt-tbody .rt-td{border-right:1px solid rgba(0,0,0,0.02);}.ReactTable .rt-tbody .rt-td:last-child{border-right:0}.ReactTable .rt-tbody .rt-expandable{cursor:pointer}.ReactTable .rt-tr-group{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.ReactTable .rt-tr{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.ReactTable .rt-th,.ReactTable .rt-td{-webkit-box-flex:1;-ms-flex:1 0 0px;flex:1 0 0;white-space:nowrap;text-overflow:ellipsis;padding:7px 5px;overflow:hidden;-webkit-transition:.3s ease;transition:.3s ease;-webkit-transition-property:width,min-width,padding,opacity;transition-property:width,min-width,padding,opacity;}.ReactTable .rt-th.-hidden,.ReactTable .rt-td.-hidden{width:0 !important;min-width:0 !important;padding:0 !important;border:0 !important;opacity:0 !important}.ReactTable .rt-expander{display:inline-block;position:relative;margin:0;color:transparent;margin:0 10px;}.ReactTable .rt-expander:after{content:'';position:absolute;width:0;height:0;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) rotate(-90deg);transform:translate(-50%,-50%) rotate(-90deg);border-left:5.04px solid transparent;border-right:5.04px solid transparent;border-top:7px solid rgba(0,0,0,0.8);-webkit-transition:all .3s cubic-bezier(.175,.885,.32,1.275);transition:all .3s cubic-bezier(.175,.885,.32,1.275);cursor:pointer}.ReactTable .rt-expander.-open:after{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}.ReactTable .rt-resizer{display:inline-block;position:absolute;width:36px;top:0;bottom:0;right:-18px;cursor:col-resize;z-index:10}.ReactTable .rt-tfoot{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-shadow:0 0 15px 0 rgba(0,0,0,0.15);}.ReactTable .rt-tfoot .rt-td{border-right:1px solid rgba(0,0,0,0.05);}.ReactTable .rt-tfoot .rt-td:last-child{border-right:0}.ReactTable.-striped .rt-tr.-odd{background:rgba(0,0,0,0.03)}.ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover{background:rgba(0,0,0,0.05)}.ReactTable .-pagination{z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:3px;box-shadow:0 0 15px 0 rgba(0,0,0,0.1);border-top:2px solid rgba(0,0,0,0.1);}.ReactTable .-pagination .-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;width:100%;height:100%;border:0;border-radius:3px;padding:6px;font-size:1em;color:rgba(0,0,0,0.6);background:rgba(0,0,0,0.1);-webkit-transition:all .1s ease;transition:all .1s ease;cursor:pointer;outline:none;}.ReactTable .-pagination .-btn[disabled]{opacity:.5;cursor:default}.ReactTable .-pagination .-btn:not([disabled]):hover{background:rgba(0,0,0,0.3);color:#fff}.ReactTable .-pagination .-previous,.ReactTable .-pagination .-next{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center}.ReactTable .-pagination .-center{-webkit-box-flex:1.5;-ms-flex:1.5;flex:1.5;text-align:center;margin-bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ReactTable .-pagination .-pageInfo{display:inline-block;margin:3px 10px;white-space:nowrap}.ReactTable .-pagination .-pageJump{display:inline-block;}.ReactTable .-pagination .-pageJump input{width:70px;text-align:center}.ReactTable .-pagination .-pageSizeOptions{margin:3px 10px}.ReactTable .rt-noData{display:block;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:rgba(255,255,255,0.8);-webkit-transition:all .3s ease;transition:all .3s ease;z-index:1;pointer-events:none;padding:20px;color:rgba(0,0,0,0.5)}.ReactTable .-loading{display:block;position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(255,255,255,0.8);-webkit-transition:all .3s ease;transition:all .3s ease;z-index:-1;opacity:0;pointer-events:none;}.ReactTable .-loading > div{position:absolute;display:block;text-align:center;width:100%;top:50%;left:0;font-size:15px;color:rgba(0,0,0,0.6);-webkit-transform:translateY(-52%);transform:translateY(-52%);-webkit-transition:all .3s cubic-bezier(.25,.46,.45,.94);transition:all .3s cubic-bezier(.25,.46,.45,.94)}.ReactTable .-loading.-active{opacity:1;z-index:2;pointer-events:all;}.ReactTable .-loading.-active > div{-webkit-transform:translateY(50%);transform:translateY(50%)}.ReactTable input,.ReactTable select{border:1px solid rgba(0,0,0,0.1);background:#fff;padding:5px 7px;font-size:inherit;border-radius:3px;font-weight:normal;outline:none}.ReactTable .rt-resizing .rt-th,.ReactTable .rt-resizing .rt-td{-webkit-transition:none !important;transition:none !important;cursor:col-resize;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n/* Tufte CSS styles */\nhtml {\n  font-size: 15px;\n}\n\nbody {\n  background-color: #fffff8;\n}\n\nbody { width: 87.5%;\n       margin-left: auto;\n       margin-right: auto;\n       padding-left: 12.5%;\n       font-family: et-book, Palatino, \"Palatino Linotype\", \"Palatino LT STD\", \"Book Antiqua\", Georgia, serif;\n       background-color: #fffff8;\n       color: #111;\n       max-width: 1400px;\n       counter-reset: sidenote-counter; }\n\n\n.idyll-root { position: relative;\n          padding: 5rem 0rem;\n          margin-left: 0;\n          width: auto;\n          margin: auto; }\n\nh1, .hed { font-weight: 400;\n     margin-top: 4rem;\n     margin-bottom: 1.5rem;\n     font-size: 3.2rem;\n     line-height: 1; }\n\nh2 { font-style: italic;\n     font-weight: 400;\n     margin-top: 2.1rem;\n     margin-bottom: 0;\n     font-size: 2.2rem;\n     line-height: 1; }\n\nh3 { font-style: italic;\n     font-weight: 400;\n     font-size: 1.7rem;\n     margin-top: 2rem;\n     margin-bottom: 0;\n     line-height: 1; }\n\nhr { display: block;\n     height: 1px;\n     width: 55%;\n     border: 0;\n     border-top: 1px solid #ccc;\n     margin: 1em 0;\n     padding: 0; }\n\np.subtitle,\n.dek { font-style: italic;\n             margin-top: 1rem;\n             margin-bottom: 1rem;\n             font-size: 1.8rem;\n             display: block;\n             line-height: 1; }\n\n.numeral { font-family: et-book-roman-old-style; }\n\n.danger { color: red; }\n\nsection { padding-top: 1rem;\n          padding-bottom: 1rem; }\n\np, ol, ul { font-size: 1.4rem; }\n\np { line-height: 2rem;\n    margin-top: 1.4rem;\n    margin-bottom: 1.4rem;\n    padding-right: 0;\n    vertical-align: baseline; }\n\n/* Chapter Epigraphs */\ndiv.epigraph { margin: 5em 0; }\n\ndiv.epigraph > blockquote { margin-top: 3em;\n                            margin-bottom: 3em; }\n\ndiv.epigraph > blockquote, div.epigraph > blockquote > p { font-style: italic; }\n\ndiv.epigraph > blockquote > footer { font-style: normal; }\n\ndiv.epigraph > blockquote > footer > cite { font-style: italic; }\n/* end chapter epigraphs styles */\n\nblockquote { font-size: 1.4rem; }\n\nblockquote p { width: 55%;\n               margin-right: 40px; }\n\nblockquote footer { width: 55%;\n                    font-size: 1.1rem;\n                    text-align: right; }\n\nsection>ol, section>ul { width: 45%;\n                         -webkit-padding-start: 5%;\n                         -webkit-padding-end: 5%; }\n\nli { padding: 0.5rem 0; }\n\nfigure { padding: 0;\n         border: 0;\n         font-size: 100%;\n         font: inherit;\n         vertical-align: baseline;\n         max-width: 55%;\n         -webkit-margin-start: 0;\n         -webkit-margin-end: 0;\n         margin: 0 0 3em 0; }\n\nfigcaption { float: right;\n             clear: right;\n             margin-top: 0;\n             margin-bottom: 0;\n             font-size: 1.1rem;\n             line-height: 1.6;\n             vertical-align: baseline;\n             position: relative;\n             max-width: 40%; }\n\nfigure.fullwidth figcaption { margin-right: 24%; }\n\n/* Links: replicate underline that clears descenders */\na:link, a:visited { color: inherit; }\n\na:link { text-decoration: none;\n         background: -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#333, #333);\n         background: linear-gradient(#fffff8, #fffff8), linear-gradient(#fffff8, #fffff8), linear-gradient(#333, #333);\n         -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         background-repeat: no-repeat, no-repeat, repeat-x;\n         text-shadow: 0.03em 0 #fffff8, -0.03em 0 #fffff8, 0 0.03em #fffff8, 0 -0.03em #fffff8, 0.06em 0 #fffff8, -0.06em 0 #fffff8, 0.09em 0 #fffff8, -0.09em 0 #fffff8, 0.12em 0 #fffff8, -0.12em 0 #fffff8, 0.15em 0 #fffff8, -0.15em 0 #fffff8;\n         background-position: 0% 93%, 100% 93%, 0% 93%; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) { a:link { background-position-y: 87%, 87%, 87%; } }\n\na:link::selection { text-shadow: 0.03em 0 #b4d5fe, -0.03em 0 #b4d5fe, 0 0.03em #b4d5fe, 0 -0.03em #b4d5fe, 0.06em 0 #b4d5fe, -0.06em 0 #b4d5fe, 0.09em 0 #b4d5fe, -0.09em 0 #b4d5fe, 0.12em 0 #b4d5fe, -0.12em 0 #b4d5fe, 0.15em 0 #b4d5fe, -0.15em 0 #b4d5fe;\n                    background: #b4d5fe; }\n\na:link::-moz-selection { text-shadow: 0.03em 0 #b4d5fe, -0.03em 0 #b4d5fe, 0 0.03em #b4d5fe, 0 -0.03em #b4d5fe, 0.06em 0 #b4d5fe, -0.06em 0 #b4d5fe, 0.09em 0 #b4d5fe, -0.09em 0 #b4d5fe, 0.12em 0 #b4d5fe, -0.12em 0 #b4d5fe, 0.15em 0 #b4d5fe, -0.15em 0 #b4d5fe;\n                         background: #b4d5fe; }\n\n/* Sidenotes, margin notes, figures, captions */\nimg { max-width: 100%; }\n\n.aside, .sidenote, .marginnote { float: right;\n                         clear: right;\n                         margin-right: -60%;\n                         width: 50%;\n                         margin-top: 0;\n                         margin-bottom: 0;\n                         font-size: 1.1rem;\n                         line-height: 1.3;\n                         vertical-align: baseline;\n                         position: relative; }\n\n.sidenote-number { counter-increment: sidenote-counter; }\n\n.sidenote-number:after, .sidenote:before { content: counter(sidenote-counter) \" \";\n                                           font-family: et-book-roman-old-style;\n                                           position: relative;\n                                           vertical-align: baseline; }\n\n.sidenote-number:after { content: counter(sidenote-counter);\n                         font-size: 1rem;\n                         top: -0.5rem;\n                         left: 0.1rem; }\n\n.sidenote:before { content: counter(sidenote-counter) \" \";\n                   top: -0.5rem; }\n\nblockquote .sidenote, blockquote .marginnote, blockquote .aside { margin-right: -82%;\n                                               min-width: 59%;\n                                               text-align: left; }\n\np, footer, table, .aside-container { width: 55%; }\n.aside-container {\n  position: static;\n}\ndiv.fullwidth, table.fullwidth { width: 100%; }\n\ndiv.table-wrapper { overflow-x: auto;\n                    font-family: \"Trebuchet MS\", \"Gill Sans\", \"Gill Sans MT\", sans-serif; }\n\n.sans { font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, sans-serif;\n        letter-spacing: .03em; }\n\ncode { font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n       font-size: 1.0rem;\n       line-height: 1.42; }\n\n.sans > code { font-size: 1.2rem; }\n\nh1 > code, h2 > code, h3 > code { font-size: 0.80em; }\n\n.marginnote > code, .sidenote > code { font-size: 1rem; }\n\npre.code { font-size: 0.9rem;\n           width: 52.5%;\n           margin-left: 2.5%;\n           overflow-x: auto; }\n\npre.code.fullwidth { width: 90%; }\n\n.fullwidth { max-width: 90%;\n             clear:both; }\n\nspan.newthought { font-variant: small-caps;\n                  font-size: 1.2em; }\n\ninput.margin-toggle { display: none; }\n\nlabel.sidenote-number { display: inline; }\n\nlabel.margin-toggle:not(.sidenote-number) { display: none; }\n\n@media (max-width: 760px) { body { width: 84%;\n                                   padding-left: 8%;\n                                   padding-right: 8%; }\n                            p, footer { width: 100%; }\n                            pre.code { width: 97%; }\n                            ul { width: 85%; }\n                            figure { max-width: 90%; }\n                            figcaption, figure.fullwidth figcaption { margin-right: 0%;\n                                                                      max-width: none; }\n                            blockquote { margin-left: 1.5em;\n                                         margin-right: 0em; }\n                            blockquote p, blockquote footer { width: 100%; }\n                            label.margin-toggle:not(.sidenote-number) { display: inline; }\n                            .sidenote, .marginnote { display: none; }\n                            .margin-toggle:checked + .sidenote,\n                            .margin-toggle:checked + .marginnote { display: block;\n                                                                   float: left;\n                                                                   left: 1rem;\n                                                                   clear: both;\n                                                                   width: 95%;\n                                                                   margin: 1rem 2.5%;\n                                                                   vertical-align: baseline;\n                                                                   position: relative; }\n                            label { cursor: pointer; }\n                            div.table-wrapper, table { width: 85%; }\n                            img { width: 100%; } }\n\n";
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll\\src\\client\\build.js":[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var IdyllDocument = require('idyll-document').default;
var mountNode = document.getElementById('idyll-mount');

var ast = require('__IDYLL_AST__');
var components = require('__IDYLL_COMPONENTS__');
var datasets = require('__IDYLL_DATA__');
require('__IDYLL_SYNTAX_HIGHLIGHT__');

var opts = require('__IDYLL_OPTS__');
var theme = opts.theme,
    layout = opts.layout;


var mountMethod = opts.ssr ? 'hydrate' : 'render';
ReactDOM[mountMethod](React.createElement(IdyllDocument, { ast: ast, components: components, datasets: datasets, theme: theme, layout: layout }), mountNode);

},{"__IDYLL_AST__":"__IDYLL_AST__","__IDYLL_COMPONENTS__":"__IDYLL_COMPONENTS__","__IDYLL_DATA__":"__IDYLL_DATA__","__IDYLL_OPTS__":"__IDYLL_OPTS__","__IDYLL_SYNTAX_HIGHLIGHT__":"__IDYLL_SYNTAX_HIGHLIGHT__","idyll-document":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll-document\\dist\\cjs\\index.js","react":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\index.js","react-dom":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react-dom\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-callable\\index.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) {
			return false;
		}
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';

module.exports = function isCallable(value) {
	if (!value) {
		return false;
	}
	if (typeof value !== 'function' && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
		return false;
	}
	if (hasToStringTag) {
		return tryFunctionObject(value);
	}
	if (isES6ClassFn(value)) {
		return false;
	}
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-date-object\\index.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';

module.exports = function isDateObject(value) {
	if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-lower-case\\is-lower-case.js":[function(require,module,exports){
'use strict';

var lowerCase = require('lower-case');

/**
 * Check if a string is lower case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  return lowerCase(string, locale) === string;
};

},{"lower-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\lower-case\\lower-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-regex\\index.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var has = require('has');
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';

module.exports = function isRegex(value) {
	if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};

},{"has":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\has\\src\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-symbol\\index.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && _typeof(Symbol()) === 'symbol';

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isSymbolObject(value) {
		if (_typeof(value.valueOf()) !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};
	module.exports = function isSymbol(value) {
		if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false;
	};
}

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\is-upper-case\\is-upper-case.js":[function(require,module,exports){
'use strict';

var upperCase = require('upper-case');

/**
 * Check if a string is upper case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  return upperCase(string, locale) === string;
};

},{"upper-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case\\upper-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\lower-case-first\\lower-case-first.js":[function(require,module,exports){
'use strict';

var lowerCase = require('lower-case');

/**
 * Lower case the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return '';
  }

  str = String(str);

  return lowerCase(str.charAt(0), locale) + str.substr(1);
};

},{"lower-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\lower-case\\lower-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\lower-case\\lower-case.js":[function(require,module,exports){
'use strict';

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /\u0130|\u0049|\u0049\u0307/g,
    map: {
      '\u0130': 'i',
      'I': '\u0131',
      'I\u0307': 'i'
    }
  },
  az: {
    regexp: /[\u0130]/g,
    map: {
      '\u0130': 'i',
      'I': '\u0131',
      'I\u0307': 'i'
    }
  },
  lt: {
    regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
    map: {
      'I': 'i\u0307',
      'J': 'j\u0307',
      '\u012E': '\u012F\u0307',
      '\xCC': 'i\u0307\u0300',
      '\xCD': 'i\u0307\u0301',
      '\u0128': 'i\u0307\u0303'
    }
  }

  /**
   * Lowercase a string.
   *
   * @param  {String} str
   * @return {String}
   */
};module.exports = function (str, locale) {
  var lang = LANGUAGES[locale];

  str = str == null ? '' : String(str);

  if (lang) {
    str = str.replace(lang.regexp, function (m) {
      return lang.map[m];
    });
  }

  return str.toLowerCase();
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\no-case.js":[function(require,module,exports){
'use strict';

var lowerCase = require('lower-case');

var NON_WORD_REGEXP = require('./vendor/non-word-regexp');
var CAMEL_CASE_REGEXP = require('./vendor/camel-case-regexp');
var CAMEL_CASE_UPPER_REGEXP = require('./vendor/camel-case-upper-regexp');

/**
 * Sentence case a string.
 *
 * @param  {string} str
 * @param  {string} locale
 * @param  {string} replacement
 * @return {string}
 */
module.exports = function (str, locale, replacement) {
  if (str == null) {
    return '';
  }

  replacement = typeof replacement !== 'string' ? ' ' : replacement;

  function replace(match, index, value) {
    if (index === 0 || index === value.length - match.length) {
      return '';
    }

    return replacement;
  }

  str = String(str)
  // Support camel case ("camelCase" -> "camel Case").
  .replace(CAMEL_CASE_REGEXP, '$1 $2')
  // Support odd camel case ("CAMELCase" -> "CAMEL Case").
  .replace(CAMEL_CASE_UPPER_REGEXP, '$1 $2')
  // Remove all non-word characters and replace with a single space.
  .replace(NON_WORD_REGEXP, replace);

  // Lower case the entire string.
  return lowerCase(str, locale);
};

},{"./vendor/camel-case-regexp":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\vendor\\camel-case-regexp.js","./vendor/camel-case-upper-regexp":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\vendor\\camel-case-upper-regexp.js","./vendor/non-word-regexp":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\vendor\\non-word-regexp.js","lower-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\lower-case\\lower-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\vendor\\camel-case-regexp.js":[function(require,module,exports){
"use strict";

module.exports = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\vendor\\camel-case-upper-regexp.js":[function(require,module,exports){
"use strict";

module.exports = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\vendor\\non-word-regexp.js":[function(require,module,exports){
"use strict";

module.exports = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object-assign\\index.js":[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object-keys\\index.js":[function(require,module,exports){
'use strict';

// modified from https://github.com/es-shims/es5-shim

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = require('./isArguments');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
var equalsConstructorPrototype = function equalsConstructorPrototype(o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = function () {
	/* global window */
	if (typeof window === 'undefined') {
		return false;
	}
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && _typeof(window[k]) === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}();
var equalsConstructorPrototypeIfNotBuggy = function equalsConstructorPrototypeIfNotBuggy(o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2);
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;

},{"./isArguments":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object-keys\\isArguments.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object-keys\\isArguments.js":[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' && value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\implementation.js":[function(require,module,exports){
'use strict';

var ES = require('es-abstract/es7');
var has = require('has');
var bind = require('function-bind');
var isEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);

module.exports = function entries(O) {
	var obj = ES.RequireObjectCoercible(O);
	var entrys = [];
	for (var key in obj) {
		if (has(obj, key) && isEnumerable(obj, key)) {
			entrys.push([key, obj[key]]);
		}
	}
	return entrys;
};

},{"es-abstract/es7":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\es7.js","function-bind":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\function-bind\\index.js","has":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\has\\src\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\index.js":[function(require,module,exports){
'use strict';

var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var polyfill = getPolyfill();

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;

},{"./implementation":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\implementation.js","./polyfill":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\polyfill.js","./shim":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\shim.js","define-properties":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\define-properties\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\polyfill.js":[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Object.entries === 'function' ? Object.entries : implementation;
};

},{"./implementation":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\implementation.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\shim.js":[function(require,module,exports){
'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

module.exports = function shimEntries() {
	var polyfill = getPolyfill();
	define(Object, { entries: polyfill }, {
		entries: function testEntries() {
			return Object.entries !== polyfill;
		}
	});
	return polyfill;
};

},{"./polyfill":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\polyfill.js","define-properties":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\define-properties\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\implementation.js":[function(require,module,exports){
'use strict';

var ES = require('es-abstract/es7');
var has = require('has');
var bind = require('function-bind');
var isEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);

module.exports = function values(O) {
	var obj = ES.RequireObjectCoercible(O);
	var vals = [];
	for (var key in obj) {
		if (has(obj, key) && isEnumerable(obj, key)) {
			vals.push(obj[key]);
		}
	}
	return vals;
};

},{"es-abstract/es7":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\es-abstract\\es7.js","function-bind":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\function-bind\\index.js","has":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\has\\src\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\index.js":[function(require,module,exports){
arguments[4]["C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.entries\\index.js"][0].apply(exports,arguments)
},{"./implementation":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\implementation.js","./polyfill":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\polyfill.js","./shim":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\shim.js","define-properties":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\define-properties\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\polyfill.js":[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Object.values === 'function' ? Object.values : implementation;
};

},{"./implementation":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\implementation.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\shim.js":[function(require,module,exports){
'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

module.exports = function shimValues() {
	var polyfill = getPolyfill();
	define(Object, { values: polyfill }, {
		values: function testValues() {
			return Object.values !== polyfill;
		}
	});
	return polyfill;
};

},{"./polyfill":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object.values\\polyfill.js","define-properties":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\define-properties\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\param-case\\param-case.js":[function(require,module,exports){
'use strict';

var noCase = require('no-case');

/**
 * Param case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '-');
};

},{"no-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\no-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\pascal-case\\pascal-case.js":[function(require,module,exports){
'use strict';

var camelCase = require('camel-case');
var upperCaseFirst = require('upper-case-first');

/**
 * Pascal case a string.
 *
 * @param  {string}  value
 * @param  {string}  [locale]
 * @param  {boolean} [mergeNumbers]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  return upperCaseFirst(camelCase(value, locale, mergeNumbers), locale);
};

},{"camel-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\camel-case\\camel-case.js","upper-case-first":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case-first\\upper-case-first.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\path-case\\path-case.js":[function(require,module,exports){
'use strict';

var noCase = require('no-case');

/**
 * Path case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '/');
};

},{"no-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\no-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\prop-types\\checkPropTypes.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if ("development" !== 'production') {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ("development" !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

},{"./lib/ReactPropTypesSecret":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\prop-types\\lib\\ReactPropTypesSecret.js","fbjs/lib/invariant":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\invariant.js","fbjs/lib/warning":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\warning.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\prop-types\\lib\\ReactPropTypesSecret.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react-dom-factories\\index.js":[function(require,module,exports){
(function (global){
'use strict';

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
  if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
    module.exports = f(require('react'));
    /* global define */
  } else if (typeof define === 'function' && define.amd) {
    define(['react'], f);
  } else {
    var g;
    if (typeof window !== 'undefined') {
      g = window;
    } else if (typeof global !== 'undefined') {
      g = global;
    } else if (typeof self !== 'undefined') {
      g = self;
    } else {
      g = this;
    }

    if (typeof g.React === 'undefined') {
      throw Error('React module should be required before ReactDOMFactories');
    }

    g.ReactDOMFactories = f(g.React);
  }
})(function (React) {
  /**
   * Create a factory that creates HTML tag elements.
   */
  function createDOMFactory(type) {
    var factory = React.createElement.bind(null, type);
    // Expose the type on the factory and the prototype so that it can be
    // easily accessed on elements. E.g. `<Foo />.type === Foo`.
    // This should not be named `constructor` since this may not be the function
    // that created the element, and it may not even be a constructor.
    factory.type = type;
    return factory;
  };

  /**
   * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
   */
  var ReactDOMFactories = {
    a: createDOMFactory('a'),
    abbr: createDOMFactory('abbr'),
    address: createDOMFactory('address'),
    area: createDOMFactory('area'),
    article: createDOMFactory('article'),
    aside: createDOMFactory('aside'),
    audio: createDOMFactory('audio'),
    b: createDOMFactory('b'),
    base: createDOMFactory('base'),
    bdi: createDOMFactory('bdi'),
    bdo: createDOMFactory('bdo'),
    big: createDOMFactory('big'),
    blockquote: createDOMFactory('blockquote'),
    body: createDOMFactory('body'),
    br: createDOMFactory('br'),
    button: createDOMFactory('button'),
    canvas: createDOMFactory('canvas'),
    caption: createDOMFactory('caption'),
    cite: createDOMFactory('cite'),
    code: createDOMFactory('code'),
    col: createDOMFactory('col'),
    colgroup: createDOMFactory('colgroup'),
    data: createDOMFactory('data'),
    datalist: createDOMFactory('datalist'),
    dd: createDOMFactory('dd'),
    del: createDOMFactory('del'),
    details: createDOMFactory('details'),
    dfn: createDOMFactory('dfn'),
    dialog: createDOMFactory('dialog'),
    div: createDOMFactory('div'),
    dl: createDOMFactory('dl'),
    dt: createDOMFactory('dt'),
    em: createDOMFactory('em'),
    embed: createDOMFactory('embed'),
    fieldset: createDOMFactory('fieldset'),
    figcaption: createDOMFactory('figcaption'),
    figure: createDOMFactory('figure'),
    footer: createDOMFactory('footer'),
    form: createDOMFactory('form'),
    h1: createDOMFactory('h1'),
    h2: createDOMFactory('h2'),
    h3: createDOMFactory('h3'),
    h4: createDOMFactory('h4'),
    h5: createDOMFactory('h5'),
    h6: createDOMFactory('h6'),
    head: createDOMFactory('head'),
    header: createDOMFactory('header'),
    hgroup: createDOMFactory('hgroup'),
    hr: createDOMFactory('hr'),
    html: createDOMFactory('html'),
    i: createDOMFactory('i'),
    iframe: createDOMFactory('iframe'),
    img: createDOMFactory('img'),
    input: createDOMFactory('input'),
    ins: createDOMFactory('ins'),
    kbd: createDOMFactory('kbd'),
    keygen: createDOMFactory('keygen'),
    label: createDOMFactory('label'),
    legend: createDOMFactory('legend'),
    li: createDOMFactory('li'),
    link: createDOMFactory('link'),
    main: createDOMFactory('main'),
    map: createDOMFactory('map'),
    mark: createDOMFactory('mark'),
    menu: createDOMFactory('menu'),
    menuitem: createDOMFactory('menuitem'),
    meta: createDOMFactory('meta'),
    meter: createDOMFactory('meter'),
    nav: createDOMFactory('nav'),
    noscript: createDOMFactory('noscript'),
    object: createDOMFactory('object'),
    ol: createDOMFactory('ol'),
    optgroup: createDOMFactory('optgroup'),
    option: createDOMFactory('option'),
    output: createDOMFactory('output'),
    p: createDOMFactory('p'),
    param: createDOMFactory('param'),
    picture: createDOMFactory('picture'),
    pre: createDOMFactory('pre'),
    progress: createDOMFactory('progress'),
    q: createDOMFactory('q'),
    rp: createDOMFactory('rp'),
    rt: createDOMFactory('rt'),
    ruby: createDOMFactory('ruby'),
    s: createDOMFactory('s'),
    samp: createDOMFactory('samp'),
    script: createDOMFactory('script'),
    section: createDOMFactory('section'),
    select: createDOMFactory('select'),
    small: createDOMFactory('small'),
    source: createDOMFactory('source'),
    span: createDOMFactory('span'),
    strong: createDOMFactory('strong'),
    style: createDOMFactory('style'),
    sub: createDOMFactory('sub'),
    summary: createDOMFactory('summary'),
    sup: createDOMFactory('sup'),
    table: createDOMFactory('table'),
    tbody: createDOMFactory('tbody'),
    td: createDOMFactory('td'),
    textarea: createDOMFactory('textarea'),
    tfoot: createDOMFactory('tfoot'),
    th: createDOMFactory('th'),
    thead: createDOMFactory('thead'),
    time: createDOMFactory('time'),
    title: createDOMFactory('title'),
    tr: createDOMFactory('tr'),
    track: createDOMFactory('track'),
    u: createDOMFactory('u'),
    ul: createDOMFactory('ul'),
    var: createDOMFactory('var'),
    video: createDOMFactory('video'),
    wbr: createDOMFactory('wbr'),

    // SVG
    circle: createDOMFactory('circle'),
    clipPath: createDOMFactory('clipPath'),
    defs: createDOMFactory('defs'),
    ellipse: createDOMFactory('ellipse'),
    g: createDOMFactory('g'),
    image: createDOMFactory('image'),
    line: createDOMFactory('line'),
    linearGradient: createDOMFactory('linearGradient'),
    mask: createDOMFactory('mask'),
    path: createDOMFactory('path'),
    pattern: createDOMFactory('pattern'),
    polygon: createDOMFactory('polygon'),
    polyline: createDOMFactory('polyline'),
    radialGradient: createDOMFactory('radialGradient'),
    rect: createDOMFactory('rect'),
    stop: createDOMFactory('stop'),
    svg: createDOMFactory('svg'),
    text: createDOMFactory('text'),
    tspan: createDOMFactory('tspan')
  };

  // due to wrapper and conditionals at the top, this will either become
  // `module.exports ReactDOMFactories` if that is available,
  // otherwise it will be defined via `define(['react'], ReactDOMFactories)`
  // if that is available,
  // otherwise it will be defined as global variable.
  return ReactDOMFactories;
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"react":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react-dom\\cjs\\react-dom.development.js":[function(require,module,exports){
/** @license React v16.2.0
 * react-dom.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};if("development"!=="production"){(function(){'use strict';var React=require('react');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var _assign=require('object-assign');var emptyFunction=require('fbjs/lib/emptyFunction');var EventListener=require('fbjs/lib/EventListener');var getActiveElement=require('fbjs/lib/getActiveElement');var shallowEqual=require('fbjs/lib/shallowEqual');var containsNode=require('fbjs/lib/containsNode');var focusNode=require('fbjs/lib/focusNode');var emptyObject=require('fbjs/lib/emptyObject');var checkPropTypes=require('prop-types/checkPropTypes');var hyphenateStyleName=require('fbjs/lib/hyphenateStyleName');var camelizeStyleName=require('fbjs/lib/camelizeStyleName');/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */!React?invariant(false,'ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.'):void 0;// These attributes should be all lowercase to allow for
// case insensitive checks
var RESERVED_PROPS={children:true,dangerouslySetInnerHTML:true,defaultValue:true,defaultChecked:true,innerHTML:true,suppressContentEditableWarning:true,suppressHydrationWarning:true,style:true};function checkMask(value,bitmask){return(value&bitmask)===bitmask;}var DOMPropertyInjection={/**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */MUST_USE_PROPERTY:0x1,HAS_BOOLEAN_VALUE:0x4,HAS_NUMERIC_VALUE:0x8,HAS_POSITIVE_NUMERIC_VALUE:0x10|0x8,HAS_OVERLOADED_BOOLEAN_VALUE:0x20,HAS_STRING_BOOLEAN_VALUE:0x40,/**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */injectDOMPropertyConfig:function injectDOMPropertyConfig(domPropertyConfig){var Injection=DOMPropertyInjection;var Properties=domPropertyConfig.Properties||{};var DOMAttributeNamespaces=domPropertyConfig.DOMAttributeNamespaces||{};var DOMAttributeNames=domPropertyConfig.DOMAttributeNames||{};var DOMMutationMethods=domPropertyConfig.DOMMutationMethods||{};for(var propName in Properties){!!properties.hasOwnProperty(propName)?invariant(false,"injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",propName):void 0;var lowerCased=propName.toLowerCase();var propConfig=Properties[propName];var propertyInfo={attributeName:lowerCased,attributeNamespace:null,propertyName:propName,mutationMethod:null,mustUseProperty:checkMask(propConfig,Injection.MUST_USE_PROPERTY),hasBooleanValue:checkMask(propConfig,Injection.HAS_BOOLEAN_VALUE),hasNumericValue:checkMask(propConfig,Injection.HAS_NUMERIC_VALUE),hasPositiveNumericValue:checkMask(propConfig,Injection.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:checkMask(propConfig,Injection.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:checkMask(propConfig,Injection.HAS_STRING_BOOLEAN_VALUE)};!(propertyInfo.hasBooleanValue+propertyInfo.hasNumericValue+propertyInfo.hasOverloadedBooleanValue<=1)?invariant(false,"DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",propName):void 0;if(DOMAttributeNames.hasOwnProperty(propName)){var attributeName=DOMAttributeNames[propName];propertyInfo.attributeName=attributeName;}if(DOMAttributeNamespaces.hasOwnProperty(propName)){propertyInfo.attributeNamespace=DOMAttributeNamespaces[propName];}if(DOMMutationMethods.hasOwnProperty(propName)){propertyInfo.mutationMethod=DOMMutationMethods[propName];}// Downcase references to whitelist properties to check for membership
// without case-sensitivity. This allows the whitelist to pick up
// `allowfullscreen`, which should be written using the property configuration
// for `allowFullscreen`
properties[propName]=propertyInfo;}}};/* eslint-disable max-len */var ATTRIBUTE_NAME_START_CHAR=':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';/* eslint-enable max-len */var ATTRIBUTE_NAME_CHAR=ATTRIBUTE_NAME_START_CHAR+'\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';var ROOT_ATTRIBUTE_NAME='data-reactroot';/**
 * Map from property "standard name" to an object with info about how to set
 * the property in the DOM. Each object contains:
 *
 * attributeName:
 *   Used when rendering markup or with `*Attribute()`.
 * attributeNamespace
 * propertyName:
 *   Used on DOM node instances. (This includes properties that mutate due to
 *   external factors.)
 * mutationMethod:
 *   If non-null, used instead of the property or `setAttribute()` after
 *   initial render.
 * mustUseProperty:
 *   Whether the property must be accessed and mutated as an object property.
 * hasBooleanValue:
 *   Whether the property should be removed when set to a falsey value.
 * hasNumericValue:
 *   Whether the property must be numeric or parse as a numeric and should be
 *   removed when set to a falsey value.
 * hasPositiveNumericValue:
 *   Whether the property must be positive numeric or parse as a positive
 *   numeric and should be removed when set to a falsey value.
 * hasOverloadedBooleanValue:
 *   Whether the property can be used as a flag as well as with a value.
 *   Removed when strictly equal to false; present without a value when
 *   strictly equal to true; present with a value otherwise.
 */var properties={};/**
 * Checks whether a property name is a writeable attribute.
 * @method
 */function shouldSetAttribute(name,value){if(isReservedProp(name)){return false;}if(name.length>2&&(name[0]==='o'||name[0]==='O')&&(name[1]==='n'||name[1]==='N')){return false;}if(value===null){return true;}switch(typeof value==='undefined'?'undefined':_typeof(value)){case'boolean':return shouldAttributeAcceptBooleanValue(name);case'undefined':case'number':case'string':case'object':return true;default:// function, symbol
return false;}}function getPropertyInfo(name){return properties.hasOwnProperty(name)?properties[name]:null;}function shouldAttributeAcceptBooleanValue(name){if(isReservedProp(name)){return true;}var propertyInfo=getPropertyInfo(name);if(propertyInfo){return propertyInfo.hasBooleanValue||propertyInfo.hasStringBooleanValue||propertyInfo.hasOverloadedBooleanValue;}var prefix=name.toLowerCase().slice(0,5);return prefix==='data-'||prefix==='aria-';}/**
 * Checks to see if a property name is within the list of properties
 * reserved for internal React operations. These properties should
 * not be set on an HTML element.
 *
 * @private
 * @param {string} name
 * @return {boolean} If the name is within reserved props
 */function isReservedProp(name){return RESERVED_PROPS.hasOwnProperty(name);}var injection=DOMPropertyInjection;var MUST_USE_PROPERTY=injection.MUST_USE_PROPERTY;var HAS_BOOLEAN_VALUE=injection.HAS_BOOLEAN_VALUE;var HAS_NUMERIC_VALUE=injection.HAS_NUMERIC_VALUE;var HAS_POSITIVE_NUMERIC_VALUE=injection.HAS_POSITIVE_NUMERIC_VALUE;var HAS_OVERLOADED_BOOLEAN_VALUE=injection.HAS_OVERLOADED_BOOLEAN_VALUE;var HAS_STRING_BOOLEAN_VALUE=injection.HAS_STRING_BOOLEAN_VALUE;var HTMLDOMPropertyConfig={// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
Properties:{allowFullScreen:HAS_BOOLEAN_VALUE,// specifies target context for links with `preload` type
async:HAS_BOOLEAN_VALUE,// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
autoFocus:HAS_BOOLEAN_VALUE,autoPlay:HAS_BOOLEAN_VALUE,capture:HAS_OVERLOADED_BOOLEAN_VALUE,checked:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,cols:HAS_POSITIVE_NUMERIC_VALUE,contentEditable:HAS_STRING_BOOLEAN_VALUE,controls:HAS_BOOLEAN_VALUE,'default':HAS_BOOLEAN_VALUE,defer:HAS_BOOLEAN_VALUE,disabled:HAS_BOOLEAN_VALUE,download:HAS_OVERLOADED_BOOLEAN_VALUE,draggable:HAS_STRING_BOOLEAN_VALUE,formNoValidate:HAS_BOOLEAN_VALUE,hidden:HAS_BOOLEAN_VALUE,loop:HAS_BOOLEAN_VALUE,// Caution; `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`.
multiple:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,muted:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,noValidate:HAS_BOOLEAN_VALUE,open:HAS_BOOLEAN_VALUE,playsInline:HAS_BOOLEAN_VALUE,readOnly:HAS_BOOLEAN_VALUE,required:HAS_BOOLEAN_VALUE,reversed:HAS_BOOLEAN_VALUE,rows:HAS_POSITIVE_NUMERIC_VALUE,rowSpan:HAS_NUMERIC_VALUE,scoped:HAS_BOOLEAN_VALUE,seamless:HAS_BOOLEAN_VALUE,selected:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,size:HAS_POSITIVE_NUMERIC_VALUE,start:HAS_NUMERIC_VALUE,// support for projecting regular DOM Elements via V1 named slots ( shadow dom )
span:HAS_POSITIVE_NUMERIC_VALUE,spellCheck:HAS_STRING_BOOLEAN_VALUE,// Style must be explicitly set in the attribute list. React components
// expect a style object
style:0,// Keep it in the whitelist because it is case-sensitive for SVG.
tabIndex:0,// itemScope is for for Microdata support.
// See http://schema.org/docs/gs.html
itemScope:HAS_BOOLEAN_VALUE,// These attributes must stay in the white-list because they have
// different attribute names (see DOMAttributeNames below)
acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,// Attributes with mutation methods must be specified in the whitelist
// Set the string boolean flag to allow the behavior
value:HAS_STRING_BOOLEAN_VALUE},DOMAttributeNames:{acceptCharset:'accept-charset',className:'class',htmlFor:'for',httpEquiv:'http-equiv'},DOMMutationMethods:{value:function value(node,_value){if(_value==null){return node.removeAttribute('value');}// Number inputs get special treatment due to some edge cases in
// Chrome. Let everything else assign the value attribute as normal.
// https://github.com/facebook/react/issues/7253#issuecomment-236074326
if(node.type!=='number'||node.hasAttribute('value')===false){node.setAttribute('value',''+_value);}else if(node.validity&&!node.validity.badInput&&node.ownerDocument.activeElement!==node){// Don't assign an attribute if validation reports bad
// input. Chrome will clear the value. Additionally, don't
// operate on inputs that have focus, otherwise Chrome might
// strip off trailing decimal places and cause the user's
// cursor position to jump to the beginning of the input.
//
// In ReactDOMInput, we have an onBlur event that will trigger
// this function again when focus is lost.
node.setAttribute('value',''+_value);}}}};var HAS_STRING_BOOLEAN_VALUE$1=injection.HAS_STRING_BOOLEAN_VALUE;var NS={xlink:'http://www.w3.org/1999/xlink',xml:'http://www.w3.org/XML/1998/namespace'};/**
 * This is a list of all SVG attributes that need special casing,
 * namespacing, or boolean value assignment.
 *
 * When adding attributes to this list, be sure to also add them to
 * the `possibleStandardNames` module to ensure casing and incorrect
 * name warnings.
 *
 * SVG Attributes List:
 * https://www.w3.org/TR/SVG/attindex.html
 * SMIL Spec:
 * https://www.w3.org/TR/smil
 */var ATTRS=['accent-height','alignment-baseline','arabic-form','baseline-shift','cap-height','clip-path','clip-rule','color-interpolation','color-interpolation-filters','color-profile','color-rendering','dominant-baseline','enable-background','fill-opacity','fill-rule','flood-color','flood-opacity','font-family','font-size','font-size-adjust','font-stretch','font-style','font-variant','font-weight','glyph-name','glyph-orientation-horizontal','glyph-orientation-vertical','horiz-adv-x','horiz-origin-x','image-rendering','letter-spacing','lighting-color','marker-end','marker-mid','marker-start','overline-position','overline-thickness','paint-order','panose-1','pointer-events','rendering-intent','shape-rendering','stop-color','stop-opacity','strikethrough-position','strikethrough-thickness','stroke-dasharray','stroke-dashoffset','stroke-linecap','stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke-width','text-anchor','text-decoration','text-rendering','underline-position','underline-thickness','unicode-bidi','unicode-range','units-per-em','v-alphabetic','v-hanging','v-ideographic','v-mathematical','vector-effect','vert-adv-y','vert-origin-x','vert-origin-y','word-spacing','writing-mode','x-height','xlink:actuate','xlink:arcrole','xlink:href','xlink:role','xlink:show','xlink:title','xlink:type','xml:base','xmlns:xlink','xml:lang','xml:space'];var SVGDOMPropertyConfig={Properties:{autoReverse:HAS_STRING_BOOLEAN_VALUE$1,externalResourcesRequired:HAS_STRING_BOOLEAN_VALUE$1,preserveAlpha:HAS_STRING_BOOLEAN_VALUE$1},DOMAttributeNames:{autoReverse:'autoReverse',externalResourcesRequired:'externalResourcesRequired',preserveAlpha:'preserveAlpha'},DOMAttributeNamespaces:{xlinkActuate:NS.xlink,xlinkArcrole:NS.xlink,xlinkHref:NS.xlink,xlinkRole:NS.xlink,xlinkShow:NS.xlink,xlinkTitle:NS.xlink,xlinkType:NS.xlink,xmlBase:NS.xml,xmlLang:NS.xml,xmlSpace:NS.xml}};var CAMELIZE=/[\-\:]([a-z])/g;var capitalize=function capitalize(token){return token[1].toUpperCase();};ATTRS.forEach(function(original){var reactName=original.replace(CAMELIZE,capitalize);SVGDOMPropertyConfig.Properties[reactName]=0;SVGDOMPropertyConfig.DOMAttributeNames[reactName]=original;});injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig);injection.injectDOMPropertyConfig(SVGDOMPropertyConfig);var ReactErrorUtils={// Used by Fiber to simulate a try-catch.
_caughtError:null,_hasCaughtError:false,// Used by event system to capture/rethrow the first error.
_rethrowError:null,_hasRethrowError:false,injection:{injectErrorUtils:function injectErrorUtils(injectedErrorUtils){!(typeof injectedErrorUtils.invokeGuardedCallback==='function')?invariant(false,'Injected invokeGuardedCallback() must be a function.'):void 0;_invokeGuardedCallback=injectedErrorUtils.invokeGuardedCallback;}},/**
   * Call a function while guarding against errors that happens within it.
   * Returns an error if it throws, otherwise null.
   *
   * In production, this is implemented using a try-catch. The reason we don't
   * use a try-catch directly is so that we can swap out a different
   * implementation in DEV mode.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */invokeGuardedCallback:function invokeGuardedCallback(name,func,context,a,b,c,d,e,f){_invokeGuardedCallback.apply(ReactErrorUtils,arguments);},/**
   * Same as invokeGuardedCallback, but instead of returning an error, it stores
   * it in a global so it can be rethrown by `rethrowCaughtError` later.
   * TODO: See if _caughtError and _rethrowError can be unified.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */invokeGuardedCallbackAndCatchFirstError:function invokeGuardedCallbackAndCatchFirstError(name,func,context,a,b,c,d,e,f){ReactErrorUtils.invokeGuardedCallback.apply(this,arguments);if(ReactErrorUtils.hasCaughtError()){var error=ReactErrorUtils.clearCaughtError();if(!ReactErrorUtils._hasRethrowError){ReactErrorUtils._hasRethrowError=true;ReactErrorUtils._rethrowError=error;}}},/**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */rethrowCaughtError:function rethrowCaughtError(){return _rethrowCaughtError.apply(ReactErrorUtils,arguments);},hasCaughtError:function hasCaughtError(){return ReactErrorUtils._hasCaughtError;},clearCaughtError:function clearCaughtError(){if(ReactErrorUtils._hasCaughtError){var error=ReactErrorUtils._caughtError;ReactErrorUtils._caughtError=null;ReactErrorUtils._hasCaughtError=false;return error;}else{invariant(false,'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.');}}};var _invokeGuardedCallback=function _invokeGuardedCallback(name,func,context,a,b,c,d,e,f){ReactErrorUtils._hasCaughtError=false;ReactErrorUtils._caughtError=null;var funcArgs=Array.prototype.slice.call(arguments,3);try{func.apply(context,funcArgs);}catch(error){ReactErrorUtils._caughtError=error;ReactErrorUtils._hasCaughtError=true;}};{// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// untintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
//
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');var invokeGuardedCallbackDev=function invokeGuardedCallbackDev(name,func,context,a,b,c,d,e,f){// Keeps track of whether the user-provided callback threw an error. We
// set this to true at the beginning, then set it to false right after
// calling the function. If the function errors, `didError` will never be
// set to false. This strategy works even if the browser is flaky and
// fails to call our global error handler, because it doesn't rely on
// the error event at all.
var didError=true;// Create an event handler for our fake event. We will synchronously
// dispatch our fake event using `dispatchEvent`. Inside the handler, we
// call the user-provided callback.
var funcArgs=Array.prototype.slice.call(arguments,3);function callCallback(){// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
fakeNode.removeEventListener(evtType,callCallback,false);func.apply(context,funcArgs);didError=false;}// Create a global error event handler. We use this to capture the value
// that was thrown. It's possible that this error handler will fire more
// than once; for example, if non-React code also calls `dispatchEvent`
// and a handler for that event throws. We should be resilient to most of
// those cases. Even if our error event handler fires more than once, the
// last error event is always used. If the callback actually does error,
// we know that the last error event is the correct one, because it's not
// possible for anything else to have happened in between our callback
// erroring and the code that follows the `dispatchEvent` call below. If
// the callback doesn't error, but the error event was fired, we know to
// ignore it because `didError` will be false, as described above.
var error=void 0;// Use this to track whether the error event is ever called.
var didSetError=false;var isCrossOriginError=false;function onError(event){error=event.error;didSetError=true;if(error===null&&event.colno===0&&event.lineno===0){isCrossOriginError=true;}}// Create a fake event type.
var evtType='react-'+(name?name:'invokeguardedcallback');// Attach our event handlers
window.addEventListener('error',onError);fakeNode.addEventListener(evtType,callCallback,false);// Synchronously dispatch our fake event. If the user-provided function
// errors, it will trigger our global error handler.
var evt=document.createEvent('Event');evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);if(didError){if(!didSetError){// The callback errored, but the error event never fired.
error=new Error('An error was thrown inside one of your components, but React '+"doesn't know what it was. This is likely due to browser "+'flakiness. React does its best to preserve the "Pause on '+'exceptions" behavior of the DevTools, which requires some '+"DEV-mode only tricks. It's possible that these don't work in "+'your browser. Try triggering the error in production mode, '+'or switching to a modern browser. If you suspect that this is '+'actually an issue with React, please file an issue.');}else if(isCrossOriginError){error=new Error("A cross-origin error was thrown. React doesn't have access to "+'the actual error object in development. '+'See https://fb.me/react-crossorigin-error for more information.');}ReactErrorUtils._hasCaughtError=true;ReactErrorUtils._caughtError=error;}else{ReactErrorUtils._hasCaughtError=false;ReactErrorUtils._caughtError=null;}// Remove our event listeners
window.removeEventListener('error',onError);};_invokeGuardedCallback=invokeGuardedCallbackDev;}}var _rethrowCaughtError=function _rethrowCaughtError(){if(ReactErrorUtils._hasRethrowError){var error=ReactErrorUtils._rethrowError;ReactErrorUtils._rethrowError=null;ReactErrorUtils._hasRethrowError=false;throw error;}};/**
 * Injectable ordering of event plugins.
 */var eventPluginOrder=null;/**
 * Injectable mapping from names to event plugin modules.
 */var namesToPlugins={};/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */function recomputePluginOrdering(){if(!eventPluginOrder){// Wait until an `eventPluginOrder` is injected.
return;}for(var pluginName in namesToPlugins){var pluginModule=namesToPlugins[pluginName];var pluginIndex=eventPluginOrder.indexOf(pluginName);!(pluginIndex>-1)?invariant(false,'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.',pluginName):void 0;if(plugins[pluginIndex]){continue;}!pluginModule.extractEvents?invariant(false,'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.',pluginName):void 0;plugins[pluginIndex]=pluginModule;var publishedEvents=pluginModule.eventTypes;for(var eventName in publishedEvents){!publishEventForPlugin(publishedEvents[eventName],pluginModule,eventName)?invariant(false,'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',eventName,pluginName):void 0;}}}/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */function publishEventForPlugin(dispatchConfig,pluginModule,eventName){!!eventNameDispatchConfigs.hasOwnProperty(eventName)?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.',eventName):void 0;eventNameDispatchConfigs[eventName]=dispatchConfig;var phasedRegistrationNames=dispatchConfig.phasedRegistrationNames;if(phasedRegistrationNames){for(var phaseName in phasedRegistrationNames){if(phasedRegistrationNames.hasOwnProperty(phaseName)){var phasedRegistrationName=phasedRegistrationNames[phaseName];publishRegistrationName(phasedRegistrationName,pluginModule,eventName);}}return true;}else if(dispatchConfig.registrationName){publishRegistrationName(dispatchConfig.registrationName,pluginModule,eventName);return true;}return false;}/**
 * Publishes a registration name that is used to identify dispatched events.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */function publishRegistrationName(registrationName,pluginModule,eventName){!!registrationNameModules[registrationName]?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.',registrationName):void 0;registrationNameModules[registrationName]=pluginModule;registrationNameDependencies[registrationName]=pluginModule.eventTypes[eventName].dependencies;{var lowerCasedName=registrationName.toLowerCase();possibleRegistrationNames[lowerCasedName]=registrationName;if(registrationName==='onDoubleClick'){possibleRegistrationNames.ondblclick=registrationName;}}}/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 *//**
 * Ordered list of injected plugins.
 */var plugins=[];/**
 * Mapping from event name to dispatch config
 */var eventNameDispatchConfigs={};/**
 * Mapping from registration name to plugin module
 */var registrationNameModules={};/**
 * Mapping from registration name to event name
 */var registrationNameDependencies={};/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */var possibleRegistrationNames={};// Trust the developer to only use possibleRegistrationNames in true
/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */function injectEventPluginOrder(injectedEventPluginOrder){!!eventPluginOrder?invariant(false,'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.'):void 0;// Clone the ordering so it cannot be dynamically mutated.
eventPluginOrder=Array.prototype.slice.call(injectedEventPluginOrder);recomputePluginOrdering();}/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */function injectEventPluginsByName(injectedNamesToPlugins){var isOrderingDirty=false;for(var pluginName in injectedNamesToPlugins){if(!injectedNamesToPlugins.hasOwnProperty(pluginName)){continue;}var pluginModule=injectedNamesToPlugins[pluginName];if(!namesToPlugins.hasOwnProperty(pluginName)||namesToPlugins[pluginName]!==pluginModule){!!namesToPlugins[pluginName]?invariant(false,'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.',pluginName):void 0;namesToPlugins[pluginName]=pluginModule;isOrderingDirty=true;}}if(isOrderingDirty){recomputePluginOrdering();}}var EventPluginRegistry=Object.freeze({plugins:plugins,eventNameDispatchConfigs:eventNameDispatchConfigs,registrationNameModules:registrationNameModules,registrationNameDependencies:registrationNameDependencies,possibleRegistrationNames:possibleRegistrationNames,injectEventPluginOrder:injectEventPluginOrder,injectEventPluginsByName:injectEventPluginsByName});var getFiberCurrentPropsFromNode=null;var getInstanceFromNode=null;var getNodeFromInstance=null;var injection$2={injectComponentTree:function injectComponentTree(Injected){getFiberCurrentPropsFromNode=Injected.getFiberCurrentPropsFromNode;getInstanceFromNode=Injected.getInstanceFromNode;getNodeFromInstance=Injected.getNodeFromInstance;{warning(getNodeFromInstance&&getInstanceFromNode,'EventPluginUtils.injection.injectComponentTree(...): Injected '+'module is missing getNodeFromInstance or getInstanceFromNode.');}}};var validateEventDispatches;{validateEventDispatches=function validateEventDispatches(event){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;var listenersIsArr=Array.isArray(dispatchListeners);var listenersLen=listenersIsArr?dispatchListeners.length:dispatchListeners?1:0;var instancesIsArr=Array.isArray(dispatchInstances);var instancesLen=instancesIsArr?dispatchInstances.length:dispatchInstances?1:0;warning(instancesIsArr===listenersIsArr&&instancesLen===listenersLen,'EventPluginUtils: Invalid `event`.');};}/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */function executeDispatch(event,simulated,listener,inst){var type=event.type||'unknown-event';event.currentTarget=getNodeFromInstance(inst);ReactErrorUtils.invokeGuardedCallbackAndCatchFirstError(type,listener,undefined,event);event.currentTarget=null;}/**
 * Standard/simple iteration through an event's collected dispatches.
 */function executeDispatchesInOrder(event,simulated){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;{validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;}// Listeners and Instances are two parallel arrays that are always in sync.
executeDispatch(event,simulated,dispatchListeners[i],dispatchInstances[i]);}}else if(dispatchListeners){executeDispatch(event,simulated,dispatchListeners,dispatchInstances);}event._dispatchListeners=null;event._dispatchInstances=null;}/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 *//**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 *//**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 *//**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */function accumulateInto(current,next){!(next!=null)?invariant(false,'accumulateInto(...): Accumulated items must not be null or undefined.'):void 0;if(current==null){return next;}// Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
if(Array.isArray(current)){if(Array.isArray(next)){current.push.apply(current,next);return current;}current.push(next);return current;}if(Array.isArray(next)){// A bit too dangerous to mutate `next`.
return[current].concat(next);}return[current,next];}/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 * @param {function} cb Callback invoked with each element or a collection.
 * @param {?} [scope] Scope used as `this` in a callback.
 */function forEachAccumulated(arr,cb,scope){if(Array.isArray(arr)){arr.forEach(cb,scope);}else if(arr){cb.call(scope,arr);}}/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */var eventQueue=null;/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */var executeDispatchesAndRelease=function executeDispatchesAndRelease(event,simulated){if(event){executeDispatchesInOrder(event,simulated);if(!event.isPersistent()){event.constructor.release(event);}}};var executeDispatchesAndReleaseSimulated=function executeDispatchesAndReleaseSimulated(e){return executeDispatchesAndRelease(e,true);};var executeDispatchesAndReleaseTopLevel=function executeDispatchesAndReleaseTopLevel(e){return executeDispatchesAndRelease(e,false);};function isInteractive(tag){return tag==='button'||tag==='input'||tag==='select'||tag==='textarea';}function shouldPreventMouseEvent(name,type,props){switch(name){case'onClick':case'onClickCapture':case'onDoubleClick':case'onDoubleClickCapture':case'onMouseDown':case'onMouseDownCapture':case'onMouseMove':case'onMouseMoveCapture':case'onMouseUp':case'onMouseUpCapture':return!!(props.disabled&&isInteractive(type));default:return false;}}/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 *//**
 * Methods for injecting dependencies.
 */var injection$1={/**
   * @param {array} InjectedEventPluginOrder
   * @public
   */injectEventPluginOrder:injectEventPluginOrder,/**
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   */injectEventPluginsByName:injectEventPluginsByName};/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */function getListener(inst,registrationName){var listener;// TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
// live here; needs to be moved to a better place soon
var stateNode=inst.stateNode;if(!stateNode){// Work in progress (ex: onload events in incremental mode).
return null;}var props=getFiberCurrentPropsFromNode(stateNode);if(!props){// Work in progress.
return null;}listener=props[registrationName];if(shouldPreventMouseEvent(registrationName,inst.type,props)){return null;}!(!listener||typeof listener==='function')?invariant(false,'Expected `%s` listener to be a function, instead got a value of `%s` type.',registrationName,typeof listener==='undefined'?'undefined':_typeof(listener)):void 0;return listener;}/**
 * Allows registered plugins an opportunity to extract events from top-level
 * native browser events.
 *
 * @return {*} An accumulation of synthetic events.
 * @internal
 */function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var events;for(var i=0;i<plugins.length;i++){// Not every plugin in the ordering may be loaded at runtime.
var possiblePlugin=plugins[i];if(possiblePlugin){var extractedEvents=possiblePlugin.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);if(extractedEvents){events=accumulateInto(events,extractedEvents);}}}return events;}/**
 * Enqueues a synthetic event that should be dispatched when
 * `processEventQueue` is invoked.
 *
 * @param {*} events An accumulation of synthetic events.
 * @internal
 */function enqueueEvents(events){if(events){eventQueue=accumulateInto(eventQueue,events);}}/**
 * Dispatches all synthetic events on the event queue.
 *
 * @internal
 */function processEventQueue(simulated){// Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var processingEventQueue=eventQueue;eventQueue=null;if(!processingEventQueue){return;}if(simulated){forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseSimulated);}else{forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseTopLevel);}!!eventQueue?invariant(false,'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.'):void 0;// This would be a good time to rethrow if any of the event handlers threw.
ReactErrorUtils.rethrowCaughtError();}var EventPluginHub=Object.freeze({injection:injection$1,getListener:getListener,extractEvents:extractEvents,enqueueEvents:enqueueEvents,processEventQueue:processEventQueue});var IndeterminateComponent=0;// Before we know whether it is functional or class
var FunctionalComponent=1;var ClassComponent=2;var HostRoot=3;// Root of a host tree. Could be nested inside another node.
var HostPortal=4;// A subtree. Could be an entry point to a different renderer.
var HostComponent=5;var HostText=6;var CallComponent=7;var CallHandlerPhase=8;var ReturnComponent=9;var Fragment=10;var randomKey=Math.random().toString(36).slice(2);var internalInstanceKey='__reactInternalInstance$'+randomKey;var internalEventHandlersKey='__reactEventHandlers$'+randomKey;function precacheFiberNode$1(hostInst,node){node[internalInstanceKey]=hostInst;}/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */function getClosestInstanceFromNode(node){if(node[internalInstanceKey]){return node[internalInstanceKey];}// Walk up the tree until we find an ancestor whose instance we have cached.
var parents=[];while(!node[internalInstanceKey]){parents.push(node);if(node.parentNode){node=node.parentNode;}else{// Top of the tree. This node must not be part of a React tree (or is
// unmounted, potentially).
return null;}}var closest=void 0;var inst=node[internalInstanceKey];if(inst.tag===HostComponent||inst.tag===HostText){// In Fiber, this will always be the deepest root.
return inst;}for(;node&&(inst=node[internalInstanceKey]);node=parents.pop()){closest=inst;}return closest;}/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */function getInstanceFromNode$1(node){var inst=node[internalInstanceKey];if(inst){if(inst.tag===HostComponent||inst.tag===HostText){return inst;}else{return null;}}return null;}/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */function getNodeFromInstance$1(inst){if(inst.tag===HostComponent||inst.tag===HostText){// In Fiber this, is just the state node right now. We assume it will be
// a host component or host text.
return inst.stateNode;}// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
invariant(false,'getNodeFromInstance: Invalid argument.');}function getFiberCurrentPropsFromNode$1(node){return node[internalEventHandlersKey]||null;}function updateFiberProps$1(node,props){node[internalEventHandlersKey]=props;}var ReactDOMComponentTree=Object.freeze({precacheFiberNode:precacheFiberNode$1,getClosestInstanceFromNode:getClosestInstanceFromNode,getInstanceFromNode:getInstanceFromNode$1,getNodeFromInstance:getNodeFromInstance$1,getFiberCurrentPropsFromNode:getFiberCurrentPropsFromNode$1,updateFiberProps:updateFiberProps$1});function getParent(inst){do{inst=inst['return'];// TODO: If this is a HostRoot we might want to bail out.
// That is depending on if we want nested subtrees (layers) to bubble
// events to their parent. We could also go through parentNode on the
// host node but that wouldn't work for React Native and doesn't let us
// do the portal feature.
}while(inst&&inst.tag!==HostComponent);if(inst){return inst;}return null;}/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */function getLowestCommonAncestor(instA,instB){var depthA=0;for(var tempA=instA;tempA;tempA=getParent(tempA)){depthA++;}var depthB=0;for(var tempB=instB;tempB;tempB=getParent(tempB)){depthB++;}// If A is deeper, crawl up.
while(depthA-depthB>0){instA=getParent(instA);depthA--;}// If B is deeper, crawl up.
while(depthB-depthA>0){instB=getParent(instB);depthB--;}// Walk in lockstep until we find a match.
var depth=depthA;while(depth--){if(instA===instB||instA===instB.alternate){return instA;}instA=getParent(instA);instB=getParent(instB);}return null;}/**
 * Return if A is an ancestor of B.
 *//**
 * Return the parent instance of the passed-in instance.
 */function getParentInstance(inst){return getParent(inst);}/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */function traverseTwoPhase(inst,fn,arg){var path=[];while(inst){path.push(inst);inst=getParent(inst);}var i;for(i=path.length;i-->0;){fn(path[i],'captured',arg);}for(i=0;i<path.length;i++){fn(path[i],'bubbled',arg);}}/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */function traverseEnterLeave(from,to,fn,argFrom,argTo){var common=from&&to?getLowestCommonAncestor(from,to):null;var pathFrom=[];while(true){if(!from){break;}if(from===common){break;}var alternate=from.alternate;if(alternate!==null&&alternate===common){break;}pathFrom.push(from);from=getParent(from);}var pathTo=[];while(true){if(!to){break;}if(to===common){break;}var _alternate=to.alternate;if(_alternate!==null&&_alternate===common){break;}pathTo.push(to);to=getParent(to);}for(var i=0;i<pathFrom.length;i++){fn(pathFrom[i],'bubbled',argFrom);}for(var _i=pathTo.length;_i-->0;){fn(pathTo[_i],'captured',argTo);}}/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */function listenerAtPhase(inst,event,propagationPhase){var registrationName=event.dispatchConfig.phasedRegistrationNames[propagationPhase];return getListener(inst,registrationName);}/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing even a
 * single one.
 *//**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */function accumulateDirectionalDispatches(inst,phase,event){{warning(inst,'Dispatching inst must not be null');}var listener=listenerAtPhase(inst,event,phase);if(listener){event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);event._dispatchInstances=accumulateInto(event._dispatchInstances,inst);}}/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */function accumulateTwoPhaseDispatchesSingle(event){if(event&&event.dispatchConfig.phasedRegistrationNames){traverseTwoPhase(event._targetInst,accumulateDirectionalDispatches,event);}}/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */function accumulateTwoPhaseDispatchesSingleSkipTarget(event){if(event&&event.dispatchConfig.phasedRegistrationNames){var targetInst=event._targetInst;var parentInst=targetInst?getParentInstance(targetInst):null;traverseTwoPhase(parentInst,accumulateDirectionalDispatches,event);}}/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */function accumulateDispatches(inst,ignoredDirection,event){if(inst&&event&&event.dispatchConfig.registrationName){var registrationName=event.dispatchConfig.registrationName;var listener=getListener(inst,registrationName);if(listener){event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);event._dispatchInstances=accumulateInto(event._dispatchInstances,inst);}}}/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */function accumulateDirectDispatchesSingle(event){if(event&&event.dispatchConfig.registrationName){accumulateDispatches(event._targetInst,null,event);}}function accumulateTwoPhaseDispatches(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingle);}function accumulateTwoPhaseDispatchesSkipTarget(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingleSkipTarget);}function accumulateEnterLeaveDispatches(leave,enter,from,to){traverseEnterLeave(from,to,accumulateDispatches,leave,enter);}function accumulateDirectDispatches(events){forEachAccumulated(events,accumulateDirectDispatchesSingle);}var EventPropagators=Object.freeze({accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateTwoPhaseDispatchesSkipTarget:accumulateTwoPhaseDispatchesSkipTarget,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches,accumulateDirectDispatches:accumulateDirectDispatches});var contentKey=null;/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */function getTextContentAccessor(){if(!contentKey&&ExecutionEnvironment.canUseDOM){// Prefer textContent to innerText because many browsers support both but
// SVG <text> elements don't support innerText even when <div> does.
contentKey='textContent'in document.documentElement?'textContent':'innerText';}return contentKey;}/**
 * This helper object stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 *
 */var compositionState={_root:null,_startText:null,_fallbackText:null};function initialize(nativeEventTarget){compositionState._root=nativeEventTarget;compositionState._startText=getText();return true;}function reset(){compositionState._root=null;compositionState._startText=null;compositionState._fallbackText=null;}function getData(){if(compositionState._fallbackText){return compositionState._fallbackText;}var start;var startValue=compositionState._startText;var startLength=startValue.length;var end;var endValue=getText();var endLength=endValue.length;for(start=0;start<startLength;start++){if(startValue[start]!==endValue[start]){break;}}var minEnd=startLength-start;for(end=1;end<=minEnd;end++){if(startValue[startLength-end]!==endValue[endLength-end]){break;}}var sliceTail=end>1?1-end:undefined;compositionState._fallbackText=endValue.slice(start,sliceTail);return compositionState._fallbackText;}function getText(){if('value'in compositionState._root){return compositionState._root.value;}return compositionState._root[getTextContentAccessor()];}/* eslint valid-typeof: 0 */var didWarnForAddedNewProperty=false;var isProxySupported=typeof Proxy==='function';var EVENT_POOL_SIZE=10;var shouldBeReleasedProperties=['dispatchConfig','_targetInst','nativeEvent','isDefaultPrevented','isPropagationStopped','_dispatchListeners','_dispatchInstances'];/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var EventInterface={type:null,target:null,// currentTarget is set when dispatching; no use in copying it here
currentTarget:emptyFunction.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function timeStamp(event){return event.timeStamp||Date.now();},defaultPrevented:null,isTrusted:null};/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */function SyntheticEvent(dispatchConfig,targetInst,nativeEvent,nativeEventTarget){{// these have a getter/setter for warnings
delete this.nativeEvent;delete this.preventDefault;delete this.stopPropagation;}this.dispatchConfig=dispatchConfig;this._targetInst=targetInst;this.nativeEvent=nativeEvent;var Interface=this.constructor.Interface;for(var propName in Interface){if(!Interface.hasOwnProperty(propName)){continue;}{delete this[propName];// this has a getter/setter for warnings
}var normalize=Interface[propName];if(normalize){this[propName]=normalize(nativeEvent);}else{if(propName==='target'){this.target=nativeEventTarget;}else{this[propName]=nativeEvent[propName];}}}var defaultPrevented=nativeEvent.defaultPrevented!=null?nativeEvent.defaultPrevented:nativeEvent.returnValue===false;if(defaultPrevented){this.isDefaultPrevented=emptyFunction.thatReturnsTrue;}else{this.isDefaultPrevented=emptyFunction.thatReturnsFalse;}this.isPropagationStopped=emptyFunction.thatReturnsFalse;return this;}_assign(SyntheticEvent.prototype,{preventDefault:function preventDefault(){this.defaultPrevented=true;var event=this.nativeEvent;if(!event){return;}if(event.preventDefault){event.preventDefault();}else if(typeof event.returnValue!=='unknown'){event.returnValue=false;}this.isDefaultPrevented=emptyFunction.thatReturnsTrue;},stopPropagation:function stopPropagation(){var event=this.nativeEvent;if(!event){return;}if(event.stopPropagation){event.stopPropagation();}else if(typeof event.cancelBubble!=='unknown'){// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
event.cancelBubble=true;}this.isPropagationStopped=emptyFunction.thatReturnsTrue;},/**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */persist:function persist(){this.isPersistent=emptyFunction.thatReturnsTrue;},/**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */isPersistent:emptyFunction.thatReturnsFalse,/**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */destructor:function destructor(){var Interface=this.constructor.Interface;for(var propName in Interface){{Object.defineProperty(this,propName,getPooledWarningPropertyDefinition(propName,Interface[propName]));}}for(var i=0;i<shouldBeReleasedProperties.length;i++){this[shouldBeReleasedProperties[i]]=null;}{Object.defineProperty(this,'nativeEvent',getPooledWarningPropertyDefinition('nativeEvent',null));Object.defineProperty(this,'preventDefault',getPooledWarningPropertyDefinition('preventDefault',emptyFunction));Object.defineProperty(this,'stopPropagation',getPooledWarningPropertyDefinition('stopPropagation',emptyFunction));}}});SyntheticEvent.Interface=EventInterface;/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */SyntheticEvent.augmentClass=function(Class,Interface){var Super=this;var E=function E(){};E.prototype=Super.prototype;var prototype=new E();_assign(prototype,Class.prototype);Class.prototype=prototype;Class.prototype.constructor=Class;Class.Interface=_assign({},Super.Interface,Interface);Class.augmentClass=Super.augmentClass;addEventPoolingTo(Class);};/** Proxying after everything set on SyntheticEvent
 * to resolve Proxy issue on some WebKit browsers
 * in which some Event properties are set to undefined (GH#10010)
 */{if(isProxySupported){/*eslint-disable no-func-assign */SyntheticEvent=new Proxy(SyntheticEvent,{construct:function construct(target,args){return this.apply(target,Object.create(target.prototype),args);},apply:function apply(constructor,that,args){return new Proxy(constructor.apply(that,args),{set:function set(target,prop,value){if(prop!=='isPersistent'&&!target.constructor.Interface.hasOwnProperty(prop)&&shouldBeReleasedProperties.indexOf(prop)===-1){warning(didWarnForAddedNewProperty||target.isPersistent(),"This synthetic event is reused for performance reasons. If you're "+"seeing this, you're adding a new property in the synthetic event object. "+'The property is never released. See '+'https://fb.me/react-event-pooling for more information.');didWarnForAddedNewProperty=true;}target[prop]=value;return true;}});}});/*eslint-enable no-func-assign */}}addEventPoolingTo(SyntheticEvent);/**
 * Helper to nullify syntheticEvent instance properties when destructing
 *
 * @param {String} propName
 * @param {?object} getVal
 * @return {object} defineProperty object
 */function getPooledWarningPropertyDefinition(propName,getVal){var isFunction=typeof getVal==='function';return{configurable:true,set:set,get:get};function set(val){var action=isFunction?'setting the method':'setting the property';warn(action,'This is effectively a no-op');return val;}function get(){var action=isFunction?'accessing the method':'accessing the property';var result=isFunction?'This is a no-op function':'This is set to null';warn(action,result);return getVal;}function warn(action,result){var warningCondition=false;warning(warningCondition,"This synthetic event is reused for performance reasons. If you're seeing this, "+"you're %s `%s` on a released/nullified synthetic event. %s. "+'If you must keep the original synthetic event around, use event.persist(). '+'See https://fb.me/react-event-pooling for more information.',action,propName,result);}}function getPooledEvent(dispatchConfig,targetInst,nativeEvent,nativeInst){var EventConstructor=this;if(EventConstructor.eventPool.length){var instance=EventConstructor.eventPool.pop();EventConstructor.call(instance,dispatchConfig,targetInst,nativeEvent,nativeInst);return instance;}return new EventConstructor(dispatchConfig,targetInst,nativeEvent,nativeInst);}function releasePooledEvent(event){var EventConstructor=this;!(event instanceof EventConstructor)?invariant(false,'Trying to release an event instance  into a pool of a different type.'):void 0;event.destructor();if(EventConstructor.eventPool.length<EVENT_POOL_SIZE){EventConstructor.eventPool.push(event);}}function addEventPoolingTo(EventConstructor){EventConstructor.eventPool=[];EventConstructor.getPooled=getPooledEvent;EventConstructor.release=releasePooledEvent;}var SyntheticEvent$1=SyntheticEvent;/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */var CompositionEventInterface={data:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticCompositionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent$1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent$1.augmentClass(SyntheticCompositionEvent,CompositionEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */var InputEventInterface={data:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticInputEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent$1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent$1.augmentClass(SyntheticInputEvent,InputEventInterface);var END_KEYCODES=[9,13,27,32];// Tab, Return, Esc, Space
var START_KEYCODE=229;var canUseCompositionEvent=ExecutionEnvironment.canUseDOM&&'CompositionEvent'in window;var documentMode=null;if(ExecutionEnvironment.canUseDOM&&'documentMode'in document){documentMode=document.documentMode;}// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&'TextEvent'in window&&!documentMode&&!isPresto();// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData=ExecutionEnvironment.canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11);/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */function isPresto(){var opera=window.opera;return(typeof opera==='undefined'?'undefined':_typeof(opera))==='object'&&typeof opera.version==='function'&&parseInt(opera.version(),10)<=12;}var SPACEBAR_CODE=32;var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);// Events and their corresponding property names.
var eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:'onBeforeInput',captured:'onBeforeInputCapture'},dependencies:['topCompositionEnd','topKeyPress','topTextInput','topPaste']},compositionEnd:{phasedRegistrationNames:{bubbled:'onCompositionEnd',captured:'onCompositionEndCapture'},dependencies:['topBlur','topCompositionEnd','topKeyDown','topKeyPress','topKeyUp','topMouseDown']},compositionStart:{phasedRegistrationNames:{bubbled:'onCompositionStart',captured:'onCompositionStartCapture'},dependencies:['topBlur','topCompositionStart','topKeyDown','topKeyPress','topKeyUp','topMouseDown']},compositionUpdate:{phasedRegistrationNames:{bubbled:'onCompositionUpdate',captured:'onCompositionUpdateCapture'},dependencies:['topBlur','topCompositionUpdate','topKeyDown','topKeyPress','topKeyUp','topMouseDown']}};// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress=false;/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */function isKeypressCommand(nativeEvent){return(nativeEvent.ctrlKey||nativeEvent.altKey||nativeEvent.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(nativeEvent.ctrlKey&&nativeEvent.altKey);}/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */function getCompositionEventType(topLevelType){switch(topLevelType){case'topCompositionStart':return eventTypes.compositionStart;case'topCompositionEnd':return eventTypes.compositionEnd;case'topCompositionUpdate':return eventTypes.compositionUpdate;}}/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionStart(topLevelType,nativeEvent){return topLevelType==='topKeyDown'&&nativeEvent.keyCode===START_KEYCODE;}/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionEnd(topLevelType,nativeEvent){switch(topLevelType){case'topKeyUp':// Command keys insert or clear IME input.
return END_KEYCODES.indexOf(nativeEvent.keyCode)!==-1;case'topKeyDown':// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return nativeEvent.keyCode!==START_KEYCODE;case'topKeyPress':case'topMouseDown':case'topBlur':// Events are not possible without cancelling IME.
return true;default:return false;}}/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function getDataFromCustomEvent(nativeEvent){var detail=nativeEvent.detail;if((typeof detail==='undefined'?'undefined':_typeof(detail))==='object'&&'data'in detail){return detail.data;}return null;}// Track the current IME composition status, if any.
var isComposing=false;/**
 * @return {?object} A SyntheticCompositionEvent.
 */function extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){var eventType;var fallbackData;if(canUseCompositionEvent){eventType=getCompositionEventType(topLevelType);}else if(!isComposing){if(isFallbackCompositionStart(topLevelType,nativeEvent)){eventType=eventTypes.compositionStart;}}else if(isFallbackCompositionEnd(topLevelType,nativeEvent)){eventType=eventTypes.compositionEnd;}if(!eventType){return null;}if(useFallbackCompositionData){// The current composition is stored statically and must not be
// overwritten while composition continues.
if(!isComposing&&eventType===eventTypes.compositionStart){isComposing=initialize(nativeEventTarget);}else if(eventType===eventTypes.compositionEnd){if(isComposing){fallbackData=getData();}}}var event=SyntheticCompositionEvent.getPooled(eventType,targetInst,nativeEvent,nativeEventTarget);if(fallbackData){// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
event.data=fallbackData;}else{var customData=getDataFromCustomEvent(nativeEvent);if(customData!==null){event.data=customData;}}accumulateTwoPhaseDispatches(event);return event;}/**
 * @param {TopLevelTypes} topLevelType Record from `BrowserEventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */function getNativeBeforeInputChars(topLevelType,nativeEvent){switch(topLevelType){case'topCompositionEnd':return getDataFromCustomEvent(nativeEvent);case'topKeyPress':/**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */var which=nativeEvent.which;if(which!==SPACEBAR_CODE){return null;}hasSpaceKeypress=true;return SPACEBAR_CHAR;case'topTextInput':// Record the characters to be added to the DOM.
var chars=nativeEvent.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
if(chars===SPACEBAR_CHAR&&hasSpaceKeypress){return null;}return chars;default:// For other native event types, do nothing.
return null;}}/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `BrowserEventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */function getFallbackBeforeInputChars(topLevelType,nativeEvent){// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(isComposing){if(topLevelType==='topCompositionEnd'||!canUseCompositionEvent&&isFallbackCompositionEnd(topLevelType,nativeEvent)){var chars=getData();reset();isComposing=false;return chars;}return null;}switch(topLevelType){case'topPaste':// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case'topKeyPress':/**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */if(!isKeypressCommand(nativeEvent)){// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(nativeEvent.char&&nativeEvent.char.length>1){return nativeEvent.char;}else if(nativeEvent.which){return String.fromCharCode(nativeEvent.which);}}return null;case'topCompositionEnd':return useFallbackCompositionData?null:nativeEvent.data;default:return null;}}/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */function extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){var chars;if(canUseTextInputEvent){chars=getNativeBeforeInputChars(topLevelType,nativeEvent);}else{chars=getFallbackBeforeInputChars(topLevelType,nativeEvent);}// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!chars){return null;}var event=SyntheticInputEvent.getPooled(eventTypes.beforeInput,targetInst,nativeEvent,nativeEventTarget);event.data=chars;accumulateTwoPhaseDispatches(event);return event;}/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */var BeforeInputEventPlugin={eventTypes:eventTypes,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){return[extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget),extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget)];}};// Use to restore controlled state after a change event has fired.
var fiberHostComponent=null;var ReactControlledComponentInjection={injectFiberControlledHostComponent:function injectFiberControlledHostComponent(hostComponentImpl){// The fiber implementation doesn't use dynamic dispatch so we need to
// inject the implementation.
fiberHostComponent=hostComponentImpl;}};var restoreTarget=null;var restoreQueue=null;function restoreStateOfTarget(target){// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var internalInstance=getInstanceFromNode(target);if(!internalInstance){// Unmounted
return;}!(fiberHostComponent&&typeof fiberHostComponent.restoreControlledState==='function')?invariant(false,'Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.'):void 0;var props=getFiberCurrentPropsFromNode(internalInstance.stateNode);fiberHostComponent.restoreControlledState(internalInstance.stateNode,internalInstance.type,props);}var injection$3=ReactControlledComponentInjection;function enqueueStateRestore(target){if(restoreTarget){if(restoreQueue){restoreQueue.push(target);}else{restoreQueue=[target];}}else{restoreTarget=target;}}function restoreStateIfNeeded(){if(!restoreTarget){return;}var target=restoreTarget;var queuedTargets=restoreQueue;restoreTarget=null;restoreQueue=null;restoreStateOfTarget(target);if(queuedTargets){for(var i=0;i<queuedTargets.length;i++){restoreStateOfTarget(queuedTargets[i]);}}}var ReactControlledComponent=Object.freeze({injection:injection$3,enqueueStateRestore:enqueueStateRestore,restoreStateIfNeeded:restoreStateIfNeeded});// Used as a way to call batchedUpdates when we don't have a reference to
// the renderer. Such as when we're dispatching events or if third party
// libraries need to call batchedUpdates. Eventually, this API will go away when
// everything is batched by default. We'll then have a similar API to opt-out of
// scheduled work and instead do synchronous work.
// Defaults
var fiberBatchedUpdates=function fiberBatchedUpdates(fn,bookkeeping){return fn(bookkeeping);};var isNestingBatched=false;function batchedUpdates(fn,bookkeeping){if(isNestingBatched){// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state. Therefore, we add the target to
// a queue of work.
return fiberBatchedUpdates(fn,bookkeeping);}isNestingBatched=true;try{return fiberBatchedUpdates(fn,bookkeeping);}finally{// Here we wait until all updates have propagated, which is important
// when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
// Then we restore state of any controlled component.
isNestingBatched=false;restoreStateIfNeeded();}}var ReactGenericBatchingInjection={injectFiberBatchedUpdates:function injectFiberBatchedUpdates(_batchedUpdates){fiberBatchedUpdates=_batchedUpdates;}};var injection$4=ReactGenericBatchingInjection;/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */var supportedInputTypes={color:true,date:true,datetime:true,'datetime-local':true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function isTextInputElement(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();if(nodeName==='input'){return!!supportedInputTypes[elem.type];}if(nodeName==='textarea'){return true;}return false;}/**
 * HTML nodeType values that represent the type of the node
 */var ELEMENT_NODE=1;var TEXT_NODE=3;var COMMENT_NODE=8;var DOCUMENT_NODE=9;var DOCUMENT_FRAGMENT_NODE=11;/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */function getEventTarget(nativeEvent){var target=nativeEvent.target||nativeEvent.srcElement||window;// Normalize SVG <use> element events #4963
if(target.correspondingUseElement){target=target.correspondingUseElement;}// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return target.nodeType===TEXT_NODE?target.parentNode:target;}var useHasFeature;if(ExecutionEnvironment.canUseDOM){useHasFeature=document.implementation&&document.implementation.hasFeature&&// always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
document.implementation.hasFeature('','')!==true;}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function isEventSupported(eventNameSuffix,capture){if(!ExecutionEnvironment.canUseDOM||capture&&!('addEventListener'in document)){return false;}var eventName='on'+eventNameSuffix;var isSupported=eventName in document;if(!isSupported){var element=document.createElement('div');element.setAttribute(eventName,'return;');isSupported=typeof element[eventName]==='function';}if(!isSupported&&useHasFeature&&eventNameSuffix==='wheel'){// This is the only way to test support for the `wheel` event in IE9+.
isSupported=document.implementation.hasFeature('Events.wheel','3.0');}return isSupported;}function isCheckable(elem){var type=elem.type;var nodeName=elem.nodeName;return nodeName&&nodeName.toLowerCase()==='input'&&(type==='checkbox'||type==='radio');}function getTracker(node){return node._valueTracker;}function detachTracker(node){node._valueTracker=null;}function getValueFromNode(node){var value='';if(!node){return value;}if(isCheckable(node)){value=node.checked?'true':'false';}else{value=node.value;}return value;}function trackValueOnNode(node){var valueField=isCheckable(node)?'checked':'value';var descriptor=Object.getOwnPropertyDescriptor(node.constructor.prototype,valueField);var currentValue=''+node[valueField];// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(node.hasOwnProperty(valueField)||typeof descriptor.get!=='function'||typeof descriptor.set!=='function'){return;}Object.defineProperty(node,valueField,{enumerable:descriptor.enumerable,configurable:true,get:function get(){return descriptor.get.call(this);},set:function set(value){currentValue=''+value;descriptor.set.call(this,value);}});var tracker={getValue:function getValue(){return currentValue;},setValue:function setValue(value){currentValue=''+value;},stopTracking:function stopTracking(){detachTracker(node);delete node[valueField];}};return tracker;}function track(node){if(getTracker(node)){return;}// TODO: Once it's just Fiber we can move this to node._wrapperState
node._valueTracker=trackValueOnNode(node);}function updateValueIfChanged(node){if(!node){return false;}var tracker=getTracker(node);// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!tracker){return true;}var lastValue=tracker.getValue();var nextValue=getValueFromNode(node);if(nextValue!==lastValue){tracker.setValue(nextValue);return true;}return false;}var eventTypes$1={change:{phasedRegistrationNames:{bubbled:'onChange',captured:'onChangeCapture'},dependencies:['topBlur','topChange','topClick','topFocus','topInput','topKeyDown','topKeyUp','topSelectionChange']}};function createAndAccumulateChangeEvent(inst,nativeEvent,target){var event=SyntheticEvent$1.getPooled(eventTypes$1.change,inst,nativeEvent,target);event.type='change';// Flag this event loop as needing state restore.
enqueueStateRestore(target);accumulateTwoPhaseDispatches(event);return event;}/**
 * For IE shims
 */var activeElement=null;var activeElementInst=null;/**
 * SECTION: handle `change` event
 */function shouldUseChangeEvent(elem){var nodeName=elem.nodeName&&elem.nodeName.toLowerCase();return nodeName==='select'||nodeName==='input'&&elem.type==='file';}function manualDispatchChangeEvent(nativeEvent){var event=createAndAccumulateChangeEvent(activeElementInst,nativeEvent,getEventTarget(nativeEvent));// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
batchedUpdates(runEventInBatch,event);}function runEventInBatch(event){enqueueEvents(event);processEventQueue(false);}function getInstIfValueChanged(targetInst){var targetNode=getNodeFromInstance$1(targetInst);if(updateValueIfChanged(targetNode)){return targetInst;}}function getTargetInstForChangeEvent(topLevelType,targetInst){if(topLevelType==='topChange'){return targetInst;}}/**
 * SECTION: handle `input` event
 */var isInputEventSupported=false;if(ExecutionEnvironment.canUseDOM){// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
isInputEventSupported=isEventSupported('input')&&(!document.documentMode||document.documentMode>9);}/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */function startWatchingForValueChange(target,targetInst){activeElement=target;activeElementInst=targetInst;activeElement.attachEvent('onpropertychange',handlePropertyChange);}/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */function stopWatchingForValueChange(){if(!activeElement){return;}activeElement.detachEvent('onpropertychange',handlePropertyChange);activeElement=null;activeElementInst=null;}/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */function handlePropertyChange(nativeEvent){if(nativeEvent.propertyName!=='value'){return;}if(getInstIfValueChanged(activeElementInst)){manualDispatchChangeEvent(nativeEvent);}}function handleEventsForInputEventPolyfill(topLevelType,target,targetInst){if(topLevelType==='topFocus'){// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForValueChange();startWatchingForValueChange(target,targetInst);}else if(topLevelType==='topBlur'){stopWatchingForValueChange();}}// For IE8 and IE9.
function getTargetInstForInputEventPolyfill(topLevelType,targetInst){if(topLevelType==='topSelectionChange'||topLevelType==='topKeyUp'||topLevelType==='topKeyDown'){// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return getInstIfValueChanged(activeElementInst);}}/**
 * SECTION: handle `click` event
 */function shouldUseClickEvent(elem){// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var nodeName=elem.nodeName;return nodeName&&nodeName.toLowerCase()==='input'&&(elem.type==='checkbox'||elem.type==='radio');}function getTargetInstForClickEvent(topLevelType,targetInst){if(topLevelType==='topClick'){return getInstIfValueChanged(targetInst);}}function getTargetInstForInputOrChangeEvent(topLevelType,targetInst){if(topLevelType==='topInput'||topLevelType==='topChange'){return getInstIfValueChanged(targetInst);}}function handleControlledInputBlur(inst,node){// TODO: In IE, inst is occasionally null. Why?
if(inst==null){return;}// Fiber and ReactDOM keep wrapper state in separate places
var state=inst._wrapperState||node._wrapperState;if(!state||!state.controlled||node.type!=='number'){return;}// If controlled, assign the value attribute to the current value on blur
var value=''+node.value;if(node.getAttribute('value')!==value){node.setAttribute('value',value);}}/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */var ChangeEventPlugin={eventTypes:eventTypes$1,_isInputEventSupported:isInputEventSupported,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var targetNode=targetInst?getNodeFromInstance$1(targetInst):window;var getTargetInstFunc,handleEventFunc;if(shouldUseChangeEvent(targetNode)){getTargetInstFunc=getTargetInstForChangeEvent;}else if(isTextInputElement(targetNode)){if(isInputEventSupported){getTargetInstFunc=getTargetInstForInputOrChangeEvent;}else{getTargetInstFunc=getTargetInstForInputEventPolyfill;handleEventFunc=handleEventsForInputEventPolyfill;}}else if(shouldUseClickEvent(targetNode)){getTargetInstFunc=getTargetInstForClickEvent;}if(getTargetInstFunc){var inst=getTargetInstFunc(topLevelType,targetInst);if(inst){var event=createAndAccumulateChangeEvent(inst,nativeEvent,nativeEventTarget);return event;}}if(handleEventFunc){handleEventFunc(topLevelType,targetNode,targetInst);}// When blurring, set the value attribute for number inputs
if(topLevelType==='topBlur'){handleControlledInputBlur(targetInst,targetNode);}}};/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */var DOMEventPluginOrder=['ResponderEventPlugin','SimpleEventPlugin','TapEventPlugin','EnterLeaveEventPlugin','ChangeEventPlugin','SelectEventPlugin','BeforeInputEventPlugin'];/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var UIEventInterface={view:null,detail:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticUIEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent$1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent$1.augmentClass(SyntheticUIEvent,UIEventInterface);/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */var modifierKeyToProp={Alt:'altKey',Control:'ctrlKey',Meta:'metaKey',Shift:'shiftKey'};// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg){var syntheticEvent=this;var nativeEvent=syntheticEvent.nativeEvent;if(nativeEvent.getModifierState){return nativeEvent.getModifierState(keyArg);}var keyProp=modifierKeyToProp[keyArg];return keyProp?!!nativeEvent[keyProp]:false;}function getEventModifierState(nativeEvent){return modifierStateGetter;}/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var MouseEventInterface={screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState,button:null,buttons:null,relatedTarget:function relatedTarget(event){return event.relatedTarget||(event.fromElement===event.srcElement?event.toElement:event.fromElement);}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticMouseEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticMouseEvent,MouseEventInterface);var eventTypes$2={mouseEnter:{registrationName:'onMouseEnter',dependencies:['topMouseOut','topMouseOver']},mouseLeave:{registrationName:'onMouseLeave',dependencies:['topMouseOut','topMouseOver']}};var EnterLeaveEventPlugin={eventTypes:eventTypes$2,/**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){if(topLevelType==='topMouseOver'&&(nativeEvent.relatedTarget||nativeEvent.fromElement)){return null;}if(topLevelType!=='topMouseOut'&&topLevelType!=='topMouseOver'){// Must not be a mouse in or mouse out - ignoring.
return null;}var win;if(nativeEventTarget.window===nativeEventTarget){// `nativeEventTarget` is probably a window object.
win=nativeEventTarget;}else{// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var doc=nativeEventTarget.ownerDocument;if(doc){win=doc.defaultView||doc.parentWindow;}else{win=window;}}var from;var to;if(topLevelType==='topMouseOut'){from=targetInst;var related=nativeEvent.relatedTarget||nativeEvent.toElement;to=related?getClosestInstanceFromNode(related):null;}else{// Moving to a node from outside the window.
from=null;to=targetInst;}if(from===to){// Nothing pertains to our managed components.
return null;}var fromNode=from==null?win:getNodeFromInstance$1(from);var toNode=to==null?win:getNodeFromInstance$1(to);var leave=SyntheticMouseEvent.getPooled(eventTypes$2.mouseLeave,from,nativeEvent,nativeEventTarget);leave.type='mouseleave';leave.target=fromNode;leave.relatedTarget=toNode;var enter=SyntheticMouseEvent.getPooled(eventTypes$2.mouseEnter,to,nativeEvent,nativeEventTarget);enter.type='mouseenter';enter.target=toNode;enter.relatedTarget=fromNode;accumulateEnterLeaveDispatches(leave,enter,from,to);return[leave,enter];}};/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 *//**
 * This API should be called `delete` but we'd have to make sure to always
 * transform these to strings for IE support. When this transform is fully
 * supported we can rename it.
 */function get(key){return key._reactInternalFiber;}function has(key){return key._reactInternalFiber!==undefined;}function set(key,value){key._reactInternalFiber=value;}var ReactInternals=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;var ReactCurrentOwner=ReactInternals.ReactCurrentOwner;var ReactDebugCurrentFrame=ReactInternals.ReactDebugCurrentFrame;function getComponentName(fiber){var type=fiber.type;if(typeof type==='string'){return type;}if(typeof type==='function'){return type.displayName||type.name;}return null;}// Don't change these two values:
var NoEffect=0;//           0b00000000
var PerformedWork=1;//      0b00000001
// You can change the rest (and add more).
var Placement=2;//          0b00000010
var Update=4;//             0b00000100
var PlacementAndUpdate=6;// 0b00000110
var Deletion=8;//           0b00001000
var ContentReset=16;//      0b00010000
var Callback=32;//          0b00100000
var Err=64;//               0b01000000
var Ref=128;//              0b10000000
var MOUNTING=1;var MOUNTED=2;var UNMOUNTED=3;function isFiberMountedImpl(fiber){var node=fiber;if(!fiber.alternate){// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
if((node.effectTag&Placement)!==NoEffect){return MOUNTING;}while(node['return']){node=node['return'];if((node.effectTag&Placement)!==NoEffect){return MOUNTING;}}}else{while(node['return']){node=node['return'];}}if(node.tag===HostRoot){// TODO: Check if this was a nested HostRoot when used with
// renderContainerIntoSubtree.
return MOUNTED;}// If we didn't hit the root, that means that we're in an disconnected tree
// that has been unmounted.
return UNMOUNTED;}function isFiberMounted(fiber){return isFiberMountedImpl(fiber)===MOUNTED;}function isMounted(component){{var owner=ReactCurrentOwner.current;if(owner!==null&&owner.tag===ClassComponent){var ownerFiber=owner;var instance=ownerFiber.stateNode;warning(instance._warnedAboutRefsInRender,'%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentName(ownerFiber)||'A component');instance._warnedAboutRefsInRender=true;}}var fiber=get(component);if(!fiber){return false;}return isFiberMountedImpl(fiber)===MOUNTED;}function assertIsMounted(fiber){!(isFiberMountedImpl(fiber)===MOUNTED)?invariant(false,'Unable to find node on an unmounted component.'):void 0;}function findCurrentFiberUsingSlowPath(fiber){var alternate=fiber.alternate;if(!alternate){// If there is no alternate, then we only need to check if it is mounted.
var state=isFiberMountedImpl(fiber);!(state!==UNMOUNTED)?invariant(false,'Unable to find node on an unmounted component.'):void 0;if(state===MOUNTING){return null;}return fiber;}// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
var a=fiber;var b=alternate;while(true){var parentA=a['return'];var parentB=parentA?parentA.alternate:null;if(!parentA||!parentB){// We're at the root.
break;}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(parentA.child===parentB.child){var child=parentA.child;while(child){if(child===a){// We've determined that A is the current branch.
assertIsMounted(parentA);return fiber;}if(child===b){// We've determined that B is the current branch.
assertIsMounted(parentA);return alternate;}child=child.sibling;}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
invariant(false,'Unable to find node on an unmounted component.');}if(a['return']!==b['return']){// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
a=parentA;b=parentB;}else{// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
//
// Search parent A's child set
var didFindChild=false;var _child=parentA.child;while(_child){if(_child===a){didFindChild=true;a=parentA;b=parentB;break;}if(_child===b){didFindChild=true;b=parentA;a=parentB;break;}_child=_child.sibling;}if(!didFindChild){// Search parent B's child set
_child=parentB.child;while(_child){if(_child===a){didFindChild=true;a=parentB;b=parentA;break;}if(_child===b){didFindChild=true;b=parentB;a=parentA;break;}_child=_child.sibling;}!didFindChild?invariant(false,'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'):void 0;}}!(a.alternate===b)?invariant(false,'Return fibers should always be each others\' alternates. This error is likely caused by a bug in React. Please file an issue.'):void 0;}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
!(a.tag===HostRoot)?invariant(false,'Unable to find node on an unmounted component.'):void 0;if(a.stateNode.current===a){// We've determined that A is the current branch.
return fiber;}// Otherwise B has to be current branch.
return alternate;}function findCurrentHostFiber(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
var node=currentParent;while(true){if(node.tag===HostComponent||node.tag===HostText){return node;}else if(node.child){node.child['return']=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node['return']||node['return']===currentParent){return null;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null;}function findCurrentHostFiberWithNoPortals(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
var node=currentParent;while(true){if(node.tag===HostComponent||node.tag===HostText){return node;}else if(node.child&&node.tag!==HostPortal){node.child['return']=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node['return']||node['return']===currentParent){return null;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null;}var CALLBACK_BOOKKEEPING_POOL_SIZE=10;var callbackBookkeepingPool=[];/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */function findRootContainerNode(inst){// TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
while(inst['return']){inst=inst['return'];}if(inst.tag!==HostRoot){// This can happen if we're in a detached tree.
return null;}return inst.stateNode.containerInfo;}// Used to store ancestor hierarchy in top level callback
function getTopLevelCallbackBookKeeping(topLevelType,nativeEvent,targetInst){if(callbackBookkeepingPool.length){var instance=callbackBookkeepingPool.pop();instance.topLevelType=topLevelType;instance.nativeEvent=nativeEvent;instance.targetInst=targetInst;return instance;}return{topLevelType:topLevelType,nativeEvent:nativeEvent,targetInst:targetInst,ancestors:[]};}function releaseTopLevelCallbackBookKeeping(instance){instance.topLevelType=null;instance.nativeEvent=null;instance.targetInst=null;instance.ancestors.length=0;if(callbackBookkeepingPool.length<CALLBACK_BOOKKEEPING_POOL_SIZE){callbackBookkeepingPool.push(instance);}}function handleTopLevelImpl(bookKeeping){var targetInst=bookKeeping.targetInst;// Loop through the hierarchy, in case there's any nested components.
// It's important that we build the array of ancestors before calling any
// event handlers, because event handlers can modify the DOM, leading to
// inconsistencies with ReactMount's node cache. See #1105.
var ancestor=targetInst;do{if(!ancestor){bookKeeping.ancestors.push(ancestor);break;}var root=findRootContainerNode(ancestor);if(!root){break;}bookKeeping.ancestors.push(ancestor);ancestor=getClosestInstanceFromNode(root);}while(ancestor);for(var i=0;i<bookKeeping.ancestors.length;i++){targetInst=bookKeeping.ancestors[i];_handleTopLevel(bookKeeping.topLevelType,targetInst,bookKeeping.nativeEvent,getEventTarget(bookKeeping.nativeEvent));}}// TODO: can we stop exporting these?
var _enabled=true;var _handleTopLevel=void 0;function setHandleTopLevel(handleTopLevel){_handleTopLevel=handleTopLevel;}function setEnabled(enabled){_enabled=!!enabled;}function isEnabled(){return _enabled;}/**
 * Traps top-level events by using event bubbling.
 *
 * @param {string} topLevelType Record from `BrowserEventConstants`.
 * @param {string} handlerBaseName Event name (e.g. "click").
 * @param {object} element Element on which to attach listener.
 * @return {?object} An object with a remove function which will forcefully
 *                  remove the listener.
 * @internal
 */function trapBubbledEvent(topLevelType,handlerBaseName,element){if(!element){return null;}return EventListener.listen(element,handlerBaseName,dispatchEvent.bind(null,topLevelType));}/**
 * Traps a top-level event by using event capturing.
 *
 * @param {string} topLevelType Record from `BrowserEventConstants`.
 * @param {string} handlerBaseName Event name (e.g. "click").
 * @param {object} element Element on which to attach listener.
 * @return {?object} An object with a remove function which will forcefully
 *                  remove the listener.
 * @internal
 */function trapCapturedEvent(topLevelType,handlerBaseName,element){if(!element){return null;}return EventListener.capture(element,handlerBaseName,dispatchEvent.bind(null,topLevelType));}function dispatchEvent(topLevelType,nativeEvent){if(!_enabled){return;}var nativeEventTarget=getEventTarget(nativeEvent);var targetInst=getClosestInstanceFromNode(nativeEventTarget);if(targetInst!==null&&typeof targetInst.tag==='number'&&!isFiberMounted(targetInst)){// If we get an event (ex: img onload) before committing that
// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
targetInst=null;}var bookKeeping=getTopLevelCallbackBookKeeping(topLevelType,nativeEvent,targetInst);try{// Event queue being processed in the same cycle allows
// `preventDefault`.
batchedUpdates(handleTopLevelImpl,bookKeeping);}finally{releaseTopLevelCallbackBookKeeping(bookKeeping);}}var ReactDOMEventListener=Object.freeze({get _enabled(){return _enabled;},get _handleTopLevel(){return _handleTopLevel;},setHandleTopLevel:setHandleTopLevel,setEnabled:setEnabled,isEnabled:isEnabled,trapBubbledEvent:trapBubbledEvent,trapCapturedEvent:trapCapturedEvent,dispatchEvent:dispatchEvent});/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */function makePrefixMap(styleProp,eventName){var prefixes={};prefixes[styleProp.toLowerCase()]=eventName.toLowerCase();prefixes['Webkit'+styleProp]='webkit'+eventName;prefixes['Moz'+styleProp]='moz'+eventName;prefixes['ms'+styleProp]='MS'+eventName;prefixes['O'+styleProp]='o'+eventName.toLowerCase();return prefixes;}/**
 * A list of event names to a configurable list of vendor prefixes.
 */var vendorPrefixes={animationend:makePrefixMap('Animation','AnimationEnd'),animationiteration:makePrefixMap('Animation','AnimationIteration'),animationstart:makePrefixMap('Animation','AnimationStart'),transitionend:makePrefixMap('Transition','TransitionEnd')};/**
 * Event names that have already been detected and prefixed (if applicable).
 */var prefixedEventNames={};/**
 * Element to check for prefixes on.
 */var style={};/**
 * Bootstrap if a DOM exists.
 */if(ExecutionEnvironment.canUseDOM){style=document.createElement('div').style;// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
if(!('AnimationEvent'in window)){delete vendorPrefixes.animationend.animation;delete vendorPrefixes.animationiteration.animation;delete vendorPrefixes.animationstart.animation;}// Same as above
if(!('TransitionEvent'in window)){delete vendorPrefixes.transitionend.transition;}}/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */function getVendorPrefixedEventName(eventName){if(prefixedEventNames[eventName]){return prefixedEventNames[eventName];}else if(!vendorPrefixes[eventName]){return eventName;}var prefixMap=vendorPrefixes[eventName];for(var styleProp in prefixMap){if(prefixMap.hasOwnProperty(styleProp)&&styleProp in style){return prefixedEventNames[eventName]=prefixMap[styleProp];}}return'';}/**
 * Types of raw signals from the browser caught at the top level.
 *
 * For events like 'submit' which don't consistently bubble (which we
 * trap at a lower node than `document`), binding at `document` would
 * cause duplicate events so we don't include them here.
 */var topLevelTypes$1={topAbort:'abort',topAnimationEnd:getVendorPrefixedEventName('animationend')||'animationend',topAnimationIteration:getVendorPrefixedEventName('animationiteration')||'animationiteration',topAnimationStart:getVendorPrefixedEventName('animationstart')||'animationstart',topBlur:'blur',topCancel:'cancel',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topChange:'change',topClick:'click',topClose:'close',topCompositionEnd:'compositionend',topCompositionStart:'compositionstart',topCompositionUpdate:'compositionupdate',topContextMenu:'contextmenu',topCopy:'copy',topCut:'cut',topDoubleClick:'dblclick',topDrag:'drag',topDragEnd:'dragend',topDragEnter:'dragenter',topDragExit:'dragexit',topDragLeave:'dragleave',topDragOver:'dragover',topDragStart:'dragstart',topDrop:'drop',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topFocus:'focus',topInput:'input',topKeyDown:'keydown',topKeyPress:'keypress',topKeyUp:'keyup',topLoadedData:'loadeddata',topLoad:'load',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topMouseDown:'mousedown',topMouseMove:'mousemove',topMouseOut:'mouseout',topMouseOver:'mouseover',topMouseUp:'mouseup',topPaste:'paste',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topScroll:'scroll',topSeeked:'seeked',topSeeking:'seeking',topSelectionChange:'selectionchange',topStalled:'stalled',topSuspend:'suspend',topTextInput:'textInput',topTimeUpdate:'timeupdate',topToggle:'toggle',topTouchCancel:'touchcancel',topTouchEnd:'touchend',topTouchMove:'touchmove',topTouchStart:'touchstart',topTransitionEnd:getVendorPrefixedEventName('transitionend')||'transitionend',topVolumeChange:'volumechange',topWaiting:'waiting',topWheel:'wheel'};var BrowserEventConstants={topLevelTypes:topLevelTypes$1};function runEventQueueInBatch(events){enqueueEvents(events);processEventQueue(false);}/**
 * Streams a fired top-level event to `EventPluginHub` where plugins have the
 * opportunity to create `ReactEvent`s to be dispatched.
 */function handleTopLevel(topLevelType,targetInst,nativeEvent,nativeEventTarget){var events=extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);runEventQueueInBatch(events);}var topLevelTypes=BrowserEventConstants.topLevelTypes;/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactDOMEventListener, which is injected and can therefore support
 *    pluggable event sources. This is the only work that occurs in the main
 *    thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */var alreadyListeningTo={};var reactTopListenersCounter=0;/**
 * To ensure no conflicts with other potential React instances on the page
 */var topListenersIDKey='_reactListenersID'+(''+Math.random()).slice(2);function getListeningForDocument(mountAt){// In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
if(!Object.prototype.hasOwnProperty.call(mountAt,topListenersIDKey)){mountAt[topListenersIDKey]=reactTopListenersCounter++;alreadyListeningTo[mountAt[topListenersIDKey]]={};}return alreadyListeningTo[mountAt[topListenersIDKey]];}/**
 * We listen for bubbled touch events on the document object.
 *
 * Firefox v8.01 (and possibly others) exhibited strange behavior when
 * mounting `onmousemove` events at some node that was not the document
 * element. The symptoms were that if your mouse is not moving over something
 * contained within that mount point (for example on the background) the
 * top-level listeners for `onmousemove` won't be called. However, if you
 * register the `mousemove` on the document object, then it will of course
 * catch all `mousemove`s. This along with iOS quirks, justifies restricting
 * top-level listeners to the document object only, at least for these
 * movement types of events and possibly all events.
 *
 * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
 *
 * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
 * they bubble to document.
 *
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @param {object} contentDocumentHandle Document which owns the container
 */function listenTo(registrationName,contentDocumentHandle){var mountAt=contentDocumentHandle;var isListening=getListeningForDocument(mountAt);var dependencies=registrationNameDependencies[registrationName];for(var i=0;i<dependencies.length;i++){var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){if(dependency==='topScroll'){trapCapturedEvent('topScroll','scroll',mountAt);}else if(dependency==='topFocus'||dependency==='topBlur'){trapCapturedEvent('topFocus','focus',mountAt);trapCapturedEvent('topBlur','blur',mountAt);// to make sure blur and focus event listeners are only attached once
isListening.topBlur=true;isListening.topFocus=true;}else if(dependency==='topCancel'){if(isEventSupported('cancel',true)){trapCapturedEvent('topCancel','cancel',mountAt);}isListening.topCancel=true;}else if(dependency==='topClose'){if(isEventSupported('close',true)){trapCapturedEvent('topClose','close',mountAt);}isListening.topClose=true;}else if(topLevelTypes.hasOwnProperty(dependency)){trapBubbledEvent(dependency,topLevelTypes[dependency],mountAt);}isListening[dependency]=true;}}}function isListeningToAllDependencies(registrationName,mountAt){var isListening=getListeningForDocument(mountAt);var dependencies=registrationNameDependencies[registrationName];for(var i=0;i<dependencies.length;i++){var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){return false;}}return true;}/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */function getLeafNode(node){while(node&&node.firstChild){node=node.firstChild;}return node;}/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */function getSiblingNode(node){while(node){if(node.nextSibling){return node.nextSibling;}node=node.parentNode;}}/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */function getNodeForCharacterOffset(root,offset){var node=getLeafNode(root);var nodeStart=0;var nodeEnd=0;while(node){if(node.nodeType===TEXT_NODE){nodeEnd=nodeStart+node.textContent.length;if(nodeStart<=offset&&nodeEnd>=offset){return{node:node,offset:offset-nodeStart};}nodeStart=nodeEnd;}node=getLeafNode(getSiblingNode(node));}}/**
 * @param {DOMElement} outerNode
 * @return {?object}
 */function getOffsets(outerNode){var selection=window.getSelection&&window.getSelection();if(!selection||selection.rangeCount===0){return null;}var anchorNode=selection.anchorNode,anchorOffset=selection.anchorOffset,focusNode$$1=selection.focusNode,focusOffset=selection.focusOffset;// In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
// up/down buttons on an <input type="number">. Anonymous divs do not seem to
// expose properties, triggering a "Permission denied error" if any of its
// properties are accessed. The only seemingly possible way to avoid erroring
// is to access a property that typically works for non-anonymous divs and
// catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{/* eslint-disable no-unused-expressions */anchorNode.nodeType;focusNode$$1.nodeType;/* eslint-enable no-unused-expressions */}catch(e){return null;}return getModernOffsetsFromPoints(outerNode,anchorNode,anchorOffset,focusNode$$1,focusOffset);}/**
 * Returns {start, end} where `start` is the character/codepoint index of
 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
 * `end` is the index of (focusNode, focusOffset).
 *
 * Returns null if you pass in garbage input but we should probably just crash.
 *
 * Exported only for testing.
 */function getModernOffsetsFromPoints(outerNode,anchorNode,anchorOffset,focusNode$$1,focusOffset){var length=0;var start=-1;var end=-1;var indexWithinAnchor=0;var indexWithinFocus=0;var node=outerNode;var parentNode=null;outer:while(true){var next=null;while(true){if(node===anchorNode&&(anchorOffset===0||node.nodeType===TEXT_NODE)){start=length+anchorOffset;}if(node===focusNode$$1&&(focusOffset===0||node.nodeType===TEXT_NODE)){end=length+focusOffset;}if(node.nodeType===TEXT_NODE){length+=node.nodeValue.length;}if((next=node.firstChild)===null){break;}// Moving from `node` to its first child `next`.
parentNode=node;node=next;}while(true){if(node===outerNode){// If `outerNode` has children, this is always the second time visiting
// it. If it has no children, this is still the first loop, and the only
// valid selection is anchorNode and focusNode both equal to this node
// and both offsets 0, in which case we will have handled above.
break outer;}if(parentNode===anchorNode&&++indexWithinAnchor===anchorOffset){start=length;}if(parentNode===focusNode$$1&&++indexWithinFocus===focusOffset){end=length;}if((next=node.nextSibling)!==null){break;}node=parentNode;parentNode=node.parentNode;}// Moving from `node` to its next sibling `next`.
node=next;}if(start===-1||end===-1){// This should never happen. (Would happen if the anchor/focus nodes aren't
// actually inside the passed-in node.)
return null;}return{start:start,end:end};}/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setOffsets(node,offsets){if(!window.getSelection){return;}var selection=window.getSelection();var length=node[getTextContentAccessor()].length;var start=Math.min(offsets.start,length);var end=offsets.end===undefined?start:Math.min(offsets.end,length);// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!selection.extend&&start>end){var temp=end;end=start;start=temp;}var startMarker=getNodeForCharacterOffset(node,start);var endMarker=getNodeForCharacterOffset(node,end);if(startMarker&&endMarker){if(selection.rangeCount===1&&selection.anchorNode===startMarker.node&&selection.anchorOffset===startMarker.offset&&selection.focusNode===endMarker.node&&selection.focusOffset===endMarker.offset){return;}var range=document.createRange();range.setStart(startMarker.node,startMarker.offset);selection.removeAllRanges();if(start>end){selection.addRange(range);selection.extend(endMarker.node,endMarker.offset);}else{range.setEnd(endMarker.node,endMarker.offset);selection.addRange(range);}}}function isInDocument(node){return containsNode(document.documentElement,node);}/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */function hasSelectionCapabilities(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&elem.type==='text'||nodeName==='textarea'||elem.contentEditable==='true');}function getSelectionInformation(){var focusedElem=getActiveElement();return{focusedElem:focusedElem,selectionRange:hasSelectionCapabilities(focusedElem)?getSelection$1(focusedElem):null};}/**
 * @restoreSelection: If any selection information was potentially lost,
 * restore it. This is useful when performing operations that could remove dom
 * nodes and place them back in, resulting in focus being lost.
 */function restoreSelection(priorSelectionInformation){var curFocusedElem=getActiveElement();var priorFocusedElem=priorSelectionInformation.focusedElem;var priorSelectionRange=priorSelectionInformation.selectionRange;if(curFocusedElem!==priorFocusedElem&&isInDocument(priorFocusedElem)){if(hasSelectionCapabilities(priorFocusedElem)){setSelection(priorFocusedElem,priorSelectionRange);}// Focusing a node can change the scroll position, which is undesirable
var ancestors=[];var ancestor=priorFocusedElem;while(ancestor=ancestor.parentNode){if(ancestor.nodeType===ELEMENT_NODE){ancestors.push({element:ancestor,left:ancestor.scrollLeft,top:ancestor.scrollTop});}}focusNode(priorFocusedElem);for(var i=0;i<ancestors.length;i++){var info=ancestors[i];info.element.scrollLeft=info.left;info.element.scrollTop=info.top;}}}/**
 * @getSelection: Gets the selection bounds of a focused textarea, input or
 * contentEditable node.
 * -@input: Look up selection bounds of this input
 * -@return {start: selectionStart, end: selectionEnd}
 */function getSelection$1(input){var selection=void 0;if('selectionStart'in input){// Modern browser with input or textarea.
selection={start:input.selectionStart,end:input.selectionEnd};}else{// Content editable or old IE textarea.
selection=getOffsets(input);}return selection||{start:0,end:0};}/**
 * @setSelection: Sets the selection bounds of a textarea or input and focuses
 * the input.
 * -@input     Set selection bounds of this input or textarea
 * -@offsets   Object of same form that is returned from get*
 */function setSelection(input,offsets){var start=offsets.start,end=offsets.end;if(end===undefined){end=start;}if('selectionStart'in input){input.selectionStart=start;input.selectionEnd=Math.min(end,input.value.length);}else{setOffsets(input,offsets);}}var skipSelectionChangeEvent=ExecutionEnvironment.canUseDOM&&'documentMode'in document&&document.documentMode<=11;var eventTypes$3={select:{phasedRegistrationNames:{bubbled:'onSelect',captured:'onSelectCapture'},dependencies:['topBlur','topContextMenu','topFocus','topKeyDown','topKeyUp','topMouseDown','topMouseUp','topSelectionChange']}};var activeElement$1=null;var activeElementInst$1=null;var lastSelection=null;var mouseDown=false;/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */function getSelection(node){if('selectionStart'in node&&hasSelectionCapabilities(node)){return{start:node.selectionStart,end:node.selectionEnd};}else if(window.getSelection){var selection=window.getSelection();return{anchorNode:selection.anchorNode,anchorOffset:selection.anchorOffset,focusNode:selection.focusNode,focusOffset:selection.focusOffset};}}/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */function constructSelectEvent(nativeEvent,nativeEventTarget){// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
if(mouseDown||activeElement$1==null||activeElement$1!==getActiveElement()){return null;}// Only fire when selection has actually changed.
var currentSelection=getSelection(activeElement$1);if(!lastSelection||!shallowEqual(lastSelection,currentSelection)){lastSelection=currentSelection;var syntheticEvent=SyntheticEvent$1.getPooled(eventTypes$3.select,activeElementInst$1,nativeEvent,nativeEventTarget);syntheticEvent.type='select';syntheticEvent.target=activeElement$1;accumulateTwoPhaseDispatches(syntheticEvent);return syntheticEvent;}return null;}/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */var SelectEventPlugin={eventTypes:eventTypes$3,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var doc=nativeEventTarget.window===nativeEventTarget?nativeEventTarget.document:nativeEventTarget.nodeType===DOCUMENT_NODE?nativeEventTarget:nativeEventTarget.ownerDocument;// Track whether all listeners exists for this plugin. If none exist, we do
// not extract events. See #3639.
if(!doc||!isListeningToAllDependencies('onSelect',doc)){return null;}var targetNode=targetInst?getNodeFromInstance$1(targetInst):window;switch(topLevelType){// Track the input node that has focus.
case'topFocus':if(isTextInputElement(targetNode)||targetNode.contentEditable==='true'){activeElement$1=targetNode;activeElementInst$1=targetInst;lastSelection=null;}break;case'topBlur':activeElement$1=null;activeElementInst$1=null;lastSelection=null;break;// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case'topMouseDown':mouseDown=true;break;case'topContextMenu':case'topMouseUp':mouseDown=false;return constructSelectEvent(nativeEvent,nativeEventTarget);// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case'topSelectionChange':if(skipSelectionChangeEvent){break;}// falls through
case'topKeyDown':case'topKeyUp':return constructSelectEvent(nativeEvent,nativeEventTarget);}return null;}};/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */var AnimationEventInterface={animationName:null,elapsedTime:null,pseudoElement:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticAnimationEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent$1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent$1.augmentClass(SyntheticAnimationEvent,AnimationEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */var ClipboardEventInterface={clipboardData:function clipboardData(event){return'clipboardData'in event?event.clipboardData:window.clipboardData;}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticClipboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent$1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent$1.augmentClass(SyntheticClipboardEvent,ClipboardEventInterface);/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var FocusEventInterface={relatedTarget:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticFocusEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticFocusEvent,FocusEventInterface);/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */function getEventCharCode(nativeEvent){var charCode;var keyCode=nativeEvent.keyCode;if('charCode'in nativeEvent){charCode=nativeEvent.charCode;// FF does not set `charCode` for the Enter-key, check against `keyCode`.
if(charCode===0&&keyCode===13){charCode=13;}}else{// IE8 does not implement `charCode`, but `keyCode` has the correct value.
charCode=keyCode;}// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
if(charCode>=32||charCode===13){return charCode;}return 0;}/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var normalizeKey={Esc:'Escape',Spacebar:' ',Left:'ArrowLeft',Up:'ArrowUp',Right:'ArrowRight',Down:'ArrowDown',Del:'Delete',Win:'OS',Menu:'ContextMenu',Apps:'ContextMenu',Scroll:'ScrollLock',MozPrintableKey:'Unidentified'};/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var translateToKey={'8':'Backspace','9':'Tab','12':'Clear','13':'Enter','16':'Shift','17':'Control','18':'Alt','19':'Pause','20':'CapsLock','27':'Escape','32':' ','33':'PageUp','34':'PageDown','35':'End','36':'Home','37':'ArrowLeft','38':'ArrowUp','39':'ArrowRight','40':'ArrowDown','45':'Insert','46':'Delete','112':'F1','113':'F2','114':'F3','115':'F4','116':'F5','117':'F6','118':'F7','119':'F8','120':'F9','121':'F10','122':'F11','123':'F12','144':'NumLock','145':'ScrollLock','224':'Meta'};/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */function getEventKey(nativeEvent){if(nativeEvent.key){// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var key=normalizeKey[nativeEvent.key]||nativeEvent.key;if(key!=='Unidentified'){return key;}}// Browser does not implement `key`, polyfill as much of it as we can.
if(nativeEvent.type==='keypress'){var charCode=getEventCharCode(nativeEvent);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return charCode===13?'Enter':String.fromCharCode(charCode);}if(nativeEvent.type==='keydown'||nativeEvent.type==='keyup'){// While user keyboard layout determines the actual meaning of each
// `keyCode` value, almost all function keys have a universal value.
return translateToKey[nativeEvent.keyCode]||'Unidentified';}return'';}/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var KeyboardEventInterface={key:getEventKey,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState,// Legacy Interface
charCode:function charCode(event){// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
if(event.type==='keypress'){return getEventCharCode(event);}return 0;},keyCode:function keyCode(event){// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;},which:function which(event){// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
if(event.type==='keypress'){return getEventCharCode(event);}if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticKeyboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent,KeyboardEventInterface);/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var DragEventInterface={dataTransfer:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */function SyntheticDragEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent.augmentClass(SyntheticDragEvent,DragEventInterface);/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */var TouchEventInterface={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticTouchEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticTouchEvent,TouchEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */var TransitionEventInterface={propertyName:null,elapsedTime:null,pseudoElement:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticTransitionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent$1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent$1.augmentClass(SyntheticTransitionEvent,TransitionEventInterface);/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var WheelEventInterface={deltaX:function deltaX(event){return'deltaX'in event?event.deltaX:// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
'wheelDeltaX'in event?-event.wheelDeltaX:0;},deltaY:function deltaY(event){return'deltaY'in event?event.deltaY:// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
'wheelDeltaY'in event?-event.wheelDeltaY:// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
'wheelDelta'in event?-event.wheelDelta:0;},deltaZ:null,// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */function SyntheticWheelEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent.augmentClass(SyntheticWheelEvent,WheelEventInterface);/**
 * Turns
 * ['abort', ...]
 * into
 * eventTypes = {
 *   'abort': {
 *     phasedRegistrationNames: {
 *       bubbled: 'onAbort',
 *       captured: 'onAbortCapture',
 *     },
 *     dependencies: ['topAbort'],
 *   },
 *   ...
 * };
 * topLevelEventsToDispatchConfig = {
 *   'topAbort': { sameConfig }
 * };
 */var eventTypes$4={};var topLevelEventsToDispatchConfig={};['abort','animationEnd','animationIteration','animationStart','blur','cancel','canPlay','canPlayThrough','click','close','contextMenu','copy','cut','doubleClick','drag','dragEnd','dragEnter','dragExit','dragLeave','dragOver','dragStart','drop','durationChange','emptied','encrypted','ended','error','focus','input','invalid','keyDown','keyPress','keyUp','load','loadedData','loadedMetadata','loadStart','mouseDown','mouseMove','mouseOut','mouseOver','mouseUp','paste','pause','play','playing','progress','rateChange','reset','scroll','seeked','seeking','stalled','submit','suspend','timeUpdate','toggle','touchCancel','touchEnd','touchMove','touchStart','transitionEnd','volumeChange','waiting','wheel'].forEach(function(event){var capitalizedEvent=event[0].toUpperCase()+event.slice(1);var onEvent='on'+capitalizedEvent;var topEvent='top'+capitalizedEvent;var type={phasedRegistrationNames:{bubbled:onEvent,captured:onEvent+'Capture'},dependencies:[topEvent]};eventTypes$4[event]=type;topLevelEventsToDispatchConfig[topEvent]=type;});// Only used in DEV for exhaustiveness validation.
var knownHTMLTopLevelTypes=['topAbort','topCancel','topCanPlay','topCanPlayThrough','topClose','topDurationChange','topEmptied','topEncrypted','topEnded','topError','topInput','topInvalid','topLoad','topLoadedData','topLoadedMetadata','topLoadStart','topPause','topPlay','topPlaying','topProgress','topRateChange','topReset','topSeeked','topSeeking','topStalled','topSubmit','topSuspend','topTimeUpdate','topToggle','topVolumeChange','topWaiting'];var SimpleEventPlugin={eventTypes:eventTypes$4,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var dispatchConfig=topLevelEventsToDispatchConfig[topLevelType];if(!dispatchConfig){return null;}var EventConstructor;switch(topLevelType){case'topKeyPress':// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(getEventCharCode(nativeEvent)===0){return null;}/* falls through */case'topKeyDown':case'topKeyUp':EventConstructor=SyntheticKeyboardEvent;break;case'topBlur':case'topFocus':EventConstructor=SyntheticFocusEvent;break;case'topClick':// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(nativeEvent.button===2){return null;}/* falls through */case'topDoubleClick':case'topMouseDown':case'topMouseMove':case'topMouseUp':// TODO: Disabled elements should not respond to mouse events
/* falls through */case'topMouseOut':case'topMouseOver':case'topContextMenu':EventConstructor=SyntheticMouseEvent;break;case'topDrag':case'topDragEnd':case'topDragEnter':case'topDragExit':case'topDragLeave':case'topDragOver':case'topDragStart':case'topDrop':EventConstructor=SyntheticDragEvent;break;case'topTouchCancel':case'topTouchEnd':case'topTouchMove':case'topTouchStart':EventConstructor=SyntheticTouchEvent;break;case'topAnimationEnd':case'topAnimationIteration':case'topAnimationStart':EventConstructor=SyntheticAnimationEvent;break;case'topTransitionEnd':EventConstructor=SyntheticTransitionEvent;break;case'topScroll':EventConstructor=SyntheticUIEvent;break;case'topWheel':EventConstructor=SyntheticWheelEvent;break;case'topCopy':case'topCut':case'topPaste':EventConstructor=SyntheticClipboardEvent;break;default:{if(knownHTMLTopLevelTypes.indexOf(topLevelType)===-1){warning(false,'SimpleEventPlugin: Unhandled event type, `%s`. This warning '+'is likely caused by a bug in React. Please file an issue.',topLevelType);}}// HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
EventConstructor=SyntheticEvent$1;break;}var event=EventConstructor.getPooled(dispatchConfig,targetInst,nativeEvent,nativeEventTarget);accumulateTwoPhaseDispatches(event);return event;}};setHandleTopLevel(handleTopLevel);/**
 * Inject modules for resolving DOM hierarchy and plugin ordering.
 */injection$1.injectEventPluginOrder(DOMEventPluginOrder);injection$2.injectComponentTree(ReactDOMComponentTree);/**
 * Some important event plugins included by default (without having to require
 * them).
 */injection$1.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin,EnterLeaveEventPlugin:EnterLeaveEventPlugin,ChangeEventPlugin:ChangeEventPlugin,SelectEventPlugin:SelectEventPlugin,BeforeInputEventPlugin:BeforeInputEventPlugin});var enableAsyncSubtreeAPI=true;var enableAsyncSchedulingByDefaultInReactDOM=false;// Exports ReactDOM.createRoot
var enableCreateRoot=false;var enableUserTimingAPI=true;// Mutating mode (React DOM, React ART, React Native):
var enableMutatingReconciler=true;// Experimental noop mode (currently unused):
var enableNoopReconciler=false;// Experimental persistent mode (CS):
var enablePersistentReconciler=false;// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
var debugRenderPhaseSideEffects=false;// Only used in www builds.
var valueStack=[];{var fiberStack=[];}var index=-1;function createCursor(defaultValue){return{current:defaultValue};}function pop(cursor,fiber){if(index<0){{warning(false,'Unexpected pop.');}return;}{if(fiber!==fiberStack[index]){warning(false,'Unexpected Fiber popped.');}}cursor.current=valueStack[index];valueStack[index]=null;{fiberStack[index]=null;}index--;}function push(cursor,value,fiber){index++;valueStack[index]=cursor.current;{fiberStack[index]=fiber;}cursor.current=value;}function reset$1(){while(index>-1){valueStack[index]=null;{fiberStack[index]=null;}index--;}}var describeComponentFrame=function describeComponentFrame(name,source,ownerName){return'\n    in '+(name||'Unknown')+(source?' (at '+source.fileName.replace(/^.*[\\\/]/,'')+':'+source.lineNumber+')':ownerName?' (created by '+ownerName+')':'');};function describeFiber(fiber){switch(fiber.tag){case IndeterminateComponent:case FunctionalComponent:case ClassComponent:case HostComponent:var owner=fiber._debugOwner;var source=fiber._debugSource;var name=getComponentName(fiber);var ownerName=null;if(owner){ownerName=getComponentName(owner);}return describeComponentFrame(name,source,ownerName);default:return'';}}// This function can only be called with a work-in-progress fiber and
// only during begin or complete phase. Do not call it under any other
// circumstances.
function getStackAddendumByWorkInProgressFiber(workInProgress){var info='';var node=workInProgress;do{info+=describeFiber(node);// Otherwise this return pointer might point to the wrong tree:
node=node['return'];}while(node);return info;}function getCurrentFiberOwnerName(){{var fiber=ReactDebugCurrentFiber.current;if(fiber===null){return null;}var owner=fiber._debugOwner;if(owner!==null&&typeof owner!=='undefined'){return getComponentName(owner);}}return null;}function getCurrentFiberStackAddendum(){{var fiber=ReactDebugCurrentFiber.current;if(fiber===null){return null;}// Safe because if current fiber exists, we are reconciling,
// and it is guaranteed to be the work-in-progress version.
return getStackAddendumByWorkInProgressFiber(fiber);}return null;}function resetCurrentFiber(){ReactDebugCurrentFrame.getCurrentStack=null;ReactDebugCurrentFiber.current=null;ReactDebugCurrentFiber.phase=null;}function setCurrentFiber(fiber){ReactDebugCurrentFrame.getCurrentStack=getCurrentFiberStackAddendum;ReactDebugCurrentFiber.current=fiber;ReactDebugCurrentFiber.phase=null;}function setCurrentPhase(phase){ReactDebugCurrentFiber.phase=phase;}var ReactDebugCurrentFiber={current:null,phase:null,resetCurrentFiber:resetCurrentFiber,setCurrentFiber:setCurrentFiber,setCurrentPhase:setCurrentPhase,getCurrentFiberOwnerName:getCurrentFiberOwnerName,getCurrentFiberStackAddendum:getCurrentFiberStackAddendum};// Prefix measurements so that it's possible to filter them.
// Longer prefixes are hard to read in DevTools.
var reactEmoji='\u269B';var warningEmoji='\u26D4';var supportsUserTiming=typeof performance!=='undefined'&&typeof performance.mark==='function'&&typeof performance.clearMarks==='function'&&typeof performance.measure==='function'&&typeof performance.clearMeasures==='function';// Keep track of current fiber so that we know the path to unwind on pause.
// TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?
var currentFiber=null;// If we're in the middle of user code, which fiber and method is it?
// Reusing `currentFiber` would be confusing for this because user code fiber
// can change during commit phase too, but we don't need to unwind it (since
// lifecycles in the commit phase don't resemble a tree).
var currentPhase=null;var currentPhaseFiber=null;// Did lifecycle hook schedule an update? This is often a performance problem,
// so we will keep track of it, and include it in the report.
// Track commits caused by cascading updates.
var isCommitting=false;var hasScheduledUpdateInCurrentCommit=false;var hasScheduledUpdateInCurrentPhase=false;var commitCountInCurrentWorkLoop=0;var effectCountInCurrentCommit=0;var isWaitingForCallback=false;// During commits, we only show a measurement once per method name
// to avoid stretch the commit phase with measurement overhead.
var labelsInCurrentCommit=new Set();var formatMarkName=function formatMarkName(markName){return reactEmoji+' '+markName;};var formatLabel=function formatLabel(label,warning$$1){var prefix=warning$$1?warningEmoji+' ':reactEmoji+' ';var suffix=warning$$1?' Warning: '+warning$$1:'';return''+prefix+label+suffix;};var beginMark=function beginMark(markName){performance.mark(formatMarkName(markName));};var clearMark=function clearMark(markName){performance.clearMarks(formatMarkName(markName));};var endMark=function endMark(label,markName,warning$$1){var formattedMarkName=formatMarkName(markName);var formattedLabel=formatLabel(label,warning$$1);try{performance.measure(formattedLabel,formattedMarkName);}catch(err){}// If previous mark was missing for some reason, this will throw.
// This could only happen if React crashed in an unexpected place earlier.
// Don't pile on with more errors.
// Clear marks immediately to avoid growing buffer.
performance.clearMarks(formattedMarkName);performance.clearMeasures(formattedLabel);};var getFiberMarkName=function getFiberMarkName(label,debugID){return label+' (#'+debugID+')';};var getFiberLabel=function getFiberLabel(componentName,isMounted,phase){if(phase===null){// These are composite component total time measurements.
return componentName+' ['+(isMounted?'update':'mount')+']';}else{// Composite component methods.
return componentName+'.'+phase;}};var beginFiberMark=function beginFiberMark(fiber,phase){var componentName=getComponentName(fiber)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);if(isCommitting&&labelsInCurrentCommit.has(label)){// During the commit phase, we don't show duplicate labels because
// there is a fixed overhead for every measurement, and we don't
// want to stretch the commit phase beyond necessary.
return false;}labelsInCurrentCommit.add(label);var markName=getFiberMarkName(label,debugID);beginMark(markName);return true;};var clearFiberMark=function clearFiberMark(fiber,phase){var componentName=getComponentName(fiber)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);var markName=getFiberMarkName(label,debugID);clearMark(markName);};var endFiberMark=function endFiberMark(fiber,phase,warning$$1){var componentName=getComponentName(fiber)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);var markName=getFiberMarkName(label,debugID);endMark(label,markName,warning$$1);};var shouldIgnoreFiber=function shouldIgnoreFiber(fiber){// Host components should be skipped in the timeline.
// We could check typeof fiber.type, but does this work with RN?
switch(fiber.tag){case HostRoot:case HostComponent:case HostText:case HostPortal:case ReturnComponent:case Fragment:return true;default:return false;}};var clearPendingPhaseMeasurement=function clearPendingPhaseMeasurement(){if(currentPhase!==null&&currentPhaseFiber!==null){clearFiberMark(currentPhaseFiber,currentPhase);}currentPhaseFiber=null;currentPhase=null;hasScheduledUpdateInCurrentPhase=false;};var pauseTimers=function pauseTimers(){// Stops all currently active measurements so that they can be resumed
// if we continue in a later deferred loop from the same unit of work.
var fiber=currentFiber;while(fiber){if(fiber._debugIsCurrentlyTiming){endFiberMark(fiber,null,null);}fiber=fiber['return'];}};var resumeTimersRecursively=function resumeTimersRecursively(fiber){if(fiber['return']!==null){resumeTimersRecursively(fiber['return']);}if(fiber._debugIsCurrentlyTiming){beginFiberMark(fiber,null);}};var resumeTimers=function resumeTimers(){// Resumes all measurements that were active during the last deferred loop.
if(currentFiber!==null){resumeTimersRecursively(currentFiber);}};function recordEffect(){if(enableUserTimingAPI){effectCountInCurrentCommit++;}}function recordScheduleUpdate(){if(enableUserTimingAPI){if(isCommitting){hasScheduledUpdateInCurrentCommit=true;}if(currentPhase!==null&&currentPhase!=='componentWillMount'&&currentPhase!=='componentWillReceiveProps'){hasScheduledUpdateInCurrentPhase=true;}}}function startRequestCallbackTimer(){if(enableUserTimingAPI){if(supportsUserTiming&&!isWaitingForCallback){isWaitingForCallback=true;beginMark('(Waiting for async callback...)');}}}function stopRequestCallbackTimer(didExpire){if(enableUserTimingAPI){if(supportsUserTiming){isWaitingForCallback=false;var warning$$1=didExpire?'React was blocked by main thread':null;endMark('(Waiting for async callback...)','(Waiting for async callback...)',warning$$1);}}}function startWorkTimer(fiber){if(enableUserTimingAPI){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, this is the fiber to unwind from.
currentFiber=fiber;if(!beginFiberMark(fiber,null)){return;}fiber._debugIsCurrentlyTiming=true;}}function cancelWorkTimer(fiber){if(enableUserTimingAPI){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// Remember we shouldn't complete measurement for this fiber.
// Otherwise flamechart will be deep even for small updates.
fiber._debugIsCurrentlyTiming=false;clearFiberMark(fiber,null);}}function stopWorkTimer(fiber){if(enableUserTimingAPI){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, its parent is the fiber to unwind from.
currentFiber=fiber['return'];if(!fiber._debugIsCurrentlyTiming){return;}fiber._debugIsCurrentlyTiming=false;endFiberMark(fiber,null,null);}}function stopFailedWorkTimer(fiber){if(enableUserTimingAPI){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, its parent is the fiber to unwind from.
currentFiber=fiber['return'];if(!fiber._debugIsCurrentlyTiming){return;}fiber._debugIsCurrentlyTiming=false;var warning$$1='An error was thrown inside this error boundary';endFiberMark(fiber,null,warning$$1);}}function startPhaseTimer(fiber,phase){if(enableUserTimingAPI){if(!supportsUserTiming){return;}clearPendingPhaseMeasurement();if(!beginFiberMark(fiber,phase)){return;}currentPhaseFiber=fiber;currentPhase=phase;}}function stopPhaseTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}if(currentPhase!==null&&currentPhaseFiber!==null){var warning$$1=hasScheduledUpdateInCurrentPhase?'Scheduled a cascading update':null;endFiberMark(currentPhaseFiber,currentPhase,warning$$1);}currentPhase=null;currentPhaseFiber=null;}}function startWorkLoopTimer(nextUnitOfWork){if(enableUserTimingAPI){currentFiber=nextUnitOfWork;if(!supportsUserTiming){return;}commitCountInCurrentWorkLoop=0;// This is top level call.
// Any other measurements are performed within.
beginMark('(React Tree Reconciliation)');// Resume any measurements that were in progress during the last loop.
resumeTimers();}}function stopWorkLoopTimer(interruptedBy){if(enableUserTimingAPI){if(!supportsUserTiming){return;}var warning$$1=null;if(interruptedBy!==null){if(interruptedBy.tag===HostRoot){warning$$1='A top-level update interrupted the previous render';}else{var componentName=getComponentName(interruptedBy)||'Unknown';warning$$1='An update to '+componentName+' interrupted the previous render';}}else if(commitCountInCurrentWorkLoop>1){warning$$1='There were cascading updates';}commitCountInCurrentWorkLoop=0;// Pause any measurements until the next loop.
pauseTimers();endMark('(React Tree Reconciliation)','(React Tree Reconciliation)',warning$$1);}}function startCommitTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}isCommitting=true;hasScheduledUpdateInCurrentCommit=false;labelsInCurrentCommit.clear();beginMark('(Committing Changes)');}}function stopCommitTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}var warning$$1=null;if(hasScheduledUpdateInCurrentCommit){warning$$1='Lifecycle hook scheduled a cascading update';}else if(commitCountInCurrentWorkLoop>0){warning$$1='Caused by a cascading update in earlier commit';}hasScheduledUpdateInCurrentCommit=false;commitCountInCurrentWorkLoop++;isCommitting=false;labelsInCurrentCommit.clear();endMark('(Committing Changes)','(Committing Changes)',warning$$1);}}function startCommitHostEffectsTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}effectCountInCurrentCommit=0;beginMark('(Committing Host Effects)');}}function stopCommitHostEffectsTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}var count=effectCountInCurrentCommit;effectCountInCurrentCommit=0;endMark('(Committing Host Effects: '+count+' Total)','(Committing Host Effects)',null);}}function startCommitLifeCyclesTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}effectCountInCurrentCommit=0;beginMark('(Calling Lifecycle Methods)');}}function stopCommitLifeCyclesTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}var count=effectCountInCurrentCommit;effectCountInCurrentCommit=0;endMark('(Calling Lifecycle Methods: '+count+' Total)','(Calling Lifecycle Methods)',null);}}{var warnedAboutMissingGetChildContext={};}// A cursor to the current merged context object on the stack.
var contextStackCursor=createCursor(emptyObject);// A cursor to a boolean indicating whether the context has changed.
var didPerformWorkStackCursor=createCursor(false);// Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.
var previousContext=emptyObject;function getUnmaskedContext(workInProgress){var hasOwnContext=isContextProvider(workInProgress);if(hasOwnContext){// If the fiber is a context provider itself, when we read its context
// we have already pushed its own child context on the stack. A context
// provider should not "see" its own child context. Therefore we read the
// previous (parent) context instead for a context provider.
return previousContext;}return contextStackCursor.current;}function cacheContext(workInProgress,unmaskedContext,maskedContext){var instance=workInProgress.stateNode;instance.__reactInternalMemoizedUnmaskedChildContext=unmaskedContext;instance.__reactInternalMemoizedMaskedChildContext=maskedContext;}function getMaskedContext(workInProgress,unmaskedContext){var type=workInProgress.type;var contextTypes=type.contextTypes;if(!contextTypes){return emptyObject;}// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var instance=workInProgress.stateNode;if(instance&&instance.__reactInternalMemoizedUnmaskedChildContext===unmaskedContext){return instance.__reactInternalMemoizedMaskedChildContext;}var context={};for(var key in contextTypes){context[key]=unmaskedContext[key];}{var name=getComponentName(workInProgress)||'Unknown';checkPropTypes(contextTypes,context,'context',name,ReactDebugCurrentFiber.getCurrentFiberStackAddendum);}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
if(instance){cacheContext(workInProgress,unmaskedContext,context);}return context;}function hasContextChanged(){return didPerformWorkStackCursor.current;}function isContextConsumer(fiber){return fiber.tag===ClassComponent&&fiber.type.contextTypes!=null;}function isContextProvider(fiber){return fiber.tag===ClassComponent&&fiber.type.childContextTypes!=null;}function popContextProvider(fiber){if(!isContextProvider(fiber)){return;}pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}function popTopLevelContextObject(fiber){pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}function pushTopLevelContextObject(fiber,context,didChange){!(contextStackCursor.cursor==null)?invariant(false,'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'):void 0;push(contextStackCursor,context,fiber);push(didPerformWorkStackCursor,didChange,fiber);}function processChildContext(fiber,parentContext){var instance=fiber.stateNode;var childContextTypes=fiber.type.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if(typeof instance.getChildContext!=='function'){{var componentName=getComponentName(fiber)||'Unknown';if(!warnedAboutMissingGetChildContext[componentName]){warnedAboutMissingGetChildContext[componentName]=true;warning(false,'%s.childContextTypes is specified but there is no getChildContext() method '+'on the instance. You can either define getChildContext() on %s or remove '+'childContextTypes from it.',componentName,componentName);}}return parentContext;}var childContext=void 0;{ReactDebugCurrentFiber.setCurrentPhase('getChildContext');}startPhaseTimer(fiber,'getChildContext');childContext=instance.getChildContext();stopPhaseTimer();{ReactDebugCurrentFiber.setCurrentPhase(null);}for(var contextKey in childContext){!(contextKey in childContextTypes)?invariant(false,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',getComponentName(fiber)||'Unknown',contextKey):void 0;}{var name=getComponentName(fiber)||'Unknown';checkPropTypes(childContextTypes,childContext,'child context',name,// In practice, there is one case in which we won't get a stack. It's when
// somebody calls unstable_renderSubtreeIntoContainer() and we process
// context from the parent component instance. The stack will be missing
// because it's outside of the reconciliation, and so the pointer has not
// been set. This is rare and doesn't matter. We'll also remove that API.
ReactDebugCurrentFiber.getCurrentFiberStackAddendum);}return _assign({},parentContext,childContext);}function pushContextProvider(workInProgress){if(!isContextProvider(workInProgress)){return false;}var instance=workInProgress.stateNode;// We push the context as early as possible to ensure stack integrity.
// If the instance does not exist yet, we will push null at first,
// and replace it on the stack later when invalidating the context.
var memoizedMergedChildContext=instance&&instance.__reactInternalMemoizedMergedChildContext||emptyObject;// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
previousContext=contextStackCursor.current;push(contextStackCursor,memoizedMergedChildContext,workInProgress);push(didPerformWorkStackCursor,didPerformWorkStackCursor.current,workInProgress);return true;}function invalidateContextProvider(workInProgress,didChange){var instance=workInProgress.stateNode;!instance?invariant(false,'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'):void 0;if(didChange){// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var mergedContext=processChildContext(workInProgress,previousContext);instance.__reactInternalMemoizedMergedChildContext=mergedContext;// Replace the old (or empty) context with the new one.
// It is important to unwind the context in the reverse order.
pop(didPerformWorkStackCursor,workInProgress);pop(contextStackCursor,workInProgress);// Now push the new context and mark that it has changed.
push(contextStackCursor,mergedContext,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}else{pop(didPerformWorkStackCursor,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}}function resetContext(){previousContext=emptyObject;contextStackCursor.current=emptyObject;didPerformWorkStackCursor.current=false;}function findCurrentUnmaskedContext(fiber){// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
!(isFiberMounted(fiber)&&fiber.tag===ClassComponent)?invariant(false,'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'):void 0;var node=fiber;while(node.tag!==HostRoot){if(isContextProvider(node)){return node.stateNode.__reactInternalMemoizedMergedChildContext;}var parent=node['return'];!parent?invariant(false,'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.'):void 0;node=parent;}return node.stateNode.context;}var NoWork=0;// TODO: Use an opaque type once ESLint et al support the syntax
var Sync=1;var Never=2147483647;// Max int32: Math.pow(2, 31) - 1
var UNIT_SIZE=10;var MAGIC_NUMBER_OFFSET=2;// 1 unit of expiration time represents 10ms.
function msToExpirationTime(ms){// Always add an offset so that we don't clash with the magic number for NoWork.
return(ms/UNIT_SIZE|0)+MAGIC_NUMBER_OFFSET;}function expirationTimeToMs(expirationTime){return(expirationTime-MAGIC_NUMBER_OFFSET)*UNIT_SIZE;}function ceiling(num,precision){return((num/precision|0)+1)*precision;}function computeExpirationBucket(currentTime,expirationInMs,bucketSizeMs){return ceiling(currentTime+expirationInMs/UNIT_SIZE,bucketSizeMs/UNIT_SIZE);}var NoContext=0;var AsyncUpdates=1;{var hasBadMapPolyfill=false;try{var nonExtensibleObject=Object.preventExtensions({});/* eslint-disable no-new *//* eslint-enable no-new */}catch(e){// TODO: Consider warning about bad polyfills
hasBadMapPolyfill=true;}}// A Fiber is work on a Component that needs to be done or was done. There can
// be more than one per component.
{var debugCounter=1;}function FiberNode(tag,key,internalContextTag){// Instance
this.tag=tag;this.key=key;this.type=null;this.stateNode=null;// Fiber
this['return']=null;this.child=null;this.sibling=null;this.index=0;this.ref=null;this.pendingProps=null;this.memoizedProps=null;this.updateQueue=null;this.memoizedState=null;this.internalContextTag=internalContextTag;// Effects
this.effectTag=NoEffect;this.nextEffect=null;this.firstEffect=null;this.lastEffect=null;this.expirationTime=NoWork;this.alternate=null;{this._debugID=debugCounter++;this._debugSource=null;this._debugOwner=null;this._debugIsCurrentlyTiming=false;if(!hasBadMapPolyfill&&typeof Object.preventExtensions==='function'){Object.preventExtensions(this);}}}// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var createFiber=function createFiber(tag,key,internalContextTag){// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
return new FiberNode(tag,key,internalContextTag);};function shouldConstruct(Component){return!!(Component.prototype&&Component.prototype.isReactComponent);}// This is used to create an alternate fiber to do work on.
function createWorkInProgress(current,pendingProps,expirationTime){var workInProgress=current.alternate;if(workInProgress===null){// We use a double buffering pooling technique because we know that we'll
// only ever need at most two versions of a tree. We pool the "other" unused
// node that we're free to reuse. This is lazily created to avoid allocating
// extra objects for things that are never updated. It also allow us to
// reclaim the extra memory if needed.
workInProgress=createFiber(current.tag,current.key,current.internalContextTag);workInProgress.type=current.type;workInProgress.stateNode=current.stateNode;{// DEV-only fields
workInProgress._debugID=current._debugID;workInProgress._debugSource=current._debugSource;workInProgress._debugOwner=current._debugOwner;}workInProgress.alternate=current;current.alternate=workInProgress;}else{// We already have an alternate.
// Reset the effect tag.
workInProgress.effectTag=NoEffect;// The effect list is no longer valid.
workInProgress.nextEffect=null;workInProgress.firstEffect=null;workInProgress.lastEffect=null;}workInProgress.expirationTime=expirationTime;workInProgress.pendingProps=pendingProps;workInProgress.child=current.child;workInProgress.memoizedProps=current.memoizedProps;workInProgress.memoizedState=current.memoizedState;workInProgress.updateQueue=current.updateQueue;// These will be overridden during the parent's reconciliation
workInProgress.sibling=current.sibling;workInProgress.index=current.index;workInProgress.ref=current.ref;return workInProgress;}function createHostRootFiber(){var fiber=createFiber(HostRoot,null,NoContext);return fiber;}function createFiberFromElement(element,internalContextTag,expirationTime){var owner=null;{owner=element._owner;}var fiber=void 0;var type=element.type,key=element.key;if(typeof type==='function'){fiber=shouldConstruct(type)?createFiber(ClassComponent,key,internalContextTag):createFiber(IndeterminateComponent,key,internalContextTag);fiber.type=type;fiber.pendingProps=element.props;}else if(typeof type==='string'){fiber=createFiber(HostComponent,key,internalContextTag);fiber.type=type;fiber.pendingProps=element.props;}else if((typeof type==='undefined'?'undefined':_typeof(type))==='object'&&type!==null&&typeof type.tag==='number'){// Currently assumed to be a continuation and therefore is a fiber already.
// TODO: The yield system is currently broken for updates in some cases.
// The reified yield stores a fiber, but we don't know which fiber that is;
// the current or a workInProgress? When the continuation gets rendered here
// we don't know if we can reuse that fiber or if we need to clone it.
// There is probably a clever way to restructure this.
fiber=type;fiber.pendingProps=element.props;}else{var info='';{if(type===undefined||(typeof type==='undefined'?'undefined':_typeof(type))==='object'&&type!==null&&Object.keys(type).length===0){info+=' You likely forgot to export your component from the file '+"it's defined in, or you might have mixed up default and named imports.";}var ownerName=owner?getComponentName(owner):null;if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}}invariant(false,'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',type==null?type:typeof type==='undefined'?'undefined':_typeof(type),info);}{fiber._debugSource=element._source;fiber._debugOwner=element._owner;}fiber.expirationTime=expirationTime;return fiber;}function createFiberFromFragment(elements,internalContextTag,expirationTime,key){var fiber=createFiber(Fragment,key,internalContextTag);fiber.pendingProps=elements;fiber.expirationTime=expirationTime;return fiber;}function createFiberFromText(content,internalContextTag,expirationTime){var fiber=createFiber(HostText,null,internalContextTag);fiber.pendingProps=content;fiber.expirationTime=expirationTime;return fiber;}function createFiberFromHostInstanceForDeletion(){var fiber=createFiber(HostComponent,null,NoContext);fiber.type='DELETED';return fiber;}function createFiberFromCall(call,internalContextTag,expirationTime){var fiber=createFiber(CallComponent,call.key,internalContextTag);fiber.type=call.handler;fiber.pendingProps=call;fiber.expirationTime=expirationTime;return fiber;}function createFiberFromReturn(returnNode,internalContextTag,expirationTime){var fiber=createFiber(ReturnComponent,null,internalContextTag);fiber.expirationTime=expirationTime;return fiber;}function createFiberFromPortal(portal,internalContextTag,expirationTime){var fiber=createFiber(HostPortal,portal.key,internalContextTag);fiber.pendingProps=portal.children||[];fiber.expirationTime=expirationTime;fiber.stateNode={containerInfo:portal.containerInfo,pendingChildren:null,// Used by persistent updates
implementation:portal.implementation};return fiber;}function createFiberRoot(containerInfo,hydrate){// Cyclic construction. This cheats the type system right now because
// stateNode is any.
var uninitializedFiber=createHostRootFiber();var root={current:uninitializedFiber,containerInfo:containerInfo,pendingChildren:null,remainingExpirationTime:NoWork,isReadyForCommit:false,finishedWork:null,context:null,pendingContext:null,hydrate:hydrate,nextScheduledRoot:null};uninitializedFiber.stateNode=root;return root;}var onCommitFiberRoot=null;var onCommitFiberUnmount=null;var hasLoggedError=false;function catchErrors(fn){return function(arg){try{return fn(arg);}catch(err){if(true&&!hasLoggedError){hasLoggedError=true;warning(false,'React DevTools encountered an error: %s',err);}}};}function injectInternals(internals){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){// No DevTools
return false;}var hook=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(hook.isDisabled){// This isn't a real property on the hook, but it can be set to opt out
// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return true;}if(!hook.supportsFiber){{warning(false,'The installed version of React DevTools is too old and will not work '+'with the current version of React. Please update React DevTools. '+'https://fb.me/react-devtools');}// DevTools exists, even though it doesn't support Fiber.
return true;}try{var rendererID=hook.inject(internals);// We have successfully injected, so now it is safe to set up hooks.
onCommitFiberRoot=catchErrors(function(root){return hook.onCommitFiberRoot(rendererID,root);});onCommitFiberUnmount=catchErrors(function(fiber){return hook.onCommitFiberUnmount(rendererID,fiber);});}catch(err){// Catch all errors because it is unsafe to throw during initialization.
{warning(false,'React DevTools encountered an error: %s.',err);}}// DevTools exists
return true;}function onCommitRoot(root){if(typeof onCommitFiberRoot==='function'){onCommitFiberRoot(root);}}function onCommitUnmount(fiber){if(typeof onCommitFiberUnmount==='function'){onCommitFiberUnmount(fiber);}}{var didWarnUpdateInsideUpdate=false;}// Callbacks are not validated until invocation
// Singly linked-list of updates. When an update is scheduled, it is added to
// the queue of the current fiber and the work-in-progress fiber. The two queues
// are separate but they share a persistent structure.
//
// During reconciliation, updates are removed from the work-in-progress fiber,
// but they remain on the current fiber. That ensures that if a work-in-progress
// is aborted, the aborted updates are recovered by cloning from current.
//
// The work-in-progress queue is always a subset of the current queue.
//
// When the tree is committed, the work-in-progress becomes the current.
function createUpdateQueue(baseState){var queue={baseState:baseState,expirationTime:NoWork,first:null,last:null,callbackList:null,hasForceUpdate:false,isInitialized:false};{queue.isProcessing=false;}return queue;}function insertUpdateIntoQueue(queue,update){// Append the update to the end of the list.
if(queue.last===null){// Queue is empty
queue.first=queue.last=update;}else{queue.last.next=update;queue.last=update;}if(queue.expirationTime===NoWork||queue.expirationTime>update.expirationTime){queue.expirationTime=update.expirationTime;}}function insertUpdateIntoFiber(fiber,update){// We'll have at least one and at most two distinct update queues.
var alternateFiber=fiber.alternate;var queue1=fiber.updateQueue;if(queue1===null){// TODO: We don't know what the base state will be until we begin work.
// It depends on which fiber is the next current. Initialize with an empty
// base state, then set to the memoizedState when rendering. Not super
// happy with this approach.
queue1=fiber.updateQueue=createUpdateQueue(null);}var queue2=void 0;if(alternateFiber!==null){queue2=alternateFiber.updateQueue;if(queue2===null){queue2=alternateFiber.updateQueue=createUpdateQueue(null);}}else{queue2=null;}queue2=queue2!==queue1?queue2:null;// Warn if an update is scheduled from inside an updater function.
{if((queue1.isProcessing||queue2!==null&&queue2.isProcessing)&&!didWarnUpdateInsideUpdate){warning(false,'An update (setState, replaceState, or forceUpdate) was scheduled '+'from inside an update function. Update functions should be pure, '+'with zero side-effects. Consider using componentDidUpdate or a '+'callback.');didWarnUpdateInsideUpdate=true;}}// If there's only one queue, add the update to that queue and exit.
if(queue2===null){insertUpdateIntoQueue(queue1,update);return;}// If either queue is empty, we need to add to both queues.
if(queue1.last===null||queue2.last===null){insertUpdateIntoQueue(queue1,update);insertUpdateIntoQueue(queue2,update);return;}// If both lists are not empty, the last update is the same for both lists
// because of structural sharing. So, we should only append to one of
// the lists.
insertUpdateIntoQueue(queue1,update);// But we still need to update the `last` pointer of queue2.
queue2.last=update;}function getUpdateExpirationTime(fiber){if(fiber.tag!==ClassComponent&&fiber.tag!==HostRoot){return NoWork;}var updateQueue=fiber.updateQueue;if(updateQueue===null){return NoWork;}return updateQueue.expirationTime;}function getStateFromUpdate(update,instance,prevState,props){var partialState=update.partialState;if(typeof partialState==='function'){var updateFn=partialState;// Invoke setState callback an extra time to help detect side-effects.
if(debugRenderPhaseSideEffects){updateFn.call(instance,prevState,props);}return updateFn.call(instance,prevState,props);}else{return partialState;}}function processUpdateQueue(current,workInProgress,queue,instance,props,renderExpirationTime){if(current!==null&&current.updateQueue===queue){// We need to create a work-in-progress queue, by cloning the current queue.
var currentQueue=queue;queue=workInProgress.updateQueue={baseState:currentQueue.baseState,expirationTime:currentQueue.expirationTime,first:currentQueue.first,last:currentQueue.last,isInitialized:currentQueue.isInitialized,// These fields are no longer valid because they were already committed.
// Reset them.
callbackList:null,hasForceUpdate:false};}{// Set this flag so we can warn if setState is called inside the update
// function of another setState.
queue.isProcessing=true;}// Reset the remaining expiration time. If we skip over any updates, we'll
// increase this accordingly.
queue.expirationTime=NoWork;// TODO: We don't know what the base state will be until we begin work.
// It depends on which fiber is the next current. Initialize with an empty
// base state, then set to the memoizedState when rendering. Not super
// happy with this approach.
var state=void 0;if(queue.isInitialized){state=queue.baseState;}else{state=queue.baseState=workInProgress.memoizedState;queue.isInitialized=true;}var dontMutatePrevState=true;var update=queue.first;var didSkip=false;while(update!==null){var updateExpirationTime=update.expirationTime;if(updateExpirationTime>renderExpirationTime){// This update does not have sufficient priority. Skip it.
var remainingExpirationTime=queue.expirationTime;if(remainingExpirationTime===NoWork||remainingExpirationTime>updateExpirationTime){// Update the remaining expiration time.
queue.expirationTime=updateExpirationTime;}if(!didSkip){didSkip=true;queue.baseState=state;}// Continue to the next update.
update=update.next;continue;}// This update does have sufficient priority.
// If no previous updates were skipped, drop this update from the queue by
// advancing the head of the list.
if(!didSkip){queue.first=update.next;if(queue.first===null){queue.last=null;}}// Process the update
var _partialState=void 0;if(update.isReplace){state=getStateFromUpdate(update,instance,state,props);dontMutatePrevState=true;}else{_partialState=getStateFromUpdate(update,instance,state,props);if(_partialState){if(dontMutatePrevState){// $FlowFixMe: Idk how to type this properly.
state=_assign({},state,_partialState);}else{state=_assign(state,_partialState);}dontMutatePrevState=false;}}if(update.isForced){queue.hasForceUpdate=true;}if(update.callback!==null){// Append to list of callbacks.
var _callbackList=queue.callbackList;if(_callbackList===null){_callbackList=queue.callbackList=[];}_callbackList.push(update);}update=update.next;}if(queue.callbackList!==null){workInProgress.effectTag|=Callback;}else if(queue.first===null&&!queue.hasForceUpdate){// The queue is empty. We can reset it.
workInProgress.updateQueue=null;}if(!didSkip){didSkip=true;queue.baseState=state;}{// No longer processing.
queue.isProcessing=false;}return state;}function commitCallbacks(queue,context){var callbackList=queue.callbackList;if(callbackList===null){return;}// Set the list to null to make sure they don't get called more than once.
queue.callbackList=null;for(var i=0;i<callbackList.length;i++){var update=callbackList[i];var _callback=update.callback;// This update might be processed again. Clear the callback so it's only
// called once.
update.callback=null;!(typeof _callback==='function')?invariant(false,'Invalid argument passed as callback. Expected a function. Instead received: %s',_callback):void 0;_callback.call(context);}}var fakeInternalInstance={};var isArray=Array.isArray;{var didWarnAboutStateAssignmentForComponent={};var warnOnInvalidCallback=function warnOnInvalidCallback(callback,callerName){warning(callback===null||typeof callback==='function','%s(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callerName,callback);};// This is so gross but it's at least non-critical and can be removed if
// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
Object.defineProperty(fakeInternalInstance,'_processChildContext',{enumerable:false,value:function value(){invariant(false,'_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn\'t supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).');}});Object.freeze(fakeInternalInstance);}var ReactFiberClassComponent=function ReactFiberClassComponent(scheduleWork,computeExpirationForFiber,memoizeProps,memoizeState){// Class component state updater
var updater={isMounted:isMounted,enqueueSetState:function enqueueSetState(instance,partialState,callback){var fiber=get(instance);callback=callback===undefined?null:callback;{warnOnInvalidCallback(callback,'setState');}var expirationTime=computeExpirationForFiber(fiber);var update={expirationTime:expirationTime,partialState:partialState,callback:callback,isReplace:false,isForced:false,nextCallback:null,next:null};insertUpdateIntoFiber(fiber,update);scheduleWork(fiber,expirationTime);},enqueueReplaceState:function enqueueReplaceState(instance,state,callback){var fiber=get(instance);callback=callback===undefined?null:callback;{warnOnInvalidCallback(callback,'replaceState');}var expirationTime=computeExpirationForFiber(fiber);var update={expirationTime:expirationTime,partialState:state,callback:callback,isReplace:true,isForced:false,nextCallback:null,next:null};insertUpdateIntoFiber(fiber,update);scheduleWork(fiber,expirationTime);},enqueueForceUpdate:function enqueueForceUpdate(instance,callback){var fiber=get(instance);callback=callback===undefined?null:callback;{warnOnInvalidCallback(callback,'forceUpdate');}var expirationTime=computeExpirationForFiber(fiber);var update={expirationTime:expirationTime,partialState:null,callback:callback,isReplace:false,isForced:true,nextCallback:null,next:null};insertUpdateIntoFiber(fiber,update);scheduleWork(fiber,expirationTime);}};function checkShouldComponentUpdate(workInProgress,oldProps,newProps,oldState,newState,newContext){if(oldProps===null||workInProgress.updateQueue!==null&&workInProgress.updateQueue.hasForceUpdate){// If the workInProgress already has an Update effect, return true
return true;}var instance=workInProgress.stateNode;var type=workInProgress.type;if(typeof instance.shouldComponentUpdate==='function'){startPhaseTimer(workInProgress,'shouldComponentUpdate');var shouldUpdate=instance.shouldComponentUpdate(newProps,newState,newContext);stopPhaseTimer();// Simulate an async bailout/interruption by invoking lifecycle twice.
if(debugRenderPhaseSideEffects){instance.shouldComponentUpdate(newProps,newState,newContext);}{warning(shouldUpdate!==undefined,'%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',getComponentName(workInProgress)||'Unknown');}return shouldUpdate;}if(type.prototype&&type.prototype.isPureReactComponent){return!shallowEqual(oldProps,newProps)||!shallowEqual(oldState,newState);}return true;}function checkClassInstance(workInProgress){var instance=workInProgress.stateNode;var type=workInProgress.type;{var name=getComponentName(workInProgress);var renderPresent=instance.render;if(!renderPresent){if(type.prototype&&typeof type.prototype.render==='function'){warning(false,'%s(...): No `render` method found on the returned component '+'instance: did you accidentally return an object from the constructor?',name);}else{warning(false,'%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`.',name);}}var noGetInitialStateOnES6=!instance.getInitialState||instance.getInitialState.isReactClassApproved||instance.state;warning(noGetInitialStateOnES6,'getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',name);var noGetDefaultPropsOnES6=!instance.getDefaultProps||instance.getDefaultProps.isReactClassApproved;warning(noGetDefaultPropsOnES6,'getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',name);var noInstancePropTypes=!instance.propTypes;warning(noInstancePropTypes,'propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',name);var noInstanceContextTypes=!instance.contextTypes;warning(noInstanceContextTypes,'contextTypes was defined as an instance property on %s. Use a static '+'property to define contextTypes instead.',name);var noComponentShouldUpdate=typeof instance.componentShouldUpdate!=='function';warning(noComponentShouldUpdate,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',name);if(type.prototype&&type.prototype.isPureReactComponent&&typeof instance.shouldComponentUpdate!=='undefined'){warning(false,'%s has a method called shouldComponentUpdate(). '+'shouldComponentUpdate should not be used when extending React.PureComponent. '+'Please extend React.Component if shouldComponentUpdate is used.',getComponentName(workInProgress)||'A pure component');}var noComponentDidUnmount=typeof instance.componentDidUnmount!=='function';warning(noComponentDidUnmount,'%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',name);var noComponentDidReceiveProps=typeof instance.componentDidReceiveProps!=='function';warning(noComponentDidReceiveProps,'%s has a method called '+'componentDidReceiveProps(). But there is no such lifecycle method. '+'If you meant to update the state in response to changing props, '+'use componentWillReceiveProps(). If you meant to fetch data or '+'run side-effects or mutations after React has updated the UI, use componentDidUpdate().',name);var noComponentWillRecieveProps=typeof instance.componentWillRecieveProps!=='function';warning(noComponentWillRecieveProps,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',name);var hasMutatedProps=instance.props!==workInProgress.pendingProps;warning(instance.props===undefined||!hasMutatedProps,'%s(...): When calling super() in `%s`, make sure to pass '+"up the same props that your component's constructor was passed.",name,name);var noInstanceDefaultProps=!instance.defaultProps;warning(noInstanceDefaultProps,'Setting defaultProps as an instance property on %s is not supported and will be ignored.'+' Instead, define defaultProps as a static property on %s.',name,name);}var state=instance.state;if(state&&((typeof state==='undefined'?'undefined':_typeof(state))!=='object'||isArray(state))){warning(false,'%s.state: must be set to an object or null',getComponentName(workInProgress));}if(typeof instance.getChildContext==='function'){warning(_typeof(workInProgress.type.childContextTypes)==='object','%s.getChildContext(): childContextTypes must be defined in order to '+'use getChildContext().',getComponentName(workInProgress));}}function resetInputPointers(workInProgress,instance){instance.props=workInProgress.memoizedProps;instance.state=workInProgress.memoizedState;}function adoptClassInstance(workInProgress,instance){instance.updater=updater;workInProgress.stateNode=instance;// The instance needs access to the fiber so that it can schedule updates
set(instance,workInProgress);{instance._reactInternalInstance=fakeInternalInstance;}}function constructClassInstance(workInProgress,props){var ctor=workInProgress.type;var unmaskedContext=getUnmaskedContext(workInProgress);var needsContext=isContextConsumer(workInProgress);var context=needsContext?getMaskedContext(workInProgress,unmaskedContext):emptyObject;var instance=new ctor(props,context);adoptClassInstance(workInProgress,instance);// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
if(needsContext){cacheContext(workInProgress,unmaskedContext,context);}return instance;}function callComponentWillMount(workInProgress,instance){startPhaseTimer(workInProgress,'componentWillMount');var oldState=instance.state;instance.componentWillMount();stopPhaseTimer();// Simulate an async bailout/interruption by invoking lifecycle twice.
if(debugRenderPhaseSideEffects){instance.componentWillMount();}if(oldState!==instance.state){{warning(false,'%s.componentWillMount(): Assigning directly to this.state is '+"deprecated (except inside a component's "+'constructor). Use setState instead.',getComponentName(workInProgress));}updater.enqueueReplaceState(instance,instance.state,null);}}function callComponentWillReceiveProps(workInProgress,instance,newProps,newContext){startPhaseTimer(workInProgress,'componentWillReceiveProps');var oldState=instance.state;instance.componentWillReceiveProps(newProps,newContext);stopPhaseTimer();// Simulate an async bailout/interruption by invoking lifecycle twice.
if(debugRenderPhaseSideEffects){instance.componentWillReceiveProps(newProps,newContext);}if(instance.state!==oldState){{var componentName=getComponentName(workInProgress)||'Component';if(!didWarnAboutStateAssignmentForComponent[componentName]){warning(false,'%s.componentWillReceiveProps(): Assigning directly to '+"this.state is deprecated (except inside a component's "+'constructor). Use setState instead.',componentName);didWarnAboutStateAssignmentForComponent[componentName]=true;}}updater.enqueueReplaceState(instance,instance.state,null);}}// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(workInProgress,renderExpirationTime){var current=workInProgress.alternate;{checkClassInstance(workInProgress);}var instance=workInProgress.stateNode;var state=instance.state||null;var props=workInProgress.pendingProps;!props?invariant(false,'There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.'):void 0;var unmaskedContext=getUnmaskedContext(workInProgress);instance.props=props;instance.state=workInProgress.memoizedState=state;instance.refs=emptyObject;instance.context=getMaskedContext(workInProgress,unmaskedContext);if(enableAsyncSubtreeAPI&&workInProgress.type!=null&&workInProgress.type.prototype!=null&&workInProgress.type.prototype.unstable_isAsyncReactComponent===true){workInProgress.internalContextTag|=AsyncUpdates;}if(typeof instance.componentWillMount==='function'){callComponentWillMount(workInProgress,instance);// If we had additional state updates during this life-cycle, let's
// process them now.
var updateQueue=workInProgress.updateQueue;if(updateQueue!==null){instance.state=processUpdateQueue(current,workInProgress,updateQueue,instance,props,renderExpirationTime);}}if(typeof instance.componentDidMount==='function'){workInProgress.effectTag|=Update;}}// Called on a preexisting class instance. Returns false if a resumed render
// could be reused.
// function resumeMountClassInstance(
//   workInProgress: Fiber,
//   priorityLevel: PriorityLevel,
// ): boolean {
//   const instance = workInProgress.stateNode;
//   resetInputPointers(workInProgress, instance);
//   let newState = workInProgress.memoizedState;
//   let newProps = workInProgress.pendingProps;
//   if (!newProps) {
//     // If there isn't any new props, then we'll reuse the memoized props.
//     // This could be from already completed work.
//     newProps = workInProgress.memoizedProps;
//     invariant(
//       newProps != null,
//       'There should always be pending or memoized props. This error is ' +
//         'likely caused by a bug in React. Please file an issue.',
//     );
//   }
//   const newUnmaskedContext = getUnmaskedContext(workInProgress);
//   const newContext = getMaskedContext(workInProgress, newUnmaskedContext);
//   const oldContext = instance.context;
//   const oldProps = workInProgress.memoizedProps;
//   if (
//     typeof instance.componentWillReceiveProps === 'function' &&
//     (oldProps !== newProps || oldContext !== newContext)
//   ) {
//     callComponentWillReceiveProps(
//       workInProgress,
//       instance,
//       newProps,
//       newContext,
//     );
//   }
//   // Process the update queue before calling shouldComponentUpdate
//   const updateQueue = workInProgress.updateQueue;
//   if (updateQueue !== null) {
//     newState = processUpdateQueue(
//       workInProgress,
//       updateQueue,
//       instance,
//       newState,
//       newProps,
//       priorityLevel,
//     );
//   }
//   // TODO: Should we deal with a setState that happened after the last
//   // componentWillMount and before this componentWillMount? Probably
//   // unsupported anyway.
//   if (
//     !checkShouldComponentUpdate(
//       workInProgress,
//       workInProgress.memoizedProps,
//       newProps,
//       workInProgress.memoizedState,
//       newState,
//       newContext,
//     )
//   ) {
//     // Update the existing instance's state, props, and context pointers even
//     // though we're bailing out.
//     instance.props = newProps;
//     instance.state = newState;
//     instance.context = newContext;
//     return false;
//   }
//   // Update the input pointers now so that they are correct when we call
//   // componentWillMount
//   instance.props = newProps;
//   instance.state = newState;
//   instance.context = newContext;
//   if (typeof instance.componentWillMount === 'function') {
//     callComponentWillMount(workInProgress, instance);
//     // componentWillMount may have called setState. Process the update queue.
//     const newUpdateQueue = workInProgress.updateQueue;
//     if (newUpdateQueue !== null) {
//       newState = processUpdateQueue(
//         workInProgress,
//         newUpdateQueue,
//         instance,
//         newState,
//         newProps,
//         priorityLevel,
//       );
//     }
//   }
//   if (typeof instance.componentDidMount === 'function') {
//     workInProgress.effectTag |= Update;
//   }
//   instance.state = newState;
//   return true;
// }
// Invokes the update life-cycles and returns false if it shouldn't rerender.
function updateClassInstance(current,workInProgress,renderExpirationTime){var instance=workInProgress.stateNode;resetInputPointers(workInProgress,instance);var oldProps=workInProgress.memoizedProps;var newProps=workInProgress.pendingProps;if(!newProps){// If there aren't any new props, then we'll reuse the memoized props.
// This could be from already completed work.
newProps=oldProps;!(newProps!=null)?invariant(false,'There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}var oldContext=instance.context;var newUnmaskedContext=getUnmaskedContext(workInProgress);var newContext=getMaskedContext(workInProgress,newUnmaskedContext);// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
if(typeof instance.componentWillReceiveProps==='function'&&(oldProps!==newProps||oldContext!==newContext)){callComponentWillReceiveProps(workInProgress,instance,newProps,newContext);}// Compute the next state using the memoized state and the update queue.
var oldState=workInProgress.memoizedState;// TODO: Previous state can be null.
var newState=void 0;if(workInProgress.updateQueue!==null){newState=processUpdateQueue(current,workInProgress,workInProgress.updateQueue,instance,newProps,renderExpirationTime);}else{newState=oldState;}if(oldProps===newProps&&oldState===newState&&!hasContextChanged()&&!(workInProgress.updateQueue!==null&&workInProgress.updateQueue.hasForceUpdate)){// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidUpdate==='function'){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.effectTag|=Update;}}return false;}var shouldUpdate=checkShouldComponentUpdate(workInProgress,oldProps,newProps,oldState,newState,newContext);if(shouldUpdate){if(typeof instance.componentWillUpdate==='function'){startPhaseTimer(workInProgress,'componentWillUpdate');instance.componentWillUpdate(newProps,newState,newContext);stopPhaseTimer();// Simulate an async bailout/interruption by invoking lifecycle twice.
if(debugRenderPhaseSideEffects){instance.componentWillUpdate(newProps,newState,newContext);}}if(typeof instance.componentDidUpdate==='function'){workInProgress.effectTag|=Update;}}else{// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidUpdate==='function'){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.effectTag|=Update;}}// If shouldComponentUpdate returned false, we should still update the
// memoized props/state to indicate that this work can be reused.
memoizeProps(workInProgress,newProps);memoizeState(workInProgress,newState);}// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
instance.props=newProps;instance.state=newState;instance.context=newContext;return shouldUpdate;}return{adoptClassInstance:adoptClassInstance,constructClassInstance:constructClassInstance,mountClassInstance:mountClassInstance,// resumeMountClassInstance,
updateClassInstance:updateClassInstance};};// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol=typeof Symbol==='function'&&Symbol['for'];var REACT_ELEMENT_TYPE=hasSymbol?Symbol['for']('react.element'):0xeac7;var REACT_CALL_TYPE=hasSymbol?Symbol['for']('react.call'):0xeac8;var REACT_RETURN_TYPE=hasSymbol?Symbol['for']('react.return'):0xeac9;var REACT_PORTAL_TYPE=hasSymbol?Symbol['for']('react.portal'):0xeaca;var REACT_FRAGMENT_TYPE=hasSymbol?Symbol['for']('react.fragment'):0xeacb;var MAYBE_ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';function getIteratorFn(maybeIterable){if(maybeIterable===null||typeof maybeIterable==='undefined'){return null;}var maybeIterator=MAYBE_ITERATOR_SYMBOL&&maybeIterable[MAYBE_ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL];if(typeof maybeIterator==='function'){return maybeIterator;}return null;}var getCurrentFiberStackAddendum$1=ReactDebugCurrentFiber.getCurrentFiberStackAddendum;{var didWarnAboutMaps=false;/**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */var ownerHasKeyUseWarning={};var ownerHasFunctionTypeWarning={};var warnForMissingKey=function warnForMissingKey(child){if(child===null||(typeof child==='undefined'?'undefined':_typeof(child))!=='object'){return;}if(!child._store||child._store.validated||child.key!=null){return;}!(_typeof(child._store)==='object')?invariant(false,'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'):void 0;child._store.validated=true;var currentComponentErrorInfo='Each child in an array or iterator should have a unique '+'"key" prop. See https://fb.me/react-warning-keys for '+'more information.'+(getCurrentFiberStackAddendum$1()||'');if(ownerHasKeyUseWarning[currentComponentErrorInfo]){return;}ownerHasKeyUseWarning[currentComponentErrorInfo]=true;warning(false,'Each child in an array or iterator should have a unique '+'"key" prop. See https://fb.me/react-warning-keys for '+'more information.%s',getCurrentFiberStackAddendum$1());};}var isArray$1=Array.isArray;function coerceRef(current,element){var mixedRef=element.ref;if(mixedRef!==null&&typeof mixedRef!=='function'){if(element._owner){var owner=element._owner;var inst=void 0;if(owner){var ownerFiber=owner;!(ownerFiber.tag===ClassComponent)?invariant(false,'Stateless function components cannot have refs.'):void 0;inst=ownerFiber.stateNode;}!inst?invariant(false,'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.',mixedRef):void 0;var stringRef=''+mixedRef;// Check if previous string ref matches new string ref
if(current!==null&&current.ref!==null&&current.ref._stringRef===stringRef){return current.ref;}var ref=function ref(value){var refs=inst.refs===emptyObject?inst.refs={}:inst.refs;if(value===null){delete refs[stringRef];}else{refs[stringRef]=value;}};ref._stringRef=stringRef;return ref;}else{!(typeof mixedRef==='string')?invariant(false,'Expected ref to be a function or a string.'):void 0;!element._owner?invariant(false,'Element ref was specified as a string (%s) but no owner was set. You may have multiple copies of React loaded. (details: https://fb.me/react-refs-must-have-owner).',mixedRef):void 0;}}return mixedRef;}function throwOnInvalidObjectType(returnFiber,newChild){if(returnFiber.type!=='textarea'){var addendum='';{addendum=' If you meant to render a collection of children, use an array '+'instead.'+(getCurrentFiberStackAddendum$1()||'');}invariant(false,'Objects are not valid as a React child (found: %s).%s',Object.prototype.toString.call(newChild)==='[object Object]'?'object with keys {'+Object.keys(newChild).join(', ')+'}':newChild,addendum);}}function warnOnFunctionType(){var currentComponentErrorInfo='Functions are not valid as a React child. This may happen if '+'you return a Component instead of <Component /> from render. '+'Or maybe you meant to call this function rather than return it.'+(getCurrentFiberStackAddendum$1()||'');if(ownerHasFunctionTypeWarning[currentComponentErrorInfo]){return;}ownerHasFunctionTypeWarning[currentComponentErrorInfo]=true;warning(false,'Functions are not valid as a React child. This may happen if '+'you return a Component instead of <Component /> from render. '+'Or maybe you meant to call this function rather than return it.%s',getCurrentFiberStackAddendum$1()||'');}// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(shouldTrackSideEffects){function deleteChild(returnFiber,childToDelete){if(!shouldTrackSideEffects){// Noop.
return;}// Deletions are added in reversed order so we add it to the front.
// At this point, the return fiber's effect list is empty except for
// deletions, so we can just append the deletion to the list. The remaining
// effects aren't added until the complete phase. Once we implement
// resuming, this may not be true.
var last=returnFiber.lastEffect;if(last!==null){last.nextEffect=childToDelete;returnFiber.lastEffect=childToDelete;}else{returnFiber.firstEffect=returnFiber.lastEffect=childToDelete;}childToDelete.nextEffect=null;childToDelete.effectTag=Deletion;}function deleteRemainingChildren(returnFiber,currentFirstChild){if(!shouldTrackSideEffects){// Noop.
return null;}// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
var childToDelete=currentFirstChild;while(childToDelete!==null){deleteChild(returnFiber,childToDelete);childToDelete=childToDelete.sibling;}return null;}function mapRemainingChildren(returnFiber,currentFirstChild){// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
var existingChildren=new Map();var existingChild=currentFirstChild;while(existingChild!==null){if(existingChild.key!==null){existingChildren.set(existingChild.key,existingChild);}else{existingChildren.set(existingChild.index,existingChild);}existingChild=existingChild.sibling;}return existingChildren;}function useFiber(fiber,pendingProps,expirationTime){// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
var clone=createWorkInProgress(fiber,pendingProps,expirationTime);clone.index=0;clone.sibling=null;return clone;}function placeChild(newFiber,lastPlacedIndex,newIndex){newFiber.index=newIndex;if(!shouldTrackSideEffects){// Noop.
return lastPlacedIndex;}var current=newFiber.alternate;if(current!==null){var oldIndex=current.index;if(oldIndex<lastPlacedIndex){// This is a move.
newFiber.effectTag=Placement;return lastPlacedIndex;}else{// This item can stay in place.
return oldIndex;}}else{// This is an insertion.
newFiber.effectTag=Placement;return lastPlacedIndex;}}function placeSingleChild(newFiber){// This is simpler for the single child case. We only need to do a
// placement for inserting new children.
if(shouldTrackSideEffects&&newFiber.alternate===null){newFiber.effectTag=Placement;}return newFiber;}function updateTextNode(returnFiber,current,textContent,expirationTime){if(current===null||current.tag!==HostText){// Insert
var created=createFiberFromText(textContent,returnFiber.internalContextTag,expirationTime);created['return']=returnFiber;return created;}else{// Update
var existing=useFiber(current,textContent,expirationTime);existing['return']=returnFiber;return existing;}}function updateElement(returnFiber,current,element,expirationTime){if(current!==null&&current.type===element.type){// Move based on index
var existing=useFiber(current,element.props,expirationTime);existing.ref=coerceRef(current,element);existing['return']=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}else{// Insert
var created=createFiberFromElement(element,returnFiber.internalContextTag,expirationTime);created.ref=coerceRef(current,element);created['return']=returnFiber;return created;}}function updateCall(returnFiber,current,call,expirationTime){// TODO: Should this also compare handler to determine whether to reuse?
if(current===null||current.tag!==CallComponent){// Insert
var created=createFiberFromCall(call,returnFiber.internalContextTag,expirationTime);created['return']=returnFiber;return created;}else{// Move based on index
var existing=useFiber(current,call,expirationTime);existing['return']=returnFiber;return existing;}}function updateReturn(returnFiber,current,returnNode,expirationTime){if(current===null||current.tag!==ReturnComponent){// Insert
var created=createFiberFromReturn(returnNode,returnFiber.internalContextTag,expirationTime);created.type=returnNode.value;created['return']=returnFiber;return created;}else{// Move based on index
var existing=useFiber(current,null,expirationTime);existing.type=returnNode.value;existing['return']=returnFiber;return existing;}}function updatePortal(returnFiber,current,portal,expirationTime){if(current===null||current.tag!==HostPortal||current.stateNode.containerInfo!==portal.containerInfo||current.stateNode.implementation!==portal.implementation){// Insert
var created=createFiberFromPortal(portal,returnFiber.internalContextTag,expirationTime);created['return']=returnFiber;return created;}else{// Update
var existing=useFiber(current,portal.children||[],expirationTime);existing['return']=returnFiber;return existing;}}function updateFragment(returnFiber,current,fragment,expirationTime,key){if(current===null||current.tag!==Fragment){// Insert
var created=createFiberFromFragment(fragment,returnFiber.internalContextTag,expirationTime,key);created['return']=returnFiber;return created;}else{// Update
var existing=useFiber(current,fragment,expirationTime);existing['return']=returnFiber;return existing;}}function createChild(returnFiber,newChild,expirationTime){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var created=createFiberFromText(''+newChild,returnFiber.internalContextTag,expirationTime);created['return']=returnFiber;return created;}if((typeof newChild==='undefined'?'undefined':_typeof(newChild))==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{if(newChild.type===REACT_FRAGMENT_TYPE){var _created=createFiberFromFragment(newChild.props.children,returnFiber.internalContextTag,expirationTime,newChild.key);_created['return']=returnFiber;return _created;}else{var _created2=createFiberFromElement(newChild,returnFiber.internalContextTag,expirationTime);_created2.ref=coerceRef(null,newChild);_created2['return']=returnFiber;return _created2;}}case REACT_CALL_TYPE:{var _created3=createFiberFromCall(newChild,returnFiber.internalContextTag,expirationTime);_created3['return']=returnFiber;return _created3;}case REACT_RETURN_TYPE:{var _created4=createFiberFromReturn(newChild,returnFiber.internalContextTag,expirationTime);_created4.type=newChild.value;_created4['return']=returnFiber;return _created4;}case REACT_PORTAL_TYPE:{var _created5=createFiberFromPortal(newChild,returnFiber.internalContextTag,expirationTime);_created5['return']=returnFiber;return _created5;}}if(isArray$1(newChild)||getIteratorFn(newChild)){var _created6=createFiberFromFragment(newChild,returnFiber.internalContextTag,expirationTime,null);_created6['return']=returnFiber;return _created6;}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType();}}return null;}function updateSlot(returnFiber,oldFiber,newChild,expirationTime){// Update the fiber if the keys match, otherwise return null.
var key=oldFiber!==null?oldFiber.key:null;if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
if(key!==null){return null;}return updateTextNode(returnFiber,oldFiber,''+newChild,expirationTime);}if((typeof newChild==='undefined'?'undefined':_typeof(newChild))==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{if(newChild.key===key){if(newChild.type===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,oldFiber,newChild.props.children,expirationTime,key);}return updateElement(returnFiber,oldFiber,newChild,expirationTime);}else{return null;}}case REACT_CALL_TYPE:{if(newChild.key===key){return updateCall(returnFiber,oldFiber,newChild,expirationTime);}else{return null;}}case REACT_RETURN_TYPE:{// Returns don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a
// yield.
if(key===null){return updateReturn(returnFiber,oldFiber,newChild,expirationTime);}else{return null;}}case REACT_PORTAL_TYPE:{if(newChild.key===key){return updatePortal(returnFiber,oldFiber,newChild,expirationTime);}else{return null;}}}if(isArray$1(newChild)||getIteratorFn(newChild)){if(key!==null){return null;}return updateFragment(returnFiber,oldFiber,newChild,expirationTime,null);}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType();}}return null;}function updateFromMap(existingChildren,returnFiber,newIdx,newChild,expirationTime){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys, so we neither have to check the old nor
// new node for the key. If both are text nodes, they match.
var matchedFiber=existingChildren.get(newIdx)||null;return updateTextNode(returnFiber,matchedFiber,''+newChild,expirationTime);}if((typeof newChild==='undefined'?'undefined':_typeof(newChild))==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _matchedFiber=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;if(newChild.type===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,_matchedFiber,newChild.props.children,expirationTime,newChild.key);}return updateElement(returnFiber,_matchedFiber,newChild,expirationTime);}case REACT_CALL_TYPE:{var _matchedFiber2=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updateCall(returnFiber,_matchedFiber2,newChild,expirationTime);}case REACT_RETURN_TYPE:{// Returns don't have keys, so we neither have to check the old nor
// new node for the key. If both are returns, they match.
var _matchedFiber3=existingChildren.get(newIdx)||null;return updateReturn(returnFiber,_matchedFiber3,newChild,expirationTime);}case REACT_PORTAL_TYPE:{var _matchedFiber4=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updatePortal(returnFiber,_matchedFiber4,newChild,expirationTime);}}if(isArray$1(newChild)||getIteratorFn(newChild)){var _matchedFiber5=existingChildren.get(newIdx)||null;return updateFragment(returnFiber,_matchedFiber5,newChild,expirationTime,null);}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType();}}return null;}/**
   * Warns if there is a duplicate or missing key
   */function warnOnInvalidKey(child,knownKeys){{if((typeof child==='undefined'?'undefined':_typeof(child))!=='object'||child===null){return knownKeys;}switch(child.$$typeof){case REACT_ELEMENT_TYPE:case REACT_CALL_TYPE:case REACT_PORTAL_TYPE:warnForMissingKey(child);var key=child.key;if(typeof key!=='string'){break;}if(knownKeys===null){knownKeys=new Set();knownKeys.add(key);break;}if(!knownKeys.has(key)){knownKeys.add(key);break;}warning(false,'Encountered two children with the same key, `%s`. '+'Keys should be unique so that components maintain their identity '+'across updates. Non-unique keys may cause children to be '+'duplicated and/or omitted — the behavior is unsupported and '+'could change in a future version.%s',key,getCurrentFiberStackAddendum$1());break;default:break;}}return knownKeys;}function reconcileChildrenArray(returnFiber,currentFirstChild,newChildren,expirationTime){// This algorithm can't optimize by searching from boths ends since we
// don't have backpointers on fibers. I'm trying to see how far we can get
// with that model. If it ends up not being worth the tradeoffs, we can
// add it later.
// Even with a two ended optimization, we'd want to optimize for the case
// where there are few changes and brute force the comparison instead of
// going for the Map. It'd like to explore hitting that path first in
// forward-only mode and only go for the Map once we notice that we need
// lots of look ahead. This doesn't handle reversal as well as two ended
// search but that's unusual. Besides, for the two ended optimization to
// work on Iterables, we'd need to copy the whole set.
// In this first iteration, we'll just live with hitting the bad case
// (adding everything to a Map) in for every insert/move.
// If you change this code, also update reconcileChildrenIterator() which
// uses the same algorithm.
{// First, validate keys.
var knownKeys=null;for(var i=0;i<newChildren.length;i++){var child=newChildren[i];knownKeys=warnOnInvalidKey(child,knownKeys);}}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;for(;oldFiber!==null&&newIdx<newChildren.length;newIdx++){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else{nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,newChildren[newIdx],expirationTime);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=newFiber;}else{// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(newIdx===newChildren.length){// We've reached the end of the new children. We can delete the rest.
deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;newIdx<newChildren.length;newIdx++){var _newFiber=createChild(returnFiber,newChildren[newIdx],expirationTime);if(!_newFiber){continue;}lastPlacedIndex=placeChild(_newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=_newFiber;}else{previousNewFiber.sibling=_newFiber;}previousNewFiber=_newFiber;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
for(;newIdx<newChildren.length;newIdx++){var _newFiber2=updateFromMap(existingChildren,returnFiber,newIdx,newChildren[newIdx],expirationTime);if(_newFiber2){if(shouldTrackSideEffects){if(_newFiber2.alternate!==null){// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
existingChildren['delete'](_newFiber2.key===null?newIdx:_newFiber2.key);}}lastPlacedIndex=placeChild(_newFiber2,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber2;}else{previousNewFiber.sibling=_newFiber2;}previousNewFiber=_newFiber2;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileChildrenIterator(returnFiber,currentFirstChild,newChildrenIterable,expirationTime){// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var iteratorFn=getIteratorFn(newChildrenIterable);!(typeof iteratorFn==='function')?invariant(false,'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'):void 0;{// Warn about using Maps as children
if(typeof newChildrenIterable.entries==='function'){var possibleMap=newChildrenIterable;if(possibleMap.entries===iteratorFn){warning(didWarnAboutMaps,'Using Maps as children is unsupported and will likely yield '+'unexpected results. Convert it to a sequence/iterable of keyed '+'ReactElements instead.%s',getCurrentFiberStackAddendum$1());didWarnAboutMaps=true;}}// First, validate keys.
// We'll get a different iterator later for the main pass.
var _newChildren=iteratorFn.call(newChildrenIterable);if(_newChildren){var knownKeys=null;var _step=_newChildren.next();for(;!_step.done;_step=_newChildren.next()){var child=_step.value;knownKeys=warnOnInvalidKey(child,knownKeys);}}}var newChildren=iteratorFn.call(newChildrenIterable);!(newChildren!=null)?invariant(false,'An iterable object provided no iterator.'):void 0;var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;var step=newChildren.next();for(;oldFiber!==null&&!step.done;newIdx++,step=newChildren.next()){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else{nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,step.value,expirationTime);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
if(!oldFiber){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=newFiber;}else{// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(step.done){// We've reached the end of the new children. We can delete the rest.
deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber3=createChild(returnFiber,step.value,expirationTime);if(_newFiber3===null){continue;}lastPlacedIndex=placeChild(_newFiber3,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=_newFiber3;}else{previousNewFiber.sibling=_newFiber3;}previousNewFiber=_newFiber3;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber4=updateFromMap(existingChildren,returnFiber,newIdx,step.value,expirationTime);if(_newFiber4!==null){if(shouldTrackSideEffects){if(_newFiber4.alternate!==null){// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
existingChildren['delete'](_newFiber4.key===null?newIdx:_newFiber4.key);}}lastPlacedIndex=placeChild(_newFiber4,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber4;}else{previousNewFiber.sibling=_newFiber4;}previousNewFiber=_newFiber4;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileSingleTextNode(returnFiber,currentFirstChild,textContent,expirationTime){// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(currentFirstChild!==null&&currentFirstChild.tag===HostText){// We already have an existing node so let's just update it and delete
// the rest.
deleteRemainingChildren(returnFiber,currentFirstChild.sibling);var existing=useFiber(currentFirstChild,textContent,expirationTime);existing['return']=returnFiber;return existing;}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
deleteRemainingChildren(returnFiber,currentFirstChild);var created=createFiberFromText(textContent,returnFiber.internalContextTag,expirationTime);created['return']=returnFiber;return created;}function reconcileSingleElement(returnFiber,currentFirstChild,element,expirationTime){var key=element.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){if(child.tag===Fragment?element.type===REACT_FRAGMENT_TYPE:child.type===element.type){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,element.type===REACT_FRAGMENT_TYPE?element.props.children:element.props,expirationTime);existing.ref=coerceRef(child,element);existing['return']=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}if(element.type===REACT_FRAGMENT_TYPE){var created=createFiberFromFragment(element.props.children,returnFiber.internalContextTag,expirationTime,element.key);created['return']=returnFiber;return created;}else{var _created7=createFiberFromElement(element,returnFiber.internalContextTag,expirationTime);_created7.ref=coerceRef(currentFirstChild,element);_created7['return']=returnFiber;return _created7;}}function reconcileSingleCall(returnFiber,currentFirstChild,call,expirationTime){var key=call.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){if(child.tag===CallComponent){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,call,expirationTime);existing['return']=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromCall(call,returnFiber.internalContextTag,expirationTime);created['return']=returnFiber;return created;}function reconcileSingleReturn(returnFiber,currentFirstChild,returnNode,expirationTime){// There's no need to check for keys on yields since they're stateless.
var child=currentFirstChild;if(child!==null){if(child.tag===ReturnComponent){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,null,expirationTime);existing.type=returnNode.value;existing['return']=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);}}var created=createFiberFromReturn(returnNode,returnFiber.internalContextTag,expirationTime);created.type=returnNode.value;created['return']=returnFiber;return created;}function reconcileSinglePortal(returnFiber,currentFirstChild,portal,expirationTime){var key=portal.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){if(child.tag===HostPortal&&child.stateNode.containerInfo===portal.containerInfo&&child.stateNode.implementation===portal.implementation){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,portal.children||[],expirationTime);existing['return']=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromPortal(portal,returnFiber.internalContextTag,expirationTime);created['return']=returnFiber;return created;}// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
function reconcileChildFibers(returnFiber,currentFirstChild,newChild,expirationTime){// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
// Handle top level unkeyed fragments as if they were arrays.
// This leads to an ambiguity between <>{[...]}</> and <>...</>.
// We treat the ambiguous cases above the same.
if((typeof newChild==='undefined'?'undefined':_typeof(newChild))==='object'&&newChild!==null&&newChild.type===REACT_FRAGMENT_TYPE&&newChild.key===null){newChild=newChild.props.children;}// Handle object types
var isObject=(typeof newChild==='undefined'?'undefined':_typeof(newChild))==='object'&&newChild!==null;if(isObject){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:return placeSingleChild(reconcileSingleElement(returnFiber,currentFirstChild,newChild,expirationTime));case REACT_CALL_TYPE:return placeSingleChild(reconcileSingleCall(returnFiber,currentFirstChild,newChild,expirationTime));case REACT_RETURN_TYPE:return placeSingleChild(reconcileSingleReturn(returnFiber,currentFirstChild,newChild,expirationTime));case REACT_PORTAL_TYPE:return placeSingleChild(reconcileSinglePortal(returnFiber,currentFirstChild,newChild,expirationTime));}}if(typeof newChild==='string'||typeof newChild==='number'){return placeSingleChild(reconcileSingleTextNode(returnFiber,currentFirstChild,''+newChild,expirationTime));}if(isArray$1(newChild)){return reconcileChildrenArray(returnFiber,currentFirstChild,newChild,expirationTime);}if(getIteratorFn(newChild)){return reconcileChildrenIterator(returnFiber,currentFirstChild,newChild,expirationTime);}if(isObject){throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType();}}if(typeof newChild==='undefined'){// If the new child is undefined, and the return fiber is a composite
// component, throw an error. If Fiber return types are disabled,
// we already threw above.
switch(returnFiber.tag){case ClassComponent:{{var instance=returnFiber.stateNode;if(instance.render._isMockFunction){// We allow auto-mocks to proceed as if they're returning null.
break;}}}// Intentionally fall through to the next case, which handles both
// functions and classes
// eslint-disable-next-lined no-fallthrough
case FunctionalComponent:{var Component=returnFiber.type;invariant(false,'%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.',Component.displayName||Component.name||'Component');}}}// Remaining cases are all treated as empty.
return deleteRemainingChildren(returnFiber,currentFirstChild);}return reconcileChildFibers;}var reconcileChildFibers=ChildReconciler(true);var mountChildFibers=ChildReconciler(false);function cloneChildFibers(current,workInProgress){!(current===null||workInProgress.child===current.child)?invariant(false,'Resuming work not yet implemented.'):void 0;if(workInProgress.child===null){return;}var currentChild=workInProgress.child;var newChild=createWorkInProgress(currentChild,currentChild.pendingProps,currentChild.expirationTime);workInProgress.child=newChild;newChild['return']=workInProgress;while(currentChild.sibling!==null){currentChild=currentChild.sibling;newChild=newChild.sibling=createWorkInProgress(currentChild,currentChild.pendingProps,currentChild.expirationTime);newChild['return']=workInProgress;}newChild.sibling=null;}{var warnedAboutStatelessRefs={};}var ReactFiberBeginWork=function ReactFiberBeginWork(config,hostContext,hydrationContext,scheduleWork,computeExpirationForFiber){var shouldSetTextContent=config.shouldSetTextContent,useSyncScheduling=config.useSyncScheduling,shouldDeprioritizeSubtree=config.shouldDeprioritizeSubtree;var pushHostContext=hostContext.pushHostContext,pushHostContainer=hostContext.pushHostContainer;var enterHydrationState=hydrationContext.enterHydrationState,resetHydrationState=hydrationContext.resetHydrationState,tryToClaimNextHydratableInstance=hydrationContext.tryToClaimNextHydratableInstance;var _ReactFiberClassCompo=ReactFiberClassComponent(scheduleWork,computeExpirationForFiber,memoizeProps,memoizeState),adoptClassInstance=_ReactFiberClassCompo.adoptClassInstance,constructClassInstance=_ReactFiberClassCompo.constructClassInstance,mountClassInstance=_ReactFiberClassCompo.mountClassInstance,updateClassInstance=_ReactFiberClassCompo.updateClassInstance;// TODO: Remove this and use reconcileChildrenAtExpirationTime directly.
function reconcileChildren(current,workInProgress,nextChildren){reconcileChildrenAtExpirationTime(current,workInProgress,nextChildren,workInProgress.expirationTime);}function reconcileChildrenAtExpirationTime(current,workInProgress,nextChildren,renderExpirationTime){if(current===null){// If this is a fresh new component that hasn't been rendered yet, we
// won't update its child set by applying minimal side-effects. Instead,
// we will add them all to the child before it gets rendered. That means
// we can optimize this reconciliation pass by not tracking side-effects.
workInProgress.child=mountChildFibers(workInProgress,null,nextChildren,renderExpirationTime);}else{// If the current child is the same as the work in progress, it means that
// we haven't yet started any work on these children. Therefore, we use
// the clone algorithm to create a copy of all the current children.
// If we had any progressed work already, that is invalid at this point so
// let's throw it out.
workInProgress.child=reconcileChildFibers(workInProgress,current.child,nextChildren,renderExpirationTime);}}function updateFragment(current,workInProgress){var nextChildren=workInProgress.pendingProps;if(hasContextChanged()){// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
if(nextChildren===null){nextChildren=workInProgress.memoizedProps;}}else if(nextChildren===null||workInProgress.memoizedProps===nextChildren){return bailoutOnAlreadyFinishedWork(current,workInProgress);}reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextChildren);return workInProgress.child;}function markRef(current,workInProgress){var ref=workInProgress.ref;if(ref!==null&&(!current||current.ref!==ref)){// Schedule a Ref effect
workInProgress.effectTag|=Ref;}}function updateFunctionalComponent(current,workInProgress){var fn=workInProgress.type;var nextProps=workInProgress.pendingProps;var memoizedProps=workInProgress.memoizedProps;if(hasContextChanged()){// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
if(nextProps===null){nextProps=memoizedProps;}}else{if(nextProps===null||memoizedProps===nextProps){return bailoutOnAlreadyFinishedWork(current,workInProgress);}// TODO: consider bringing fn.shouldComponentUpdate() back.
// It used to be here.
}var unmaskedContext=getUnmaskedContext(workInProgress);var context=getMaskedContext(workInProgress,unmaskedContext);var nextChildren;{ReactCurrentOwner.current=workInProgress;ReactDebugCurrentFiber.setCurrentPhase('render');nextChildren=fn(nextProps,context);ReactDebugCurrentFiber.setCurrentPhase(null);}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork;reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextProps);return workInProgress.child;}function updateClassComponent(current,workInProgress,renderExpirationTime){// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var hasContext=pushContextProvider(workInProgress);var shouldUpdate=void 0;if(current===null){if(!workInProgress.stateNode){// In the initial pass we might need to construct the instance.
constructClassInstance(workInProgress,workInProgress.pendingProps);mountClassInstance(workInProgress,renderExpirationTime);shouldUpdate=true;}else{invariant(false,'Resuming work not yet implemented.');// In a resume, we'll already have an instance we can reuse.
// shouldUpdate = resumeMountClassInstance(workInProgress, renderExpirationTime);
}}else{shouldUpdate=updateClassInstance(current,workInProgress,renderExpirationTime);}return finishClassComponent(current,workInProgress,shouldUpdate,hasContext);}function finishClassComponent(current,workInProgress,shouldUpdate,hasContext){// Refs should update even if shouldComponentUpdate returns false
markRef(current,workInProgress);if(!shouldUpdate){// Context providers should defer to sCU for rendering
if(hasContext){invalidateContextProvider(workInProgress,false);}return bailoutOnAlreadyFinishedWork(current,workInProgress);}var instance=workInProgress.stateNode;// Rerender
ReactCurrentOwner.current=workInProgress;var nextChildren=void 0;{ReactDebugCurrentFiber.setCurrentPhase('render');nextChildren=instance.render();if(debugRenderPhaseSideEffects){instance.render();}ReactDebugCurrentFiber.setCurrentPhase(null);}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork;reconcileChildren(current,workInProgress,nextChildren);// Memoize props and state using the values we just used to render.
// TODO: Restructure so we never read values from the instance.
memoizeState(workInProgress,instance.state);memoizeProps(workInProgress,instance.props);// The context might have changed so we need to recalculate it.
if(hasContext){invalidateContextProvider(workInProgress,true);}return workInProgress.child;}function pushHostRootContext(workInProgress){var root=workInProgress.stateNode;if(root.pendingContext){pushTopLevelContextObject(workInProgress,root.pendingContext,root.pendingContext!==root.context);}else if(root.context){// Should always be set
pushTopLevelContextObject(workInProgress,root.context,false);}pushHostContainer(workInProgress,root.containerInfo);}function updateHostRoot(current,workInProgress,renderExpirationTime){pushHostRootContext(workInProgress);var updateQueue=workInProgress.updateQueue;if(updateQueue!==null){var prevState=workInProgress.memoizedState;var state=processUpdateQueue(current,workInProgress,updateQueue,null,null,renderExpirationTime);if(prevState===state){// If the state is the same as before, that's a bailout because we had
// no work that expires at this time.
resetHydrationState();return bailoutOnAlreadyFinishedWork(current,workInProgress);}var element=state.element;var root=workInProgress.stateNode;if((current===null||current.child===null)&&root.hydrate&&enterHydrationState(workInProgress)){// If we don't have any current children this might be the first pass.
// We always try to hydrate. If this isn't a hydration pass there won't
// be any children to hydrate which is effectively the same thing as
// not hydrating.
// This is a bit of a hack. We track the host root as a placement to
// know that we're currently in a mounting state. That way isMounted
// works as expected. We must reset this before committing.
// TODO: Delete this when we delete isMounted and findDOMNode.
workInProgress.effectTag|=Placement;// Ensure that children mount into this root without tracking
// side-effects. This ensures that we don't store Placement effects on
// nodes that will be hydrated.
workInProgress.child=mountChildFibers(workInProgress,null,element,renderExpirationTime);}else{// Otherwise reset hydration state in case we aborted and resumed another
// root.
resetHydrationState();reconcileChildren(current,workInProgress,element);}memoizeState(workInProgress,state);return workInProgress.child;}resetHydrationState();// If there is no update queue, that's a bailout because the root has no props.
return bailoutOnAlreadyFinishedWork(current,workInProgress);}function updateHostComponent(current,workInProgress,renderExpirationTime){pushHostContext(workInProgress);if(current===null){tryToClaimNextHydratableInstance(workInProgress);}var type=workInProgress.type;var memoizedProps=workInProgress.memoizedProps;var nextProps=workInProgress.pendingProps;if(nextProps===null){nextProps=memoizedProps;!(nextProps!==null)?invariant(false,'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}var prevProps=current!==null?current.memoizedProps:null;if(hasContextChanged()){// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
}else if(nextProps===null||memoizedProps===nextProps){return bailoutOnAlreadyFinishedWork(current,workInProgress);}var nextChildren=nextProps.children;var isDirectTextChild=shouldSetTextContent(type,nextProps);if(isDirectTextChild){// We special case a direct text child of a host node. This is a common
// case. We won't handle it as a reified child. We will instead handle
// this in the host environment that also have access to this prop. That
// avoids allocating another HostText fiber and traversing it.
nextChildren=null;}else if(prevProps&&shouldSetTextContent(type,prevProps)){// If we're switching from a direct text child to a normal child, or to
// empty, we need to schedule the text content to be reset.
workInProgress.effectTag|=ContentReset;}markRef(current,workInProgress);// Check the host config to see if the children are offscreen/hidden.
if(renderExpirationTime!==Never&&!useSyncScheduling&&shouldDeprioritizeSubtree(type,nextProps)){// Down-prioritize the children.
workInProgress.expirationTime=Never;// Bailout and come back to this fiber later.
return null;}reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextProps);return workInProgress.child;}function updateHostText(current,workInProgress){if(current===null){tryToClaimNextHydratableInstance(workInProgress);}var nextProps=workInProgress.pendingProps;if(nextProps===null){nextProps=workInProgress.memoizedProps;}memoizeProps(workInProgress,nextProps);// Nothing to do here. This is terminal. We'll do the completion step
// immediately after.
return null;}function mountIndeterminateComponent(current,workInProgress,renderExpirationTime){!(current===null)?invariant(false,'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.'):void 0;var fn=workInProgress.type;var props=workInProgress.pendingProps;var unmaskedContext=getUnmaskedContext(workInProgress);var context=getMaskedContext(workInProgress,unmaskedContext);var value;{if(fn.prototype&&typeof fn.prototype.render==='function'){var componentName=getComponentName(workInProgress);warning(false,"The <%s /> component appears to have a render method, but doesn't extend React.Component. "+'This is likely to cause errors. Change %s to extend React.Component instead.',componentName,componentName);}ReactCurrentOwner.current=workInProgress;value=fn(props,context);}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork;if((typeof value==='undefined'?'undefined':_typeof(value))==='object'&&value!==null&&typeof value.render==='function'){// Proceed under the assumption that this is a class instance
workInProgress.tag=ClassComponent;// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var hasContext=pushContextProvider(workInProgress);adoptClassInstance(workInProgress,value);mountClassInstance(workInProgress,renderExpirationTime);return finishClassComponent(current,workInProgress,true,hasContext);}else{// Proceed under the assumption that this is a functional component
workInProgress.tag=FunctionalComponent;{var Component=workInProgress.type;if(Component){warning(!Component.childContextTypes,'%s(...): childContextTypes cannot be defined on a functional component.',Component.displayName||Component.name||'Component');}if(workInProgress.ref!==null){var info='';var ownerName=ReactDebugCurrentFiber.getCurrentFiberOwnerName();if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}var warningKey=ownerName||workInProgress._debugID||'';var debugSource=workInProgress._debugSource;if(debugSource){warningKey=debugSource.fileName+':'+debugSource.lineNumber;}if(!warnedAboutStatelessRefs[warningKey]){warnedAboutStatelessRefs[warningKey]=true;warning(false,'Stateless function components cannot be given refs. '+'Attempts to access this ref will fail.%s%s',info,ReactDebugCurrentFiber.getCurrentFiberStackAddendum());}}}reconcileChildren(current,workInProgress,value);memoizeProps(workInProgress,props);return workInProgress.child;}}function updateCallComponent(current,workInProgress,renderExpirationTime){var nextCall=workInProgress.pendingProps;if(hasContextChanged()){// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
if(nextCall===null){nextCall=current&&current.memoizedProps;!(nextCall!==null)?invariant(false,'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}}else if(nextCall===null||workInProgress.memoizedProps===nextCall){nextCall=workInProgress.memoizedProps;// TODO: When bailing out, we might need to return the stateNode instead
// of the child. To check it for work.
// return bailoutOnAlreadyFinishedWork(current, workInProgress);
}var nextChildren=nextCall.children;// The following is a fork of reconcileChildrenAtExpirationTime but using
// stateNode to store the child.
if(current===null){workInProgress.stateNode=mountChildFibers(workInProgress,workInProgress.stateNode,nextChildren,renderExpirationTime);}else{workInProgress.stateNode=reconcileChildFibers(workInProgress,workInProgress.stateNode,nextChildren,renderExpirationTime);}memoizeProps(workInProgress,nextCall);// This doesn't take arbitrary time so we could synchronously just begin
// eagerly do the work of workInProgress.child as an optimization.
return workInProgress.stateNode;}function updatePortalComponent(current,workInProgress,renderExpirationTime){pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);var nextChildren=workInProgress.pendingProps;if(hasContextChanged()){// Normally we can bail out on props equality but if context has changed
// we don't do the bailout and we have to reuse existing props instead.
if(nextChildren===null){nextChildren=current&&current.memoizedProps;!(nextChildren!=null)?invariant(false,'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}}else if(nextChildren===null||workInProgress.memoizedProps===nextChildren){return bailoutOnAlreadyFinishedWork(current,workInProgress);}if(current===null){// Portals are special because we don't append the children during mount
// but at commit. Therefore we need to track insertions which the normal
// flow doesn't do during mount. This doesn't happen at the root because
// the root always starts with a "current" with a null child.
// TODO: Consider unifying this with how the root works.
workInProgress.child=reconcileChildFibers(workInProgress,null,nextChildren,renderExpirationTime);memoizeProps(workInProgress,nextChildren);}else{reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextChildren);}return workInProgress.child;}/*
  function reuseChildrenEffects(returnFiber : Fiber, firstChild : Fiber) {
    let child = firstChild;
    do {
      // Ensure that the first and last effect of the parent corresponds
      // to the children's first and last effect.
      if (!returnFiber.firstEffect) {
        returnFiber.firstEffect = child.firstEffect;
      }
      if (child.lastEffect) {
        if (returnFiber.lastEffect) {
          returnFiber.lastEffect.nextEffect = child.firstEffect;
        }
        returnFiber.lastEffect = child.lastEffect;
      }
    } while (child = child.sibling);
  }
  */function bailoutOnAlreadyFinishedWork(current,workInProgress){cancelWorkTimer(workInProgress);// TODO: We should ideally be able to bail out early if the children have no
// more work to do. However, since we don't have a separation of this
// Fiber's priority and its children yet - we don't know without doing lots
// of the same work we do anyway. Once we have that separation we can just
// bail out here if the children has no more work at this priority level.
// if (workInProgress.priorityOfChildren <= priorityLevel) {
//   // If there are side-effects in these children that have not yet been
//   // committed we need to ensure that they get properly transferred up.
//   if (current && current.child !== workInProgress.child) {
//     reuseChildrenEffects(workInProgress, child);
//   }
//   return null;
// }
cloneChildFibers(current,workInProgress);return workInProgress.child;}function bailoutOnLowPriority(current,workInProgress){cancelWorkTimer(workInProgress);// TODO: Handle HostComponent tags here as well and call pushHostContext()?
// See PR 8590 discussion for context
switch(workInProgress.tag){case HostRoot:pushHostRootContext(workInProgress);break;case ClassComponent:pushContextProvider(workInProgress);break;case HostPortal:pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);break;}// TODO: What if this is currently in progress?
// How can that happen? How is this not being cloned?
return null;}// TODO: Delete memoizeProps/State and move to reconcile/bailout instead
function memoizeProps(workInProgress,nextProps){workInProgress.memoizedProps=nextProps;}function memoizeState(workInProgress,nextState){workInProgress.memoizedState=nextState;// Don't reset the updateQueue, in case there are pending updates. Resetting
// is handled by processUpdateQueue.
}function beginWork(current,workInProgress,renderExpirationTime){if(workInProgress.expirationTime===NoWork||workInProgress.expirationTime>renderExpirationTime){return bailoutOnLowPriority(current,workInProgress);}switch(workInProgress.tag){case IndeterminateComponent:return mountIndeterminateComponent(current,workInProgress,renderExpirationTime);case FunctionalComponent:return updateFunctionalComponent(current,workInProgress);case ClassComponent:return updateClassComponent(current,workInProgress,renderExpirationTime);case HostRoot:return updateHostRoot(current,workInProgress,renderExpirationTime);case HostComponent:return updateHostComponent(current,workInProgress,renderExpirationTime);case HostText:return updateHostText(current,workInProgress);case CallHandlerPhase:// This is a restart. Reset the tag to the initial phase.
workInProgress.tag=CallComponent;// Intentionally fall through since this is now the same.
case CallComponent:return updateCallComponent(current,workInProgress,renderExpirationTime);case ReturnComponent:// A return component is just a placeholder, we can just run through the
// next one immediately.
return null;case HostPortal:return updatePortalComponent(current,workInProgress,renderExpirationTime);case Fragment:return updateFragment(current,workInProgress);default:invariant(false,'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');}}function beginFailedWork(current,workInProgress,renderExpirationTime){// Push context providers here to avoid a push/pop context mismatch.
switch(workInProgress.tag){case ClassComponent:pushContextProvider(workInProgress);break;case HostRoot:pushHostRootContext(workInProgress);break;default:invariant(false,'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.');}// Add an error effect so we can handle the error during the commit phase
workInProgress.effectTag|=Err;// This is a weird case where we do "resume" work — work that failed on
// our first attempt. Because we no longer have a notion of "progressed
// deletions," reset the child to the current child to make sure we delete
// it again. TODO: Find a better way to handle this, perhaps during a more
// general overhaul of error handling.
if(current===null){workInProgress.child=null;}else if(workInProgress.child!==current.child){workInProgress.child=current.child;}if(workInProgress.expirationTime===NoWork||workInProgress.expirationTime>renderExpirationTime){return bailoutOnLowPriority(current,workInProgress);}// If we don't bail out, we're going be recomputing our children so we need
// to drop our effect list.
workInProgress.firstEffect=null;workInProgress.lastEffect=null;// Unmount the current children as if the component rendered null
var nextChildren=null;reconcileChildrenAtExpirationTime(current,workInProgress,nextChildren,renderExpirationTime);if(workInProgress.tag===ClassComponent){var instance=workInProgress.stateNode;workInProgress.memoizedProps=instance.props;workInProgress.memoizedState=instance.state;}return workInProgress.child;}return{beginWork:beginWork,beginFailedWork:beginFailedWork};};var ReactFiberCompleteWork=function ReactFiberCompleteWork(config,hostContext,hydrationContext){var createInstance=config.createInstance,createTextInstance=config.createTextInstance,appendInitialChild=config.appendInitialChild,finalizeInitialChildren=config.finalizeInitialChildren,prepareUpdate=config.prepareUpdate,mutation=config.mutation,persistence=config.persistence;var getRootHostContainer=hostContext.getRootHostContainer,popHostContext=hostContext.popHostContext,getHostContext=hostContext.getHostContext,popHostContainer=hostContext.popHostContainer;var prepareToHydrateHostInstance=hydrationContext.prepareToHydrateHostInstance,prepareToHydrateHostTextInstance=hydrationContext.prepareToHydrateHostTextInstance,popHydrationState=hydrationContext.popHydrationState;function markUpdate(workInProgress){// Tag the fiber with an update effect. This turns a Placement into
// an UpdateAndPlacement.
workInProgress.effectTag|=Update;}function markRef(workInProgress){workInProgress.effectTag|=Ref;}function appendAllReturns(returns,workInProgress){var node=workInProgress.stateNode;if(node){node['return']=workInProgress;}while(node!==null){if(node.tag===HostComponent||node.tag===HostText||node.tag===HostPortal){invariant(false,'A call cannot have host component children.');}else if(node.tag===ReturnComponent){returns.push(node.type);}else if(node.child!==null){node.child['return']=node;node=node.child;continue;}while(node.sibling===null){if(node['return']===null||node['return']===workInProgress){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}}function moveCallToHandlerPhase(current,workInProgress,renderExpirationTime){var call=workInProgress.memoizedProps;!call?invariant(false,'Should be resolved by now. This error is likely caused by a bug in React. Please file an issue.'):void 0;// First step of the call has completed. Now we need to do the second.
// TODO: It would be nice to have a multi stage call represented by a
// single component, or at least tail call optimize nested ones. Currently
// that requires additional fields that we don't want to add to the fiber.
// So this requires nested handlers.
// Note: This doesn't mutate the alternate node. I don't think it needs to
// since this stage is reset for every pass.
workInProgress.tag=CallHandlerPhase;// Build up the returns.
// TODO: Compare this to a generator or opaque helpers like Children.
var returns=[];appendAllReturns(returns,workInProgress);var fn=call.handler;var props=call.props;var nextChildren=fn(props,returns);var currentFirstChild=current!==null?current.child:null;workInProgress.child=reconcileChildFibers(workInProgress,currentFirstChild,nextChildren,renderExpirationTime);return workInProgress.child;}function appendAllChildren(parent,workInProgress){// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var node=workInProgress.child;while(node!==null){if(node.tag===HostComponent||node.tag===HostText){appendInitialChild(parent,node.stateNode);}else if(node.tag===HostPortal){// If we have a portal child, then we don't want to traverse
// down its children. Instead, we'll get insertions from each child in
// the portal directly.
}else if(node.child!==null){node.child['return']=node;node=node.child;continue;}if(node===workInProgress){return;}while(node.sibling===null){if(node['return']===null||node['return']===workInProgress){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}}var updateHostContainer=void 0;var updateHostComponent=void 0;var updateHostText=void 0;if(mutation){if(enableMutatingReconciler){// Mutation mode
updateHostContainer=function updateHostContainer(workInProgress){// Noop
};updateHostComponent=function updateHostComponent(current,workInProgress,updatePayload,type,oldProps,newProps,rootContainerInstance){// TODO: Type this specific to this type of component.
workInProgress.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update. All the work is done in commitWork.
if(updatePayload){markUpdate(workInProgress);}};updateHostText=function updateHostText(current,workInProgress,oldText,newText){// If the text differs, mark it as an update. All the work in done in commitWork.
if(oldText!==newText){markUpdate(workInProgress);}};}else{invariant(false,'Mutating reconciler is disabled.');}}else if(persistence){if(enablePersistentReconciler){// Persistent host tree mode
var cloneInstance=persistence.cloneInstance,createContainerChildSet=persistence.createContainerChildSet,appendChildToContainerChildSet=persistence.appendChildToContainerChildSet,finalizeContainerChildren=persistence.finalizeContainerChildren;// An unfortunate fork of appendAllChildren because we have two different parent types.
var appendAllChildrenToContainer=function appendAllChildrenToContainer(containerChildSet,workInProgress){// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var node=workInProgress.child;while(node!==null){if(node.tag===HostComponent||node.tag===HostText){appendChildToContainerChildSet(containerChildSet,node.stateNode);}else if(node.tag===HostPortal){// If we have a portal child, then we don't want to traverse
// down its children. Instead, we'll get insertions from each child in
// the portal directly.
}else if(node.child!==null){node.child['return']=node;node=node.child;continue;}if(node===workInProgress){return;}while(node.sibling===null){if(node['return']===null||node['return']===workInProgress){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}};updateHostContainer=function updateHostContainer(workInProgress){var portalOrRoot=workInProgress.stateNode;var childrenUnchanged=workInProgress.firstEffect===null;if(childrenUnchanged){// No changes, just reuse the existing instance.
}else{var container=portalOrRoot.containerInfo;var newChildSet=createContainerChildSet(container);if(finalizeContainerChildren(container,newChildSet)){markUpdate(workInProgress);}portalOrRoot.pendingChildren=newChildSet;// If children might have changed, we have to add them all to the set.
appendAllChildrenToContainer(newChildSet,workInProgress);// Schedule an update on the container to swap out the container.
markUpdate(workInProgress);}};updateHostComponent=function updateHostComponent(current,workInProgress,updatePayload,type,oldProps,newProps,rootContainerInstance){// If there are no effects associated with this node, then none of our children had any updates.
// This guarantees that we can reuse all of them.
var childrenUnchanged=workInProgress.firstEffect===null;var currentInstance=current.stateNode;if(childrenUnchanged&&updatePayload===null){// No changes, just reuse the existing instance.
// Note that this might release a previous clone.
workInProgress.stateNode=currentInstance;}else{var recyclableInstance=workInProgress.stateNode;var newInstance=cloneInstance(currentInstance,updatePayload,type,oldProps,newProps,workInProgress,childrenUnchanged,recyclableInstance);if(finalizeInitialChildren(newInstance,type,newProps,rootContainerInstance)){markUpdate(workInProgress);}workInProgress.stateNode=newInstance;if(childrenUnchanged){// If there are no other effects in this tree, we need to flag this node as having one.
// Even though we're not going to use it for anything.
// Otherwise parents won't know that there are new children to propagate upwards.
markUpdate(workInProgress);}else{// If children might have changed, we have to add them all to the set.
appendAllChildren(newInstance,workInProgress);}}};updateHostText=function updateHostText(current,workInProgress,oldText,newText){if(oldText!==newText){// If the text content differs, we'll create a new text instance for it.
var rootContainerInstance=getRootHostContainer();var currentHostContext=getHostContext();workInProgress.stateNode=createTextInstance(newText,rootContainerInstance,currentHostContext,workInProgress);// We'll have to mark it as having an effect, even though we won't use the effect for anything.
// This lets the parents know that at least one of their children has changed.
markUpdate(workInProgress);}};}else{invariant(false,'Persistent reconciler is disabled.');}}else{if(enableNoopReconciler){// No host operations
updateHostContainer=function updateHostContainer(workInProgress){// Noop
};updateHostComponent=function updateHostComponent(current,workInProgress,updatePayload,type,oldProps,newProps,rootContainerInstance){// Noop
};updateHostText=function updateHostText(current,workInProgress,oldText,newText){// Noop
};}else{invariant(false,'Noop reconciler is disabled.');}}function completeWork(current,workInProgress,renderExpirationTime){// Get the latest props.
var newProps=workInProgress.pendingProps;if(newProps===null){newProps=workInProgress.memoizedProps;}else if(workInProgress.expirationTime!==Never||renderExpirationTime===Never){// Reset the pending props, unless this was a down-prioritization.
workInProgress.pendingProps=null;}switch(workInProgress.tag){case FunctionalComponent:return null;case ClassComponent:{// We are leaving this subtree, so pop context if any.
popContextProvider(workInProgress);return null;}case HostRoot:{popHostContainer(workInProgress);popTopLevelContextObject(workInProgress);var fiberRoot=workInProgress.stateNode;if(fiberRoot.pendingContext){fiberRoot.context=fiberRoot.pendingContext;fiberRoot.pendingContext=null;}if(current===null||current.child===null){// If we hydrated, pop so that we can delete any remaining children
// that weren't hydrated.
popHydrationState(workInProgress);// This resets the hacky state to fix isMounted before committing.
// TODO: Delete this when we delete isMounted and findDOMNode.
workInProgress.effectTag&=~Placement;}updateHostContainer(workInProgress);return null;}case HostComponent:{popHostContext(workInProgress);var rootContainerInstance=getRootHostContainer();var type=workInProgress.type;if(current!==null&&workInProgress.stateNode!=null){// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var oldProps=current.memoizedProps;// If we get updated because one of our children updated, we don't
// have newProps so we'll have to reuse them.
// TODO: Split the update API as separate for the props vs. children.
// Even better would be if children weren't special cased at all tho.
var instance=workInProgress.stateNode;var currentHostContext=getHostContext();var updatePayload=prepareUpdate(instance,type,oldProps,newProps,rootContainerInstance,currentHostContext);updateHostComponent(current,workInProgress,updatePayload,type,oldProps,newProps,rootContainerInstance);if(current.ref!==workInProgress.ref){markRef(workInProgress);}}else{if(!newProps){!(workInProgress.stateNode!==null)?invariant(false,'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'):void 0;// This can happen when we abort work.
return null;}var _currentHostContext=getHostContext();// TODO: Move createInstance to beginWork and keep it on a context
// "stack" as the parent. Then append children as we go in beginWork
// or completeWork depending on we want to add then top->down or
// bottom->up. Top->down is faster in IE11.
var wasHydrated=popHydrationState(workInProgress);if(wasHydrated){// TODO: Move this and createInstance step into the beginPhase
// to consolidate.
if(prepareToHydrateHostInstance(workInProgress,rootContainerInstance,_currentHostContext)){// If changes to the hydrated node needs to be applied at the
// commit-phase we mark this as such.
markUpdate(workInProgress);}}else{var _instance=createInstance(type,newProps,rootContainerInstance,_currentHostContext,workInProgress);appendAllChildren(_instance,workInProgress);// Certain renderers require commit-time effects for initial mount.
// (eg DOM renderer supports auto-focus for certain elements).
// Make sure such renderers get scheduled for later work.
if(finalizeInitialChildren(_instance,type,newProps,rootContainerInstance)){markUpdate(workInProgress);}workInProgress.stateNode=_instance;}if(workInProgress.ref!==null){// If there is a ref on a host node we need to schedule a callback
markRef(workInProgress);}}return null;}case HostText:{var newText=newProps;if(current&&workInProgress.stateNode!=null){var oldText=current.memoizedProps;// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
updateHostText(current,workInProgress,oldText,newText);}else{if(typeof newText!=='string'){!(workInProgress.stateNode!==null)?invariant(false,'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'):void 0;// This can happen when we abort work.
return null;}var _rootContainerInstance=getRootHostContainer();var _currentHostContext2=getHostContext();var _wasHydrated=popHydrationState(workInProgress);if(_wasHydrated){if(prepareToHydrateHostTextInstance(workInProgress)){markUpdate(workInProgress);}}else{workInProgress.stateNode=createTextInstance(newText,_rootContainerInstance,_currentHostContext2,workInProgress);}}return null;}case CallComponent:return moveCallToHandlerPhase(current,workInProgress,renderExpirationTime);case CallHandlerPhase:// Reset the tag to now be a first phase call.
workInProgress.tag=CallComponent;return null;case ReturnComponent:// Does nothing.
return null;case Fragment:return null;case HostPortal:popHostContainer(workInProgress);updateHostContainer(workInProgress);return null;// Error cases
case IndeterminateComponent:invariant(false,'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.');// eslint-disable-next-line no-fallthrough
default:invariant(false,'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');}}return{completeWork:completeWork};};var invokeGuardedCallback$2=ReactErrorUtils.invokeGuardedCallback;var hasCaughtError$1=ReactErrorUtils.hasCaughtError;var clearCaughtError$1=ReactErrorUtils.clearCaughtError;var ReactFiberCommitWork=function ReactFiberCommitWork(config,captureError){var getPublicInstance=config.getPublicInstance,mutation=config.mutation,persistence=config.persistence;var callComponentWillUnmountWithTimer=function callComponentWillUnmountWithTimer(current,instance){startPhaseTimer(current,'componentWillUnmount');instance.props=current.memoizedProps;instance.state=current.memoizedState;instance.componentWillUnmount();stopPhaseTimer();};// Capture errors so they don't interrupt unmounting.
function safelyCallComponentWillUnmount(current,instance){{invokeGuardedCallback$2(null,callComponentWillUnmountWithTimer,null,current,instance);if(hasCaughtError$1()){var unmountError=clearCaughtError$1();captureError(current,unmountError);}}}function safelyDetachRef(current){var ref=current.ref;if(ref!==null){{invokeGuardedCallback$2(null,ref,null,null);if(hasCaughtError$1()){var refError=clearCaughtError$1();captureError(current,refError);}}}}function commitLifeCycles(current,finishedWork){switch(finishedWork.tag){case ClassComponent:{var instance=finishedWork.stateNode;if(finishedWork.effectTag&Update){if(current===null){startPhaseTimer(finishedWork,'componentDidMount');instance.props=finishedWork.memoizedProps;instance.state=finishedWork.memoizedState;instance.componentDidMount();stopPhaseTimer();}else{var prevProps=current.memoizedProps;var prevState=current.memoizedState;startPhaseTimer(finishedWork,'componentDidUpdate');instance.props=finishedWork.memoizedProps;instance.state=finishedWork.memoizedState;instance.componentDidUpdate(prevProps,prevState);stopPhaseTimer();}}var updateQueue=finishedWork.updateQueue;if(updateQueue!==null){commitCallbacks(updateQueue,instance);}return;}case HostRoot:{var _updateQueue=finishedWork.updateQueue;if(_updateQueue!==null){var _instance=finishedWork.child!==null?finishedWork.child.stateNode:null;commitCallbacks(_updateQueue,_instance);}return;}case HostComponent:{var _instance2=finishedWork.stateNode;// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
if(current===null&&finishedWork.effectTag&Update){var type=finishedWork.type;var props=finishedWork.memoizedProps;commitMount(_instance2,type,props,finishedWork);}return;}case HostText:{// We have no life-cycles associated with text.
return;}case HostPortal:{// We have no life-cycles associated with portals.
return;}default:{invariant(false,'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');}}}function commitAttachRef(finishedWork){var ref=finishedWork.ref;if(ref!==null){var instance=finishedWork.stateNode;switch(finishedWork.tag){case HostComponent:ref(getPublicInstance(instance));break;default:ref(instance);}}}function commitDetachRef(current){var currentRef=current.ref;if(currentRef!==null){currentRef(null);}}// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function commitUnmount(current){if(typeof onCommitUnmount==='function'){onCommitUnmount(current);}switch(current.tag){case ClassComponent:{safelyDetachRef(current);var instance=current.stateNode;if(typeof instance.componentWillUnmount==='function'){safelyCallComponentWillUnmount(current,instance);}return;}case HostComponent:{safelyDetachRef(current);return;}case CallComponent:{commitNestedUnmounts(current.stateNode);return;}case HostPortal:{// TODO: this is recursive.
// We are also not using this parent because
// the portal will get pushed immediately.
if(enableMutatingReconciler&&mutation){unmountHostComponents(current);}else if(enablePersistentReconciler&&persistence){emptyPortalContainer(current);}return;}}}function commitNestedUnmounts(root){// While we're inside a removed host node we don't want to call
// removeChild on the inner nodes because they're removed by the top
// call anyway. We also want to call componentWillUnmount on all
// composites before this host node is removed from the tree. Therefore
var node=root;while(true){commitUnmount(node);// Visit children because they may contain more composite or host nodes.
// Skip portals because commitUnmount() currently visits them recursively.
if(node.child!==null&&(// If we use mutation we drill down into portals using commitUnmount above.
// If we don't use mutation we drill down into portals here instead.
!mutation||node.tag!==HostPortal)){node.child['return']=node;node=node.child;continue;}if(node===root){return;}while(node.sibling===null){if(node['return']===null||node['return']===root){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}}function detachFiber(current){// Cut off the return pointers to disconnect it from the tree. Ideally, we
// should clear the child pointer of the parent alternate to let this
// get GC:ed but we don't know which for sure which parent is the current
// one so we'll settle for GC:ing the subtree of this child. This child
// itself will be GC:ed when the parent updates the next time.
current['return']=null;current.child=null;if(current.alternate){current.alternate.child=null;current.alternate['return']=null;}}if(!mutation){var commitContainer=void 0;if(persistence){var replaceContainerChildren=persistence.replaceContainerChildren,createContainerChildSet=persistence.createContainerChildSet;var emptyPortalContainer=function emptyPortalContainer(current){var portal=current.stateNode;var containerInfo=portal.containerInfo;var emptyChildSet=createContainerChildSet(containerInfo);replaceContainerChildren(containerInfo,emptyChildSet);};commitContainer=function commitContainer(finishedWork){switch(finishedWork.tag){case ClassComponent:{return;}case HostComponent:{return;}case HostText:{return;}case HostRoot:case HostPortal:{var portalOrRoot=finishedWork.stateNode;var containerInfo=portalOrRoot.containerInfo,_pendingChildren=portalOrRoot.pendingChildren;replaceContainerChildren(containerInfo,_pendingChildren);return;}default:{invariant(false,'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');}}};}else{commitContainer=function commitContainer(finishedWork){// Noop
};}if(enablePersistentReconciler||enableNoopReconciler){return{commitResetTextContent:function commitResetTextContent(finishedWork){},commitPlacement:function commitPlacement(finishedWork){},commitDeletion:function commitDeletion(current){// Detach refs and call componentWillUnmount() on the whole subtree.
commitNestedUnmounts(current);detachFiber(current);},commitWork:function commitWork(current,finishedWork){commitContainer(finishedWork);},commitLifeCycles:commitLifeCycles,commitAttachRef:commitAttachRef,commitDetachRef:commitDetachRef};}else if(persistence){invariant(false,'Persistent reconciler is disabled.');}else{invariant(false,'Noop reconciler is disabled.');}}var commitMount=mutation.commitMount,commitUpdate=mutation.commitUpdate,resetTextContent=mutation.resetTextContent,commitTextUpdate=mutation.commitTextUpdate,appendChild=mutation.appendChild,appendChildToContainer=mutation.appendChildToContainer,insertBefore=mutation.insertBefore,insertInContainerBefore=mutation.insertInContainerBefore,removeChild=mutation.removeChild,removeChildFromContainer=mutation.removeChildFromContainer;function getHostParentFiber(fiber){var parent=fiber['return'];while(parent!==null){if(isHostParent(parent)){return parent;}parent=parent['return'];}invariant(false,'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');}function isHostParent(fiber){return fiber.tag===HostComponent||fiber.tag===HostRoot||fiber.tag===HostPortal;}function getHostSibling(fiber){// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
var node=fiber;siblings:while(true){// If we didn't find anything, let's try the next sibling.
while(node.sibling===null){if(node['return']===null||isHostParent(node['return'])){// If we pop out of the root or hit the parent the fiber we are the
// last sibling.
return null;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;while(node.tag!==HostComponent&&node.tag!==HostText){// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(node.effectTag&Placement){// If we don't have a child, try the siblings instead.
continue siblings;}// If we don't have a child, try the siblings instead.
// We also skip portals because they are not part of this host tree.
if(node.child===null||node.tag===HostPortal){continue siblings;}else{node.child['return']=node;node=node.child;}}// Check if this host node is stable or about to be placed.
if(!(node.effectTag&Placement)){// Found it!
return node.stateNode;}}}function commitPlacement(finishedWork){// Recursively insert all host nodes into the parent.
var parentFiber=getHostParentFiber(finishedWork);var parent=void 0;var isContainer=void 0;switch(parentFiber.tag){case HostComponent:parent=parentFiber.stateNode;isContainer=false;break;case HostRoot:parent=parentFiber.stateNode.containerInfo;isContainer=true;break;case HostPortal:parent=parentFiber.stateNode.containerInfo;isContainer=true;break;default:invariant(false,'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.');}if(parentFiber.effectTag&ContentReset){// Reset the text content of the parent before doing any insertions
resetTextContent(parent);// Clear ContentReset from the effect tag
parentFiber.effectTag&=~ContentReset;}var before=getHostSibling(finishedWork);// We only have the top Fiber that was inserted but we need recurse down its
// children to find all the terminal nodes.
var node=finishedWork;while(true){if(node.tag===HostComponent||node.tag===HostText){if(before){if(isContainer){insertInContainerBefore(parent,node.stateNode,before);}else{insertBefore(parent,node.stateNode,before);}}else{if(isContainer){appendChildToContainer(parent,node.stateNode);}else{appendChild(parent,node.stateNode);}}}else if(node.tag===HostPortal){// If the insertion itself is a portal, then we don't want to traverse
// down its children. Instead, we'll get insertions from each child in
// the portal directly.
}else if(node.child!==null){node.child['return']=node;node=node.child;continue;}if(node===finishedWork){return;}while(node.sibling===null){if(node['return']===null||node['return']===finishedWork){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}}function unmountHostComponents(current){// We only have the top Fiber that was inserted but we need recurse down its
var node=current;// Each iteration, currentParent is populated with node's host parent if not
// currentParentIsValid.
var currentParentIsValid=false;var currentParent=void 0;var currentParentIsContainer=void 0;while(true){if(!currentParentIsValid){var parent=node['return'];findParent:while(true){!(parent!==null)?invariant(false,'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'):void 0;switch(parent.tag){case HostComponent:currentParent=parent.stateNode;currentParentIsContainer=false;break findParent;case HostRoot:currentParent=parent.stateNode.containerInfo;currentParentIsContainer=true;break findParent;case HostPortal:currentParent=parent.stateNode.containerInfo;currentParentIsContainer=true;break findParent;}parent=parent['return'];}currentParentIsValid=true;}if(node.tag===HostComponent||node.tag===HostText){commitNestedUnmounts(node);// After all the children have unmounted, it is now safe to remove the
// node from the tree.
if(currentParentIsContainer){removeChildFromContainer(currentParent,node.stateNode);}else{removeChild(currentParent,node.stateNode);}// Don't visit children because we already visited them.
}else if(node.tag===HostPortal){// When we go into a portal, it becomes the parent to remove from.
// We will reassign it back when we pop the portal on the way up.
currentParent=node.stateNode.containerInfo;// Visit children because portals might contain host components.
if(node.child!==null){node.child['return']=node;node=node.child;continue;}}else{commitUnmount(node);// Visit children because we may find more host components below.
if(node.child!==null){node.child['return']=node;node=node.child;continue;}}if(node===current){return;}while(node.sibling===null){if(node['return']===null||node['return']===current){return;}node=node['return'];if(node.tag===HostPortal){// When we go out of the portal, we need to restore the parent.
// Since we don't keep a stack of them, we will search for it.
currentParentIsValid=false;}}node.sibling['return']=node['return'];node=node.sibling;}}function commitDeletion(current){// Recursively delete all host nodes from the parent.
// Detach refs and call componentWillUnmount() on the whole subtree.
unmountHostComponents(current);detachFiber(current);}function commitWork(current,finishedWork){switch(finishedWork.tag){case ClassComponent:{return;}case HostComponent:{var instance=finishedWork.stateNode;if(instance!=null){// Commit the work prepared earlier.
var newProps=finishedWork.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
var oldProps=current!==null?current.memoizedProps:newProps;var type=finishedWork.type;// TODO: Type the updateQueue to be specific to host components.
var updatePayload=finishedWork.updateQueue;finishedWork.updateQueue=null;if(updatePayload!==null){commitUpdate(instance,updatePayload,type,oldProps,newProps,finishedWork);}}return;}case HostText:{!(finishedWork.stateNode!==null)?invariant(false,'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'):void 0;var textInstance=finishedWork.stateNode;var newText=finishedWork.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
var oldText=current!==null?current.memoizedProps:newText;commitTextUpdate(textInstance,oldText,newText);return;}case HostRoot:{return;}default:{invariant(false,'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');}}}function commitResetTextContent(current){resetTextContent(current.stateNode);}if(enableMutatingReconciler){return{commitResetTextContent:commitResetTextContent,commitPlacement:commitPlacement,commitDeletion:commitDeletion,commitWork:commitWork,commitLifeCycles:commitLifeCycles,commitAttachRef:commitAttachRef,commitDetachRef:commitDetachRef};}else{invariant(false,'Mutating reconciler is disabled.');}};var NO_CONTEXT={};var ReactFiberHostContext=function ReactFiberHostContext(config){var getChildHostContext=config.getChildHostContext,getRootHostContext=config.getRootHostContext;var contextStackCursor=createCursor(NO_CONTEXT);var contextFiberStackCursor=createCursor(NO_CONTEXT);var rootInstanceStackCursor=createCursor(NO_CONTEXT);function requiredContext(c){!(c!==NO_CONTEXT)?invariant(false,'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'):void 0;return c;}function getRootHostContainer(){var rootInstance=requiredContext(rootInstanceStackCursor.current);return rootInstance;}function pushHostContainer(fiber,nextRootInstance){// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
push(rootInstanceStackCursor,nextRootInstance,fiber);var nextRootContext=getRootHostContext(nextRootInstance);// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(contextFiberStackCursor,fiber,fiber);push(contextStackCursor,nextRootContext,fiber);}function popHostContainer(fiber){pop(contextStackCursor,fiber);pop(contextFiberStackCursor,fiber);pop(rootInstanceStackCursor,fiber);}function getHostContext(){var context=requiredContext(contextStackCursor.current);return context;}function pushHostContext(fiber){var rootInstance=requiredContext(rootInstanceStackCursor.current);var context=requiredContext(contextStackCursor.current);var nextContext=getChildHostContext(context,fiber.type,rootInstance);// Don't push this Fiber's context unless it's unique.
if(context===nextContext){return;}// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(contextFiberStackCursor,fiber,fiber);push(contextStackCursor,nextContext,fiber);}function popHostContext(fiber){// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
if(contextFiberStackCursor.current!==fiber){return;}pop(contextStackCursor,fiber);pop(contextFiberStackCursor,fiber);}function resetHostContainer(){contextStackCursor.current=NO_CONTEXT;rootInstanceStackCursor.current=NO_CONTEXT;}return{getHostContext:getHostContext,getRootHostContainer:getRootHostContainer,popHostContainer:popHostContainer,popHostContext:popHostContext,pushHostContainer:pushHostContainer,pushHostContext:pushHostContext,resetHostContainer:resetHostContainer};};var ReactFiberHydrationContext=function ReactFiberHydrationContext(config){var shouldSetTextContent=config.shouldSetTextContent,hydration=config.hydration;// If this doesn't have hydration mode.
if(!hydration){return{enterHydrationState:function enterHydrationState(){return false;},resetHydrationState:function resetHydrationState(){},tryToClaimNextHydratableInstance:function tryToClaimNextHydratableInstance(){},prepareToHydrateHostInstance:function prepareToHydrateHostInstance(){invariant(false,'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');},prepareToHydrateHostTextInstance:function prepareToHydrateHostTextInstance(){invariant(false,'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');},popHydrationState:function popHydrationState(fiber){return false;}};}var canHydrateInstance=hydration.canHydrateInstance,canHydrateTextInstance=hydration.canHydrateTextInstance,getNextHydratableSibling=hydration.getNextHydratableSibling,getFirstHydratableChild=hydration.getFirstHydratableChild,hydrateInstance=hydration.hydrateInstance,hydrateTextInstance=hydration.hydrateTextInstance,didNotMatchHydratedContainerTextInstance=hydration.didNotMatchHydratedContainerTextInstance,didNotMatchHydratedTextInstance=hydration.didNotMatchHydratedTextInstance,didNotHydrateContainerInstance=hydration.didNotHydrateContainerInstance,didNotHydrateInstance=hydration.didNotHydrateInstance,didNotFindHydratableContainerInstance=hydration.didNotFindHydratableContainerInstance,didNotFindHydratableContainerTextInstance=hydration.didNotFindHydratableContainerTextInstance,didNotFindHydratableInstance=hydration.didNotFindHydratableInstance,didNotFindHydratableTextInstance=hydration.didNotFindHydratableTextInstance;// The deepest Fiber on the stack involved in a hydration context.
// This may have been an insertion or a hydration.
var hydrationParentFiber=null;var nextHydratableInstance=null;var isHydrating=false;function enterHydrationState(fiber){var parentInstance=fiber.stateNode.containerInfo;nextHydratableInstance=getFirstHydratableChild(parentInstance);hydrationParentFiber=fiber;isHydrating=true;return true;}function deleteHydratableInstance(returnFiber,instance){{switch(returnFiber.tag){case HostRoot:didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo,instance);break;case HostComponent:didNotHydrateInstance(returnFiber.type,returnFiber.memoizedProps,returnFiber.stateNode,instance);break;}}var childToDelete=createFiberFromHostInstanceForDeletion();childToDelete.stateNode=instance;childToDelete['return']=returnFiber;childToDelete.effectTag=Deletion;// This might seem like it belongs on progressedFirstDeletion. However,
// these children are not part of the reconciliation list of children.
// Even if we abort and rereconcile the children, that will try to hydrate
// again and the nodes are still in the host tree so these will be
// recreated.
if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=childToDelete;returnFiber.lastEffect=childToDelete;}else{returnFiber.firstEffect=returnFiber.lastEffect=childToDelete;}}function insertNonHydratedInstance(returnFiber,fiber){fiber.effectTag|=Placement;{switch(returnFiber.tag){case HostRoot:{var parentContainer=returnFiber.stateNode.containerInfo;switch(fiber.tag){case HostComponent:var type=fiber.type;var props=fiber.pendingProps;didNotFindHydratableContainerInstance(parentContainer,type,props);break;case HostText:var text=fiber.pendingProps;didNotFindHydratableContainerTextInstance(parentContainer,text);break;}break;}case HostComponent:{var parentType=returnFiber.type;var parentProps=returnFiber.memoizedProps;var parentInstance=returnFiber.stateNode;switch(fiber.tag){case HostComponent:var _type=fiber.type;var _props=fiber.pendingProps;didNotFindHydratableInstance(parentType,parentProps,parentInstance,_type,_props);break;case HostText:var _text=fiber.pendingProps;didNotFindHydratableTextInstance(parentType,parentProps,parentInstance,_text);break;}break;}default:return;}}}function tryHydrate(fiber,nextInstance){switch(fiber.tag){case HostComponent:{var type=fiber.type;var props=fiber.pendingProps;var instance=canHydrateInstance(nextInstance,type,props);if(instance!==null){fiber.stateNode=instance;return true;}return false;}case HostText:{var text=fiber.pendingProps;var textInstance=canHydrateTextInstance(nextInstance,text);if(textInstance!==null){fiber.stateNode=textInstance;return true;}return false;}default:return false;}}function tryToClaimNextHydratableInstance(fiber){if(!isHydrating){return;}var nextInstance=nextHydratableInstance;if(!nextInstance){// Nothing to hydrate. Make it an insertion.
insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}if(!tryHydrate(fiber,nextInstance)){// If we can't hydrate this instance let's try the next one.
// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
nextInstance=getNextHydratableSibling(nextInstance);if(!nextInstance||!tryHydrate(fiber,nextInstance)){// Nothing to hydrate. Make it an insertion.
insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
deleteHydratableInstance(hydrationParentFiber,nextHydratableInstance);}hydrationParentFiber=fiber;nextHydratableInstance=getFirstHydratableChild(nextInstance);}function prepareToHydrateHostInstance(fiber,rootContainerInstance,hostContext){var instance=fiber.stateNode;var updatePayload=hydrateInstance(instance,fiber.type,fiber.memoizedProps,rootContainerInstance,hostContext,fiber);// TODO: Type this specific to this type of component.
fiber.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
if(updatePayload!==null){return true;}return false;}function prepareToHydrateHostTextInstance(fiber){var textInstance=fiber.stateNode;var textContent=fiber.memoizedProps;var shouldUpdate=hydrateTextInstance(textInstance,textContent,fiber);{if(shouldUpdate){// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var returnFiber=hydrationParentFiber;if(returnFiber!==null){switch(returnFiber.tag){case HostRoot:{var parentContainer=returnFiber.stateNode.containerInfo;didNotMatchHydratedContainerTextInstance(parentContainer,textInstance,textContent);break;}case HostComponent:{var parentType=returnFiber.type;var parentProps=returnFiber.memoizedProps;var parentInstance=returnFiber.stateNode;didNotMatchHydratedTextInstance(parentType,parentProps,parentInstance,textInstance,textContent);break;}}}}}return shouldUpdate;}function popToNextHostParent(fiber){var parent=fiber['return'];while(parent!==null&&parent.tag!==HostComponent&&parent.tag!==HostRoot){parent=parent['return'];}hydrationParentFiber=parent;}function popHydrationState(fiber){if(fiber!==hydrationParentFiber){// We're deeper than the current hydration context, inside an inserted
// tree.
return false;}if(!isHydrating){// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
popToNextHostParent(fiber);isHydrating=true;return false;}var type=fiber.type;// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them.
// TODO: Better heuristic.
if(fiber.tag!==HostComponent||type!=='head'&&type!=='body'&&!shouldSetTextContent(type,fiber.memoizedProps)){var nextInstance=nextHydratableInstance;while(nextInstance){deleteHydratableInstance(fiber,nextInstance);nextInstance=getNextHydratableSibling(nextInstance);}}popToNextHostParent(fiber);nextHydratableInstance=hydrationParentFiber?getNextHydratableSibling(fiber.stateNode):null;return true;}function resetHydrationState(){hydrationParentFiber=null;nextHydratableInstance=null;isHydrating=false;}return{enterHydrationState:enterHydrationState,resetHydrationState:resetHydrationState,tryToClaimNextHydratableInstance:tryToClaimNextHydratableInstance,prepareToHydrateHostInstance:prepareToHydrateHostInstance,prepareToHydrateHostTextInstance:prepareToHydrateHostTextInstance,popHydrationState:popHydrationState};};// This lets us hook into Fiber to debug what it's doing.
// See https://github.com/facebook/react/pull/8033.
// This is not part of the public API, not even for React DevTools.
// You may only inject a debugTool if you work on React Fiber itself.
var ReactFiberInstrumentation={debugTool:null};var ReactFiberInstrumentation_1=ReactFiberInstrumentation;var defaultShowDialog=function defaultShowDialog(capturedError){return true;};var showDialog=defaultShowDialog;function logCapturedError(capturedError){var logError=showDialog(capturedError);// Allow injected showDialog() to prevent default console.error logging.
// This enables renderers like ReactNative to better manage redbox behavior.
if(logError===false){return;}var error=capturedError.error;var suppressLogging=error&&error.suppressReactErrorLogging;if(suppressLogging){return;}{var componentName=capturedError.componentName,componentStack=capturedError.componentStack,errorBoundaryName=capturedError.errorBoundaryName,errorBoundaryFound=capturedError.errorBoundaryFound,willRetry=capturedError.willRetry;var componentNameMessage=componentName?'The above error occurred in the <'+componentName+'> component:':'The above error occurred in one of your React components:';var errorBoundaryMessage=void 0;// errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
if(errorBoundaryFound&&errorBoundaryName){if(willRetry){errorBoundaryMessage='React will try to recreate this component tree from scratch '+('using the error boundary you provided, '+errorBoundaryName+'.');}else{errorBoundaryMessage='This error was initially handled by the error boundary '+errorBoundaryName+'.\n'+'Recreating the tree from scratch failed so React will unmount the tree.';}}else{errorBoundaryMessage='Consider adding an error boundary to your tree to customize error handling behavior.\n'+'Visit https://fb.me/react-error-boundaries to learn more about error boundaries.';}var combinedMessage=''+componentNameMessage+componentStack+'\n\n'+(''+errorBoundaryMessage);// In development, we provide our own message with just the component stack.
// We don't include the original error message and JS stack because the browser
// has already printed it. Even if the application swallows the error, it is still
// displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
console.error(combinedMessage);}}var invokeGuardedCallback$1=ReactErrorUtils.invokeGuardedCallback;var hasCaughtError=ReactErrorUtils.hasCaughtError;var clearCaughtError=ReactErrorUtils.clearCaughtError;{var didWarnAboutStateTransition=false;var didWarnSetStateChildContext=false;var didWarnStateUpdateForUnmountedComponent={};var warnAboutUpdateOnUnmounted=function warnAboutUpdateOnUnmounted(fiber){var componentName=getComponentName(fiber)||'ReactClass';if(didWarnStateUpdateForUnmountedComponent[componentName]){return;}warning(false,'Can only update a mounted or mounting '+'component. This usually means you called setState, replaceState, '+'or forceUpdate on an unmounted component. This is a no-op.\n\nPlease '+'check the code for the %s component.',componentName);didWarnStateUpdateForUnmountedComponent[componentName]=true;};var warnAboutInvalidUpdates=function warnAboutInvalidUpdates(instance){switch(ReactDebugCurrentFiber.phase){case'getChildContext':if(didWarnSetStateChildContext){return;}warning(false,'setState(...): Cannot call setState() inside getChildContext()');didWarnSetStateChildContext=true;break;case'render':if(didWarnAboutStateTransition){return;}warning(false,'Cannot update during an existing state transition (such as within '+"`render` or another component's constructor). Render methods should "+'be a pure function of props and state; constructor side-effects are '+'an anti-pattern, but can be moved to `componentWillMount`.');didWarnAboutStateTransition=true;break;}};}var ReactFiberScheduler=function ReactFiberScheduler(config){var hostContext=ReactFiberHostContext(config);var hydrationContext=ReactFiberHydrationContext(config);var popHostContainer=hostContext.popHostContainer,popHostContext=hostContext.popHostContext,resetHostContainer=hostContext.resetHostContainer;var _ReactFiberBeginWork=ReactFiberBeginWork(config,hostContext,hydrationContext,scheduleWork,computeExpirationForFiber),beginWork=_ReactFiberBeginWork.beginWork,beginFailedWork=_ReactFiberBeginWork.beginFailedWork;var _ReactFiberCompleteWo=ReactFiberCompleteWork(config,hostContext,hydrationContext),completeWork=_ReactFiberCompleteWo.completeWork;var _ReactFiberCommitWork=ReactFiberCommitWork(config,captureError),commitResetTextContent=_ReactFiberCommitWork.commitResetTextContent,commitPlacement=_ReactFiberCommitWork.commitPlacement,commitDeletion=_ReactFiberCommitWork.commitDeletion,commitWork=_ReactFiberCommitWork.commitWork,commitLifeCycles=_ReactFiberCommitWork.commitLifeCycles,commitAttachRef=_ReactFiberCommitWork.commitAttachRef,commitDetachRef=_ReactFiberCommitWork.commitDetachRef;var now=config.now,scheduleDeferredCallback=config.scheduleDeferredCallback,cancelDeferredCallback=config.cancelDeferredCallback,useSyncScheduling=config.useSyncScheduling,prepareForCommit=config.prepareForCommit,resetAfterCommit=config.resetAfterCommit;// Represents the current time in ms.
var startTime=now();var mostRecentCurrentTime=msToExpirationTime(0);// Represents the expiration time that incoming updates should use. (If this
// is NoWork, use the default strategy: async updates in async mode, sync
// updates in sync mode.)
var expirationContext=NoWork;var isWorking=false;// The next work in progress fiber that we're currently working on.
var nextUnitOfWork=null;var nextRoot=null;// The time at which we're currently rendering work.
var nextRenderExpirationTime=NoWork;// The next fiber with an effect that we're currently committing.
var nextEffect=null;// Keep track of which fibers have captured an error that need to be handled.
// Work is removed from this collection after componentDidCatch is called.
var capturedErrors=null;// Keep track of which fibers have failed during the current batch of work.
// This is a different set than capturedErrors, because it is not reset until
// the end of the batch. This is needed to propagate errors correctly if a
// subtree fails more than once.
var failedBoundaries=null;// Error boundaries that captured an error during the current commit.
var commitPhaseBoundaries=null;var firstUncaughtError=null;var didFatal=false;var isCommitting=false;var isUnmounting=false;// Used for performance tracking.
var interruptedBy=null;function resetContextStack(){// Reset the stack
reset$1();// Reset the cursors
resetContext();resetHostContainer();}function commitAllHostEffects(){while(nextEffect!==null){{ReactDebugCurrentFiber.setCurrentFiber(nextEffect);}recordEffect();var effectTag=nextEffect.effectTag;if(effectTag&ContentReset){commitResetTextContent(nextEffect);}if(effectTag&Ref){var current=nextEffect.alternate;if(current!==null){commitDetachRef(current);}}// The following switch statement is only concerned about placement,
// updates, and deletions. To avoid needing to add a case for every
// possible bitmap value, we remove the secondary effects from the
// effect tag and switch on that value.
var primaryEffectTag=effectTag&~(Callback|Err|ContentReset|Ref|PerformedWork);switch(primaryEffectTag){case Placement:{commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is inserted, before
// any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted
// does and isMounted is deprecated anyway so we should be able
// to kill this.
nextEffect.effectTag&=~Placement;break;}case PlacementAndUpdate:{// Placement
commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is inserted, before
// any life-cycles like componentDidMount gets called.
nextEffect.effectTag&=~Placement;// Update
var _current=nextEffect.alternate;commitWork(_current,nextEffect);break;}case Update:{var _current2=nextEffect.alternate;commitWork(_current2,nextEffect);break;}case Deletion:{isUnmounting=true;commitDeletion(nextEffect);isUnmounting=false;break;}}nextEffect=nextEffect.nextEffect;}{ReactDebugCurrentFiber.resetCurrentFiber();}}function commitAllLifeCycles(){while(nextEffect!==null){var effectTag=nextEffect.effectTag;if(effectTag&(Update|Callback)){recordEffect();var current=nextEffect.alternate;commitLifeCycles(current,nextEffect);}if(effectTag&Ref){recordEffect();commitAttachRef(nextEffect);}if(effectTag&Err){recordEffect();commitErrorHandling(nextEffect);}var next=nextEffect.nextEffect;// Ensure that we clean these up so that we don't accidentally keep them.
// I'm not actually sure this matters because we can't reset firstEffect
// and lastEffect since they're on every node, not just the effectful
// ones. So we have to clean everything as we reuse nodes anyway.
nextEffect.nextEffect=null;// Ensure that we reset the effectTag here so that we can rely on effect
// tags to reason about the current life-cycle.
nextEffect=next;}}function commitRoot(finishedWork){// We keep track of this so that captureError can collect any boundaries
// that capture an error during the commit phase. The reason these aren't
// local to this function is because errors that occur during cWU are
// captured elsewhere, to prevent the unmount from being interrupted.
isWorking=true;isCommitting=true;startCommitTimer();var root=finishedWork.stateNode;!(root.current!==finishedWork)?invariant(false,'Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.'):void 0;root.isReadyForCommit=false;// Reset this to null before calling lifecycles
ReactCurrentOwner.current=null;var firstEffect=void 0;if(finishedWork.effectTag>PerformedWork){// A fiber's effect list consists only of its children, not itself. So if
// the root has an effect, we need to add it to the end of the list. The
// resulting list is the set that would belong to the root's parent, if
// it had one; that is, all the effects in the tree including the root.
if(finishedWork.lastEffect!==null){finishedWork.lastEffect.nextEffect=finishedWork;firstEffect=finishedWork.firstEffect;}else{firstEffect=finishedWork;}}else{// There is no effect on the root.
firstEffect=finishedWork.firstEffect;}prepareForCommit();// Commit all the side-effects within a tree. We'll do this in two passes.
// The first pass performs all the host insertions, updates, deletions and
// ref unmounts.
nextEffect=firstEffect;startCommitHostEffectsTimer();while(nextEffect!==null){var didError=false;var _error=void 0;{invokeGuardedCallback$1(null,commitAllHostEffects,null);if(hasCaughtError()){didError=true;_error=clearCaughtError();}}if(didError){!(nextEffect!==null)?invariant(false,'Should have next effect. This error is likely caused by a bug in React. Please file an issue.'):void 0;captureError(nextEffect,_error);// Clean-up
if(nextEffect!==null){nextEffect=nextEffect.nextEffect;}}}stopCommitHostEffectsTimer();resetAfterCommit();// The work-in-progress tree is now the current tree. This must come after
// the first pass of the commit phase, so that the previous tree is still
// current during componentWillUnmount, but before the second pass, so that
// the finished work is current during componentDidMount/Update.
root.current=finishedWork;// In the second pass we'll perform all life-cycles and ref callbacks.
// Life-cycles happen as a separate pass so that all placements, updates,
// and deletions in the entire tree have already been invoked.
// This pass also triggers any renderer-specific initial effects.
nextEffect=firstEffect;startCommitLifeCyclesTimer();while(nextEffect!==null){var _didError=false;var _error2=void 0;{invokeGuardedCallback$1(null,commitAllLifeCycles,null);if(hasCaughtError()){_didError=true;_error2=clearCaughtError();}}if(_didError){!(nextEffect!==null)?invariant(false,'Should have next effect. This error is likely caused by a bug in React. Please file an issue.'):void 0;captureError(nextEffect,_error2);if(nextEffect!==null){nextEffect=nextEffect.nextEffect;}}}isCommitting=false;isWorking=false;stopCommitLifeCyclesTimer();stopCommitTimer();if(typeof onCommitRoot==='function'){onCommitRoot(finishedWork.stateNode);}if(true&&ReactFiberInstrumentation_1.debugTool){ReactFiberInstrumentation_1.debugTool.onCommitWork(finishedWork);}// If we caught any errors during this commit, schedule their boundaries
// to update.
if(commitPhaseBoundaries){commitPhaseBoundaries.forEach(scheduleErrorRecovery);commitPhaseBoundaries=null;}if(firstUncaughtError!==null){var _error3=firstUncaughtError;firstUncaughtError=null;onUncaughtError(_error3);}var remainingTime=root.current.expirationTime;if(remainingTime===NoWork){capturedErrors=null;failedBoundaries=null;}return remainingTime;}function resetExpirationTime(workInProgress,renderTime){if(renderTime!==Never&&workInProgress.expirationTime===Never){// The children of this component are hidden. Don't bubble their
// expiration times.
return;}// Check for pending updates.
var newExpirationTime=getUpdateExpirationTime(workInProgress);// TODO: Calls need to visit stateNode
// Bubble up the earliest expiration time.
var child=workInProgress.child;while(child!==null){if(child.expirationTime!==NoWork&&(newExpirationTime===NoWork||newExpirationTime>child.expirationTime)){newExpirationTime=child.expirationTime;}child=child.sibling;}workInProgress.expirationTime=newExpirationTime;}function completeUnitOfWork(workInProgress){while(true){// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var current=workInProgress.alternate;{ReactDebugCurrentFiber.setCurrentFiber(workInProgress);}var next=completeWork(current,workInProgress,nextRenderExpirationTime);{ReactDebugCurrentFiber.resetCurrentFiber();}var returnFiber=workInProgress['return'];var siblingFiber=workInProgress.sibling;resetExpirationTime(workInProgress,nextRenderExpirationTime);if(next!==null){stopWorkTimer(workInProgress);if(true&&ReactFiberInstrumentation_1.debugTool){ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);}// If completing this work spawned new work, do that next. We'll come
// back here again.
return next;}if(returnFiber!==null){// Append all the effects of the subtree and this fiber onto the effect
// list of the parent. The completion order of the children affects the
// side-effect order.
if(returnFiber.firstEffect===null){returnFiber.firstEffect=workInProgress.firstEffect;}if(workInProgress.lastEffect!==null){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=workInProgress.firstEffect;}returnFiber.lastEffect=workInProgress.lastEffect;}// If this fiber had side-effects, we append it AFTER the children's
// side-effects. We can perform certain side-effects earlier if
// needed, by doing multiple passes over the effect list. We don't want
// to schedule our own side-effect on our own list because if end up
// reusing children we'll schedule this effect onto itself since we're
// at the end.
var effectTag=workInProgress.effectTag;// Skip both NoWork and PerformedWork tags when creating the effect list.
// PerformedWork effect is read by React DevTools but shouldn't be committed.
if(effectTag>PerformedWork){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=workInProgress;}else{returnFiber.firstEffect=workInProgress;}returnFiber.lastEffect=workInProgress;}}stopWorkTimer(workInProgress);if(true&&ReactFiberInstrumentation_1.debugTool){ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);}if(siblingFiber!==null){// If there is more work to do in this returnFiber, do that next.
return siblingFiber;}else if(returnFiber!==null){// If there's no more work in this returnFiber. Complete the returnFiber.
workInProgress=returnFiber;continue;}else{// We've reached the root.
var root=workInProgress.stateNode;root.isReadyForCommit=true;return null;}}// Without this explicit null return Flow complains of invalid return type
// TODO Remove the above while(true) loop
// eslint-disable-next-line no-unreachable
return null;}function performUnitOfWork(workInProgress){// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var current=workInProgress.alternate;// See if beginning this work spawns more work.
startWorkTimer(workInProgress);{ReactDebugCurrentFiber.setCurrentFiber(workInProgress);}var next=beginWork(current,workInProgress,nextRenderExpirationTime);{ReactDebugCurrentFiber.resetCurrentFiber();}if(true&&ReactFiberInstrumentation_1.debugTool){ReactFiberInstrumentation_1.debugTool.onBeginWork(workInProgress);}if(next===null){// If this doesn't spawn new work, complete the current work.
next=completeUnitOfWork(workInProgress);}ReactCurrentOwner.current=null;return next;}function performFailedUnitOfWork(workInProgress){// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var current=workInProgress.alternate;// See if beginning this work spawns more work.
startWorkTimer(workInProgress);{ReactDebugCurrentFiber.setCurrentFiber(workInProgress);}var next=beginFailedWork(current,workInProgress,nextRenderExpirationTime);{ReactDebugCurrentFiber.resetCurrentFiber();}if(true&&ReactFiberInstrumentation_1.debugTool){ReactFiberInstrumentation_1.debugTool.onBeginWork(workInProgress);}if(next===null){// If this doesn't spawn new work, complete the current work.
next=completeUnitOfWork(workInProgress);}ReactCurrentOwner.current=null;return next;}function workLoop(expirationTime){if(capturedErrors!==null){// If there are unhandled errors, switch to the slow work loop.
// TODO: How to avoid this check in the fast path? Maybe the renderer
// could keep track of which roots have unhandled errors and call a
// forked version of renderRoot.
slowWorkLoopThatChecksForFailedWork(expirationTime);return;}if(nextRenderExpirationTime===NoWork||nextRenderExpirationTime>expirationTime){return;}if(nextRenderExpirationTime<=mostRecentCurrentTime){// Flush all expired work.
while(nextUnitOfWork!==null){nextUnitOfWork=performUnitOfWork(nextUnitOfWork);}}else{// Flush asynchronous work until the deadline runs out of time.
while(nextUnitOfWork!==null&&!shouldYield()){nextUnitOfWork=performUnitOfWork(nextUnitOfWork);}}}function slowWorkLoopThatChecksForFailedWork(expirationTime){if(nextRenderExpirationTime===NoWork||nextRenderExpirationTime>expirationTime){return;}if(nextRenderExpirationTime<=mostRecentCurrentTime){// Flush all expired work.
while(nextUnitOfWork!==null){if(hasCapturedError(nextUnitOfWork)){// Use a forked version of performUnitOfWork
nextUnitOfWork=performFailedUnitOfWork(nextUnitOfWork);}else{nextUnitOfWork=performUnitOfWork(nextUnitOfWork);}}}else{// Flush asynchronous work until the deadline runs out of time.
while(nextUnitOfWork!==null&&!shouldYield()){if(hasCapturedError(nextUnitOfWork)){// Use a forked version of performUnitOfWork
nextUnitOfWork=performFailedUnitOfWork(nextUnitOfWork);}else{nextUnitOfWork=performUnitOfWork(nextUnitOfWork);}}}}function renderRootCatchBlock(root,failedWork,boundary,expirationTime){// We're going to restart the error boundary that captured the error.
// Conceptually, we're unwinding the stack. We need to unwind the
// context stack, too.
unwindContexts(failedWork,boundary);// Restart the error boundary using a forked version of
// performUnitOfWork that deletes the boundary's children. The entire
// failed subree will be unmounted. During the commit phase, a special
// lifecycle method is called on the error boundary, which triggers
// a re-render.
nextUnitOfWork=performFailedUnitOfWork(boundary);// Continue working.
workLoop(expirationTime);}function renderRoot(root,expirationTime){!!isWorking?invariant(false,'renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.'):void 0;isWorking=true;// We're about to mutate the work-in-progress tree. If the root was pending
// commit, it no longer is: we'll need to complete it again.
root.isReadyForCommit=false;// Check if we're starting from a fresh stack, or if we're resuming from
// previously yielded work.
if(root!==nextRoot||expirationTime!==nextRenderExpirationTime||nextUnitOfWork===null){// Reset the stack and start working from the root.
resetContextStack();nextRoot=root;nextRenderExpirationTime=expirationTime;nextUnitOfWork=createWorkInProgress(nextRoot.current,null,expirationTime);}startWorkLoopTimer(nextUnitOfWork);var didError=false;var error=null;{invokeGuardedCallback$1(null,workLoop,null,expirationTime);if(hasCaughtError()){didError=true;error=clearCaughtError();}}// An error was thrown during the render phase.
while(didError){if(didFatal){// This was a fatal error. Don't attempt to recover from it.
firstUncaughtError=error;break;}var failedWork=nextUnitOfWork;if(failedWork===null){// An error was thrown but there's no current unit of work. This can
// happen during the commit phase if there's a bug in the renderer.
didFatal=true;continue;}// "Capture" the error by finding the nearest boundary. If there is no
// error boundary, we use the root.
var boundary=captureError(failedWork,error);!(boundary!==null)?invariant(false,'Should have found an error boundary. This error is likely caused by a bug in React. Please file an issue.'):void 0;if(didFatal){// The error we just captured was a fatal error. This happens
// when the error propagates to the root more than once.
continue;}didError=false;error=null;{invokeGuardedCallback$1(null,renderRootCatchBlock,null,root,failedWork,boundary,expirationTime);if(hasCaughtError()){didError=true;error=clearCaughtError();continue;}}// We're finished working. Exit the error loop.
break;}var uncaughtError=firstUncaughtError;// We're done performing work. Time to clean up.
stopWorkLoopTimer(interruptedBy);interruptedBy=null;isWorking=false;didFatal=false;firstUncaughtError=null;if(uncaughtError!==null){onUncaughtError(uncaughtError);}return root.isReadyForCommit?root.current.alternate:null;}// Returns the boundary that captured the error, or null if the error is ignored
function captureError(failedWork,error){// It is no longer valid because we exited the user code.
ReactCurrentOwner.current=null;{ReactDebugCurrentFiber.resetCurrentFiber();}// Search for the nearest error boundary.
var boundary=null;// Passed to logCapturedError()
var errorBoundaryFound=false;var willRetry=false;var errorBoundaryName=null;// Host containers are a special case. If the failed work itself is a host
// container, then it acts as its own boundary. In all other cases, we
// ignore the work itself and only search through the parents.
if(failedWork.tag===HostRoot){boundary=failedWork;if(isFailedBoundary(failedWork)){// If this root already failed, there must have been an error when
// attempting to unmount it. This is a worst-case scenario and
// should only be possible if there's a bug in the renderer.
didFatal=true;}}else{var node=failedWork['return'];while(node!==null&&boundary===null){if(node.tag===ClassComponent){var instance=node.stateNode;if(typeof instance.componentDidCatch==='function'){errorBoundaryFound=true;errorBoundaryName=getComponentName(node);// Found an error boundary!
boundary=node;willRetry=true;}}else if(node.tag===HostRoot){// Treat the root like a no-op error boundary
boundary=node;}if(isFailedBoundary(node)){// This boundary is already in a failed state.
// If we're currently unmounting, that means this error was
// thrown while unmounting a failed subtree. We should ignore
// the error.
if(isUnmounting){return null;}// If we're in the commit phase, we should check to see if
// this boundary already captured an error during this commit.
// This case exists because multiple errors can be thrown during
// a single commit without interruption.
if(commitPhaseBoundaries!==null&&(commitPhaseBoundaries.has(node)||node.alternate!==null&&commitPhaseBoundaries.has(node.alternate))){// If so, we should ignore this error.
return null;}// The error should propagate to the next boundary -— we keep looking.
boundary=null;willRetry=false;}node=node['return'];}}if(boundary!==null){// Add to the collection of failed boundaries. This lets us know that
// subsequent errors in this subtree should propagate to the next boundary.
if(failedBoundaries===null){failedBoundaries=new Set();}failedBoundaries.add(boundary);// This method is unsafe outside of the begin and complete phases.
// We might be in the commit phase when an error is captured.
// The risk is that the return path from this Fiber may not be accurate.
// That risk is acceptable given the benefit of providing users more context.
var _componentStack=getStackAddendumByWorkInProgressFiber(failedWork);var _componentName=getComponentName(failedWork);// Add to the collection of captured errors. This is stored as a global
// map of errors and their component stack location keyed by the boundaries
// that capture them. We mostly use this Map as a Set; it's a Map only to
// avoid adding a field to Fiber to store the error.
if(capturedErrors===null){capturedErrors=new Map();}var capturedError={componentName:_componentName,componentStack:_componentStack,error:error,errorBoundary:errorBoundaryFound?boundary.stateNode:null,errorBoundaryFound:errorBoundaryFound,errorBoundaryName:errorBoundaryName,willRetry:willRetry};capturedErrors.set(boundary,capturedError);try{logCapturedError(capturedError);}catch(e){// Prevent cycle if logCapturedError() throws.
// A cycle may still occur if logCapturedError renders a component that throws.
var suppressLogging=e&&e.suppressReactErrorLogging;if(!suppressLogging){console.error(e);}}// If we're in the commit phase, defer scheduling an update on the
// boundary until after the commit is complete
if(isCommitting){if(commitPhaseBoundaries===null){commitPhaseBoundaries=new Set();}commitPhaseBoundaries.add(boundary);}else{// Otherwise, schedule an update now.
// TODO: Is this actually necessary during the render phase? Is it
// possible to unwind and continue rendering at the same priority,
// without corrupting internal state?
scheduleErrorRecovery(boundary);}return boundary;}else if(firstUncaughtError===null){// If no boundary is found, we'll need to throw the error
firstUncaughtError=error;}return null;}function hasCapturedError(fiber){// TODO: capturedErrors should store the boundary instance, to avoid needing
// to check the alternate.
return capturedErrors!==null&&(capturedErrors.has(fiber)||fiber.alternate!==null&&capturedErrors.has(fiber.alternate));}function isFailedBoundary(fiber){// TODO: failedBoundaries should store the boundary instance, to avoid
// needing to check the alternate.
return failedBoundaries!==null&&(failedBoundaries.has(fiber)||fiber.alternate!==null&&failedBoundaries.has(fiber.alternate));}function commitErrorHandling(effectfulFiber){var capturedError=void 0;if(capturedErrors!==null){capturedError=capturedErrors.get(effectfulFiber);capturedErrors['delete'](effectfulFiber);if(capturedError==null){if(effectfulFiber.alternate!==null){effectfulFiber=effectfulFiber.alternate;capturedError=capturedErrors.get(effectfulFiber);capturedErrors['delete'](effectfulFiber);}}}!(capturedError!=null)?invariant(false,'No error for given unit of work. This error is likely caused by a bug in React. Please file an issue.'):void 0;switch(effectfulFiber.tag){case ClassComponent:var instance=effectfulFiber.stateNode;var info={componentStack:capturedError.componentStack};// Allow the boundary to handle the error, usually by scheduling
// an update to itself
instance.componentDidCatch(capturedError.error,info);return;case HostRoot:if(firstUncaughtError===null){firstUncaughtError=capturedError.error;}return;default:invariant(false,'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.');}}function unwindContexts(from,to){var node=from;while(node!==null){switch(node.tag){case ClassComponent:popContextProvider(node);break;case HostComponent:popHostContext(node);break;case HostRoot:popHostContainer(node);break;case HostPortal:popHostContainer(node);break;}if(node===to||node.alternate===to){stopFailedWorkTimer(node);break;}else{stopWorkTimer(node);}node=node['return'];}}function computeAsyncExpiration(){// Given the current clock time, returns an expiration time. We use rounding
// to batch like updates together.
// Should complete within ~1000ms. 1200ms max.
var currentTime=recalculateCurrentTime();var expirationMs=1000;var bucketSizeMs=200;return computeExpirationBucket(currentTime,expirationMs,bucketSizeMs);}function computeExpirationForFiber(fiber){var expirationTime=void 0;if(expirationContext!==NoWork){// An explicit expiration context was set;
expirationTime=expirationContext;}else if(isWorking){if(isCommitting){// Updates that occur during the commit phase should have sync priority
// by default.
expirationTime=Sync;}else{// Updates during the render phase should expire at the same time as
// the work that is being rendered.
expirationTime=nextRenderExpirationTime;}}else{// No explicit expiration context was set, and we're not currently
// performing work. Calculate a new expiration time.
if(useSyncScheduling&&!(fiber.internalContextTag&AsyncUpdates)){// This is a sync update
expirationTime=Sync;}else{// This is an async update
expirationTime=computeAsyncExpiration();}}return expirationTime;}function scheduleWork(fiber,expirationTime){return scheduleWorkImpl(fiber,expirationTime,false);}function checkRootNeedsClearing(root,fiber,expirationTime){if(!isWorking&&root===nextRoot&&expirationTime<nextRenderExpirationTime){// Restart the root from the top.
if(nextUnitOfWork!==null){// This is an interruption. (Used for performance tracking.)
interruptedBy=fiber;}nextRoot=null;nextUnitOfWork=null;nextRenderExpirationTime=NoWork;}}function scheduleWorkImpl(fiber,expirationTime,isErrorRecovery){recordScheduleUpdate();{if(!isErrorRecovery&&fiber.tag===ClassComponent){var instance=fiber.stateNode;warnAboutInvalidUpdates(instance);}}var node=fiber;while(node!==null){// Walk the parent path to the root and update each node's
// expiration time.
if(node.expirationTime===NoWork||node.expirationTime>expirationTime){node.expirationTime=expirationTime;}if(node.alternate!==null){if(node.alternate.expirationTime===NoWork||node.alternate.expirationTime>expirationTime){node.alternate.expirationTime=expirationTime;}}if(node['return']===null){if(node.tag===HostRoot){var root=node.stateNode;checkRootNeedsClearing(root,fiber,expirationTime);requestWork(root,expirationTime);checkRootNeedsClearing(root,fiber,expirationTime);}else{{if(!isErrorRecovery&&fiber.tag===ClassComponent){warnAboutUpdateOnUnmounted(fiber);}}return;}}node=node['return'];}}function scheduleErrorRecovery(fiber){scheduleWorkImpl(fiber,Sync,true);}function recalculateCurrentTime(){// Subtract initial time so it fits inside 32bits
var ms=now()-startTime;mostRecentCurrentTime=msToExpirationTime(ms);return mostRecentCurrentTime;}function deferredUpdates(fn){var previousExpirationContext=expirationContext;expirationContext=computeAsyncExpiration();try{return fn();}finally{expirationContext=previousExpirationContext;}}function syncUpdates(fn){var previousExpirationContext=expirationContext;expirationContext=Sync;try{return fn();}finally{expirationContext=previousExpirationContext;}}// TODO: Everything below this is written as if it has been lifted to the
// renderers. I'll do this in a follow-up.
// Linked-list of roots
var firstScheduledRoot=null;var lastScheduledRoot=null;var callbackExpirationTime=NoWork;var callbackID=-1;var isRendering=false;var nextFlushedRoot=null;var nextFlushedExpirationTime=NoWork;var deadlineDidExpire=false;var hasUnhandledError=false;var unhandledError=null;var deadline=null;var isBatchingUpdates=false;var isUnbatchingUpdates=false;// Use these to prevent an infinite loop of nested updates
var NESTED_UPDATE_LIMIT=1000;var nestedUpdateCount=0;var timeHeuristicForUnitOfWork=1;function scheduleCallbackWithExpiration(expirationTime){if(callbackExpirationTime!==NoWork){// A callback is already scheduled. Check its expiration time (timeout).
if(expirationTime>callbackExpirationTime){// Existing callback has sufficient timeout. Exit.
return;}else{// Existing callback has insufficient timeout. Cancel and schedule a
// new one.
cancelDeferredCallback(callbackID);}// The request callback timer is already running. Don't start a new one.
}else{startRequestCallbackTimer();}// Compute a timeout for the given expiration time.
var currentMs=now()-startTime;var expirationMs=expirationTimeToMs(expirationTime);var timeout=expirationMs-currentMs;callbackExpirationTime=expirationTime;callbackID=scheduleDeferredCallback(performAsyncWork,{timeout:timeout});}// requestWork is called by the scheduler whenever a root receives an update.
// It's up to the renderer to call renderRoot at some point in the future.
function requestWork(root,expirationTime){if(nestedUpdateCount>NESTED_UPDATE_LIMIT){invariant(false,'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.');}// Add the root to the schedule.
// Check if this root is already part of the schedule.
if(root.nextScheduledRoot===null){// This root is not already scheduled. Add it.
root.remainingExpirationTime=expirationTime;if(lastScheduledRoot===null){firstScheduledRoot=lastScheduledRoot=root;root.nextScheduledRoot=root;}else{lastScheduledRoot.nextScheduledRoot=root;lastScheduledRoot=root;lastScheduledRoot.nextScheduledRoot=firstScheduledRoot;}}else{// This root is already scheduled, but its priority may have increased.
var remainingExpirationTime=root.remainingExpirationTime;if(remainingExpirationTime===NoWork||expirationTime<remainingExpirationTime){// Update the priority.
root.remainingExpirationTime=expirationTime;}}if(isRendering){// Prevent reentrancy. Remaining work will be scheduled at the end of
// the currently rendering batch.
return;}if(isBatchingUpdates){// Flush work at the end of the batch.
if(isUnbatchingUpdates){// ...unless we're inside unbatchedUpdates, in which case we should
// flush it now.
nextFlushedRoot=root;nextFlushedExpirationTime=Sync;performWorkOnRoot(nextFlushedRoot,nextFlushedExpirationTime);}return;}// TODO: Get rid of Sync and use current time?
if(expirationTime===Sync){performWork(Sync,null);}else{scheduleCallbackWithExpiration(expirationTime);}}function findHighestPriorityRoot(){var highestPriorityWork=NoWork;var highestPriorityRoot=null;if(lastScheduledRoot!==null){var previousScheduledRoot=lastScheduledRoot;var root=firstScheduledRoot;while(root!==null){var remainingExpirationTime=root.remainingExpirationTime;if(remainingExpirationTime===NoWork){// This root no longer has work. Remove it from the scheduler.
// TODO: This check is redudant, but Flow is confused by the branch
// below where we set lastScheduledRoot to null, even though we break
// from the loop right after.
!(previousScheduledRoot!==null&&lastScheduledRoot!==null)?invariant(false,'Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue.'):void 0;if(root===root.nextScheduledRoot){// This is the only root in the list.
root.nextScheduledRoot=null;firstScheduledRoot=lastScheduledRoot=null;break;}else if(root===firstScheduledRoot){// This is the first root in the list.
var next=root.nextScheduledRoot;firstScheduledRoot=next;lastScheduledRoot.nextScheduledRoot=next;root.nextScheduledRoot=null;}else if(root===lastScheduledRoot){// This is the last root in the list.
lastScheduledRoot=previousScheduledRoot;lastScheduledRoot.nextScheduledRoot=firstScheduledRoot;root.nextScheduledRoot=null;break;}else{previousScheduledRoot.nextScheduledRoot=root.nextScheduledRoot;root.nextScheduledRoot=null;}root=previousScheduledRoot.nextScheduledRoot;}else{if(highestPriorityWork===NoWork||remainingExpirationTime<highestPriorityWork){// Update the priority, if it's higher
highestPriorityWork=remainingExpirationTime;highestPriorityRoot=root;}if(root===lastScheduledRoot){break;}previousScheduledRoot=root;root=root.nextScheduledRoot;}}}// If the next root is the same as the previous root, this is a nested
// update. To prevent an infinite loop, increment the nested update count.
var previousFlushedRoot=nextFlushedRoot;if(previousFlushedRoot!==null&&previousFlushedRoot===highestPriorityRoot){nestedUpdateCount++;}else{// Reset whenever we switch roots.
nestedUpdateCount=0;}nextFlushedRoot=highestPriorityRoot;nextFlushedExpirationTime=highestPriorityWork;}function performAsyncWork(dl){performWork(NoWork,dl);}function performWork(minExpirationTime,dl){deadline=dl;// Keep working on roots until there's no more work, or until the we reach
// the deadline.
findHighestPriorityRoot();if(enableUserTimingAPI&&deadline!==null){var didExpire=nextFlushedExpirationTime<recalculateCurrentTime();stopRequestCallbackTimer(didExpire);}while(nextFlushedRoot!==null&&nextFlushedExpirationTime!==NoWork&&(minExpirationTime===NoWork||nextFlushedExpirationTime<=minExpirationTime)&&!deadlineDidExpire){performWorkOnRoot(nextFlushedRoot,nextFlushedExpirationTime);// Find the next highest priority work.
findHighestPriorityRoot();}// We're done flushing work. Either we ran out of time in this callback,
// or there's no more work left with sufficient priority.
// If we're inside a callback, set this to false since we just completed it.
if(deadline!==null){callbackExpirationTime=NoWork;callbackID=-1;}// If there's work left over, schedule a new callback.
if(nextFlushedExpirationTime!==NoWork){scheduleCallbackWithExpiration(nextFlushedExpirationTime);}// Clean-up.
deadline=null;deadlineDidExpire=false;nestedUpdateCount=0;if(hasUnhandledError){var _error4=unhandledError;unhandledError=null;hasUnhandledError=false;throw _error4;}}function performWorkOnRoot(root,expirationTime){!!isRendering?invariant(false,'performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.'):void 0;isRendering=true;// Check if this is async work or sync/expired work.
// TODO: Pass current time as argument to renderRoot, commitRoot
if(expirationTime<=recalculateCurrentTime()){// Flush sync work.
var finishedWork=root.finishedWork;if(finishedWork!==null){// This root is already complete. We can commit it.
root.finishedWork=null;root.remainingExpirationTime=commitRoot(finishedWork);}else{root.finishedWork=null;finishedWork=renderRoot(root,expirationTime);if(finishedWork!==null){// We've completed the root. Commit it.
root.remainingExpirationTime=commitRoot(finishedWork);}}}else{// Flush async work.
var _finishedWork=root.finishedWork;if(_finishedWork!==null){// This root is already complete. We can commit it.
root.finishedWork=null;root.remainingExpirationTime=commitRoot(_finishedWork);}else{root.finishedWork=null;_finishedWork=renderRoot(root,expirationTime);if(_finishedWork!==null){// We've completed the root. Check the deadline one more time
// before committing.
if(!shouldYield()){// Still time left. Commit the root.
root.remainingExpirationTime=commitRoot(_finishedWork);}else{// There's no time left. Mark this root as complete. We'll come
// back and commit it later.
root.finishedWork=_finishedWork;}}}}isRendering=false;}// When working on async work, the reconciler asks the renderer if it should
// yield execution. For DOM, we implement this with requestIdleCallback.
function shouldYield(){if(deadline===null){return false;}if(deadline.timeRemaining()>timeHeuristicForUnitOfWork){// Disregard deadline.didTimeout. Only expired work should be flushed
// during a timeout. This path is only hit for non-expired work.
return false;}deadlineDidExpire=true;return true;}// TODO: Not happy about this hook. Conceptually, renderRoot should return a
// tuple of (isReadyForCommit, didError, error)
function onUncaughtError(error){!(nextFlushedRoot!==null)?invariant(false,'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.'):void 0;// Unschedule this root so we don't work on it again until there's
// another update.
nextFlushedRoot.remainingExpirationTime=NoWork;if(!hasUnhandledError){hasUnhandledError=true;unhandledError=error;}}// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function batchedUpdates(fn,a){var previousIsBatchingUpdates=isBatchingUpdates;isBatchingUpdates=true;try{return fn(a);}finally{isBatchingUpdates=previousIsBatchingUpdates;if(!isBatchingUpdates&&!isRendering){performWork(Sync,null);}}}// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function unbatchedUpdates(fn){if(isBatchingUpdates&&!isUnbatchingUpdates){isUnbatchingUpdates=true;try{return fn();}finally{isUnbatchingUpdates=false;}}return fn();}// TODO: Batching should be implemented at the renderer level, not within
// the reconciler.
function flushSync(fn){var previousIsBatchingUpdates=isBatchingUpdates;isBatchingUpdates=true;try{return syncUpdates(fn);}finally{isBatchingUpdates=previousIsBatchingUpdates;!!isRendering?invariant(false,'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.'):void 0;performWork(Sync,null);}}return{computeAsyncExpiration:computeAsyncExpiration,computeExpirationForFiber:computeExpirationForFiber,scheduleWork:scheduleWork,batchedUpdates:batchedUpdates,unbatchedUpdates:unbatchedUpdates,flushSync:flushSync,deferredUpdates:deferredUpdates};};{var didWarnAboutNestedUpdates=false;}// 0 is PROD, 1 is DEV.
// Might add PROFILE later.
function getContextForSubtree(parentComponent){if(!parentComponent){return emptyObject;}var fiber=get(parentComponent);var parentContext=findCurrentUnmaskedContext(fiber);return isContextProvider(fiber)?processChildContext(fiber,parentContext):parentContext;}var ReactFiberReconciler$1=function ReactFiberReconciler$1(config){var getPublicInstance=config.getPublicInstance;var _ReactFiberScheduler=ReactFiberScheduler(config),computeAsyncExpiration=_ReactFiberScheduler.computeAsyncExpiration,computeExpirationForFiber=_ReactFiberScheduler.computeExpirationForFiber,scheduleWork=_ReactFiberScheduler.scheduleWork,batchedUpdates=_ReactFiberScheduler.batchedUpdates,unbatchedUpdates=_ReactFiberScheduler.unbatchedUpdates,flushSync=_ReactFiberScheduler.flushSync,deferredUpdates=_ReactFiberScheduler.deferredUpdates;function scheduleTopLevelUpdate(current,element,callback){{if(ReactDebugCurrentFiber.phase==='render'&&ReactDebugCurrentFiber.current!==null&&!didWarnAboutNestedUpdates){didWarnAboutNestedUpdates=true;warning(false,'Render methods should be a pure function of props and state; '+'triggering nested component updates from render is not allowed. '+'If necessary, trigger nested updates in componentDidUpdate.\n\n'+'Check the render method of %s.',getComponentName(ReactDebugCurrentFiber.current)||'Unknown');}}callback=callback===undefined?null:callback;{warning(callback===null||typeof callback==='function','render(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callback);}var expirationTime=void 0;// Check if the top-level element is an async wrapper component. If so,
// treat updates to the root as async. This is a bit weird but lets us
// avoid a separate `renderAsync` API.
if(enableAsyncSubtreeAPI&&element!=null&&element.type!=null&&element.type.prototype!=null&&element.type.prototype.unstable_isAsyncReactComponent===true){expirationTime=computeAsyncExpiration();}else{expirationTime=computeExpirationForFiber(current);}var update={expirationTime:expirationTime,partialState:{element:element},callback:callback,isReplace:false,isForced:false,nextCallback:null,next:null};insertUpdateIntoFiber(current,update);scheduleWork(current,expirationTime);}function findHostInstance(fiber){var hostFiber=findCurrentHostFiber(fiber);if(hostFiber===null){return null;}return hostFiber.stateNode;}return{createContainer:function createContainer(containerInfo,hydrate){return createFiberRoot(containerInfo,hydrate);},updateContainer:function updateContainer(element,container,parentComponent,callback){// TODO: If this is a nested container, this won't be the root.
var current=container.current;{if(ReactFiberInstrumentation_1.debugTool){if(current.alternate===null){ReactFiberInstrumentation_1.debugTool.onMountContainer(container);}else if(element===null){ReactFiberInstrumentation_1.debugTool.onUnmountContainer(container);}else{ReactFiberInstrumentation_1.debugTool.onUpdateContainer(container);}}}var context=getContextForSubtree(parentComponent);if(container.context===null){container.context=context;}else{container.pendingContext=context;}scheduleTopLevelUpdate(current,element,callback);},batchedUpdates:batchedUpdates,unbatchedUpdates:unbatchedUpdates,deferredUpdates:deferredUpdates,flushSync:flushSync,getPublicRootInstance:function getPublicRootInstance(container){var containerFiber=container.current;if(!containerFiber.child){return null;}switch(containerFiber.child.tag){case HostComponent:return getPublicInstance(containerFiber.child.stateNode);default:return containerFiber.child.stateNode;}},findHostInstance:findHostInstance,findHostInstanceWithNoPortals:function findHostInstanceWithNoPortals(fiber){var hostFiber=findCurrentHostFiberWithNoPortals(fiber);if(hostFiber===null){return null;}return hostFiber.stateNode;},injectIntoDevTools:function injectIntoDevTools(devToolsConfig){var _findFiberByHostInstance=devToolsConfig.findFiberByHostInstance;return injectInternals(_assign({},devToolsConfig,{findHostInstanceByFiber:function findHostInstanceByFiber(fiber){return findHostInstance(fiber);},findFiberByHostInstance:function findFiberByHostInstance(instance){if(!_findFiberByHostInstance){// Might not be implemented by the renderer.
return null;}return _findFiberByHostInstance(instance);}}));}};};var ReactFiberReconciler$2=Object.freeze({default:ReactFiberReconciler$1});var ReactFiberReconciler$3=ReactFiberReconciler$2&&ReactFiberReconciler$1||ReactFiberReconciler$2;// TODO: bundle Flow types with the package.
// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var reactReconciler=ReactFiberReconciler$3['default']?ReactFiberReconciler$3['default']:ReactFiberReconciler$3;function createPortal$1(children,containerInfo,// TODO: figure out the API for cross-renderer implementation.
implementation){var key=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;return{// This tag allow us to uniquely identify this as a React Portal
$$typeof:REACT_PORTAL_TYPE,key:key==null?null:''+key,children:children,containerInfo:containerInfo,implementation:implementation};}// TODO: this is special because it gets imported during build.
var ReactVersion='16.2.0';// a requestAnimationFrame, storing the time for the start of the frame, then
// scheduling a postMessage which gets scheduled after paint. Within the
// postMessage handler do as much work as possible until time + frame rate.
// By separating the idle call into a separate event tick we ensure that
// layout, paint and other browser work is counted against the available time.
// The frame rate is dynamically adjusted.
{if(ExecutionEnvironment.canUseDOM&&typeof requestAnimationFrame!=='function'){warning(false,'React depends on requestAnimationFrame. Make sure that you load a '+'polyfill in older browsers. http://fb.me/react-polyfills');}}var hasNativePerformanceNow=(typeof performance==='undefined'?'undefined':_typeof(performance))==='object'&&typeof performance.now==='function';var now=void 0;if(hasNativePerformanceNow){now=function now(){return performance.now();};}else{now=function now(){return Date.now();};}// TODO: There's no way to cancel, because Fiber doesn't atm.
var rIC=void 0;var cIC=void 0;if(!ExecutionEnvironment.canUseDOM){rIC=function rIC(frameCallback){return setTimeout(function(){frameCallback({timeRemaining:function timeRemaining(){return Infinity;}});});};cIC=function cIC(timeoutID){clearTimeout(timeoutID);};}else if(typeof requestIdleCallback!=='function'||typeof cancelIdleCallback!=='function'){// Polyfill requestIdleCallback and cancelIdleCallback
var scheduledRICCallback=null;var isIdleScheduled=false;var timeoutTime=-1;var isAnimationFrameScheduled=false;var frameDeadline=0;// We start out assuming that we run at 30fps but then the heuristic tracking
// will adjust this value to a faster fps if we get more frequent animation
// frames.
var previousFrameTime=33;var activeFrameTime=33;var frameDeadlineObject;if(hasNativePerformanceNow){frameDeadlineObject={didTimeout:false,timeRemaining:function timeRemaining(){// We assume that if we have a performance timer that the rAF callback
// gets a performance timer value. Not sure if this is always true.
var remaining=frameDeadline-performance.now();return remaining>0?remaining:0;}};}else{frameDeadlineObject={didTimeout:false,timeRemaining:function timeRemaining(){// Fallback to Date.now()
var remaining=frameDeadline-Date.now();return remaining>0?remaining:0;}};}// We use the postMessage trick to defer idle work until after the repaint.
var messageKey='__reactIdleCallback$'+Math.random().toString(36).slice(2);var idleTick=function idleTick(event){if(event.source!==window||event.data!==messageKey){return;}isIdleScheduled=false;var currentTime=now();if(frameDeadline-currentTime<=0){// There's no time left in this idle period. Check if the callback has
// a timeout and whether it's been exceeded.
if(timeoutTime!==-1&&timeoutTime<=currentTime){// Exceeded the timeout. Invoke the callback even though there's no
// time left.
frameDeadlineObject.didTimeout=true;}else{// No timeout.
if(!isAnimationFrameScheduled){// Schedule another animation callback so we retry later.
isAnimationFrameScheduled=true;requestAnimationFrame(animationTick);}// Exit without invoking the callback.
return;}}else{// There's still time left in this idle period.
frameDeadlineObject.didTimeout=false;}timeoutTime=-1;var callback=scheduledRICCallback;scheduledRICCallback=null;if(callback!==null){callback(frameDeadlineObject);}};// Assumes that we have addEventListener in this environment. Might need
// something better for old IE.
window.addEventListener('message',idleTick,false);var animationTick=function animationTick(rafTime){isAnimationFrameScheduled=false;var nextFrameTime=rafTime-frameDeadline+activeFrameTime;if(nextFrameTime<activeFrameTime&&previousFrameTime<activeFrameTime){if(nextFrameTime<8){// Defensive coding. We don't support higher frame rates than 120hz.
// If we get lower than that, it is probably a bug.
nextFrameTime=8;}// If one frame goes long, then the next one can be short to catch up.
// If two frames are short in a row, then that's an indication that we
// actually have a higher frame rate than what we're currently optimizing.
// We adjust our heuristic dynamically accordingly. For example, if we're
// running on 120hz display or 90hz VR display.
// Take the max of the two in case one of them was an anomaly due to
// missed frame deadlines.
activeFrameTime=nextFrameTime<previousFrameTime?previousFrameTime:nextFrameTime;}else{previousFrameTime=nextFrameTime;}frameDeadline=rafTime+activeFrameTime;if(!isIdleScheduled){isIdleScheduled=true;window.postMessage(messageKey,'*');}};rIC=function rIC(callback,options){// This assumes that we only schedule one callback at a time because that's
// how Fiber uses it.
scheduledRICCallback=callback;if(options!=null&&typeof options.timeout==='number'){timeoutTime=now()+options.timeout;}if(!isAnimationFrameScheduled){// If rAF didn't already schedule one, we need to schedule a frame.
// TODO: If this rAF doesn't materialize because the browser throttles, we
// might want to still have setTimeout trigger rIC as a backup to ensure
// that we keep performing work.
isAnimationFrameScheduled=true;requestAnimationFrame(animationTick);}return 0;};cIC=function cIC(){scheduledRICCallback=null;isIdleScheduled=false;timeoutTime=-1;};}else{rIC=window.requestIdleCallback;cIC=window.cancelIdleCallback;}/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var lowPriorityWarning=function lowPriorityWarning(){};{var printWarning=function printWarning(format){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.warn(message);}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}};lowPriorityWarning=function lowPriorityWarning(condition,format){if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(!condition){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}printWarning.apply(undefined,[format].concat(args));}};}var lowPriorityWarning$1=lowPriorityWarning;// isAttributeNameSafe() is currently duplicated in DOMMarkupOperations.
// TODO: Find a better place for this.
var VALID_ATTRIBUTE_NAME_REGEX=new RegExp('^['+ATTRIBUTE_NAME_START_CHAR+']['+ATTRIBUTE_NAME_CHAR+']*$');var illegalAttributeNameCache={};var validatedAttributeNameCache={};function isAttributeNameSafe(attributeName){if(validatedAttributeNameCache.hasOwnProperty(attributeName)){return true;}if(illegalAttributeNameCache.hasOwnProperty(attributeName)){return false;}if(VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)){validatedAttributeNameCache[attributeName]=true;return true;}illegalAttributeNameCache[attributeName]=true;{warning(false,'Invalid attribute name: `%s`',attributeName);}return false;}// shouldIgnoreValue() is currently duplicated in DOMMarkupOperations.
// TODO: Find a better place for this.
function shouldIgnoreValue(propertyInfo,value){return value==null||propertyInfo.hasBooleanValue&&!value||propertyInfo.hasNumericValue&&isNaN(value)||propertyInfo.hasPositiveNumericValue&&value<1||propertyInfo.hasOverloadedBooleanValue&&value===false;}/**
 * Operations for dealing with DOM properties.
 *//**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have multiple equivalent values.
 */function getValueForProperty(node,name,expected){{var propertyInfo=getPropertyInfo(name);if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod||propertyInfo.mustUseProperty){return node[propertyInfo.propertyName];}else{var attributeName=propertyInfo.attributeName;var stringValue=null;if(propertyInfo.hasOverloadedBooleanValue){if(node.hasAttribute(attributeName)){var value=node.getAttribute(attributeName);if(value===''){return true;}if(shouldIgnoreValue(propertyInfo,expected)){return value;}if(value===''+expected){return expected;}return value;}}else if(node.hasAttribute(attributeName)){if(shouldIgnoreValue(propertyInfo,expected)){// We had an attribute but shouldn't have had one, so read it
// for the error message.
return node.getAttribute(attributeName);}if(propertyInfo.hasBooleanValue){// If this was a boolean, it doesn't matter what the value is
// the fact that we have it is the same as the expected.
return expected;}// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
stringValue=node.getAttribute(attributeName);}if(shouldIgnoreValue(propertyInfo,expected)){return stringValue===null?expected:stringValue;}else if(stringValue===''+expected){return expected;}else{return stringValue;}}}}}/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */function getValueForAttribute(node,name,expected){{if(!isAttributeNameSafe(name)){return;}if(!node.hasAttribute(name)){return expected===undefined?undefined:null;}var value=node.getAttribute(name);if(value===''+expected){return expected;}return value;}}/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 * @param {*} value
 */function setValueForProperty(node,name,value){var propertyInfo=getPropertyInfo(name);if(propertyInfo&&shouldSetAttribute(name,value)){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,value);}else if(shouldIgnoreValue(propertyInfo,value)){deleteValueForProperty(node,name);return;}else if(propertyInfo.mustUseProperty){// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
node[propertyInfo.propertyName]=value;}else{var attributeName=propertyInfo.attributeName;var namespace=propertyInfo.attributeNamespace;// `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
if(namespace){node.setAttributeNS(namespace,attributeName,''+value);}else if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){node.setAttribute(attributeName,'');}else{node.setAttribute(attributeName,''+value);}}}else{setValueForAttribute(node,name,shouldSetAttribute(name,value)?value:null);return;}{}}function setValueForAttribute(node,name,value){if(!isAttributeNameSafe(name)){return;}if(value==null){node.removeAttribute(name);}else{node.setAttribute(name,''+value);}{}}/**
 * Deletes an attributes from a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 */function deleteValueForAttribute(node,name){node.removeAttribute(name);}/**
 * Deletes the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 */function deleteValueForProperty(node,name){var propertyInfo=getPropertyInfo(name);if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,undefined);}else if(propertyInfo.mustUseProperty){var propName=propertyInfo.propertyName;if(propertyInfo.hasBooleanValue){node[propName]=false;}else{node[propName]='';}}else{node.removeAttribute(propertyInfo.attributeName);}}else{node.removeAttribute(name);}}var ReactControlledValuePropTypes={checkPropTypes:null};{var hasReadOnlyValue={button:true,checkbox:true,image:true,hidden:true,radio:true,reset:true,submit:true};var propTypes={value:function value(props,propName,componentName){if(!props[propName]||hasReadOnlyValue[props.type]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `value` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultValue`. Otherwise, '+'set either `onChange` or `readOnly`.');},checked:function checked(props,propName,componentName){if(!props[propName]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `checked` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultChecked`. Otherwise, '+'set either `onChange` or `readOnly`.');}};/**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */ReactControlledValuePropTypes.checkPropTypes=function(tagName,props,getStack){checkPropTypes(propTypes,props,'prop',tagName,getStack);};}// TODO: direct imports like some-package/src/* are bad. Fix me.
var getCurrentFiberOwnerName$2=ReactDebugCurrentFiber.getCurrentFiberOwnerName;var getCurrentFiberStackAddendum$3=ReactDebugCurrentFiber.getCurrentFiberStackAddendum;var didWarnValueDefaultValue=false;var didWarnCheckedDefaultChecked=false;var didWarnControlledToUncontrolled=false;var didWarnUncontrolledToControlled=false;function isControlled(props){var usesChecked=props.type==='checkbox'||props.type==='radio';return usesChecked?props.checked!=null:props.value!=null;}/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */function getHostProps(element,props){var node=element;var value=props.value;var checked=props.checked;var hostProps=_assign({// Make sure we set .type before any other properties (setting .value
// before .type means .value is lost in IE11 and below)
type:undefined,// Make sure we set .step before .value (setting .value before .step
// means .value is rounded on mount, based upon step precision)
step:undefined,// Make sure we set .min & .max before .value (to ensure proper order
// in corner cases such as min or max deriving from value, e.g. Issue #7170)
min:undefined,max:undefined},props,{defaultChecked:undefined,defaultValue:undefined,value:value!=null?value:node._wrapperState.initialValue,checked:checked!=null?checked:node._wrapperState.initialChecked});return hostProps;}function initWrapperState(element,props){{ReactControlledValuePropTypes.checkPropTypes('input',props,getCurrentFiberStackAddendum$3);if(props.checked!==undefined&&props.defaultChecked!==undefined&&!didWarnCheckedDefaultChecked){warning(false,'%s contains an input of type %s with both checked and defaultChecked props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the checked prop, or the defaultChecked prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components',getCurrentFiberOwnerName$2()||'A component',props.type);didWarnCheckedDefaultChecked=true;}if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){warning(false,'%s contains an input of type %s with both value and defaultValue props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components',getCurrentFiberOwnerName$2()||'A component',props.type);didWarnValueDefaultValue=true;}}var defaultValue=props.defaultValue;var node=element;node._wrapperState={initialChecked:props.checked!=null?props.checked:props.defaultChecked,initialValue:props.value!=null?props.value:defaultValue,controlled:isControlled(props)};}function updateChecked(element,props){var node=element;var checked=props.checked;if(checked!=null){setValueForProperty(node,'checked',checked);}}function updateWrapper(element,props){var node=element;{var controlled=isControlled(props);if(!node._wrapperState.controlled&&controlled&&!didWarnUncontrolledToControlled){warning(false,'A component is changing an uncontrolled input of type %s to be controlled. '+'Input elements should not switch from uncontrolled to controlled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s',props.type,getCurrentFiberStackAddendum$3());didWarnUncontrolledToControlled=true;}if(node._wrapperState.controlled&&!controlled&&!didWarnControlledToUncontrolled){warning(false,'A component is changing a controlled input of type %s to be uncontrolled. '+'Input elements should not switch from controlled to uncontrolled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s',props.type,getCurrentFiberStackAddendum$3());didWarnControlledToUncontrolled=true;}}updateChecked(element,props);var value=props.value;if(value!=null){if(value===0&&node.value===''){node.value='0';// Note: IE9 reports a number inputs as 'text', so check props instead.
}else if(props.type==='number'){// Simulate `input.valueAsNumber`. IE9 does not support it
var valueAsNumber=parseFloat(node.value)||0;if(// eslint-disable-next-line
value!=valueAsNumber||// eslint-disable-next-line
value==valueAsNumber&&node.value!=value){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
node.value=''+value;}}else if(node.value!==''+value){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
node.value=''+value;}}else{if(props.value==null&&props.defaultValue!=null){// In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/facebook/react/issues/7253
if(node.defaultValue!==''+props.defaultValue){node.defaultValue=''+props.defaultValue;}}if(props.checked==null&&props.defaultChecked!=null){node.defaultChecked=!!props.defaultChecked;}}}function postMountWrapper(element,props){var node=element;// Detach value from defaultValue. We won't do anything if we're working on
// submit or reset inputs as those values & defaultValues are linked. They
// are not resetable nodes so this operation doesn't matter and actually
// removes browser-default values (eg "Submit Query") when no value is
// provided.
switch(props.type){case'submit':case'reset':break;case'color':case'date':case'datetime':case'datetime-local':case'month':case'time':case'week':// This fixes the no-show issue on iOS Safari and Android Chrome:
// https://github.com/facebook/react/issues/7233
node.value='';node.value=node.defaultValue;break;default:node.value=node.value;break;}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var name=node.name;if(name!==''){node.name='';}node.defaultChecked=!node.defaultChecked;node.defaultChecked=!node.defaultChecked;if(name!==''){node.name=name;}}function restoreControlledState$1(element,props){var node=element;updateWrapper(node,props);updateNamedCousins(node,props);}function updateNamedCousins(rootNode,props){var name=props.name;if(props.type==='radio'&&name!=null){var queryRoot=rootNode;while(queryRoot.parentNode){queryRoot=queryRoot.parentNode;}// If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form. It might not even be in the
// document. Let's just use the local `querySelectorAll` to ensure we don't
// miss anything.
var group=queryRoot.querySelectorAll('input[name='+JSON.stringify(''+name)+'][type="radio"]');for(var i=0;i<group.length;i++){var otherNode=group[i];if(otherNode===rootNode||otherNode.form!==rootNode.form){continue;}// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var otherProps=getFiberCurrentPropsFromNode$1(otherNode);!otherProps?invariant(false,'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'):void 0;// We need update the tracked value on the named cousin since the value
// was changed but the input saw no event or value set
updateValueIfChanged(otherNode);// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
updateWrapper(otherNode,otherProps);}}}function flattenChildren(children){var content='';// Flatten children and warn if they aren't strings or numbers;
// invalid types are ignored.
// We can silently skip them because invalid DOM nesting warning
// catches these cases in Fiber.
React.Children.forEach(children,function(child){if(child==null){return;}if(typeof child==='string'||typeof child==='number'){content+=child;}});return content;}/**
 * Implements an <option> host component that warns when `selected` is set.
 */function validateProps(element,props){// TODO (yungsters): Remove support for `selected` in <option>.
{warning(props.selected==null,'Use the `defaultValue` or `value` props on <select> instead of '+'setting `selected` on <option>.');}}function postMountWrapper$1(element,props){// value="" should make a value attribute (#6219)
if(props.value!=null){element.setAttribute('value',props.value);}}function getHostProps$1(element,props){var hostProps=_assign({children:undefined},props);var content=flattenChildren(props.children);if(content){hostProps.children=content;}return hostProps;}// TODO: direct imports like some-package/src/* are bad. Fix me.
var getCurrentFiberOwnerName$3=ReactDebugCurrentFiber.getCurrentFiberOwnerName;var getCurrentFiberStackAddendum$4=ReactDebugCurrentFiber.getCurrentFiberStackAddendum;{var didWarnValueDefaultValue$1=false;}function getDeclarationErrorAddendum(){var ownerName=getCurrentFiberOwnerName$3();if(ownerName){return'\n\nCheck the render method of `'+ownerName+'`.';}return'';}var valuePropNames=['value','defaultValue'];/**
 * Validation function for `value` and `defaultValue`.
 */function checkSelectPropTypes(props){ReactControlledValuePropTypes.checkPropTypes('select',props,getCurrentFiberStackAddendum$4);for(var i=0;i<valuePropNames.length;i++){var propName=valuePropNames[i];if(props[propName]==null){continue;}var isArray=Array.isArray(props[propName]);if(props.multiple&&!isArray){warning(false,'The `%s` prop supplied to <select> must be an array if '+'`multiple` is true.%s',propName,getDeclarationErrorAddendum());}else if(!props.multiple&&isArray){warning(false,'The `%s` prop supplied to <select> must be a scalar '+'value if `multiple` is false.%s',propName,getDeclarationErrorAddendum());}}}function updateOptions(node,multiple,propValue,setDefaultSelected){var options=node.options;if(multiple){var selectedValues=propValue;var selectedValue={};for(var i=0;i<selectedValues.length;i++){// Prefix to avoid chaos with special keys.
selectedValue['$'+selectedValues[i]]=true;}for(var _i=0;_i<options.length;_i++){var selected=selectedValue.hasOwnProperty('$'+options[_i].value);if(options[_i].selected!==selected){options[_i].selected=selected;}if(selected&&setDefaultSelected){options[_i].defaultSelected=true;}}}else{// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
var _selectedValue=''+propValue;var defaultSelected=null;for(var _i2=0;_i2<options.length;_i2++){if(options[_i2].value===_selectedValue){options[_i2].selected=true;if(setDefaultSelected){options[_i2].defaultSelected=true;}return;}if(defaultSelected===null&&!options[_i2].disabled){defaultSelected=options[_i2];}}if(defaultSelected!==null){defaultSelected.selected=true;}}}/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */function getHostProps$2(element,props){return _assign({},props,{value:undefined});}function initWrapperState$1(element,props){var node=element;{checkSelectPropTypes(props);}var value=props.value;node._wrapperState={initialValue:value!=null?value:props.defaultValue,wasMultiple:!!props.multiple};{if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue$1){warning(false,'Select elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled select '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components');didWarnValueDefaultValue$1=true;}}}function postMountWrapper$2(element,props){var node=element;node.multiple=!!props.multiple;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value,false);}else if(props.defaultValue!=null){updateOptions(node,!!props.multiple,props.defaultValue,true);}}function postUpdateWrapper(element,props){var node=element;// After the initial mount, we control selected-ness manually so don't pass
// this value down
node._wrapperState.initialValue=undefined;var wasMultiple=node._wrapperState.wasMultiple;node._wrapperState.wasMultiple=!!props.multiple;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value,false);}else if(wasMultiple!==!!props.multiple){// For simplicity, reapply `defaultValue` if `multiple` is toggled.
if(props.defaultValue!=null){updateOptions(node,!!props.multiple,props.defaultValue,true);}else{// Revert the select back to its default unselected state.
updateOptions(node,!!props.multiple,props.multiple?[]:'',false);}}}function restoreControlledState$2(element,props){var node=element;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value,false);}}// TODO: direct imports like some-package/src/* are bad. Fix me.
var getCurrentFiberStackAddendum$5=ReactDebugCurrentFiber.getCurrentFiberStackAddendum;var didWarnValDefaultVal=false;/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */function getHostProps$3(element,props){var node=element;!(props.dangerouslySetInnerHTML==null)?invariant(false,'`dangerouslySetInnerHTML` does not make sense on <textarea>.'):void 0;// Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.  We could add a check in setTextContent
// to only set the value if/when the value differs from the node value (which would
// completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
// solution. The value can be a boolean or object so that's why it's forced
// to be a string.
var hostProps=_assign({},props,{value:undefined,defaultValue:undefined,children:''+node._wrapperState.initialValue});return hostProps;}function initWrapperState$2(element,props){var node=element;{ReactControlledValuePropTypes.checkPropTypes('textarea',props,getCurrentFiberStackAddendum$5);if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValDefaultVal){warning(false,'Textarea elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled textarea '+'and remove one of these props. More info: '+'https://fb.me/react-controlled-components');didWarnValDefaultVal=true;}}var initialValue=props.value;// Only bother fetching default value if we're going to use it
if(initialValue==null){var defaultValue=props.defaultValue;// TODO (yungsters): Remove support for children content in <textarea>.
var children=props.children;if(children!=null){{warning(false,'Use the `defaultValue` or `value` props instead of setting '+'children on <textarea>.');}!(defaultValue==null)?invariant(false,'If you supply `defaultValue` on a <textarea>, do not pass children.'):void 0;if(Array.isArray(children)){!(children.length<=1)?invariant(false,'<textarea> can only have at most one child.'):void 0;children=children[0];}defaultValue=''+children;}if(defaultValue==null){defaultValue='';}initialValue=defaultValue;}node._wrapperState={initialValue:''+initialValue};}function updateWrapper$1(element,props){var node=element;var value=props.value;if(value!=null){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var newValue=''+value;// To avoid side effects (such as losing text selection), only set value if changed
if(newValue!==node.value){node.value=newValue;}if(props.defaultValue==null){node.defaultValue=newValue;}}if(props.defaultValue!=null){node.defaultValue=props.defaultValue;}}function postMountWrapper$3(element,props){var node=element;// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
var textContent=node.textContent;// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
if(textContent===node._wrapperState.initialValue){node.value=textContent;}}function restoreControlledState$3(element,props){// DOM component is still mounted; update
updateWrapper$1(element,props);}var HTML_NAMESPACE$1='http://www.w3.org/1999/xhtml';var MATH_NAMESPACE='http://www.w3.org/1998/Math/MathML';var SVG_NAMESPACE='http://www.w3.org/2000/svg';var Namespaces={html:HTML_NAMESPACE$1,mathml:MATH_NAMESPACE,svg:SVG_NAMESPACE};// Assumes there is no parent namespace.
function getIntrinsicNamespace(type){switch(type){case'svg':return SVG_NAMESPACE;case'math':return MATH_NAMESPACE;default:return HTML_NAMESPACE$1;}}function getChildNamespace(parentNamespace,type){if(parentNamespace==null||parentNamespace===HTML_NAMESPACE$1){// No (or default) parent namespace: potential entry point.
return getIntrinsicNamespace(type);}if(parentNamespace===SVG_NAMESPACE&&type==='foreignObject'){// We're leaving SVG.
return HTML_NAMESPACE$1;}// By default, pass namespace below.
return parentNamespace;}/* globals MSApp *//**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */var createMicrosoftUnsafeLocalFunction=function createMicrosoftUnsafeLocalFunction(func){if(typeof MSApp!=='undefined'&&MSApp.execUnsafeLocalFunction){return function(arg0,arg1,arg2,arg3){MSApp.execUnsafeLocalFunction(function(){return func(arg0,arg1,arg2,arg3);});};}else{return func;}};// SVG temp container for IE lacking innerHTML
var reusableSVGContainer=void 0;/**
 * Set the innerHTML property of a node
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */var setInnerHTML=createMicrosoftUnsafeLocalFunction(function(node,html){// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
if(node.namespaceURI===Namespaces.svg&&!('innerHTML'in node)){reusableSVGContainer=reusableSVGContainer||document.createElement('div');reusableSVGContainer.innerHTML='<svg>'+html+'</svg>';var svgNode=reusableSVGContainer.firstChild;while(node.firstChild){node.removeChild(node.firstChild);}while(svgNode.firstChild){node.appendChild(svgNode.firstChild);}}else{node.innerHTML=html;}});/**
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */var setTextContent=function setTextContent(node,text){if(text){var firstChild=node.firstChild;if(firstChild&&firstChild===node.lastChild&&firstChild.nodeType===TEXT_NODE){firstChild.nodeValue=text;return;}}node.textContent=text;};/**
 * CSS properties which accept numbers but are not in units of "px".
 */var isUnitlessNumber={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,// SVG-related properties
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true};/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);}/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */var prefixes=['Webkit','ms','Moz','O'];// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];});});/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */function dangerousStyleValue(name,value,isCustomProperty){// Note that we've removed escapeTextForBrowser() calls here since the
// whole string will be escaped when the attribute is injected into
// the markup. If you provide unsafe user data here they can inject
// arbitrary CSS which may be problematic (I couldn't repro this):
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
// This is not an XSS hole but instead a potential CSS injection issue
// which has lead to a greater discussion about how we're going to
// trust URLs moving forward. See #2115901
var isEmpty=value==null||typeof value==='boolean'||value==='';if(isEmpty){return'';}if(!isCustomProperty&&typeof value==='number'&&value!==0&&!(isUnitlessNumber.hasOwnProperty(name)&&isUnitlessNumber[name])){return value+'px';// Presumes implicit 'px' suffix for unitless numbers
}return(''+value).trim();}var warnValidStyle=emptyFunction;{// 'msTransform' is correct, but the other prefixes should be capitalized
var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/;// style values shouldn't contain a semicolon
var badStyleValueWithSemicolonPattern=/;\s*$/;var warnedStyleNames={};var warnedStyleValues={};var warnedForNaNValue=false;var warnedForInfinityValue=false;var warnHyphenatedStyleName=function warnHyphenatedStyleName(name,getStack){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;warning(false,'Unsupported style property %s. Did you mean %s?%s',name,camelizeStyleName(name),getStack());};var warnBadVendoredStyleName=function warnBadVendoredStyleName(name,getStack){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;warning(false,'Unsupported vendor-prefixed style property %s. Did you mean %s?%s',name,name.charAt(0).toUpperCase()+name.slice(1),getStack());};var warnStyleValueWithSemicolon=function warnStyleValueWithSemicolon(name,value,getStack){if(warnedStyleValues.hasOwnProperty(value)&&warnedStyleValues[value]){return;}warnedStyleValues[value]=true;warning(false,"Style property values shouldn't contain a semicolon. "+'Try "%s: %s" instead.%s',name,value.replace(badStyleValueWithSemicolonPattern,''),getStack());};var warnStyleValueIsNaN=function warnStyleValueIsNaN(name,value,getStack){if(warnedForNaNValue){return;}warnedForNaNValue=true;warning(false,'`NaN` is an invalid value for the `%s` css style property.%s',name,getStack());};var warnStyleValueIsInfinity=function warnStyleValueIsInfinity(name,value,getStack){if(warnedForInfinityValue){return;}warnedForInfinityValue=true;warning(false,'`Infinity` is an invalid value for the `%s` css style property.%s',name,getStack());};warnValidStyle=function warnValidStyle(name,value,getStack){if(name.indexOf('-')>-1){warnHyphenatedStyleName(name,getStack);}else if(badVendoredStyleNamePattern.test(name)){warnBadVendoredStyleName(name,getStack);}else if(badStyleValueWithSemicolonPattern.test(value)){warnStyleValueWithSemicolon(name,value,getStack);}if(typeof value==='number'){if(isNaN(value)){warnStyleValueIsNaN(name,value,getStack);}else if(!isFinite(value)){warnStyleValueIsInfinity(name,value,getStack);}}};}var warnValidStyle$1=warnValidStyle;/**
 * Operations for dealing with CSS properties.
 *//**
 * This creates a string that is expected to be equivalent to the style
 * attribute generated by server-side rendering. It by-passes warnings and
 * security checks so it's not safe to use this value for anything other than
 * comparison. It is only used in DEV for SSR validation.
 */function createDangerousStringForStyles(styles){{var serialized='';var delimiter='';for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var styleValue=styles[styleName];if(styleValue!=null){var isCustomProperty=styleName.indexOf('--')===0;serialized+=delimiter+hyphenateStyleName(styleName)+':';serialized+=dangerousStyleValue(styleName,styleValue,isCustomProperty);delimiter=';';}}return serialized||null;}}/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */function setValueForStyles(node,styles,getStack){var style=node.style;for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var isCustomProperty=styleName.indexOf('--')===0;{if(!isCustomProperty){warnValidStyle$1(styleName,styles[styleName],getStack);}}var styleValue=dangerousStyleValue(styleName,styles[styleName],isCustomProperty);if(styleName==='float'){styleName='cssFloat';}if(isCustomProperty){style.setProperty(styleName,styleValue);}else{style[styleName]=styleValue;}}}// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var omittedCloseTags={area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true};// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.
var voidElementTags=_assign({menuitem:true},omittedCloseTags);var HTML$1='__html';function assertValidProps(tag,props,getStack){if(!props){return;}// Note the use of `==` which checks for null or undefined.
if(voidElementTags[tag]){!(props.children==null&&props.dangerouslySetInnerHTML==null)?invariant(false,'%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s',tag,getStack()):void 0;}if(props.dangerouslySetInnerHTML!=null){!(props.children==null)?invariant(false,'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'):void 0;!(_typeof(props.dangerouslySetInnerHTML)==='object'&&HTML$1 in props.dangerouslySetInnerHTML)?invariant(false,'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.'):void 0;}{warning(props.suppressContentEditableWarning||!props.contentEditable||props.children==null,'A component is `contentEditable` and contains `children` managed by '+'React. It is now your responsibility to guarantee that none of '+'those nodes are unexpectedly modified or duplicated. This is '+'probably not intentional.%s',getStack());}!(props.style==null||_typeof(props.style)==='object')?invariant(false,'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s',getStack()):void 0;}function isCustomComponent(tagName,props){if(tagName.indexOf('-')===-1){return typeof props.is==='string';}switch(tagName){// These are reserved SVG and MathML elements.
// We don't mind this whitelist too much because we expect it to never grow.
// The alternative is to track the namespace in a few places which is convoluted.
// https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
case'annotation-xml':case'color-profile':case'font-face':case'font-face-src':case'font-face-uri':case'font-face-format':case'font-face-name':case'missing-glyph':return false;default:return true;}}var ariaProperties={'aria-current':0,// state
'aria-details':0,'aria-disabled':0,// state
'aria-hidden':0,// state
'aria-invalid':0,// state
'aria-keyshortcuts':0,'aria-label':0,'aria-roledescription':0,// Widget Attributes
'aria-autocomplete':0,'aria-checked':0,'aria-expanded':0,'aria-haspopup':0,'aria-level':0,'aria-modal':0,'aria-multiline':0,'aria-multiselectable':0,'aria-orientation':0,'aria-placeholder':0,'aria-pressed':0,'aria-readonly':0,'aria-required':0,'aria-selected':0,'aria-sort':0,'aria-valuemax':0,'aria-valuemin':0,'aria-valuenow':0,'aria-valuetext':0,// Live Region Attributes
'aria-atomic':0,'aria-busy':0,'aria-live':0,'aria-relevant':0,// Drag-and-Drop Attributes
'aria-dropeffect':0,'aria-grabbed':0,// Relationship Attributes
'aria-activedescendant':0,'aria-colcount':0,'aria-colindex':0,'aria-colspan':0,'aria-controls':0,'aria-describedby':0,'aria-errormessage':0,'aria-flowto':0,'aria-labelledby':0,'aria-owns':0,'aria-posinset':0,'aria-rowcount':0,'aria-rowindex':0,'aria-rowspan':0,'aria-setsize':0};var warnedProperties={};var rARIA=new RegExp('^(aria)-['+ATTRIBUTE_NAME_CHAR+']*$');var rARIACamel=new RegExp('^(aria)[A-Z]['+ATTRIBUTE_NAME_CHAR+']*$');var hasOwnProperty=Object.prototype.hasOwnProperty;function getStackAddendum(){var stack=ReactDebugCurrentFrame.getStackAddendum();return stack!=null?stack:'';}function validateProperty(tagName,name){if(hasOwnProperty.call(warnedProperties,name)&&warnedProperties[name]){return true;}if(rARIACamel.test(name)){var ariaName='aria-'+name.slice(4).toLowerCase();var correctName=ariaProperties.hasOwnProperty(ariaName)?ariaName:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(correctName==null){warning(false,'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s',name,getStackAddendum());warnedProperties[name]=true;return true;}// aria-* attributes should be lowercase; suggest the lowercase version.
if(name!==correctName){warning(false,'Invalid ARIA attribute `%s`. Did you mean `%s`?%s',name,correctName,getStackAddendum());warnedProperties[name]=true;return true;}}if(rARIA.test(name)){var lowerCasedName=name.toLowerCase();var standardName=ariaProperties.hasOwnProperty(lowerCasedName)?lowerCasedName:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(standardName==null){warnedProperties[name]=true;return false;}// aria-* attributes should be lowercase; suggest the lowercase version.
if(name!==standardName){warning(false,'Unknown ARIA attribute `%s`. Did you mean `%s`?%s',name,standardName,getStackAddendum());warnedProperties[name]=true;return true;}}return true;}function warnInvalidARIAProps(type,props){var invalidProps=[];for(var key in props){var isValid=validateProperty(type,key);if(!isValid){invalidProps.push(key);}}var unknownPropString=invalidProps.map(function(prop){return'`'+prop+'`';}).join(', ');if(invalidProps.length===1){warning(false,'Invalid aria prop %s on <%s> tag. '+'For details, see https://fb.me/invalid-aria-prop%s',unknownPropString,type,getStackAddendum());}else if(invalidProps.length>1){warning(false,'Invalid aria props %s on <%s> tag. '+'For details, see https://fb.me/invalid-aria-prop%s',unknownPropString,type,getStackAddendum());}}function validateProperties(type,props){if(isCustomComponent(type,props)){return;}warnInvalidARIAProps(type,props);}var didWarnValueNull=false;function getStackAddendum$1(){var stack=ReactDebugCurrentFrame.getStackAddendum();return stack!=null?stack:'';}function validateProperties$1(type,props){if(type!=='input'&&type!=='textarea'&&type!=='select'){return;}if(props!=null&&props.value===null&&!didWarnValueNull){didWarnValueNull=true;if(type==='select'&&props.multiple){warning(false,'`value` prop on `%s` should not be null. '+'Consider using an empty array when `multiple` is set to `true` '+'to clear the component or `undefined` for uncontrolled components.%s',type,getStackAddendum$1());}else{warning(false,'`value` prop on `%s` should not be null. '+'Consider using an empty string to clear the component or `undefined` '+'for uncontrolled components.%s',type,getStackAddendum$1());}}}// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames={// HTML
accept:'accept',acceptcharset:'acceptCharset','accept-charset':'acceptCharset',accesskey:'accessKey',action:'action',allowfullscreen:'allowFullScreen',alt:'alt',as:'as',async:'async',autocapitalize:'autoCapitalize',autocomplete:'autoComplete',autocorrect:'autoCorrect',autofocus:'autoFocus',autoplay:'autoPlay',autosave:'autoSave',capture:'capture',cellpadding:'cellPadding',cellspacing:'cellSpacing',challenge:'challenge',charset:'charSet',checked:'checked',children:'children',cite:'cite','class':'className',classid:'classID',classname:'className',cols:'cols',colspan:'colSpan',content:'content',contenteditable:'contentEditable',contextmenu:'contextMenu',controls:'controls',controlslist:'controlsList',coords:'coords',crossorigin:'crossOrigin',dangerouslysetinnerhtml:'dangerouslySetInnerHTML',data:'data',datetime:'dateTime','default':'default',defaultchecked:'defaultChecked',defaultvalue:'defaultValue',defer:'defer',dir:'dir',disabled:'disabled',download:'download',draggable:'draggable',enctype:'encType','for':'htmlFor',form:'form',formmethod:'formMethod',formaction:'formAction',formenctype:'formEncType',formnovalidate:'formNoValidate',formtarget:'formTarget',frameborder:'frameBorder',headers:'headers',height:'height',hidden:'hidden',high:'high',href:'href',hreflang:'hrefLang',htmlfor:'htmlFor',httpequiv:'httpEquiv','http-equiv':'httpEquiv',icon:'icon',id:'id',innerhtml:'innerHTML',inputmode:'inputMode',integrity:'integrity',is:'is',itemid:'itemID',itemprop:'itemProp',itemref:'itemRef',itemscope:'itemScope',itemtype:'itemType',keyparams:'keyParams',keytype:'keyType',kind:'kind',label:'label',lang:'lang',list:'list',loop:'loop',low:'low',manifest:'manifest',marginwidth:'marginWidth',marginheight:'marginHeight',max:'max',maxlength:'maxLength',media:'media',mediagroup:'mediaGroup',method:'method',min:'min',minlength:'minLength',multiple:'multiple',muted:'muted',name:'name',nonce:'nonce',novalidate:'noValidate',open:'open',optimum:'optimum',pattern:'pattern',placeholder:'placeholder',playsinline:'playsInline',poster:'poster',preload:'preload',profile:'profile',radiogroup:'radioGroup',readonly:'readOnly',referrerpolicy:'referrerPolicy',rel:'rel',required:'required',reversed:'reversed',role:'role',rows:'rows',rowspan:'rowSpan',sandbox:'sandbox',scope:'scope',scoped:'scoped',scrolling:'scrolling',seamless:'seamless',selected:'selected',shape:'shape',size:'size',sizes:'sizes',span:'span',spellcheck:'spellCheck',src:'src',srcdoc:'srcDoc',srclang:'srcLang',srcset:'srcSet',start:'start',step:'step',style:'style',summary:'summary',tabindex:'tabIndex',target:'target',title:'title',type:'type',usemap:'useMap',value:'value',width:'width',wmode:'wmode',wrap:'wrap',// SVG
about:'about',accentheight:'accentHeight','accent-height':'accentHeight',accumulate:'accumulate',additive:'additive',alignmentbaseline:'alignmentBaseline','alignment-baseline':'alignmentBaseline',allowreorder:'allowReorder',alphabetic:'alphabetic',amplitude:'amplitude',arabicform:'arabicForm','arabic-form':'arabicForm',ascent:'ascent',attributename:'attributeName',attributetype:'attributeType',autoreverse:'autoReverse',azimuth:'azimuth',basefrequency:'baseFrequency',baselineshift:'baselineShift','baseline-shift':'baselineShift',baseprofile:'baseProfile',bbox:'bbox',begin:'begin',bias:'bias',by:'by',calcmode:'calcMode',capheight:'capHeight','cap-height':'capHeight',clip:'clip',clippath:'clipPath','clip-path':'clipPath',clippathunits:'clipPathUnits',cliprule:'clipRule','clip-rule':'clipRule',color:'color',colorinterpolation:'colorInterpolation','color-interpolation':'colorInterpolation',colorinterpolationfilters:'colorInterpolationFilters','color-interpolation-filters':'colorInterpolationFilters',colorprofile:'colorProfile','color-profile':'colorProfile',colorrendering:'colorRendering','color-rendering':'colorRendering',contentscripttype:'contentScriptType',contentstyletype:'contentStyleType',cursor:'cursor',cx:'cx',cy:'cy',d:'d',datatype:'datatype',decelerate:'decelerate',descent:'descent',diffuseconstant:'diffuseConstant',direction:'direction',display:'display',divisor:'divisor',dominantbaseline:'dominantBaseline','dominant-baseline':'dominantBaseline',dur:'dur',dx:'dx',dy:'dy',edgemode:'edgeMode',elevation:'elevation',enablebackground:'enableBackground','enable-background':'enableBackground',end:'end',exponent:'exponent',externalresourcesrequired:'externalResourcesRequired',fill:'fill',fillopacity:'fillOpacity','fill-opacity':'fillOpacity',fillrule:'fillRule','fill-rule':'fillRule',filter:'filter',filterres:'filterRes',filterunits:'filterUnits',floodopacity:'floodOpacity','flood-opacity':'floodOpacity',floodcolor:'floodColor','flood-color':'floodColor',focusable:'focusable',fontfamily:'fontFamily','font-family':'fontFamily',fontsize:'fontSize','font-size':'fontSize',fontsizeadjust:'fontSizeAdjust','font-size-adjust':'fontSizeAdjust',fontstretch:'fontStretch','font-stretch':'fontStretch',fontstyle:'fontStyle','font-style':'fontStyle',fontvariant:'fontVariant','font-variant':'fontVariant',fontweight:'fontWeight','font-weight':'fontWeight',format:'format',from:'from',fx:'fx',fy:'fy',g1:'g1',g2:'g2',glyphname:'glyphName','glyph-name':'glyphName',glyphorientationhorizontal:'glyphOrientationHorizontal','glyph-orientation-horizontal':'glyphOrientationHorizontal',glyphorientationvertical:'glyphOrientationVertical','glyph-orientation-vertical':'glyphOrientationVertical',glyphref:'glyphRef',gradienttransform:'gradientTransform',gradientunits:'gradientUnits',hanging:'hanging',horizadvx:'horizAdvX','horiz-adv-x':'horizAdvX',horizoriginx:'horizOriginX','horiz-origin-x':'horizOriginX',ideographic:'ideographic',imagerendering:'imageRendering','image-rendering':'imageRendering',in2:'in2','in':'in',inlist:'inlist',intercept:'intercept',k1:'k1',k2:'k2',k3:'k3',k4:'k4',k:'k',kernelmatrix:'kernelMatrix',kernelunitlength:'kernelUnitLength',kerning:'kerning',keypoints:'keyPoints',keysplines:'keySplines',keytimes:'keyTimes',lengthadjust:'lengthAdjust',letterspacing:'letterSpacing','letter-spacing':'letterSpacing',lightingcolor:'lightingColor','lighting-color':'lightingColor',limitingconeangle:'limitingConeAngle',local:'local',markerend:'markerEnd','marker-end':'markerEnd',markerheight:'markerHeight',markermid:'markerMid','marker-mid':'markerMid',markerstart:'markerStart','marker-start':'markerStart',markerunits:'markerUnits',markerwidth:'markerWidth',mask:'mask',maskcontentunits:'maskContentUnits',maskunits:'maskUnits',mathematical:'mathematical',mode:'mode',numoctaves:'numOctaves',offset:'offset',opacity:'opacity',operator:'operator',order:'order',orient:'orient',orientation:'orientation',origin:'origin',overflow:'overflow',overlineposition:'overlinePosition','overline-position':'overlinePosition',overlinethickness:'overlineThickness','overline-thickness':'overlineThickness',paintorder:'paintOrder','paint-order':'paintOrder',panose1:'panose1','panose-1':'panose1',pathlength:'pathLength',patterncontentunits:'patternContentUnits',patterntransform:'patternTransform',patternunits:'patternUnits',pointerevents:'pointerEvents','pointer-events':'pointerEvents',points:'points',pointsatx:'pointsAtX',pointsaty:'pointsAtY',pointsatz:'pointsAtZ',prefix:'prefix',preservealpha:'preserveAlpha',preserveaspectratio:'preserveAspectRatio',primitiveunits:'primitiveUnits',property:'property',r:'r',radius:'radius',refx:'refX',refy:'refY',renderingintent:'renderingIntent','rendering-intent':'renderingIntent',repeatcount:'repeatCount',repeatdur:'repeatDur',requiredextensions:'requiredExtensions',requiredfeatures:'requiredFeatures',resource:'resource',restart:'restart',result:'result',results:'results',rotate:'rotate',rx:'rx',ry:'ry',scale:'scale',security:'security',seed:'seed',shaperendering:'shapeRendering','shape-rendering':'shapeRendering',slope:'slope',spacing:'spacing',specularconstant:'specularConstant',specularexponent:'specularExponent',speed:'speed',spreadmethod:'spreadMethod',startoffset:'startOffset',stddeviation:'stdDeviation',stemh:'stemh',stemv:'stemv',stitchtiles:'stitchTiles',stopcolor:'stopColor','stop-color':'stopColor',stopopacity:'stopOpacity','stop-opacity':'stopOpacity',strikethroughposition:'strikethroughPosition','strikethrough-position':'strikethroughPosition',strikethroughthickness:'strikethroughThickness','strikethrough-thickness':'strikethroughThickness',string:'string',stroke:'stroke',strokedasharray:'strokeDasharray','stroke-dasharray':'strokeDasharray',strokedashoffset:'strokeDashoffset','stroke-dashoffset':'strokeDashoffset',strokelinecap:'strokeLinecap','stroke-linecap':'strokeLinecap',strokelinejoin:'strokeLinejoin','stroke-linejoin':'strokeLinejoin',strokemiterlimit:'strokeMiterlimit','stroke-miterlimit':'strokeMiterlimit',strokewidth:'strokeWidth','stroke-width':'strokeWidth',strokeopacity:'strokeOpacity','stroke-opacity':'strokeOpacity',suppresscontenteditablewarning:'suppressContentEditableWarning',suppresshydrationwarning:'suppressHydrationWarning',surfacescale:'surfaceScale',systemlanguage:'systemLanguage',tablevalues:'tableValues',targetx:'targetX',targety:'targetY',textanchor:'textAnchor','text-anchor':'textAnchor',textdecoration:'textDecoration','text-decoration':'textDecoration',textlength:'textLength',textrendering:'textRendering','text-rendering':'textRendering',to:'to',transform:'transform','typeof':'typeof',u1:'u1',u2:'u2',underlineposition:'underlinePosition','underline-position':'underlinePosition',underlinethickness:'underlineThickness','underline-thickness':'underlineThickness',unicode:'unicode',unicodebidi:'unicodeBidi','unicode-bidi':'unicodeBidi',unicoderange:'unicodeRange','unicode-range':'unicodeRange',unitsperem:'unitsPerEm','units-per-em':'unitsPerEm',unselectable:'unselectable',valphabetic:'vAlphabetic','v-alphabetic':'vAlphabetic',values:'values',vectoreffect:'vectorEffect','vector-effect':'vectorEffect',version:'version',vertadvy:'vertAdvY','vert-adv-y':'vertAdvY',vertoriginx:'vertOriginX','vert-origin-x':'vertOriginX',vertoriginy:'vertOriginY','vert-origin-y':'vertOriginY',vhanging:'vHanging','v-hanging':'vHanging',videographic:'vIdeographic','v-ideographic':'vIdeographic',viewbox:'viewBox',viewtarget:'viewTarget',visibility:'visibility',vmathematical:'vMathematical','v-mathematical':'vMathematical',vocab:'vocab',widths:'widths',wordspacing:'wordSpacing','word-spacing':'wordSpacing',writingmode:'writingMode','writing-mode':'writingMode',x1:'x1',x2:'x2',x:'x',xchannelselector:'xChannelSelector',xheight:'xHeight','x-height':'xHeight',xlinkactuate:'xlinkActuate','xlink:actuate':'xlinkActuate',xlinkarcrole:'xlinkArcrole','xlink:arcrole':'xlinkArcrole',xlinkhref:'xlinkHref','xlink:href':'xlinkHref',xlinkrole:'xlinkRole','xlink:role':'xlinkRole',xlinkshow:'xlinkShow','xlink:show':'xlinkShow',xlinktitle:'xlinkTitle','xlink:title':'xlinkTitle',xlinktype:'xlinkType','xlink:type':'xlinkType',xmlbase:'xmlBase','xml:base':'xmlBase',xmllang:'xmlLang','xml:lang':'xmlLang',xmlns:'xmlns','xml:space':'xmlSpace',xmlnsxlink:'xmlnsXlink','xmlns:xlink':'xmlnsXlink',xmlspace:'xmlSpace',y1:'y1',y2:'y2',y:'y',ychannelselector:'yChannelSelector',z:'z',zoomandpan:'zoomAndPan'};function getStackAddendum$2(){var stack=ReactDebugCurrentFrame.getStackAddendum();return stack!=null?stack:'';}{var warnedProperties$1={};var hasOwnProperty$1=Object.prototype.hasOwnProperty;var EVENT_NAME_REGEX=/^on./;var INVALID_EVENT_NAME_REGEX=/^on[^A-Z]/;var rARIA$1=new RegExp('^(aria)-['+ATTRIBUTE_NAME_CHAR+']*$');var rARIACamel$1=new RegExp('^(aria)[A-Z]['+ATTRIBUTE_NAME_CHAR+']*$');var validateProperty$1=function validateProperty$1(tagName,name,value,canUseEventSystem){if(hasOwnProperty$1.call(warnedProperties$1,name)&&warnedProperties$1[name]){return true;}var lowerCasedName=name.toLowerCase();if(lowerCasedName==='onfocusin'||lowerCasedName==='onfocusout'){warning(false,'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. '+'All React events are normalized to bubble, so onFocusIn and onFocusOut '+'are not needed/supported by React.');warnedProperties$1[name]=true;return true;}// We can't rely on the event system being injected on the server.
if(canUseEventSystem){if(registrationNameModules.hasOwnProperty(name)){return true;}var registrationName=possibleRegistrationNames.hasOwnProperty(lowerCasedName)?possibleRegistrationNames[lowerCasedName]:null;if(registrationName!=null){warning(false,'Invalid event handler property `%s`. Did you mean `%s`?%s',name,registrationName,getStackAddendum$2());warnedProperties$1[name]=true;return true;}if(EVENT_NAME_REGEX.test(name)){warning(false,'Unknown event handler property `%s`. It will be ignored.%s',name,getStackAddendum$2());warnedProperties$1[name]=true;return true;}}else if(EVENT_NAME_REGEX.test(name)){// If no event plugins have been injected, we are in a server environment.
// So we can't tell if the event name is correct for sure, but we can filter
// out known bad ones like `onclick`. We can't suggest a specific replacement though.
if(INVALID_EVENT_NAME_REGEX.test(name)){warning(false,'Invalid event handler property `%s`. '+'React events use the camelCase naming convention, for example `onClick`.%s',name,getStackAddendum$2());}warnedProperties$1[name]=true;return true;}// Let the ARIA attribute hook validate ARIA attributes
if(rARIA$1.test(name)||rARIACamel$1.test(name)){return true;}if(lowerCasedName==='innerhtml'){warning(false,'Directly setting property `innerHTML` is not permitted. '+'For more information, lookup documentation on `dangerouslySetInnerHTML`.');warnedProperties$1[name]=true;return true;}if(lowerCasedName==='aria'){warning(false,'The `aria` attribute is reserved for future use in React. '+'Pass individual `aria-` attributes instead.');warnedProperties$1[name]=true;return true;}if(lowerCasedName==='is'&&value!==null&&value!==undefined&&typeof value!=='string'){warning(false,'Received a `%s` for a string attribute `is`. If this is expected, cast '+'the value to a string.%s',typeof value==='undefined'?'undefined':_typeof(value),getStackAddendum$2());warnedProperties$1[name]=true;return true;}if(typeof value==='number'&&isNaN(value)){warning(false,'Received NaN for the `%s` attribute. If this is expected, cast '+'the value to a string.%s',name,getStackAddendum$2());warnedProperties$1[name]=true;return true;}var isReserved=isReservedProp(name);// Known attributes should match the casing specified in the property config.
if(possibleStandardNames.hasOwnProperty(lowerCasedName)){var standardName=possibleStandardNames[lowerCasedName];if(standardName!==name){warning(false,'Invalid DOM property `%s`. Did you mean `%s`?%s',name,standardName,getStackAddendum$2());warnedProperties$1[name]=true;return true;}}else if(!isReserved&&name!==lowerCasedName){// Unknown attributes should have lowercase casing since that's how they
// will be cased anyway with server rendering.
warning(false,'React does not recognize the `%s` prop on a DOM element. If you '+'intentionally want it to appear in the DOM as a custom '+'attribute, spell it as lowercase `%s` instead. '+'If you accidentally passed it from a parent component, remove '+'it from the DOM element.%s',name,lowerCasedName,getStackAddendum$2());warnedProperties$1[name]=true;return true;}if(typeof value==='boolean'&&!shouldAttributeAcceptBooleanValue(name)){if(value){warning(false,'Received `%s` for a non-boolean attribute `%s`.\n\n'+'If you want to write it to the DOM, pass a string instead: '+'%s="%s" or %s={value.toString()}.%s',value,name,name,value,name,getStackAddendum$2());}else{warning(false,'Received `%s` for a non-boolean attribute `%s`.\n\n'+'If you want to write it to the DOM, pass a string instead: '+'%s="%s" or %s={value.toString()}.\n\n'+'If you used to conditionally omit it with %s={condition && value}, '+'pass %s={condition ? value : undefined} instead.%s',value,name,name,value,name,name,name,getStackAddendum$2());}warnedProperties$1[name]=true;return true;}// Now that we've validated casing, do not validate
// data types for reserved props
if(isReserved){return true;}// Warn when a known attribute is a bad type
if(!shouldSetAttribute(name,value)){warnedProperties$1[name]=true;return false;}return true;};}var warnUnknownProperties=function warnUnknownProperties(type,props,canUseEventSystem){var unknownProps=[];for(var key in props){var isValid=validateProperty$1(type,key,props[key],canUseEventSystem);if(!isValid){unknownProps.push(key);}}var unknownPropString=unknownProps.map(function(prop){return'`'+prop+'`';}).join(', ');if(unknownProps.length===1){warning(false,'Invalid value for prop %s on <%s> tag. Either remove it from the element, '+'or pass a string or number value to keep it in the DOM. '+'For details, see https://fb.me/react-attribute-behavior%s',unknownPropString,type,getStackAddendum$2());}else if(unknownProps.length>1){warning(false,'Invalid values for props %s on <%s> tag. Either remove them from the element, '+'or pass a string or number value to keep them in the DOM. '+'For details, see https://fb.me/react-attribute-behavior%s',unknownPropString,type,getStackAddendum$2());}};function validateProperties$2(type,props,canUseEventSystem){if(isCustomComponent(type,props)){return;}warnUnknownProperties(type,props,canUseEventSystem);}// TODO: direct imports like some-package/src/* are bad. Fix me.
var getCurrentFiberOwnerName$1=ReactDebugCurrentFiber.getCurrentFiberOwnerName;var getCurrentFiberStackAddendum$2=ReactDebugCurrentFiber.getCurrentFiberStackAddendum;var didWarnInvalidHydration=false;var didWarnShadyDOM=false;var DANGEROUSLY_SET_INNER_HTML='dangerouslySetInnerHTML';var SUPPRESS_CONTENT_EDITABLE_WARNING='suppressContentEditableWarning';var SUPPRESS_HYDRATION_WARNING$1='suppressHydrationWarning';var AUTOFOCUS='autoFocus';var CHILDREN='children';var STYLE='style';var HTML='__html';var HTML_NAMESPACE=Namespaces.html;var getStack=emptyFunction.thatReturns('');{getStack=getCurrentFiberStackAddendum$2;var warnedUnknownTags={// Chrome is the only major browser not shipping <time>. But as of July
// 2017 it intends to ship it due to widespread usage. We intentionally
// *don't* warn for <time> even if it's unrecognized by Chrome because
// it soon will be, and many apps have been using it anyway.
time:true,// There are working polyfills for <dialog>. Let people use it.
dialog:true};var validatePropertiesInDevelopment=function validatePropertiesInDevelopment(type,props){validateProperties(type,props);validateProperties$1(type,props);validateProperties$2(type,props,/* canUseEventSystem */true);};// HTML parsing normalizes CR and CRLF to LF.
// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.
var NORMALIZE_NEWLINES_REGEX=/\r\n?/g;var NORMALIZE_NULL_AND_REPLACEMENT_REGEX=/\u0000|\uFFFD/g;var normalizeMarkupForTextOrAttribute=function normalizeMarkupForTextOrAttribute(markup){var markupString=typeof markup==='string'?markup:''+markup;return markupString.replace(NORMALIZE_NEWLINES_REGEX,'\n').replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX,'');};var warnForTextDifference=function warnForTextDifference(serverText,clientText){if(didWarnInvalidHydration){return;}var normalizedClientText=normalizeMarkupForTextOrAttribute(clientText);var normalizedServerText=normalizeMarkupForTextOrAttribute(serverText);if(normalizedServerText===normalizedClientText){return;}didWarnInvalidHydration=true;warning(false,'Text content did not match. Server: "%s" Client: "%s"',normalizedServerText,normalizedClientText);};var warnForPropDifference=function warnForPropDifference(propName,serverValue,clientValue){if(didWarnInvalidHydration){return;}var normalizedClientValue=normalizeMarkupForTextOrAttribute(clientValue);var normalizedServerValue=normalizeMarkupForTextOrAttribute(serverValue);if(normalizedServerValue===normalizedClientValue){return;}didWarnInvalidHydration=true;warning(false,'Prop `%s` did not match. Server: %s Client: %s',propName,JSON.stringify(normalizedServerValue),JSON.stringify(normalizedClientValue));};var warnForExtraAttributes=function warnForExtraAttributes(attributeNames){if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;var names=[];attributeNames.forEach(function(name){names.push(name);});warning(false,'Extra attributes from the server: %s',names);};var warnForInvalidEventListener=function warnForInvalidEventListener(registrationName,listener){if(listener===false){warning(false,'Expected `%s` listener to be a function, instead got `false`.\n\n'+'If you used to conditionally omit it with %s={condition && value}, '+'pass %s={condition ? value : undefined} instead.%s',registrationName,registrationName,registrationName,getCurrentFiberStackAddendum$2());}else{warning(false,'Expected `%s` listener to be a function, instead got a value of `%s` type.%s',registrationName,typeof listener==='undefined'?'undefined':_typeof(listener),getCurrentFiberStackAddendum$2());}};// Parse the HTML and read it back to normalize the HTML string so that it
// can be used for comparison.
var normalizeHTML=function normalizeHTML(parent,html){// We could have created a separate document here to avoid
// re-initializing custom elements if they exist. But this breaks
// how <noscript> is being handled. So we use the same document.
// See the discussion in https://github.com/facebook/react/pull/11157.
var testElement=parent.namespaceURI===HTML_NAMESPACE?parent.ownerDocument.createElement(parent.tagName):parent.ownerDocument.createElementNS(parent.namespaceURI,parent.tagName);testElement.innerHTML=html;return testElement.innerHTML;};}function ensureListeningTo(rootContainerElement,registrationName){var isDocumentOrFragment=rootContainerElement.nodeType===DOCUMENT_NODE||rootContainerElement.nodeType===DOCUMENT_FRAGMENT_NODE;var doc=isDocumentOrFragment?rootContainerElement:rootContainerElement.ownerDocument;listenTo(registrationName,doc);}function getOwnerDocumentFromRootContainer(rootContainerElement){return rootContainerElement.nodeType===DOCUMENT_NODE?rootContainerElement:rootContainerElement.ownerDocument;}// There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var mediaEvents={topAbort:'abort',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topSeeked:'seeked',topSeeking:'seeking',topStalled:'stalled',topSuspend:'suspend',topTimeUpdate:'timeupdate',topVolumeChange:'volumechange',topWaiting:'waiting'};function trapClickOnNonInteractiveElement(node){// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
node.onclick=emptyFunction;}function setInitialDOMProperties(tag,domElement,rootContainerElement,nextProps,isCustomComponentTag){for(var propKey in nextProps){if(!nextProps.hasOwnProperty(propKey)){continue;}var nextProp=nextProps[propKey];if(propKey===STYLE){{if(nextProp){// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(nextProp);}}// Relies on `updateStylesByID` not mutating `styleUpdates`.
setValueForStyles(domElement,nextProp,getStack);}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var nextHtml=nextProp?nextProp[HTML]:undefined;if(nextHtml!=null){setInnerHTML(domElement,nextHtml);}}else if(propKey===CHILDREN){if(typeof nextProp==='string'){// Avoid setting initial textContent when the text is empty. In IE11 setting
// textContent on a <textarea> will cause the placeholder to not
// show within the <textarea> until it has been focused and blurred again.
// https://github.com/facebook/react/issues/6731#issuecomment-254874553
var canSetTextContent=tag!=='textarea'||nextProp!=='';if(canSetTextContent){setTextContent(domElement,nextProp);}}else if(typeof nextProp==='number'){setTextContent(domElement,''+nextProp);}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING$1){// Noop
}else if(propKey===AUTOFOCUS){// We polyfill it separately on the client during commit.
// We blacklist it here rather than in the property list because we emit it in SSR.
}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp!=null){if(true&&typeof nextProp!=='function'){warnForInvalidEventListener(propKey,nextProp);}ensureListeningTo(rootContainerElement,propKey);}}else if(isCustomComponentTag){setValueForAttribute(domElement,propKey,nextProp);}else if(nextProp!=null){// If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertently setting to a string. This
// brings us in line with the same behavior we have on initial render.
setValueForProperty(domElement,propKey,nextProp);}}}function updateDOMProperties(domElement,updatePayload,wasCustomComponentTag,isCustomComponentTag){// TODO: Handle wasCustomComponentTag
for(var i=0;i<updatePayload.length;i+=2){var propKey=updatePayload[i];var propValue=updatePayload[i+1];if(propKey===STYLE){setValueForStyles(domElement,propValue,getStack);}else if(propKey===DANGEROUSLY_SET_INNER_HTML){setInnerHTML(domElement,propValue);}else if(propKey===CHILDREN){setTextContent(domElement,propValue);}else if(isCustomComponentTag){if(propValue!=null){setValueForAttribute(domElement,propKey,propValue);}else{deleteValueForAttribute(domElement,propKey);}}else if(propValue!=null){setValueForProperty(domElement,propKey,propValue);}else{// If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertently setting to a string. This
// brings us in line with the same behavior we have on initial render.
deleteValueForProperty(domElement,propKey);}}}function createElement$1(type,props,rootContainerElement,parentNamespace){// We create tags in the namespace of their parent container, except HTML
var ownerDocument=getOwnerDocumentFromRootContainer(rootContainerElement);var domElement;var namespaceURI=parentNamespace;if(namespaceURI===HTML_NAMESPACE){namespaceURI=getIntrinsicNamespace(type);}if(namespaceURI===HTML_NAMESPACE){{var isCustomComponentTag=isCustomComponent(type,props);// Should this check be gated by parent namespace? Not sure we want to
// allow <SVG> or <mATH>.
warning(isCustomComponentTag||type===type.toLowerCase(),'<%s /> is using uppercase HTML. Always use lowercase HTML tags '+'in React.',type);}if(type==='script'){// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var div=ownerDocument.createElement('div');div.innerHTML='<script><'+'/script>';// eslint-disable-line
// This is guaranteed to yield a script element.
var firstChild=div.firstChild;domElement=div.removeChild(firstChild);}else if(typeof props.is==='string'){// $FlowIssue `createElement` should be updated for Web Components
domElement=ownerDocument.createElement(type,{is:props.is});}else{// Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
// See discussion in https://github.com/facebook/react/pull/6896
// and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
domElement=ownerDocument.createElement(type);}}else{domElement=ownerDocument.createElementNS(namespaceURI,type);}{if(namespaceURI===HTML_NAMESPACE){if(!isCustomComponentTag&&Object.prototype.toString.call(domElement)==='[object HTMLUnknownElement]'&&!Object.prototype.hasOwnProperty.call(warnedUnknownTags,type)){warnedUnknownTags[type]=true;warning(false,'The tag <%s> is unrecognized in this browser. '+'If you meant to render a React component, start its name with '+'an uppercase letter.',type);}}}return domElement;}function createTextNode$1(text,rootContainerElement){return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);}function setInitialProperties$1(domElement,tag,rawProps,rootContainerElement){var isCustomComponentTag=isCustomComponent(tag,rawProps);{validatePropertiesInDevelopment(tag,rawProps);if(isCustomComponentTag&&!didWarnShadyDOM&&domElement.shadyRoot){warning(false,'%s is using shady DOM. Using shady DOM with React can '+'cause things to break subtly.',getCurrentFiberOwnerName$1()||'A component');didWarnShadyDOM=true;}}// TODO: Make sure that we check isMounted before firing any of these events.
var props;switch(tag){case'iframe':case'object':trapBubbledEvent('topLoad','load',domElement);props=rawProps;break;case'video':case'audio':// Create listener for each media event
for(var event in mediaEvents){if(mediaEvents.hasOwnProperty(event)){trapBubbledEvent(event,mediaEvents[event],domElement);}}props=rawProps;break;case'source':trapBubbledEvent('topError','error',domElement);props=rawProps;break;case'img':case'image':trapBubbledEvent('topError','error',domElement);trapBubbledEvent('topLoad','load',domElement);props=rawProps;break;case'form':trapBubbledEvent('topReset','reset',domElement);trapBubbledEvent('topSubmit','submit',domElement);props=rawProps;break;case'details':trapBubbledEvent('topToggle','toggle',domElement);props=rawProps;break;case'input':initWrapperState(domElement,rawProps);props=getHostProps(domElement,rawProps);trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;case'option':validateProps(domElement,rawProps);props=getHostProps$1(domElement,rawProps);break;case'select':initWrapperState$1(domElement,rawProps);props=getHostProps$2(domElement,rawProps);trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;case'textarea':initWrapperState$2(domElement,rawProps);props=getHostProps$3(domElement,rawProps);trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;default:props=rawProps;}assertValidProps(tag,props,getStack);setInitialDOMProperties(tag,domElement,rootContainerElement,props,isCustomComponentTag);switch(tag){case'input':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper(domElement,rawProps);break;case'textarea':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper$3(domElement,rawProps);break;case'option':postMountWrapper$1(domElement,rawProps);break;case'select':postMountWrapper$2(domElement,rawProps);break;default:if(typeof props.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}}// Calculate the diff between the two objects.
function diffProperties$1(domElement,tag,lastRawProps,nextRawProps,rootContainerElement){{validatePropertiesInDevelopment(tag,nextRawProps);}var updatePayload=null;var lastProps;var nextProps;switch(tag){case'input':lastProps=getHostProps(domElement,lastRawProps);nextProps=getHostProps(domElement,nextRawProps);updatePayload=[];break;case'option':lastProps=getHostProps$1(domElement,lastRawProps);nextProps=getHostProps$1(domElement,nextRawProps);updatePayload=[];break;case'select':lastProps=getHostProps$2(domElement,lastRawProps);nextProps=getHostProps$2(domElement,nextRawProps);updatePayload=[];break;case'textarea':lastProps=getHostProps$3(domElement,lastRawProps);nextProps=getHostProps$3(domElement,nextRawProps);updatePayload=[];break;default:lastProps=lastRawProps;nextProps=nextRawProps;if(typeof lastProps.onClick!=='function'&&typeof nextProps.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}assertValidProps(tag,nextProps,getStack);var propKey;var styleName;var styleUpdates=null;for(propKey in lastProps){if(nextProps.hasOwnProperty(propKey)||!lastProps.hasOwnProperty(propKey)||lastProps[propKey]==null){continue;}if(propKey===STYLE){var lastStyle=lastProps[propKey];for(styleName in lastStyle){if(lastStyle.hasOwnProperty(styleName)){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]='';}}}else if(propKey===DANGEROUSLY_SET_INNER_HTML||propKey===CHILDREN){// Noop. This is handled by the clear text mechanism.
}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING$1){// Noop
}else if(propKey===AUTOFOCUS){// Noop. It doesn't work on updates anyway.
}else if(registrationNameModules.hasOwnProperty(propKey)){// This is a special case. If any listener updates we need to ensure
// that the "current" fiber pointer gets updated so we need a commit
// to update this element.
if(!updatePayload){updatePayload=[];}}else{// For all other deleted properties we add it to the queue. We use
// the whitelist in the commit phase instead.
(updatePayload=updatePayload||[]).push(propKey,null);}}for(propKey in nextProps){var nextProp=nextProps[propKey];var lastProp=lastProps!=null?lastProps[propKey]:undefined;if(!nextProps.hasOwnProperty(propKey)||nextProp===lastProp||nextProp==null&&lastProp==null){continue;}if(propKey===STYLE){{if(nextProp){// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(nextProp);}}if(lastProp){// Unset styles on `lastProp` but not on `nextProp`.
for(styleName in lastProp){if(lastProp.hasOwnProperty(styleName)&&(!nextProp||!nextProp.hasOwnProperty(styleName))){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]='';}}// Update styles that changed since `lastProp`.
for(styleName in nextProp){if(nextProp.hasOwnProperty(styleName)&&lastProp[styleName]!==nextProp[styleName]){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]=nextProp[styleName];}}}else{// Relies on `updateStylesByID` not mutating `styleUpdates`.
if(!styleUpdates){if(!updatePayload){updatePayload=[];}updatePayload.push(propKey,styleUpdates);}styleUpdates=nextProp;}}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var nextHtml=nextProp?nextProp[HTML]:undefined;var lastHtml=lastProp?lastProp[HTML]:undefined;if(nextHtml!=null){if(lastHtml!==nextHtml){(updatePayload=updatePayload||[]).push(propKey,''+nextHtml);}}else{// TODO: It might be too late to clear this if we have children
// inserted already.
}}else if(propKey===CHILDREN){if(lastProp!==nextProp&&(typeof nextProp==='string'||typeof nextProp==='number')){(updatePayload=updatePayload||[]).push(propKey,''+nextProp);}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING$1){// Noop
}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp!=null){// We eagerly listen to this even though we haven't committed yet.
if(true&&typeof nextProp!=='function'){warnForInvalidEventListener(propKey,nextProp);}ensureListeningTo(rootContainerElement,propKey);}if(!updatePayload&&lastProp!==nextProp){// This is a special case. If any listener updates we need to ensure
// that the "current" props pointer gets updated so we need a commit
// to update this element.
updatePayload=[];}}else{// For any other property we always add it to the queue and then we
// filter it out using the whitelist during the commit.
(updatePayload=updatePayload||[]).push(propKey,nextProp);}}if(styleUpdates){(updatePayload=updatePayload||[]).push(STYLE,styleUpdates);}return updatePayload;}// Apply the diff.
function updateProperties$1(domElement,updatePayload,tag,lastRawProps,nextRawProps){// Update checked *before* name.
// In the middle of an update, it is possible to have multiple checked.
// When a checked radio tries to change name, browser makes another radio's checked false.
if(tag==='input'&&nextRawProps.type==='radio'&&nextRawProps.name!=null){updateChecked(domElement,nextRawProps);}var wasCustomComponentTag=isCustomComponent(tag,lastRawProps);var isCustomComponentTag=isCustomComponent(tag,nextRawProps);// Apply the diff.
updateDOMProperties(domElement,updatePayload,wasCustomComponentTag,isCustomComponentTag);// TODO: Ensure that an update gets scheduled if any of the special props
// changed.
switch(tag){case'input':// Update the wrapper around inputs *after* updating props. This has to
// happen after `updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
updateWrapper(domElement,nextRawProps);break;case'textarea':updateWrapper$1(domElement,nextRawProps);break;case'select':// <select> value update needs to occur after <option> children
// reconciliation
postUpdateWrapper(domElement,nextRawProps);break;}}function diffHydratedProperties$1(domElement,tag,rawProps,parentNamespace,rootContainerElement){{var suppressHydrationWarning=rawProps[SUPPRESS_HYDRATION_WARNING$1]===true;var isCustomComponentTag=isCustomComponent(tag,rawProps);validatePropertiesInDevelopment(tag,rawProps);if(isCustomComponentTag&&!didWarnShadyDOM&&domElement.shadyRoot){warning(false,'%s is using shady DOM. Using shady DOM with React can '+'cause things to break subtly.',getCurrentFiberOwnerName$1()||'A component');didWarnShadyDOM=true;}}// TODO: Make sure that we check isMounted before firing any of these events.
switch(tag){case'iframe':case'object':trapBubbledEvent('topLoad','load',domElement);break;case'video':case'audio':// Create listener for each media event
for(var event in mediaEvents){if(mediaEvents.hasOwnProperty(event)){trapBubbledEvent(event,mediaEvents[event],domElement);}}break;case'source':trapBubbledEvent('topError','error',domElement);break;case'img':case'image':trapBubbledEvent('topError','error',domElement);trapBubbledEvent('topLoad','load',domElement);break;case'form':trapBubbledEvent('topReset','reset',domElement);trapBubbledEvent('topSubmit','submit',domElement);break;case'details':trapBubbledEvent('topToggle','toggle',domElement);break;case'input':initWrapperState(domElement,rawProps);trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;case'option':validateProps(domElement,rawProps);break;case'select':initWrapperState$1(domElement,rawProps);trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;case'textarea':initWrapperState$2(domElement,rawProps);trapBubbledEvent('topInvalid','invalid',domElement);// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
ensureListeningTo(rootContainerElement,'onChange');break;}assertValidProps(tag,rawProps,getStack);{var extraAttributeNames=new Set();var attributes=domElement.attributes;for(var i=0;i<attributes.length;i++){var name=attributes[i].name.toLowerCase();switch(name){// Built-in SSR attribute is whitelisted
case'data-reactroot':break;// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case'value':break;case'checked':break;case'selected':break;default:// Intentionally use the original name.
// See discussion in https://github.com/facebook/react/pull/10676.
extraAttributeNames.add(attributes[i].name);}}}var updatePayload=null;for(var propKey in rawProps){if(!rawProps.hasOwnProperty(propKey)){continue;}var nextProp=rawProps[propKey];if(propKey===CHILDREN){// For text content children we compare against textContent. This
// might match additional HTML that is hidden when we read it using
// textContent. E.g. "foo" will match "f<span>oo</span>" but that still
// satisfies our requirement. Our requirement is not to produce perfect
// HTML and attributes. Ideally we should preserve structure but it's
// ok not to if the visible content is still enough to indicate what
// even listeners these nodes might be wired up to.
// TODO: Warn if there is more than a single textNode as a child.
// TODO: Should we use domElement.firstChild.nodeValue to compare?
if(typeof nextProp==='string'){if(domElement.textContent!==nextProp){if(true&&!suppressHydrationWarning){warnForTextDifference(domElement.textContent,nextProp);}updatePayload=[CHILDREN,nextProp];}}else if(typeof nextProp==='number'){if(domElement.textContent!==''+nextProp){if(true&&!suppressHydrationWarning){warnForTextDifference(domElement.textContent,nextProp);}updatePayload=[CHILDREN,''+nextProp];}}}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp!=null){if(true&&typeof nextProp!=='function'){warnForInvalidEventListener(propKey,nextProp);}ensureListeningTo(rootContainerElement,propKey);}}else{// Validate that the properties correspond to their expected values.
var serverValue;var propertyInfo;if(suppressHydrationWarning){// Don't bother comparing. We're ignoring all these warnings.
}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING$1||// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
propKey==='value'||propKey==='checked'||propKey==='selected'){// Noop
}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var rawHtml=nextProp?nextProp[HTML]||'':'';var serverHTML=domElement.innerHTML;var expectedHTML=normalizeHTML(domElement,rawHtml);if(expectedHTML!==serverHTML){warnForPropDifference(propKey,serverHTML,expectedHTML);}}else if(propKey===STYLE){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames['delete'](propKey);var expectedStyle=createDangerousStringForStyles(nextProp);serverValue=domElement.getAttribute('style');if(expectedStyle!==serverValue){warnForPropDifference(propKey,serverValue,expectedStyle);}}else if(isCustomComponentTag){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames['delete'](propKey.toLowerCase());serverValue=getValueForAttribute(domElement,propKey,nextProp);if(nextProp!==serverValue){warnForPropDifference(propKey,serverValue,nextProp);}}else if(shouldSetAttribute(propKey,nextProp)){if(propertyInfo=getPropertyInfo(propKey)){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames['delete'](propertyInfo.attributeName);serverValue=getValueForProperty(domElement,propKey,nextProp);}else{var ownNamespace=parentNamespace;if(ownNamespace===HTML_NAMESPACE){ownNamespace=getIntrinsicNamespace(tag);}if(ownNamespace===HTML_NAMESPACE){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames['delete'](propKey.toLowerCase());}else{// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames['delete'](propKey);}serverValue=getValueForAttribute(domElement,propKey,nextProp);}if(nextProp!==serverValue){warnForPropDifference(propKey,serverValue,nextProp);}}}}{// $FlowFixMe - Should be inferred as not undefined.
if(extraAttributeNames.size>0&&!suppressHydrationWarning){// $FlowFixMe - Should be inferred as not undefined.
warnForExtraAttributes(extraAttributeNames);}}switch(tag){case'input':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper(domElement,rawProps);break;case'textarea':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper$3(domElement,rawProps);break;case'select':case'option':// For input and textarea we current always set the value property at
// post mount to force it to diverge from attributes. However, for
// option and select we don't quite do the same thing and select
// is not resilient to the DOM state changing so we don't do that here.
// TODO: Consider not doing this for input and textarea.
break;default:if(typeof rawProps.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}return updatePayload;}function diffHydratedText$1(textNode,text){var isDifferent=textNode.nodeValue!==text;return isDifferent;}function warnForUnmatchedText$1(textNode,text){{warnForTextDifference(textNode.nodeValue,text);}}function warnForDeletedHydratableElement$1(parentNode,child){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;warning(false,'Did not expect server HTML to contain a <%s> in <%s>.',child.nodeName.toLowerCase(),parentNode.nodeName.toLowerCase());}}function warnForDeletedHydratableText$1(parentNode,child){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;warning(false,'Did not expect server HTML to contain the text node "%s" in <%s>.',child.nodeValue,parentNode.nodeName.toLowerCase());}}function warnForInsertedHydratedElement$1(parentNode,tag,props){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;warning(false,'Expected server HTML to contain a matching <%s> in <%s>.',tag,parentNode.nodeName.toLowerCase());}}function warnForInsertedHydratedText$1(parentNode,text){{if(text===''){// We expect to insert empty text nodes since they're not represented in
// the HTML.
// TODO: Remove this special case if we can just avoid inserting empty
// text nodes.
return;}if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;warning(false,'Expected server HTML to contain a matching text node for "%s" in <%s>.',text,parentNode.nodeName.toLowerCase());}}function restoreControlledState(domElement,tag,props){switch(tag){case'input':restoreControlledState$1(domElement,props);return;case'textarea':restoreControlledState$3(domElement,props);return;case'select':restoreControlledState$2(domElement,props);return;}}var ReactDOMFiberComponent=Object.freeze({createElement:createElement$1,createTextNode:createTextNode$1,setInitialProperties:setInitialProperties$1,diffProperties:diffProperties$1,updateProperties:updateProperties$1,diffHydratedProperties:diffHydratedProperties$1,diffHydratedText:diffHydratedText$1,warnForUnmatchedText:warnForUnmatchedText$1,warnForDeletedHydratableElement:warnForDeletedHydratableElement$1,warnForDeletedHydratableText:warnForDeletedHydratableText$1,warnForInsertedHydratedElement:warnForInsertedHydratedElement$1,warnForInsertedHydratedText:warnForInsertedHydratedText$1,restoreControlledState:restoreControlledState});// TODO: direct imports like some-package/src/* are bad. Fix me.
var getCurrentFiberStackAddendum$6=ReactDebugCurrentFiber.getCurrentFiberStackAddendum;var validateDOMNesting=emptyFunction;{// This validation code was written based on the HTML5 parsing spec:
// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
//
// Note: this does not catch all invalid nesting, nor does it try to (as it's
// not clear what practical benefit doing so provides); instead, we warn only
// for cases where the parser will give a parse tree differing from what React
// intended. For example, <b><div></div></b> is invalid but we don't warn
// because it still parses correctly; we do warn for other cases like nested
// <p> tags where the beginning of the second element implicitly closes the
// first, causing a confusing mess.
// https://html.spec.whatwg.org/multipage/syntax.html#special
var specialTags=['address','applet','area','article','aside','base','basefont','bgsound','blockquote','body','br','button','caption','center','col','colgroup','dd','details','dir','div','dl','dt','embed','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','iframe','img','input','isindex','li','link','listing','main','marquee','menu','menuitem','meta','nav','noembed','noframes','noscript','object','ol','p','param','plaintext','pre','script','section','select','source','style','summary','table','tbody','td','template','textarea','tfoot','th','thead','title','tr','track','ul','wbr','xmp'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
var inScopeTags=['applet','caption','html','table','td','th','marquee','object','template',// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
'foreignObject','desc','title'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
var buttonScopeTags=inScopeTags.concat(['button']);// https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
var impliedEndTags=['dd','dt','li','option','optgroup','p','rp','rt'];var emptyAncestorInfo={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};var updatedAncestorInfo$1=function updatedAncestorInfo$1(oldInfo,tag,instance){var ancestorInfo=_assign({},oldInfo||emptyAncestorInfo);var info={tag:tag,instance:instance};if(inScopeTags.indexOf(tag)!==-1){ancestorInfo.aTagInScope=null;ancestorInfo.buttonTagInScope=null;ancestorInfo.nobrTagInScope=null;}if(buttonScopeTags.indexOf(tag)!==-1){ancestorInfo.pTagInButtonScope=null;}// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
if(specialTags.indexOf(tag)!==-1&&tag!=='address'&&tag!=='div'&&tag!=='p'){ancestorInfo.listItemTagAutoclosing=null;ancestorInfo.dlItemTagAutoclosing=null;}ancestorInfo.current=info;if(tag==='form'){ancestorInfo.formTag=info;}if(tag==='a'){ancestorInfo.aTagInScope=info;}if(tag==='button'){ancestorInfo.buttonTagInScope=info;}if(tag==='nobr'){ancestorInfo.nobrTagInScope=info;}if(tag==='p'){ancestorInfo.pTagInButtonScope=info;}if(tag==='li'){ancestorInfo.listItemTagAutoclosing=info;}if(tag==='dd'||tag==='dt'){ancestorInfo.dlItemTagAutoclosing=info;}return ancestorInfo;};/**
   * Returns whether
   */var isTagValidWithParent=function isTagValidWithParent(tag,parentTag){// First, let's check if we're in an unusual parsing mode...
switch(parentTag){// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case'select':return tag==='option'||tag==='optgroup'||tag==='#text';case'optgroup':return tag==='option'||tag==='#text';// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case'option':return tag==='#text';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case'tr':return tag==='th'||tag==='td'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case'tbody':case'thead':case'tfoot':return tag==='tr'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case'colgroup':return tag==='col'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case'table':return tag==='caption'||tag==='colgroup'||tag==='tbody'||tag==='tfoot'||tag==='thead'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case'head':return tag==='base'||tag==='basefont'||tag==='bgsound'||tag==='link'||tag==='meta'||tag==='title'||tag==='noscript'||tag==='noframes'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case'html':return tag==='head'||tag==='body';case'#document':return tag==='html';}// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(tag){case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return parentTag!=='h1'&&parentTag!=='h2'&&parentTag!=='h3'&&parentTag!=='h4'&&parentTag!=='h5'&&parentTag!=='h6';case'rp':case'rt':return impliedEndTags.indexOf(parentTag)===-1;case'body':case'caption':case'col':case'colgroup':case'frame':case'head':case'html':case'tbody':case'td':case'tfoot':case'th':case'thead':case'tr':// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return parentTag==null;}return true;};/**
   * Returns whether
   */var findInvalidAncestorForTag=function findInvalidAncestorForTag(tag,ancestorInfo){switch(tag){case'address':case'article':case'aside':case'blockquote':case'center':case'details':case'dialog':case'dir':case'div':case'dl':case'fieldset':case'figcaption':case'figure':case'footer':case'header':case'hgroup':case'main':case'menu':case'nav':case'ol':case'p':case'section':case'summary':case'ul':case'pre':case'listing':case'table':case'hr':case'xmp':case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return ancestorInfo.pTagInButtonScope;case'form':return ancestorInfo.formTag||ancestorInfo.pTagInButtonScope;case'li':return ancestorInfo.listItemTagAutoclosing;case'dd':case'dt':return ancestorInfo.dlItemTagAutoclosing;case'button':return ancestorInfo.buttonTagInScope;case'a':// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return ancestorInfo.aTagInScope;case'nobr':return ancestorInfo.nobrTagInScope;}return null;};var didWarn={};validateDOMNesting=function validateDOMNesting(childTag,childText,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;if(childText!=null){warning(childTag==null,'validateDOMNesting: when childText is passed, childTag should be null');childTag='#text';}var invalidParent=isTagValidWithParent(childTag,parentTag)?null:parentInfo;var invalidAncestor=invalidParent?null:findInvalidAncestorForTag(childTag,ancestorInfo);var invalidParentOrAncestor=invalidParent||invalidAncestor;if(!invalidParentOrAncestor){return;}var ancestorTag=invalidParentOrAncestor.tag;var addendum=getCurrentFiberStackAddendum$6();var warnKey=!!invalidParent+'|'+childTag+'|'+ancestorTag+'|'+addendum;if(didWarn[warnKey]){return;}didWarn[warnKey]=true;var tagDisplayName=childTag;var whitespaceInfo='';if(childTag==='#text'){if(/\S/.test(childText)){tagDisplayName='Text nodes';}else{tagDisplayName='Whitespace text nodes';whitespaceInfo=" Make sure you don't have any extra whitespace between tags on "+'each line of your source code.';}}else{tagDisplayName='<'+childTag+'>';}if(invalidParent){var info='';if(ancestorTag==='table'&&childTag==='tr'){info+=' Add a <tbody> to your code to match the DOM tree generated by '+'the browser.';}warning(false,'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s',tagDisplayName,ancestorTag,whitespaceInfo,info,addendum);}else{warning(false,'validateDOMNesting(...): %s cannot appear as a descendant of '+'<%s>.%s',tagDisplayName,ancestorTag,addendum);}};// TODO: turn this into a named export
validateDOMNesting.updatedAncestorInfo=updatedAncestorInfo$1;// For testing
validateDOMNesting.isTagValidInContext=function(tag,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;return isTagValidWithParent(tag,parentTag)&&!findInvalidAncestorForTag(tag,ancestorInfo);};}var validateDOMNesting$1=validateDOMNesting;// TODO: direct imports like some-package/src/* are bad. Fix me.
var createElement=createElement$1;var createTextNode=createTextNode$1;var setInitialProperties=setInitialProperties$1;var diffProperties=diffProperties$1;var updateProperties=updateProperties$1;var diffHydratedProperties=diffHydratedProperties$1;var diffHydratedText=diffHydratedText$1;var warnForUnmatchedText=warnForUnmatchedText$1;var warnForDeletedHydratableElement=warnForDeletedHydratableElement$1;var warnForDeletedHydratableText=warnForDeletedHydratableText$1;var warnForInsertedHydratedElement=warnForInsertedHydratedElement$1;var warnForInsertedHydratedText=warnForInsertedHydratedText$1;var updatedAncestorInfo=validateDOMNesting$1.updatedAncestorInfo;var precacheFiberNode=precacheFiberNode$1;var updateFiberProps=updateFiberProps$1;{var SUPPRESS_HYDRATION_WARNING='suppressHydrationWarning';if(typeof Map!=='function'||Map.prototype==null||typeof Map.prototype.forEach!=='function'||typeof Set!=='function'||Set.prototype==null||typeof Set.prototype.clear!=='function'||typeof Set.prototype.forEach!=='function'){warning(false,'React depends on Map and Set built-in types. Make sure that you load a '+'polyfill in older browsers. http://fb.me/react-polyfills');}}injection$3.injectFiberControlledHostComponent(ReactDOMFiberComponent);var eventsEnabled=null;var selectionInformation=null;/**
 * True if the supplied DOM node is a valid node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid DOM node.
 * @internal
 */function isValidContainer(node){return!!(node&&(node.nodeType===ELEMENT_NODE||node.nodeType===DOCUMENT_NODE||node.nodeType===DOCUMENT_FRAGMENT_NODE||node.nodeType===COMMENT_NODE&&node.nodeValue===' react-mount-point-unstable '));}function getReactRootElementInContainer(container){if(!container){return null;}if(container.nodeType===DOCUMENT_NODE){return container.documentElement;}else{return container.firstChild;}}function shouldHydrateDueToLegacyHeuristic(container){var rootElement=getReactRootElementInContainer(container);return!!(rootElement&&rootElement.nodeType===ELEMENT_NODE&&rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME));}function shouldAutoFocusHostComponent(type,props){switch(type){case'button':case'input':case'select':case'textarea':return!!props.autoFocus;}return false;}var DOMRenderer=reactReconciler({getRootHostContext:function getRootHostContext(rootContainerInstance){var type=void 0;var namespace=void 0;var nodeType=rootContainerInstance.nodeType;switch(nodeType){case DOCUMENT_NODE:case DOCUMENT_FRAGMENT_NODE:{type=nodeType===DOCUMENT_NODE?'#document':'#fragment';var root=rootContainerInstance.documentElement;namespace=root?root.namespaceURI:getChildNamespace(null,'');break;}default:{var container=nodeType===COMMENT_NODE?rootContainerInstance.parentNode:rootContainerInstance;var ownNamespace=container.namespaceURI||null;type=container.tagName;namespace=getChildNamespace(ownNamespace,type);break;}}{var validatedTag=type.toLowerCase();var _ancestorInfo=updatedAncestorInfo(null,validatedTag,null);return{namespace:namespace,ancestorInfo:_ancestorInfo};}return namespace;},getChildHostContext:function getChildHostContext(parentHostContext,type){{var parentHostContextDev=parentHostContext;var _namespace=getChildNamespace(parentHostContextDev.namespace,type);var _ancestorInfo2=updatedAncestorInfo(parentHostContextDev.ancestorInfo,type,null);return{namespace:_namespace,ancestorInfo:_ancestorInfo2};}var parentNamespace=parentHostContext;return getChildNamespace(parentNamespace,type);},getPublicInstance:function getPublicInstance(instance){return instance;},prepareForCommit:function prepareForCommit(){eventsEnabled=isEnabled();selectionInformation=getSelectionInformation();setEnabled(false);},resetAfterCommit:function resetAfterCommit(){restoreSelection(selectionInformation);selectionInformation=null;setEnabled(eventsEnabled);eventsEnabled=null;},createInstance:function createInstance(type,props,rootContainerInstance,hostContext,internalInstanceHandle){var parentNamespace=void 0;{// TODO: take namespace into account when validating.
var hostContextDev=hostContext;validateDOMNesting$1(type,null,hostContextDev.ancestorInfo);if(typeof props.children==='string'||typeof props.children==='number'){var string=''+props.children;var ownAncestorInfo=updatedAncestorInfo(hostContextDev.ancestorInfo,type,null);validateDOMNesting$1(null,string,ownAncestorInfo);}parentNamespace=hostContextDev.namespace;}var domElement=createElement(type,props,rootContainerInstance,parentNamespace);precacheFiberNode(internalInstanceHandle,domElement);updateFiberProps(domElement,props);return domElement;},appendInitialChild:function appendInitialChild(parentInstance,child){parentInstance.appendChild(child);},finalizeInitialChildren:function finalizeInitialChildren(domElement,type,props,rootContainerInstance){setInitialProperties(domElement,type,props,rootContainerInstance);return shouldAutoFocusHostComponent(type,props);},prepareUpdate:function prepareUpdate(domElement,type,oldProps,newProps,rootContainerInstance,hostContext){{var hostContextDev=hostContext;if(_typeof(newProps.children)!==_typeof(oldProps.children)&&(typeof newProps.children==='string'||typeof newProps.children==='number')){var string=''+newProps.children;var ownAncestorInfo=updatedAncestorInfo(hostContextDev.ancestorInfo,type,null);validateDOMNesting$1(null,string,ownAncestorInfo);}}return diffProperties(domElement,type,oldProps,newProps,rootContainerInstance);},shouldSetTextContent:function shouldSetTextContent(type,props){return type==='textarea'||typeof props.children==='string'||typeof props.children==='number'||_typeof(props.dangerouslySetInnerHTML)==='object'&&props.dangerouslySetInnerHTML!==null&&typeof props.dangerouslySetInnerHTML.__html==='string';},shouldDeprioritizeSubtree:function shouldDeprioritizeSubtree(type,props){return!!props.hidden;},createTextInstance:function createTextInstance(text,rootContainerInstance,hostContext,internalInstanceHandle){{var hostContextDev=hostContext;validateDOMNesting$1(null,text,hostContextDev.ancestorInfo);}var textNode=createTextNode(text,rootContainerInstance);precacheFiberNode(internalInstanceHandle,textNode);return textNode;},now:now,mutation:{commitMount:function commitMount(domElement,type,newProps,internalInstanceHandle){domElement.focus();},commitUpdate:function commitUpdate(domElement,updatePayload,type,oldProps,newProps,internalInstanceHandle){// Update the props handle so that we know which props are the ones with
// with current event handlers.
updateFiberProps(domElement,newProps);// Apply the diff to the DOM node.
updateProperties(domElement,updatePayload,type,oldProps,newProps);},resetTextContent:function resetTextContent(domElement){domElement.textContent='';},commitTextUpdate:function commitTextUpdate(textInstance,oldText,newText){textInstance.nodeValue=newText;},appendChild:function appendChild(parentInstance,child){parentInstance.appendChild(child);},appendChildToContainer:function appendChildToContainer(container,child){if(container.nodeType===COMMENT_NODE){container.parentNode.insertBefore(child,container);}else{container.appendChild(child);}},insertBefore:function insertBefore(parentInstance,child,beforeChild){parentInstance.insertBefore(child,beforeChild);},insertInContainerBefore:function insertInContainerBefore(container,child,beforeChild){if(container.nodeType===COMMENT_NODE){container.parentNode.insertBefore(child,beforeChild);}else{container.insertBefore(child,beforeChild);}},removeChild:function removeChild(parentInstance,child){parentInstance.removeChild(child);},removeChildFromContainer:function removeChildFromContainer(container,child){if(container.nodeType===COMMENT_NODE){container.parentNode.removeChild(child);}else{container.removeChild(child);}}},hydration:{canHydrateInstance:function canHydrateInstance(instance,type,props){if(instance.nodeType!==ELEMENT_NODE||type.toLowerCase()!==instance.nodeName.toLowerCase()){return null;}// This has now been refined to an element node.
return instance;},canHydrateTextInstance:function canHydrateTextInstance(instance,text){if(text===''||instance.nodeType!==TEXT_NODE){// Empty strings are not parsed by HTML so there won't be a correct match here.
return null;}// This has now been refined to a text node.
return instance;},getNextHydratableSibling:function getNextHydratableSibling(instance){var node=instance.nextSibling;// Skip non-hydratable nodes.
while(node&&node.nodeType!==ELEMENT_NODE&&node.nodeType!==TEXT_NODE){node=node.nextSibling;}return node;},getFirstHydratableChild:function getFirstHydratableChild(parentInstance){var next=parentInstance.firstChild;// Skip non-hydratable nodes.
while(next&&next.nodeType!==ELEMENT_NODE&&next.nodeType!==TEXT_NODE){next=next.nextSibling;}return next;},hydrateInstance:function hydrateInstance(instance,type,props,rootContainerInstance,hostContext,internalInstanceHandle){precacheFiberNode(internalInstanceHandle,instance);// TODO: Possibly defer this until the commit phase where all the events
// get attached.
updateFiberProps(instance,props);var parentNamespace=void 0;{var hostContextDev=hostContext;parentNamespace=hostContextDev.namespace;}return diffHydratedProperties(instance,type,props,parentNamespace,rootContainerInstance);},hydrateTextInstance:function hydrateTextInstance(textInstance,text,internalInstanceHandle){precacheFiberNode(internalInstanceHandle,textInstance);return diffHydratedText(textInstance,text);},didNotMatchHydratedContainerTextInstance:function didNotMatchHydratedContainerTextInstance(parentContainer,textInstance,text){{warnForUnmatchedText(textInstance,text);}},didNotMatchHydratedTextInstance:function didNotMatchHydratedTextInstance(parentType,parentProps,parentInstance,textInstance,text){if(true&&parentProps[SUPPRESS_HYDRATION_WARNING]!==true){warnForUnmatchedText(textInstance,text);}},didNotHydrateContainerInstance:function didNotHydrateContainerInstance(parentContainer,instance){{if(instance.nodeType===1){warnForDeletedHydratableElement(parentContainer,instance);}else{warnForDeletedHydratableText(parentContainer,instance);}}},didNotHydrateInstance:function didNotHydrateInstance(parentType,parentProps,parentInstance,instance){if(true&&parentProps[SUPPRESS_HYDRATION_WARNING]!==true){if(instance.nodeType===1){warnForDeletedHydratableElement(parentInstance,instance);}else{warnForDeletedHydratableText(parentInstance,instance);}}},didNotFindHydratableContainerInstance:function didNotFindHydratableContainerInstance(parentContainer,type,props){{warnForInsertedHydratedElement(parentContainer,type,props);}},didNotFindHydratableContainerTextInstance:function didNotFindHydratableContainerTextInstance(parentContainer,text){{warnForInsertedHydratedText(parentContainer,text);}},didNotFindHydratableInstance:function didNotFindHydratableInstance(parentType,parentProps,parentInstance,type,props){if(true&&parentProps[SUPPRESS_HYDRATION_WARNING]!==true){warnForInsertedHydratedElement(parentInstance,type,props);}},didNotFindHydratableTextInstance:function didNotFindHydratableTextInstance(parentType,parentProps,parentInstance,text){if(true&&parentProps[SUPPRESS_HYDRATION_WARNING]!==true){warnForInsertedHydratedText(parentInstance,text);}}},scheduleDeferredCallback:rIC,cancelDeferredCallback:cIC,useSyncScheduling:!enableAsyncSchedulingByDefaultInReactDOM});injection$4.injectFiberBatchedUpdates(DOMRenderer.batchedUpdates);var warnedAboutHydrateAPI=false;function renderSubtreeIntoContainer(parentComponent,children,container,forceHydrate,callback){!isValidContainer(container)?invariant(false,'Target container is not a DOM element.'):void 0;{if(container._reactRootContainer&&container.nodeType!==COMMENT_NODE){var hostInstance=DOMRenderer.findHostInstanceWithNoPortals(container._reactRootContainer.current);if(hostInstance){warning(hostInstance.parentNode===container,'render(...): It looks like the React-rendered content of this '+'container was removed without using React. This is not '+'supported and will cause errors. Instead, call '+'ReactDOM.unmountComponentAtNode to empty a container.');}}var isRootRenderedBySomeReact=!!container._reactRootContainer;var rootEl=getReactRootElementInContainer(container);var hasNonRootReactChild=!!(rootEl&&getInstanceFromNode$1(rootEl));warning(!hasNonRootReactChild||isRootRenderedBySomeReact,'render(...): Replacing React-rendered children with a new root '+'component. If you intended to update the children of this node, '+'you should instead have the existing children update their state '+'and render the new components instead of calling ReactDOM.render.');warning(container.nodeType!==ELEMENT_NODE||!container.tagName||container.tagName.toUpperCase()!=='BODY','render(): Rendering components directly into document.body is '+'discouraged, since its children are often manipulated by third-party '+'scripts and browser extensions. This may lead to subtle '+'reconciliation issues. Try rendering into a container element created '+'for your app.');}var root=container._reactRootContainer;if(!root){var shouldHydrate=forceHydrate||shouldHydrateDueToLegacyHeuristic(container);// First clear any existing content.
if(!shouldHydrate){var warned=false;var rootSibling=void 0;while(rootSibling=container.lastChild){{if(!warned&&rootSibling.nodeType===ELEMENT_NODE&&rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)){warned=true;warning(false,'render(): Target node has markup rendered by React, but there '+'are unrelated nodes as well. This is most commonly caused by '+'white-space inserted around server-rendered markup.');}}container.removeChild(rootSibling);}}{if(shouldHydrate&&!forceHydrate&&!warnedAboutHydrateAPI){warnedAboutHydrateAPI=true;lowPriorityWarning$1(false,'render(): Calling ReactDOM.render() to hydrate server-rendered markup '+'will stop working in React v17. Replace the ReactDOM.render() call '+'with ReactDOM.hydrate() if you want React to attach to the server HTML.');}}var newRoot=DOMRenderer.createContainer(container,shouldHydrate);root=container._reactRootContainer=newRoot;// Initial mount should not be batched.
DOMRenderer.unbatchedUpdates(function(){DOMRenderer.updateContainer(children,newRoot,parentComponent,callback);});}else{DOMRenderer.updateContainer(children,root,parentComponent,callback);}return DOMRenderer.getPublicRootInstance(root);}function createPortal(children,container){var key=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;!isValidContainer(container)?invariant(false,'Target container is not a DOM element.'):void 0;// TODO: pass ReactDOM portal implementation as third argument
return createPortal$1(children,container,null,key);}function ReactRoot(container,hydrate){var root=DOMRenderer.createContainer(container,hydrate);this._reactRootContainer=root;}ReactRoot.prototype.render=function(children,callback){var root=this._reactRootContainer;DOMRenderer.updateContainer(children,root,null,callback);};ReactRoot.prototype.unmount=function(callback){var root=this._reactRootContainer;DOMRenderer.updateContainer(null,root,null,callback);};var ReactDOM={createPortal:createPortal,findDOMNode:function findDOMNode(componentOrElement){{var owner=ReactCurrentOwner.current;if(owner!==null){var warnedAboutRefsInRender=owner.stateNode._warnedAboutRefsInRender;warning(warnedAboutRefsInRender,'%s is accessing findDOMNode inside its render(). '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentName(owner)||'A component');owner.stateNode._warnedAboutRefsInRender=true;}}if(componentOrElement==null){return null;}if(componentOrElement.nodeType===ELEMENT_NODE){return componentOrElement;}var inst=get(componentOrElement);if(inst){return DOMRenderer.findHostInstance(inst);}if(typeof componentOrElement.render==='function'){invariant(false,'Unable to find node on an unmounted component.');}else{invariant(false,'Element appears to be neither ReactComponent nor DOMNode. Keys: %s',Object.keys(componentOrElement));}},hydrate:function hydrate(element,container,callback){// TODO: throw or warn if we couldn't hydrate?
return renderSubtreeIntoContainer(null,element,container,true,callback);},render:function render(element,container,callback){return renderSubtreeIntoContainer(null,element,container,false,callback);},unstable_renderSubtreeIntoContainer:function unstable_renderSubtreeIntoContainer(parentComponent,element,containerNode,callback){!(parentComponent!=null&&has(parentComponent))?invariant(false,'parentComponent must be a valid React Component'):void 0;return renderSubtreeIntoContainer(parentComponent,element,containerNode,false,callback);},unmountComponentAtNode:function unmountComponentAtNode(container){!isValidContainer(container)?invariant(false,'unmountComponentAtNode(...): Target container is not a DOM element.'):void 0;if(container._reactRootContainer){{var rootEl=getReactRootElementInContainer(container);var renderedByDifferentReact=rootEl&&!getInstanceFromNode$1(rootEl);warning(!renderedByDifferentReact,"unmountComponentAtNode(): The node you're attempting to unmount "+'was rendered by another copy of React.');}// Unmount should not be batched.
DOMRenderer.unbatchedUpdates(function(){renderSubtreeIntoContainer(null,null,container,false,function(){container._reactRootContainer=null;});});// If you call unmountComponentAtNode twice in quick succession, you'll
// get `true` twice. That's probably fine?
return true;}else{{var _rootEl=getReactRootElementInContainer(container);var hasNonRootReactChild=!!(_rootEl&&getInstanceFromNode$1(_rootEl));// Check if the container itself is a React root node.
var isContainerReactRoot=container.nodeType===1&&isValidContainer(container.parentNode)&&!!container.parentNode._reactRootContainer;warning(!hasNonRootReactChild,"unmountComponentAtNode(): The node you're attempting to unmount "+'was rendered by React and is not a top-level container. %s',isContainerReactRoot?'You may have accidentally passed in a React root node instead '+'of its container.':'Instead, have the parent component update its state and '+'rerender in order to remove this component.');}return false;}},// Temporary alias since we already shipped React 16 RC with it.
// TODO: remove in React 17.
unstable_createPortal:createPortal,unstable_batchedUpdates:batchedUpdates,unstable_deferredUpdates:DOMRenderer.deferredUpdates,flushSync:DOMRenderer.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{// For TapEventPlugin which is popular in open source
EventPluginHub:EventPluginHub,// Used by test-utils
EventPluginRegistry:EventPluginRegistry,EventPropagators:EventPropagators,ReactControlledComponent:ReactControlledComponent,ReactDOMComponentTree:ReactDOMComponentTree,ReactDOMEventListener:ReactDOMEventListener}};if(enableCreateRoot){ReactDOM.createRoot=function createRoot(container,options){var hydrate=options!=null&&options.hydrate===true;return new ReactRoot(container,hydrate);};}var foundDevTools=DOMRenderer.injectIntoDevTools({findFiberByHostInstance:getClosestInstanceFromNode,bundleType:1,version:ReactVersion,rendererPackageName:'react-dom'});{if(!foundDevTools&&ExecutionEnvironment.canUseDOM&&window.top===window.self){// If we're in Chrome or Firefox, provide a download link if not installed.
if(navigator.userAgent.indexOf('Chrome')>-1&&navigator.userAgent.indexOf('Edge')===-1||navigator.userAgent.indexOf('Firefox')>-1){var protocol=window.location.protocol;// Don't warn in exotic cases like chrome-extension://.
if(/^(https?|file):$/.test(protocol)){console.info('%cDownload the React DevTools '+'for a better development experience: '+'https://fb.me/react-devtools'+(protocol==='file:'?'\nYou might need to use a local HTTP server (instead of file://): '+'https://fb.me/react-devtools-faq':''),'font-weight:bold');}}}}var ReactDOM$2=Object.freeze({default:ReactDOM});var ReactDOM$3=ReactDOM$2&&ReactDOM||ReactDOM$2;// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var reactDom=ReactDOM$3['default']?ReactDOM$3['default']:ReactDOM$3;module.exports=reactDom;})();}

},{"fbjs/lib/EventListener":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\EventListener.js","fbjs/lib/ExecutionEnvironment":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\ExecutionEnvironment.js","fbjs/lib/camelizeStyleName":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\camelizeStyleName.js","fbjs/lib/containsNode":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\containsNode.js","fbjs/lib/emptyFunction":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyFunction.js","fbjs/lib/emptyObject":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyObject.js","fbjs/lib/focusNode":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\focusNode.js","fbjs/lib/getActiveElement":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\getActiveElement.js","fbjs/lib/hyphenateStyleName":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\hyphenateStyleName.js","fbjs/lib/invariant":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\invariant.js","fbjs/lib/shallowEqual":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\shallowEqual.js","fbjs/lib/warning":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\warning.js","object-assign":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object-assign\\index.js","prop-types/checkPropTypes":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\prop-types\\checkPropTypes.js","react":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react-dom\\cjs\\react-dom.production.min.js":[function(require,module,exports){
/** @license React v16.2.0
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var aa = require("react"),
    l = require("fbjs/lib/ExecutionEnvironment"),
    B = require("object-assign"),
    C = require("fbjs/lib/emptyFunction"),
    ba = require("fbjs/lib/EventListener"),
    da = require("fbjs/lib/getActiveElement"),
    ea = require("fbjs/lib/shallowEqual"),
    fa = require("fbjs/lib/containsNode"),
    ia = require("fbjs/lib/focusNode"),
    D = require("fbjs/lib/emptyObject");
function E(a) {
  for (var b = arguments.length - 1, c = "Minified React error #" + a + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d" + a, d = 0; d < b; d++) {
    c += "\x26args[]\x3d" + encodeURIComponent(arguments[d + 1]);
  }b = Error(c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name = "Invariant Violation";b.framesToPop = 1;throw b;
}aa ? void 0 : E("227");
var oa = { children: !0, dangerouslySetInnerHTML: !0, defaultValue: !0, defaultChecked: !0, innerHTML: !0, suppressContentEditableWarning: !0, suppressHydrationWarning: !0, style: !0 };function pa(a, b) {
  return (a & b) === b;
}
var ta = { MUST_USE_PROPERTY: 1, HAS_BOOLEAN_VALUE: 4, HAS_NUMERIC_VALUE: 8, HAS_POSITIVE_NUMERIC_VALUE: 24, HAS_OVERLOADED_BOOLEAN_VALUE: 32, HAS_STRING_BOOLEAN_VALUE: 64, injectDOMPropertyConfig: function injectDOMPropertyConfig(a) {
    var b = ta,
        c = a.Properties || {},
        d = a.DOMAttributeNamespaces || {},
        e = a.DOMAttributeNames || {};a = a.DOMMutationMethods || {};for (var f in c) {
      ua.hasOwnProperty(f) ? E("48", f) : void 0;var g = f.toLowerCase(),
          h = c[f];g = { attributeName: g, attributeNamespace: null, propertyName: f, mutationMethod: null, mustUseProperty: pa(h, b.MUST_USE_PROPERTY),
        hasBooleanValue: pa(h, b.HAS_BOOLEAN_VALUE), hasNumericValue: pa(h, b.HAS_NUMERIC_VALUE), hasPositiveNumericValue: pa(h, b.HAS_POSITIVE_NUMERIC_VALUE), hasOverloadedBooleanValue: pa(h, b.HAS_OVERLOADED_BOOLEAN_VALUE), hasStringBooleanValue: pa(h, b.HAS_STRING_BOOLEAN_VALUE) };1 >= g.hasBooleanValue + g.hasNumericValue + g.hasOverloadedBooleanValue ? void 0 : E("50", f);e.hasOwnProperty(f) && (g.attributeName = e[f]);d.hasOwnProperty(f) && (g.attributeNamespace = d[f]);a.hasOwnProperty(f) && (g.mutationMethod = a[f]);ua[f] = g;
    }
  } },
    ua = {};
function va(a, b) {
  if (oa.hasOwnProperty(a) || 2 < a.length && ("o" === a[0] || "O" === a[0]) && ("n" === a[1] || "N" === a[1])) return !1;if (null === b) return !0;switch (typeof b === "undefined" ? "undefined" : _typeof(b)) {case "boolean":
      return oa.hasOwnProperty(a) ? a = !0 : (b = wa(a)) ? a = b.hasBooleanValue || b.hasStringBooleanValue || b.hasOverloadedBooleanValue : (a = a.toLowerCase().slice(0, 5), a = "data-" === a || "aria-" === a), a;case "undefined":case "number":case "string":case "object":
      return !0;default:
      return !1;}
}function wa(a) {
  return ua.hasOwnProperty(a) ? ua[a] : null;
}
var xa = ta,
    ya = xa.MUST_USE_PROPERTY,
    K = xa.HAS_BOOLEAN_VALUE,
    za = xa.HAS_NUMERIC_VALUE,
    Aa = xa.HAS_POSITIVE_NUMERIC_VALUE,
    Ba = xa.HAS_OVERLOADED_BOOLEAN_VALUE,
    Ca = xa.HAS_STRING_BOOLEAN_VALUE,
    Da = { Properties: { allowFullScreen: K, async: K, autoFocus: K, autoPlay: K, capture: Ba, checked: ya | K, cols: Aa, contentEditable: Ca, controls: K, "default": K, defer: K, disabled: K, download: Ba, draggable: Ca, formNoValidate: K, hidden: K, loop: K, multiple: ya | K, muted: ya | K, noValidate: K, open: K, playsInline: K, readOnly: K, required: K, reversed: K, rows: Aa, rowSpan: za,
    scoped: K, seamless: K, selected: ya | K, size: Aa, start: za, span: Aa, spellCheck: Ca, style: 0, tabIndex: 0, itemScope: K, acceptCharset: 0, className: 0, htmlFor: 0, httpEquiv: 0, value: Ca }, DOMAttributeNames: { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" }, DOMMutationMethods: { value: function value(a, b) {
      if (null == b) return a.removeAttribute("value");"number" !== a.type || !1 === a.hasAttribute("value") ? a.setAttribute("value", "" + b) : a.validity && !a.validity.badInput && a.ownerDocument.activeElement !== a && a.setAttribute("value", "" + b);
    } } },
    Ea = xa.HAS_STRING_BOOLEAN_VALUE,
    M = { xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace" },
    Ga = { Properties: { autoReverse: Ea, externalResourcesRequired: Ea, preserveAlpha: Ea }, DOMAttributeNames: { autoReverse: "autoReverse", externalResourcesRequired: "externalResourcesRequired", preserveAlpha: "preserveAlpha" }, DOMAttributeNamespaces: { xlinkActuate: M.xlink, xlinkArcrole: M.xlink, xlinkHref: M.xlink, xlinkRole: M.xlink, xlinkShow: M.xlink, xlinkTitle: M.xlink, xlinkType: M.xlink,
    xmlBase: M.xml, xmlLang: M.xml, xmlSpace: M.xml } },
    Ha = /[\-\:]([a-z])/g;function Ia(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function (a) {
  var b = a.replace(Ha, Ia);Ga.Properties[b] = 0;Ga.DOMAttributeNames[b] = a;
});xa.injectDOMPropertyConfig(Da);xa.injectDOMPropertyConfig(Ga);
var P = { _caughtError: null, _hasCaughtError: !1, _rethrowError: null, _hasRethrowError: !1, injection: { injectErrorUtils: function injectErrorUtils(a) {
      "function" !== typeof a.invokeGuardedCallback ? E("197") : void 0;Ja = a.invokeGuardedCallback;
    } }, invokeGuardedCallback: function invokeGuardedCallback(a, b, c, d, e, f, g, h, k) {
    Ja.apply(P, arguments);
  }, invokeGuardedCallbackAndCatchFirstError: function invokeGuardedCallbackAndCatchFirstError(a, b, c, d, e, f, g, h, k) {
    P.invokeGuardedCallback.apply(this, arguments);if (P.hasCaughtError()) {
      var q = P.clearCaughtError();P._hasRethrowError || (P._hasRethrowError = !0, P._rethrowError = q);
    }
  }, rethrowCaughtError: function rethrowCaughtError() {
    return Ka.apply(P, arguments);
  }, hasCaughtError: function hasCaughtError() {
    return P._hasCaughtError;
  }, clearCaughtError: function clearCaughtError() {
    if (P._hasCaughtError) {
      var a = P._caughtError;P._caughtError = null;P._hasCaughtError = !1;return a;
    }E("198");
  } };function Ja(a, b, c, d, e, f, g, h, k) {
  P._hasCaughtError = !1;P._caughtError = null;var q = Array.prototype.slice.call(arguments, 3);try {
    b.apply(c, q);
  } catch (v) {
    P._caughtError = v, P._hasCaughtError = !0;
  }
}
function Ka() {
  if (P._hasRethrowError) {
    var a = P._rethrowError;P._rethrowError = null;P._hasRethrowError = !1;throw a;
  }
}var La = null,
    Ma = {};
function Na() {
  if (La) for (var a in Ma) {
    var b = Ma[a],
        c = La.indexOf(a);-1 < c ? void 0 : E("96", a);if (!Oa[c]) {
      b.extractEvents ? void 0 : E("97", a);Oa[c] = b;c = b.eventTypes;for (var d in c) {
        var e = void 0;var f = c[d],
            g = b,
            h = d;Pa.hasOwnProperty(h) ? E("99", h) : void 0;Pa[h] = f;var k = f.phasedRegistrationNames;if (k) {
          for (e in k) {
            k.hasOwnProperty(e) && Qa(k[e], g, h);
          }e = !0;
        } else f.registrationName ? (Qa(f.registrationName, g, h), e = !0) : e = !1;e ? void 0 : E("98", d, a);
      }
    }
  }
}
function Qa(a, b, c) {
  Ra[a] ? E("100", a) : void 0;Ra[a] = b;Sa[a] = b.eventTypes[c].dependencies;
}var Oa = [],
    Pa = {},
    Ra = {},
    Sa = {};function Ta(a) {
  La ? E("101") : void 0;La = Array.prototype.slice.call(a);Na();
}function Ua(a) {
  var b = !1,
      c;for (c in a) {
    if (a.hasOwnProperty(c)) {
      var d = a[c];Ma.hasOwnProperty(c) && Ma[c] === d || (Ma[c] ? E("102", c) : void 0, Ma[c] = d, b = !0);
    }
  }b && Na();
}
var Va = Object.freeze({ plugins: Oa, eventNameDispatchConfigs: Pa, registrationNameModules: Ra, registrationNameDependencies: Sa, possibleRegistrationNames: null, injectEventPluginOrder: Ta, injectEventPluginsByName: Ua }),
    Wa = null,
    Xa = null,
    Ya = null;function Za(a, b, c, d) {
  b = a.type || "unknown-event";a.currentTarget = Ya(d);P.invokeGuardedCallbackAndCatchFirstError(b, c, void 0, a);a.currentTarget = null;
}
function $a(a, b) {
  null == b ? E("30") : void 0;if (null == a) return b;if (Array.isArray(a)) {
    if (Array.isArray(b)) return a.push.apply(a, b), a;a.push(b);return a;
  }return Array.isArray(b) ? [a].concat(b) : [a, b];
}function ab(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}var bb = null;
function cb(a, b) {
  if (a) {
    var c = a._dispatchListeners,
        d = a._dispatchInstances;if (Array.isArray(c)) for (var e = 0; e < c.length && !a.isPropagationStopped(); e++) {
      Za(a, b, c[e], d[e]);
    } else c && Za(a, b, c, d);a._dispatchListeners = null;a._dispatchInstances = null;a.isPersistent() || a.constructor.release(a);
  }
}function db(a) {
  return cb(a, !0);
}function gb(a) {
  return cb(a, !1);
}var hb = { injectEventPluginOrder: Ta, injectEventPluginsByName: Ua };
function ib(a, b) {
  var c = a.stateNode;if (!c) return null;var d = Wa(c);if (!d) return null;c = d[b];a: switch (b) {case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));a = !d;break a;default:
      a = !1;}if (a) return null;c && "function" !== typeof c ? E("231", b, typeof c === "undefined" ? "undefined" : _typeof(c)) : void 0;
  return c;
}function jb(a, b, c, d) {
  for (var e, f = 0; f < Oa.length; f++) {
    var g = Oa[f];g && (g = g.extractEvents(a, b, c, d)) && (e = $a(e, g));
  }return e;
}function kb(a) {
  a && (bb = $a(bb, a));
}function lb(a) {
  var b = bb;bb = null;b && (a ? ab(b, db) : ab(b, gb), bb ? E("95") : void 0, P.rethrowCaughtError());
}var mb = Object.freeze({ injection: hb, getListener: ib, extractEvents: jb, enqueueEvents: kb, processEventQueue: lb }),
    nb = Math.random().toString(36).slice(2),
    Q = "__reactInternalInstance$" + nb,
    ob = "__reactEventHandlers$" + nb;
function pb(a) {
  if (a[Q]) return a[Q];for (var b = []; !a[Q];) {
    if (b.push(a), a.parentNode) a = a.parentNode;else return null;
  }var c = void 0,
      d = a[Q];if (5 === d.tag || 6 === d.tag) return d;for (; a && (d = a[Q]); a = b.pop()) {
    c = d;
  }return c;
}function qb(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;E("33");
}function rb(a) {
  return a[ob] || null;
}
var sb = Object.freeze({ precacheFiberNode: function precacheFiberNode(a, b) {
    b[Q] = a;
  }, getClosestInstanceFromNode: pb, getInstanceFromNode: function getInstanceFromNode(a) {
    a = a[Q];return !a || 5 !== a.tag && 6 !== a.tag ? null : a;
  }, getNodeFromInstance: qb, getFiberCurrentPropsFromNode: rb, updateFiberProps: function updateFiberProps(a, b) {
    a[ob] = b;
  } });function tb(a) {
  do {
    a = a["return"];
  } while (a && 5 !== a.tag);return a ? a : null;
}function ub(a, b, c) {
  for (var d = []; a;) {
    d.push(a), a = tb(a);
  }for (a = d.length; 0 < a--;) {
    b(d[a], "captured", c);
  }for (a = 0; a < d.length; a++) {
    b(d[a], "bubbled", c);
  }
}
function vb(a, b, c) {
  if (b = ib(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = $a(c._dispatchListeners, b), c._dispatchInstances = $a(c._dispatchInstances, a);
}function wb(a) {
  a && a.dispatchConfig.phasedRegistrationNames && ub(a._targetInst, vb, a);
}function xb(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    var b = a._targetInst;b = b ? tb(b) : null;ub(b, vb, a);
  }
}
function yb(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = ib(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = $a(c._dispatchListeners, b), c._dispatchInstances = $a(c._dispatchInstances, a));
}function zb(a) {
  a && a.dispatchConfig.registrationName && yb(a._targetInst, null, a);
}function Ab(a) {
  ab(a, wb);
}
function Bb(a, b, c, d) {
  if (c && d) a: {
    var e = c;for (var f = d, g = 0, h = e; h; h = tb(h)) {
      g++;
    }h = 0;for (var k = f; k; k = tb(k)) {
      h++;
    }for (; 0 < g - h;) {
      e = tb(e), g--;
    }for (; 0 < h - g;) {
      f = tb(f), h--;
    }for (; g--;) {
      if (e === f || e === f.alternate) break a;e = tb(e);f = tb(f);
    }e = null;
  } else e = null;f = e;for (e = []; c && c !== f;) {
    g = c.alternate;if (null !== g && g === f) break;e.push(c);c = tb(c);
  }for (c = []; d && d !== f;) {
    g = d.alternate;if (null !== g && g === f) break;c.push(d);d = tb(d);
  }for (d = 0; d < e.length; d++) {
    yb(e[d], "bubbled", a);
  }for (a = c.length; 0 < a--;) {
    yb(c[a], "captured", b);
  }
}
var Cb = Object.freeze({ accumulateTwoPhaseDispatches: Ab, accumulateTwoPhaseDispatchesSkipTarget: function accumulateTwoPhaseDispatchesSkipTarget(a) {
    ab(a, xb);
  }, accumulateEnterLeaveDispatches: Bb, accumulateDirectDispatches: function accumulateDirectDispatches(a) {
    ab(a, zb);
  } }),
    Db = null;function Eb() {
  !Db && l.canUseDOM && (Db = "textContent" in document.documentElement ? "textContent" : "innerText");return Db;
}var S = { _root: null, _startText: null, _fallbackText: null };
function Fb() {
  if (S._fallbackText) return S._fallbackText;var a,
      b = S._startText,
      c = b.length,
      d,
      e = Gb(),
      f = e.length;for (a = 0; a < c && b[a] === e[a]; a++) {}var g = c - a;for (d = 1; d <= g && b[c - d] === e[f - d]; d++) {}S._fallbackText = e.slice(a, 1 < d ? 1 - d : void 0);return S._fallbackText;
}function Gb() {
  return "value" in S._root ? S._root.value : S._root[Eb()];
}
var Hb = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
    Ib = { type: null, target: null, currentTarget: C.thatReturnsNull, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function timeStamp(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: null, isTrusted: null };
function T(a, b, c, d) {
  this.dispatchConfig = a;this._targetInst = b;this.nativeEvent = c;a = this.constructor.Interface;for (var e in a) {
    a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
  }this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? C.thatReturnsTrue : C.thatReturnsFalse;this.isPropagationStopped = C.thatReturnsFalse;return this;
}
B(T.prototype, { preventDefault: function preventDefault() {
    this.defaultPrevented = !0;var a = this.nativeEvent;a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = C.thatReturnsTrue);
  }, stopPropagation: function stopPropagation() {
    var a = this.nativeEvent;a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = C.thatReturnsTrue);
  }, persist: function persist() {
    this.isPersistent = C.thatReturnsTrue;
  }, isPersistent: C.thatReturnsFalse,
  destructor: function destructor() {
    var a = this.constructor.Interface,
        b;for (b in a) {
      this[b] = null;
    }for (a = 0; a < Hb.length; a++) {
      this[Hb[a]] = null;
    }
  } });T.Interface = Ib;T.augmentClass = function (a, b) {
  function c() {}c.prototype = this.prototype;var d = new c();B(d, a.prototype);a.prototype = d;a.prototype.constructor = a;a.Interface = B({}, this.Interface, b);a.augmentClass = this.augmentClass;Jb(a);
};Jb(T);function Kb(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();this.call(e, a, b, c, d);return e;
  }return new this(a, b, c, d);
}
function Lb(a) {
  a instanceof this ? void 0 : E("223");a.destructor();10 > this.eventPool.length && this.eventPool.push(a);
}function Jb(a) {
  a.eventPool = [];a.getPooled = Kb;a.release = Lb;
}function Mb(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(Mb, { data: null });function Nb(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(Nb, { data: null });var Pb = [9, 13, 27, 32],
    Vb = l.canUseDOM && "CompositionEvent" in window,
    Wb = null;l.canUseDOM && "documentMode" in document && (Wb = document.documentMode);var Xb;
if (Xb = l.canUseDOM && "TextEvent" in window && !Wb) {
  var Yb = window.opera;Xb = !("object" === (typeof Yb === "undefined" ? "undefined" : _typeof(Yb)) && "function" === typeof Yb.version && 12 >= parseInt(Yb.version(), 10));
}
var Zb = Xb,
    $b = l.canUseDOM && (!Vb || Wb && 8 < Wb && 11 >= Wb),
    ac = String.fromCharCode(32),
    bc = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ") }, compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart",
      captured: "onCompositionStartCapture" }, dependencies: "topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ") } },
    cc = !1;
function dc(a, b) {
  switch (a) {case "topKeyUp":
      return -1 !== Pb.indexOf(b.keyCode);case "topKeyDown":
      return 229 !== b.keyCode;case "topKeyPress":case "topMouseDown":case "topBlur":
      return !0;default:
      return !1;}
}function ec(a) {
  a = a.detail;return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && "data" in a ? a.data : null;
}var fc = !1;function gc(a, b) {
  switch (a) {case "topCompositionEnd":
      return ec(b);case "topKeyPress":
      if (32 !== b.which) return null;cc = !0;return ac;case "topTextInput":
      return a = b.data, a === ac && cc ? null : a;default:
      return null;}
}
function hc(a, b) {
  if (fc) return "topCompositionEnd" === a || !Vb && dc(a, b) ? (a = Fb(), S._root = null, S._startText = null, S._fallbackText = null, fc = !1, a) : null;switch (a) {case "topPaste":
      return null;case "topKeyPress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;if (b.which) return String.fromCharCode(b.which);
      }return null;case "topCompositionEnd":
      return $b ? null : b.data;default:
      return null;}
}
var ic = { eventTypes: bc, extractEvents: function extractEvents(a, b, c, d) {
    var e;if (Vb) b: {
      switch (a) {case "topCompositionStart":
          var f = bc.compositionStart;break b;case "topCompositionEnd":
          f = bc.compositionEnd;break b;case "topCompositionUpdate":
          f = bc.compositionUpdate;break b;}f = void 0;
    } else fc ? dc(a, c) && (f = bc.compositionEnd) : "topKeyDown" === a && 229 === c.keyCode && (f = bc.compositionStart);f ? ($b && (fc || f !== bc.compositionStart ? f === bc.compositionEnd && fc && (e = Fb()) : (S._root = d, S._startText = Gb(), fc = !0)), f = Mb.getPooled(f, b, c, d), e ? f.data = e : (e = ec(c), null !== e && (f.data = e)), Ab(f), e = f) : e = null;(a = Zb ? gc(a, c) : hc(a, c)) ? (b = Nb.getPooled(bc.beforeInput, b, c, d), b.data = a, Ab(b)) : b = null;return [e, b];
  } },
    jc = null,
    kc = null,
    lc = null;function mc(a) {
  if (a = Xa(a)) {
    jc && "function" === typeof jc.restoreControlledState ? void 0 : E("194");var b = Wa(a.stateNode);jc.restoreControlledState(a.stateNode, a.type, b);
  }
}var nc = { injectFiberControlledHostComponent: function injectFiberControlledHostComponent(a) {
    jc = a;
  } };function oc(a) {
  kc ? lc ? lc.push(a) : lc = [a] : kc = a;
}
function pc() {
  if (kc) {
    var a = kc,
        b = lc;lc = kc = null;mc(a);if (b) for (a = 0; a < b.length; a++) {
      mc(b[a]);
    }
  }
}var qc = Object.freeze({ injection: nc, enqueueStateRestore: oc, restoreStateIfNeeded: pc });function rc(a, b) {
  return a(b);
}var sc = !1;function tc(a, b) {
  if (sc) return rc(a, b);sc = !0;try {
    return rc(a, b);
  } finally {
    sc = !1, pc();
  }
}var uc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function vc(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();return "input" === b ? !!uc[a.type] : "textarea" === b ? !0 : !1;
}function wc(a) {
  a = a.target || a.srcElement || window;a.correspondingUseElement && (a = a.correspondingUseElement);return 3 === a.nodeType ? a.parentNode : a;
}var xc;l.canUseDOM && (xc = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", ""));
function yc(a, b) {
  if (!l.canUseDOM || b && !("addEventListener" in document)) return !1;b = "on" + a;var c = b in document;c || (c = document.createElement("div"), c.setAttribute(b, "return;"), c = "function" === typeof c[b]);!c && xc && "wheel" === a && (c = document.implementation.hasFeature("Events.wheel", "3.0"));return c;
}function zc(a) {
  var b = a.type;return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ac(a) {
  var b = zc(a) ? "checked" : "value",
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = "" + a[b];if (!a.hasOwnProperty(b) && "function" === typeof c.get && "function" === typeof c.set) return Object.defineProperty(a, b, { enumerable: c.enumerable, configurable: !0, get: function get() {
      return c.get.call(this);
    }, set: function set(a) {
      d = "" + a;c.set.call(this, a);
    } }), { getValue: function getValue() {
      return d;
    }, setValue: function setValue(a) {
      d = "" + a;
    }, stopTracking: function stopTracking() {
      a._valueTracker = null;delete a[b];
    } };
}
function Bc(a) {
  a._valueTracker || (a._valueTracker = Ac(a));
}function Cc(a) {
  if (!a) return !1;var b = a._valueTracker;if (!b) return !0;var c = b.getValue();var d = "";a && (d = zc(a) ? a.checked ? "true" : "false" : a.value);a = d;return a !== c ? (b.setValue(a), !0) : !1;
}var Dc = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ") } };
function Ec(a, b, c) {
  a = T.getPooled(Dc.change, a, b, c);a.type = "change";oc(c);Ab(a);return a;
}var Fc = null,
    Gc = null;function Hc(a) {
  kb(a);lb(!1);
}function Ic(a) {
  var b = qb(a);if (Cc(b)) return a;
}function Jc(a, b) {
  if ("topChange" === a) return b;
}var Kc = !1;l.canUseDOM && (Kc = yc("input") && (!document.documentMode || 9 < document.documentMode));function Lc() {
  Fc && (Fc.detachEvent("onpropertychange", Mc), Gc = Fc = null);
}function Mc(a) {
  "value" === a.propertyName && Ic(Gc) && (a = Ec(Gc, a, wc(a)), tc(Hc, a));
}
function Nc(a, b, c) {
  "topFocus" === a ? (Lc(), Fc = b, Gc = c, Fc.attachEvent("onpropertychange", Mc)) : "topBlur" === a && Lc();
}function Oc(a) {
  if ("topSelectionChange" === a || "topKeyUp" === a || "topKeyDown" === a) return Ic(Gc);
}function Pc(a, b) {
  if ("topClick" === a) return Ic(b);
}function $c(a, b) {
  if ("topInput" === a || "topChange" === a) return Ic(b);
}
var ad = { eventTypes: Dc, _isInputEventSupported: Kc, extractEvents: function extractEvents(a, b, c, d) {
    var e = b ? qb(b) : window,
        f = e.nodeName && e.nodeName.toLowerCase();if ("select" === f || "input" === f && "file" === e.type) var g = Jc;else if (vc(e)) {
      if (Kc) g = $c;else {
        g = Oc;var h = Nc;
      }
    } else f = e.nodeName, !f || "input" !== f.toLowerCase() || "checkbox" !== e.type && "radio" !== e.type || (g = Pc);if (g && (g = g(a, b))) return Ec(g, c, d);h && h(a, e, b);"topBlur" === a && null != b && (a = b._wrapperState || e._wrapperState) && a.controlled && "number" === e.type && (a = "" + e.value, e.getAttribute("value") !== a && e.setAttribute("value", a));
  } };function bd(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(bd, { view: null, detail: null });var cd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };function dd(a) {
  var b = this.nativeEvent;return b.getModifierState ? b.getModifierState(a) : (a = cd[a]) ? !!b[a] : !1;
}function ed() {
  return dd;
}function fd(a, b, c, d) {
  return T.call(this, a, b, c, d);
}
bd.augmentClass(fd, { screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: ed, button: null, buttons: null, relatedTarget: function relatedTarget(a) {
    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
  } });
var gd = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["topMouseOut", "topMouseOver"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["topMouseOut", "topMouseOver"] } },
    hd = { eventTypes: gd, extractEvents: function extractEvents(a, b, c, d) {
    if ("topMouseOver" === a && (c.relatedTarget || c.fromElement) || "topMouseOut" !== a && "topMouseOver" !== a) return null;var e = d.window === d ? d : (e = d.ownerDocument) ? e.defaultView || e.parentWindow : window;"topMouseOut" === a ? (a = b, b = (b = c.relatedTarget || c.toElement) ? pb(b) : null) : a = null;if (a === b) return null;var f = null == a ? e : qb(a);e = null == b ? e : qb(b);var g = fd.getPooled(gd.mouseLeave, a, c, d);g.type = "mouseleave";g.target = f;g.relatedTarget = e;c = fd.getPooled(gd.mouseEnter, b, c, d);c.type = "mouseenter";c.target = e;c.relatedTarget = f;Bb(g, c, a, b);return [g, c];
  } },
    id = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;function jd(a) {
  a = a.type;return "string" === typeof a ? a : "function" === typeof a ? a.displayName || a.name : null;
}
function kd(a) {
  var b = a;if (a.alternate) for (; b["return"];) {
    b = b["return"];
  } else {
    if (0 !== (b.effectTag & 2)) return 1;for (; b["return"];) {
      if (b = b["return"], 0 !== (b.effectTag & 2)) return 1;
    }
  }return 3 === b.tag ? 2 : 3;
}function ld(a) {
  return (a = a._reactInternalFiber) ? 2 === kd(a) : !1;
}function md(a) {
  2 !== kd(a) ? E("188") : void 0;
}
function nd(a) {
  var b = a.alternate;if (!b) return b = kd(a), 3 === b ? E("188") : void 0, 1 === b ? null : a;for (var c = a, d = b;;) {
    var e = c["return"],
        f = e ? e.alternate : null;if (!e || !f) break;if (e.child === f.child) {
      for (var g = e.child; g;) {
        if (g === c) return md(e), a;if (g === d) return md(e), b;g = g.sibling;
      }E("188");
    }if (c["return"] !== d["return"]) c = e, d = f;else {
      g = !1;for (var h = e.child; h;) {
        if (h === c) {
          g = !0;c = e;d = f;break;
        }if (h === d) {
          g = !0;d = e;c = f;break;
        }h = h.sibling;
      }if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;c = f;d = e;break;
          }if (h === d) {
            g = !0;d = f;c = e;break;
          }h = h.sibling;
        }g ? void 0 : E("189");
      }
    }c.alternate !== d ? E("190") : void 0;
  }3 !== c.tag ? E("188") : void 0;return c.stateNode.current === c ? a : b;
}function od(a) {
  a = nd(a);if (!a) return null;for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;if (b.child) b.child["return"] = b, b = b.child;else {
      if (b === a) break;for (; !b.sibling;) {
        if (!b["return"] || b["return"] === a) return null;b = b["return"];
      }b.sibling["return"] = b["return"];b = b.sibling;
    }
  }return null;
}
function pd(a) {
  a = nd(a);if (!a) return null;for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;if (b.child && 4 !== b.tag) b.child["return"] = b, b = b.child;else {
      if (b === a) break;for (; !b.sibling;) {
        if (!b["return"] || b["return"] === a) return null;b = b["return"];
      }b.sibling["return"] = b["return"];b = b.sibling;
    }
  }return null;
}var qd = [];
function rd(a) {
  var b = a.targetInst;do {
    if (!b) {
      a.ancestors.push(b);break;
    }var c;for (c = b; c["return"];) {
      c = c["return"];
    }c = 3 !== c.tag ? null : c.stateNode.containerInfo;if (!c) break;a.ancestors.push(b);b = pb(c);
  } while (b);for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c], sd(a.topLevelType, b, a.nativeEvent, wc(a.nativeEvent));
  }
}var td = !0,
    sd = void 0;function ud(a) {
  td = !!a;
}function U(a, b, c) {
  return c ? ba.listen(c, b, vd.bind(null, a)) : null;
}function wd(a, b, c) {
  return c ? ba.capture(c, b, vd.bind(null, a)) : null;
}
function vd(a, b) {
  if (td) {
    var c = wc(b);c = pb(c);null === c || "number" !== typeof c.tag || 2 === kd(c) || (c = null);if (qd.length) {
      var d = qd.pop();d.topLevelType = a;d.nativeEvent = b;d.targetInst = c;a = d;
    } else a = { topLevelType: a, nativeEvent: b, targetInst: c, ancestors: [] };try {
      tc(rd, a);
    } finally {
      a.topLevelType = null, a.nativeEvent = null, a.targetInst = null, a.ancestors.length = 0, 10 > qd.length && qd.push(a);
    }
  }
}
var xd = Object.freeze({ get _enabled() {
    return td;
  }, get _handleTopLevel() {
    return sd;
  }, setHandleTopLevel: function setHandleTopLevel(a) {
    sd = a;
  }, setEnabled: ud, isEnabled: function isEnabled() {
    return td;
  }, trapBubbledEvent: U, trapCapturedEvent: wd, dispatchEvent: vd });function yd(a, b) {
  var c = {};c[a.toLowerCase()] = b.toLowerCase();c["Webkit" + a] = "webkit" + b;c["Moz" + a] = "moz" + b;c["ms" + a] = "MS" + b;c["O" + a] = "o" + b.toLowerCase();return c;
}
var zd = { animationend: yd("Animation", "AnimationEnd"), animationiteration: yd("Animation", "AnimationIteration"), animationstart: yd("Animation", "AnimationStart"), transitionend: yd("Transition", "TransitionEnd") },
    Ad = {},
    Bd = {};l.canUseDOM && (Bd = document.createElement("div").style, "AnimationEvent" in window || (delete zd.animationend.animation, delete zd.animationiteration.animation, delete zd.animationstart.animation), "TransitionEvent" in window || delete zd.transitionend.transition);
function Cd(a) {
  if (Ad[a]) return Ad[a];if (!zd[a]) return a;var b = zd[a],
      c;for (c in b) {
    if (b.hasOwnProperty(c) && c in Bd) return Ad[a] = b[c];
  }return "";
}
var Dd = { topAbort: "abort", topAnimationEnd: Cd("animationend") || "animationend", topAnimationIteration: Cd("animationiteration") || "animationiteration", topAnimationStart: Cd("animationstart") || "animationstart", topBlur: "blur", topCancel: "cancel", topCanPlay: "canplay", topCanPlayThrough: "canplaythrough", topChange: "change", topClick: "click", topClose: "close", topCompositionEnd: "compositionend", topCompositionStart: "compositionstart", topCompositionUpdate: "compositionupdate", topContextMenu: "contextmenu", topCopy: "copy",
  topCut: "cut", topDoubleClick: "dblclick", topDrag: "drag", topDragEnd: "dragend", topDragEnter: "dragenter", topDragExit: "dragexit", topDragLeave: "dragleave", topDragOver: "dragover", topDragStart: "dragstart", topDrop: "drop", topDurationChange: "durationchange", topEmptied: "emptied", topEncrypted: "encrypted", topEnded: "ended", topError: "error", topFocus: "focus", topInput: "input", topKeyDown: "keydown", topKeyPress: "keypress", topKeyUp: "keyup", topLoadedData: "loadeddata", topLoad: "load", topLoadedMetadata: "loadedmetadata", topLoadStart: "loadstart",
  topMouseDown: "mousedown", topMouseMove: "mousemove", topMouseOut: "mouseout", topMouseOver: "mouseover", topMouseUp: "mouseup", topPaste: "paste", topPause: "pause", topPlay: "play", topPlaying: "playing", topProgress: "progress", topRateChange: "ratechange", topScroll: "scroll", topSeeked: "seeked", topSeeking: "seeking", topSelectionChange: "selectionchange", topStalled: "stalled", topSuspend: "suspend", topTextInput: "textInput", topTimeUpdate: "timeupdate", topToggle: "toggle", topTouchCancel: "touchcancel", topTouchEnd: "touchend", topTouchMove: "touchmove",
  topTouchStart: "touchstart", topTransitionEnd: Cd("transitionend") || "transitionend", topVolumeChange: "volumechange", topWaiting: "waiting", topWheel: "wheel" },
    Ed = {},
    Fd = 0,
    Gd = "_reactListenersID" + ("" + Math.random()).slice(2);function Hd(a) {
  Object.prototype.hasOwnProperty.call(a, Gd) || (a[Gd] = Fd++, Ed[a[Gd]] = {});return Ed[a[Gd]];
}function Id(a) {
  for (; a && a.firstChild;) {
    a = a.firstChild;
  }return a;
}
function Jd(a, b) {
  var c = Id(a);a = 0;for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;if (a <= b && d >= b) return { node: c, offset: b - a };a = d;
    }a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;break a;
        }c = c.parentNode;
      }c = void 0;
    }c = Id(c);
  }
}function Kd(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();return b && ("input" === b && "text" === a.type || "textarea" === b || "true" === a.contentEditable);
}
var Ld = l.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
    Md = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ") } },
    Nd = null,
    Od = null,
    Pd = null,
    Qd = !1;
function Rd(a, b) {
  if (Qd || null == Nd || Nd !== da()) return null;var c = Nd;"selectionStart" in c && Kd(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : window.getSelection ? (c = window.getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }) : c = void 0;return Pd && ea(Pd, c) ? null : (Pd = c, a = T.getPooled(Md.select, Od, a, b), a.type = "select", a.target = Nd, Ab(a), a);
}
var Sd = { eventTypes: Md, extractEvents: function extractEvents(a, b, c, d) {
    var e = d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument,
        f;if (!(f = !e)) {
      a: {
        e = Hd(e);f = Sa.onSelect;for (var g = 0; g < f.length; g++) {
          var h = f[g];if (!e.hasOwnProperty(h) || !e[h]) {
            e = !1;break a;
          }
        }e = !0;
      }f = !e;
    }if (f) return null;e = b ? qb(b) : window;switch (a) {case "topFocus":
        if (vc(e) || "true" === e.contentEditable) Nd = e, Od = b, Pd = null;break;case "topBlur":
        Pd = Od = Nd = null;break;case "topMouseDown":
        Qd = !0;break;case "topContextMenu":case "topMouseUp":
        return Qd = !1, Rd(c, d);case "topSelectionChange":
        if (Ld) break;
      case "topKeyDown":case "topKeyUp":
        return Rd(c, d);}return null;
  } };function Td(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(Td, { animationName: null, elapsedTime: null, pseudoElement: null });function Ud(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(Ud, { clipboardData: function clipboardData(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } });function Vd(a, b, c, d) {
  return T.call(this, a, b, c, d);
}bd.augmentClass(Vd, { relatedTarget: null });
function Wd(a) {
  var b = a.keyCode;"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;return 32 <= a || 13 === a ? a : 0;
}
var Xd = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    Yd = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4",
  116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };function Zd(a, b, c, d) {
  return T.call(this, a, b, c, d);
}
bd.augmentClass(Zd, { key: function key(a) {
    if (a.key) {
      var b = Xd[a.key] || a.key;if ("Unidentified" !== b) return b;
    }return "keypress" === a.type ? (a = Wd(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Yd[a.keyCode] || "Unidentified" : "";
  }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: ed, charCode: function charCode(a) {
    return "keypress" === a.type ? Wd(a) : 0;
  }, keyCode: function keyCode(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function which(a) {
    return "keypress" === a.type ? Wd(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } });function $d(a, b, c, d) {
  return T.call(this, a, b, c, d);
}fd.augmentClass($d, { dataTransfer: null });function ae(a, b, c, d) {
  return T.call(this, a, b, c, d);
}bd.augmentClass(ae, { touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: ed });function be(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(be, { propertyName: null, elapsedTime: null, pseudoElement: null });
function ce(a, b, c, d) {
  return T.call(this, a, b, c, d);
}fd.augmentClass(ce, { deltaX: function deltaX(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  }, deltaY: function deltaY(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  }, deltaZ: null, deltaMode: null });var de = {},
    ee = {};
"abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function (a) {
  var b = a[0].toUpperCase() + a.slice(1),
      c = "on" + b;b = "top" + b;c = { phasedRegistrationNames: { bubbled: c, captured: c + "Capture" }, dependencies: [b] };de[a] = c;ee[b] = c;
});
var fe = { eventTypes: de, extractEvents: function extractEvents(a, b, c, d) {
    var e = ee[a];if (!e) return null;switch (a) {case "topKeyPress":
        if (0 === Wd(c)) return null;case "topKeyDown":case "topKeyUp":
        a = Zd;break;case "topBlur":case "topFocus":
        a = Vd;break;case "topClick":
        if (2 === c.button) return null;case "topDoubleClick":case "topMouseDown":case "topMouseMove":case "topMouseUp":case "topMouseOut":case "topMouseOver":case "topContextMenu":
        a = fd;break;case "topDrag":case "topDragEnd":case "topDragEnter":case "topDragExit":case "topDragLeave":case "topDragOver":case "topDragStart":case "topDrop":
        a = $d;break;case "topTouchCancel":case "topTouchEnd":case "topTouchMove":case "topTouchStart":
        a = ae;break;case "topAnimationEnd":case "topAnimationIteration":case "topAnimationStart":
        a = Td;break;case "topTransitionEnd":
        a = be;break;case "topScroll":
        a = bd;break;case "topWheel":
        a = ce;break;case "topCopy":case "topCut":case "topPaste":
        a = Ud;break;default:
        a = T;}b = a.getPooled(e, b, c, d);Ab(b);return b;
  } };sd = function sd(a, b, c, d) {
  a = jb(a, b, c, d);kb(a);lb(!1);
};hb.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
Wa = sb.getFiberCurrentPropsFromNode;Xa = sb.getInstanceFromNode;Ya = sb.getNodeFromInstance;hb.injectEventPluginsByName({ SimpleEventPlugin: fe, EnterLeaveEventPlugin: hd, ChangeEventPlugin: ad, SelectEventPlugin: Sd, BeforeInputEventPlugin: ic });var ge = [],
    he = -1;function V(a) {
  0 > he || (a.current = ge[he], ge[he] = null, he--);
}function W(a, b) {
  he++;ge[he] = a.current;a.current = b;
}new Set();var ie = { current: D },
    X = { current: !1 },
    je = D;function ke(a) {
  return le(a) ? je : ie.current;
}
function me(a, b) {
  var c = a.type.contextTypes;if (!c) return D;var d = a.stateNode;if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;var e = {},
      f;for (f in c) {
    e[f] = b[f];
  }d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);return e;
}function le(a) {
  return 2 === a.tag && null != a.type.childContextTypes;
}function ne(a) {
  le(a) && (V(X, a), V(ie, a));
}
function oe(a, b, c) {
  null != ie.cursor ? E("168") : void 0;W(ie, b, a);W(X, c, a);
}function pe(a, b) {
  var c = a.stateNode,
      d = a.type.childContextTypes;if ("function" !== typeof c.getChildContext) return b;c = c.getChildContext();for (var e in c) {
    e in d ? void 0 : E("108", jd(a) || "Unknown", e);
  }return B({}, b, c);
}function qe(a) {
  if (!le(a)) return !1;var b = a.stateNode;b = b && b.__reactInternalMemoizedMergedChildContext || D;je = ie.current;W(ie, b, a);W(X, X.current, a);return !0;
}
function re(a, b) {
  var c = a.stateNode;c ? void 0 : E("169");if (b) {
    var d = pe(a, je);c.__reactInternalMemoizedMergedChildContext = d;V(X, a);V(ie, a);W(ie, d, a);
  } else V(X, a);W(X, b, a);
}
function Y(a, b, c) {
  this.tag = a;this.key = b;this.stateNode = this.type = null;this.sibling = this.child = this["return"] = null;this.index = 0;this.memoizedState = this.updateQueue = this.memoizedProps = this.pendingProps = this.ref = null;this.internalContextTag = c;this.effectTag = 0;this.lastEffect = this.firstEffect = this.nextEffect = null;this.expirationTime = 0;this.alternate = null;
}
function se(a, b, c) {
  var d = a.alternate;null === d ? (d = new Y(a.tag, a.key, a.internalContextTag), d.type = a.type, d.stateNode = a.stateNode, d.alternate = a, a.alternate = d) : (d.effectTag = 0, d.nextEffect = null, d.firstEffect = null, d.lastEffect = null);d.expirationTime = c;d.pendingProps = b;d.child = a.child;d.memoizedProps = a.memoizedProps;d.memoizedState = a.memoizedState;d.updateQueue = a.updateQueue;d.sibling = a.sibling;d.index = a.index;d.ref = a.ref;return d;
}
function te(a, b, c) {
  var d = void 0,
      e = a.type,
      f = a.key;"function" === typeof e ? (d = e.prototype && e.prototype.isReactComponent ? new Y(2, f, b) : new Y(0, f, b), d.type = e, d.pendingProps = a.props) : "string" === typeof e ? (d = new Y(5, f, b), d.type = e, d.pendingProps = a.props) : "object" === (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && "number" === typeof e.tag ? (d = e, d.pendingProps = a.props) : E("130", null == e ? e : typeof e === "undefined" ? "undefined" : _typeof(e), "");d.expirationTime = c;return d;
}function ue(a, b, c, d) {
  b = new Y(10, d, b);b.pendingProps = a;b.expirationTime = c;return b;
}
function ve(a, b, c) {
  b = new Y(6, null, b);b.pendingProps = a;b.expirationTime = c;return b;
}function we(a, b, c) {
  b = new Y(7, a.key, b);b.type = a.handler;b.pendingProps = a;b.expirationTime = c;return b;
}function xe(a, b, c) {
  a = new Y(9, null, b);a.expirationTime = c;return a;
}function ye(a, b, c) {
  b = new Y(4, a.key, b);b.pendingProps = a.children || [];b.expirationTime = c;b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };return b;
}var ze = null,
    Ae = null;
function Be(a) {
  return function (b) {
    try {
      return a(b);
    } catch (c) {}
  };
}function Ce(a) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;if (b.isDisabled || !b.supportsFiber) return !0;try {
    var c = b.inject(a);ze = Be(function (a) {
      return b.onCommitFiberRoot(c, a);
    });Ae = Be(function (a) {
      return b.onCommitFiberUnmount(c, a);
    });
  } catch (d) {}return !0;
}function De(a) {
  "function" === typeof ze && ze(a);
}function Ee(a) {
  "function" === typeof Ae && Ae(a);
}
function Fe(a) {
  return { baseState: a, expirationTime: 0, first: null, last: null, callbackList: null, hasForceUpdate: !1, isInitialized: !1 };
}function Ge(a, b) {
  null === a.last ? a.first = a.last = b : (a.last.next = b, a.last = b);if (0 === a.expirationTime || a.expirationTime > b.expirationTime) a.expirationTime = b.expirationTime;
}
function He(a, b) {
  var c = a.alternate,
      d = a.updateQueue;null === d && (d = a.updateQueue = Fe(null));null !== c ? (a = c.updateQueue, null === a && (a = c.updateQueue = Fe(null))) : a = null;a = a !== d ? a : null;null === a ? Ge(d, b) : null === d.last || null === a.last ? (Ge(d, b), Ge(a, b)) : (Ge(d, b), a.last = b);
}function Ie(a, b, c, d) {
  a = a.partialState;return "function" === typeof a ? a.call(b, c, d) : a;
}
function Je(a, b, c, d, e, f) {
  null !== a && a.updateQueue === c && (c = b.updateQueue = { baseState: c.baseState, expirationTime: c.expirationTime, first: c.first, last: c.last, isInitialized: c.isInitialized, callbackList: null, hasForceUpdate: !1 });c.expirationTime = 0;c.isInitialized ? a = c.baseState : (a = c.baseState = b.memoizedState, c.isInitialized = !0);for (var g = !0, h = c.first, k = !1; null !== h;) {
    var q = h.expirationTime;if (q > f) {
      var v = c.expirationTime;if (0 === v || v > q) c.expirationTime = q;k || (k = !0, c.baseState = a);
    } else {
      k || (c.first = h.next, null === c.first && (c.last = null));if (h.isReplace) a = Ie(h, d, a, e), g = !0;else if (q = Ie(h, d, a, e)) a = g ? B({}, a, q) : B(a, q), g = !1;h.isForced && (c.hasForceUpdate = !0);null !== h.callback && (q = c.callbackList, null === q && (q = c.callbackList = []), q.push(h));
    }h = h.next;
  }null !== c.callbackList ? b.effectTag |= 32 : null !== c.first || c.hasForceUpdate || (b.updateQueue = null);k || (c.baseState = a);return a;
}
function Ke(a, b) {
  var c = a.callbackList;if (null !== c) for (a.callbackList = null, a = 0; a < c.length; a++) {
    var d = c[a],
        e = d.callback;d.callback = null;"function" !== typeof e ? E("191", e) : void 0;e.call(b);
  }
}
function Le(a, b, c, d) {
  function e(a, b) {
    b.updater = f;a.stateNode = b;b._reactInternalFiber = a;
  }var f = { isMounted: ld, enqueueSetState: function enqueueSetState(c, d, e) {
      c = c._reactInternalFiber;e = void 0 === e ? null : e;var g = b(c);He(c, { expirationTime: g, partialState: d, callback: e, isReplace: !1, isForced: !1, nextCallback: null, next: null });a(c, g);
    }, enqueueReplaceState: function enqueueReplaceState(c, d, e) {
      c = c._reactInternalFiber;e = void 0 === e ? null : e;var g = b(c);He(c, { expirationTime: g, partialState: d, callback: e, isReplace: !0, isForced: !1, nextCallback: null, next: null });
      a(c, g);
    }, enqueueForceUpdate: function enqueueForceUpdate(c, d) {
      c = c._reactInternalFiber;d = void 0 === d ? null : d;var e = b(c);He(c, { expirationTime: e, partialState: null, callback: d, isReplace: !1, isForced: !0, nextCallback: null, next: null });a(c, e);
    } };return { adoptClassInstance: e, constructClassInstance: function constructClassInstance(a, b) {
      var c = a.type,
          d = ke(a),
          f = 2 === a.tag && null != a.type.contextTypes,
          g = f ? me(a, d) : D;b = new c(b, g);e(a, b);f && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = d, a.__reactInternalMemoizedMaskedChildContext = g);return b;
    }, mountClassInstance: function mountClassInstance(a, b) {
      var c = a.alternate,
          d = a.stateNode,
          e = d.state || null,
          g = a.pendingProps;g ? void 0 : E("158");var h = ke(a);d.props = g;d.state = a.memoizedState = e;d.refs = D;d.context = me(a, h);null != a.type && null != a.type.prototype && !0 === a.type.prototype.unstable_isAsyncReactComponent && (a.internalContextTag |= 1);"function" === typeof d.componentWillMount && (e = d.state, d.componentWillMount(), e !== d.state && f.enqueueReplaceState(d, d.state, null), e = a.updateQueue, null !== e && (d.state = Je(c, a, e, d, g, b)));"function" === typeof d.componentDidMount && (a.effectTag |= 4);
    }, updateClassInstance: function updateClassInstance(a, b, e) {
      var g = b.stateNode;g.props = b.memoizedProps;g.state = b.memoizedState;var h = b.memoizedProps,
          k = b.pendingProps;k || (k = h, null == k ? E("159") : void 0);var u = g.context,
          z = ke(b);z = me(b, z);"function" !== typeof g.componentWillReceiveProps || h === k && u === z || (u = g.state, g.componentWillReceiveProps(k, z), g.state !== u && f.enqueueReplaceState(g, g.state, null));u = b.memoizedState;e = null !== b.updateQueue ? Je(a, b, b.updateQueue, g, k, e) : u;if (!(h !== k || u !== e || X.current || null !== b.updateQueue && b.updateQueue.hasForceUpdate)) return "function" !== typeof g.componentDidUpdate || h === a.memoizedProps && u === a.memoizedState || (b.effectTag |= 4), !1;var G = k;if (null === h || null !== b.updateQueue && b.updateQueue.hasForceUpdate) G = !0;else {
        var I = b.stateNode,
            L = b.type;G = "function" === typeof I.shouldComponentUpdate ? I.shouldComponentUpdate(G, e, z) : L.prototype && L.prototype.isPureReactComponent ? !ea(h, G) || !ea(u, e) : !0;
      }G ? ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(k, e, z), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && u === a.memoizedState || (b.effectTag |= 4), c(b, k), d(b, e));g.props = k;g.state = e;g.context = z;return G;
    } };
}var Qe = "function" === typeof Symbol && Symbol["for"],
    Re = Qe ? Symbol["for"]("react.element") : 60103,
    Se = Qe ? Symbol["for"]("react.call") : 60104,
    Te = Qe ? Symbol["for"]("react.return") : 60105,
    Ue = Qe ? Symbol["for"]("react.portal") : 60106,
    Ve = Qe ? Symbol["for"]("react.fragment") : 60107,
    We = "function" === typeof Symbol && Symbol.iterator;
function Xe(a) {
  if (null === a || "undefined" === typeof a) return null;a = We && a[We] || a["@@iterator"];return "function" === typeof a ? a : null;
}var Ye = Array.isArray;
function Ze(a, b) {
  var c = b.ref;if (null !== c && "function" !== typeof c) {
    if (b._owner) {
      b = b._owner;var d = void 0;b && (2 !== b.tag ? E("110") : void 0, d = b.stateNode);d ? void 0 : E("147", c);var e = "" + c;if (null !== a && null !== a.ref && a.ref._stringRef === e) return a.ref;a = function a(_a) {
        var b = d.refs === D ? d.refs = {} : d.refs;null === _a ? delete b[e] : b[e] = _a;
      };a._stringRef = e;return a;
    }"string" !== typeof c ? E("148") : void 0;b._owner ? void 0 : E("149", c);
  }return c;
}
function $e(a, b) {
  "textarea" !== a.type && E("31", "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
}
function af(a) {
  function b(b, c) {
    if (a) {
      var d = b.lastEffect;null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;c.nextEffect = null;c.effectTag = 8;
    }
  }function c(c, d) {
    if (!a) return null;for (; null !== d;) {
      b(c, d), d = d.sibling;
    }return null;
  }function d(a, b) {
    for (a = new Map(); null !== b;) {
      null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    }return a;
  }function e(a, b, c) {
    a = se(a, b, c);a.index = 0;a.sibling = null;return a;
  }function f(b, c, d) {
    b.index = d;if (!a) return c;d = b.alternate;if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;b.effectTag = 2;return c;
  }function g(b) {
    a && null === b.alternate && (b.effectTag = 2);return b;
  }function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = ve(c, a.internalContextTag, d), b["return"] = a, b;b = e(b, c, d);b["return"] = a;return b;
  }function k(a, b, c, d) {
    if (null !== b && b.type === c.type) return d = e(b, c.props, d), d.ref = Ze(b, c), d["return"] = a, d;d = te(c, a.internalContextTag, d);d.ref = Ze(b, c);d["return"] = a;return d;
  }function q(a, b, c, d) {
    if (null === b || 7 !== b.tag) return b = we(c, a.internalContextTag, d), b["return"] = a, b;b = e(b, c, d);
    b["return"] = a;return b;
  }function v(a, b, c, d) {
    if (null === b || 9 !== b.tag) return b = xe(c, a.internalContextTag, d), b.type = c.value, b["return"] = a, b;b = e(b, null, d);b.type = c.value;b["return"] = a;return b;
  }function y(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = ye(c, a.internalContextTag, d), b["return"] = a, b;b = e(b, c.children || [], d);b["return"] = a;return b;
  }function u(a, b, c, d, f) {
    if (null === b || 10 !== b.tag) return b = ue(c, a.internalContextTag, d, f), b["return"] = a, b;b = e(b, c, d);b["return"] = a;return b;
  }function z(a, b, c) {
    if ("string" === typeof b || "number" === typeof b) return b = ve("" + b, a.internalContextTag, c), b["return"] = a, b;if ("object" === (typeof b === "undefined" ? "undefined" : _typeof(b)) && null !== b) {
      switch (b.$$typeof) {case Re:
          if (b.type === Ve) return b = ue(b.props.children, a.internalContextTag, c, b.key), b["return"] = a, b;c = te(b, a.internalContextTag, c);c.ref = Ze(null, b);c["return"] = a;return c;case Se:
          return b = we(b, a.internalContextTag, c), b["return"] = a, b;case Te:
          return c = xe(b, a.internalContextTag, c), c.type = b.value, c["return"] = a, c;case Ue:
          return b = ye(b, a.internalContextTag, c), b["return"] = a, b;}if (Ye(b) || Xe(b)) return b = ue(b, a.internalContextTag, c, null), b["return"] = a, b;$e(a, b);
    }return null;
  }function G(a, b, c, d) {
    var e = null !== b ? b.key : null;if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);if ("object" === (typeof c === "undefined" ? "undefined" : _typeof(c)) && null !== c) {
      switch (c.$$typeof) {case Re:
          return c.key === e ? c.type === Ve ? u(a, b, c.props.children, d, e) : k(a, b, c, d) : null;case Se:
          return c.key === e ? q(a, b, c, d) : null;case Te:
          return null === e ? v(a, b, c, d) : null;case Ue:
          return c.key === e ? y(a, b, c, d) : null;}if (Ye(c) || Xe(c)) return null !== e ? null : u(a, b, c, d, null);$e(a, c);
    }return null;
  }function I(a, b, c, d, e) {
    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);if ("object" === (typeof d === "undefined" ? "undefined" : _typeof(d)) && null !== d) {
      switch (d.$$typeof) {case Re:
          return a = a.get(null === d.key ? c : d.key) || null, d.type === Ve ? u(b, a, d.props.children, e, d.key) : k(b, a, d, e);case Se:
          return a = a.get(null === d.key ? c : d.key) || null, q(b, a, d, e);case Te:
          return a = a.get(c) || null, v(b, a, d, e);case Ue:
          return a = a.get(null === d.key ? c : d.key) || null, y(b, a, d, e);}if (Ye(d) || Xe(d)) return a = a.get(c) || null, u(b, a, d, e, null);$e(b, d);
    }return null;
  }function L(e, g, m, A) {
    for (var h = null, r = null, n = g, w = g = 0, k = null; null !== n && w < m.length; w++) {
      n.index > w ? (k = n, n = null) : k = n.sibling;var x = G(e, n, m[w], A);if (null === x) {
        null === n && (n = k);break;
      }a && n && null === x.alternate && b(e, n);g = f(x, g, w);null === r ? h = x : r.sibling = x;r = x;n = k;
    }if (w === m.length) return c(e, n), h;if (null === n) {
      for (; w < m.length; w++) {
        if (n = z(e, m[w], A)) g = f(n, g, w), null === r ? h = n : r.sibling = n, r = n;
      }return h;
    }for (n = d(e, n); w < m.length; w++) {
      if (k = I(n, e, w, m[w], A)) {
        if (a && null !== k.alternate) n["delete"](null === k.key ? w : k.key);g = f(k, g, w);null === r ? h = k : r.sibling = k;r = k;
      }
    }a && n.forEach(function (a) {
      return b(e, a);
    });return h;
  }function N(e, g, m, A) {
    var h = Xe(m);"function" !== typeof h ? E("150") : void 0;m = h.call(m);null == m ? E("151") : void 0;for (var r = h = null, n = g, w = g = 0, k = null, x = m.next(); null !== n && !x.done; w++, x = m.next()) {
      n.index > w ? (k = n, n = null) : k = n.sibling;var J = G(e, n, x.value, A);if (null === J) {
        n || (n = k);break;
      }a && n && null === J.alternate && b(e, n);g = f(J, g, w);null === r ? h = J : r.sibling = J;r = J;n = k;
    }if (x.done) return c(e, n), h;if (null === n) {
      for (; !x.done; w++, x = m.next()) {
        x = z(e, x.value, A), null !== x && (g = f(x, g, w), null === r ? h = x : r.sibling = x, r = x);
      }return h;
    }for (n = d(e, n); !x.done; w++, x = m.next()) {
      if (x = I(n, e, w, x.value, A), null !== x) {
        if (a && null !== x.alternate) n["delete"](null === x.key ? w : x.key);g = f(x, g, w);null === r ? h = x : r.sibling = x;r = x;
      }
    }a && n.forEach(function (a) {
      return b(e, a);
    });return h;
  }return function (a, d, f, h) {
    "object" === (typeof f === "undefined" ? "undefined" : _typeof(f)) && null !== f && f.type === Ve && null === f.key && (f = f.props.children);
    var m = "object" === (typeof f === "undefined" ? "undefined" : _typeof(f)) && null !== f;if (m) switch (f.$$typeof) {case Re:
        a: {
          var r = f.key;for (m = d; null !== m;) {
            if (m.key === r) {
              if (10 === m.tag ? f.type === Ve : m.type === f.type) {
                c(a, m.sibling);d = e(m, f.type === Ve ? f.props.children : f.props, h);d.ref = Ze(m, f);d["return"] = a;a = d;break a;
              } else {
                c(a, m);break;
              }
            } else b(a, m);m = m.sibling;
          }f.type === Ve ? (d = ue(f.props.children, a.internalContextTag, h, f.key), d["return"] = a, a = d) : (h = te(f, a.internalContextTag, h), h.ref = Ze(d, f), h["return"] = a, a = h);
        }return g(a);case Se:
        a: {
          for (m = f.key; null !== d;) {
            if (d.key === m) {
              if (7 === d.tag) {
                c(a, d.sibling);d = e(d, f, h);d["return"] = a;a = d;break a;
              } else {
                c(a, d);break;
              }
            } else b(a, d);d = d.sibling;
          }d = we(f, a.internalContextTag, h);d["return"] = a;a = d;
        }return g(a);case Te:
        a: {
          if (null !== d) if (9 === d.tag) {
            c(a, d.sibling);d = e(d, null, h);d.type = f.value;d["return"] = a;a = d;break a;
          } else c(a, d);d = xe(f, a.internalContextTag, h);d.type = f.value;d["return"] = a;a = d;
        }return g(a);case Ue:
        a: {
          for (m = f.key; null !== d;) {
            if (d.key === m) {
              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);d = e(d, f.children || [], h);d["return"] = a;a = d;break a;
              } else {
                c(a, d);break;
              }
            } else b(a, d);d = d.sibling;
          }d = ye(f, a.internalContextTag, h);d["return"] = a;a = d;
        }return g(a);}if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h)) : (c(a, d), d = ve(f, a.internalContextTag, h)), d["return"] = a, a = d, g(a);if (Ye(f)) return L(a, d, f, h);if (Xe(f)) return N(a, d, f, h);m && $e(a, f);if ("undefined" === typeof f) switch (a.tag) {case 2:case 1:
        h = a.type, E("152", h.displayName || h.name || "Component");}return c(a, d);
  };
}var bf = af(!0),
    cf = af(!1);
function df(a, b, c, d, e) {
  function f(a, b, c) {
    var d = b.expirationTime;b.child = null === a ? cf(b, null, c, d) : bf(b, a.child, c, d);
  }function g(a, b) {
    var c = b.ref;null === c || a && a.ref === c || (b.effectTag |= 128);
  }function h(a, b, c, d) {
    g(a, b);if (!c) return d && re(b, !1), q(a, b);c = b.stateNode;id.current = b;var e = c.render();b.effectTag |= 1;f(a, b, e);b.memoizedState = c.state;b.memoizedProps = c.props;d && re(b, !0);return b.child;
  }function k(a) {
    var b = a.stateNode;b.pendingContext ? oe(a, b.pendingContext, b.pendingContext !== b.context) : b.context && oe(a, b.context, !1);I(a, b.containerInfo);
  }function q(a, b) {
    null !== a && b.child !== a.child ? E("153") : void 0;if (null !== b.child) {
      a = b.child;var c = se(a, a.pendingProps, a.expirationTime);b.child = c;for (c["return"] = b; null !== a.sibling;) {
        a = a.sibling, c = c.sibling = se(a, a.pendingProps, a.expirationTime), c["return"] = b;
      }c.sibling = null;
    }return b.child;
  }function v(a, b) {
    switch (b.tag) {case 3:
        k(b);break;case 2:
        qe(b);break;case 4:
        I(b, b.stateNode.containerInfo);}return null;
  }var y = a.shouldSetTextContent,
      u = a.useSyncScheduling,
      z = a.shouldDeprioritizeSubtree,
      G = b.pushHostContext,
      I = b.pushHostContainer,
      L = c.enterHydrationState,
      N = c.resetHydrationState,
      J = c.tryToClaimNextHydratableInstance;a = Le(d, e, function (a, b) {
    a.memoizedProps = b;
  }, function (a, b) {
    a.memoizedState = b;
  });var w = a.adoptClassInstance,
      m = a.constructClassInstance,
      A = a.mountClassInstance,
      Ob = a.updateClassInstance;return { beginWork: function beginWork(a, b, c) {
      if (0 === b.expirationTime || b.expirationTime > c) return v(a, b);switch (b.tag) {case 0:
          null !== a ? E("155") : void 0;var d = b.type,
              e = b.pendingProps,
              r = ke(b);r = me(b, r);d = d(e, r);b.effectTag |= 1;"object" === (typeof d === "undefined" ? "undefined" : _typeof(d)) && null !== d && "function" === typeof d.render ? (b.tag = 2, e = qe(b), w(b, d), A(b, c), b = h(a, b, !0, e)) : (b.tag = 1, f(a, b, d), b.memoizedProps = e, b = b.child);return b;case 1:
          a: {
            e = b.type;c = b.pendingProps;d = b.memoizedProps;if (X.current) null === c && (c = d);else if (null === c || d === c) {
              b = q(a, b);break a;
            }d = ke(b);d = me(b, d);e = e(c, d);b.effectTag |= 1;f(a, b, e);b.memoizedProps = c;b = b.child;
          }return b;case 2:
          return e = qe(b), d = void 0, null === a ? b.stateNode ? E("153") : (m(b, b.pendingProps), A(b, c), d = !0) : d = Ob(a, b, c), h(a, b, d, e);case 3:
          return k(b), e = b.updateQueue, null !== e ? (d = b.memoizedState, e = Je(a, b, e, null, null, c), d === e ? (N(), b = q(a, b)) : (d = e.element, r = b.stateNode, (null === a || null === a.child) && r.hydrate && L(b) ? (b.effectTag |= 2, b.child = cf(b, null, d, c)) : (N(), f(a, b, d)), b.memoizedState = e, b = b.child)) : (N(), b = q(a, b)), b;case 5:
          G(b);null === a && J(b);e = b.type;var n = b.memoizedProps;d = b.pendingProps;null === d && (d = n, null === d ? E("154") : void 0);r = null !== a ? a.memoizedProps : null;X.current || null !== d && n !== d ? (n = d.children, y(e, d) ? n = null : r && y(e, r) && (b.effectTag |= 16), g(a, b), 2147483647 !== c && !u && z(e, d) ? (b.expirationTime = 2147483647, b = null) : (f(a, b, n), b.memoizedProps = d, b = b.child)) : b = q(a, b);return b;case 6:
          return null === a && J(b), a = b.pendingProps, null === a && (a = b.memoizedProps), b.memoizedProps = a, null;case 8:
          b.tag = 7;case 7:
          e = b.pendingProps;if (X.current) null === e && (e = a && a.memoizedProps, null === e ? E("154") : void 0);else if (null === e || b.memoizedProps === e) e = b.memoizedProps;d = e.children;b.stateNode = null === a ? cf(b, b.stateNode, d, c) : bf(b, b.stateNode, d, c);b.memoizedProps = e;return b.stateNode;
        case 9:
          return null;case 4:
          a: {
            I(b, b.stateNode.containerInfo);e = b.pendingProps;if (X.current) null === e && (e = a && a.memoizedProps, null == e ? E("154") : void 0);else if (null === e || b.memoizedProps === e) {
              b = q(a, b);break a;
            }null === a ? b.child = bf(b, null, e, c) : f(a, b, e);b.memoizedProps = e;b = b.child;
          }return b;case 10:
          a: {
            c = b.pendingProps;if (X.current) null === c && (c = b.memoizedProps);else if (null === c || b.memoizedProps === c) {
              b = q(a, b);break a;
            }f(a, b, c);b.memoizedProps = c;b = b.child;
          }return b;default:
          E("156");}
    }, beginFailedWork: function beginFailedWork(a, b, c) {
      switch (b.tag) {case 2:
          qe(b);break;case 3:
          k(b);break;default:
          E("157");}b.effectTag |= 64;null === a ? b.child = null : b.child !== a.child && (b.child = a.child);if (0 === b.expirationTime || b.expirationTime > c) return v(a, b);b.firstEffect = null;b.lastEffect = null;b.child = null === a ? cf(b, null, null, c) : bf(b, a.child, null, c);2 === b.tag && (a = b.stateNode, b.memoizedProps = a.props, b.memoizedState = a.state);return b.child;
    } };
}
function ef(a, b, c) {
  function d(a) {
    a.effectTag |= 4;
  }var e = a.createInstance,
      f = a.createTextInstance,
      g = a.appendInitialChild,
      h = a.finalizeInitialChildren,
      k = a.prepareUpdate,
      q = a.persistence,
      v = b.getRootHostContainer,
      y = b.popHostContext,
      u = b.getHostContext,
      z = b.popHostContainer,
      G = c.prepareToHydrateHostInstance,
      I = c.prepareToHydrateHostTextInstance,
      L = c.popHydrationState,
      N = void 0,
      J = void 0,
      w = void 0;a.mutation ? (N = function N() {}, J = function J(a, b, c) {
    (b.updateQueue = c) && d(b);
  }, w = function w(a, b, c, e) {
    c !== e && d(b);
  }) : q ? E("235") : E("236");
  return { completeWork: function completeWork(a, b, c) {
      var m = b.pendingProps;if (null === m) m = b.memoizedProps;else if (2147483647 !== b.expirationTime || 2147483647 === c) b.pendingProps = null;switch (b.tag) {case 1:
          return null;case 2:
          return ne(b), null;case 3:
          z(b);V(X, b);V(ie, b);m = b.stateNode;m.pendingContext && (m.context = m.pendingContext, m.pendingContext = null);if (null === a || null === a.child) L(b), b.effectTag &= -3;N(b);return null;case 5:
          y(b);c = v();var A = b.type;if (null !== a && null != b.stateNode) {
            var p = a.memoizedProps,
                q = b.stateNode,
                x = u();q = k(q, A, p, m, c, x);J(a, b, q, A, p, m, c);a.ref !== b.ref && (b.effectTag |= 128);
          } else {
            if (!m) return null === b.stateNode ? E("166") : void 0, null;a = u();if (L(b)) G(b, c, a) && d(b);else {
              a = e(A, m, c, a, b);a: for (p = b.child; null !== p;) {
                if (5 === p.tag || 6 === p.tag) g(a, p.stateNode);else if (4 !== p.tag && null !== p.child) {
                  p.child["return"] = p;p = p.child;continue;
                }if (p === b) break;for (; null === p.sibling;) {
                  if (null === p["return"] || p["return"] === b) break a;p = p["return"];
                }p.sibling["return"] = p["return"];p = p.sibling;
              }h(a, A, m, c) && d(b);b.stateNode = a;
            }null !== b.ref && (b.effectTag |= 128);
          }return null;case 6:
          if (a && null != b.stateNode) w(a, b, a.memoizedProps, m);else {
            if ("string" !== typeof m) return null === b.stateNode ? E("166") : void 0, null;a = v();c = u();L(b) ? I(b) && d(b) : b.stateNode = f(m, a, c, b);
          }return null;case 7:
          (m = b.memoizedProps) ? void 0 : E("165");b.tag = 8;A = [];a: for ((p = b.stateNode) && (p["return"] = b); null !== p;) {
            if (5 === p.tag || 6 === p.tag || 4 === p.tag) E("247");else if (9 === p.tag) A.push(p.type);else if (null !== p.child) {
              p.child["return"] = p;p = p.child;continue;
            }for (; null === p.sibling;) {
              if (null === p["return"] || p["return"] === b) break a;p = p["return"];
            }p.sibling["return"] = p["return"];p = p.sibling;
          }p = m.handler;m = p(m.props, A);b.child = bf(b, null !== a ? a.child : null, m, c);return b.child;case 8:
          return b.tag = 7, null;case 9:
          return null;case 10:
          return null;case 4:
          return z(b), N(b), null;case 0:
          E("167");default:
          E("156");}
    } };
}
function ff(a, b) {
  function c(a) {
    var c = a.ref;if (null !== c) try {
      c(null);
    } catch (A) {
      b(a, A);
    }
  }function d(a) {
    "function" === typeof Ee && Ee(a);switch (a.tag) {case 2:
        c(a);var d = a.stateNode;if ("function" === typeof d.componentWillUnmount) try {
          d.props = a.memoizedProps, d.state = a.memoizedState, d.componentWillUnmount();
        } catch (A) {
          b(a, A);
        }break;case 5:
        c(a);break;case 7:
        e(a.stateNode);break;case 4:
        k && g(a);}
  }function e(a) {
    for (var b = a;;) {
      if (d(b), null === b.child || k && 4 === b.tag) {
        if (b === a) break;for (; null === b.sibling;) {
          if (null === b["return"] || b["return"] === a) return;b = b["return"];
        }b.sibling["return"] = b["return"];b = b.sibling;
      } else b.child["return"] = b, b = b.child;
    }
  }function f(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }function g(a) {
    for (var b = a, c = !1, f = void 0, g = void 0;;) {
      if (!c) {
        c = b["return"];a: for (;;) {
          null === c ? E("160") : void 0;switch (c.tag) {case 5:
              f = c.stateNode;g = !1;break a;case 3:
              f = c.stateNode.containerInfo;g = !0;break a;case 4:
              f = c.stateNode.containerInfo;g = !0;break a;}c = c["return"];
        }c = !0;
      }if (5 === b.tag || 6 === b.tag) e(b), g ? J(f, b.stateNode) : N(f, b.stateNode);else if (4 === b.tag ? f = b.stateNode.containerInfo : d(b), null !== b.child) {
        b.child["return"] = b;b = b.child;continue;
      }if (b === a) break;for (; null === b.sibling;) {
        if (null === b["return"] || b["return"] === a) return;b = b["return"];4 === b.tag && (c = !1);
      }b.sibling["return"] = b["return"];b = b.sibling;
    }
  }var h = a.getPublicInstance,
      k = a.mutation;a = a.persistence;k || (a ? E("235") : E("236"));var q = k.commitMount,
      v = k.commitUpdate,
      y = k.resetTextContent,
      u = k.commitTextUpdate,
      z = k.appendChild,
      G = k.appendChildToContainer,
      I = k.insertBefore,
      L = k.insertInContainerBefore,
      N = k.removeChild,
      J = k.removeChildFromContainer;return { commitResetTextContent: function commitResetTextContent(a) {
      y(a.stateNode);
    }, commitPlacement: function commitPlacement(a) {
      a: {
        for (var b = a["return"]; null !== b;) {
          if (f(b)) {
            var c = b;break a;
          }b = b["return"];
        }E("160");c = void 0;
      }var d = b = void 0;switch (c.tag) {case 5:
          b = c.stateNode;d = !1;break;case 3:
          b = c.stateNode.containerInfo;d = !0;break;case 4:
          b = c.stateNode.containerInfo;d = !0;break;default:
          E("161");}c.effectTag & 16 && (y(b), c.effectTag &= -17);a: b: for (c = a;;) {
        for (; null === c.sibling;) {
          if (null === c["return"] || f(c["return"])) {
            c = null;break a;
          }c = c["return"];
        }c.sibling["return"] = c["return"];for (c = c.sibling; 5 !== c.tag && 6 !== c.tag;) {
          if (c.effectTag & 2) continue b;if (null === c.child || 4 === c.tag) continue b;else c.child["return"] = c, c = c.child;
        }if (!(c.effectTag & 2)) {
          c = c.stateNode;break a;
        }
      }for (var e = a;;) {
        if (5 === e.tag || 6 === e.tag) c ? d ? L(b, e.stateNode, c) : I(b, e.stateNode, c) : d ? G(b, e.stateNode) : z(b, e.stateNode);else if (4 !== e.tag && null !== e.child) {
          e.child["return"] = e;e = e.child;continue;
        }if (e === a) break;for (; null === e.sibling;) {
          if (null === e["return"] || e["return"] === a) return;e = e["return"];
        }e.sibling["return"] = e["return"];e = e.sibling;
      }
    }, commitDeletion: function commitDeletion(a) {
      g(a);a["return"] = null;a.child = null;a.alternate && (a.alternate.child = null, a.alternate["return"] = null);
    }, commitWork: function commitWork(a, b) {
      switch (b.tag) {case 2:
          break;case 5:
          var c = b.stateNode;if (null != c) {
            var d = b.memoizedProps;a = null !== a ? a.memoizedProps : d;var e = b.type,
                f = b.updateQueue;b.updateQueue = null;null !== f && v(c, f, e, a, d, b);
          }break;case 6:
          null === b.stateNode ? E("162") : void 0;c = b.memoizedProps;u(b.stateNode, null !== a ? a.memoizedProps : c, c);break;case 3:
          break;default:
          E("163");}
    }, commitLifeCycles: function commitLifeCycles(a, b) {
      switch (b.tag) {case 2:
          var c = b.stateNode;if (b.effectTag & 4) if (null === a) c.props = b.memoizedProps, c.state = b.memoizedState, c.componentDidMount();else {
            var d = a.memoizedProps;a = a.memoizedState;c.props = b.memoizedProps;c.state = b.memoizedState;c.componentDidUpdate(d, a);
          }b = b.updateQueue;null !== b && Ke(b, c);break;case 3:
          c = b.updateQueue;null !== c && Ke(c, null !== b.child ? b.child.stateNode : null);break;case 5:
          c = b.stateNode;null === a && b.effectTag & 4 && q(c, b.type, b.memoizedProps, b);break;case 6:
          break;case 4:
          break;default:
          E("163");}
    }, commitAttachRef: function commitAttachRef(a) {
      var b = a.ref;if (null !== b) {
        var c = a.stateNode;switch (a.tag) {case 5:
            b(h(c));break;default:
            b(c);}
      }
    }, commitDetachRef: function commitDetachRef(a) {
      a = a.ref;null !== a && a(null);
    } };
}var gf = {};
function hf(a) {
  function b(a) {
    a === gf ? E("174") : void 0;return a;
  }var c = a.getChildHostContext,
      d = a.getRootHostContext,
      e = { current: gf },
      f = { current: gf },
      g = { current: gf };return { getHostContext: function getHostContext() {
      return b(e.current);
    }, getRootHostContainer: function getRootHostContainer() {
      return b(g.current);
    }, popHostContainer: function popHostContainer(a) {
      V(e, a);V(f, a);V(g, a);
    }, popHostContext: function popHostContext(a) {
      f.current === a && (V(e, a), V(f, a));
    }, pushHostContainer: function pushHostContainer(a, b) {
      W(g, b, a);b = d(b);W(f, a, a);W(e, b, a);
    }, pushHostContext: function pushHostContext(a) {
      var d = b(g.current),
          h = b(e.current);
      d = c(h, a.type, d);h !== d && (W(f, a, a), W(e, d, a));
    }, resetHostContainer: function resetHostContainer() {
      e.current = gf;g.current = gf;
    } };
}
function jf(a) {
  function b(a, b) {
    var c = new Y(5, null, 0);c.type = "DELETED";c.stateNode = b;c["return"] = a;c.effectTag = 8;null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }function c(a, b) {
    switch (a.tag) {case 5:
        return b = f(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;case 6:
        return b = g(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;default:
        return !1;}
  }function d(a) {
    for (a = a["return"]; null !== a && 5 !== a.tag && 3 !== a.tag;) {
      a = a["return"];
    }y = a;
  }var e = a.shouldSetTextContent;
  a = a.hydration;if (!a) return { enterHydrationState: function enterHydrationState() {
      return !1;
    }, resetHydrationState: function resetHydrationState() {}, tryToClaimNextHydratableInstance: function tryToClaimNextHydratableInstance() {}, prepareToHydrateHostInstance: function prepareToHydrateHostInstance() {
      E("175");
    }, prepareToHydrateHostTextInstance: function prepareToHydrateHostTextInstance() {
      E("176");
    }, popHydrationState: function popHydrationState() {
      return !1;
    } };var f = a.canHydrateInstance,
      g = a.canHydrateTextInstance,
      h = a.getNextHydratableSibling,
      k = a.getFirstHydratableChild,
      q = a.hydrateInstance,
      v = a.hydrateTextInstance,
      y = null,
      u = null,
      z = !1;return { enterHydrationState: function enterHydrationState(a) {
      u = k(a.stateNode.containerInfo);y = a;return z = !0;
    }, resetHydrationState: function resetHydrationState() {
      u = y = null;z = !1;
    }, tryToClaimNextHydratableInstance: function tryToClaimNextHydratableInstance(a) {
      if (z) {
        var d = u;if (d) {
          if (!c(a, d)) {
            d = h(d);if (!d || !c(a, d)) {
              a.effectTag |= 2;z = !1;y = a;return;
            }b(y, u);
          }y = a;u = k(d);
        } else a.effectTag |= 2, z = !1, y = a;
      }
    }, prepareToHydrateHostInstance: function prepareToHydrateHostInstance(a, b, c) {
      b = q(a.stateNode, a.type, a.memoizedProps, b, c, a);a.updateQueue = b;return null !== b ? !0 : !1;
    }, prepareToHydrateHostTextInstance: function prepareToHydrateHostTextInstance(a) {
      return v(a.stateNode, a.memoizedProps, a);
    }, popHydrationState: function popHydrationState(a) {
      if (a !== y) return !1;if (!z) return d(a), z = !0, !1;var c = a.type;if (5 !== a.tag || "head" !== c && "body" !== c && !e(c, a.memoizedProps)) for (c = u; c;) {
        b(a, c), c = h(c);
      }d(a);u = y ? h(a.stateNode) : null;return !0;
    } };
}
function kf(a) {
  function b(a) {
    Qb = ja = !0;var b = a.stateNode;b.current === a ? E("177") : void 0;b.isReadyForCommit = !1;id.current = null;if (1 < a.effectTag) {
      if (null !== a.lastEffect) {
        a.lastEffect.nextEffect = a;var c = a.firstEffect;
      } else c = a;
    } else c = a.firstEffect;yg();for (t = c; null !== t;) {
      var d = !1,
          e = void 0;try {
        for (; null !== t;) {
          var f = t.effectTag;f & 16 && zg(t);if (f & 128) {
            var g = t.alternate;null !== g && Ag(g);
          }switch (f & -242) {case 2:
              Ne(t);t.effectTag &= -3;break;case 6:
              Ne(t);t.effectTag &= -3;Oe(t.alternate, t);break;case 4:
              Oe(t.alternate, t);break;case 8:
              Sc = !0, Bg(t), Sc = !1;}t = t.nextEffect;
        }
      } catch (Tc) {
        d = !0, e = Tc;
      }d && (null === t ? E("178") : void 0, h(t, e), null !== t && (t = t.nextEffect));
    }Cg();b.current = a;for (t = c; null !== t;) {
      c = !1;d = void 0;try {
        for (; null !== t;) {
          var k = t.effectTag;k & 36 && Dg(t.alternate, t);k & 128 && Eg(t);if (k & 64) switch (e = t, f = void 0, null !== R && (f = R.get(e), R["delete"](e), null == f && null !== e.alternate && (e = e.alternate, f = R.get(e), R["delete"](e))), null == f ? E("184") : void 0, e.tag) {case 2:
              e.stateNode.componentDidCatch(f.error, { componentStack: f.componentStack });
              break;case 3:
              null === ca && (ca = f.error);break;default:
              E("157");}var Qc = t.nextEffect;t.nextEffect = null;t = Qc;
        }
      } catch (Tc) {
        c = !0, d = Tc;
      }c && (null === t ? E("178") : void 0, h(t, d), null !== t && (t = t.nextEffect));
    }ja = Qb = !1;"function" === typeof De && De(a.stateNode);ha && (ha.forEach(G), ha = null);null !== ca && (a = ca, ca = null, Ob(a));b = b.current.expirationTime;0 === b && (qa = R = null);return b;
  }function c(a) {
    for (;;) {
      var b = Fg(a.alternate, a, H),
          c = a["return"],
          d = a.sibling;var e = a;if (2147483647 === H || 2147483647 !== e.expirationTime) {
        if (2 !== e.tag && 3 !== e.tag) var f = 0;else f = e.updateQueue, f = null === f ? 0 : f.expirationTime;for (var g = e.child; null !== g;) {
          0 !== g.expirationTime && (0 === f || f > g.expirationTime) && (f = g.expirationTime), g = g.sibling;
        }e.expirationTime = f;
      }if (null !== b) return b;null !== c && (null === c.firstEffect && (c.firstEffect = a.firstEffect), null !== a.lastEffect && (null !== c.lastEffect && (c.lastEffect.nextEffect = a.firstEffect), c.lastEffect = a.lastEffect), 1 < a.effectTag && (null !== c.lastEffect ? c.lastEffect.nextEffect = a : c.firstEffect = a, c.lastEffect = a));if (null !== d) return d;
      if (null !== c) a = c;else {
        a.stateNode.isReadyForCommit = !0;break;
      }
    }return null;
  }function d(a) {
    var b = rg(a.alternate, a, H);null === b && (b = c(a));id.current = null;return b;
  }function e(a) {
    var b = Gg(a.alternate, a, H);null === b && (b = c(a));id.current = null;return b;
  }function f(a) {
    if (null !== R) {
      if (!(0 === H || H > a)) if (H <= Uc) for (; null !== F;) {
        F = k(F) ? e(F) : d(F);
      } else for (; null !== F && !A();) {
        F = k(F) ? e(F) : d(F);
      }
    } else if (!(0 === H || H > a)) if (H <= Uc) for (; null !== F;) {
      F = d(F);
    } else for (; null !== F && !A();) {
      F = d(F);
    }
  }function g(a, b) {
    ja ? E("243") : void 0;ja = !0;a.isReadyForCommit = !1;if (a !== ra || b !== H || null === F) {
      for (; -1 < he;) {
        ge[he] = null, he--;
      }je = D;ie.current = D;X.current = !1;x();ra = a;H = b;F = se(ra.current, null, b);
    }var c = !1,
        d = null;try {
      f(b);
    } catch (Rc) {
      c = !0, d = Rc;
    }for (; c;) {
      if (eb) {
        ca = d;break;
      }var g = F;if (null === g) eb = !0;else {
        var k = h(g, d);null === k ? E("183") : void 0;if (!eb) {
          try {
            c = k;d = b;for (k = c; null !== g;) {
              switch (g.tag) {case 2:
                  ne(g);break;case 5:
                  qg(g);break;case 3:
                  p(g);break;case 4:
                  p(g);}if (g === k || g.alternate === k) break;g = g["return"];
            }F = e(c);f(d);
          } catch (Rc) {
            c = !0;d = Rc;continue;
          }break;
        }
      }
    }b = ca;eb = ja = !1;ca = null;null !== b && Ob(b);return a.isReadyForCommit ? a.current.alternate : null;
  }function h(a, b) {
    var c = id.current = null,
        d = !1,
        e = !1,
        f = null;if (3 === a.tag) c = a, q(a) && (eb = !0);else for (var g = a["return"]; null !== g && null === c;) {
      2 === g.tag ? "function" === typeof g.stateNode.componentDidCatch && (d = !0, f = jd(g), c = g, e = !0) : 3 === g.tag && (c = g);if (q(g)) {
        if (Sc || null !== ha && (ha.has(g) || null !== g.alternate && ha.has(g.alternate))) return null;c = null;e = !1;
      }g = g["return"];
    }if (null !== c) {
      null === qa && (qa = new Set());qa.add(c);var h = "";g = a;do {
        a: switch (g.tag) {case 0:case 1:case 2:case 5:
            var k = g._debugOwner,
                Qc = g._debugSource;var m = jd(g);var n = null;k && (n = jd(k));k = Qc;m = "\n    in " + (m || "Unknown") + (k ? " (at " + k.fileName.replace(/^.*[\\\/]/, "") + ":" + k.lineNumber + ")" : n ? " (created by " + n + ")" : "");break a;default:
            m = "";}h += m;g = g["return"];
      } while (g);g = h;a = jd(a);null === R && (R = new Map());b = { componentName: a, componentStack: g, error: b, errorBoundary: d ? c.stateNode : null, errorBoundaryFound: d, errorBoundaryName: f, willRetry: e };R.set(c, b);try {
        var p = b.error;p && p.suppressReactErrorLogging || console.error(p);
      } catch (Vc) {
        Vc && Vc.suppressReactErrorLogging || console.error(Vc);
      }Qb ? (null === ha && (ha = new Set()), ha.add(c)) : G(c);return c;
    }null === ca && (ca = b);return null;
  }function k(a) {
    return null !== R && (R.has(a) || null !== a.alternate && R.has(a.alternate));
  }function q(a) {
    return null !== qa && (qa.has(a) || null !== a.alternate && qa.has(a.alternate));
  }function v() {
    return 20 * (((I() + 100) / 20 | 0) + 1);
  }function y(a) {
    return 0 !== ka ? ka : ja ? Qb ? 1 : H : !Hg || a.internalContextTag & 1 ? v() : 1;
  }function u(a, b) {
    return z(a, b, !1);
  }function z(a, b) {
    for (; null !== a;) {
      if (0 === a.expirationTime || a.expirationTime > b) a.expirationTime = b;null !== a.alternate && (0 === a.alternate.expirationTime || a.alternate.expirationTime > b) && (a.alternate.expirationTime = b);if (null === a["return"]) if (3 === a.tag) {
        var c = a.stateNode;!ja && c === ra && b < H && (F = ra = null, H = 0);var d = c,
            e = b;Rb > Ig && E("185");if (null === d.nextScheduledRoot) d.remainingExpirationTime = e, null === O ? (sa = O = d, d.nextScheduledRoot = d) : (O = O.nextScheduledRoot = d, O.nextScheduledRoot = sa);else {
          var f = d.remainingExpirationTime;if (0 === f || e < f) d.remainingExpirationTime = e;
        }Fa || (la ? Sb && (ma = d, na = 1, m(ma, na)) : 1 === e ? w(1, null) : L(e));!ja && c === ra && b < H && (F = ra = null, H = 0);
      } else break;a = a["return"];
    }
  }function G(a) {
    z(a, 1, !0);
  }function I() {
    return Uc = ((Wc() - Pe) / 10 | 0) + 2;
  }function L(a) {
    if (0 !== Tb) {
      if (a > Tb) return;Jg(Xc);
    }var b = Wc() - Pe;Tb = a;Xc = Kg(J, { timeout: 10 * (a - 2) - b });
  }function N() {
    var a = 0,
        b = null;if (null !== O) for (var c = O, d = sa; null !== d;) {
      var e = d.remainingExpirationTime;if (0 === e) {
        null === c || null === O ? E("244") : void 0;if (d === d.nextScheduledRoot) {
          sa = O = d.nextScheduledRoot = null;break;
        } else if (d === sa) sa = e = d.nextScheduledRoot, O.nextScheduledRoot = e, d.nextScheduledRoot = null;else if (d === O) {
          O = c;O.nextScheduledRoot = sa;d.nextScheduledRoot = null;break;
        } else c.nextScheduledRoot = d.nextScheduledRoot, d.nextScheduledRoot = null;d = c.nextScheduledRoot;
      } else {
        if (0 === a || e < a) a = e, b = d;if (d === O) break;c = d;d = d.nextScheduledRoot;
      }
    }c = ma;null !== c && c === b ? Rb++ : Rb = 0;ma = b;na = a;
  }function J(a) {
    w(0, a);
  }function w(a, b) {
    fb = b;for (N(); null !== ma && 0 !== na && (0 === a || na <= a) && !Yc;) {
      m(ma, na), N();
    }null !== fb && (Tb = 0, Xc = -1);0 !== na && L(na);fb = null;Yc = !1;Rb = 0;if (Ub) throw a = Zc, Zc = null, Ub = !1, a;
  }function m(a, c) {
    Fa ? E("245") : void 0;Fa = !0;if (c <= I()) {
      var d = a.finishedWork;null !== d ? (a.finishedWork = null, a.remainingExpirationTime = b(d)) : (a.finishedWork = null, d = g(a, c), null !== d && (a.remainingExpirationTime = b(d)));
    } else d = a.finishedWork, null !== d ? (a.finishedWork = null, a.remainingExpirationTime = b(d)) : (a.finishedWork = null, d = g(a, c), null !== d && (A() ? a.finishedWork = d : a.remainingExpirationTime = b(d)));Fa = !1;
  }function A() {
    return null === fb || fb.timeRemaining() > Lg ? !1 : Yc = !0;
  }function Ob(a) {
    null === ma ? E("246") : void 0;ma.remainingExpirationTime = 0;Ub || (Ub = !0, Zc = a);
  }var r = hf(a),
      n = jf(a),
      p = r.popHostContainer,
      qg = r.popHostContext,
      x = r.resetHostContainer,
      Me = df(a, r, n, u, y),
      rg = Me.beginWork,
      Gg = Me.beginFailedWork,
      Fg = ef(a, r, n).completeWork;r = ff(a, h);var zg = r.commitResetTextContent,
      Ne = r.commitPlacement,
      Bg = r.commitDeletion,
      Oe = r.commitWork,
      Dg = r.commitLifeCycles,
      Eg = r.commitAttachRef,
      Ag = r.commitDetachRef,
      Wc = a.now,
      Kg = a.scheduleDeferredCallback,
      Jg = a.cancelDeferredCallback,
      Hg = a.useSyncScheduling,
      yg = a.prepareForCommit,
      Cg = a.resetAfterCommit,
      Pe = Wc(),
      Uc = 2,
      ka = 0,
      ja = !1,
      F = null,
      ra = null,
      H = 0,
      t = null,
      R = null,
      qa = null,
      ha = null,
      ca = null,
      eb = !1,
      Qb = !1,
      Sc = !1,
      sa = null,
      O = null,
      Tb = 0,
      Xc = -1,
      Fa = !1,
      ma = null,
      na = 0,
      Yc = !1,
      Ub = !1,
      Zc = null,
      fb = null,
      la = !1,
      Sb = !1,
      Ig = 1E3,
      Rb = 0,
      Lg = 1;return { computeAsyncExpiration: v, computeExpirationForFiber: y, scheduleWork: u, batchedUpdates: function batchedUpdates(a, b) {
      var c = la;la = !0;try {
        return a(b);
      } finally {
        (la = c) || Fa || w(1, null);
      }
    }, unbatchedUpdates: function unbatchedUpdates(a) {
      if (la && !Sb) {
        Sb = !0;try {
          return a();
        } finally {
          Sb = !1;
        }
      }return a();
    }, flushSync: function flushSync(a) {
      var b = la;la = !0;try {
        a: {
          var c = ka;ka = 1;try {
            var d = a();break a;
          } finally {
            ka = c;
          }d = void 0;
        }return d;
      } finally {
        la = b, Fa ? E("187") : void 0, w(1, null);
      }
    }, deferredUpdates: function deferredUpdates(a) {
      var b = ka;ka = v();try {
        return a();
      } finally {
        ka = b;
      }
    } };
}
function lf(a) {
  function b(a) {
    a = od(a);return null === a ? null : a.stateNode;
  }var c = a.getPublicInstance;a = kf(a);var d = a.computeAsyncExpiration,
      e = a.computeExpirationForFiber,
      f = a.scheduleWork;return { createContainer: function createContainer(a, b) {
      var c = new Y(3, null, 0);a = { current: c, containerInfo: a, pendingChildren: null, remainingExpirationTime: 0, isReadyForCommit: !1, finishedWork: null, context: null, pendingContext: null, hydrate: b, nextScheduledRoot: null };return c.stateNode = a;
    }, updateContainer: function updateContainer(a, b, c, q) {
      var g = b.current;if (c) {
        c = c._reactInternalFiber;var h;b: {
          2 === kd(c) && 2 === c.tag ? void 0 : E("170");for (h = c; 3 !== h.tag;) {
            if (le(h)) {
              h = h.stateNode.__reactInternalMemoizedMergedChildContext;break b;
            }(h = h["return"]) ? void 0 : E("171");
          }h = h.stateNode.context;
        }c = le(c) ? pe(c, h) : h;
      } else c = D;null === b.context ? b.context = c : b.pendingContext = c;b = q;b = void 0 === b ? null : b;q = null != a && null != a.type && null != a.type.prototype && !0 === a.type.prototype.unstable_isAsyncReactComponent ? d() : e(g);He(g, { expirationTime: q, partialState: { element: a }, callback: b, isReplace: !1, isForced: !1,
        nextCallback: null, next: null });f(g, q);
    }, batchedUpdates: a.batchedUpdates, unbatchedUpdates: a.unbatchedUpdates, deferredUpdates: a.deferredUpdates, flushSync: a.flushSync, getPublicRootInstance: function getPublicRootInstance(a) {
      a = a.current;if (!a.child) return null;switch (a.child.tag) {case 5:
          return c(a.child.stateNode);default:
          return a.child.stateNode;}
    }, findHostInstance: b, findHostInstanceWithNoPortals: function findHostInstanceWithNoPortals(a) {
      a = pd(a);return null === a ? null : a.stateNode;
    }, injectIntoDevTools: function injectIntoDevTools(a) {
      var c = a.findFiberByHostInstance;return Ce(B({}, a, { findHostInstanceByFiber: function findHostInstanceByFiber(a) {
          return b(a);
        }, findFiberByHostInstance: function findFiberByHostInstance(a) {
          return c ? c(a) : null;
        } }));
    } };
}var mf = Object.freeze({ default: lf }),
    nf = mf && lf || mf,
    of = nf["default"] ? nf["default"] : nf;function pf(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;return { $$typeof: Ue, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}var qf = "object" === (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && "function" === typeof performance.now,
    rf = void 0;rf = qf ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
var sf = void 0,
    tf = void 0;
if (l.canUseDOM) {
  if ("function" !== typeof requestIdleCallback || "function" !== typeof cancelIdleCallback) {
    var uf = null,
        vf = !1,
        wf = -1,
        xf = !1,
        yf = 0,
        zf = 33,
        Af = 33,
        Bf;Bf = qf ? { didTimeout: !1, timeRemaining: function timeRemaining() {
        var a = yf - performance.now();return 0 < a ? a : 0;
      } } : { didTimeout: !1, timeRemaining: function timeRemaining() {
        var a = yf - Date.now();return 0 < a ? a : 0;
      } };var Cf = "__reactIdleCallback$" + Math.random().toString(36).slice(2);window.addEventListener("message", function (a) {
      if (a.source === window && a.data === Cf) {
        vf = !1;a = rf();if (0 >= yf - a) {
          if (-1 !== wf && wf <= a) Bf.didTimeout = !0;else {
            xf || (xf = !0, requestAnimationFrame(Df));return;
          }
        } else Bf.didTimeout = !1;wf = -1;a = uf;uf = null;null !== a && a(Bf);
      }
    }, !1);var Df = function Df(a) {
      xf = !1;var b = a - yf + Af;b < Af && zf < Af ? (8 > b && (b = 8), Af = b < zf ? zf : b) : zf = b;yf = a + Af;vf || (vf = !0, window.postMessage(Cf, "*"));
    };sf = function sf(a, b) {
      uf = a;null != b && "number" === typeof b.timeout && (wf = rf() + b.timeout);xf || (xf = !0, requestAnimationFrame(Df));return 0;
    };tf = function tf() {
      uf = null;vf = !1;wf = -1;
    };
  } else sf = window.requestIdleCallback, tf = window.cancelIdleCallback;
} else sf = function sf(a) {
  return setTimeout(function () {
    a({ timeRemaining: function timeRemaining() {
        return Infinity;
      } });
  });
}, tf = function tf(a) {
  clearTimeout(a);
};var Ef = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ff = {},
    Gf = {};
function Hf(a) {
  if (Gf.hasOwnProperty(a)) return !0;if (Ff.hasOwnProperty(a)) return !1;if (Ef.test(a)) return Gf[a] = !0;Ff[a] = !0;return !1;
}
function If(a, b, c) {
  var d = wa(b);if (d && va(b, c)) {
    var e = d.mutationMethod;e ? e(a, c) : null == c || d.hasBooleanValue && !c || d.hasNumericValue && isNaN(c) || d.hasPositiveNumericValue && 1 > c || d.hasOverloadedBooleanValue && !1 === c ? Jf(a, b) : d.mustUseProperty ? a[d.propertyName] = c : (b = d.attributeName, (e = d.attributeNamespace) ? a.setAttributeNS(e, b, "" + c) : d.hasBooleanValue || d.hasOverloadedBooleanValue && !0 === c ? a.setAttribute(b, "") : a.setAttribute(b, "" + c));
  } else Kf(a, b, va(b, c) ? c : null);
}
function Kf(a, b, c) {
  Hf(b) && (null == c ? a.removeAttribute(b) : a.setAttribute(b, "" + c));
}function Jf(a, b) {
  var c = wa(b);c ? (b = c.mutationMethod) ? b(a, void 0) : c.mustUseProperty ? a[c.propertyName] = c.hasBooleanValue ? !1 : "" : a.removeAttribute(c.attributeName) : a.removeAttribute(b);
}
function Lf(a, b) {
  var c = b.value,
      d = b.checked;return B({ type: void 0, step: void 0, min: void 0, max: void 0 }, b, { defaultChecked: void 0, defaultValue: void 0, value: null != c ? c : a._wrapperState.initialValue, checked: null != d ? d : a._wrapperState.initialChecked });
}function Mf(a, b) {
  var c = b.defaultValue;a._wrapperState = { initialChecked: null != b.checked ? b.checked : b.defaultChecked, initialValue: null != b.value ? b.value : c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function Nf(a, b) {
  b = b.checked;null != b && If(a, "checked", b);
}function Of(a, b) {
  Nf(a, b);var c = b.value;if (null != c) {
    if (0 === c && "" === a.value) a.value = "0";else if ("number" === b.type) {
      if (b = parseFloat(a.value) || 0, c != b || c == b && a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else null == b.value && null != b.defaultValue && a.defaultValue !== "" + b.defaultValue && (a.defaultValue = "" + b.defaultValue), null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function Pf(a, b) {
  switch (b.type) {case "submit":case "reset":
      break;case "color":case "date":case "datetime":case "datetime-local":case "month":case "time":case "week":
      a.value = "";a.value = a.defaultValue;break;default:
      a.value = a.value;}b = a.name;"" !== b && (a.name = "");a.defaultChecked = !a.defaultChecked;a.defaultChecked = !a.defaultChecked;"" !== b && (a.name = b);
}function Qf(a) {
  var b = "";aa.Children.forEach(a, function (a) {
    null == a || "string" !== typeof a && "number" !== typeof a || (b += a);
  });return b;
}
function Rf(a, b) {
  a = B({ children: void 0 }, b);if (b = Qf(b.children)) a.children = b;return a;
}function Sf(a, b, c, d) {
  a = a.options;if (b) {
    b = {};for (var e = 0; e < c.length; e++) {
      b["$" + c[e]] = !0;
    }for (c = 0; c < a.length; c++) {
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    }
  } else {
    c = "" + c;b = null;for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;d && (a[e].defaultSelected = !0);return;
      }null !== b || a[e].disabled || (b = a[e]);
    }null !== b && (b.selected = !0);
  }
}
function Tf(a, b) {
  var c = b.value;a._wrapperState = { initialValue: null != c ? c : b.defaultValue, wasMultiple: !!b.multiple };
}function Uf(a, b) {
  null != b.dangerouslySetInnerHTML ? E("91") : void 0;return B({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}function Vf(a, b) {
  var c = b.value;null == c && (c = b.defaultValue, b = b.children, null != b && (null != c ? E("92") : void 0, Array.isArray(b) && (1 >= b.length ? void 0 : E("93"), b = b[0]), c = "" + b), null == c && (c = ""));a._wrapperState = { initialValue: "" + c };
}
function Wf(a, b) {
  var c = b.value;null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && (a.defaultValue = c));null != b.defaultValue && (a.defaultValue = b.defaultValue);
}function Xf(a) {
  var b = a.textContent;b === a._wrapperState.initialValue && (a.value = b);
}var Yf = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function Zf(a) {
  switch (a) {case "svg":
      return "http://www.w3.org/2000/svg";case "math":
      return "http://www.w3.org/1998/Math/MathML";default:
      return "http://www.w3.org/1999/xhtml";}
}function $f(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? Zf(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var ag = void 0,
    bg = function (a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function () {
      return a(b, c, d, e);
    });
  } : a;
}(function (a, b) {
  if (a.namespaceURI !== Yf.svg || "innerHTML" in a) a.innerHTML = b;else {
    ag = ag || document.createElement("div");ag.innerHTML = "\x3csvg\x3e" + b + "\x3c/svg\x3e";for (b = ag.firstChild; a.firstChild;) {
      a.removeChild(a.firstChild);
    }for (; b.firstChild;) {
      a.appendChild(b.firstChild);
    }
  }
});
function cg(a, b) {
  if (b) {
    var c = a.firstChild;if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;return;
    }
  }a.textContent = b;
}
var dg = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0,
  stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    eg = ["Webkit", "ms", "Moz", "O"];Object.keys(dg).forEach(function (a) {
  eg.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);dg[b] = dg[a];
  });
});
function fg(a, b) {
  a = a.style;for (var c in b) {
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--");var e = c;var f = b[c];e = null == f || "boolean" === typeof f || "" === f ? "" : d || "number" !== typeof f || 0 === f || dg.hasOwnProperty(e) && dg[e] ? ("" + f).trim() : f + "px";"float" === c && (c = "cssFloat");d ? a.setProperty(c, e) : a[c] = e;
    }
  }
}var gg = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function hg(a, b, c) {
  b && (gg[a] && (null != b.children || null != b.dangerouslySetInnerHTML ? E("137", a, c()) : void 0), null != b.dangerouslySetInnerHTML && (null != b.children ? E("60") : void 0, "object" === _typeof(b.dangerouslySetInnerHTML) && "__html" in b.dangerouslySetInnerHTML ? void 0 : E("61")), null != b.style && "object" !== _typeof(b.style) ? E("62", c()) : void 0);
}
function ig(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;switch (a) {case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":
      return !1;default:
      return !0;}
}var jg = Yf.html,
    kg = C.thatReturns("");
function lg(a, b) {
  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;var c = Hd(a);b = Sa[b];for (var d = 0; d < b.length; d++) {
    var e = b[d];c.hasOwnProperty(e) && c[e] || ("topScroll" === e ? wd("topScroll", "scroll", a) : "topFocus" === e || "topBlur" === e ? (wd("topFocus", "focus", a), wd("topBlur", "blur", a), c.topBlur = !0, c.topFocus = !0) : "topCancel" === e ? (yc("cancel", !0) && wd("topCancel", "cancel", a), c.topCancel = !0) : "topClose" === e ? (yc("close", !0) && wd("topClose", "close", a), c.topClose = !0) : Dd.hasOwnProperty(e) && U(e, Dd[e], a), c[e] = !0);
  }
}
var mg = { topAbort: "abort", topCanPlay: "canplay", topCanPlayThrough: "canplaythrough", topDurationChange: "durationchange", topEmptied: "emptied", topEncrypted: "encrypted", topEnded: "ended", topError: "error", topLoadedData: "loadeddata", topLoadedMetadata: "loadedmetadata", topLoadStart: "loadstart", topPause: "pause", topPlay: "play", topPlaying: "playing", topProgress: "progress", topRateChange: "ratechange", topSeeked: "seeked", topSeeking: "seeking", topStalled: "stalled", topSuspend: "suspend", topTimeUpdate: "timeupdate", topVolumeChange: "volumechange",
  topWaiting: "waiting" };function ng(a, b, c, d) {
  c = 9 === c.nodeType ? c : c.ownerDocument;d === jg && (d = Zf(a));d === jg ? "script" === a ? (a = c.createElement("div"), a.innerHTML = "\x3cscript\x3e\x3c/script\x3e", a = a.removeChild(a.firstChild)) : a = "string" === typeof b.is ? c.createElement(a, { is: b.is }) : c.createElement(a) : a = c.createElementNS(d, a);return a;
}function og(a, b) {
  return (9 === b.nodeType ? b : b.ownerDocument).createTextNode(a);
}
function pg(a, b, c, d) {
  var e = ig(b, c);switch (b) {case "iframe":case "object":
      U("topLoad", "load", a);var f = c;break;case "video":case "audio":
      for (f in mg) {
        mg.hasOwnProperty(f) && U(f, mg[f], a);
      }f = c;break;case "source":
      U("topError", "error", a);f = c;break;case "img":case "image":
      U("topError", "error", a);U("topLoad", "load", a);f = c;break;case "form":
      U("topReset", "reset", a);U("topSubmit", "submit", a);f = c;break;case "details":
      U("topToggle", "toggle", a);f = c;break;case "input":
      Mf(a, c);f = Lf(a, c);U("topInvalid", "invalid", a);
      lg(d, "onChange");break;case "option":
      f = Rf(a, c);break;case "select":
      Tf(a, c);f = B({}, c, { value: void 0 });U("topInvalid", "invalid", a);lg(d, "onChange");break;case "textarea":
      Vf(a, c);f = Uf(a, c);U("topInvalid", "invalid", a);lg(d, "onChange");break;default:
      f = c;}hg(b, f, kg);var g = f,
      h;for (h in g) {
    if (g.hasOwnProperty(h)) {
      var k = g[h];"style" === h ? fg(a, k, kg) : "dangerouslySetInnerHTML" === h ? (k = k ? k.__html : void 0, null != k && bg(a, k)) : "children" === h ? "string" === typeof k ? ("textarea" !== b || "" !== k) && cg(a, k) : "number" === typeof k && cg(a, "" + k) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (Ra.hasOwnProperty(h) ? null != k && lg(d, h) : e ? Kf(a, h, k) : null != k && If(a, h, k));
    }
  }switch (b) {case "input":
      Bc(a);Pf(a, c);break;case "textarea":
      Bc(a);Xf(a, c);break;case "option":
      null != c.value && a.setAttribute("value", c.value);break;case "select":
      a.multiple = !!c.multiple;b = c.value;null != b ? Sf(a, !!c.multiple, b, !1) : null != c.defaultValue && Sf(a, !!c.multiple, c.defaultValue, !0);break;default:
      "function" === typeof f.onClick && (a.onclick = C);}
}
function sg(a, b, c, d, e) {
  var f = null;switch (b) {case "input":
      c = Lf(a, c);d = Lf(a, d);f = [];break;case "option":
      c = Rf(a, c);d = Rf(a, d);f = [];break;case "select":
      c = B({}, c, { value: void 0 });d = B({}, d, { value: void 0 });f = [];break;case "textarea":
      c = Uf(a, c);d = Uf(a, d);f = [];break;default:
      "function" !== typeof c.onClick && "function" === typeof d.onClick && (a.onclick = C);}hg(b, d, kg);var g, h;a = null;for (g in c) {
    if (!d.hasOwnProperty(g) && c.hasOwnProperty(g) && null != c[g]) if ("style" === g) for (h in b = c[g], b) {
      b.hasOwnProperty(h) && (a || (a = {}), a[h] = "");
    } else "dangerouslySetInnerHTML" !== g && "children" !== g && "suppressContentEditableWarning" !== g && "suppressHydrationWarning" !== g && "autoFocus" !== g && (Ra.hasOwnProperty(g) ? f || (f = []) : (f = f || []).push(g, null));
  }for (g in d) {
    var k = d[g];b = null != c ? c[g] : void 0;if (d.hasOwnProperty(g) && k !== b && (null != k || null != b)) if ("style" === g) {
      if (b) {
        for (h in b) {
          !b.hasOwnProperty(h) || k && k.hasOwnProperty(h) || (a || (a = {}), a[h] = "");
        }for (h in k) {
          k.hasOwnProperty(h) && b[h] !== k[h] && (a || (a = {}), a[h] = k[h]);
        }
      } else a || (f || (f = []), f.push(g, a)), a = k;
    } else "dangerouslySetInnerHTML" === g ? (k = k ? k.__html : void 0, b = b ? b.__html : void 0, null != k && b !== k && (f = f || []).push(g, "" + k)) : "children" === g ? b === k || "string" !== typeof k && "number" !== typeof k || (f = f || []).push(g, "" + k) : "suppressContentEditableWarning" !== g && "suppressHydrationWarning" !== g && (Ra.hasOwnProperty(g) ? (null != k && lg(e, g), f || b === k || (f = [])) : (f = f || []).push(g, k));
  }a && (f = f || []).push("style", a);return f;
}
function tg(a, b, c, d, e) {
  "input" === c && "radio" === e.type && null != e.name && Nf(a, e);ig(c, d);d = ig(c, e);for (var f = 0; f < b.length; f += 2) {
    var g = b[f],
        h = b[f + 1];"style" === g ? fg(a, h, kg) : "dangerouslySetInnerHTML" === g ? bg(a, h) : "children" === g ? cg(a, h) : d ? null != h ? Kf(a, g, h) : a.removeAttribute(g) : null != h ? If(a, g, h) : Jf(a, g);
  }switch (c) {case "input":
      Of(a, e);break;case "textarea":
      Wf(a, e);break;case "select":
      a._wrapperState.initialValue = void 0, b = a._wrapperState.wasMultiple, a._wrapperState.wasMultiple = !!e.multiple, c = e.value, null != c ? Sf(a, !!e.multiple, c, !1) : b !== !!e.multiple && (null != e.defaultValue ? Sf(a, !!e.multiple, e.defaultValue, !0) : Sf(a, !!e.multiple, e.multiple ? [] : "", !1));}
}
function ug(a, b, c, d, e) {
  switch (b) {case "iframe":case "object":
      U("topLoad", "load", a);break;case "video":case "audio":
      for (var f in mg) {
        mg.hasOwnProperty(f) && U(f, mg[f], a);
      }break;case "source":
      U("topError", "error", a);break;case "img":case "image":
      U("topError", "error", a);U("topLoad", "load", a);break;case "form":
      U("topReset", "reset", a);U("topSubmit", "submit", a);break;case "details":
      U("topToggle", "toggle", a);break;case "input":
      Mf(a, c);U("topInvalid", "invalid", a);lg(e, "onChange");break;case "select":
      Tf(a, c);
      U("topInvalid", "invalid", a);lg(e, "onChange");break;case "textarea":
      Vf(a, c), U("topInvalid", "invalid", a), lg(e, "onChange");}hg(b, c, kg);d = null;for (var g in c) {
    c.hasOwnProperty(g) && (f = c[g], "children" === g ? "string" === typeof f ? a.textContent !== f && (d = ["children", f]) : "number" === typeof f && a.textContent !== "" + f && (d = ["children", "" + f]) : Ra.hasOwnProperty(g) && null != f && lg(e, g));
  }switch (b) {case "input":
      Bc(a);Pf(a, c);break;case "textarea":
      Bc(a);Xf(a, c);break;case "select":case "option":
      break;default:
      "function" === typeof c.onClick && (a.onclick = C);}return d;
}function vg(a, b) {
  return a.nodeValue !== b;
}
var wg = Object.freeze({ createElement: ng, createTextNode: og, setInitialProperties: pg, diffProperties: sg, updateProperties: tg, diffHydratedProperties: ug, diffHydratedText: vg, warnForUnmatchedText: function warnForUnmatchedText() {}, warnForDeletedHydratableElement: function warnForDeletedHydratableElement() {}, warnForDeletedHydratableText: function warnForDeletedHydratableText() {}, warnForInsertedHydratedElement: function warnForInsertedHydratedElement() {}, warnForInsertedHydratedText: function warnForInsertedHydratedText() {}, restoreControlledState: function restoreControlledState(a, b, c) {
    switch (b) {case "input":
        Of(a, c);b = c.name;if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode;) {
            c = c.parentNode;
          }c = c.querySelectorAll("input[name\x3d" + JSON.stringify("" + b) + '][type\x3d"radio"]');for (b = 0; b < c.length; b++) {
            var d = c[b];if (d !== a && d.form === a.form) {
              var e = rb(d);e ? void 0 : E("90");Cc(d);Of(d, e);
            }
          }
        }break;case "textarea":
        Wf(a, c);break;case "select":
        b = c.value, null != b && Sf(a, !!c.multiple, b, !1);}
  } });nc.injectFiberControlledHostComponent(wg);var xg = null,
    Mg = null;function Ng(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function Og(a) {
  a = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null;return !(!a || 1 !== a.nodeType || !a.hasAttribute("data-reactroot"));
}
var Z = of({ getRootHostContext: function getRootHostContext(a) {
    var b = a.nodeType;switch (b) {case 9:case 11:
        a = (a = a.documentElement) ? a.namespaceURI : $f(null, "");break;default:
        b = 8 === b ? a.parentNode : a, a = b.namespaceURI || null, b = b.tagName, a = $f(a, b);}return a;
  }, getChildHostContext: function getChildHostContext(a, b) {
    return $f(a, b);
  }, getPublicInstance: function getPublicInstance(a) {
    return a;
  }, prepareForCommit: function prepareForCommit() {
    xg = td;var a = da();if (Kd(a)) {
      if ("selectionStart" in a) var b = { start: a.selectionStart, end: a.selectionEnd };else a: {
        var c = window.getSelection && window.getSelection();
        if (c && 0 !== c.rangeCount) {
          b = c.anchorNode;var d = c.anchorOffset,
              e = c.focusNode;c = c.focusOffset;try {
            b.nodeType, e.nodeType;
          } catch (z) {
            b = null;break a;
          }var f = 0,
              g = -1,
              h = -1,
              k = 0,
              q = 0,
              v = a,
              y = null;b: for (;;) {
            for (var u;;) {
              v !== b || 0 !== d && 3 !== v.nodeType || (g = f + d);v !== e || 0 !== c && 3 !== v.nodeType || (h = f + c);3 === v.nodeType && (f += v.nodeValue.length);if (null === (u = v.firstChild)) break;y = v;v = u;
            }for (;;) {
              if (v === a) break b;y === b && ++k === d && (g = f);y === e && ++q === c && (h = f);if (null !== (u = v.nextSibling)) break;v = y;y = v.parentNode;
            }v = u;
          }b = -1 === g || -1 === h ? null : { start: g, end: h };
        } else b = null;
      }b = b || { start: 0, end: 0 };
    } else b = null;Mg = { focusedElem: a, selectionRange: b };ud(!1);
  }, resetAfterCommit: function resetAfterCommit() {
    var a = Mg,
        b = da(),
        c = a.focusedElem,
        d = a.selectionRange;if (b !== c && fa(document.documentElement, c)) {
      if (Kd(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (window.getSelection) {
        b = window.getSelection();var e = c[Eb()].length;a = Math.min(d.start, e);d = void 0 === d.end ? a : Math.min(d.end, e);!b.extend && a > d && (e = d, d = a, a = e);e = Jd(c, a);var f = Jd(c, d);if (e && f && (1 !== b.rangeCount || b.anchorNode !== e.node || b.anchorOffset !== e.offset || b.focusNode !== f.node || b.focusOffset !== f.offset)) {
          var g = document.createRange();g.setStart(e.node, e.offset);b.removeAllRanges();a > d ? (b.addRange(g), b.extend(f.node, f.offset)) : (g.setEnd(f.node, f.offset), b.addRange(g));
        }
      }b = [];for (a = c; a = a.parentNode;) {
        1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      }ia(c);for (c = 0; c < b.length; c++) {
        a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }Mg = null;ud(xg);xg = null;
  }, createInstance: function createInstance(a, b, c, d, e) {
    a = ng(a, b, c, d);a[Q] = e;a[ob] = b;return a;
  }, appendInitialChild: function appendInitialChild(a, b) {
    a.appendChild(b);
  }, finalizeInitialChildren: function finalizeInitialChildren(a, b, c, d) {
    pg(a, b, c, d);a: {
      switch (b) {case "button":case "input":case "select":case "textarea":
          a = !!c.autoFocus;break a;}a = !1;
    }return a;
  }, prepareUpdate: function prepareUpdate(a, b, c, d, e) {
    return sg(a, b, c, d, e);
  }, shouldSetTextContent: function shouldSetTextContent(a, b) {
    return "textarea" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === _typeof(b.dangerouslySetInnerHTML) && null !== b.dangerouslySetInnerHTML && "string" === typeof b.dangerouslySetInnerHTML.__html;
  }, shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree(a, b) {
    return !!b.hidden;
  }, createTextInstance: function createTextInstance(a, b, c, d) {
    a = og(a, b);a[Q] = d;return a;
  }, now: rf, mutation: { commitMount: function commitMount(a) {
      a.focus();
    }, commitUpdate: function commitUpdate(a, b, c, d, e) {
      a[ob] = e;tg(a, b, c, d, e);
    }, resetTextContent: function resetTextContent(a) {
      a.textContent = "";
    }, commitTextUpdate: function commitTextUpdate(a, b, c) {
      a.nodeValue = c;
    }, appendChild: function appendChild(a, b) {
      a.appendChild(b);
    }, appendChildToContainer: function appendChildToContainer(a, b) {
      8 === a.nodeType ? a.parentNode.insertBefore(b, a) : a.appendChild(b);
    }, insertBefore: function insertBefore(a, b, c) {
      a.insertBefore(b, c);
    }, insertInContainerBefore: function insertInContainerBefore(a, b, c) {
      8 === a.nodeType ? a.parentNode.insertBefore(b, c) : a.insertBefore(b, c);
    }, removeChild: function removeChild(a, b) {
      a.removeChild(b);
    }, removeChildFromContainer: function removeChildFromContainer(a, b) {
      8 === a.nodeType ? a.parentNode.removeChild(b) : a.removeChild(b);
    } }, hydration: { canHydrateInstance: function canHydrateInstance(a, b) {
      return 1 !== a.nodeType || b.toLowerCase() !== a.nodeName.toLowerCase() ? null : a;
    }, canHydrateTextInstance: function canHydrateTextInstance(a, b) {
      return "" === b || 3 !== a.nodeType ? null : a;
    }, getNextHydratableSibling: function getNextHydratableSibling(a) {
      for (a = a.nextSibling; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
        a = a.nextSibling;
      }return a;
    }, getFirstHydratableChild: function getFirstHydratableChild(a) {
      for (a = a.firstChild; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
        a = a.nextSibling;
      }return a;
    }, hydrateInstance: function hydrateInstance(a, b, c, d, e, f) {
      a[Q] = f;a[ob] = c;return ug(a, b, c, e, d);
    }, hydrateTextInstance: function hydrateTextInstance(a, b, c) {
      a[Q] = c;return vg(a, b);
    }, didNotMatchHydratedContainerTextInstance: function didNotMatchHydratedContainerTextInstance() {}, didNotMatchHydratedTextInstance: function didNotMatchHydratedTextInstance() {},
    didNotHydrateContainerInstance: function didNotHydrateContainerInstance() {}, didNotHydrateInstance: function didNotHydrateInstance() {}, didNotFindHydratableContainerInstance: function didNotFindHydratableContainerInstance() {}, didNotFindHydratableContainerTextInstance: function didNotFindHydratableContainerTextInstance() {}, didNotFindHydratableInstance: function didNotFindHydratableInstance() {}, didNotFindHydratableTextInstance: function didNotFindHydratableTextInstance() {} }, scheduleDeferredCallback: sf, cancelDeferredCallback: tf, useSyncScheduling: !0 });rc = Z.batchedUpdates;
function Pg(a, b, c, d, e) {
  Ng(c) ? void 0 : E("200");var f = c._reactRootContainer;if (f) Z.updateContainer(b, f, a, e);else {
    d = d || Og(c);if (!d) for (f = void 0; f = c.lastChild;) {
      c.removeChild(f);
    }var g = Z.createContainer(c, d);f = c._reactRootContainer = g;Z.unbatchedUpdates(function () {
      Z.updateContainer(b, g, a, e);
    });
  }return Z.getPublicRootInstance(f);
}function Qg(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;Ng(b) ? void 0 : E("200");return pf(a, b, null, c);
}
function Rg(a, b) {
  this._reactRootContainer = Z.createContainer(a, b);
}Rg.prototype.render = function (a, b) {
  Z.updateContainer(a, this._reactRootContainer, null, b);
};Rg.prototype.unmount = function (a) {
  Z.updateContainer(null, this._reactRootContainer, null, a);
};
var Sg = { createPortal: Qg, findDOMNode: function findDOMNode(a) {
    if (null == a) return null;if (1 === a.nodeType) return a;var b = a._reactInternalFiber;if (b) return Z.findHostInstance(b);"function" === typeof a.render ? E("188") : E("213", Object.keys(a));
  }, hydrate: function hydrate(a, b, c) {
    return Pg(null, a, b, !0, c);
  }, render: function render(a, b, c) {
    return Pg(null, a, b, !1, c);
  }, unstable_renderSubtreeIntoContainer: function unstable_renderSubtreeIntoContainer(a, b, c, d) {
    null == a || void 0 === a._reactInternalFiber ? E("38") : void 0;return Pg(a, b, c, !1, d);
  }, unmountComponentAtNode: function unmountComponentAtNode(a) {
    Ng(a) ? void 0 : E("40");return a._reactRootContainer ? (Z.unbatchedUpdates(function () {
      Pg(null, null, a, !1, function () {
        a._reactRootContainer = null;
      });
    }), !0) : !1;
  }, unstable_createPortal: Qg, unstable_batchedUpdates: tc, unstable_deferredUpdates: Z.deferredUpdates, flushSync: Z.flushSync, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { EventPluginHub: mb, EventPluginRegistry: Va, EventPropagators: Cb, ReactControlledComponent: qc, ReactDOMComponentTree: sb, ReactDOMEventListener: xd } };
Z.injectIntoDevTools({ findFiberByHostInstance: pb, bundleType: 0, version: "16.2.0", rendererPackageName: "react-dom" });var Tg = Object.freeze({ default: Sg }),
    Ug = Tg && Sg || Tg;module.exports = Ug["default"] ? Ug["default"] : Ug;

},{"fbjs/lib/EventListener":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\EventListener.js","fbjs/lib/ExecutionEnvironment":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\ExecutionEnvironment.js","fbjs/lib/containsNode":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\containsNode.js","fbjs/lib/emptyFunction":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyFunction.js","fbjs/lib/emptyObject":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyObject.js","fbjs/lib/focusNode":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\focusNode.js","fbjs/lib/getActiveElement":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\getActiveElement.js","fbjs/lib/shallowEqual":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\shallowEqual.js","object-assign":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object-assign\\index.js","react":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react-dom\\index.js":[function(require,module,exports){
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }
  if ("development" !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if ("development" === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}

},{"./cjs/react-dom.development.js":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react-dom\\cjs\\react-dom.development.js","./cjs/react-dom.production.min.js":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react-dom\\cjs\\react-dom.production.min.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\cjs\\react.development.js":[function(require,module,exports){
/** @license React v16.2.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if ("development" !== "production") {
  (function () {
    'use strict';

    var _assign = require('object-assign');
    var emptyObject = require('fbjs/lib/emptyObject');
    var invariant = require('fbjs/lib/invariant');
    var warning = require('fbjs/lib/warning');
    var emptyFunction = require('fbjs/lib/emptyFunction');
    var checkPropTypes = require('prop-types/checkPropTypes');

    // TODO: this is special because it gets imported during build.

    var ReactVersion = '16.2.0';

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
    var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
    var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable === 'undefined') {
        return null;
      }
      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }
      return null;
    }

    /**
     * WARNING: DO NOT manually require this module.
     * This is a replacement for `invariant(...)` used by the error code system
     * and will _only_ be required by the corresponding babel pass.
     * It always throws.
     */

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var lowPriorityWarning = function lowPriorityWarning() {};

    {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.warn(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function lowPriorityWarning(condition, format) {
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }

    var lowPriorityWarning$1 = lowPriorityWarning;

    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var constructor = publicInstance.constructor;
        var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
        var warningKey = componentName + '.' + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }
        warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }

    /**
     * This is the abstract API for an update queue.
     */
    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function isMounted(publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };

    /**
     * Base class helpers for the updating state of a component.
     */
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};

    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */
    Component.prototype.setState = function (partialState, callback) {
      !((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };

    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */
    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };

    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */
    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };
      var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function get() {
            lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };
      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    /**
     * Base class helpers for the updating state of a component.
     */
    function PureComponent(props, context, updater) {
      // Duplicated from Component.
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue;
    }

    function ComponentDummy() {}
    ComponentDummy.prototype = Component.prototype;
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    // Avoid an extra prototype jump for these methods.
    _assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;

    function AsyncComponent(props, context, updater) {
      // Duplicated from Component.
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      // We initialize the default updater but the real one gets injected by the
      // renderer.
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
    asyncComponentPrototype.constructor = AsyncComponent;
    // Avoid an extra prototype jump for these methods.
    _assign(asyncComponentPrototype, Component.prototype);
    asyncComponentPrototype.unstable_isAsyncReactComponent = true;
    asyncComponentPrototype.render = function () {
      return this.props.children;
    };

    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */
    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };

    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function warnAboutAccessingKey() {
        if (!specialPropKeyWarningShown) {
          specialPropKeyWarningShown = true;
          warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      };
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function warnAboutAccessingRef() {
        if (!specialPropRefWarningShown) {
          specialPropRefWarningShown = true;
          warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      };
      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }

    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, no instanceof check
     * will work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} key
     * @param {string|object} ref
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @param {*} owner
     * @param {*} props
     * @internal
     */
    var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allow us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,

        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,

        // Record the component responsible for creating this element.
        _owner: owner
      };

      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {};

        // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        });
        // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        });
        // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });
        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }

      return element;
    };

    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */
    function createElement(type, config, children) {
      var propName;

      // Reserved names are extracted
      var props = {};

      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source;
        // Remaining properties are added to a new props object
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }

      // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      }

      // Resolve default props
      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }
      {
        if (key || ref) {
          if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }

    /**
     * Return a function that produces ReactElements of a given type.
     * See https://reactjs.org/docs/react-api.html#createfactory
     */

    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

      return newElement;
    }

    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */
    function cloneElement(element, config, children) {
      var propName;

      // Original props are copied
      var props = _assign({}, element.props);

      // Reserved names are extracted
      var key = element.key;
      var ref = element.ref;
      // Self is preserved since the owner is preserved.
      var self = element._self;
      // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.
      var source = element._source;

      // Owner will be preserved, unless ref is overridden
      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        // Remaining properties override existing props
        var defaultProps;
        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      }

      // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }

    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a valid component.
     * @final
     */
    function isValidElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    var ReactDebugCurrentFrame = {};

    {
      // Component that is being worked on
      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        if (impl) {
          return impl();
        }
        return null;
      };
    }

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';

    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */
    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = ('' + key).replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });

      return '$' + escapedString;
    }

    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */

    var didWarnAboutMaps = false;

    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
      return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
    }

    var POOL_SIZE = 10;
    var traverseContextPool = [];
    function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
      if (traverseContextPool.length) {
        var traverseContext = traverseContextPool.pop();
        traverseContext.result = mapResult;
        traverseContext.keyPrefix = keyPrefix;
        traverseContext.func = mapFunction;
        traverseContext.context = mapContext;
        traverseContext.count = 0;
        return traverseContext;
      } else {
        return {
          result: mapResult,
          keyPrefix: keyPrefix,
          func: mapFunction,
          context: mapContext,
          count: 0
        };
      }
    }

    function releaseTraverseContext(traverseContext) {
      traverseContext.result = null;
      traverseContext.keyPrefix = null;
      traverseContext.func = null;
      traverseContext.context = null;
      traverseContext.count = 0;
      if (traverseContextPool.length < POOL_SIZE) {
        traverseContextPool.push(traverseContext);
      }
    }

    /**
     * @param {?*} children Children tree container.
     * @param {!string} nameSoFar Name of the key path so far.
     * @param {!function} callback Callback to invoke with each child found.
     * @param {?*} traverseContext Used to pass information throughout the traversal
     * process.
     * @return {!number} The number of children in this subtree.
     */
    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = typeof children === 'undefined' ? 'undefined' : _typeof(children);

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;
          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_CALL_TYPE:
              case REACT_RETURN_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }
        }
      }

      if (invokeCallback) {
        callback(traverseContext, children,
        // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows.
        nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }

      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.
      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);
        if (typeof iteratorFn === 'function') {
          {
            // Warn about using Maps as children
            if (iteratorFn === children.entries) {
              warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
              didWarnAboutMaps = true;
            }
          }

          var iterator = iteratorFn.call(children);
          var step;
          var ii = 0;
          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else if (type === 'object') {
          var addendum = '';
          {
            addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
          }
          var childrenString = '' + children;
          invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
        }
      }

      return subtreeCount;
    }

    /**
     * Traverses children that are typically specified as `props.children`, but
     * might also be specified through attributes:
     *
     * - `traverseAllChildren(this.props.children, ...)`
     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
     *
     * The `traverseContext` is an optional argument that is passed through the
     * entire traversal. It can be used to store accumulations or anything else that
     * the callback might find relevant.
     *
     * @param {?*} children Children tree object.
     * @param {!function} callback To invoke upon traversing each child.
     * @param {?*} traverseContext Context for traversal.
     * @return {!number} The number of children in this subtree.
     */
    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }

      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }

    /**
     * Generate a key string that identifies a component within a set.
     *
     * @param {*} component A component that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */
    function getComponentKey(component, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component !== null && component.key != null) {
        // Explicit key
        return escape(component.key);
      }
      // Implicit key determined by the index in the set
      return index.toString(36);
    }

    function forEachSingleChild(bookKeeping, child, name) {
      var func = bookKeeping.func,
          context = bookKeeping.context;

      func.call(context, child, bookKeeping.count++);
    }

    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#react.children.foreach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */
    function forEachChildren(children, forEachFunc, forEachContext) {
      if (children == null) {
        return children;
      }
      var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
      traverseAllChildren(children, forEachSingleChild, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    function mapSingleChildIntoContext(bookKeeping, child, childKey) {
      var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;

      var mappedChild = func.call(context, child, bookKeeping.count++);
      if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
      } else if (mappedChild != null) {
        if (isValidElement(mappedChild)) {
          mappedChild = cloneAndReplaceKey(mappedChild,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
        }
        result.push(mappedChild);
      }
    }

    function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
      var escapedPrefix = '';
      if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/';
      }
      var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#react.children.map
     *
     * The provided mapFunction(child, key, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */
    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, func, context);
      return result;
    }

    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#react.children.count
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */
    function countChildren(children, context) {
      return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
    }

    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#react.children.toarray
     */
    function toArray(children) {
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
      return result;
    }

    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#react.children.only
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */
    function onlyChild(children) {
      !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
      return children;
    }

    var describeComponentFrame = function describeComponentFrame(name, source, ownerName) {
      return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
    };

    function getComponentName(fiber) {
      var type = fiber.type;

      if (typeof type === 'string') {
        return type;
      }
      if (typeof type === 'function') {
        return type.displayName || type.name;
      }
      return null;
    }

    /**
     * ReactElementValidator provides a wrapper around a element factory
     * which validates the props passed to the element. This is intended to be
     * used only in DEV and could be replaced by a static type checker for languages
     * that support it.
     */

    {
      var currentlyValidatingElement = null;

      var propTypesMisspellWarningShown = false;

      var getDisplayName = function getDisplayName(element) {
        if (element == null) {
          return '#empty';
        } else if (typeof element === 'string' || typeof element === 'number') {
          return '#text';
        } else if (typeof element.type === 'string') {
          return element.type;
        } else if (element.type === REACT_FRAGMENT_TYPE) {
          return 'React.Fragment';
        } else {
          return element.type.displayName || element.type.name || 'Unknown';
        }
      };

      var getStackAddendum = function getStackAddendum() {
        var stack = '';
        if (currentlyValidatingElement) {
          var name = getDisplayName(currentlyValidatingElement);
          var owner = currentlyValidatingElement._owner;
          stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
        }
        stack += ReactDebugCurrentFrame.getStackAddendum() || '';
        return stack;
      };

      var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentName(ReactCurrentOwner.current);
        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }
      return '';
    }

    function getSourceInfoErrorAddendum(elementProps) {
      if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
        var source = elementProps.__source;
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }
      return '';
    }

    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */
    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
        if (parentName) {
          info = '\n\nCheck the top-level render call using <' + parentName + '>.';
        }
      }
      return info;
    }

    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */
    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }
      element._store.validated = true;

      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }
      ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

      // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.
      var childOwner = '';
      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
      }

      currentlyValidatingElement = element;
      {
        warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
      }
      currentlyValidatingElement = null;
    }

    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */
    function validateChildKeys(node, parentType) {
      if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') {
        return;
      }
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];
          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);
        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;
            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }

    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */
    function validatePropTypes(element) {
      var componentClass = element.type;
      if (typeof componentClass !== 'function') {
        return;
      }
      var name = componentClass.displayName || componentClass.name;
      var propTypes = componentClass.propTypes;
      if (propTypes) {
        currentlyValidatingElement = element;
        checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
        currentlyValidatingElement = null;
      } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
        propTypesMisspellWarningShown = true;
        warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
      }
      if (typeof componentClass.getDefaultProps === 'function') {
        warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
      }
    }

    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */
    function validateFragmentProps(fragment) {
      currentlyValidatingElement = fragment;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (!VALID_FRAGMENT_PROPS.has(key)) {
            warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (fragment.ref !== null) {
        warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
      }

      currentlyValidatingElement = null;
    }

    function createElementWithValidation(type, props, children) {
      var validType = typeof type === 'string' || typeof type === 'function' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol' || typeof type === 'number';
      // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.
      if (!validType) {
        var info = '';
        if (type === undefined || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += getStackAddendum() || '';

        warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type === 'undefined' ? 'undefined' : _typeof(type), info);
      }

      var element = createElement.apply(this, arguments);

      // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.
      if (element == null) {
        return element;
      }

      // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)
      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol' && type === REACT_FRAGMENT_TYPE) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }

    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      // Legacy hook TODO: Warn if this is accessed
      validatedFactory.type = type;

      {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function get() {
            lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }

      return validatedFactory;
    }

    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }
      validatePropTypes(newElement);
      return newElement;
    }

    var React = {
      Children: {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
      },

      Component: Component,
      PureComponent: PureComponent,
      unstable_AsyncComponent: AsyncComponent,

      Fragment: REACT_FRAGMENT_TYPE,

      createElement: createElementWithValidation,
      cloneElement: cloneElementWithValidation,
      createFactory: createFactoryWithValidation,
      isValidElement: isValidElement,

      version: ReactVersion,

      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentOwner: ReactCurrentOwner,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: _assign
      }
    };

    {
      _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
        // These should not be included in production.
        ReactDebugCurrentFrame: ReactDebugCurrentFrame,
        // Shim for React DOM 16.0.0 which still destructured (but not used) this.
        // TODO: remove in React 17.0.
        ReactComponentTreeHook: {}
      });
    }

    var React$2 = Object.freeze({
      default: React
    });

    var React$3 = React$2 && React || React$2;

    // TODO: decide on the top-level export form.
    // This is hacky but makes it work with both Rollup and Jest.
    var react = React$3['default'] ? React$3['default'] : React$3;

    module.exports = react;
  })();
}

},{"fbjs/lib/emptyFunction":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyFunction.js","fbjs/lib/emptyObject":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyObject.js","fbjs/lib/invariant":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\invariant.js","fbjs/lib/warning":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\warning.js","object-assign":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object-assign\\index.js","prop-types/checkPropTypes":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\prop-types\\checkPropTypes.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\cjs\\react.production.min.js":[function(require,module,exports){
/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var m = require("object-assign"),
    n = require("fbjs/lib/emptyObject"),
    p = require("fbjs/lib/emptyFunction"),
    q = "function" === typeof Symbol && Symbol["for"],
    r = q ? Symbol["for"]("react.element") : 60103,
    t = q ? Symbol["for"]("react.call") : 60104,
    u = q ? Symbol["for"]("react.return") : 60105,
    v = q ? Symbol["for"]("react.portal") : 60106,
    w = q ? Symbol["for"]("react.fragment") : 60107,
    x = "function" === typeof Symbol && Symbol.iterator;
function y(a) {
  for (var b = arguments.length - 1, e = "Minified React error #" + a + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d" + a, c = 0; c < b; c++) {
    e += "\x26args[]\x3d" + encodeURIComponent(arguments[c + 1]);
  }b = Error(e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name = "Invariant Violation";b.framesToPop = 1;throw b;
}
var z = { isMounted: function isMounted() {
    return !1;
  }, enqueueForceUpdate: function enqueueForceUpdate() {}, enqueueReplaceState: function enqueueReplaceState() {}, enqueueSetState: function enqueueSetState() {} };function A(a, b, e) {
  this.props = a;this.context = b;this.refs = n;this.updater = e || z;
}A.prototype.isReactComponent = {};A.prototype.setState = function (a, b) {
  "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a)) && "function" !== typeof a && null != a ? y("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
};A.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function B(a, b, e) {
  this.props = a;this.context = b;this.refs = n;this.updater = e || z;
}function C() {}C.prototype = A.prototype;var D = B.prototype = new C();D.constructor = B;m(D, A.prototype);D.isPureReactComponent = !0;function E(a, b, e) {
  this.props = a;this.context = b;this.refs = n;this.updater = e || z;
}var F = E.prototype = new C();F.constructor = E;m(F, A.prototype);F.unstable_isAsyncReactComponent = !0;F.render = function () {
  return this.props.children;
};var G = { current: null },
    H = Object.prototype.hasOwnProperty,
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
function J(a, b, e) {
  var c,
      d = {},
      g = null,
      k = null;if (null != b) for (c in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    H.call(b, c) && !I.hasOwnProperty(c) && (d[c] = b[c]);
  }var f = arguments.length - 2;if (1 === f) d.children = e;else if (1 < f) {
    for (var h = Array(f), l = 0; l < f; l++) {
      h[l] = arguments[l + 2];
    }d.children = h;
  }if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === d[c] && (d[c] = f[c]);
  }return { $$typeof: r, type: a, key: g, ref: k, props: d, _owner: G.current };
}function K(a) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && a.$$typeof === r;
}
function escape(a) {
  var b = { "\x3d": "\x3d0", ":": "\x3d2" };return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}var L = /\/+/g,
    M = [];function N(a, b, e, c) {
  if (M.length) {
    var d = M.pop();d.result = a;d.keyPrefix = b;d.func = e;d.context = c;d.count = 0;return d;
  }return { result: a, keyPrefix: b, func: e, context: c, count: 0 };
}function O(a) {
  a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > M.length && M.push(a);
}
function P(a, b, e, c) {
  var d = typeof a === "undefined" ? "undefined" : _typeof(a);if ("undefined" === d || "boolean" === d) a = null;var g = !1;if (null === a) g = !0;else switch (d) {case "string":case "number":
      g = !0;break;case "object":
      switch (a.$$typeof) {case r:case t:case u:case v:
          g = !0;}}if (g) return e(c, a, "" === b ? "." + Q(a, 0) : b), 1;g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];var f = b + Q(d, k);g += P(d, f, e, c);
  } else if (null === a || "undefined" === typeof a ? f = null : (f = x && a[x] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) {
    d = d.value, f = b + Q(d, k++), g += P(d, f, e, c);
  } else "object" === d && (e = "" + a, y("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));return g;
}function Q(a, b) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}function R(a, b) {
  a.func.call(a.context, b, a.count++);
}
function S(a, b, e) {
  var c = a.result,
      d = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? T(a, c, e, p.thatReturnsArgument) : null != a && (K(a) && (b = d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(L, "$\x26/") + "/") + e, a = { $$typeof: r, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner }), c.push(a));
}function T(a, b, e, c, d) {
  var g = "";null != e && (g = ("" + e).replace(L, "$\x26/") + "/");b = N(b, g, c, d);null == a || P(a, "", S, b);O(b);
}
var U = { Children: { map: function map(a, b, e) {
      if (null == a) return a;var c = [];T(a, c, null, b, e);return c;
    }, forEach: function forEach(a, b, e) {
      if (null == a) return a;b = N(null, null, b, e);null == a || P(a, "", R, b);O(b);
    }, count: function count(a) {
      return null == a ? 0 : P(a, "", p.thatReturnsNull, null);
    }, toArray: function toArray(a) {
      var b = [];T(a, b, null, p.thatReturnsArgument);return b;
    }, only: function only(a) {
      K(a) ? void 0 : y("143");return a;
    } }, Component: A, PureComponent: B, unstable_AsyncComponent: E, Fragment: w, createElement: J, cloneElement: function cloneElement(a, b, e) {
    var c = m({}, a.props),
        d = a.key,
        g = a.ref,
        k = a._owner;if (null != b) {
      void 0 !== b.ref && (g = b.ref, k = G.current);void 0 !== b.key && (d = "" + b.key);if (a.type && a.type.defaultProps) var f = a.type.defaultProps;for (h in b) {
        H.call(b, h) && !I.hasOwnProperty(h) && (c[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
      }
    }var h = arguments.length - 2;if (1 === h) c.children = e;else if (1 < h) {
      f = Array(h);for (var l = 0; l < h; l++) {
        f[l] = arguments[l + 2];
      }c.children = f;
    }return { $$typeof: r, type: a.type, key: d, ref: g, props: c, _owner: k };
  }, createFactory: function createFactory(a) {
    var b = J.bind(null, a);b.type = a;return b;
  },
  isValidElement: K, version: "16.2.0", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: G, assign: m } },
    V = Object.freeze({ default: U }),
    W = V && U || V;module.exports = W["default"] ? W["default"] : W;

},{"fbjs/lib/emptyFunction":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyFunction.js","fbjs/lib/emptyObject":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\fbjs\\lib\\emptyObject.js","object-assign":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\object-assign\\index.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\index.js":[function(require,module,exports){
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

},{"./cjs/react.development.js":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\cjs\\react.development.js","./cjs/react.production.min.js":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\react\\cjs\\react.production.min.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\scrollmonitor\\scrollMonitor.js":[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define("scrollMonitor", [], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.scrollMonitor = e() : t.scrollMonitor = e();
}(undefined, function () {
  return function (t) {
    function e(o) {
      if (i[o]) return i[o].exports;var s = i[o] = { exports: {}, id: o, loaded: !1 };return t[o].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports;
    }var i = {};return e.m = t, e.c = i, e.p = "", e(0);
  }([function (t, e, i) {
    "use strict";
    var o = i(1),
        s = o.isInBrowser,
        n = i(2),
        r = new n(s ? document.body : null);r.setStateFromDOM(null), r.listenToDOM(), s && (window.scrollMonitor = r), t.exports = r;
  }, function (t, e) {
    "use strict";
    e.VISIBILITYCHANGE = "visibilityChange", e.ENTERVIEWPORT = "enterViewport", e.FULLYENTERVIEWPORT = "fullyEnterViewport", e.EXITVIEWPORT = "exitViewport", e.PARTIALLYEXITVIEWPORT = "partiallyExitViewport", e.LOCATIONCHANGE = "locationChange", e.STATECHANGE = "stateChange", e.eventTypes = [e.VISIBILITYCHANGE, e.ENTERVIEWPORT, e.FULLYENTERVIEWPORT, e.EXITVIEWPORT, e.PARTIALLYEXITVIEWPORT, e.LOCATIONCHANGE, e.STATECHANGE], e.isOnServer = "undefined" == typeof window, e.isInBrowser = !e.isOnServer, e.defaultOffsets = { top: 0, bottom: 0 };
  }, function (t, e, i) {
    "use strict";
    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function s(t) {
      return c ? 0 : t === document.body ? window.innerHeight || document.documentElement.clientHeight : t.clientHeight;
    }function n(t) {
      return c ? 0 : t === document.body ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight) : t.scrollHeight;
    }function r(t) {
      return c ? 0 : t === document.body ? window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop;
    }var h = i(1),
        c = h.isOnServer,
        a = h.isInBrowser,
        l = h.eventTypes,
        p = i(3),
        u = !1;if (a) try {
      var w = Object.defineProperty({}, "passive", { get: function get() {
          u = !0;
        } });window.addEventListener("test", null, w);
    } catch (t) {}var d = !!u && { capture: !1, passive: !0 },
        f = function () {
      function t(e, i) {
        function h() {
          if (a.viewportTop = r(e), a.viewportBottom = a.viewportTop + a.viewportHeight, a.documentHeight = n(e), a.documentHeight !== p) {
            for (u = a.watchers.length; u--;) {
              a.watchers[u].recalculateLocation();
            }p = a.documentHeight;
          }
        }function c() {
          for (w = a.watchers.length; w--;) {
            a.watchers[w].update();
          }for (w = a.watchers.length; w--;) {
            a.watchers[w].triggerCallbacks();
          }
        }o(this, t);var a = this;this.item = e, this.watchers = [], this.viewportTop = null, this.viewportBottom = null, this.documentHeight = n(e), this.viewportHeight = s(e), this.DOMListener = function () {
          t.prototype.DOMListener.apply(a, arguments);
        }, this.eventTypes = l, i && (this.containerWatcher = i.create(e));var p, u, w;this.update = function () {
          h(), c();
        }, this.recalculateLocations = function () {
          this.documentHeight = 0, this.update();
        };
      }return t.prototype.listenToDOM = function () {
        a && (window.addEventListener ? (this.item === document.body ? window.addEventListener("scroll", this.DOMListener, d) : this.item.addEventListener("scroll", this.DOMListener, d), window.addEventListener("resize", this.DOMListener)) : (this.item === document.body ? window.attachEvent("onscroll", this.DOMListener) : this.item.attachEvent("onscroll", this.DOMListener), window.attachEvent("onresize", this.DOMListener)), this.destroy = function () {
          window.addEventListener ? (this.item === document.body ? (window.removeEventListener("scroll", this.DOMListener, d), this.containerWatcher.destroy()) : this.item.removeEventListener("scroll", this.DOMListener, d), window.removeEventListener("resize", this.DOMListener)) : (this.item === document.body ? (window.detachEvent("onscroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.detachEvent("onscroll", this.DOMListener), window.detachEvent("onresize", this.DOMListener));
        });
      }, t.prototype.destroy = function () {}, t.prototype.DOMListener = function (t) {
        this.setStateFromDOM(t);
      }, t.prototype.setStateFromDOM = function (t) {
        var e = r(this.item),
            i = s(this.item),
            o = n(this.item);this.setState(e, i, o, t);
      }, t.prototype.setState = function (t, e, i, o) {
        var s = e !== this.viewportHeight || i !== this.contentHeight;if (this.latestEvent = o, this.viewportTop = t, this.viewportHeight = e, this.viewportBottom = t + e, this.contentHeight = i, s) for (var n = this.watchers.length; n--;) {
          this.watchers[n].recalculateLocation();
        }this.updateAndTriggerWatchers(o);
      }, t.prototype.updateAndTriggerWatchers = function (t) {
        for (var e = this.watchers.length; e--;) {
          this.watchers[e].update();
        }for (e = this.watchers.length; e--;) {
          this.watchers[e].triggerCallbacks(t);
        }
      }, t.prototype.createCustomContainer = function () {
        return new t();
      }, t.prototype.createContainer = function (e) {
        "string" == typeof e ? e = document.querySelector(e) : e && e.length > 0 && (e = e[0]);var i = new t(e, this);return i.setStateFromDOM(), i.listenToDOM(), i;
      }, t.prototype.create = function (t, e) {
        "string" == typeof t ? t = document.querySelector(t) : t && t.length > 0 && (t = t[0]);var i = new p(this, t, e);return this.watchers.push(i), i;
      }, t.prototype.beget = function (t, e) {
        return this.create(t, e);
      }, t;
    }();t.exports = f;
  }, function (t, e, i) {
    "use strict";
    function o(t, e, i) {
      function o(t, e) {
        if (0 !== t.length) for (E = t.length; E--;) {
          y = t[E], y.callback.call(s, e, s), y.isOne && t.splice(E, 1);
        }
      }var s = this;this.watchItem = e, this.container = t, i ? i === +i ? this.offsets = { top: i, bottom: i } : this.offsets = { top: i.top || w.top, bottom: i.bottom || w.bottom } : this.offsets = w, this.callbacks = {};for (var d = 0, f = u.length; d < f; d++) {
        s.callbacks[u[d]] = [];
      }this.locked = !1;var m, v, b, I, E, y;this.triggerCallbacks = function (t) {
        switch (this.isInViewport && !m && o(this.callbacks[r], t), this.isFullyInViewport && !v && o(this.callbacks[h], t), this.isAboveViewport !== b && this.isBelowViewport !== I && (o(this.callbacks[n], t), v || this.isFullyInViewport || (o(this.callbacks[h], t), o(this.callbacks[a], t)), m || this.isInViewport || (o(this.callbacks[r], t), o(this.callbacks[c], t))), !this.isFullyInViewport && v && o(this.callbacks[a], t), !this.isInViewport && m && o(this.callbacks[c], t), this.isInViewport !== m && o(this.callbacks[n], t), !0) {case m !== this.isInViewport:case v !== this.isFullyInViewport:case b !== this.isAboveViewport:case I !== this.isBelowViewport:
            o(this.callbacks[p], t);}m = this.isInViewport, v = this.isFullyInViewport, b = this.isAboveViewport, I = this.isBelowViewport;
      }, this.recalculateLocation = function () {
        if (!this.locked) {
          var t = this.top,
              e = this.bottom;if (this.watchItem.nodeName) {
            var i = this.watchItem.style.display;"none" === i && (this.watchItem.style.display = "");for (var s = 0, n = this.container; n.containerWatcher;) {
              s += n.containerWatcher.top - n.containerWatcher.container.viewportTop, n = n.containerWatcher.container;
            }var r = this.watchItem.getBoundingClientRect();this.top = r.top + this.container.viewportTop - s, this.bottom = r.bottom + this.container.viewportTop - s, "none" === i && (this.watchItem.style.display = i);
          } else this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = this.container.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === t && void 0 === e || this.top === t && this.bottom === e || o(this.callbacks[l], null);
        }
      }, this.recalculateLocation(), this.update(), m = this.isInViewport, v = this.isFullyInViewport, b = this.isAboveViewport, I = this.isBelowViewport;
    }var s = i(1),
        n = s.VISIBILITYCHANGE,
        r = s.ENTERVIEWPORT,
        h = s.FULLYENTERVIEWPORT,
        c = s.EXITVIEWPORT,
        a = s.PARTIALLYEXITVIEWPORT,
        l = s.LOCATIONCHANGE,
        p = s.STATECHANGE,
        u = s.eventTypes,
        w = s.defaultOffsets;o.prototype = { on: function on(t, e, i) {
        switch (!0) {case t === n && !this.isInViewport && this.isAboveViewport:case t === r && this.isInViewport:case t === h && this.isFullyInViewport:case t === c && this.isAboveViewport && !this.isInViewport:case t === a && this.isInViewport && this.isAboveViewport:
            if (e.call(this, this.container.latestEvent, this), i) return;}if (!this.callbacks[t]) throw new Error("Tried to add a scroll monitor listener of type " + t + ". Your options are: " + u.join(", "));this.callbacks[t].push({ callback: e, isOne: i || !1 });
      }, off: function off(t, e) {
        if (!this.callbacks[t]) throw new Error("Tried to remove a scroll monitor listener of type " + t + ". Your options are: " + u.join(", "));for (var i, o = 0; i = this.callbacks[t][o]; o++) {
          if (i.callback === e) {
            this.callbacks[t].splice(o, 1);break;
          }
        }
      }, one: function one(t, e) {
        this.on(t, e, !0);
      }, recalculateSize: function recalculateSize() {
        this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height;
      }, update: function update() {
        this.isAboveViewport = this.top < this.container.viewportTop, this.isBelowViewport = this.bottom > this.container.viewportBottom, this.isInViewport = this.top < this.container.viewportBottom && this.bottom > this.container.viewportTop, this.isFullyInViewport = this.top >= this.container.viewportTop && this.bottom <= this.container.viewportBottom || this.isAboveViewport && this.isBelowViewport;
      }, destroy: function destroy() {
        var t = this.container.watchers.indexOf(this),
            e = this;this.container.watchers.splice(t, 1);for (var i = 0, o = u.length; i < o; i++) {
          e.callbacks[u[i]].length = 0;
        }
      }, lock: function lock() {
        this.locked = !0;
      }, unlock: function unlock() {
        this.locked = !1;
      } };for (var d = function d(t) {
      return function (e, i) {
        this.on.call(this, t, e, i);
      };
    }, f = 0, m = u.length; f < m; f++) {
      var v = u[f];o.prototype[v] = d(v);
    }t.exports = o;
  }]);
});


},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\scrollparent\\scrollparent.js":[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Scrollparent = factory();
  }
})(undefined, function () {
  var regex = /(auto|scroll)/;

  var parents = function parents(node, ps) {
    if (node.parentNode === null) {
      return ps;
    }

    return parents(node.parentNode, ps.concat([node]));
  };

  var style = function style(node, prop) {
    return getComputedStyle(node, null).getPropertyValue(prop);
  };

  var overflow = function overflow(node) {
    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
  };

  var scroll = function scroll(node) {
    return regex.test(overflow(node));
  };

  var scrollParent = function scrollParent(node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return;
    }

    var ps = parents(node.parentNode, []);

    for (var i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  };

  return scrollParent;
});

},{}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\sentence-case\\sentence-case.js":[function(require,module,exports){
'use strict';

var noCase = require('no-case');
var upperCaseFirst = require('upper-case-first');

/**
 * Sentence case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return upperCaseFirst(noCase(value, locale), locale);
};

},{"no-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\no-case.js","upper-case-first":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case-first\\upper-case-first.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\snake-case\\snake-case.js":[function(require,module,exports){
'use strict';

var noCase = require('no-case');

/**
 * Snake case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '_');
};

},{"no-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\no-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\swap-case\\swap-case.js":[function(require,module,exports){
'use strict';

var upperCase = require('upper-case');
var lowerCase = require('lower-case');

/**
 * Swap the case of a string. Manually iterate over every character and check
 * instead of replacing certain characters for better unicode support.
 *
 * @param  {String} str
 * @param  {String} [locale]
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return '';
  }

  var result = '';

  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    var u = upperCase(c, locale);

    result += u === c ? lowerCase(c, locale) : u;
  }

  return result;
};

},{"lower-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\lower-case\\lower-case.js","upper-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case\\upper-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\title-case\\title-case.js":[function(require,module,exports){
'use strict';

var noCase = require('no-case');
var upperCase = require('upper-case');

/**
 * Title case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale).replace(/^.| ./g, function (m) {
    return upperCase(m, locale);
  });
};

},{"no-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\no-case\\no-case.js","upper-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case\\upper-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case-first\\upper-case-first.js":[function(require,module,exports){
'use strict';

var upperCase = require('upper-case');

/**
 * Upper case the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return '';
  }

  str = String(str);

  return upperCase(str.charAt(0), locale) + str.substr(1);
};

},{"upper-case":"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case\\upper-case.js"}],"C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\upper-case\\upper-case.js":[function(require,module,exports){
'use strict';

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /[\u0069]/g,
    map: {
      'i': '\u0130'
    }
  },
  az: {
    regexp: /[\u0069]/g,
    map: {
      'i': '\u0130'
    }
  },
  lt: {
    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
    map: {
      'i\u0307': 'I',
      'j\u0307': 'J',
      '\u012F\u0307': '\u012E',
      'i\u0307\u0300': '\xCC',
      'i\u0307\u0301': '\xCD',
      'i\u0307\u0303': '\u0128'
    }
  }

  /**
   * Upper case a string.
   *
   * @param  {String} str
   * @return {String}
   */
};module.exports = function (str, locale) {
  var lang = LANGUAGES[locale];

  str = str == null ? '' : String(str);

  if (lang) {
    str = str.replace(lang.regexp, function (m) {
      return lang.map[m];
    });
  }

  return str.toUpperCase();
};

},{}],"__IDYLL_AST__":[function(require,module,exports){
"use strict";

module.exports = [["TextContainer", [], [["Header", [["title", ["value", "Lombard Street"]], ["subtitle", ["value", " A Description of the Money Market by Walter Bagehot"]], ["author", ["value", "John Rieth"]], ["authorLink", ["value", "https://idyll-lang.github.io"]]], []], ["h2", [], ["A work in progress."]], ["h2", [], ["Introduction"]], ["p", [], ["Central banking, the art of the banker’s bank, has grown out of a troubled past.  Its stages of evolution are marked by three great docu­ments, Lombard  Street, the  Macmillan  Report,  and  the  Radcliffe Report. Each of these arose out of the accumulated concern with the progress of events in the world.  Each represented a search for answers  to urgent questions  of its  day"]], ["p", [], ["The reports deal largely with the adjustments and modifications of British central banking to external difficulties and problems. The Macmillan Report appeared as the world crumbled into the depres­ sion of the 1930’s. TTie Radcliffe Report of 1959 appeared in an epoch of shaky alliances ai.d emerging trading blocs. Both followed a period of inflation and international readjustment after the holocaust of war. It was in the aftermath of war also that emerging capitalism and deposit banking fell into the difficulties which led to the production of the greatest of the documents, Lombard Street. Priority in time gave it the task, not of suggesting necessary modifications in central banking, but the more vital one, of enumerating the prime func­ tions of a central bank. It created the concept of a central bank and thereby has for all time assured to its author a secure position in bank­ ing thought."]], ["p", [], ["The Macmillan and Radcliffe studies are the works of many men who had staffs and the benefit of much data. Lombard Street is the product of only one man, Walter Bagehot, and as such reflects his deep understanding and intimate knowledge of banking, business and fiscal affairs. Its ideas were first expressed in a series of articles in The Economist during the 1850’s and were put into book form in 1870. During his relatively short lifetime (1826-1877) Bagehot wrote extensively on a wide range of literary, political, and economic sub­ jects. His collected works run into five substantial volumes. While obviously a many faceted man, his main interests lay in the broad field of political economy and his chief occupation was that of editor of The Economist, the world’s most influential financial paper."]], ["p", [], ["During his  relatively short lifetime  (1826-1877)  Bagehot  wrote \nextensively on a wide range of literary, political, and economic sub­\njects.  His collected works run into five substantial volumes.  While \nobviously a many faceted man, his main interests lay in the broad field \nof political economy and his chief occupation was that of editor of \nThe Economist\n, the world’s most influential financial paper."]], ["p", [], ["Bagehot was born into a banking family and succeeded his father \nas vice chairman of Stuckey’s Banking Co. of Langport,  Somerset. He represented the bank in the “Gty”  (i.e., London’s financial dis­\ntrict.)  Although he was educated as a lawyer, literary and financial \nmatters were more attractive to him than was the law.  It was through \nhis interest in free trade that he met James Wilson, the editor and \nowner  of \nThe  Economist. This  encounter  led  to  his  marriage  to \nWilson’s  daughter,  Eliza.  When Wilson  died  while  serving  on  a \ngovernmental mission in India, Bagehot became editor of the paper."]], ["p", [], ["He was the ideal editor for this journal.  His  brilliance  and  his \nwriting style, which, like his conversation, was challenging, provoca­\ntive, and yet often amusing, aided the growth of \nThe Economist’s\n cir­\nculation.  Descriptions of Bagehot by his contemporaries abound with \nthe adjectives “alert,” “sagacious,” “speculative,” and “witty.”  His \n“originality,”  “force,”  “acuteness,”  and  “inventiveness”  have  been \npraised.  John Morely spoke of these things and “above all the quaint \nand whimsical humour of that striking genius.”  Others spoke of his \n“vivid sense of reality and strong impulse to unite theorizing  with \npractical problems.”  His qualities became those of \nThe Economist, and its influence grew steadily under his stewardship."]], ["p", [], ["Bagehot occupied  a position in British financial affairs  similar to \nthat which Walter Lippman holds regarding American foreign affairs. \nThe  British  Prime  Minister  Gladstone  called  him  “the  permanent \nChancellor of the Exchequer.”  This title was merited not only by \nhis constant commentary on the state of the nation and its  financial \naffairs, but by the singular fact that he invented  the Treasury  Bill. \nIn  1877  Sir Stafford Northcote, the then official  Chancellor  of the \nExchequer, sought Bagehot’s counsel on what might be done to raise \nneeded funds in the light of the unpopularity which Exchequer Bills \nwere currently facing.  Bagehot at oncc said that what the Treasury \nneeded was a security which resembled as closely as possible a com­\nmercial bill of exchange.  In other words, it should  be short term, \nhighly negotiable and should be sold on a discount basis.  His inven­\ntion has been a spectacularly successful one.  Treasury bills are  an \nimportant instrument of governmental finance in virtually all devel­\noped countries today."]], ["p", [], ["Lombard Street\n shows the marriage of theorizing and concern with \nproblems which is so typical of Bagehot.  The  book  describes  the \norigin and operation of the English money market and the nature of \nthe role of the Bank of England in that market.  Its comments on the \nnature of banking and bankers are brilliant and represent the sharing \nof the experience of a sophisticated  man  of  affairs.  But \nLombard\nStreet\nis also a piece of advocacy.  It urges reform and modification rather  than  reformulation  and  reorganization.  The  advocacy  has \nbeen successful although the battle was won only over a rather long \nperiod of time.  It took time to  (as Keynes saw Bagehot’s purpose) \n“knock  two  or  three  fundamental  truths  into  the  heads  of  City \nmagnates.”"]], ["p", [], ["The book is easy to read and every budding economist and banker \nshould read  it early in  his  career.  The  novice  can  learn  much  in \nseeing the situation out of which Bagehot’s recommendation of proper \nbanking  principles  arose.  He  has  the  experience  of watching  the \ngrowth of banking practices similar to that which the law student re­\nceives in his study of the development of case law.  He acquires a \nkind of institutionalism in his view of economic matters that is hard to \nconvey in any other fashion.  This is an exciting view of economics. \nThe world is seen as it really is.  The future is found to evolve out \nof  the  past  as  old  institutions  are  progressively  adapted  to  meet \nchanging problems."]], ["p", [], ["Perhaps it was his legal training that gave Bagehot’s writings their \ninstitutional  overcast  and  influenced  him  to  draw  little  distinction \nbetween description and theory.  His approach is in many ways simi­\nlar to that of Wesley Clair Mitchell.  For both of them economics \nclearly had time and space dimensions.  Bagehot held that one reason \nfor the dullness of much political economy was its attempt to be uni­\nversal.  Consequently he confined his efforts to problems of the day."]], ["p", [], ["It may be proper to say that his economics even had personality \ndimensions since \nLombard Street\n discusses bankers almost as much as \nit does banking.  On this score one feels a twinge of sympathy for Mr. \nAloxon whose ill-advised actions at the General Court of the Bank of \nEngland are recorded for posterity in Bagehot’s Appendix.  The inci­\ndent there reproduced illustrates the way not to get things done in a \nmeeting.  In a Memoir to Bagehot, R. H.  Hutton, his associate for \nmany years says, “... Bagehot’s most original writing was due less to \nhis deductions from the fundamental axioms of the modem science \nthan to that deep insight into men which he had gained in many dif­\nferent fields.”  It is these last mentioned features which the profes­\nsional  reader  of \nLombard  Street savors.  And  thus  we  see  why \nLombard Street is a classic.  It is absorbing on first reading to the \nyoung and delightful in the rereading by their elders."]], ["p", [], ["There is  little  point in  summarizing  here  the  principal  ideas  of \nthis pellucid book.  The reader will enjoy the original much better \nthan any summation.  However, a brief mention may be made of its \nformal scope.  It explains the origins and operation of British banking and bill trading.  It sets forth the relations that exist between the Bank \nof England, other banks, bill brokers, the Government, and  foreign \ncountries.  It also explains the relationships which should exist.  Not \ngenerally appreciated, in spite of W. W. Rostow’s essay on the matter, \nis Bagehot’s strikingly modem ideas of the nature and functioning of \nthe business cycle.  There is  little in  his  description  which  should \nbe amended or omitted today, save for its rather heavy emphasis on \nagricultural matters."]], ["p", [], ["Lombard Street\n, written in response to problems of the day, has an \nair of urgency and cogency.  To appreciate it the student of central \nbanking needs a brief account of the events which led  Bagehot  to \nwrite it."]], ["p", [], ["Bagehot’s world of 1850 was a vastly different place than that of "]], ["ol", [], [["li", [], ["The Industrial Revolution had altered the physical landscape of"]]]], ["p", [], ["the Old World and brought changes in governmental, philosophical, \nand economic thinking.  The New World was asserting a right to its \nown destiny.  Adam Smith had launched the idea that wealth lay in \nstore for the nation that let its businessmen fight for gain in untram­\nmelled markets.  The fight against the  corn  laws  had  been  waged \nand won."]], ["p", [], ["While Smith  had  expressed doubt  that  the  English  Government \ncould safely be entrusted to run a public bank and commented on the \nextravagance of democracies in times of war, it was war which im­\nposed the most serious banking and monetary difficulties on the coun­\ntry and which ultimately set Bagehot to enunciating the way England \ncould have good banking.  In any event, by  1850 the time had come \nwhen institutions had to be changed to meet new circumstances."]], ["p", [], ["The very long series of Napoleonic Wars beginning in 1792 precip­\nitated the monetary troubles which continued through Bagehot’s time. \nThe immediate antagonists, France, Austria, and Prussia, were soon \nto be joined by Great Britain, Holland, Spain, and Sardinia.  The next \ntwenty-three years of strife were anxious  but opportune  times  for \nBritain’s  banks and  bankers.  Large  sums  were  raised  for  loans  to \nallies, for the expansion of trade in war supplies, and for their pro­\nduction."]], ["p", [], ["By 1795 gold began to rise in price, and with the depreciation of \nEnglish money, foreign supplies became increasingly expensive.  The \npartial failure of the English com crop and the war-stimulated demand \nfor food added to this problem.  In 1797, under these strains and be­\ncause of runs on English banks, the Restriction Act was passed.  It \nprohibited all banks, including the Bank of England, from paying out gold and silver in return for their notes until six months  after  the \nclose  of hostilities.  With  the  country  off a metallic  standard  and \nthe restraining effect of the need for specie removed, the number of \nbanks in the country rose rapidly, and by 1814 their number had more \nthan quadrupled."]], ["p", [], ["The Restriction Act and the high price of gold produced concern \nand argument among leading figures of the day.  The debate which \nensued  has  come  to  be  called  the  “Bullionist  Controversy.”  The \n“bullionist” faction argued that the premium on gold had come about \nas a result of excessive note issue.  They urged a return to a metallic \ncurrency.  The “anti-bullionists,”  among whom was the  Governor \nof the Bank of England, were impressed with the necessity and the \nprofitability  of financing the war and supported the Government’s \nact.  In 1809 David Ricardo published a pamphlet entitled \nThe High\nPrice  of  Bullion\n, in which  he  more  or  less  allied  himself with  the \nBullionists.  He held that the high price  of bullion had been occa­\nsioned by the overissue of paper money and advocated its gradual re­\nduction and a return to convertibility.  The convertibility which he \nsought was not to mean the end of paper money circulation and its \nreplacement with coinage, but envisaged the more sophisticated gold \nbullion standard.  Under this standard only substantial sums of notes \ncould be converted into gold in the form of bullion or bars."]], ["p", [], ["The Bullion Committee, a Parliamentary Committee, in its  1810 \nreport relied heavily upon Ricardo’s thinking.  It advocated  (as did \na later committee in 1819) a return to convertibility with gold.  (The \nGold Standard Act of 1816\n had abolished bimetallism in Britain.)  Its \nadvice was heeded when, in  1822, cash payments for notes were re­\nsumed.  This would have happened earlier save for a depression in 1810 and for Napoleon’s reappearance on the continent in  1815 after \nhis escape from Elba."]], ["p", [], ["The ideas that persisted from this controversy were that in order \nto assure sound banking the note issue must be tied firmly down, and \nthat it must be very directly related to the size of the Bank of Eng­\nland’s gold stock.  The adoption of these views in the Charter Act of 1844 was the immediate cause of Bagehot’s concern in \nLombard Street"]], ["p", [], ["But other developments also help explain the nature of the  1844 \nCharter Act.  With the cessation of war finance  a period  of bank \nfailures was ushered in, and of the now enlarged number of banks, 240 ceased payment in 1814-16.  The resumption of payment in specie \nby no means helped alleviate this troubled  financial  picture,  for in 1825, in another wave of bank failures, 70 more banks closed.  The British government in 1826 sought to deal with this pattern of depres­\nsion and bank failures by allowing joint-stock banks to issue notes \noutside of a 65-mile radius of London.  This privilege, long held by \nprivate banks, was extended to the joint-stock banks in the belief that \nthese larger banks would be better able to remain solvent and to stave \noff bank runs.  Since this act ended the monopoly of the  Bank  of \nEngland, alone among joint-stock banks, to issue notes, the bank re­\nacted to this new competition by  establishing branches in principal \ncities.  This development fortuitously tended to case the burden  of \ntransferring funds within the country and thus added to the security \nof the banking system."]], ["p", [], ["In  1833  joint-stock banks  were  allowed  to  open  in  London,  al­\nthough the exclusive note-issuing power of the Bank of England was \nnot further weakened.  With these legal changes there was a great \ngrowth of joint-stock banks, over  100 being established, to the dis­\nadvantage  of  the  private  banks,  by  1836.  With  the  expansion  of \ndeposit banking, especially in London’s metropolitan area, the use of \nchecks became much more important.  But the liberalization of the \nlaw  regarding  note  issuing  by  joint  stock,  and  thus  presumably \nsounder banks,  itself led to speculation.  It was soon  demonstrated \nthat even joint-stock banks could overissue notes,  for bank  failures \ncontinued."]], ["p", [], ["The series of bank failures in  1837, 1839, and  1842 clearlv demon­\nstrated that the changes that had been made had not sufficed, and that \nthe problem of achieving a sound monetary and banking system still \nremained.  Fresh  controversies  arose  as  to  a  way  out  of the  diffi­\nculties.  The “Currency School” held that what was needed to remedy \nall ills was the 100 per cent backing of all currency with gold.  The \nopposing “Banking” view was that a fractional gold  reserve would \nsuffice."]], ["p", [], ["In  1844 Sir Robert Peel seized the opportunity presented by the \nnecessity of periodical re-enactment of the Bank of England’s charter \nand combined these views.  The new Charter Act provided that the \nBank of England could issue notes in the amount of \n£14 million se­cured by government securities, and  that any  note  issue above this \namount was to be 100 per cent backed with gold or silver.  Silver was \nnot to cover over one fifth of this amount.  Notes were to be payable \nin gold coin.  A buying and selling range for gold was announced.  No \nnew banks were to be given the privilege of issuing notes, and those al­\nready possessing the privilege were limited as to the absolute amounts \nthey could issue.  The amounts were set at the average note issue outstanding during the three months prior to the introduction of the bill. \nWhen a private bank ceased payment, acquired more than six part­\nners, became a joint-stock bank, or amalgamated with another bank, \nit lost all right to  issue  notes.  The  Bank  of England  then  would \nacquire the right to issue up to two thirds of the lapsed issue.  The \nBank of England was also thenceforth required to publish in the press \nweekly accounts of its final position.  The Act provided the basis for \nthe peculiar form of the Bank of England Accounts, namely a division \nof its activities under a note-issuing department and a banking depart­\nment.  This division also served as a basis for apportioning the earnings \nof the bank betw een the government and the proprietors.  The form \nof the  accounts  even  today  is  unchanged,  although  the  bank  was \nnationalized and the proprietors compensated for their loss of owner­\nship in 1946."]], ["p", [], ["Lombard Street\n stands as a testimony that this Act of 1844 proved \nno  panacea.  The  Act  represented  a  triumph  of  the  “Currency \nSchool” over the “Banking School.”  The Currency School’s think­\ning closely resembled that of the early bullionists.  They had great \nfaith in the money metal and saw notes as mere receipts for it.  They \nwere concerned with keeping the exchange rate stable, and they felt \nthat sufficient gold backing and restraint of the note  issue were all \nthat were needed to assure a sound  monetary  and  banking system. \nThe later doctrine of the workings of the automatic gold standard \nwith its consequences of variable domestic note issue is a continua­\ntion of their position. "]], ["p", [], ["Bagehot and his predecessor on the \nEconomist\n, James Wilson, rep­\nresented  the  banking  school.  They  were  painfully  aware  of  the \nfact that a hamstrung note  issuer could  get  into  serious  difficulties \nand  thus  cause  hardship  to  the  whole  economy  as  well  as  to  the \nbanking community.  They saw that what was involved in the man­\nagement of the Nation’s money and  needed watching, was not the \nmere size of the note issue, but the entire size  of the credit system \nas it functioned through the banks, bill brokers, and security dealers. \nThey saw deposits as money, especially those created in the financing \nof bills  of exchange which, quite  as  much  as  notes,  required  Bank \nof England support.  Bagehot would have preferred to trust prudent \nbanking management rather than  some  arbitrary  limit  to  note  and \ncredit creation, which indeed in times of crises might need to be sus­\npended.  He  also  felt  that  prudence  dictated  larger  gold  reserves \nthan the Bank was in the habit of maintaining.  But then this story \nshould be left to be told by Bagehot himself."]], ["h2", [], ["Advertisement"]], ["p", [], ["The composition\nof this little book has occupied a much longer time \nthan, perhaps, my readers may think its length or its importance de­\nserves.  It was begun as long ago as the autumn of  1870; and though \nits progress  has  been  often suspended  by  pressing  occupations  and \nimperfect health,  I  have never ceased to work  at  it  when  I  could. \nBut I fear that  in consequence, in some casual illustrations at least, \nevery part of the book may not seem, as the lawyers would say, *to \nspeak from the same time.’  The figures and the examples which it is \nmost natural to use at one time are not quite those which it is most \nnatural to use at another; and a slowly written book on a living and \nchanging subject is apt a little to want unity in this respect."]], ["p", [], ["I fear that I must not expect a very favourable reception for this \nwork.  It speaks mainly of four sets of persons—the Bank of England, \nJoint Stock Banks other than  that Bank,  private  bankers,  and  bill- \nbrokers; and I am much afraid that neither will altogether like what \nis said of them.  I can only say that the opinions now expressed have \nnot been formed hastily or at a distance from the facts; that, on the \ncontrary, they have been slowly matured in ‘Lombard Street’ itself, \nand that, perhaps, as they will not be altogether pleasing to anyone, \nI  may  at  least  ask  for  the  credit  of  having  been  impartial  in  my \ncriticism."]], ["p", [], ["I should also say that I am indebted to a friend for the correction \nof the final proof sheets, which an attack of illness prevented me from \nfully revising.  If it had not been for his kind assistance, the publica­\ntion of the book must have  been postponed  till the  autumn, which, \nas  its  production  has  already  been  so  slow,  would  have  been  very \nannoying to me."]], ["em", [], ["Walter Bagehot"]]]]];

},{}],"__IDYLL_COMPONENTS__":[function(require,module,exports){
'use strict';

module.exports = {
	'text-container': require('C:/Users/john/Programming/Research/bagehot/components/default/text-container.js'),
	'header': require('C:/Users/john/Programming/Research/bagehot/components/default/header.js')
};

},{"C:/Users/john/Programming/Research/bagehot/components/default/header.js":"C:\\Users\\john\\Programming\\Research\\bagehot\\components\\default\\header.js","C:/Users/john/Programming/Research/bagehot/components/default/text-container.js":"C:\\Users\\john\\Programming\\Research\\bagehot\\components\\default\\text-container.js"}],"__IDYLL_DATA__":[function(require,module,exports){
"use strict";

module.exports = {};

},{}],"__IDYLL_OPTS__":[function(require,module,exports){
"use strict";

module.exports = { "ssr": true, "theme": "github", "layout": "blog" };

},{}],"__IDYLL_SYNTAX_HIGHLIGHT__":[function(require,module,exports){
"use strict";

module.exports = function () {}();

},{}]},{},["C:\\Users\\john\\Programming\\Research\\bagehot\\node_modules\\idyll\\src\\client\\build.js"]);
