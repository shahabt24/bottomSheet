import { useCallback, useRef, useMemo } from 'react';
import { findNodeHandle } from 'react-native';
import { event, useCode, onChange, set, call } from 'react-native-reanimated';
import { useValue } from 'react-native-redash';
import { useBottomSheetInternal } from '../hooks/useBottomSheetInternal';
export const useScrollableInternal = type => {
  // refs
  const scrollableContentOffsetYRef = useRef(0);
  const scrollableContentOffsetY = useValue(0);
  const scrollableRef = useRef(null); // hooks

  const {
    scrollableContentOffsetY: _scrollableContentOffsetY,
    setScrollableRef,
    removeScrollableRef
  } = useBottomSheetInternal(); // callbacks

  const handleScrollEvent = useMemo(() => event([{
    nativeEvent: {
      contentOffset: {
        y: scrollableContentOffsetY
      }
    }
  }]), // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  const handleSettingScrollable = useCallback(() => {
    _scrollableContentOffsetY.setValue(scrollableContentOffsetYRef.current);

    const id = findNodeHandle(scrollableRef.current);

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

  useCode(() => onChange(scrollableContentOffsetY, [set(_scrollableContentOffsetY, scrollableContentOffsetY), call([scrollableContentOffsetY], args => {
    scrollableContentOffsetYRef.current = args[0];
  })]), []);
  return {
    scrollableRef,
    handleScrollEvent,
    handleSettingScrollable
  };
};
//# sourceMappingURL=useScrollableInternal.js.map