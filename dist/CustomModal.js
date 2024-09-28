"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./customModal.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function CustomModal(_ref) {
  let {
    message,
    isVisible = true,
    onClose
  } = _ref;
  const [showModal, setShowModal] = (0, _react.useState)(isVisible);
  (0, _react.useEffect)(() => {
    setShowModal(isVisible);
  }, [isVisible]);
  const handleEscape = () => {
    setShowModal(false);
    if (onClose) {
      onClose();
    }
  };
  if (!showModal) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "customModal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customModal__box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customModal__box__message"
  }, message), /*#__PURE__*/_react.default.createElement("div", {
    className: "customModal__box__escape",
    onClick: handleEscape
  }, "Ok")));
}
var _default = exports.default = CustomModal;