function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class BottomSheetScrollViewType extends BottomSheetScrollViewBase {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "scrollWithoutAnimationTo", void 0);
  }
  /**
   * @deprecated Use scrollTo instead
   */


}
//# sourceMappingURL=types.d.js.map