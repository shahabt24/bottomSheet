"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _draggableView = _interopRequireDefault(require("../draggableView"));

var _hooks = require("../../hooks");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AnimatedFlatList = _reactNativeReanimated.default.createAnimatedComponent(_reactNative.FlatList);

const BottomSheetFlatListComponent = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  // props
  const {
    focusHook: useFocusHook = _react.useEffect,
    ...rest
  } = props; // refs

  const nativeGestureRef = (0, _react.useRef)(null); // hooks

  const {
    scrollableRef,
    handleScrollEvent,
    handleSettingScrollable
  } = (0, _hooks.useScrollableInternal)('FlatList');
  const {
    enabled,
    rootTapGestureRef,
    decelerationRate
  } = (0, _hooks.useBottomSheetInternal)(); // effects
  // @ts-ignore

  (0, _react.useImperativeHandle)(ref, () => scrollableRef.current.getNode());
  useFocusHook(handleSettingScrollable); // render

  return /*#__PURE__*/_react.default.createElement(_draggableView.default, {
    nativeGestureRef: nativeGestureRef,
    gestureType: "CONTENT",
    style: _styles.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.NativeViewGestureHandler, {
    ref: nativeGestureRef,
    enabled: enabled,
    waitFor: rootTapGestureRef
  }, /*#__PURE__*/_react.default.createElement(AnimatedFlatList, _extends({}, rest, {
    // @ts-ignore
    ref: scrollableRef,
    overScrollMode: "never",
    bounces: false,
    decelerationRate: decelerationRate,
    scrollEventThrottle: 1,
    onScrollBeginDrag: handleScrollEvent
  }))));
});
const BottomSheetFlatList = /*#__PURE__*/(0, _react.memo)(BottomSheetFlatListComponent, _lodash.default);
var _default = BottomSheetFlatList;
exports.default = _default;
//# sourceMappingURL=FlatList.js.map