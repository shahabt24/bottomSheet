"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollableInternal = void 0;

var _react = require("react");

var _reactNative = require("react-native");

var _reactNativeReanimated = require("react-native-reanimated");

var _reactNativeRedash = require("react-native-redash");

var _useBottomSheetInternal = require("../hooks/useBottomSheetInternal");

const useScrollableInternal = type => {
  // refs
  const scrollableContentOffsetYRef = (0, _react.useRef)(0);
  const scrollableContentOffsetY = (0, _reactNativeRedash.useValue)(0);
  const scrollableRef = (0, _react.useRef)(null); // hooks

  const {
    scrollableContentOffsetY: _scrollableContentOffsetY,
    setScrollableRef,
    removeScrollableRef
  } = (0, _useBottomSheetInternal.useBottomSheetInternal)(); // callbacks

  const handleScrollEvent = (0, _react.useMemo)(() => (0, _reactNativeReanimated.event)([{
    nativeEvent: {
      contentOffset: {
        y: scrollableContentOffsetY
      }
    }
  }]), // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  const handleSettingScrollable = (0, _react.useCallback)(() => {
    _scrollableContentOffsetY.setValue(scrollableContentOffsetYRef.current);

    const id = (0, _reactNative.findNodeHandle)(scrollableRef.current);

    if (id) {
      setScrollableRef({
        id: id,
        type,
        // @ts-ignore
        node: scrollableRef.current.getNode()
      });
    } else {
      console.warn("Couldn't find the scrollable node handle id!");
    }

    return () => {
      removeScrollableRef(scrollableRef);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // effects

  (0, _reactNativeReanimated.useCode)(() => (0, _reactNativeReanimated.onChange)(scrollableContentOffsetY, [(0, _reactNativeReanimated.set)(_scrollableContentOffsetY, scrollableContentOffsetY), (0, _reactNativeReanimated.call)([scrollableContentOffsetY], args => {
    scrollableContentOffsetYRef.current = args[0];
  })]), []);
  return {
    scrollableRef,
    handleScrollEvent,
    handleSettingScrollable
  };
};

exports.useScrollableInternal = useScrollableInternal;
//# sourceMappingURL=useScrollableInternal.js.map