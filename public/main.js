"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _gsap = _interopRequireDefault(require("gsap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Screen = /*#__PURE__*/_createClass(function Screen(_ref) {
  var width = _ref.width,
      height = _ref.height;

  _classCallCheck(this, Screen);

  _defineProperty(this, "isMobile", function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  });

  this.screen = {
    width: width,
    height: height
  };
});

var ScreenMouseTracker = /*#__PURE__*/function (_Screen) {
  _inherits(ScreenMouseTracker, _Screen);

  var _super = _createSuper(ScreenMouseTracker);

  function ScreenMouseTracker(_ref2) {
    var _this;

    var width = _ref2.width,
        height = _ref2.height;

    _classCallCheck(this, ScreenMouseTracker);

    _this = _super.call(this, {
      width: width,
      height: height
    });

    _defineProperty(_assertThisInitialized(_this), "setMouseCoords", function (event) {
      _this.mouse.x = event.clientX;
      _this.mouse.y = event.clientY;
    });

    _this.mouse = {
      x: 0,
      y: 0
    };
    _this.mouseStored = _objectSpread({}, _this.mouse);
    return _this;
  }

  _createClass(ScreenMouseTracker, [{
    key: "trackMousePosition",
    value: function trackMousePosition() {
      window.addEventListener("mousemove", this.setMouseCoords);
    }
  }]);

  return ScreenMouseTracker;
}(Screen);

var ScreenWithMouseStored = /*#__PURE__*/function (_ScreenMouseTracker) {
  _inherits(ScreenWithMouseStored, _ScreenMouseTracker);

  var _super2 = _createSuper(ScreenWithMouseStored);

  function ScreenWithMouseStored(_ref3) {
    var _this2;

    var width = _ref3.width,
        height = _ref3.height;

    _classCallCheck(this, ScreenWithMouseStored);

    _this2 = _super2.call(this, {
      width: width,
      height: height
    });

    _defineProperty(_assertThisInitialized(_this2), "isStoredMousePosition", function () {
      return _this2.mouseStored.x === _this2.mouse.x && _this2.mouseStored.y === _this2.mouse.y;
    });

    _this2.mouseStored = _objectSpread({}, _this2.mouse);
    return _this2;
  }

  _createClass(ScreenWithMouseStored, [{
    key: "updateMouseStored",
    value: function updateMouseStored(_ref4) {
      var x = _ref4.x,
          y = _ref4.y;
      this.mouseStored = {
        x: x,
        y: y
      };
    }
  }]);

  return ScreenWithMouseStored;
}(ScreenMouseTracker);

var Svg = /*#__PURE__*/_createClass(function Svg(svg) {
  var _this3 = this;

  _classCallCheck(this, Svg);

  _defineProperty(this, "remove", function () {
    _this3.svg.remove();
  });

  this.svg = svg;
});

var SvgCircle = /*#__PURE__*/function (_Svg) {
  _inherits(SvgCircle, _Svg);

  var _super3 = _createSuper(SvgCircle);

  function SvgCircle(svg) {
    var _this4;

    _classCallCheck(this, SvgCircle);

    _this4 = _super3.call(this, svg);

    _defineProperty(_assertThisInitialized(_this4), "setupSvgViewBox", function (_ref5) {
      var width = _ref5.width,
          height = _ref5.height;

      _this4.svg.setAttribute("viewBox", "0 0 ".concat(width, " ").concat(height));
    });

    _defineProperty(_assertThisInitialized(_this4), "setupCircleTranformOrigin", function (transformOrigin) {
      _gsap.default.set(_this4.circle, {
        transformOrigin: transformOrigin
      });
    });

    _defineProperty(_assertThisInitialized(_this4), "setupSvg", function (_ref6) {
      var width = _ref6.width,
          height = _ref6.height,
          transformOrigin = _ref6.transformOrigin;

      _this4.setupSvgViewBox({
        width: width,
        height: height
      });

      _this4.setupCircleTranformOrigin(transformOrigin);
    });

    _this4.circle = svg.querySelector("circle");
    return _this4;
  }

  return _createClass(SvgCircle);
}(Svg);

var BaseViewSetup = /*#__PURE__*/_createClass(function BaseViewSetup(_ref7) {
  var _this5 = this;

  var screenInstance = _ref7.screenInstance,
      svgCircleInstance = _ref7.svgCircleInstance;

  _classCallCheck(this, BaseViewSetup);

  _defineProperty(this, "setup", function () {
    // Remove svg for mobile
    if (_this5.screenInstance.isMobile()) {
      return _this5.svgCircleInstance.remove();
    }

    var _this5$screenInstance = _this5.screenInstance.screen,
        width = _this5$screenInstance.width,
        height = _this5$screenInstance.height;
    var svgConfig = {
      width: width,
      height: height,
      transformOrigin: "50% 50%"
    };

    _this5.svgCircleInstance.setupSvg(_objectSpread({}, svgConfig));

    _this5.screenInstance.trackMousePosition();
  });

  this.screenInstance = screenInstance;
  this.svgCircleInstance = svgCircleInstance;
  this.setup();
});

var Animation = /*#__PURE__*/function (_BaseViewSetup) {
  _inherits(Animation, _BaseViewSetup);

  var _super4 = _createSuper(Animation);

  function Animation(_ref8) {
    var _this6;

    var screenInstance = _ref8.screenInstance,
        svgCircleInstance = _ref8.svgCircleInstance;

    _classCallCheck(this, Animation);

    _this6 = _super4.call(this, {
      screenInstance: screenInstance,
      svgCircleInstance: svgCircleInstance
    });

    _defineProperty(_assertThisInitialized(_this6), "runAnimation", function () {
      _gsap.default.ticker.add(function () {
        // stop animation
        if (_this6.screenInstance.isStoredMousePosition()) return;
        var circle = _this6.svgCircleInstance.circle;
        var mouse = _this6.screenInstance.mouse;
        var animationConfig = {
          x: mouse.x,
          y: mouse.y,
          ease: Elastic.easeOut.config(1.25, 1),
          duration: 0.5,
          delay: 0.1,
          opacity: 1
        };

        _gsap.default.to(circle, animationConfig);

        _this6.screenInstance.updateMouseStored(_objectSpread({}, mouse));
      });
    });

    _this6.runAnimation();

    return _this6;
  }

  return _createClass(Animation);
}(BaseViewSetup);

var screenInstance = new ScreenWithMouseStored({
  width: window.innerWidth,
  height: window.innerHeight
});
var svgCircleInstance = new SvgCircle(document.querySelector("svg"));
new Animation({
  screenInstance: screenInstance,
  svgCircleInstance: svgCircleInstance
});