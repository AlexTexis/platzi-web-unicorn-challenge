module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_general_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/general/layout */ "./src/components/general/layout.js");
/* harmony import */ var _src_components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/sidebar */ "./src/components/sidebar.js");
var _jsxFileName = "C:\\Users\\Alex\\Documents\\Git\\UnicornioWebChallenge\\pages\\index.js";

 //components


 //styles
// import '../styles/sidebar.css'

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_general_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "layout_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-775239731" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-775239731" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Inicio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Sobre mi")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Portafolio")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Unicornio Web Profesional"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "card_float",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-775239731" + " " + "skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "card_skill web_design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/icons/development.png",
    alt: "",
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "info_skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Desarollo Web"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "HTML + CSS + Resposive Design"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "card_skill ux",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/icons/design.png",
    alt: "",
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "info_skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Dise\xF1o Web"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "UI/UX + Adobe XD/Figma + Zeplin"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/icons/rocket.png",
    alt: "",
    className: "jsx-775239731" + " " + "rocket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-775239731" + " " + "about_me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Sobre m\xED"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "jsx-775239731" + " " + "about_description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Aqu\xED puedes escribir algo bien chido sobre t\xED, lo que te gusta y lo que no. Los lugares que quieres conocer o la comida que m\xE1s disfrutas, incluso puedes hablar de tus macotas. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\xBFD\xF3nde quieres trabajar? Sin dudar en Platzi")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-775239731" + " " + "proyects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Proyectos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-775239731" + " " + "proyects_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://platzi-bagdes.now.sh",
    className: "jsx-775239731" + " " + "card_proyect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/platzi-bagdes.now.sh_(iPad Pro).png",
    alt: "",
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://platzi-bedu-blog.now.sh",
    className: "jsx-775239731" + " " + "card_proyect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/platzi-bedu.jpg",
    alt: "",
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-775239731" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-775239731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Developed by @AlexTexis10 \uD83D\uDC9A"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "775239731",
    __self: this
  }, ".content.jsx-775239731{grid-area :content;}.hero.jsx-775239731{height:180px;background-color:var(--background-primary);box-shadow:0 9px 6px -5px rgba(0,0,0,.1);padding :0 1em;box-sizing:border-box;}.hero.jsx-775239731 h2.jsx-775239731{height :inherit;margin :0;font-size:3.5em;width:500px;}.hero.jsx-775239731 .container.jsx-775239731{height:inherit;position:relative;max-width:1024px;margin:0 auto;}.container.jsx-775239731{max-width:1024px;margin:0 auto;}.header.jsx-775239731{background-color:var(--background-primary);height :70px;padding :0 1em;font-size:1.2em;}.header.jsx-775239731 ul.jsx-775239731{height :inherit;padding:0;margin:0;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.header.jsx-775239731 li.jsx-775239731{list-style:none;margin :0 1em;color :var(--text-color);}.header.jsx-775239731 a.jsx-775239731{font-size:1em;-webkit-text-decoration:none;text-decoration:none;color :var(--text-color);}.hero_container.jsx-775239731{height :100px;max-width :1024px;margin:auto;position:relative;}.card_float.jsx-775239731{width :300px;height :300px;background-color:#E92042;background-image:url('/static/revealed.gif');background-position :center;background-repeat:no-repeat;position:absolute;right:0;top:35px;border-radius :8px;box-shadow:0 5px 12px -5px rgba(0,0,0,.5);}.skills.jsx-775239731{padding :6em 0 0 0;height :340px;}.skills.jsx-775239731 .container.jsx-775239731{height:inherit;position:relative;}.card_skill.jsx-775239731{background-color:var(--background-primary);color :var(--text-color);width :340px;height :90px;padding :1em;box-sizing:border-box;border-radius :8px;box-shadow:0 4px 12px -4px rgba(0,0,0,.5);display :grid;grid-template:1fr / 80px 1fr;margin-bottom :1.5em;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.card_skill.jsx-775239731 h3.jsx-775239731,.card_skill.jsx-775239731 p.jsx-775239731{margin:0;}.card_skill.jsx-775239731 h3.jsx-775239731{padding-bottom :.4em;}.ux.jsx-775239731{position:relative;left :100px;}.rocket.jsx-775239731{position:absolute;right:40px;bottom:20px;}.about_me.jsx-775239731{font-size:1em;margin-bottom:4em;}.about_me.jsx-775239731 h2.jsx-775239731{font-size:2em;}.about_description.jsx-775239731{background-color:var(--background-primary);color :var(--text-color);padding :1em;box-sizing:border-box;border-radius :8px;box-shadow:0 4px 12px -4px rgba(0,0,0,.5);}.about_description.jsx-775239731 p.jsx-775239731:nth-of-type(2){font-weight:bold;}.proyects.jsx-775239731{font-size:1em;margin-bottom:4em;}.proyects.jsx-775239731 h2.jsx-775239731{font-size:2em;text-align:center;}.proyects_container.jsx-775239731{display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.card_proyect.jsx-775239731{width :250px;height :300px;border-radius:8px;background-color:var(--background-primary);margin :0 1em;box-shadow:0 4px 12px -4px rgba(0,0,0,.5);overflow:hidden;position:relative;}.card_proyect.jsx-775239731 img.jsx-775239731{width:100%;height:100%;object-fit:cover;-webkit-transition:.3s ease;transition:.3s ease;}.card_proyect.jsx-775239731:hover img.jsx-775239731{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.footer.jsx-775239731{height :30px;background-color:#E92042;color :#fff;text-align:center;}.footer.jsx-775239731 p.jsx-775239731{margin :0;line-height:30px;}@media screen and (max-width :1240px){.container.jsx-775239731{margin :0 1em;}}@media screen and (max-width :900px){.card_float.jsx-775239731{width :200px;height :200px;background-position:center;background-size :190px;}.rocket.jsx-775239731{position:absolute;width:150px;right:40px;bottom:-30px;}}@media screen and (max-width :768px){.hero.jsx-775239731 h2.jsx-775239731{font-size:3em;width:400px;}}@media screen and (max-width :620px){.hero.jsx-775239731 h2.jsx-775239731{font-size:2.5em;width:auto;text-align:center;}.skills.jsx-775239731{height:380px;}.proyects_container.jsx-775239731{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.card_proyect.jsx-775239731{margin-bottom:1em;width :300px;height :200px;}.card_float.jsx-775239731{width :150px;height :150px;left:0;top :80px;margin:0 auto;}}@media screen and (max-width :500px){.card_skill.jsx-775239731{width:auto;}.ux.jsx-775239731{left:0;}.rocket.jsx-775239731{position:absolute;width:140px;right:0;left :0;bottom:0;margin :0 auto;}}@media screen and (max-width :480px){.card_float.jsx-775239731{width :140px;height :140px;top :110px;}.card_proyect.jsx-775239731{width:250px;}}@media screen and (max-width :360px){.rocket.jsx-775239731{width:120px;right:40px;bottom:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWxleFxcRG9jdW1lbnRzXFxHaXRcXFVuaWNvcm5pb1dlYkNoYWxsZW5nZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFTSxBQUk2QixBQUtOLEFBU0ksQUFTSCxBQVFFLEFBTzJCLEFBUTFCLEFBVUQsQUFPRixBQU9BLEFBUUYsQUFlTSxBQU1KLEFBTTRCLEFBaUI5QyxBQUtBLEFBSW1CLEFBTUUsQUFPSixBQU1BLEFBTTZCLEFBVTFCLEFBS0gsQUFNQSxBQU1BLEFBT0QsQUFhRixBQVNkLEFBSWdCLEFBUUgsQUFTTSxBQVFELEFBUUssQUFXSixBQVVFLEFBT0gsQUFLUyxBQU1KLEFBT1AsQUFlZCxBQUlVLEFBTVcsQUFjUCxBQU9DLEFBUUEsT0FsQ2QsRUFqTUYsQ0F1R21CLENBckJMLEFBMEdaLENBZ0NBLEFBUVksQ0F4VmdDLEFBeUU5QixBQWdIQSxBQTBCVyxBQXlCWCxBQW9DZCxBQWtCYyxBQXVDQSxDQS9RUSxBQU9ILEFBMEVELEFBTXBCLEFBcUJvQixBQU1BLEFBd0RsQixBQTJCYyxDQTdPSSxBQTRFQSxDQXJGTixBQWdDQSxBQVVHLEFBc05GLENBL09BLEFBdUlmLENBbENELEFBS2EsQUFnSEksQUF1Q0MsQUFnQ0QsQ0FoVWYsQUE2RmUsRUFpQ2hCLEVBOEVtQixBQWtKTCxHQS9VTSxBQWdDUCxBQXNOWCxDQXRMeUIsQUFnSFAsQUFrQ3BCLEFBaUI0QixBQTZCTixBQXlCYixBQXVDSSxFQXJNQSxDQWhGYixBQTBFQSxBQXNIYyxBQXVFSCxDQWhTWCxBQWdRa0IsQ0ExTkgsQUEwRWYsQUEyQkEsQUFNQSxDQTFKbUIsQUFzRW5CLEFBTUEsQ0FxTVksQUFzRFYsQ0EvU2dCLEdBeUtKLEFBeUdGLEFBY1YsRUFuSW9CLENBbEV0QixBQWdIZ0IsQ0EzT0EsQ0FzQkEsQUFtRVcsQUFtREEsQ0FwRk4sQUFrT0osQ0ExRzRCLEFBZ0YzQyxBQWtCQSxDQWlDVSxJQTFTRyxBQWtNaEIsRUEzSWdELEVBOUQ3QyxBQWlPc0IsQUFTdEIsQ0FsTUQsQUEwUWtCLENBOVR5QixBQWlDMUIsRUFvUWhCLElBbE9ELEVBL0NELEFBdUNBLElBeUNlLEFBbURBLEFBOERmLEVBMEdFLENBN1JpQixJQTJLbkIsRUFpQ0UsQ0E3RHVCLEFBbUdGLEdBL0tSLEFBbURTLE1Bckh2QixDQXdKZSxBQWFoQixDQTdJQyxLQTJDZSxHQXJHRSxBQTBFWSxLQWlIYyxDQW5DdkIsSUFsREcsS0FyR0MsQ0F5Q0YsU0ErR3FCLEdBOUVkLElBNEJULEtBckduQixVQTBMZ0IsSUFwRjBCLEtBNUJ4QixPQWlIQSxJQW5DcEIsT0E3RVUsQUF1TVIsTUFsR0YsQ0FZQSxDQWhIVyxTQUNVLEVBMEJMLGNBQ2UsRUE5RC9CLENBcUNELDBCQTBCd0IsZ0JBMUJ2QixLQTJCcUIsaURBaEVwQiw0Q0FpRUQiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbGV4XFxEb2N1bWVudHNcXEdpdFxcVW5pY29ybmlvV2ViQ2hhbGxlbmdlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL2xheW91dCdcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvc2lkZWJhcidcclxuLy9zdHlsZXNcclxuLy8gaW1wb3J0ICcuLi9zdHlsZXMvc2lkZWJhci5jc3MnXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICA8TGF5b3V0IGNsYXNzTmFtZT1cImxheW91dF9jb250YWluZXJcIj5cclxuICAgIDxTaWRlYmFyLz5cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPiAgICAgICAgIFxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5JbmljaW88L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U29icmUgbWk8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UG9ydGFmb2xpbzwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgPGgyPlVuaWNvcm5pbyBXZWIgUHJvZmVzaW9uYWw8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfZmxvYXRcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNraWxsc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX3NraWxsIHdlYl9kZXNpZ25cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvZGV2ZWxvcG1lbnQucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb19za2lsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkRlc2Fyb2xsbyBXZWI8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+SFRNTCArIENTUyArIFJlc3Bvc2l2ZSBEZXNpZ248L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfc2tpbGwgdXhcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvZGVzaWduLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9fc2tpbGxcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5EaXNlw7FvIFdlYjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD5VSS9VWCArIEFkb2JlIFhEL0ZpZ21hICsgWmVwbGluPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb25zL3JvY2tldC5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJyb2NrZXRcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXRfbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDI+U29icmUgbcOtPC9oMj5cclxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImFib3V0X2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxwPkFxdcOtIHB1ZWRlcyBlc2NyaWJpciBhbGdvIGJpZW4gY2hpZG8gc29icmUgdMOtLCBsbyBxdWUgdGUgZ3VzdGEgeSBsbyBxdWUgbm8uIExvcyBsdWdhcmVzIHF1ZSBxdWllcmVzIGNvbm9jZXIgbyBsYSBjb21pZGEgcXVlIG3DoXMgZGlzZnJ1dGFzLCBpbmNsdXNvIHB1ZWRlcyBoYWJsYXIgZGUgdHVzIG1hY290YXMuIDwvcD5cclxuICAgICAgICAgICAgPHA+wr9Ew7NuZGUgcXVpZXJlcyB0cmFiYWphcj8gU2luIGR1ZGFyIGVuIFBsYXR6aTwvcD5cclxuICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm95ZWN0c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyPlByb3llY3RvczwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJveWVjdHNfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcGxhdHppLWJhZ2Rlcy5ub3cuc2hcIiAgY2xhc3NOYW1lPVwiY2FyZF9wcm95ZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvcGxhdHppLWJhZ2Rlcy5ub3cuc2hfKGlQYWQgUHJvKS5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXR6aS1iZWR1LWJsb2cubm93LnNoXCIgIGNsYXNzTmFtZT1cImNhcmRfcHJveWVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL3BsYXR6aS1iZWR1LmpwZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgPHA+RGV2ZWxvcGVkIGJ5IEBBbGV4VGV4aXMxMCDwn5KaPC9wPiBcclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICBgXHJcbiAgICAgICAuY29udGVudCBcclxuICAgICAgIHtcclxuICAgICAgICAgZ3JpZC1hcmVhIDogY29udGVudDtcclxuICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAuaGVyb1xyXG4gICAgICAge1xyXG4gICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgICBib3gtc2hhZG93OiAwIDlweCA2cHggLTVweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgICAgICAgcGFkZGluZyA6IDAgMWVtO1xyXG4gICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuaGVybyBoMiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWlnaHQgOiBpbmhlcml0O1xyXG4gICAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuaGVybyAuY29udGFpbmVyIFxyXG4gICAgICAgIHtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jb250YWluZXIgXHJcbiAgICAgIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgIC5oZWFkZXIgXHJcbiAgICAgICB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgICAgICAgIGhlaWdodCA6IDcwcHg7XHJcbiAgICAgICAgIHBhZGRpbmcgOiAwIDFlbTtcclxuICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAuaGVhZGVyIHVsICBcclxuICAgICAgIHtcclxuICAgICAgICAgIGhlaWdodCA6IGluaGVyaXQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgICAgIC5oZWFkZXIgbGkgXHJcbiAgICAgICB7XHJcbiAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgIG1hcmdpbiA6IDAgMWVtO1xyXG4gICAgICAgICBjb2xvciA6dmFyKC0tdGV4dC1jb2xvcilcclxuICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAuaGVhZGVyIGEgXHJcbiAgICAgICB7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgIGNvbG9yIDogdmFyKC0tdGV4dC1jb2xvcilcclxuICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAuaGVyb19jb250YWluZXIgXHJcbiAgICAgICB7XHJcbiAgICAgICAgIGhlaWdodCA6IDEwMHB4O1xyXG4gICAgICAgICBtYXgtd2lkdGggOiAxMDI0cHg7XHJcbiAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmNhcmRfZmxvYXQgXHJcbiAgICAgIHtcclxuICAgICAgICB3aWR0aCA6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodCA6IDMwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOTIwNDI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL3JldmVhbGVkLmdpZicpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAzNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiA4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTJweCAtNXB4IHJnYmEoMCwwLDAsLjUpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5za2lsbHNcclxuICAgICAge1xyXG4gICAgICAgIHBhZGRpbmcgOiA2ZW0gMCAwIDA7XHJcbiAgICAgICAgaGVpZ2h0IDogMzQwcHg7IFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc2tpbGxzIC5jb250YWluZXIgXHJcbiAgICAgIHtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY2FyZF9za2lsbCBcclxuICAgICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgICAgICAgY29sb3IgOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgICB3aWR0aCA6IDM0MHB4O1xyXG4gICAgICAgIGhlaWdodCA6IDkwcHg7XHJcbiAgICAgICAgcGFkZGluZyA6IDFlbSA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogOHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggLTRweCByZ2JhKDAsMCwwLC41KTtcclxuICAgICAgICBkaXNwbGF5IDogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyA4MHB4IDFmcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tIDogMS41ZW07XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmNhcmRfc2tpbGwgaDMsLmNhcmRfc2tpbGwgcFxyXG4gICAgICB7XHJcbiAgICAgICAgbWFyZ2luOjBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmNhcmRfc2tpbGwgaDMgXHJcbiAgICAgIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbSA6IC40ZW1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnV4XHJcbiAgICAgIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0IDogMTAwcHhcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJvY2tldFxyXG4gICAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OjQwcHg7XHJcbiAgICAgICAgYm90dG9tOjIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hYm91dF9tZSBcclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmFib3V0X21lIGgyIFxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAuYWJvdXRfZGVzY3JpcHRpb24gXHJcbiAgICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgIGNvbG9yIDogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgcGFkZGluZyA6IDFlbTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiA4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCAtNHB4IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuYWJvdXRfZGVzY3JpcHRpb24gcDpudGgtb2YtdHlwZSgyKVxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wcm95ZWN0cyBcclxuICAgICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnByb3llY3RzIGgyIFxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHJveWVjdHNfY29udGFpbmVyXHJcbiAgICAgIHtcclxuICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jYXJkX3Byb3llY3QgXHJcbiAgICAgIHtcclxuICAgICAgICB3aWR0aCA6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodCA6IDMwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgIG1hcmdpbiA6IDAgMWVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggLTRweCByZ2JhKDAsMCwwLC41KTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5jYXJkX3Byb3llY3QgaW1nIFxyXG4gICAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY2FyZF9wcm95ZWN0OmhvdmVyIGltZyBcclxuICAgICAge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyIFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVpZ2h0IDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTkyMDQyO1xyXG4gICAgICAgIGNvbG9yIDogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3RlciBwIFxyXG4gICAgICB7XHJcbiAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9tZWRpYSBxdWVyaWVzXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxMjQwcHgpXHJcbiAgICAgIHtcclxuICAgICAgICAuY29udGFpbmVyIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hcmdpbiA6IDAgMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTAwcHgpXHJcbiAgICAgIHtcclxuXHJcbiAgICAgICAgLmNhcmRfZmxvYXQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd2lkdGggOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQgOiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgOjE5MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvY2tldFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgIHJpZ2h0OjQwcHg7XHJcbiAgICAgICAgICBib3R0b206LTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweClcclxuICAgICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5oZXJvIGgyIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNjIwcHgpXHJcbiAgICAgIHtcclxuXHJcbiAgICAgICAgLmhlcm8gaDIgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH0gIFxyXG5cclxuICAgICAgICAuc2tpbGxzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm95ZWN0c19jb250YWluZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkX3Byb3llY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgICB3aWR0aCA6IDMwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0IDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZF9mbG9hdCBcclxuICAgICAgICB7XHJcbiAgICAgICAgd2lkdGggOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQgOiAxNTBweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcCA6IDgwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAgMCBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1MDBweClcclxuICAgICAge1xyXG4gICAgICAgIC5jYXJkX3NraWxsIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXggXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnJvY2tldCBcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgIGxlZnQgOiAwO1xyXG4gICAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgICBtYXJnaW4gOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDgwcHgpXHJcbiAgICAgIHtcclxuXHJcbiAgICAgICAgLmNhcmRfZmxvYXQgXHJcbiAgICAgICAge1xyXG4gICAgICAgIHdpZHRoIDogMTQwcHg7XHJcbiAgICAgICAgaGVpZ2h0IDogMTQwcHg7XHJcbiAgICAgICAgdG9wIDogMTEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZF9wcm95ZWN0IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAzNjBweClcclxuICAgICAge1xyXG4gICAgICAgIC5yb2NrZXRcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICByaWdodDo0MHB4O1xyXG4gICAgICAgICAgYm90dG9tOjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGBcclxuICAgIH08L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIl19 */\n/*@ sourceURL=C:\\Users\\Alex\\Documents\\Git\\UnicornioWebChallenge\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/general/layout.js":
