"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Button.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// packages/shared-ui/src/components/Button.js

// We'll add basic styling

var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant;
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: type,
    className: "shared-button shared-button-".concat(variant),
    onClick: onClick
  }, children);
};
var _default = exports["default"] = Button;