/*!******************************************!*\
  !*** ./src/components/general/layout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Alex\\Documents\\Git\\UnicornioWebChallenge\\src\\components\\general\\layout.js";


 // import '../../../styles/layout.css'
// import '../../../styles/general.css'

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-3094301704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Page"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-3094301704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap",
    rel: "stylesheet",
    className: "jsx-3094301704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3094301704" + " " + (props.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3094301704",
    __self: this
  }, "body{margin :0;background-color:#F7FCFF;font-family:'Dosis',sans-serif;}:root{--background-primary :#FCFCFC;--text-color :#1A1A4C;}.layout_container{display :grid;grid-template-columns :80px 1fr;grid-template-rows :auto;grid-template-areas:\"sidebar content\";height :100vh;}@media screen and (max-width :768px){.layout_container{grid-template-columns :1fr;grid-template-rows :80px auto;grid-template-areas:\"sidebar\"  \"content\";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWxleFxcRG9jdW1lbnRzXFxHaXRcXFVuaWNvcm5pb1dlYkNoYWxsZW5nZVxcc3JjXFxjb21wb25lbnRzXFxnZW5lcmFsXFxsYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNLEFBSWlCLEFBT29CLEFBS2hCLEFBV2EsVUF0QkYsSUFZTyxhQVdGLEdBaEJSLEtBTlUsV0FZUCxNQUwzQixLQWlCK0IsU0F2Qi9CLEtBWXdDLDJCQVl4QyxXQVhnQixjQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWxleFxcRG9jdW1lbnRzXFxHaXRcXFVuaWNvcm5pb1dlYkNoYWxsZW5nZVxcc3JjXFxjb21wb25lbnRzXFxnZW5lcmFsXFxsYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0ZyYWdtZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9sYXlvdXQuY3NzJ1xyXG4vLyBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9nZW5lcmFsLmNzcydcclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5QYWdlPC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RG9zaXM6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiBcclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxyXG4gICAge1xyXG4gICAgICBwcm9wcy5jaGlsZHJlblxyXG4gICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgIHsgYFxyXG4gICAgYm9keSBcclxuICAgIHtcclxuICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RkNGRjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDpyb290IFxyXG4gICAge1xyXG4gICAgICAtLWJhY2tncm91bmQtcHJpbWFyeSA6ICNGQ0ZDRkM7XHJcbiAgICAgIC0tdGV4dC1jb2xvciA6ICMxQTFBNEM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sYXlvdXRfY29udGFpbmVye1xyXG4gICAgICBkaXNwbGF5IDogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIDogODBweCAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93cyA6IGF1dG87XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZWJhciBjb250ZW50XCI7XHJcbiAgICAgIGhlaWdodCA6IDEwMHZoO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpXHJcbiAgICB7XHJcbiAgXHJcbiAgICAubGF5b3V0X2NvbnRhaW5lcntcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIDogMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3MgOiA4MHB4IGF1dG87XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZWJhclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgfVxyXG4gICAgYFxyXG4gICAgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=C:\\Users\\Alex\\Documents\\Git\\UnicornioWebChallenge\\src\\components\\general\\layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Alex\\Documents\\Git\\UnicornioWebChallenge\\src\\components\\sidebar.js";



var Sidebar = function Sidebar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-648197646" + " " + "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/icons/unicorn.png",
    alt: "",
    className: "jsx-648197646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-648197646" + " " + "social_networks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-648197646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-648197646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-648197646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-648197646",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "648197646",
    __self: this
  }, ".sidebar.jsx-648197646{grid-area:sidebar;background-color :var(--background-primary);height :500px;box-shadow :3px 5px 9px -5px rgba(0,0,0,.4);padding :1em;box-sizing:border-box;position:relative;z-index:1;}.sidebar.jsx-648197646 img.jsx-648197646{width :100%;}.social_networks.jsx-648197646{position:absolute;bottom:0;left:0;right:0;padding:1em 0;box-sizing:border-box;}.social_networks.jsx-648197646 a.jsx-648197646{display:block;height:50px;width :50px;background-position:center;background-repeat:no-repeat;margin:auto;}.social_networks.jsx-648197646 a.jsx-648197646:nth-of-type(1){background-image:url(/static/icons/instagram.png);}.social_networks.jsx-648197646 a.jsx-648197646:nth-of-type(2){background-image:url(/static/icons/whatsapp.png);}.social_networks.jsx-648197646 a.jsx-648197646:nth-of-type(3){background-image:url(/static/icons/youtube.png);}.social_networks.jsx-648197646 a.jsx-648197646:nth-of-type(4){background-image:url(/static/icons/twitter.png);}@media screen and (max-width :768px){.sidebar.jsx-648197646{height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.sidebar.jsx-648197646 img.jsx-648197646{width:auto;}.social_networks.jsx-648197646{position:relative;width:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWxleFxcRG9jdW1lbnRzXFxHaXRcXFVuaWNvcm5pb1dlYkNoYWxsZW5nZVxcc3JjXFxjb21wb25lbnRzXFxzaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNVLEFBSStCLEFBWU4sQUFLTSxBQVVKLEFBVW9DLEFBSUQsQUFJRCxBQUlBLEFBT2xDLEFBU2YsQUFJcUIsV0FKcEIsQ0FwREYsQUE0Q2lCLEVBN0JILElBM0JnQyxBQWlCbkMsQUFvREssUUF6Q0YsQ0FWTCxHQW9EUSxJQW5EUixJQVVvQixJQVRiLE1BeUJoQixBQUlBLENBUkEsQ0FKQSxNQWhCd0IsTUFwQlIsR0E2QmMsV0E1QmdCLEVBb0I5QyxRQW1DdUIsT0ExQlQsV0F3Q2EsQ0F2QzNCLGVBN0JlLGFBQ1Msc0JBQ0osa0JBQ1IsTUFxRFgsSUFwREQsb0JBaUVFLDJGQWJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWxleFxcRG9jdW1lbnRzXFxHaXRcXFVuaWNvcm5pb1dlYkNoYWxsZW5nZVxcc3JjXFxjb21wb25lbnRzXFxzaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ljb25zL3VuaWNvcm4ucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbF9uZXR3b3Jrc1wiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICAuc2lkZWJhciBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgaGVpZ2h0IDogNTAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3cgOiAzcHggNXB4IDlweCAtNXB4IHJnYmEoMCwwLDAsLjQpO1xyXG4gICAgICAgICAgICBwYWRkaW5nIDogMWVtO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNpZGViYXIgaW1nIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY2lhbF9uZXR3b3JrcyBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zb2NpYWxfbmV0d29ya3MgYSBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgd2lkdGggOiA1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc29jaWFsX25ldHdvcmtzIGE6bnRoLW9mLXR5cGUoMSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaWNvbnMvaW5zdGFncmFtLnBuZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc29jaWFsX25ldHdvcmtzIGE6bnRoLW9mLXR5cGUoMilcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaWNvbnMvd2hhdHNhcHAucG5nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zb2NpYWxfbmV0d29ya3MgYTpudGgtb2YtdHlwZSgzKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pY29ucy95b3V0dWJlLnBuZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc29jaWFsX25ldHdvcmtzIGE6bnRoLW9mLXR5cGUoNClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaWNvbnMvdHdpdHRlci5wbmcpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLnNpZGViYXIgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2lkZWJhciBpbWcgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0b1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc29jaWFsX25ldHdvcmtzIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyIl19 */\n/*@ sourceURL=C:\\Users\\Alex\\Documents\\Git\\UnicornioWebChallenge\\src\\components\\sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alex\Documents\Git\UnicornioWebChallenge\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map